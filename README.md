# Jornada de Recuperação

Diário de apoio para acompanhar a recuperação de vícios (álcool, tabaco, jogos, redes sociais e outros). Funciona 100% no navegador, sem backend, sem conta e sem enviar dados para lugar nenhum.

## Recursos

- **Sequência atual** e **melhor sequência** de dias limpos, além do total e da taxa de sucesso
- Registro de **tropeços** com ambiente e anotação, sem culpa: um tropeço zera a sequência, mas não apaga o que você já construiu
- **Calendário mensal** navegável (setas ou deslize no celular) para rever meses anteriores, com resumo do mês e edição retroativa (acessível por teclado)
- **Marcos** de 1, 3, 7, 14, 21, 30, 60, 90, 180 e 365 dias
- Diário de anotações com histórico
- **Dicas personalizadas** por tipo de vício
- **Privacidade**: o que você está vencendo fica oculto na tela por padrão
- **Backup**: exportar e importar seus dados em JSON
- **Ajuda em crise** sempre à mão (CVV 188, SAMU 192, CAPS AD)

## Como usar

Abra o `index.html` no navegador. Para publicar, ative o GitHub Pages nas configurações do repositório (branch `main`, pasta raiz).

## Seus dados

Tudo fica no `localStorage` do navegador, neste aparelho. Isso significa que **limpar os dados do navegador apaga seu progresso**. Use *Configurações → Exportar* para guardar um backup e *Importar* para restaurar. O arquivo de backup contém suas anotações: guarde-o em um lugar seguro.

## Estrutura

```
index.html          interface e modais
recovery-app.js     estado, regras de sequência/marcos, interface e eventos
recovery-style.css  estilos
vendor/phosphor/    ícones Phosphor 2.1.1 (MIT), servidos localmente
tests/              testes de comportamento (jsdom)
```

## Testes

```bash
npm install
npm test
```

Os testes cobrem sequências e marcos, tropeços, escape de HTML nas anotações, backup, dados corrompidos, acessibilidade básica e sequências longas através do horário de verão. Para testar em outro fuso: `TZ=America/New_York npm test`.

## Aviso

Este projeto é uma ferramenta de apoio e **não substitui acompanhamento profissional**. Se você bebe diariamente ou em grande quantidade, não pare de repente por conta própria: a abstinência pode ser perigosa. Em crise, ligue 188 (CVV, 24 h). Em emergência médica, 192 (SAMU).
