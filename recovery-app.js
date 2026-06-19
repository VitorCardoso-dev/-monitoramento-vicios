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
    21: "21 dias! Cientificamente, você está formando um novo hábito.",
    30: "Um mês inteiro! Isso é extraordinário.",
    60: "Dois meses! Você está em uma jornada incrível.",
    90: "90 dias! Três meses de força e determinação.",
    180: "Meio ano! Você é uma inspiração.",
    365: "Um ano completo! Você transformou sua vida."
};

const addictionTips = {
    "alcool": [
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
        "Não tenha alimentos-gatilho (doces, fast food, ultraprocessados) estocados nos armários de casa.",
        "Beba um copo de água quando sentir vontade de comer fora de hora; o cérebro costuma confundir sede com fome.",
        "Planeje suas refeições da semana para não precisar tomar decisões quando estiver com muita fome e suscetível a impulsos.",
        "Procure terapia para identificar se você está usando a comida para suprir emoções negativas."
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

let appState = {
    startDate: null,
    cleanDays: 0,
    totalDays: 0,
    stumbles: [],
    journals: [],
    dailyLog: [],
    lastCheckedDate: null,
    milestonesShown: []
};

const privacyState = {
    isHidden: true,
    actualText: ""
};

let selectedDateForEdit = null;
let stumbleDateToLog = null;

// =====================================================================
// 3. LÓGICA PRINCIPAL E CORE
// =====================================================================

function initApp() {
    injectDayEditModal();
    loadState();
    updateUI();
    checkMilestones();
    setupEventListeners();
    displayRandomQuote();
}

function loadState() {
    const saved = localStorage.getItem('recoveryTrackerState');
    if (saved) {
        appState = JSON.parse(saved);
        if (appState.startDate) appState.startDate = new Date(appState.startDate);
        if (appState.lastCheckedDate) appState.lastCheckedDate = new Date(appState.lastCheckedDate);
        appState.stumbles = appState.stumbles.map(s => ({ ...s, date: new Date(s.date) }));
        appState.journals = appState.journals.map(j => ({ ...j, date: new Date(j.date) }));
        if (!appState.dailyLog) appState.dailyLog = []; // Compatibilidade com versões anteriores
        appState.dailyLog = appState.dailyLog.map(d => ({ ...d, date: new Date(d.date) }));
    } else {
        appState.startDate = new Date();
        appState.lastCheckedDate = new Date();
        saveState();
    }
}

function saveState() {
    localStorage.setItem('recoveryTrackerState', JSON.stringify(appState));
}

function updateUI() {
    calculateStats();
    updateCounters();
    updateCalendar();
    updateHistory();
}

function calculateStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!appState.startDate) appState.startDate = today;
    
    const start = new Date(appState.startDate);
    start.setHours(0, 0, 0, 0);
    
    // Total de dias desde que começou a jornada
    appState.totalDays = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
    
    // NOVO CÁLCULO DE DIAS LIMPOS (Apenas os dias efetivamente marcados)
    let explicitCleanCount = 0;
    const dayStatusMap = new Map();

    // Mapeia os dias marcados como limpos
    appState.dailyLog.forEach(log => {
        const d = new Date(log.date); d.setHours(0,0,0,0);
        if(log.type === 'clean') dayStatusMap.set(d.getTime(), 'clean');
    });

    // Sobrescreve com os tropeços (tropeço anula dia limpo)
    appState.stumbles.forEach(s => {
        const d = new Date(s.date); d.setHours(0,0,0,0);
        dayStatusMap.set(d.getTime(), 'stumble');
    });

    // Conta quantos dias restaram como limpos
    dayStatusMap.forEach((status) => {
        if(status === 'clean') explicitCleanCount++;
    });

    appState.cleanDays = explicitCleanCount;
}

function updateCounters() {
    document.getElementById('cleanDaysCounter').textContent = appState.cleanDays;
    document.getElementById('totalDaysValue').textContent = appState.totalDays;
    document.getElementById('stumbleCountValue').textContent = appState.stumbles.length;
    
    const totalMarkedDays = appState.cleanDays + appState.stumbles.length;
    const successRate = totalMarkedDays > 0 ? Math.round((appState.cleanDays / totalMarkedDays) * 100) : 100;
    document.getElementById('successRateValue').textContent = successRate + '%';
    
    const streakMsg = document.getElementById('streakMessage');
    if (appState.cleanDays >= 30) streakMsg.textContent = 'Você está arrasando!';
    else if (appState.cleanDays >= 7) streakMsg.textContent = 'Continue assim, você está indo muito bem!';
    else if (appState.cleanDays >= 3) streakMsg.textContent = 'Ótimo progresso!';
    else streakMsg.textContent = 'Um dia de cada vez!';
}

function updateCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const startDate = new Date(appState.startDate);
    startDate.setHours(0, 0, 0, 0);

    // Constrói mapa de status para o calendário
    const dayStatusMap = new Map();
    appState.dailyLog.forEach(log => {
        const d = new Date(log.date); d.setHours(0,0,0,0);
        if(log.type === 'clean') dayStatusMap.set(d.getTime(), 'clean');
    });
    appState.stumbles.forEach(s => {
        const d = new Date(s.date); d.setHours(0,0,0,0);
        dayStatusMap.set(d.getTime(), 'stumble');
    });
    
    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        date.setHours(0,0,0,0);
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = date.getDate();
        dayElement.title = formatDate(date);
        
        if (date < startDate) {
            dayElement.classList.add('day-empty');
            dayElement.style.opacity = '0.4';
            dayElement.style.cursor = 'default';
        } else {
            const status = dayStatusMap.get(date.getTime());
            if (status === 'stumble') {
                dayElement.classList.add('day-stumble');
            } else if (status === 'clean') {
                dayElement.classList.add('day-clean');
            } else {
                dayElement.classList.add('day-empty');
            }

            // Adiciona evento de clique para edição retroativa
            dayElement.addEventListener('click', () => {
                selectedDateForEdit = new Date(date);
                document.getElementById('dayEditTitle').textContent = `Dia ${formatDate(date)}`;
                document.getElementById('dayEditModal').classList.add('active');
            });
        }
        
        calendarGrid.appendChild(dayElement);
    }
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
    
    historyList.innerHTML = allEntries.slice(0, 10).map(entry => {
        const isStumble = entry.type === 'stumble';
        return `
            <div class="history-item">
                <div class="history-header">
                    <div class="history-date">${formatDate(entry.date)}</div>
                    <div class="history-badge ${isStumble ? 'badge-stumble' : 'badge-clean'}">
                        ${isStumble ? 'Tropeço' : 'Anotação'}
                    </div>
                </div>
                <div class="history-content">
                    ${isStumble ? `
                        <strong>Ambiente:</strong> ${getEnvironmentLabel(entry.environment)}<br>
                        ${entry.note ? entry.note : 'Sem observações adicionais.'}
                    ` : entry.content}
                </div>
            </div>
        `;
    }).join('');
}

function getEnvironmentLabel(env) {
    const labels = { 'casa': 'Em Casa', 'trabalho': 'No Trabalho', 'social': 'Em Ambiente Social', 'online': 'Online', 'publico': 'Em Público', 'outro': 'Outro' };
    return labels[env] || env;
}

// =====================================================================
// 4. INTERAÇÕES E MODAIS NATIVOS
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
    
    let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';
    tipsList.forEach(tip => {
        html += `
            <div style="background-color: var(--surface); padding: 1.25rem; border-radius: 12px; border-left: 4px solid var(--primary); display: flex; align-items: flex-start; gap: 1rem; box-shadow: var(--shadow);">
                <i class="ph ph-check-circle" style="color: var(--primary); font-size: 1.5rem; flex-shrink: 0;"></i>
                <p style="margin: 0; color: var(--text-color); line-height: 1.5;">${tip}</p>
            </div>
        `;
    });
    html += '</div>';
    tipsContainer.innerHTML = html;

    document.getElementById('dailyTipText').textContent = tipsList[Math.floor(Math.random() * tipsList.length)];
    document.getElementById('tipSection').style.display = 'block';
}

// Modificado para aceitar datas retroativas e sobrescrever registros antigos
function markCleanDay(targetDate) {
    let dateToMark = targetDate instanceof Date ? targetDate : new Date();
    dateToMark.setHours(0, 0, 0, 0);
    
    // Se havia um tropeço neste dia, remove para dar lugar ao dia limpo
    appState.stumbles = appState.stumbles.filter(s => {
        const sd = new Date(s.date); sd.setHours(0,0,0,0);
        return sd.getTime() !== dateToMark.getTime();
    });

    const alreadyMarked = appState.dailyLog.some(d => {
        const logDate = new Date(d.date); logDate.setHours(0, 0, 0, 0);
        return logDate.getTime() === dateToMark.getTime() && d.type === 'clean';
    });
    
    if (alreadyMarked) {
        showToast(`O dia ${formatDate(dateToMark)} já estava marcado como limpo!`);
        return;
    }
    
    appState.dailyLog.push({ date: dateToMark, type: 'clean' });
    saveState();
    updateUI();
    checkMilestones();
    showToast(`Dia ${formatDate(dateToMark)} marcado como limpo! 🌟`);
}

function logStumble() {
    stumbleDateToLog = new Date(); // Registra tropeço para hoje por padrão
    document.getElementById('stumbleModal').classList.add('active');
}

function confirmStumble() {
    const environment = document.getElementById('environmentSelect').value;
    const note = document.getElementById('stumbleNote').value;
    
    const targetDate = stumbleDateToLog || new Date();
    targetDate.setHours(0, 0, 0, 0);
    
    // Remove marcação de 'limpo' anterior desse dia, caso exista
    appState.dailyLog = appState.dailyLog.filter(d => {
        const ld = new Date(d.date); ld.setHours(0,0,0,0);
        return ld.getTime() !== targetDate.getTime();
    });

    // Remove tropeços anteriores desse mesmo dia para sobrescrever
    appState.stumbles = appState.stumbles.filter(s => {
        const sd = new Date(s.date); sd.setHours(0,0,0,0);
        return sd.getTime() !== targetDate.getTime();
    });

    appState.stumbles.push({ date: targetDate, environment: environment, note: note });
    saveState();
    updateUI();
    
    document.getElementById('stumbleModal').classList.remove('active');
    document.getElementById('stumbleNote').value = '';
    showToast(`Tropeço registrado no dia ${formatDate(targetDate)}.`);
    stumbleDateToLog = null;
}

// Injeção de Modal para Edição Retroativa pelo Calendário
function injectDayEditModal() {
    if(document.getElementById('dayEditModal')) return;
    
    const modalHTML = `
    <div class="modal" id="dayEditModal">
        <div class="modal-content" style="max-width: 400px; text-align: center;">
            <button class="modal-close" onclick="document.getElementById('dayEditModal').classList.remove('active')">
                <i class="ph ph-x"></i>
            </button>
            <h2 class="modal-title" id="dayEditTitle">Editar Dia</h2>
            <p class="modal-description" style="margin-bottom: 1.5rem;">Como foi este dia?</p>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <button class="btn btn-primary" id="btnEditClean" style="width: 100%;">
                    <i class="ph ph-check-circle"></i> Marcar como Limpo
                </button>
                <button class="btn btn-danger" id="btnEditStumble" style="width: 100%; background: #D98A7F; color: white;">
                    <i class="ph ph-warning-circle"></i> Registrar Tropeço
                </button>
                <button class="btn btn-secondary" id="btnEditClear" style="width: 100%;">
                    <i class="ph ph-eraser"></i> Remover Registro
                </button>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    document.getElementById('btnEditClean').addEventListener('click', () => {
        if(selectedDateForEdit) markCleanDay(selectedDateForEdit);
        document.getElementById('dayEditModal').classList.remove('active');
    });

    document.getElementById('btnEditStumble').addEventListener('click', () => {
        if(selectedDateForEdit) {
            stumbleDateToLog = selectedDateForEdit;
            document.getElementById('dayEditModal').classList.remove('active');
            document.getElementById('stumbleModal').classList.add('active');
        }
    });

    document.getElementById('btnEditClear').addEventListener('click', () => {
        if(selectedDateForEdit) {
            clearSpecificDay(selectedDateForEdit);
            document.getElementById('dayEditModal').classList.remove('active');
        }
    });
}

function clearSpecificDay(targetDate) {
    targetDate.setHours(0,0,0,0);
    appState.dailyLog = appState.dailyLog.filter(d => {
        const ld = new Date(d.date); ld.setHours(0,0,0,0);
        return ld.getTime() !== targetDate.getTime();
    });
    appState.stumbles = appState.stumbles.filter(s => {
        const sd = new Date(s.date); sd.setHours(0,0,0,0);
        return sd.getTime() !== targetDate.getTime();
    });
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
    
    appState.journals.push({ date: new Date(), content: content });
    document.getElementById('journalInput').value = '';
    saveState();
    updateUI();
    showToast('Anotação salva com sucesso! ✍️');
}

function checkMilestones() {
    const cleanDays = appState.cleanDays;
    for (const [days, message] of Object.entries(milestones)) {
        const daysNum = parseInt(days);
        if (cleanDays === daysNum && !appState.milestonesShown.includes(daysNum)) {
            showMilestone(daysNum, message);
            appState.milestonesShown.push(daysNum);
            saveState();
            break;
        }
    }
}

function showMilestone(days, message) {
    const modal = document.getElementById('milestoneModal');
    document.getElementById('milestoneTitle').textContent = `${days} Dia${days > 1 ? 's' : ''} Limpo${days > 1 ? 's' : ''}!`;
    document.getElementById('milestoneMessage').textContent = message;
    modal.classList.add('active');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function resetData() {
    if (confirm('Tem certeza que deseja apagar todos os dados? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('recoveryTrackerState');
        localStorage.removeItem('userRecoveryAddiction');
        localStorage.removeItem('userRecoveryAddictionName');
        appState = { startDate: new Date(), cleanDays: 0, totalDays: 0, stumbles: [], journals: [], dailyLog: [], lastCheckedDate: new Date(), milestonesShown: [] };
        saveState();
        window.location.reload();
    }
}

function formatDate(date) {
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

// =====================================================================
// 5. EXTENSÃO: SUPORTE A PRIVACIDADE E REMOÇÃO DE REGISTROS
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

window.deleteHistoryEntry = function(type, timestamp) {
    if (!confirm("Tem certeza que deseja apagar este registro permanentemente?")) return;

    const saved = localStorage.getItem('recoveryTrackerState');
    if (!saved) return;
    
    let state = JSON.parse(saved);
    const targetTime = new Date(timestamp).getTime();

    if (type === 'journal') {
        state.journals = state.journals.filter(j => new Date(j.date).getTime() !== targetTime);
    } else if (type === 'stumble') {
        state.stumbles = state.stumbles.filter(s => new Date(s.date).getTime() !== targetTime);
    }

    localStorage.setItem('recoveryTrackerState', JSON.stringify(state));
    appState.journals = state.journals.map(j => ({ ...j, date: new Date(j.date) }));
    appState.stumbles = state.stumbles.map(s => ({ ...s, date: new Date(s.date) }));

    updateUI();
    showToast('Registro removido com sucesso.');
};

function injectDeleteButtons() {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;

    const items = historyList.querySelectorAll('.history-item');
    const saved = localStorage.getItem('recoveryTrackerState');
    if (!saved) return;
    const state = JSON.parse(saved);
    
    const allEntries = [
        ...state.journals.map(j => ({ ...j, type: 'journal' })),
        ...state.stumbles.map(s => ({ ...s, type: 'stumble' }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);

    items.forEach((item, index) => {
        const entry = allEntries[index];
        if (!entry || item.querySelector('.btn-delete-entry')) return;

        const header = item.querySelector('.history-header');
        if (header) {
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-delete-entry';
            deleteBtn.style = "background: none; border: none; color: #dc3545; cursor: pointer; padding: 4px 8px; margin-left: auto; display: inline-flex; align-items: center;";
            deleteBtn.innerHTML = '<i class="ph ph-trash" style="font-size: 1.2rem;"></i>';
            deleteBtn.title = "Apagar este registro";

            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.deleteHistoryEntry(entry.type, entry.date);
            });
            header.appendChild(deleteBtn);
        }
    });
}

// =====================================================================
// 6. MAPEAMENTO DE EVENTOS E LISTENERS
// =====================================================================

function setupEventListeners() {
    document.getElementById('markCleanDayBtn').addEventListener('click', markCleanDay);
    document.getElementById('logStumbleBtn').addEventListener('click', logStumble);
    document.getElementById('saveJournalBtn').addEventListener('click', saveJournal);
    document.getElementById('confirmStumbleBtn').addEventListener('click', confirmStumble);
    
    document.getElementById('closeStumbleModal').addEventListener('click', () => document.getElementById('stumbleModal').classList.remove('active'));
    document.getElementById('closeMilestoneModal').addEventListener('click', () => document.getElementById('milestoneModal').classList.remove('active'));
    document.getElementById('closeCelebrationBtn').addEventListener('click', () => document.getElementById('milestoneModal').classList.remove('active'));
    
    document.getElementById('settingsBtn').addEventListener('click', () => document.getElementById('settingsModal').classList.add('active'));
    document.getElementById('closeSettingsModal').addEventListener('click', () => document.getElementById('settingsModal').classList.remove('active'));
    document.getElementById('resetDataBtn').addEventListener('click', resetData);
    
    // Ouvintes da extensão de Dicas
    document.getElementById('tipsBtn').addEventListener('click', () => document.getElementById('tipsModal').classList.add('active'));
    document.getElementById('moreTipsBtn').addEventListener('click', () => document.getElementById('tipsModal').classList.add('active'));
    document.getElementById('closeTipsModal').addEventListener('click', () => document.getElementById('tipsModal').classList.remove('active'));

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });
}

// Inicializações Assíncronas e DOM
document.addEventListener('DOMContentLoaded', () => {
    initApp();

    const welcomeModal = document.getElementById('welcomeModal');
    const startBtn = document.getElementById('startJourneyBtn');
    const addictionSelect = document.getElementById('addictionType');
    const customGroup = document.getElementById('customAddictionGroup');
    const customInput = document.getElementById('customAddiction');
    const banner = document.getElementById('addictionBanner');
    const tipsModal = document.getElementById('tipsModal');

    addictionSelect.addEventListener('change', (e) => {
        customGroup.style.display = e.target.value === 'outro' ? 'block' : 'none';
    });

    startBtn.addEventListener('click', () => {
        let selectedValue = addictionSelect.value;
        let selectedText = addictionSelect.options[addictionSelect.selectedIndex]?.text;

        if (selectedValue === 'outro') {
            selectedText = customInput.value.trim() !== '' ? customInput.value : "Meu Desafio";
        }
        if (!selectedValue) {
            selectedValue = "outro";
            selectedText = "Jornada Pessoal";
        }

        localStorage.setItem('userRecoveryAddiction', selectedValue);
        localStorage.setItem('userRecoveryAddictionName', selectedText);

        if (welcomeModal) welcomeModal.classList.remove('active');
        if (banner) banner.style.display = 'flex';
        privacyState.actualText = selectedText;
        togglePrivacy();

        renderTips(selectedValue);
        if (tipsModal) tipsModal.classList.add('active');
    });

    // Injeção limpa do botão de privacidade (Olho)
    const bannerContent = banner ? banner.querySelector('.banner-content') : null;
    if (bannerContent && !document.getElementById('privacyEyeBtn')) {
        const eyeBtn = document.createElement('button');
        eyeBtn.id = "privacyEyeBtn";
        eyeBtn.style = "background: none; border: none; color: inherit; cursor: pointer; margin-left: 10px; display: inline-flex; align-items: center;";
        eyeBtn.innerHTML = '<i id="privacyEyeIcon" class="ph ph-eye-slash" style="font-size: 1.2rem;"></i>';
        bannerContent.appendChild(eyeBtn);
        
        const toggleHandler = (e) => {
            e.stopPropagation();
            privacyState.isHidden = !privacyState.isHidden;
            togglePrivacy();
        };
        eyeBtn.addEventListener('click', toggleHandler);
        
        const textElement = document.getElementById('addictionText');
        if (textElement) textElement.addEventListener('click', toggleHandler);
    }

    const textObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList" && mutation.target.id === "addictionText") {
                const currentText = mutation.target.textContent;
                if (currentText && !currentText.includes("Conteúdo Oculto") && !currentText.startsWith("Vencendo:")) {
                    privacyState.actualText = currentText.replace("Vencendo: ", "");
                    togglePrivacy();
                }
            }
        });
    });

    const targetText = document.getElementById('addictionText');
    if (targetText) textObserver.observe(targetText, { childList: true });

    const historyList = document.getElementById('historyList');
    if (historyList) {
        const historyObserver = new MutationObserver(() => injectDeleteButtons());
        historyObserver.observe(historyList, { childList: true });
    }

    const savedAddiction = localStorage.getItem('userRecoveryAddiction');
    const savedAddictionName = localStorage.getItem('userRecoveryAddictionName');
    
    if (savedAddiction) {
        if (welcomeModal) welcomeModal.classList.remove('active');
        if (banner) banner.style.display = 'flex';
        privacyState.actualText = savedAddictionName;
        togglePrivacy();
        renderTips(savedAddiction);
    } else {
        if (welcomeModal) welcomeModal.classList.add('active');
        if (banner) banner.style.display = 'none';
    }

    const openWelcomeModal = () => {
        if (welcomeModal) welcomeModal.classList.add('active');
        const settings = document.getElementById('settingsModal');
        if (settings) settings.classList.remove('active');
    };
    
    const changeBtn = document.getElementById('changeAddictionBtn');
    if (changeBtn) changeBtn.addEventListener('click', openWelcomeModal);
    
    const editBtn = document.getElementById('editAddictionBtn');
    if (editBtn) editBtn.addEventListener('click', openWelcomeModal);
    
    injectDeleteButtons();
});