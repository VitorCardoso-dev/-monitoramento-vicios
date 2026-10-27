const { JSDOM } = require('jsdom');
const fs = require('fs');
const root = require('path').join(__dirname, '..') + '/';
let html = fs.readFileSync(root + 'index.html', 'utf8')
  .replace(/<link[^>]*(googleapis|gstatic|stylesheet|shortcut)[^>]*>/g, '')
  .replace(/<script src="recovery-app.js"><\/script>/, '');
const js = fs.readFileSync(root + 'recovery-app.js', 'utf8');

let pass = 0, fail = 0;
function ok(cond, name, extra) { if (cond) { pass++; console.log('  ✔', name); } else { fail++; console.log('  ✘', name, extra ?? ''); } }

function boot(seed = {}, opts = {}) {
  const dom = new JSDOM(html, { url: 'http://localhost/', runScripts: 'dangerously', pretendToBeVisual: true,
    beforeParse(w) {
      for (const [k, v] of Object.entries(seed)) w.localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
      w.confirm = () => true;
      w.HTMLElement.prototype.focus = function () {};
      w.__errors = [];
      w.addEventListener('error', e => w.__errors.push(String(e.message)));
    } });
  const w = dom.window;
  const s = w.document.createElement('script');
  s.textContent = js;
  w.document.body.appendChild(s);
  w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
  return w;
}
const DAY = 86400000;
const day = n => { const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() + n); return d.toISOString(); };
const state = o => ({ startDate: day(-300), stumbles: [], journals: [], dailyLog: [], milestonesShown: [], ...o });
const cleans = (from, to) => { const a = []; for (let i = from; i <= to; i++) a.push({ date: day(i), type: 'clean' }); return a; };
const txt = (w, id) => w.document.getElementById(id).textContent;
const seedWith = (st, extra = {}) => ({ recoveryTrackerState: st, userRecoveryAddiction: 'alcool', userRecoveryAddictionName: 'Álcool', ...extra });

console.log('TZ =', process.env.TZ);

console.log('\n[1] Marcos pulados por preenchimento retroativo (bug original)');
let w = boot(seedWith(state({ dailyLog: cleans(-9, -1) })));
ok(txt(w, 'cleanDaysCounter') === '9', 'sequência atual = 9 (hoje ainda sem registro)', txt(w, 'cleanDaysCounter'));
ok(w.document.getElementById('milestoneModal').classList.contains('active'), 'modal de marco abriu');
ok(txt(w, 'milestoneTitle').startsWith('7 Dias'), 'celebra o maior marco alcançado (7)', txt(w, 'milestoneTitle'));
ok(JSON.stringify(w.eval('appState.milestonesShown')) === '[1,3,7]', 'marca 1, 3 e 7 como vistos', JSON.stringify(w.eval('appState.milestonesShown')));

console.log('\n[2] Sequência quebrada por tropeço');
w = boot(seedWith(state({ dailyLog: cleans(-10, -6).concat(cleans(-4, -1)), stumbles: [{ date: day(-5), environment: 'casa', note: '' }] })));
ok(txt(w, 'cleanDaysCounter') === '4', 'sequência atual = 4', txt(w, 'cleanDaysCounter'));
ok(txt(w, 'bestStreakValue') === '5', 'melhor sequência = 5', txt(w, 'bestStreakValue'));
ok(txt(w, 'totalCleanValue') === '9', 'total de dias limpos = 9', txt(w, 'totalCleanValue'));
ok(txt(w, 'successRateValue') === '90%', 'taxa de sucesso = 90%', txt(w, 'successRateValue'));
w.document.getElementById('markCleanDayBtn').click();
ok(txt(w, 'cleanDaysCounter') === '5', 'marcar hoje: sequência = 5');
ok(txt(w, 'bestStreakValue') === '5', 'melhor sequência continua 5');

console.log('\n[3] Tropeço hoje zera a sequência atual, mantém a melhor');
w = boot(seedWith(state({ dailyLog: cleans(-8, -1), stumbles: [{ date: day(0), environment: 'casa', note: '' }] })));
ok(txt(w, 'cleanDaysCounter') === '0', 'sequência atual = 0', txt(w, 'cleanDaysCounter'));
ok(txt(w, 'bestStreakValue') === '8', 'melhor sequência = 8', txt(w, 'bestStreakValue'));

console.log('\n[4] XSS em anotações e tropeços');
w = boot(seedWith(state()));
const evil = '<img src=x onerror="window.__xss=1"><b>negrito</b>';
w.document.getElementById('journalInput').value = evil;
w.document.getElementById('saveJournalBtn').click();
w.document.getElementById('logStumbleBtn').click();
w.document.getElementById('stumbleNote').value = evil;
w.document.getElementById('confirmStumbleBtn').click();
const hist = w.document.getElementById('historyList');
ok(!hist.querySelector('img') && !hist.querySelector('b'), 'nenhuma tag injetada no histórico');
ok(hist.textContent.includes('<img src=x'), 'texto digitado aparece literalmente');
ok(w.__xss === undefined, 'script não executou');

console.log('\n[5] Apagar item do histórico');
const before = hist.querySelectorAll('.history-item').length;
hist.querySelector('.btn-delete-entry').click();
ok(hist.querySelectorAll('.history-item').length === before - 1, `histórico ${before} → ${before - 1}`);
ok(w.eval('appState.journals.length + appState.stumbles.length') === before - 1, 'estado em memória atualizado');
ok(JSON.parse(w.localStorage.getItem('recoveryTrackerState')).journals.length + JSON.parse(w.localStorage.getItem('recoveryTrackerState')).stumbles.length === before - 1, 'localStorage atualizado');

console.log('\n[6] Dado corrompido e estado no formato antigo');
w = boot({ recoveryTrackerState: '{isso não é json', userRecoveryAddiction: 'tabaco', userRecoveryAddictionName: 'Tabaco' });
ok(w.__errors.length === 0, 'app inicia sem erro', w.__errors.join('|'));
ok(w.localStorage.getItem('recoveryTrackerState.corrompido') === '{isso não é json', 'cópia do dado corrompido preservada');
w = boot(seedWith({ startDate: day(-5), cleanDays: 2, totalDays: 6, stumbles: [], journals: [], dailyLog: [{ date: day(-1), type: 'clean' }], lastCheckedDate: day(0) }));
ok(w.__errors.length === 0 && txt(w, 'cleanDaysCounter') === '1', 'estado antigo (sem milestonesShown) carrega', w.__errors.join('|'));

console.log('\n[7] Exportar → resetar → importar');
w = boot(seedWith(state({ dailyLog: cleans(-3, -1), journals: [{ date: day(-1), content: 'oi' }] })));
let captured = null;
w.URL.createObjectURL = b => { captured = b; return 'blob:x'; };
w.HTMLAnchorElement.prototype.click = function () {};
w.document.getElementById('exportDataBtn').click();
ok(captured && captured.size > 100, 'backup gerado');
new Promise(res => { const fr = new w.FileReader(); fr.onload = () => res(fr.result); fr.readAsText(captured); }).then(async text => {
  const data = JSON.parse(text);
  ok(data.app === 'recovery-tracker' && data.addiction.type === 'alcool' && data.state.dailyLog.length === 3, 'conteúdo do backup correto');
  const w2 = boot({});
  w2.eval('window.location.reload = () => {}');
  const file = new w2.File([text], 'b.json', { type: 'application/json' });
  await new Promise(r => { const orig = w2.localStorage.setItem.bind(w2.localStorage); w2.importData(file); setTimeout(r, 200); });
  const st = JSON.parse(w2.localStorage.getItem('recoveryTrackerState'));
  ok(st.dailyLog.length === 3 && st.journals[0].content === 'oi', 'importação restaurou os dados');
  ok(w2.localStorage.getItem('userRecoveryAddiction') === 'alcool', 'importação restaurou o tipo de vício');
  const w3 = boot({});
  const bad = new w3.File(['{"foo":1}'], 'x.json');
  w3.importData(bad);
  await new Promise(r => setTimeout(r, 100));
  ok(!w3.localStorage.getItem('recoveryTrackerState').includes('"foo"'), 'arquivo que não é backup é rejeitado');

  console.log('\n[8] Calendário mensal e edição retroativa');
  const fmt = d => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
  const dateOf = n => { const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() + n); return d; };
  // Acha o botão do dia; se estiver em mês anterior, navega com a seta.
  const dayBtn = (w, n) => {
    for (let i = 0; i < 6; i++) {
      const b = [...w.document.querySelectorAll('#calendarGrid button')].find(x => x.getAttribute('aria-label').startsWith(fmt(dateOf(n)) + ':'));
      if (b) return b;
      w.document.getElementById('prevMonthBtn').click();
    }
    return null;
  };
  w = boot(seedWith(state({ dailyLog: cleans(-3, -1), stumbles: [{ date: day(-2), environment: 'casa', note: '' }] })));
  const now = new Date();
  const dim = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const grid = w.document.getElementById('calendarGrid');
  ok(w.document.querySelectorAll('.calendar-weekdays span').length === 7, 'cabeçalho com 7 dias da semana');
  ok(grid.querySelectorAll('button.calendar-day').length === dim, `mês atual tem ${dim} botões de dia`);
  ok(grid.querySelectorAll('.calendar-blank').length === new Date(now.getFullYear(), now.getMonth(), 1).getDay(), 'dia 1 alinhado ao dia da semana correto');
  const label = w.document.getElementById('calendarMonthLabel').textContent;
  ok(/\d{4}$/.test(label) && label[0] === label[0].toUpperCase(), 'título do mês em pt-BR', label);
  ok(w.document.getElementById('nextMonthBtn').disabled, 'seta "próximo" desabilitada no mês atual');
  ok(w.document.getElementById('todayMonthBtn').hidden, 'botão "voltar para hoje" oculto no mês atual');
  const futureBtns = [...grid.querySelectorAll('button.calendar-day')].filter(b => b.getAttribute('aria-label').includes('ainda não chegou'));
  ok(futureBtns.length === dim - now.getDate() && futureBtns.every(b => b.disabled), 'dias futuros ficam bloqueados', futureBtns.length);
  if (futureBtns[0]) { futureBtns[0].click(); ok(!w.document.getElementById('dayEditModal').classList.contains('active'), 'clicar em dia futuro não abre o editor'); }
  const todayBtn = [...grid.querySelectorAll('button.calendar-day')].find(b => b.classList.contains('day-today'));
  ok(todayBtn && todayBtn.textContent.trim() === String(now.getDate()), 'hoje destacado');
  ok(/dias? limpos?/.test(w.document.getElementById('calendarSummary').textContent), 'resumo do mês exibido', w.document.getElementById('calendarSummary').textContent);

  const sb = dayBtn(w, -2);
  ok(sb.textContent.includes('✕') && dayBtn(w, -1).textContent.includes('✓'), 'marcas ✓/✕ além da cor');
  sb.click();
  ok(w.document.getElementById('dayEditModal').classList.contains('active'), 'clicar no dia abre o editor');
  w.document.getElementById('btnEditClean').click();
  ok(w.eval('appState.stumbles.length') === 0 && w.eval('appState.currentStreak') === 3, 'marcar limpo substitui o tropeço e a sequência volta a 3', w.eval('appState.currentStreak'));

  console.log('\n[8b] Navegação entre meses');
  // Estado com histórico em meses anteriores: datas fixas relativas ao 1º do mês atual
  const m0 = new Date(now.getFullYear(), now.getMonth(), 1);
  const at = (monthsBack, d) => new Date(m0.getFullYear(), m0.getMonth() - monthsBack, d).toISOString();
  w = boot(seedWith({ startDate: at(2, 3), stumbles: [{ date: at(1, 10), environment: 'casa', note: '' }], journals: [],
    dailyLog: [{ date: at(1, 5), type: 'clean' }, { date: at(1, 6), type: 'clean' }, { date: at(2, 20), type: 'clean' }], milestonesShown: [1,3,7,14,21,30,60,90,180,365] }));
  const lbl = () => w.document.getElementById('calendarMonthLabel').textContent;
  const cur = lbl();
  w.document.getElementById('prevMonthBtn').click();
  const prevLabel = lbl();
  ok(prevLabel !== cur, 'seta "anterior" muda o mês', `${cur} → ${prevLabel}`);
  ok(w.document.getElementById('calendarSummary').textContent === '2 dias limpos · 1 tropeço', 'resumo do mês anterior correto', w.document.getElementById('calendarSummary').textContent);
  const lab = n => [...w.document.querySelectorAll('#calendarGrid button')].find(b => b.getAttribute('aria-label').startsWith(fmt(new Date(m0.getFullYear(), m0.getMonth() - 1, n)) + ':')).getAttribute('aria-label');
  ok(lab(5).includes('dia limpo') && lab(10).includes('tropeço') && lab(11).includes('sem registro'), 'status dos dias do mês anterior corretos');
  ok(!w.document.getElementById('todayMonthBtn').hidden && !w.document.getElementById('nextMonthBtn').disabled, '"voltar para hoje" e seta "próximo" ativos');
  w.document.getElementById('prevMonthBtn').click();
  ok(w.document.getElementById('prevMonthBtn').disabled, 'seta "anterior" bloqueia no mês de início da jornada');
  w.document.getElementById('prevMonthBtn').click();
  ok(lbl() !== cur && lbl() !== prevLabel, 'não passa do mês de início', lbl());
  const before3 = [...w.document.querySelectorAll('#calendarGrid button')].find(b => b.getAttribute('aria-label').startsWith(fmt(new Date(m0.getFullYear(), m0.getMonth() - 2, 2)) + ':'));
  ok(before3 && before3.disabled, 'dias antes do início ficam bloqueados');
  // deslize: direita = mês anterior(já no limite), esquerda = próximo
  const touch = (type, x, y) => { const e = new w.Event(type, { bubbles: true }); const t = [{ clientX: x, clientY: y }]; e.touches = t; e.changedTouches = t; w.document.getElementById('calendarGrid').dispatchEvent(e); };
  const atStart = lbl();
  touch('touchstart', 200, 100); touch('touchend', 80, 110);
  ok(lbl() !== atStart, 'deslizar para a esquerda avança o mês', `${atStart} → ${lbl()}`);
  touch('touchstart', 80, 100); touch('touchend', 200, 105);
  ok(lbl() === atStart, 'deslizar para a direita volta o mês');
  touch('touchstart', 200, 100); touch('touchend', 190, 100);
  ok(lbl() === atStart, 'deslize curto é ignorado');
  touch('touchstart', 200, 100); touch('touchend', 100, 260);
  ok(lbl() === atStart, 'rolagem vertical diagonal é ignorada');
  w.document.getElementById('nextMonthBtn').click(); w.document.getElementById('nextMonthBtn').click();
  ok(lbl() === cur && w.document.getElementById('nextMonthBtn').disabled, 'avança até o mês atual e para');
  w.document.getElementById('prevMonthBtn').click();
  w.document.getElementById('todayMonthBtn').click();
  ok(lbl() === cur, '"voltar para hoje" retorna ao mês atual');
  // edição retroativa num mês anterior mantém o mês exibido
  w.document.getElementById('prevMonthBtn').click();
  const d12 = [...w.document.querySelectorAll('#calendarGrid button')].find(b => b.getAttribute('aria-label').startsWith(fmt(new Date(m0.getFullYear(), m0.getMonth() - 1, 12)) + ':'));
  d12.click(); w.document.getElementById('btnEditClean').click();
  ok(lbl() === prevLabel, 'editar um dia antigo não pula para outro mês');
  ok(w.document.getElementById('calendarSummary').textContent === '3 dias limpos · 1 tropeço', 'resumo atualizado após edição', w.document.getElementById('calendarSummary').textContent);

  w = boot(seedWith(state({ dailyLog: cleans(-3, -1) })));
  const ic = [...w.document.querySelectorAll('button')].filter(b => !b.textContent.trim() && !b.getAttribute('aria-label') && !b.title);
  ok(ic.length === 0, 'nenhum botão só-ícone sem nome acessível', ic.length);
  ok([...w.document.querySelectorAll('.modal')].every(m => m.getAttribute('role') === 'dialog'), 'todos os modais com role="dialog"');
  ok(!w.document.querySelector('[onclick]'), 'sem onclick inline');

  console.log('\n[9] Modais: Esc, boas-vindas e conteúdo de segurança');
  w.document.getElementById('settingsBtn').click();
  w.document.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  ok(!w.document.getElementById('settingsModal').classList.contains('active'), 'Esc fecha configurações');
  const wn = boot({});
  wn.document.dispatchEvent(new wn.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  ok(wn.document.getElementById('welcomeModal').classList.contains('active'), 'boas-vindas não fecha com Esc sem escolha salva');
  ok([...w.document.querySelectorAll('.help-slot')].length === 3 && [...w.document.querySelectorAll('.help-slot')].every(e => e.textContent.includes('188')), 'ajuda (CVV 188) em 3 lugares');
  ok(w.document.getElementById('tipsContent').textContent.includes('abstinência pode ser perigosa'), 'dica de álcool alerta sobre abstinência');
  ok(!w.document.querySelector('script[src*="unpkg"]'), 'sem dependência externa de scripts');
  const sty = w.document.querySelector('.tip-card'); ok(!!sty, 'cards de dicas usam classe CSS (sem var(--) inexistente)');


  console.log('\n[10] Sequência longa atravessando horário de verão');
  w = boot(seedWith(state({ startDate: day(-400), dailyLog: cleans(-250, -1) })));
  ok(w.eval('appState.currentStreak') === 250 && w.eval('appState.bestStreak') === 250, '250 dias seguidos contados corretamente', w.eval('appState.currentStreak'));

  console.log(`\nRESULTADO (TZ=${process.env.TZ}): ${pass} ok, ${fail} falhas`);
  process.exit(fail ? 1 : 0);
});
