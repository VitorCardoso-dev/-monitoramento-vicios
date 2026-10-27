// =====================================================================
// 1. BANCO DE DADOS DO APLICATIVO
// =====================================================================

const motivationalQuotes = [
    "Cada dia limpo é uma vitória. Continue assim!",
    "Você é mais forte do que pensa.",
    "O progresso, não a perfeição, é o objetivo.",
    "Cada momento de resistência constrói sua força interior.",
    "Você está reescrevendo sua história, uma escolha por vez.",
    "A jornada de mil quilômetros começa com um único passo.",
    "Seu futuro eu agradece as escolhas que você faz hoje.",
    "Queda não é fracasso. Desistir é.",
    "Você merece uma vida livre e plena.",
    "Cada dia é uma nova página em branco.",
    "Sua coragem de tentar novamente é inspiradora.",
    "Transformação acontece um dia de cada vez.",
    "Você está no caminho certo. Continue avançando.",
    "A melhor hora para começar foi ontem. A segunda melhor hora é agora.",
    "Seus esforços não passam despercebidos. Continue firme."
];

const milestones = {
    1: "Primeiro dia conquistado! Este é o início de algo incrível.",
    3: "3 dias! Você está criando um novo hábito.",
    7: "Uma semana completa! Você provou que é capaz.",
    14: "Duas semanas! Sua determinação é admirável.",
    21: "21 dias seguidos! Três semanas de constância: cada dia reforça sua nova rotina.",
    30: "Um mês inteiro! Isso é extraordinário.",
    60: "Dois meses! Você está em uma jornada incrível.",
    90: "90 dias! Três meses de força e determinação.",
    180: "Meio ano! Você é uma inspiração.",
    365: "Um ano completo! Você transformou sua vida."
};

const addictionTips = {
    "alcool": [
        "Se você bebe todos os dias ou em grande quantidade, não pare de repente por conta própria: a abstinência pode ser perigosa. Procure um médico ou um CAPS AD antes.",
        "Evite pessoas, lugares ou situações que você associa diretamente ao consumo.",
        "Busque uma rede de apoio presencial ou online, como os Alcoólicos Anônimos (AA).",
        "Substitua o hábito: tenha sempre uma bebida não alcoólica (como água com gás ou suco) em mãos em eventos.",
        "Aprenda a identificar seus gatilhos emocionais (estresse, ansiedade) e busque outras formas de lidar com eles, como exercícios."
    ],
    "tabaco": [
        "Masque chicletes sem açúcar, use pastilhas ou chupe gelo quando vier a fissura (que geralmente dura poucos minutos).",
        "Mude sua rotina nos momentos em que mais costumava fumar (logo após acordar, após as refeições).",
        "Pratique a respiração profunda (inspire pelo nariz contando até 4, segure e expire pela boca) para aliviar a ansiedade.",
        "Guarde o dinheiro que gastaria com cigarros e use para se dar uma recompensa ao final do mês."
    ],
    "drogas": [
        "Afaste-se completamente do ciclo social e dos ambientes que estimulam ou facilitam o uso.",
        "Busque acompanhamento profissional (psicólogo/psiquiatra) e grupos de apoio como Narcóticos Anônimos (NA).",
        "Ocupe sua mente e seu tempo livre com novos hobbies, esportes ou estudos.",
        "Tenha um plano de emergência estruturado e o contato de alguém de confiança para ligar nos momentos de crise."
    ],
    "pornografia": [
        "Instale bloqueadores de sites e aplicativos em seus dispositivos (celular, tablet e computador).",
        "Evite ficar isolado com o celular ou computador no quarto de madrugada; mantenha os aparelhos em áreas comuns.",
        "Identifique o estado emocional que te leva ao consumo (H.A.L.T.: Fome, Raiva, Solidão ou Cansaço) e trate a raiz.",
        "Reduza seu tempo de tela geral e faça \"detox\" digital regular."
    ],
    "jogos": [
        "Instale softwares de bloqueio para sites de apostas e cassinos em todos os seus aparelhos.",
        "Entregue o controle de suas finanças (cartões, contas) temporariamente para alguém de extrema confiança.",
        "Evite assistir a esportes ou conteúdos que sirvam de gatilho mental para a necessidade de apostar.",
        "Participe dos Jogadores Anônimos (JA) para encontrar apoio de quem passa pela mesma situação."
    ],
    "internet": [
        "Estabeleça horários rigorosos para acessar as redes sociais (ex: 30 min de manhã, 30 min à noite).",
        "Desative todas as notificações não essenciais do seu aparelho celular.",
        "Deixe o celular em outro cômodo enquanto trabalha, estuda ou dorme.",
        "Invista mais tempo em conexões presenciais e atividades ao ar livre."
    ],
    "videogames": [
        "Defina um alarme antes de começar e respeite o limite diário de horas estabelecido.",
        "Desinstale temporariamente jogos competitivos ou de mundo aberto que causam maior compulsão.",
        "Não jogue nas duas horas anteriores ao sono para não prejudicar seu ritmo circadiano.",
        "Substitua o tempo excessivo por passatempos analógicos (leitura, aprender um instrumento, academia)."
    ],
    "compras": [
        "Cancele as inscrições de e-mails promocionais e pare de seguir lojas nas redes sociais.",
        "Aplique a regra das 48 horas: quando quiser comprar algo não essencial, espere dois dias. A impulsividade geralmente passa.",
        "Remova as informações do seu cartão de crédito salvas em sites e aplicativos com \"compra em um clique\".",
        "Faça uma lista de compras antes de sair e não leve o cartão de crédito, apenas o valor estipulado no débito ou dinheiro."
    ],
    "comida": [
        "Evite estocar em casa os alimentos que mais disparam a compulsão, sem proibir alimentos de forma rígida: restrição severa costuma aumentar a vontade de comer.",
        "Beba um copo de água quando sentir vontade de comer fora de hora; o cérebro costuma confundir sede com fome.",
        "Planeje suas refeições da semana para não precisar tomar decisões quando estiver com muita fome e suscetível a impulsos.",
        "Procure terapia para identificar se você está usando a comida para suprir emoções negativas.",
        "Se você restringe, compensa ou sente culpa intensa ao comer, procure um psicólogo e um nutricionista: pode ser um transtorno alimentar."
    ],
    "trabalho": [
        "Estabeleça e cumpra limites rigorosos de horário para ligar e desligar o computador diariamente.",
        "Remova aplicativos de e-mail e mensagens corporativas do seu celular pessoal, se possível.",
        "Trate seus momentos de lazer, exercícios e descanso como compromissos inadiáveis na agenda.",
        "Pratique o \"mindfulness\" (atenção plena) para estar genuinamente presente quando estiver com sua família e amigos."
    ],
    "outro": [
        "Identifique e anote num caderno quais são os gatilhos (hora do dia, emoção, lugar) que atualizam o vício.",
        "Busque substituir esse hábito automático por uma ação saudável e de fácil acesso.",
        "Converse abertamente com um profissional de saúde mental ou alguém de sua confiança sobre sua jornada.",
        "Celebre cada pequeno dia vencido. O progresso é mais importante que a perfeição."
    ]
};

// =====================================================================
// 2. ESTADO GLOBAL DO APP E PRIVACIDADE
// =====================================================================

const STORAGE_KEY = 'recoveryTrackerState';
const BACKUP_APP_ID = 'recovery-tracker';

const HELP_HTML = `
    <div class="help-box">
        <p class="help-title"><i aria-hidden="true" class="ph ph-lifebuoy"></i> Precisa de ajuda agora?</p>
        <ul>
            <li><strong>CVV – 188</strong> (ligação gratuita, 24 h) ou cvv.org.br: apoio emocional e prevenção do suicídio.</li>
            <li><strong>SAMU – 192</strong>: emergência médica (overdose, abstinência grave, risco de vida).</li>
            <li><strong>CAPS AD</strong>: atendimento gratuito pelo SUS para álcool e outras drogas. Procure o mais próximo em uma UBS.</li>
        </ul>
        <p class="help-note">Este app é um diário de apoio e não substitui acompanhamento profissional.</p>
    </div>`;

function createDefaultState() {
    return {
        startDate: new Date(),
        cleanDays: 0,        // total de dias marcados como limpos
        totalDays: 0,        // dias desde o início da jornada
        currentStreak: 0,    // dias limpos consecutivos até hoje
        bestStreak: 0,       // maior sequência já alcançada
        stumbles: [],
        journals: [],
        dailyLog: [],
        lastCheckedDate: new Date(),
        milestonesShown: []
    };
}

let appState = createDefaultState();

const privacyState = {
    isHidden: true,
    actualText: ""
};

let selectedDateForEdit = null;
let stumbleDateToLog = null;
let lastFocusedElement = null;

// =====================================================================
// 3. UTILITÁRIOS
// =====================================================================

function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
    ));
}

function startOfDay(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
}

function addDays(date, amount) {
    const d = new Date(date);
    d.setDate(d.getDate() + amount);
    return d;
}

function formatDate(date) {
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

function getEnvironmentLabel(env) {
    const labels = { 'casa': 'Em Casa', 'trabalho': 'No Trabalho', 'social': 'Em Ambiente Social', 'online': 'Online', 'publico': 'Em Público', 'outro': 'Outro' };
    return labels[env] || env;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// --- Modais: abertura/fechamento com foco e Esc ---

function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    modal.classList.add('active');
    const target = modal.querySelector('select, input:not([hidden]), textarea, button:not(.modal-close)') || modal.querySelector('button');
    if (target) setTimeout(() => target.focus(), 0);
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('active');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function' && document.contains(lastFocusedElement)) {
        lastFocusedElement.focus();
    }
}

function canDismissModal(modal) {
    // O modal de boas-vindas só pode ser fechado depois de existir uma escolha salva.
    return modal.id !== 'welcomeModal' || !!localStorage.getItem('userRecoveryAddiction');
}

function handleModalKeydown(e) {
    // Com mais de um modal aberto, o último no DOM é o que aparece por cima.
    const activeModals = document.querySelectorAll('.modal.active');
    const modal = activeModals[activeModals.length - 1];
    if (!modal) return;

    if (e.key === 'Escape' && canDismissModal(modal)) {
        closeModal(modal.id);
        return;
    }

    if (e.key === 'Tab') {
        const focusables = Array.from(modal.querySelectorAll('button:not([disabled]), select, input:not([hidden]), textarea'))
            .filter(el => !el.closest('[style*="display: none"]'));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!modal.contains(document.activeElement)) {
            e.preventDefault();
            first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
}

// =====================================================================
// 4. PERSISTÊNCIA (com validação) E BACKUP
// =====================================================================

function normalizeState(raw) {
    const base = createDefaultState();
    if (!raw || typeof raw !== 'object') return base;

    const toDate = v => {
        const d = new Date(v);
        return isNaN(d.getTime()) ? null : d;
    };
    const list = v => (Array.isArray(v) ? v : []);

    const out = { ...base };
    out.startDate = toDate(raw.startDate) || base.startDate;
    out.lastCheckedDate = toDate(raw.lastCheckedDate) || base.lastCheckedDate;
    out.stumbles = list(raw.stumbles)
        .map(s => ({ environment: 'outro', note: '', ...s, date: toDate(s && s.date) }))
        .filter(s => s.date);
    out.journals = list(raw.journals)
        .map(j => ({ ...j, content: String((j && j.content) ?? ''), date: toDate(j && j.date) }))
        .filter(j => j.date);
    out.dailyLog = list(raw.dailyLog)
        .map(d => ({ ...d, type: 'clean', date: toDate(d && d.date) }))
        .filter(d => d.date);
    out.milestonesShown = list(raw.milestonesShown).filter(n => Number.isFinite(n));
    return out;
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
        appState = createDefaultState();
        saveState();
        return;
    }
    try {
        appState = normalizeState(JSON.parse(saved));
    } catch (err) {
        // Dado corrompido: guarda uma cópia para recuperação manual e recomeça sem travar o app.
        console.error('Estado salvo inválido:', err);
        localStorage.setItem(STORAGE_KEY + '.corrompido', saved);
        appState = createDefaultState();
        saveState();
        setTimeout(() => showToast('Não foi possível ler seus dados salvos. Uma cópia foi preservada.'), 500);
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (err) {
        console.error('Falha ao salvar:', err);
        showToast('Não foi possível salvar. O armazenamento do navegador pode estar cheio ou bloqueado.');
    }
}

function exportData() {
    const payload = {
        app: BACKUP_APP_ID,
        version: 1,
        exportedAt: new Date().toISOString(),
        addiction: {
            type: localStorage.getItem('userRecoveryAddiction'),
            name: localStorage.getItem('userRecoveryAddictionName')
        },
        state: appState
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const stamp = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `jornada-backup-${stamp}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('Backup exportado. Guarde o arquivo em um lugar seguro.');
}

function importData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onerror = () => showToast('Não foi possível ler o arquivo.');
    reader.onload = () => {
        let payload;
        try {
            payload = JSON.parse(reader.result);
        } catch (err) {
            showToast('Arquivo inválido: não é um JSON.');
            return;
        }
        if (!payload || payload.app !== BACKUP_APP_ID || typeof payload.state !== 'object' || payload.state === null) {
            showToast('Este arquivo não é um backup deste aplicativo.');
            return;
        }
        if (!confirm('Importar este backup vai substituir os dados atuais deste navegador. Continuar?')) return;

        const restored = normalizeState(payload.state);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(restored));
        const add = payload.addiction || {};
        if (add.type) localStorage.setItem('userRecoveryAddiction', String(add.type));
        if (add.name) localStorage.setItem('userRecoveryAddictionName', String(add.name));
        window.location.reload();
    };
    reader.readAsText(file);
}

function resetData() {
    if (confirm('Tem certeza que deseja apagar todos os dados? Esta ação não pode ser desfeita. Se quiser guardar uma cópia, exporte o backup antes.')) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_KEY + '.corrompido');
        localStorage.removeItem('userRecoveryAddiction');
        localStorage.removeItem('userRecoveryAddictionName');
        window.location.reload();
    }
}

// =====================================================================
// 5. LÓGICA PRINCIPAL: DIAS, SEQUÊNCIAS E MARCOS
// =====================================================================

function initApp() {
    injectDayEditModal();
    renderHelpBoxes();
    loadState();
    updateUI();
    setupEventListeners();
    displayRandomQuote();
}

function renderHelpBoxes() {
    document.querySelectorAll('.help-slot').forEach(el => { el.innerHTML = HELP_HTML; });
}

// Mapa único (dia -> 'clean' | 'stumble'). Tropeço sempre prevalece sobre dia limpo.
function getDayStatusMap() {
    const map = new Map();
    appState.dailyLog.forEach(log => {
        if (log.type === 'clean') map.set(startOfDay(log.date).getTime(), 'clean');
    });
    appState.stumbles.forEach(s => map.set(startOfDay(s.date).getTime(), 'stumble'));
    return map;
}

function calculateStreaks(statusMap) {
    // Sequência atual: dias limpos consecutivos terminando hoje.
    // Se hoje ainda não foi registrado, conta a partir de ontem (o dia pode ser marcado à noite).
    let cursor = startOfDay(new Date());
    const todayStatus = statusMap.get(cursor.getTime());
    if (todayStatus === undefined) cursor = addDays(cursor, -1);

    let current = 0;
    while (statusMap.get(cursor.getTime()) === 'clean') {
        current++;
        cursor = addDays(cursor, -1);
    }

    // Melhor sequência: maior corrida de dias limpos consecutivos em todo o histórico.
    const cleanTimes = [...statusMap.entries()]
        .filter(([, status]) => status === 'clean')
        .map(([time]) => time)
        .sort((a, b) => a - b);

    let best = 0;
    let run = 0;
    let previous = null;
    cleanTimes.forEach(time => {
        if (previous !== null && addDays(new Date(previous), 1).getTime() === time) run++;
        else run = 1;
        best = Math.max(best, run);
        previous = time;
    });

    return { current, best: Math.max(best, current) };
}

function calculateStats() {
    const today = startOfDay(new Date());
    if (!appState.startDate) appState.startDate = today;

    const start = startOfDay(appState.startDate);
    appState.totalDays = Math.round((today - start) / 86400000) + 1;

    const statusMap = getDayStatusMap();
    appState.cleanDays = [...statusMap.values()].filter(s => s === 'clean').length;

    const streaks = calculateStreaks(statusMap);
    appState.currentStreak = streaks.current;
    appState.bestStreak = Math.max(streaks.best, appState.bestStreak || 0);

    return statusMap;
}

function updateUI() {
    const statusMap = calculateStats();
    updateCounters();
    updateCalendar(statusMap);
    updateHistory();
    checkMilestones();
}

function updateCounters() {
    document.getElementById('cleanDaysCounter').textContent = appState.currentStreak;
    document.getElementById('bestStreakValue').textContent = appState.bestStreak;
    document.getElementById('totalCleanValue').textContent = appState.cleanDays;
    document.getElementById('stumbleCountValue').textContent = appState.stumbles.length;

    const totalMarkedDays = appState.cleanDays + appState.stumbles.length;
    const successRate = totalMarkedDays > 0 ? Math.round((appState.cleanDays / totalMarkedDays) * 100) : 100;
    document.getElementById('successRateValue').textContent = successRate + '%';

    const streak = appState.currentStreak;
    const streakMsg = document.getElementById('streakMessage');
    const unit = streak === 1 ? 'dia limpo seguido' : 'dias limpos seguidos';
    let encouragement = 'Um dia de cada vez!';
    if (streak >= 30) encouragement = 'Você está arrasando!';
    else if (streak >= 7) encouragement = 'Continue assim, você está indo muito bem!';
    else if (streak >= 3) encouragement = 'Ótimo progresso!';
    else if (streak === 0 && appState.cleanDays > 0) encouragement = 'Recomeçar também é avançar. Hoje é um bom dia.';
    streakMsg.textContent = `${unit} · ${encouragement}`;
}

// Mês exibido no calendário (não é salvo: ao abrir o app, começa no mês atual).
let viewMonth = startOfMonth(new Date());

function startOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

function monthDiff(a, b) {
    return (a.getFullYear() - b.getFullYear()) * 12 + (a.getMonth() - b.getMonth());
}

// Limites de navegação: do mês de início da jornada até o mês atual.
function changeMonth(delta) {
    const target = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + delta, 1);
    const earliest = startOfMonth(appState.startDate);
    const latest = startOfMonth(new Date());
    if (target < earliest || target > latest) return;
    viewMonth = target;
    updateCalendar(getDayStatusMap());
}

function goToCurrentMonth() {
    viewMonth = startOfMonth(new Date());
    updateCalendar(getDayStatusMap());
}

function updateCalendar(statusMap) {
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';

    const today = startOfDay(new Date());
    const startDate = startOfDay(appState.startDate);
    const labels = { clean: 'dia limpo', stumble: 'tropeço' };

    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let cleanInMonth = 0;
    let stumblesInMonth = 0;

    // Espaços vazios para alinhar o dia 1 ao dia da semana correto (semana começa no domingo).
    for (let i = 0; i < viewMonth.getDay(); i++) {
        const blank = document.createElement('div');
        blank.className = 'calendar-blank';
        blank.setAttribute('aria-hidden', 'true');
        calendarGrid.appendChild(blank);
    }

    for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
        const date = new Date(year, month, dayNumber);
        const status = statusMap.get(date.getTime());
        const beforeStart = date < startDate;
        const isFuture = date > today;

        if (status === 'clean') cleanInMonth++;
        if (status === 'stumble') stumblesInMonth++;

        const dayElement = document.createElement('button');
        dayElement.type = 'button';
        dayElement.className = 'calendar-day';
        dayElement.title = formatDate(date);
        if (date.getTime() === today.getTime()) dayElement.classList.add('day-today');

        const number = document.createElement('span');
        number.textContent = dayNumber;
        dayElement.appendChild(number);

        if (beforeStart || isFuture) {
            dayElement.classList.add('day-empty', 'day-disabled');
            dayElement.disabled = true;
            dayElement.setAttribute('aria-label', `${formatDate(date)}: ${isFuture ? 'ainda não chegou' : 'antes do início da jornada'}`);
        } else {
            dayElement.classList.add(status === 'clean' ? 'day-clean' : status === 'stumble' ? 'day-stumble' : 'day-empty');
            dayElement.setAttribute('aria-label', `${formatDate(date)}: ${labels[status] || 'sem registro'}. Clique para editar.`);
            if (status) {
                const mark = document.createElement('span');
                mark.className = 'day-mark';
                mark.setAttribute('aria-hidden', 'true');
                mark.textContent = status === 'clean' ? '✓' : '✕';
                dayElement.appendChild(mark);
            }
            dayElement.addEventListener('click', () => {
                selectedDateForEdit = new Date(date);
                document.getElementById('dayEditTitle').textContent = `Dia ${formatDate(date)}`;
                openModal('dayEditModal');
            });
        }
        calendarGrid.appendChild(dayElement);
    }

    // Cabeçalho do mês, resumo e estado das setas
    const rawLabel = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(viewMonth);
    document.getElementById('calendarMonthLabel').textContent = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);

    const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
    document.getElementById('calendarSummary').textContent =
        `${plural(cleanInMonth, 'dia limpo', 'dias limpos')} · ${plural(stumblesInMonth, 'tropeço', 'tropeços')}`;

    const latest = startOfMonth(new Date());
    document.getElementById('prevMonthBtn').disabled = monthDiff(viewMonth, startOfMonth(appState.startDate)) <= 0;
    document.getElementById('nextMonthBtn').disabled = monthDiff(viewMonth, latest) >= 0;
    document.getElementById('todayMonthBtn').hidden = monthDiff(viewMonth, latest) === 0;
}

// Deslizar para os lados no celular: esquerda = próximo mês, direita = mês anterior.
function setupCalendarSwipe() {
    const grid = document.getElementById('calendarGrid');
    let startX = null;
    let startY = null;

    grid.addEventListener('touchstart', e => {
        const t = e.touches[0];
        startX = t.clientX;
        startY = t.clientY;
    }, { passive: true });

    grid.addEventListener('touchend', e => {
        if (startX === null) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - startX;
        const dy = t.clientY - startY;
        startX = startY = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) changeMonth(dx < 0 ? 1 : -1);
    }, { passive: true });
}

function updateHistory() {
    const historyList = document.getElementById('historyList');

    if (appState.journals.length === 0 && appState.stumbles.length === 0) {
        historyList.innerHTML = '<div class="history-empty">Nenhuma anotação ainda. Comece registrando seu dia!</div>';
        return;
    }

    const allEntries = [
        ...appState.journals.map(j => ({ ...j, type: 'journal' })),
        ...appState.stumbles.map(s => ({ ...s, type: 'stumble' }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Todo texto digitado pelo usuário passa por escapeHTML antes de entrar no innerHTML.
    historyList.innerHTML = allEntries.slice(0, 10).map(entry => {
        const isStumble = entry.type === 'stumble';
        const body = isStumble
            ? `<strong>Ambiente:</strong> ${escapeHTML(getEnvironmentLabel(entry.environment))}<br>${entry.note ? escapeHTML(entry.note) : 'Sem observações adicionais.'}`
            : escapeHTML(entry.content);
        return `
            <div class="history-item">
                <div class="history-header">
                    <div class="history-date">${formatDate(entry.date)}</div>
                    <div class="history-badge ${isStumble ? 'badge-stumble' : 'badge-clean'}">
                        ${isStumble ? 'Tropeço' : 'Anotação'}
                    </div>
                    <button type="button" class="btn-delete-entry" data-type="${entry.type}" data-ts="${new Date(entry.date).getTime()}" aria-label="Apagar este registro" title="Apagar este registro">
                        <i aria-hidden="true" class="ph ph-trash"></i>
                    </button>
                </div>
                <div class="history-content">${body}</div>
            </div>
        `;
    }).join('');
}

function deleteHistoryEntry(type, timestamp) {
    if (!confirm('Tem certeza que deseja apagar este registro permanentemente?')) return;

    if (type === 'journal') {
        appState.journals = appState.journals.filter(j => new Date(j.date).getTime() !== timestamp);
    } else if (type === 'stumble') {
        appState.stumbles = appState.stumbles.filter(s => new Date(s.date).getTime() !== timestamp);
    }
    saveState();
    updateUI();
    showToast('Registro removido com sucesso.');
}

// Marcos: baseados na sequência atual. Se vários foram alcançados de uma vez
// (ex.: preenchimento retroativo), celebra o maior e marca os anteriores como vistos.
function checkMilestones() {
    const streak = appState.currentStreak;

    // Se a sequência foi quebrada, os marcos acima dela podem ser celebrados de novo no recomeço.
    const kept = appState.milestonesShown.filter(m => m <= streak);
    let changed = kept.length !== appState.milestonesShown.length;
    appState.milestonesShown = kept;

    const reached = Object.keys(milestones).map(Number).filter(d => d <= streak).sort((a, b) => a - b);
    const unseen = reached.filter(d => !appState.milestonesShown.includes(d));

    if (unseen.length > 0) {
        const highest = unseen[unseen.length - 1];
        appState.milestonesShown.push(...unseen);
        changed = true;
        showMilestone(highest, milestones[highest]);
    }
    if (changed) saveState();
}

function showMilestone(days, message) {
    document.getElementById('milestoneTitle').textContent = `${days} Dia${days > 1 ? 's' : ''} Limpo${days > 1 ? 's' : ''} Seguido${days > 1 ? 's' : ''}!`;
    document.getElementById('milestoneMessage').textContent = message;
    openModal('milestoneModal');
}

// =====================================================================
// 6. INTERAÇÕES
// =====================================================================

function displayRandomQuote() {
    const getRandom = () => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    document.getElementById('quoteText').textContent = getRandom();

    setInterval(() => {
        const quoteElement = document.getElementById('quoteText');
        quoteElement.style.opacity = '0';
        setTimeout(() => {
            quoteElement.textContent = getRandom();
            quoteElement.style.opacity = '1';
        }, 300);
    }, 30000);
}

function renderTips(addictionType) {
    const tipsContainer = document.getElementById('tipsContent');
    const tipsList = addictionTips[addictionType] || addictionTips["outro"];

    tipsContainer.innerHTML = '<div class="tips-list">' + tipsList.map(tip => `
        <div class="tip-card">
            <i aria-hidden="true" class="ph ph-check-circle"></i>
            <p>${escapeHTML(tip)}</p>
        </div>`).join('') + '</div>';

    document.getElementById('dailyTipText').textContent = tipsList[Math.floor(Math.random() * tipsList.length)];
    document.getElementById('tipSection').style.display = 'block';
}

function markCleanDay(targetDate) {
    const dateToMark = startOfDay(targetDate instanceof Date ? targetDate : new Date());

    const alreadyMarked = appState.dailyLog.some(d => startOfDay(d.date).getTime() === dateToMark.getTime() && d.type === 'clean');
    const hadStumble = appState.stumbles.some(s => startOfDay(s.date).getTime() === dateToMark.getTime());

    if (alreadyMarked && !hadStumble) {
        showToast(`O dia ${formatDate(dateToMark)} já estava marcado como limpo!`);
        return;
    }

    // Marcar como limpo substitui um tropeço registrado no mesmo dia.
    appState.stumbles = appState.stumbles.filter(s => startOfDay(s.date).getTime() !== dateToMark.getTime());
    if (!alreadyMarked) appState.dailyLog.push({ date: dateToMark, type: 'clean' });

    saveState();
    updateUI();
    showToast(`Dia ${formatDate(dateToMark)} marcado como limpo! 🌟`);
}

function logStumble() {
    stumbleDateToLog = new Date();
    openModal('stumbleModal');
}

function confirmStumble() {
    const environment = document.getElementById('environmentSelect').value;
    const note = document.getElementById('stumbleNote').value;
    const targetDate = startOfDay(stumbleDateToLog || new Date());

    // Um tropeço substitui o dia limpo e qualquer tropeço anterior do mesmo dia.
    appState.dailyLog = appState.dailyLog.filter(d => startOfDay(d.date).getTime() !== targetDate.getTime());
    appState.stumbles = appState.stumbles.filter(s => startOfDay(s.date).getTime() !== targetDate.getTime());
    appState.stumbles.push({ date: targetDate, environment, note });

    saveState();
    updateUI();

    closeModal('stumbleModal');
    document.getElementById('stumbleNote').value = '';
    showToast(`Tropeço registrado no dia ${formatDate(targetDate)}. Recomeçar faz parte.`);
    stumbleDateToLog = null;
}

function injectDayEditModal() {
    if (document.getElementById('dayEditModal')) return;

    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal" id="dayEditModal" role="dialog" aria-modal="true" aria-labelledby="dayEditTitle">
        <div class="modal-content modal-small">
            <button class="modal-close" id="closeDayEditModal" aria-label="Fechar">
                <i aria-hidden="true" class="ph ph-x"></i>
            </button>
            <h2 class="modal-title" id="dayEditTitle">Editar Dia</h2>
            <p class="modal-description">Como foi este dia?</p>
            <div class="day-edit-actions">
                <button class="btn btn-primary" id="btnEditClean"><i aria-hidden="true" class="ph ph-check-circle"></i> Marcar como Limpo</button>
                <button class="btn btn-danger" id="btnEditStumble"><i aria-hidden="true" class="ph ph-warning-circle"></i> Registrar Tropeço</button>
                <button class="btn btn-secondary" id="btnEditClear"><i aria-hidden="true" class="ph ph-eraser"></i> Remover Registro</button>
            </div>
        </div>
    </div>`);

    document.getElementById('closeDayEditModal').addEventListener('click', () => closeModal('dayEditModal'));

    document.getElementById('btnEditClean').addEventListener('click', () => {
        const date = selectedDateForEdit;
        closeModal('dayEditModal');
        if (date) markCleanDay(date);
    });

    document.getElementById('btnEditStumble').addEventListener('click', () => {
        if (!selectedDateForEdit) return;
        stumbleDateToLog = selectedDateForEdit;
        document.getElementById('dayEditModal').classList.remove('active');
        openModal('stumbleModal');
    });

    document.getElementById('btnEditClear').addEventListener('click', () => {
        const date = selectedDateForEdit;
        closeModal('dayEditModal');
        if (date) clearSpecificDay(date);
    });
}

function clearSpecificDay(targetDate) {
    const target = startOfDay(targetDate).getTime();
    appState.dailyLog = appState.dailyLog.filter(d => startOfDay(d.date).getTime() !== target);
    appState.stumbles = appState.stumbles.filter(s => startOfDay(s.date).getTime() !== target);
    saveState();
    updateUI();
    showToast(`Registro do dia ${formatDate(targetDate)} foi removido.`);
}

function saveJournal() {
    const content = document.getElementById('journalInput').value.trim();
    if (!content) {
        showToast('Escreva algo antes de salvar!');
        return;
    }
    appState.journals.push({ date: new Date(), content });
    document.getElementById('journalInput').value = '';
    saveState();
    updateUI();
    showToast('Anotação salva com sucesso! ✍️');
}

// =====================================================================
// 7. PRIVACIDADE (OCULTAR O VÍCIO NA TELA)
// =====================================================================

function togglePrivacy() {
    const bannerText = document.getElementById('addictionText');
    const eyeIcon = document.getElementById('privacyEyeIcon');
    const currentAddictionSetting = document.getElementById('currentAddiction');

    if (!bannerText) return;

    if (privacyState.isHidden) {
        bannerText.textContent = "Conteúdo Oculto (Clique para ver)";
        bannerText.style.fontStyle = "italic";
        bannerText.style.opacity = "0.6";
        if (eyeIcon) eyeIcon.className = "ph ph-eye-slash";
        if (currentAddictionSetting) currentAddictionSetting.textContent = "Oculto nas configurações";
    } else {
        bannerText.textContent = `Vencendo: ${privacyState.actualText}`;
        bannerText.style.fontStyle = "normal";
        bannerText.style.opacity = "1";
        if (eyeIcon) eyeIcon.className = "ph ph-eye";
        if (currentAddictionSetting) currentAddictionSetting.textContent = privacyState.actualText;
    }
}

// =====================================================================
// 8. EVENTOS
// =====================================================================

function setupEventListeners() {
    const $ = id => document.getElementById(id);

    $('markCleanDayBtn').addEventListener('click', () => markCleanDay());
    $('logStumbleBtn').addEventListener('click', logStumble);
    $('saveJournalBtn').addEventListener('click', saveJournal);
    $('confirmStumbleBtn').addEventListener('click', confirmStumble);

    $('closeStumbleModal').addEventListener('click', () => closeModal('stumbleModal'));
    $('closeMilestoneModal').addEventListener('click', () => closeModal('milestoneModal'));
    $('closeCelebrationBtn').addEventListener('click', () => closeModal('milestoneModal'));

    $('settingsBtn').addEventListener('click', () => openModal('settingsModal'));
    $('closeSettingsModal').addEventListener('click', () => closeModal('settingsModal'));
    $('resetDataBtn').addEventListener('click', resetData);

    $('exportDataBtn').addEventListener('click', exportData);
    $('importDataBtn').addEventListener('click', () => $('importFileInput').click());
    $('importFileInput').addEventListener('change', e => {
        importData(e.target.files[0]);
        e.target.value = '';
    });

    $('prevMonthBtn').addEventListener('click', () => changeMonth(-1));
    $('nextMonthBtn').addEventListener('click', () => changeMonth(1));
    $('todayMonthBtn').addEventListener('click', goToCurrentMonth);
    setupCalendarSwipe();

    $('tipsBtn').addEventListener('click', () => openModal('tipsModal'));
    $('moreTipsBtn').addEventListener('click', () => openModal('tipsModal'));
    $('closeTipsModal').addEventListener('click', () => closeModal('tipsModal'));

    // Apagar itens do histórico (delegação: funciona para itens renderizados depois)
    $('historyList').addEventListener('click', e => {
        const btn = e.target.closest('.btn-delete-entry');
        if (btn) deleteHistoryEntry(btn.dataset.type, Number(btn.dataset.ts));
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal && canDismissModal(modal)) closeModal(modal.id);
        });
    });
    document.addEventListener('keydown', handleModalKeydown);
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();

    const welcomeModal = document.getElementById('welcomeModal');
    const startBtn = document.getElementById('startJourneyBtn');
    const addictionSelect = document.getElementById('addictionType');
    const customGroup = document.getElementById('customAddictionGroup');
    const customInput = document.getElementById('customAddiction');
    const banner = document.getElementById('addictionBanner');

    addictionSelect.addEventListener('change', e => {
        customGroup.style.display = e.target.value === 'outro' ? 'block' : 'none';
    });

    startBtn.addEventListener('click', () => {
        let selectedValue = addictionSelect.value;
        let selectedText = addictionSelect.options[addictionSelect.selectedIndex]?.text;

        if (selectedValue === 'outro') {
            selectedText = customInput.value.trim() !== '' ? customInput.value.trim() : "Meu Desafio";
        }
        if (!selectedValue) {
            selectedValue = "outro";
            selectedText = "Jornada Pessoal";
        }

        localStorage.setItem('userRecoveryAddiction', selectedValue);
        localStorage.setItem('userRecoveryAddictionName', selectedText);

        welcomeModal.classList.remove('active');
        banner.style.display = 'flex';
        privacyState.actualText = selectedText;
        privacyState.isHidden = true;
        togglePrivacy();

        renderTips(selectedValue);
        openModal('tipsModal');
    });

    // Botão de privacidade (olho) no banner
    const bannerContent = banner.querySelector('.banner-content');
    if (bannerContent && !document.getElementById('privacyEyeBtn')) {
        const eyeBtn = document.createElement('button');
        eyeBtn.id = "privacyEyeBtn";
        eyeBtn.className = "privacy-eye-btn";
        eyeBtn.type = "button";
        eyeBtn.setAttribute('aria-label', 'Mostrar ou ocultar o que você está vencendo');
        eyeBtn.innerHTML = '<i id="privacyEyeIcon" aria-hidden="true" class="ph ph-eye-slash"></i>';
        bannerContent.appendChild(eyeBtn);

        const toggleHandler = e => {
            e.stopPropagation();
            privacyState.isHidden = !privacyState.isHidden;
            togglePrivacy();
        };
        eyeBtn.addEventListener('click', toggleHandler);
        document.getElementById('addictionText').addEventListener('click', toggleHandler);
    }

    const savedAddiction = localStorage.getItem('userRecoveryAddiction');
    const savedAddictionName = localStorage.getItem('userRecoveryAddictionName');

    if (savedAddiction) {
        welcomeModal.classList.remove('active');
        banner.style.display = 'flex';
        privacyState.actualText = savedAddictionName || '';
        togglePrivacy();
        renderTips(savedAddiction);
    } else {
        welcomeModal.classList.add('active');
        banner.style.display = 'none';
    }

    const openWelcomeModal = () => {
        closeModal('settingsModal');
        openModal('welcomeModal');
    };
    document.getElementById('changeAddictionBtn').addEventListener('click', openWelcomeModal);
    document.getElementById('editAddictionBtn').addEventListener('click', openWelcomeModal);
});
