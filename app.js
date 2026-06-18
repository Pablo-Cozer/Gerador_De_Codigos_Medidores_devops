// ============================================================
// app.js — Gerador de Código (Wizard Flow)
// ============================================================

const FAMILIES = { TYL, TBQM, TEF, TCF, TUS, ODM: DIAF, TEC };

// ─── Brand ───────────────────────────────────────────────────
const B = {
  blue: '#1A6DCB', blueDk: '#1455A0', blueLt: '#EAF1FB',
  white: '#FFFFFF', bg: '#F0F4F8', border: '#D8E4F0',
  text: '#1A2332', textMd: '#4A5E74', textLt: '#8AA0B4',
  green: '#1A9C5B', greenLt: '#E6F7EF',
};

const FAMILY_META = {
  TEF: {
    icon: '⬡',
    color: B.blue,
    description: 'Medição de líquidos condutivos · DN15–DN600 · IP66/67/68',
  },
  TCF: {
    icon: '∞',
    color: B.blue,
    description: 'Medição mássica de líquidos, gases e vapores · DN15–DN250',
  },
  TYL: {
    icon: '⟳',
    color: B.blue,
    description: 'Medidor rotativo de gás · G6–G650 · Alumínio',
  },
  TBQM: {
    icon: '◎',
    color: B.blue,
    description: 'Medidor por turbina · G40–G4000 · Gás',
  },
  TUS: {
    icon: '≋',
    color: B.blue,
    description: 'Medidor ultrassônico · 3"–12" · Gás · 6/8 vias',
  },
  ODM: {
    icon: '◇',
    color: B.blue,
    description: 'Medidor diafragma · G1.0–G6.0 · Gás residencial/comercial',
  },
  TEC: {
    icon: '▣',
    color: B.blue,
    description: 'Corretor de volume TEC-III · Gás · RS485/4G/NB-IoT/BT',
  },
};

// Detalhes complementares por família e parâmetro (enriquece os cards)
const PARAM_DETAILS = {
  TEF: {
    transmitter_type: { C: 'Transmissor e sensor em um único corpo', R: 'Transmissor instalado separado do sensor' },
    dn: {
      '015':'Qmax: 6 m³/h · ½"','020':'Qmax: 11 m³/h · ¾"','025':'Qmax: 18 m³/h · 1"',
      '032':'Qmax: 29 m³/h · 1¼"','040':'Qmax: 45 m³/h · 1½"','050':'Qmax: 71 m³/h · 2"',
      '065':'Qmax: 119 m³/h · 2½"','080':'Qmax: 181 m³/h · 3"','100':'Qmax: 283 m³/h · 4"',
      '125':'Qmax: 442 m³/h · 5"','150':'Qmax: 636 m³/h · 6"','200':'Qmax: 1.131 m³/h · 8"',
      '250':'Qmax: 1.767 m³/h · 10"','300':'Qmax: 2.545 m³/h · 12"',
      '350':'Qmax: 3.464 m³/h · 14"','400':'Qmax: 4.524 m³/h · 16"',
      '450':'Qmax: 5.726 m³/h · 18"','500':'Qmax: 7.069 m³/h · 20"','600':'Qmax: 10.200 m³/h · 24"',
    },
    ex_approval: { '00':'Sem certificação de área classificada', AA:'Zona 1/21 · Gases e poeiras combustíveis' },
    precision: { '1':'Aplicações menos críticas', '2':'Padrão recomendado' },
    transmitter_housing: { '1':'Leve, padrão industrial', '2':'Ambientes agressivos / costeiros', Y:'Sob consulta' },
    electrical_conn: { N:'Padrão americano', M:'Padrão europeu / métrico', Y:'Sob consulta' },
    power_supply: { A:'85–265V AC · 50Hz ±4Hz', D:'24V DC ±15~20%', Y:'Sob consulta' },
    flange_material: { '1':'Uso geral, ambiente seco', '2':'Resistência moderada', '3':'Alta corrosividade / sanitário', Y:'Sob consulta' },
    sensor_housing: { '1':'Padrão', '2':'Resistência moderada', '3':'Alta corrosividade', Y:'Sob consulta' },
    lining: {
      A:'-20°C a 80°C · Água, esgoto, pasta mineral', B:'-40°C a 130°C · Ácidos, bases, solventes',
      C:'-20°C a 150°C · Ácidos concentrados, HCl', D:'-20°C a 180°C · Processos quentes',
      E:'Alta abrasão · Mineração, pasta', F:'Abrasão extrema · Pasta abrasiva',
      G:'Resistência química ampla', Y:'Sob consulta',
    },
    electrode: {
      '1':'Água, esgoto, uso geral', '2':'Ácidos mistos, sais oxidantes, água do mar',
      '3':'Cloretos, hipoclorito, água do mar', '4':'HCl <40%, H₂SO₄, ácido nítrico',
      '5':'Cobre quase todos os meios químicos', '6':'Alta abrasão', '7':'Alta abrasão + corrosão', Y:'Sob consulta',
    },
    process_conn: {
      E00:'Flange europeia PN6', E01:'Flange europeia PN10', E02:'Flange europeia PN16',
      E03:'Flange europeia PN25', E04:'Flange europeia PN40', A01:'Flange americana Cl.150',
      YYY:'Conexão fora do catálogo — descreva a classe abaixo',
    },
    cable_length: { L05:'Somente versão remota', L10:'Somente versão remota', L15:'Somente versão remota', L20:'Somente versão remota' },
    calibration: {
      C1:'Certificado customizado', C2:'Certificado customizado 5 pts',
      C3:'Acreditada padrão', C4:'Pontos personalizados', C5:'Acreditada 5 pontos', CY:'Sob consulta',
    },
    grounding_rings: { R1:'Tubulações plásticas / não condutoras', R2:'Ambientes corrosivos', R3:'Alta corrosividade', R4:'Ácidos fortes', RY:'Sob consulta' },
    protection_grade: { I8:'Submersível até 3 m / 72 h — apenas versão remota' },
  },
  TCF: {
    transmitter_type: { C:'Transmissor e sensor em um único corpo', R:'Transmissor instalado separado do sensor' },
    dn: {
      '008':'DN8 · Especial','015':'Qmax: 7.200 kg/h · ½"','025':'Qmax: 18.000 kg/h · 1"',
      '050':'Qmax: 80.000 kg/h · 2"','080':'Qmax: 200.000 kg/h · 3"',
      '100':'Qmax: 480.000 kg/h · 4"','150':'Qmax: 800.000 kg/h · 6"','250':'DN250 · 10"',
    },
    ex_approval: { '00':'Sem certificação de área classificada', AA:'Zona 1/21 · Gases e poeiras combustíveis' },
    precision: { '1':'0,2% da leitura', '2':'Alta precisão 0,15%', '3':'Precisão máxima 0,1%' },
    transmitter_housing: { '1':'Leve, padrão industrial', '2':'Ambientes agressivos / costeiros', Y:'Sob consulta' },
    electrical_conn: { N:'Padrão americano', M:'Padrão europeu / métrico', Y:'Sob consulta' },
    power_supply: { D:'24V DC ±15~20%', A:'85–265V AC · 50Hz', S:'Autosselecionável', Y:'Sob consulta' },
    output2: { '1':'Sem saída adicional', '2':'Loop de corrente ativo', '3':'Loop de corrente passivo' },
    io3: { '1':'Sem I/O adicional', '2':'Entrada ativa 4–20 mA', '3':'Entrada passiva 4–20 mA' },
    process_temp: { U:'-40°C a +204°C (padrão)', Y:'Sob consulta' },
    sensor_material: { S:'Uso geral', H:'Alta corrosividade · Alloy C22', Y:'Sob consulta' },
    cable_length: { L05:'Somente versão remota', L10:'Somente versão remota', L15:'Somente versão remota', L20:'Somente versão remota', L25:'Somente versão remota' },
    flow_calibration: {
      C1:'Certificado customizado 3 pts', C2:'Certificado customizado 5 pts',
      C3:'IEC/ISO 17025 pontos padrão', C4:'IEC/ISO 17025 pontos personalizados',
      C5:'IEC/ISO 17025 — 5 pontos', CY:'Sob consulta',
    },
  },
  TYL: {
    designacao: {
      'G6':'Qmax: 10 m³/h','G10':'Qmax: 16 m³/h','G16':'Qmax: 25 m³/h',
      'G25':'Qmax: 40 m³/h','G40':'Qmax: 65 m³/h','G65':'Qmax: 100 m³/h',
      'G100':'Qmax: 160 m³/h','G160':'Qmax: 250 m³/h','G250':'Qmax: 400 m³/h',
      'G400':'Qmax: 650 m³/h','G650':'Qmax: 1.000 m³/h',
    },
    sensor: {
      A:'Sem sensores', B:'Somente 1 HF', C:'1 sensor LF',
      D:'1 LF + 1 HF', E:'1 LF + 2 HF', F:'2 sensores LF',
      G:'2 LF + 1 HF',
    },
    termopoco: { '0':'Sem termopoço', '1':'Com 1 termopoço', '2':'Com 2 termopoços' },
    cor: { '0':'Cor padrão Tancy', '1':'Padrão Petrobras', '2':'RAL 7035 · Cinza claro', '3':'Munsell 6.5 · Cinza médio' },
    range: { A:'1:10', B:'1:20' },
    especificos: {
      A:'Fluxo Esq→Dir · Index Padrão', B:'Esq→Dir · Padrão + EVC', C:'Esq→Dir · Index Alumínio', D:'Esq→Dir · Alumínio + EVC',
      E:'Fluxo Dir→Esq · Index Padrão', F:'Dir→Esq · Padrão + EVC', G:'Dir→Esq · Index Alumínio', H:'Dir→Esq · Alumínio + EVC',
    },
  },
  TBQM: {
    designacao: {
      'G40':'Qmax: 65 m³/h','G65':'Qmax: 100 m³/h','G100':'Qmax: 160 m³/h',
      'G160':'Qmax: 250 m³/h','G250':'Qmax: 400 m³/h','G400':'Qmax: 650 m³/h',
      'G650':'Qmax: 1.000 m³/h','G1000':'Qmax: 1.600 m³/h','G1600':'Qmax: 2.500 m³/h',
      'G2500':'Qmax: 4.000 m³/h','G4000':'Qmax: 6.500 m³/h',
    },
    sensor: {
      A:'Sem sensores', B:'Somente 1 HF', C:'2 sensores HF',
      D:'1 sensor LF', E:'1 LF + 1 HF', F:'1 LF + 2 HF',
      G:'2 sensores LF', H:'2 LF + 1 HF', I:'2 LF + 2 HF',
    },
    termopoco: { '0':'Sem termopoço', '1':'Com 1 termopoço', '2':'Com 2 termopoços' },
    cor: { '0':'Cor padrão Tancy', '1':'Padrão Petrobras', '2':'RAL 7035 · Cinza claro', '3':'Munsell 6.5 · Cinza médio' },
    range: { A:'1:10', B:'1:20' },
    especificos: {
      A:'Fluxo Esq→Dir · Index Padrão', B:'Esq→Dir · Padrão + EVC', C:'Esq→Dir · Index Alumínio', D:'Esq→Dir · Alumínio + EVC',
      E:'Fluxo Dir→Esq · Index Padrão', F:'Dir→Esq · Padrão + EVC', G:'Dir→Esq · Index Alumínio', H:'Dir→Esq · Alumínio + EVC',
    },
  },
};

// ─── Step-level help descriptions ────────────────────────────
const STEP_HELP = {
  TEF: {
    transmitter_type: 'Versão compacta (C): transmissor e sensor em um único corpo. Versão remota (R): transmissor instalado separado via cabo — indicada para alta vibração, temperatura do processo > 60 °C ou espaço limitado.',
    dn: 'Diâmetro nominal da tubulação. Escolha o DN que corresponde ao diâmetro interno da linha de processo. Determina a faixa de vazão máxima.',
    ex_approval: 'Certificação para áreas classificadas (zonas com risco de explosão). Selecione "AA" apenas se o local de instalação exigir.',
    precision: 'Classe de precisão da medição. Padrão (2) é suficiente para a maioria das aplicações. Classe 1 para aplicações de faturamento e controle rigoroso.',
    transmitter_housing: 'Material da carcaça do transmissor eletrônico. Alumínio é padrão; Aço inox para ambientes com alta umidade, corrosivos ou costeiros.',
    electrical_conn: 'Tipo de entrada de cabo do transmissor. NPT (N) é padrão americano; M20 (M) é padrão europeu/métrico.',
    power_supply: 'Tensão de alimentação do transmissor. AC (A) para alimentação industrial convencional; DC (D) para painéis e sistemas SCADA.',
    flange_material: 'Material do flange de conexão à tubulação. Carbono (1) para líquidos não corrosivos; AISI 316 (2) para corrosividade moderada; AISI 316L (3) para sanitário ou alta corrosão.',
    sensor_housing: 'Material da carcaça do sensor em contato com o fluido. Aço Inox (1) padrão; opções mais nobres para meios corrosivos.',
    lining: 'Revestimento interno do tubo sensor. Defina com base na temperatura, agressividade química e abrasão do fluido.',
    electrode: 'Material dos eletrodos em contato direto com o fluido. Escolha conforme a composição química do processo.',
    process_conn: 'Norma e classe de pressão do flange de processo. EN 1092-1 (europeu) ou ANSI (americano). Escolha de acordo com a tubulação existente. Para conexões fora do catálogo (rosqueadas, wafer, especiais), selecione "Especial / Sob Consulta" — código YYY — e descreva a classe no campo que aparecerá abaixo.',
    cable_length: 'Comprimento do cabo de conexão entre sensor e transmissor (versão remota). Certifique-se de que o comprimento cubra a distância real de instalação.',
    calibration: 'Certificado de calibração que acompanha o equipamento. Para contratos de faturamento, exija pelo menos C3 (INMETRO/ISO 17025).',
    grounding_rings: 'Anéis de aterramento para proteção dos eletrodos em tubulações plásticas ou revestidas. Necessários quando a tubulação não é condutora.',
    protection_grade: 'Grau de proteção adicional IP68 — submersão prolongada. Somente versão remota, onde o sensor pode ficar submerso.',
  },
  TCF: {
    transmitter_type: 'Versão compacta (C): transmissor integrado ao sensor. Versão remota (R): transmissor separado via cabo — para alta vibração, temperatura de processo elevada ou espaço restrito.',
    dn: 'Diâmetro nominal do tubo de medição. O coriolis opera com tubo em U interno — o DN determina a faixa mássica máxima.',
    ex_approval: 'Certificação ATEX para zonas com atmosfera potencialmente explosiva. Selecione conforme classificação da área de instalação.',
    precision: 'Classe de exatidão da medição mássica. 0,2% (1) padrão; 0,15% (2) para alta precisão; 0,1% (3) para faturamento e aplicações críticas.',
    transmitter_housing: 'Material da carcaça do transmissor. Alumínio (1) padrão; Aço inox (2) para ambientes corrosivos ou costeiros.',
    electrical_conn: 'Entrada de cabo do transmissor. NPT (N) padrão americano; M20 (M) padrão europeu.',
    power_supply: 'Tensão de alimentação. AC (A) industrial; DC (D) para sistemas de controle; autosselecionável (S) para maior flexibilidade.',
    output2: 'Saída analógica secundária independente (além da 4–20 mA principal). Útil quando o sinal vai a dois sistemas diferentes.',
    io3: 'Entrada de corrente adicional (ex.: sinal de temperatura externa para cálculo de energia).',
    process_temp: 'Faixa de temperatura do fluido no processo. Padrão (U) cobre a grande maioria das aplicações industriais.',
    sensor_material: 'Material dos tubos de medição do sensor. Inox 316L (S) padrão; Alloy C22 (H) para fluidos altamente corrosivos.',
    cable_length: 'Comprimento do cabo entre sensor e transmissor para versão remota.',
    flow_calibration: 'Certificado de calibração em bancada. Para faturamento, exija C3 ou C5 (ISO 17025 acreditado).',
  },
  TYL: {
    designacao: 'Designação G do medidor rotativo — determina a faixa de vazão máxima. Escolha o G imediatamente acima da sua Qmáx de projeto.',
    sensor: 'Pulsos gerados para medição eletrônica (totalização, SCADA). HF = alta frequência (precisão); LF = baixa frequência (fluxo pulsante). Sem sensor = somente mecânico.',
    termopoco: 'Termopoço integrado ao corpo do medidor para leitura de temperatura do gás — necessário para correção volumétrica (conversão para Nm³).',
    cor: 'Acabamento de pintura externa. Padrão Tancy ou Petrobras (vermelho). Especifique RAL/Munsell se houver exigência contratual.',
    range: 'Relação entre Qmín e Qmáx do medidor. 1:10 cobre a maioria dos casos; 1:20 para perfis de carga muito variáveis.',
    especificos: 'Define o sentido físico do fluxo em relação ao índice (totaliz.). Escolha conforme o layout da linha de gás e o lado de leitura desejado.',
  },
  TUS: {
    model_type: 'Número de vias acústicas. 6 vias para aplicações padrão; 8 vias para maior precisão e perfis de fluxo complexos.',
    caliber: 'Diâmetro da tubulação em polegadas. 18" a 48" ou maior é produto customizado.',
    pressure_class: 'Classe de pressão ANSI do flange.',
    flange_face: 'Acabamento da face do flange. RF (Raised Face) padrão; RJ (Ring Type Joint) para alta pressão.',
    schedule: 'Espessura de parede da tubulação. SC40 padrão; SC60/SC80 para maiores pressões.',
    material: 'Material do corpo. Aço Carbono (CS) padrão; Inox (SS) para corrosão; Baixa Temperatura (LC) para criogênicos.',
    wireless: 'Tipo de comunicação. Básico (N) inclui RS485 e Ethernet; 4G para telemetria remota.',
  },
  TBQM: {
    designacao: 'Designação G da turbina — define a faixa de medição. Selecione o G adequado à Qmáx de projeto, respeitando a pressão de operação.',
    sensor: 'Sensores magnéticos para sinal de pulso (HF/LF). Necessário para sistemas de telemetria, SCADA ou conversores volume.',
    termopoco: 'Alojamento para sensor de temperatura integrado ao corpo — indispensável em sistemas de correção de volume (P+T).',
    cor: 'Pintura externa conforme especificação do cliente ou normas da empresa.',
    range: 'Turndown (relação Qmáx/Qmín). 1:10 padrão; 1:20 para perfis de carga variáveis.',
    especificos: 'Sentido de fluxo relativo ao display de leitura e tipo de indexador.',
    material: 'Material do corpo da turbina. Alumínio para pressões até 16 bar; Ferro fundido ou Aço para pressões mais elevadas.',
    classe: 'Classe de pressão do corpo — determinada pelo material e conexão selecionados.',
    conexao: 'Tipo de conexão à tubulação. Flangeado (conforme norma) ou roscado, conforme disponível para o DN.',
    precisao: 'Classe de exatidão da medição volumétrica.',
  },
};


// SVG icons
const ICONS = {
  back:     '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrow:    '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check:    '<svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M2.5 8l4 4 7-8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  copy:     '<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="8" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3a1 1 0 011-1h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  close:    '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  trash:    '<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 5h10M6 5V3h4v2M5 5l.5 8h5L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  edit:     '<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  download: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 2v9M4 7l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  saveSpec: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 2h8l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 2v4h5V2M5 9h6M5 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  template: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 2h10a1 1 0 011 1v11l-4-2.5L6 14V3a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  sheet:    '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 1v4h4M5 7h6M5 10h6M5 13h3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  excel:    '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="1" width="9" height="13" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 5h5M5 8h5M5 11h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  pdf:      '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="3" y="6" width="10" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M5 6V3a1 1 0 011-1h4a1 1 0 011 1v3M5 10h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
};

// ─── State ────────────────────────────────────────────────────
let phase = 'family';           // 'family' | 'configure' | 'conditions' | 'order-list' | 'order'
let currentFamilyKey = null;
let currentFamily = null;
let conditionsFamilyKey = null; // rastreia qual família foi exibida por último nas condições
let conditionsFlowKey = null;   // rastreia designacao+conexao para detectar mudança de DN
let currentStepIndex = 0;
let paramValues = {};
let optionalValues = {};
let sidebarFilter = null;       // null = all specs | string = client name
let editingSpecId = null;       // null | spec.id (edit mode)
let returnToOrder = false;      // true quando o usuário está configurando um novo item a partir do pedido

// ─── IndexedDB — armazenamento de arquivos anexados ao pedido ─
const IDB_NAME  = 'aepio_db';
const IDB_VER   = 1;
const IDB_STORE = 'order_files';
function idbOpen() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(IDB_NAME, IDB_VER);
    r.onupgradeneeded = e => {
      if (!e.target.result.objectStoreNames.contains(IDB_STORE))
        e.target.result.createObjectStore(IDB_STORE, { keyPath: 'id' });
    };
    r.onsuccess = e => res(e.target.result);
    r.onerror   = e => rej(e.target.error);
  });
}
async function idbSave(rec) {
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(rec);
    tx.oncomplete = res; tx.onerror = e => rej(e.target.error);
  });
}
async function idbGet(id) {
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const tx = db.transaction(IDB_STORE, 'readonly');
    const r  = tx.objectStore(IDB_STORE).get(id);
    r.onsuccess = e => res(e.target.result);
    r.onerror   = e => rej(e.target.error);
  });
}
async function idbDeleteMany(ids) {
  if (!ids.length) return;
  const db = await idbOpen();
  return new Promise((res, rej) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const st = tx.objectStore(IDB_STORE);
    ids.forEach(id => st.delete(id));
    tx.oncomplete = res; tx.onerror = e => rej(e.target.error);
  });
}

// ─── Multi-pedido ─────────────────────────────────────────────
const ORDERS_LIST_KEY      = 'aepio_orders_list';
const ACTIVE_ORDER_ID_KEY  = 'aepio_active_order_id';

// Migração do schema antigo (single-order) → novo (multi-order)
(function migrateOrders() {
  if (localStorage.getItem(ORDERS_LIST_KEY)) return; // já migrado
  const oldItems  = localStorage.getItem('aepio_gerador_order');
  const oldHeader = localStorage.getItem('aepio_order_header');
  const oldAtts   = localStorage.getItem('aepio_order_atts');
  const id = 'ord_' + Date.now();
  const list = [{ id, name: 'Cotação 1', createdAt: new Date().toISOString() }];
  localStorage.setItem(ORDERS_LIST_KEY, JSON.stringify(list));
  localStorage.setItem(ACTIVE_ORDER_ID_KEY, id);
  if (oldItems)  localStorage.setItem('aepio_order_items_'  + id, oldItems);
  if (oldHeader) localStorage.setItem('aepio_order_header_' + id, oldHeader);
  if (oldAtts)   localStorage.setItem('aepio_order_atts_'   + id, oldAtts);
})();

function getOrdersList()   { try { return JSON.parse(localStorage.getItem(ORDERS_LIST_KEY) || '[]'); } catch { return []; } }
function saveOrdersList(l) { try { localStorage.setItem(ORDERS_LIST_KEY, JSON.stringify(l)); } catch {} }
function getActiveOrderId()  { return localStorage.getItem(ACTIVE_ORDER_ID_KEY) || getOrdersList()[0]?.id || null; }
function setActiveOrderId(id){ try { localStorage.setItem(ACTIVE_ORDER_ID_KEY, id); } catch {} }

// Garante que sempre existe ao menos um pedido
function ensureOrder() {
  let list = getOrdersList();
  if (list.length === 0) {
    const id = 'ord_' + Date.now();
    list = [{ id, name: 'Cotação 1', createdAt: new Date().toISOString() }];
    saveOrdersList(list);
    setActiveOrderId(id);
    return id;
  }
  return getActiveOrderId() || list[0].id;
}

let _activeOrderId = ensureOrder();

// Dados do pedido ativo em memória
let orderItems  = (() => { try { return JSON.parse(localStorage.getItem('aepio_order_items_'  + _activeOrderId) || '[]'); } catch { return []; } })();
let orderHeader = (() => { try { return JSON.parse(localStorage.getItem('aepio_order_header_' + _activeOrderId) || '{}'); } catch { return {}; } })();
let orderAtts   = (() => { try { return JSON.parse(localStorage.getItem('aepio_order_atts_'   + _activeOrderId) || '[]'); } catch { return []; } })();

function saveOrderItems()  { try { localStorage.setItem('aepio_order_items_'  + _activeOrderId, JSON.stringify(orderItems));  } catch {} }
function saveOrderHeader() { try { localStorage.setItem('aepio_order_header_' + _activeOrderId, JSON.stringify(orderHeader)); } catch {} }
function saveOrderAtts()   { try { localStorage.setItem('aepio_order_atts_'   + _activeOrderId, JSON.stringify(orderAtts));   } catch {} }

function switchToOrder(id) {
  _activeOrderId = id;
  setActiveOrderId(id);
  orderItems  = (() => { try { return JSON.parse(localStorage.getItem('aepio_order_items_'  + id) || '[]'); } catch { return []; } })();
  orderHeader = (() => { try { return JSON.parse(localStorage.getItem('aepio_order_header_' + id) || '{}'); } catch { return {}; } })();
  orderAtts   = (() => { try { return JSON.parse(localStorage.getItem('aepio_order_atts_'   + id) || '[]'); } catch { return []; } })();
}

function createNewOrder(name) {
  const id = 'ord_' + Date.now();
  const list = getOrdersList();
  list.push({ id, name: name || `Cotação ${list.length + 1}`, createdAt: new Date().toISOString() });
  saveOrdersList(list);
  switchToOrder(id);
  return id;
}

function renameActiveOrder(name) {
  const list = getOrdersList();
  const o = list.find(x => x.id === _activeOrderId);
  if (o) { o.name = name; saveOrdersList(list); }
}

function deleteOrder(id) {
  let list = getOrdersList();
  list = list.filter(x => x.id !== id);
  if (list.length === 0) {
    const newId = 'ord_' + Date.now();
    list.push({ id: newId, name: 'Cotação 1', createdAt: new Date().toISOString() });
  }
  saveOrdersList(list);
  // limpa dados do pedido removido
  ['items','header','atts'].forEach(k => localStorage.removeItem('aepio_order_' + k + '_' + id));
  if (_activeOrderId === id) switchToOrder(list[0].id);
}

// Status possíveis por item
const ITEM_STATUS_MAP = {
  pendente:   { label: 'Pendente',   color: '#6B7280', bg: '#F3F4F6' },
  em_revisao: { label: 'Em Revisão', color: '#D97706', bg: '#FEF3C7' },
  aprovado:   { label: 'Aprovado',   color: '#059669', bg: '#D1FAE5' },
  enviado:    { label: 'Enviado',    color: '#2563EB', bg: '#DBEAFE' },
};

function addToOrder(qty, tag) {
  const { code, valid } = buildCode();
  if (!valid || code.includes('?')) { showToast('Complete a configuração antes de adicionar à cotação.', false); return false; }
  orderItems.push({
    id: generateId(), qty: qty || 1, tag: tag || '', status: 'pendente',
    familyKey: currentFamilyKey,
    paramValues: { ...paramValues }, optionalValues: { ...optionalValues },
    processConditions: getProcessConditions(), code,
  });
  saveOrderItems();
  return true;
}
function removeOrderItem(id) { orderItems = orderItems.filter(i => i.id !== id); saveOrderItems(); }
async function clearOrder() {
  try { await idbDeleteMany(orderAtts.map(a => a.id)); } catch (e) {}
  orderAtts   = []; saveOrderAtts();
  orderItems  = []; saveOrderItems();
  orderHeader = {}; saveOrderHeader();
  // Atualiza nome na lista para refletir o estado vazio, se necessário
  updateSidebarClients();
}

// ─── History API — suporte ao botão voltar do navegador ───────
function historyState() {
  return { phase, stepIndex: currentStepIndex, familyKey: currentFamilyKey };
}

function navigate(newPhase, newStepIndex = 0, opts = {}) {
  phase            = newPhase;
  currentStepIndex = newStepIndex;
  history.pushState(historyState(), '');
  closeMobileNav();
  render();
  if (opts.scroll !== false) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMobileNav() {
  document.querySelector('.sidebar')?.classList.add('mobile-open');
  const bd = document.getElementById('mobile-nav-backdrop');
  if (bd) { bd.style.display = 'block'; requestAnimationFrame(() => bd.classList.add('visible')); }
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  document.querySelector('.sidebar')?.classList.remove('mobile-open');
  const bd = document.getElementById('mobile-nav-backdrop');
  if (bd) {
    bd.classList.remove('visible');
    setTimeout(() => { if (!bd.classList.contains('visible')) bd.style.display = 'none'; }, 260);
  }
  document.body.style.overflow = '';
}

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Registra estado inicial para que o popstate funcione na primeira fase
  history.replaceState(historyState(), '');

  window.addEventListener('popstate', (e) => {
    const s = e.state;
    if (!s) { phase = 'family'; currentStepIndex = 0; render(); return; } // sem estado: borda do histórico
    phase            = s.phase      || 'family';
    currentStepIndex = s.stepIndex  || 0;
    if (s.familyKey && FAMILIES[s.familyKey]) {
      currentFamilyKey = s.familyKey;
      currentFamily    = FAMILIES[s.familyKey];
    }
    render();
  });

  setupConditionsListeners();
  document.getElementById('nav-home')?.addEventListener('click', () => {
    sidebarFilter = null;
    returnToOrder = false;
    navigate('family');
  });
  document.getElementById('topbar-home')?.addEventListener('click', () => {
    sidebarFilter = null;
    returnToOrder = false;
    navigate('family');
  });
  document.getElementById('topbar-menu')?.addEventListener('click', openMobileNav);
  document.getElementById('mobile-nav-backdrop')?.addEventListener('click', closeMobileNav);
  document.getElementById('nav-order')?.addEventListener('click', () => navigate('order-list'));
  document.getElementById('btn-save-template')?.addEventListener('click', showSaveTemplateForm);
  document.getElementById('btn-summary')?.addEventListener('click', () => navigate('summary'));
  render();
});

// ─── Main Render ──────────────────────────────────────────────
function render() {
  // Always clean up any wizard backdrop/panel state before rebuilding
  document.getElementById('wizard-backdrop')?.remove();
  document.body.style.overflow = '';

  const root = document.getElementById('wizard-root');
  const cond = document.getElementById('conditions-section');

  root.innerHTML = '';

  if (phase === 'conditions') {
    cond.style.display = '';
    renderConditionsHeader();
    updateCode();
  } else {
    cond.style.display = 'none';
  }

  if (phase === 'family')      root.appendChild(makeFamilyPhase());
  if (phase === 'configure')   root.appendChild(makeConfigurePhase());
  if (phase === 'summary')     root.appendChild(makeSummaryPhase());
  if (phase === 'order-list')  root.appendChild(makeOrderListPhase());
  if (phase === 'order')       root.appendChild(makeOrderPhase());

  updateSidebarClients();
}

// ── Hamburger panel helpers ───────────────────────────────────
function openWizardPanel() {
  document.getElementById('wizard-step-panel-el')?.classList.add('is-open');
  document.getElementById('wizard-backdrop')?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeWizardPanel() {
  document.getElementById('wizard-step-panel-el')?.classList.remove('is-open');
  document.getElementById('wizard-backdrop')?.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════════════════════
// PHASE: FAMILY
// ═══════════════════════════════════════════════════════════════
function makeFamilyPhase() {
  const wrap = div('');

  // Banner contextual quando usuário veio do pedido
  if (returnToOrder) {
    const orderName = getOrdersList().find(o => o.id === _activeOrderId)?.name || 'Cotação';
    const banner = el('div', { style: `background:${B.blueLt};border:1px solid ${B.blue}30;border-radius:10px;padding:10px 16px;margin-bottom:14px;display:flex;align-items:center;gap:10px;justify-content:space-between;flex-wrap:wrap;` });
    const info = el('div', { style: 'display:flex;align-items:center;gap:8px;' });
    info.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 3h12l-1.5 9H3.5L2 3z" stroke="${B.blue}" stroke-width="1.3" stroke-linejoin="round"/><path d="M5 3V2a1 1 0 011-1h4a1 1 0 011 1v1" stroke="${B.blue}" stroke-width="1.3"/></svg>`;
    const txt = el('span', { style: `font-size:13px;color:${B.blue};font-weight:500;` });
    txt.textContent = `Escolha a família para adicionar um novo item a "${orderName}"`;
    info.appendChild(txt);
    const backBtn = el('button', { style: `padding:5px 12px;border-radius:7px;border:1px solid ${B.blue}50;background:${B.white};color:${B.blue};font-size:12px;font-weight:600;font-family:inherit;cursor:pointer;flex-shrink:0;` });
    backBtn.textContent = '← Voltar à cotação';
    backBtn.addEventListener('click', () => { returnToOrder = false; navigate('order'); });
    banner.appendChild(info);
    banner.appendChild(backBtn);
    wrap.appendChild(banner);
  }

  // Page header
  const hdr = div('page-header');
  hdr.innerHTML = `
    <div>
      <h1 class="page-title">Gerador de Código</h1>
      <p class="page-subtitle">Selecione a família do medidor para começar</p>
    </div>`;
  wrap.appendChild(hdr);

  // Family cards grid
  const grid = el('div', { class: 'family-grid' });

  Object.entries(FAMILIES).forEach(([key, fam]) => {
    const meta = FAMILY_META[key];
    const card = el('div', {
      style: `background:${B.white};border:2px solid ${B.border};border-radius:12px;padding:24px 22px;cursor:pointer;transition:all .15s;`,
    });

    card.addEventListener('mouseenter', () => {
      card.style.borderColor = meta.color;
      card.style.boxShadow = `0 4px 20px ${meta.color}22`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = B.border;
      card.style.boxShadow = 'none';
    });
    card.addEventListener('click', () => goToFamily(key));

    card.innerHTML = `
      <div style="font-size:34px;line-height:1;margin-bottom:12px;">${meta.icon}</div>
      <div style="font-size:17px;font-weight:700;color:${B.text};margin-bottom:4px;">${fam.name}</div>
      <div style="font-size:12px;font-weight:600;color:${meta.color};font-family:'IBM Plex Mono',monospace;margin-bottom:10px;">${key}</div>
      <div style="font-size:13px;color:${B.textMd};line-height:1.5;">${meta.description}</div>`;

    grid.appendChild(card);
  });

  wrap.appendChild(grid);

  // Decode section
  wrap.appendChild(makeDecodeSection());

  // Templates section
  const templatesSection = makeTemplatesSection();
  if (templatesSection) wrap.appendChild(templatesSection);

  // Especificações salvas — só exibe quando um cliente está selecionado na sidebar
  if (sidebarFilter !== null) {
    const savedSection = makeSavedSpecsSection();
    if (savedSection) wrap.appendChild(savedSection);
  }

  return wrap;
}

function makeDecodeSection() {
  const section = el('div', {
    style: `margin-top:32px;background:${B.white};border:1px solid ${B.border};border-radius:10px;padding:20px 22px;`
  });

  const lbl = el('div', { style: `font-size:13px;font-weight:600;color:${B.textMd};margin-bottom:10px;` });
  lbl.textContent = 'Decodificar código existente';
  section.appendChild(lbl);

  const row = el('div', { style: 'display:flex;gap:8px;align-items:center;' });

  const input = el('input', {
    style: `flex:1;padding:9px 12px;border:1px solid ${B.border};border-radius:8px;font-size:14px;font-family:inherit;color:${B.text};background:${B.white};outline:none;`,
    type: 'text', placeholder: 'Cole um código para decodificar… Ex: TEFPC025E02…',
    spellcheck: 'false', autocomplete: 'off',
  });
  input.addEventListener('keydown', e => { if (e.key === 'Enter') parseCode(input.value.trim().toUpperCase()); });
  input.addEventListener('focus',   () => { input.style.borderColor = B.blue; });
  input.addEventListener('blur',    () => { input.style.borderColor = B.border; });

  const btn = el('button', {
    style: `padding:9px 16px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:13px;font-weight:600;cursor:pointer;color:${B.textMd};white-space:nowrap;font-family:inherit;`,
  });
  btn.textContent = '↩ Decodificar';
  btn.addEventListener('click', () => parseCode(input.value.trim().toUpperCase()));

  row.appendChild(input);
  row.appendChild(btn);
  section.appendChild(row);

  const msg = el('div', { style: 'margin-top:8px;font-size:13px;' });
  section.appendChild(msg);

  // Expose msg for parseCode to find by scanning the section
  msg.id = 'decode-msg';
  input.id = 'decode-input';

  return section;
}

// ═══════════════════════════════════════════════════════════════
// PHASE: CONFIGURE
// ═══════════════════════════════════════════════════════════════
function getWizardSteps() {
  if (!currentFamily) return [];
  const isRemote = paramValues.transmitter_type === 'R';

  const steps = currentFamily.parameters
    .filter(p => !p.fixed)
    .map(p => ({ ...p, isOptionals: false, isOptionalGroup: false }));

  // Filter and build optionals step
  const visibleOptionals = currentFamily.optionals.filter(o => !o.remoteOnly || isRemote);
  if (visibleOptionals.length > 0) {
    steps.push({
      id: '__optionals__',
      label: 'Opções Adicionais',
      isOptionals: true,
      optionalGroups: visibleOptionals,
    });
  }

  return steps;
}

function makeConfigurePhase() {
  const steps = getWizardSteps();
  const step = steps[currentStepIndex];
  if (!step) return div('');

  const fColor = FAMILY_META[currentFamilyKey]?.color || B.blue;

  // Backdrop for mobile/tablet panel overlay
  const backdrop = el('div', { id: 'wizard-backdrop', class: 'wizard-backdrop' });
  backdrop.addEventListener('click', closeWizardPanel);
  document.body.appendChild(backdrop);

  // Hamburger bar — visible only on tablet/mobile via CSS
  const hamburgerBar = makeWizardHamburgerBar(steps, step, fColor);

  const container = el('div', { class: 'wizard-3col' });
  container.appendChild(makeStepIndicator(steps, fColor));
  container.appendChild(makeStepContent(steps, step, fColor));
  container.appendChild(makeOrderCodePanel(fColor));

  const wrap = el('div', {});
  wrap.appendChild(hamburgerBar);

  // Banner contextual — aparece quando o usuário veio do pedido
  if (returnToOrder) {
    const orderName = getOrdersList().find(o => o.id === _activeOrderId)?.name || 'Cotação';
    const banner = el('div', { style: `background:${B.blueLt};border:1px solid ${B.blue}30;border-radius:10px;padding:10px 16px;margin-bottom:14px;display:flex;align-items:center;gap:10px;justify-content:space-between;` });
    const info = el('div', { style: 'display:flex;align-items:center;gap:8px;' });
    info.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 3h12l-1.5 9H3.5L2 3z" stroke="${B.blue}" stroke-width="1.3" stroke-linejoin="round"/><path d="M5 3V2a1 1 0 011-1h4a1 1 0 011 1v1" stroke="${B.blue}" stroke-width="1.3"/></svg>`;
    const txt = el('span', { style: `font-size:13px;color:${B.blue};font-weight:500;` });
    txt.textContent = `Adicionando item a "${orderName}" — clique "+ Cotação" ao finalizar`;
    info.appendChild(txt);
    const backBtn = el('button', { style: `padding:5px 12px;border-radius:7px;border:1px solid ${B.blue}50;background:${B.white};color:${B.blue};font-size:12px;font-weight:600;font-family:inherit;cursor:pointer;flex-shrink:0;` });
    backBtn.textContent = '← Voltar à cotação';
    backBtn.addEventListener('click', () => { returnToOrder = false; navigate('order'); });
    banner.appendChild(info);
    banner.appendChild(backBtn);
    wrap.appendChild(banner);
  }

  wrap.appendChild(container);
  return wrap;
}

function makeWizardHamburgerBar(steps, step, fColor) {
  const bar = el('div', { class: 'wizard-hamburger-bar' });

  const btn = el('button', { class: 'wizard-hamburger-btn' });
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;">
      <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    </svg>
    Etapas`;
  btn.style.cssText = `display:flex;align-items:center;gap:7px;background:${B.white};border:1px solid ${B.border};border-radius:8px;padding:7px 13px;font-size:13px;font-weight:600;font-family:inherit;color:${B.textMd};cursor:pointer;`;
  btn.addEventListener('click', openWizardPanel);

  const info = el('span', { class: 'wizard-hamburger-info' });
  const label = step ? step.label : '';
  info.innerHTML = `<span style="color:${B.textLt};font-size:11px;">Passo ${currentStepIndex + 1} de ${steps.length}&nbsp;&nbsp;</span><span style="color:${B.text};font-size:13px;font-weight:600;">${label}</span>`;

  bar.appendChild(btn);
  bar.appendChild(info);
  return bar;
}

// ── Step Indicator (left column) ──────────────────────────────
function makeStepIndicator(steps, fColor) {
  const panel = el('div', { class: 'wizard-step-panel', id: 'wizard-step-panel-el' });
  panel.style.cssText = `background:${B.white};border:1px solid ${B.border};border-radius:10px;padding:16px 14px;`;

  // Close button — only visible on mobile/tablet (via CSS .wizard-panel-close)
  const closeBtn = el('button', { class: 'wizard-panel-close' });
  closeBtn.title = 'Fechar';
  closeBtn.innerHTML = ICONS.close;
  closeBtn.style.cssText = `background:none;border:none;cursor:pointer;color:${B.textLt};padding:2px;margin-left:auto;display:flex;align-items:center;`;
  closeBtn.addEventListener('click', closeWizardPanel);
  const closeRow = el('div', { style: 'display:flex;align-items:center;justify-content:flex-end;margin-bottom:6px;' });
  closeRow.appendChild(closeBtn);
  panel.appendChild(closeRow);

  // Back to family button
  const backBtn = el('button', {
    style: `background:none;border:none;cursor:pointer;color:${B.textMd};font-size:12px;font-family:inherit;display:flex;align-items:center;gap:5px;padding:0;margin-bottom:14px;`,
  });
  backBtn.innerHTML = `${ICONS.back} Alterar família`;
  backBtn.addEventListener('click', () => {
    currentFamilyKey = null;
    currentFamily    = null;
    paramValues      = {};
    optionalValues   = {};
    navigate('family');
  });
  panel.appendChild(backBtn);

  // Family badge
  const meta = FAMILY_META[currentFamilyKey];
  const badge = el('div', {
    style: `display:flex;align-items:center;gap:8px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid ${B.border};`
  });
  badge.innerHTML = `
    <div style="width:28px;height:28px;border-radius:6px;background:${fColor}18;display:flex;align-items:center;justify-content:center;font-size:16px;">${meta.icon}</div>
    <div>
      <div style="font-size:13px;font-weight:700;color:${B.text};line-height:1.2;">${currentFamily.name}</div>
      <div style="font-size:11px;color:${fColor};font-family:'IBM Plex Mono',monospace;font-weight:600;">${currentFamilyKey}</div>
    </div>`;
  panel.appendChild(badge);

  // Steps list
  steps.forEach((s, i) => {
    const done = i < currentStepIndex;
    const active = i === currentStepIndex;

    const row = el('div', {
      style: `display:flex;gap:10px;align-items:flex-start;padding:7px 6px;border-radius:7px;cursor:pointer;transition:background .12s;background:${active ? fColor + '0D' : 'transparent'};margin-bottom:1px;`
    });

    // Circle
    const circle = el('div', {
      style: `width:20px;height:20px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;margin-top:1px;
        background:${active ? fColor : done ? fColor : B.border};
        color:${active || done ? '#fff' : B.textLt};
        border:${active ? 'none' : done ? 'none' : '1.5px solid ' + B.border};`
    });
    circle.innerHTML = done ? ICONS.check : String(i + 1);
    row.appendChild(circle);

    // Text
    const text = el('div', { style: 'flex:1;min-width:0;' });
    text.innerHTML = `<div style="font-size:12px;font-weight:${active ? 600 : 400};color:${active ? B.text : done ? B.textMd : B.textLt};line-height:1.3;">${s.label}</div>`;

    // Show selected value if done
    if (done && !s.isOptionals) {
      const val = paramValues[s.id];
      if (val) {
        const opts = typeof s.getDynamicOptions === 'function' ? s.getDynamicOptions(paramValues) : (s.options || []);
        const found = opts.find(o => o.code === val);
        const shortLabel = found ? found.label.split(' ')[0] : '';
        text.innerHTML += `<div style="font-size:11px;color:${B.textLt};font-family:'IBM Plex Mono',monospace;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${val}${shortLabel ? ' · ' + shortLabel : ''}</div>`;
      }
    } else if (done && s.isOptionals) {
      const count = Object.values(optionalValues).filter(Boolean).length;
      if (count > 0) {
        text.innerHTML += `<div style="font-size:11px;color:${B.textLt};font-family:'IBM Plex Mono',monospace;margin-top:2px;">${count} selecionada${count > 1 ? 's' : ''}</div>`;
      }
    }

    row.appendChild(text);

    // Click to jump to any step (backward or forward)
    if (!active) {
      row.addEventListener('click', () => {
        if (i > currentStepIndex) {
          // Navegar adiante: verifica se todos os steps obrigatórios anteriores estão preenchidos
          for (let j = 0; j < i; j++) {
            const s = steps[j];
            if (!s.isOptionals && !paramValues[s.id]) {
              // Bloqueia: vai até o step incompleto e avisa
              closeWizardPanel();
              navigate('configure', j);
              // Aviso visual: shake no grid de opções
              setTimeout(() => {
                const grid = document.querySelector('.options-grid');
                if (grid) {
                  grid.style.transition = 'transform .08s';
                  const shake = [6, -6, 4, -4, 0];
                  shake.reduce((p, x) => p.then(() => new Promise(res => {
                    grid.style.transform = `translateX(${x}px)`; setTimeout(res, 60);
                  })), Promise.resolve()).then(() => { grid.style.transform = ''; });
                }
                showToast('Selecione uma opção para "' + s.label + '" antes de continuar', false);
              }, 80);
              return;
            }
          }
        }
        closeWizardPanel();
        navigate('configure', i);
      });
      row.addEventListener('mouseenter', () => row.style.background = B.bg);
      row.addEventListener('mouseleave', () => row.style.background = 'transparent');
    }

    panel.appendChild(row);
  });

  return panel;
}

// ── Step Content (center column) ──────────────────────────────
function makeStepContent(steps, step, fColor) {
  const col = el('div', { class: 'wizard-step-center' });
  const total = steps.length;

  // Progress bar
  const progressWrap = el('div', { style: 'margin-bottom:20px;' });
  const pctRaw = currentStepIndex / total;
  const pct = Math.round(pctRaw * 100);
  progressWrap.innerHTML = `
    <div class="wizard-progress-label" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <span style="font-size:13px;color:${B.textMd};">Passo ${currentStepIndex + 1} de ${total}</span>
      <span style="font-size:13px;color:${B.textMd};">${pct}%</span>
    </div>
    <div style="height:4px;background:${B.border};border-radius:4px;overflow:hidden;">
      <div style="height:100%;background:${fColor};border-radius:4px;width:${pctRaw * 100}%;transition:width .3s ease;"></div>
    </div>`;
  col.appendChild(progressWrap);

  // Step card
  const card = el('div', {
    style: `background:${B.white};border:1px solid ${B.border};border-radius:10px;padding:22px;margin-bottom:16px;`
  });

  // Step title
  const title = el('h3', { style: `font-size:18px;font-weight:700;color:${B.text};margin-bottom:4px;` });
  title.textContent = step.label;
  card.appendChild(title);

  // Help description from STEP_HELP
  const helpText = STEP_HELP[currentFamilyKey]?.[step.id];
  if (helpText) {
    const helpBanner = el('div', {
      style: `font-size:13px;color:${B.textMd};background:${B.blueLt};border-radius:7px;padding:9px 13px;margin-bottom:14px;line-height:1.5;display:flex;gap:8px;align-items:flex-start;`
    });
    helpBanner.innerHTML = `<span style="color:${B.blue};flex-shrink:0;font-size:14px;margin-top:1px;">ℹ</span><span>${helpText}</span>`;
    card.appendChild(helpBanner);
  }

  // Subtitle
  const sub = el('p', { style: `font-size:13px;color:${B.textMd};margin-bottom:18px;` });
  sub.textContent = step.isOptionals ? 'Selecione zero ou mais opções (todas opcionais)' : 'Selecione uma opção';
  card.appendChild(sub);

  // Auto-select single-option step
  if (!step.isOptionals) {
    const opts = resolveOptions(step);
    if (opts.length === 1 && !paramValues[step.id]) {
      paramValues[step.id] = opts[0].code;
      currentFamily?.onParamChange?.(paramValues);
      const autoNote = el('div', {
        style: `font-size:11px;color:${B.green};background:${B.greenLt};border-radius:6px;padding:5px 10px;margin-bottom:12px;display:flex;align-items:center;gap:5px;`
      });
      autoNote.innerHTML = `${ICONS.check} <span>Única opção disponível — "<strong>${opts[0].label}</strong>" selecionada automaticamente</span>`;
      card.appendChild(autoNote);
    }
  }

  if (step.isOptionals) {
    card.appendChild(makeOptionalsContent(step, fColor));
  } else {
    const opts = resolveOptions(step);
    if (opts.length === 0) {
      const msg = el('div', {
        style: `padding:20px;text-align:center;color:${B.textMd};font-size:14px;`
      });
      msg.textContent = '— Selecione o DN primeiro para ver as opções disponíveis —';
      card.appendChild(msg);
    } else {
      card.appendChild(makeOptionsGrid(step, opts, fColor));
    }
  }

  col.appendChild(card);

  // Navigation buttons
  col.appendChild(makeNavButtons(steps, step, fColor));

  return col;
}

function resolveOptions(step) {
  if (typeof step.getDynamicOptions === 'function') return step.getDynamicOptions(paramValues) || [];
  return step.options || [];
}



function getPdfRenderRange(ws) {
  const sheetName = ws.name || '';

  if (sheetName.toLowerCase().includes('proposta')) {
    return {
      maxRow: 45,
      colCount: 9,
    };
  }

  return {
    maxRow: xlsxLastUsedRow(ws),
    colCount: xlsxLastUsedCol(ws),
  };
}





function makeOptionsGrid(step, opts, fColor) {
  const details = PARAM_DETAILS[currentFamilyKey]?.[step.id] || {};
  const grid = el('div', { class: 'options-grid' });

  opts.forEach(opt => {
    const selected = paramValues[step.id] === opt.code;
    const detail = details[opt.code] || '';
    const card = makeOptionCard(opt.code, opt.label, detail, selected, fColor, false, () => {
      // Limpa campos extras ao trocar de opção (saindo de YYY)
      if (step.id === 'process_conn' && opt.code !== 'YYY') {
        paramValues.process_conn_custom     = '';
        paramValues.process_conn_body_class = '';
      }
      paramValues[step.id] = opt.code;

      // Side effects
      if (step.id === 'dn') {
        autofillDnDefaults(opt.code);
        // Invalidate dynamic params that depend on dn
        currentFamily.parameters.forEach(p => {
          if (typeof p.getDynamicOptions === 'function') paramValues[p.id] = null;
        });
      }
      if (step.id === 'designacao') {
        currentFamily.parameters.forEach(p => {
          if (typeof p.getDynamicOptions === 'function') paramValues[p.id] = null;
        });
        paramValues.range = null;
      }
      if (step.id === 'material') {
        paramValues.classe = null;
      }
      currentFamily?.onParamChange?.(paramValues);
      render();
    });
    grid.appendChild(card);
  });

  // Conexão especial YYY — descrição da conexão + classe de pressão do corpo
  if (step.id === 'process_conn' && paramValues[step.id] === 'YYY') {
    const customWrap = el('div', { style: 'grid-column:1/-1;margin-top:8px;display:flex;flex-direction:column;gap:12px;' });

    // ─ Campo 1: descrição da conexão ─
    const connGroup = el('div', {});
    connGroup.innerHTML = `
      <label style="display:block;font-size:12px;font-weight:600;color:var(--text-md);margin-bottom:6px;">
        Descrição da conexão especial <span style="color:var(--red);">*</span>
        <span style="font-weight:400;color:var(--text-lt);"> — aparece na folha de dados</span>
      </label>`;
    const inp = el('input', {
      style: `width:100%;padding:10px 13px;border:2px solid ${fColor};border-radius:8px;font-size:14px;font-family:inherit;color:var(--text);outline:none;transition:box-shadow .15s;`,
    });
    inp.type = 'text';
    inp.placeholder = 'Ex: Rosqueado NPT 2" ANSI B1.20.1 · Aço Carbono';
    inp.value = paramValues.process_conn_custom || '';
    inp.addEventListener('input', () => { paramValues.process_conn_custom = inp.value.trim(); });
    inp.addEventListener('focus', () => { inp.style.boxShadow = `0 0 0 3px ${fColor}30`; });
    inp.addEventListener('blur',  () => { inp.style.boxShadow = 'none'; });
    connGroup.appendChild(inp);
    customWrap.appendChild(connGroup);

    // ─ Campo 2: classe de pressão do corpo ─
    const classeGroup = el('div', {});
    classeGroup.innerHTML = `
      <label style="display:block;font-size:12px;font-weight:600;color:var(--text-md);margin-bottom:6px;">
        Classe de Pressão do Corpo <span style="color:var(--red);">*</span>
        <span style="font-weight:400;color:var(--text-lt);"> — pode diferir da classe do flange</span>
      </label>`;
    const selWrap = el('div', { style: 'position:relative;' });
    selWrap.innerHTML = `<span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:var(--text-lt);pointer-events:none;font-size:12px;">▾</span>`;
    const classeSelect = el('select', {
      style: `width:100%;padding:10px 36px 10px 13px;border:2px solid ${fColor};border-radius:8px;font-size:14px;font-family:inherit;color:var(--text);outline:none;appearance:none;-webkit-appearance:none;background:var(--white);cursor:pointer;transition:box-shadow .15s;`,
    });
    [
      { value: '',              label: '— Selecione a classe de pressão do corpo —' },
      { value: 'PN6',           label: 'PN6' },
      { value: 'PN10',          label: 'PN10' },
      { value: 'PN16',          label: 'PN16' },
      { value: 'PN25',          label: 'PN25' },
      { value: 'PN40',          label: 'PN40' },
      { value: 'ANSI Cl. 150',  label: 'ANSI Classe 150' },
    ].forEach(o => {
      const opt = document.createElement('option');
      opt.value = o.value;
      opt.textContent = o.label;
      if (o.value === (paramValues.process_conn_body_class || '')) opt.selected = true;
      classeSelect.appendChild(opt);
    });
    classeSelect.addEventListener('change', () => { paramValues.process_conn_body_class = classeSelect.value; });
    classeSelect.addEventListener('focus',  () => { classeSelect.style.boxShadow = `0 0 0 3px ${fColor}30`; });
    classeSelect.addEventListener('blur',   () => { classeSelect.style.boxShadow = 'none'; });
    selWrap.appendChild(classeSelect);
    classeGroup.appendChild(selWrap);
    customWrap.appendChild(classeGroup);

    grid.appendChild(customWrap);
    setTimeout(() => inp.focus(), 60);
  }

  return grid;
}

function makeOptionalsContent(step, fColor) {
  const wrap = el('div', { style: 'display:flex;flex-direction:column;gap:20px;' });
  const isRemote = paramValues.transmitter_type === 'R';

  step.optionalGroups.forEach(group => {
    if (group.remoteOnly && !isRemote) return;
    const details = PARAM_DETAILS[currentFamilyKey]?.[group.id] || {};

    const section = el('div', {});
    const lbl = el('div', { style: `font-size:13px;font-weight:600;color:${B.textMd};margin-bottom:8px;` });
    lbl.textContent = group.label;
    section.appendChild(lbl);

    const grid = el('div', { class: 'options-grid' });

    group.options.forEach(opt => {
      const selected = optionalValues[group.id] === opt.code;
      const detail = details[opt.code] || '';
      const card = makeOptionCard(opt.code, opt.label, detail, selected, fColor, true, () => {
        optionalValues[group.id] = selected ? null : opt.code;
        render();
      });
      grid.appendChild(card);
    });

    section.appendChild(grid);
    wrap.appendChild(section);
  });

  return wrap;
}

function makeOptionCard(code, label, detail, selected, fColor, isOptional, onClick) {
  const card = el('div', {
    style: `border:2px solid ${selected ? fColor : B.border};background:${selected ? fColor + '0E' : B.white};border-radius:8px;padding:12px 14px;cursor:pointer;transition:all .15s;position:relative;`
  });

  card.addEventListener('click', onClick);
  card.addEventListener('mouseenter', () => {
    if (!selected) card.style.borderColor = fColor + '80';
  });
  card.addEventListener('mouseleave', () => {
    if (!selected) card.style.borderColor = B.border;
  });

  // Check badge
  if (selected) {
    const badge = el('div', {
      style: `position:absolute;top:8px;right:8px;width:18px;height:18px;border-radius:50%;background:${fColor};display:flex;align-items:center;justify-content:center;color:#fff;`
    });
    badge.innerHTML = ICONS.check;
    card.appendChild(badge);
  }

  const codeDiv = el('div', { style: `font-family:'IBM Plex Mono',monospace;font-size:15px;font-weight:700;color:${selected ? fColor : B.text};margin-bottom:5px;` });
  codeDiv.textContent = code;
  card.appendChild(codeDiv);

  const labelDiv = el('div', { style: `font-size:13px;font-weight:500;color:${B.text};line-height:1.4;` });
  labelDiv.textContent = label;
  card.appendChild(labelDiv);

  if (detail) {
    const detailDiv = el('div', { style: `font-size:12px;color:${B.textMd};margin-top:3px;` });
    detailDiv.textContent = detail;
    card.appendChild(detailDiv);
  }

  return card;
}

function makeNavButtons(steps, step, fColor) {
  const isLast = currentStepIndex === steps.length - 1;
  const opts = step.isOptionals ? [] : resolveOptions(step);
  const noOpts = !step.isOptionals && opts.length === 0;
  const canProceed = step.isOptionals || (paramValues[step.id] != null);

  const row = el('div', { style: 'display:flex;gap:10px;align-items:center;' });

  // Back button
  if (currentStepIndex > 0) {
    const backBtn = el('button', {
      style: `padding:9px 18px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:14px;font-family:inherit;cursor:pointer;color:${B.textMd};display:flex;align-items:center;gap:6px;font-weight:500;`
    });
    backBtn.innerHTML = `${ICONS.back} Anterior`;
    backBtn.addEventListener('click', () => navigate('configure', currentStepIndex - 1));
    row.appendChild(backBtn);
  }

  row.appendChild(el('div', { style: 'flex:1;' }));

  // Next / Finalizar
  const skipConditions = currentFamily && currentFamily.skipConditions;
  const nextLabel = isLast ? (skipConditions ? 'Resumo' : 'Condições do Processo') : 'Próximo';
  const nextIcon = ICONS.arrow;
  const disabled = noOpts || (!step.isOptionals && !canProceed);

  const nextBtn = el('button', {
    style: `padding:9px 22px;border-radius:8px;border:none;background:${disabled ? B.border : fColor};color:#fff;font-size:14px;font-family:inherit;cursor:${disabled ? 'not-allowed' : 'pointer'};font-weight:600;display:flex;align-items:center;gap:8px;`,
  });
  nextBtn.innerHTML = `${nextLabel} ${nextIcon}`;
  nextBtn.disabled = disabled;

  nextBtn.addEventListener('click', () => {
    if (disabled) return;
    // Validação: conexão especial YYY exige descrição + classe de pressão do corpo
    if (step.id === 'process_conn' && paramValues.process_conn === 'YYY') {
      // Lê o valor diretamente do DOM no momento do clique (garante captura mesmo sem 'input' event)
      const customInp = document.querySelector('.options-grid input[type="text"]');
      if (customInp) paramValues.process_conn_custom = customInp.value.trim();
      const bodySelect = document.querySelector('.options-grid select');
      if (bodySelect) paramValues.process_conn_body_class = bodySelect.value;

      if (!paramValues.process_conn_custom) {
        showToast('Descreva a conexão especial antes de continuar.', false);
        customInp?.focus();
        return;
      }
      if (!paramValues.process_conn_body_class) {
        showToast('Selecione a classe de pressão do corpo antes de continuar.', false);
        bodySelect?.focus();
        return;
      }
    }
    if (isLast) navigate(skipConditions ? 'summary' : 'conditions');
    else navigate('configure', currentStepIndex + 1);
  });

  row.appendChild(nextBtn);

  // Skip button for optional steps
  if (step.isOptionals && !isLast) {
    const skipBtn = el('button', {
      style: `padding:9px 14px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:13px;font-family:inherit;cursor:pointer;color:${B.textMd};`
    });
    skipBtn.textContent = 'Pular';
    skipBtn.addEventListener('click', () => navigate('configure', currentStepIndex + 1));
    row.insertBefore(skipBtn, nextBtn);
  }

  return row;
}

// ── Order Code Panel (right column) ──────────────────────────
function makeOrderCodePanel(fColor) {
  const { code, segments, valid } = buildCode();
  const parts = code.split(/(?=[A-Z]{2,})/); // split for display

  const panel = el('div', { class: 'wizard-code-panel' });

  // Code display card
  const codeCard = el('div', {
    style: `background:${B.bg};border:1px solid ${B.border};border-radius:10px;padding:16px;`
  });

  const lbl = el('div', { style: `font-size:11px;font-weight:600;color:${B.textLt};letter-spacing:.05em;margin-bottom:10px;` });
  lbl.textContent = 'ORDER CODE';
  codeCard.appendChild(lbl);

  if (!valid || code.includes('?')) {
    const empty = el('div', { style: `font-size:13px;color:${B.textLt};font-style:italic;margin-bottom:12px;` });
    empty.textContent = 'Preencha os campos obrigatórios…';
    codeCard.appendChild(empty);
  } else {
    // Segments
    const segsWrap = el('div', { style: 'display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px;' });
    segments.forEach((seg, i) => {
      const chip = el('span', {
        style: `font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;
          background:${i === 0 ? fColor : seg.optional ? B.greenLt : B.white};
          color:${i === 0 ? '#fff' : seg.optional ? B.green : B.text};
          padding:3px 8px;border-radius:5px;
          border:${i === 0 ? 'none' : '1px solid ' + B.border};`
      });
      chip.textContent = seg.val;
      segsWrap.appendChild(chip);
    });
    codeCard.appendChild(segsWrap);

    // Full code + copy
    const codeRow = el('div', { style: 'display:flex;align-items:center;gap:6px;' });
    const codeText = el('code', {
      style: `flex:1;font-family:'IBM Plex Mono',monospace;font-size:12px;color:${B.text};word-break:break-all;line-height:1.4;`
    });
    codeText.textContent = code;

    let copied = false;
    const copyBtn = el('button', {
      style: `flex-shrink:0;background:${B.white};border:1px solid ${B.border};border-radius:6px;padding:5px 8px;cursor:pointer;display:flex;align-items:center;gap:4px;font-size:12px;font-family:inherit;color:${B.textMd};`
    });
    copyBtn.innerHTML = `${ICONS.copy} Copiar`;
    copyBtn.addEventListener('click', () => {
      if (copied) return;
      navigator.clipboard.writeText(code).catch(() => {});
      copied = true;
      copyBtn.style.background = B.greenLt;
      copyBtn.style.color = B.green;
      copyBtn.innerHTML = `${ICONS.check} Copiado!`;
      setTimeout(() => {
        copied = false;
        copyBtn.style.background = B.white;
        copyBtn.style.color = B.textMd;
        copyBtn.innerHTML = `${ICONS.copy} Copiar`;
      }, 1500);
    });

    codeRow.appendChild(codeText);
    codeRow.appendChild(copyBtn);
    codeCard.appendChild(codeRow);

    if (typeof currentFamily?.getDescription === 'function') {
      const desc = currentFamily.getDescription(paramValues);
      if (desc) {
        const descEl = el('div', {
          style: `margin-top:10px;font-size:10px;font-weight:500;color:${B.textMd};letter-spacing:0.3px;line-height:1.5;padding:6px 10px;background:${B.blueLt};border-left:3px solid ${fColor};border-radius:0 6px 6px 0;`
        });
        descEl.textContent = desc;
        codeCard.appendChild(descEl);
      }
    }
  }

  panel.appendChild(codeCard);

  // Selections summary
  const summaryCard = el('div', {
    style: `background:${B.white};border:1px solid ${B.border};border-radius:10px;padding:14px;`
  });
  const sumLbl = el('div', { style: `font-size:11px;font-weight:600;color:${B.textLt};letter-spacing:.05em;margin-bottom:10px;` });
  sumLbl.textContent = 'SELEÇÕES';
  summaryCard.appendChild(sumLbl);

  const steps = getWizardSteps();
  steps.forEach(s => {
    if (s.isOptionals) return;
    const val = paramValues[s.id];
    if (!val) return;
    const opts  = typeof s.getDynamicOptions === 'function' ? s.getDynamicOptions(paramValues) : (s.options || []);
    const found = opts.find(o => o.code === val);
    const row = el('div', { style: `padding:6px 0;border-bottom:1px solid ${B.bg};` });
    row.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;">
        <span style="font-size:11px;color:${B.textMd};">${s.label}</span>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;color:${fColor};flex-shrink:0;">${val}</span>
      </div>
      ${found ? `<div style="font-size:11px;color:${B.textLt};margin-top:2px;">${found.label}</div>` : ''}`;
    summaryCard.appendChild(row);
  });

  // Optionals selected
  const selOpts = Object.entries(optionalValues).filter(([, v]) => v);
  if (selOpts.length > 0) {
    const divider = el('div', { style: `border-top:1px solid ${B.border};margin:8px 0;` });
    summaryCard.appendChild(divider);
    selOpts.forEach(([id, code]) => {
      const optDef  = currentFamily?.optionals?.find(o => o.id === id);
      const optItem = optDef?.options?.find(o => o.code === code);
      const row = el('div', { style: `padding:4px 0;border-bottom:1px solid ${B.bg};` });
      row.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;">
          <span style="font-size:11px;color:${B.textMd};">${optDef?.label || id}</span>
          <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;color:${B.green};flex-shrink:0;">${code}</span>
        </div>
        ${optItem ? `<div style="font-size:11px;color:${B.textLt};margin-top:2px;">${optItem.label}</div>` : ''}`;
      summaryCard.appendChild(row);
    });
  }

  panel.appendChild(summaryCard);
  return panel;
}

// ═══════════════════════════════════════════════════════════════
// PHASE: CONDITIONS
// ═══════════════════════════════════════════════════════════════
function renderConditionsHeader() {
  const hdr = document.getElementById('conditions-header');
  if (!hdr) return;
  const meta = FAMILY_META[currentFamilyKey] || { color: B.blue, icon: '' };
  const isTEF = currentFamilyKey === 'TEF';

  hdr.innerHTML = `
    <div class="page-header" style="margin-bottom:0;">
      <div style="display:flex;flex-direction:column;gap:4px;">
        <button id="btn-back-to-configure" style="background:none;border:none;cursor:pointer;color:${B.textMd};font-size:13px;font-family:inherit;display:flex;align-items:center;gap:6px;padding:0;margin-bottom:8px;">
          ${ICONS.back} Voltar ao configurador
        </button>
        <h1 class="page-title">Condições do Processo</h1>
        <p class="page-subtitle">Preencha para gerar a Folha de Dados em Excel ou PDF</p>
      </div>
    </div>`;

  document.getElementById('btn-back-to-configure')?.addEventListener('click', () => navigate('configure'));

  // Family-specific field visibility
  const isTYL = currentFamilyKey === 'TYL';
  const isTBQM = currentFamilyKey === 'TBQM';
  const isGasFamily = isTYL || isTBQM;

  // Propriedades do fluido: viscosidade/densidade visível para TEF e TYL/gás
  ['field-viscosidade', 'field-densidade', 'divider-propriedades'].forEach(id => {
    document.getElementById(id)?.classList.remove('hidden');
  });
  // Campos específicos de gás (TYL, turbina...)
  ['field-dens-relativa', 'field-compress', 'field-peso-mol'].forEach(id => {
    document.getElementById(id)?.classList.toggle('hidden', !isGasFamily);
  });
  // Temp. projeto e pressão projeto — visíveis para todos
  ['field-temp-projeto', 'field-pressao-proj'].forEach(id => {
    document.getElementById(id)?.classList.remove('hidden');
  });

  // Estado do fluido: TEF = só líquido; TYL/TBQM = só gás
  const estadoSel = document.getElementById('pdf-estado');
  if (estadoSel) {
    const liqOpt   = estadoSel.querySelector('option[value="LÍQUIDO"]');
    const gasOpt   = estadoSel.querySelector('option[value="GÁS"]');
    const vaporOpt = estadoSel.querySelector('option[value="VAPOR"]');
    if (liqOpt)   liqOpt.hidden   = isGasFamily;
    if (gasOpt)   gasOpt.hidden   = isTEF;
    if (vaporOpt) vaporOpt.hidden = isTEF || isGasFamily;
    if (isTEF && estadoSel.value !== 'LÍQUIDO') estadoSel.value = 'LÍQUIDO';
    if (isGasFamily) estadoSel.value = 'GÁS';
  }

  // Label "Temperatura Máx/Mín" para TEF e TCF
  const isTCF = currentFamilyKey === 'TCF';
  const tempProjLabel = document.querySelector('label[for="pdf-temp-proj"]');
  if (tempProjLabel) {
    tempProjLabel.textContent = (isTEF || isTCF)
      ? 'Temperatura Máx/Mín (°C)'
      : 'Temperatura de Projeto (°C)';
  }

  // Default flow direction
  const sentido = document.getElementById('pdf-sentido');
  if (sentido && !sentido.dataset.userEdited) sentido.value = 'ESQUERDA > DIREITA';

  // Auto-fill ATEX and Conexão do Processo from wizard selections (read-only display)
  const map = currentFamily?.pdfMappings || {};
  const atexEl = document.getElementById('pdf-atex');
  const connEl = document.getElementById('pdf-conn-proc');
  if (atexEl && map.getAtex)              atexEl.value = map.getAtex(paramValues) || '';
  if (connEl && map.getConexaoProcesso)   connEl.value = map.getConexaoProcesso(paramValues) || '';

  // Detecta troca de família — quando muda, sempre sobrescreve os campos de vazão
  const familyChanged = conditionsFamilyKey !== currentFamilyKey;
  conditionsFamilyKey = currentFamilyKey;

  // Auto-fill vazões para famílias que usam getFlowRange (TYL, TBQM)
  // — evita que campos fiquem com valores residuais de outra família
  if (typeof currentFamily?.getFlowRange === 'function') {
    const flowRange = currentFamily.getFlowRange(paramValues);
    const qminEl = document.getElementById('pdf-qmin');
    const qmaxEl = document.getElementById('pdf-qmax');

    // Detecta mudança de designacao+conexao+range dentro da mesma família
    const flowKey = (paramValues.designacao || '') + '|' + (paramValues.conexao || '') + '|' + (paramValues.range || '');
    const flowKeyChanged = conditionsFlowKey !== flowKey;
    conditionsFlowKey = flowKey;

    if (flowRange) {
      // Sobrescreve se família mudou, DN/designação mudou, ou campo está vazio/auto-preenchido
      if (qminEl && (familyChanged || flowKeyChanged || !qminEl.value || qminEl.dataset.auto === '1')) {
        qminEl.value = flowRange.qmin; qminEl.dataset.auto = '1';
      }
      if (qmaxEl && (familyChanged || flowKeyChanged || !qmaxEl.value || qmaxEl.dataset.auto === '1')) {
        qmaxEl.value = flowRange.qmax; qmaxEl.dataset.auto = '1';
      }
    } else {
      if (qminEl && (familyChanged || flowKeyChanged || qminEl.dataset.auto === '1')) { qminEl.value = ''; delete qminEl.dataset.auto; }
      if (qmaxEl && (familyChanged || flowKeyChanged || qmaxEl.dataset.auto === '1')) { qmaxEl.value = ''; delete qmaxEl.dataset.auto; }
    }
    // Unidade padrão para gás: m³/h
    const qunitEl = document.getElementById('pdf-qunit');
    if (qunitEl && (familyChanged || !qunitEl.dataset.auto || qunitEl.dataset.auto === '1')) {
      const match = [...qunitEl.options].some(o => o.value === 'm³/h');
      if (match) { qunitEl.value = 'm³/h'; qunitEl.dataset.auto = '1'; }
    }
    // Trigger range update (re-set auto após dispatch pois o listener de edição manual apaga dataset.auto)
    document.getElementById('pdf-qmax')?.dispatchEvent(new Event('input'));
    if (qminEl && qminEl.value) qminEl.dataset.auto = '1';
    if (qmaxEl && qmaxEl.value) qmaxEl.dataset.auto = '1';
  }

  // Auto-fill DN defaults para famílias que usam getDnDefaults (TEF, TCF)
  if (typeof currentFamily?.getDnDefaults === 'function') {
    const dn = paramValues['dn'];
    if (dn) autofillDnDefaults(dn);
  }

  // TUS: oculta seções de condições de processo (Fluido, Vazão, Pressão, Propriedades)
  const isTUS = currentFamilyKey === 'TUS';
  const procSections = document.getElementById('conditions-process-sections');
  if (procSections) procSections.style.display = isTUS ? 'none' : '';

  // TUS: auto-preenche campos ocultos via tabela do manual
  if (isTUS) {
    const cal = paramValues.caliber        || '';
    const pc  = paramValues.pressure_class || '';

    // Distância de face (L face-to-face) em mm
    const faceEl = document.getElementById('pdf-face');
    if (faceEl) {
      const TUS_FACE = { '3':240,'4':300,'6':450,'8':600,'10':750,'12':900,'CL900|3':320 };
      faceEl.value = TUS_FACE[pc + '|' + cal] || TUS_FACE[cal] || '';
    }

    // Sentido do fluxo: TUS é bidirecional por padrão
    const sentidoEl = document.getElementById('pdf-sentido');
    if (sentidoEl && !sentidoEl.dataset.userEdited) sentidoEl.value = 'BIDIRECIONAL';
  }
}

// ─── Navigation helpers ───────────────────────────────────────
function hasActiveConfig() {
  return Object.keys(paramValues).some(k => {
    const p = currentFamily?.parameters.find(x => x.id === k);
    return p && !p.fixed && paramValues[k];
  });
}

function goToFamily(key) {
  currentFamilyKey = key;
  currentFamily = FAMILIES[key];
  paramValues = {};
  optionalValues = {};
  // Pre-apply fixed params
  currentFamily.parameters.forEach(p => {
    if (p.fixed) paramValues[p.id] = p.options[0].code;
  });
  // Pre-apply family defaults (standard configuration)
  if (currentFamily.defaults) {
    for (const [pid, code] of Object.entries(currentFamily.defaults)) {
      if (!(pid in paramValues)) paramValues[pid] = code;
    }
  }
  // Pre-apply optional defaults
  if (currentFamily.optionalDefaults) {
    for (const [oid, code] of Object.entries(currentFamily.optionalDefaults)) {
      if (!(oid in optionalValues)) optionalValues[oid] = code;
    }
  }
  navigate('configure', 0);
}

// ═══════════════════════════════════════════════════════════════
// CODE GENERATION
// ═══════════════════════════════════════════════════════════════
function buildCode() {
  if (!currentFamily) return { code: '', segments: [], valid: false };
  const fam = currentFamily;

  // ── Custom buildCode (e.g. TYL/TBQM with lookup-table prefix, 0DM with seq lookup) ──
  if (typeof fam.buildCode === 'function') {
    const code = fam.buildCode(paramValues);
    let valid = true;
    for (const param of fam.parameters) {
      if (param.required && paramValues[param.id] === undefined) { valid = false; break; }
    }

    // Segmentos específicos por família
    let segments;
    if (currentFamilyKey === 'ODM') {
      // 0DM: 0D [T] [GG] [D] [NNN]
      segments = [
        { val: code.slice(0, 2), label: 'Família', fixed: true },
        { val: code.slice(2, 3), label: 'Tipo', missing: code[2] === '?' },
        { val: code.slice(3, 5), label: 'Designação', missing: code.slice(3,5).includes('?') },
        { val: code.slice(5, 6), label: 'Display', missing: code[5] === '?' },
        { val: code.slice(6),    label: 'Ent/Esf/Saída (Seq)', missing: code.slice(6).includes('?') },
      ];
    } else if (currentFamilyKey === 'TUS') {
      const tusParts = code.split('-');
      segments = [
        { val: 'TUS',              label: 'Família',       fixed: true },
        { val: tusParts[1] || '?', label: 'Vias',          missing: !paramValues.model_type },
        { val: tusParts[2] || '?', label: 'DN',             missing: !paramValues.caliber },
        { val: tusParts[3] || '?', label: 'Classe Pressão',missing: !paramValues.pressure_class },
        { val: tusParts[4] || '?', label: 'Flange',        missing: !paramValues.flange_face },
        { val: tusParts[5] || '?', label: 'Schedule',      missing: !paramValues.schedule },
        { val: tusParts[6] || '?', label: 'Material',      missing: !paramValues.material },
        { val: tusParts[7] || '?', label: 'Comunicação',   missing: !paramValues.wireless },
      ];
    } else if (currentFamilyKey === 'TEC') {
      // TEC: 0TEC [P] [C] [NNNN]
      segments = [
        { val: code.slice(0, 4), label: 'Família', fixed: true },
        { val: code.slice(4, 5), label: 'Pressão', missing: code[4] === '?' },
        { val: code.slice(5, 6), label: 'Comunicação', missing: code[5] === '?' },
        { val: code.slice(6),    label: 'Sequencial', fixed: true },
      ];
    } else {
      // TYL / TBQM: gas meter segment layout — detalha o prefixo por parâmetros individuais
      const GAS_SEGS = [
        { label: 'Sensor',      fixed: false },
        { label: 'Termopoço',   fixed: false },
        { label: 'Cor',         fixed: currentFamilyKey === 'TYL' },
        { label: 'Range',       fixed: false },
        { label: 'Dist. Face',  fixed: true  },
        { label: 'Específicos', fixed: false },
      ];
      segments = [];
      segments.push({ val: code.slice(0, 2), label: 'Família', fixed: true });
      const prefixoVal = code.slice(2, 4);
      // Resolve labels dos parâmetros que compõem o prefixo
      const desigParam = fam.parameters.find(p => p.id === 'designacao');
      const connParam  = fam.parameters.find(p => p.id === 'conexao');
      const desigOpt   = desigParam ? (typeof desigParam.getDynamicOptions === 'function' ? desigParam.getDynamicOptions(paramValues) : (desigParam.options || [])).find(o => o.code === paramValues.designacao) : null;
      const connOpt    = connParam  ? (typeof connParam.getDynamicOptions  === 'function' ? connParam.getDynamicOptions(paramValues)  : (connParam.options  || [])).find(o => o.code === paramValues.conexao)   : null;
      let prefixoLabel = 'Designação + Conexão';
      if (currentFamilyKey === 'TBQM') {
        const matParam   = fam.parameters.find(p => p.id === 'material');
        const classParam = fam.parameters.find(p => p.id === 'classe');
        const matOpt     = matParam   ? (typeof matParam.getDynamicOptions   === 'function' ? matParam.getDynamicOptions(paramValues)   : (matParam.options   || [])).find(o => o.code === paramValues.material) : null;
        const classOpt   = classParam ? (typeof classParam.getDynamicOptions === 'function' ? classParam.getDynamicOptions(paramValues) : (classParam.options || [])).find(o => o.code === paramValues.classe)   : null;
        const parts = [desigOpt?.label, connOpt?.label, matOpt?.label, classOpt?.label].filter(Boolean);
        prefixoLabel = parts.length > 0 ? parts.join(' / ') : 'Desig/Conn/Mat/Classe';
      } else {
        const parts = [desigOpt?.label, connOpt?.label].filter(Boolean);
        prefixoLabel = parts.length > 0 ? parts.join(' / ') : 'Designação / Conexão';
      }
      segments.push({ val: prefixoVal, label: prefixoLabel, missing: prefixoVal === '??' });
      segments.push({ val: code.slice(4, 5), label: 'Precisão', fixed: true });
      GAS_SEGS.forEach((seg, i) => {
        const ch = code.slice(5 + i, 6 + i);
        segments.push({ val: ch, label: seg.label, missing: ch === '?', fixed: seg.fixed });
      });
    }
    return { code, segments, valid };
  }

  // ── Standard linear concatenation (TEF / TCF) ──
  const segments = [];

  segments.push({ val: fam.prefix, label: 'Família/Modelo' });

  let valid = true;
  for (const param of fam.parameters) {
    if (param.fixed) {
      const val = param.options[0].code;
      segments.push({ val, label: param.label, fixed: true });
      continue;
    }
    const val = paramValues[param.id];
    if (!val) valid = false;
    segments.push({ val: val || '?', label: param.label, missing: !val });
  }

  for (const opt of fam.optionals) {
    const code = optionalValues[opt.id];
    if (!code) continue;
    segments.push({ val: code, label: opt.label, optional: true });
  }

  const code = segments.map(s => s.val).join('');
  return { code, segments, valid };
}

function updateCode() {
  const { code, segments, valid } = buildCode();
  const display = document.getElementById('code-display');
  const segContainer = document.getElementById('code-segments');
  const descEl = document.getElementById('code-desc');
  const btnExcel = document.getElementById('btn-excel');
  const btnPdf = document.getElementById('btn-pdf');

  if (!display) return;

  if (!valid || code.includes('?')) {
    display.textContent = 'Preencha os campos obrigatórios…';
    display.className = 'code-display empty';
  } else {
    display.textContent = code;
    display.className = 'code-display';
  }

  if (descEl) {
    const desc = (valid && !code.includes('?') && typeof currentFamily?.getDescription === 'function')
      ? currentFamily.getDescription(paramValues)
      : '';
    descEl.textContent = desc;
    descEl.style.display = desc ? '' : 'none';
  }

  if (segContainer) {
    segContainer.innerHTML = '';
    segments.forEach(seg => {
      if (!seg.val) return;
      const wrap = document.createElement('div');
      wrap.className = 'code-seg';
      const val = document.createElement('span');
      val.className = 'seg-val'
        + (seg.optional ? ' optional' : '')
        + (seg.missing ? ' missing' : '')
        + (seg.fixed ? ' fixed' : '');
      val.textContent = seg.val;
      const lbl = document.createElement('span');
      lbl.className = 'seg-lbl';
      lbl.textContent = seg.label;
      wrap.appendChild(val);
      wrap.appendChild(lbl);
      segContainer.appendChild(wrap);
    });
  }

  const disable = !valid || code.includes('?');
  if (btnExcel) btnExcel.disabled = disable;
  if (btnPdf)   btnPdf.disabled   = disable;
}

// ═══════════════════════════════════════════════════════════════
// AUTO-FILL DN DEFAULTS
// ═══════════════════════════════════════════════════════════════
function autofillDnDefaults(dnCode) {
  if (!dnCode) return;
  const estado = document.getElementById('pdf-estado')?.value || '';
  if (typeof currentFamily?.getDnDefaults !== 'function') return;
  const defaults = currentFamily.getDnDefaults(dnCode, estado);

  if (!defaults) return;

  const fill = (id, value) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value || el.dataset.auto === '1') {
      el.value = value;
      el.dataset.auto = '1';
    }
  };

  if (defaults.face !== undefined) fill('pdf-face', defaults.face);
  if (defaults.unit !== undefined) {
    // pdf-qunit is now a <select> — set directly if no user override
    const qunitEl = document.getElementById('pdf-qunit');
    if (qunitEl && (!qunitEl.dataset.auto || qunitEl.dataset.auto === '1')) {
      // Try to match an option; if not found, leave as-is
      const match = [...qunitEl.options].some(o => o.value === defaults.unit);
      if (match) { qunitEl.value = defaults.unit; qunitEl.dataset.auto = '1'; }
    }
  }

  if (defaults.isGas) {
    const qminEl = document.getElementById('pdf-qmin');
    const qmaxEl = document.getElementById('pdf-qmax');
    if (qminEl && (!qminEl.value || qminEl.dataset.auto === '1')) {
      qminEl.value = '';
      qminEl.placeholder = 'Calcular: a·ρg·c·(π/2)·d²';
      qminEl.dataset.auto = '1';
    }
    if (qmaxEl && (!qmaxEl.value || qmaxEl.dataset.auto === '1')) {
      qmaxEl.value = '';
      qmaxEl.placeholder = 'Calcular: a·ρg·c·(π/2)·d² (a=0,3)';
      qmaxEl.dataset.auto = '1';
    }
  } else {
    fill('pdf-qmax', defaults.qmax || '');
    fill('pdf-qmin', defaults.qmin || '');
    const qminEl = document.getElementById('pdf-qmin');
    const qmaxEl = document.getElementById('pdf-qmax');
    if (qminEl) qminEl.placeholder = 'Ex: 450';
    if (qmaxEl) qmaxEl.placeholder = 'Ex: 18000';
  }

  document.getElementById('pdf-qmax')?.dispatchEvent(new Event('input'));
}

// ═══════════════════════════════════════════════════════════════
// CONDITIONS LISTENERS
// ═══════════════════════════════════════════════════════════════
// Validação numérica para campos de condições de processo
// ═══════════════════════════════════════════════════════════════
const NUMERIC_FIELDS = [
  'pdf-temp','pdf-qop','pdf-qmin','pdf-qnorm','pdf-qmax',
  'pdf-pressao','pdf-pmin','pdf-pnorm','pdf-pmax','pdf-pressao-proj',
  'pdf-viscosidade','pdf-densidade','pdf-dens-relativa','pdf-compress','pdf-peso-mol',
];

function isValidNumericInput(val) {
  if (!val.trim()) return true; // campo vazio é permitido
  // Aceita: número com vírgula ou ponto, sinal negativo opcional
  return /^-?\d+([.,]\d+)?$/.test(val.trim());
}

function setupNumericValidation() {
  NUMERIC_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', function() {
      if (!this.value.trim()) { this.style.borderColor = ''; return; }
      const ok = isValidNumericInput(this.value);
      this.style.borderColor = ok ? '' : '#C83030';
      this.title = ok ? '' : 'Digite um número válido (ex: 25 ou 3,5)';
    });
    el.addEventListener('input', function() {
      if (this.style.borderColor === 'rgb(200, 48, 48)' && isValidNumericInput(this.value)) {
        this.style.borderColor = '';
        this.title = '';
      }
    });
  });
}

function setupConditionsListeners() {
  setupNumericValidation();

  // Manual edits disable auto-fill
  ['pdf-face','pdf-qmin','pdf-qmax','pdf-qop'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', function() {
      delete this.dataset.auto;
    });
  });

  // Estado change re-triggers DN autofill (TCF liquid vs gas)
  document.getElementById('pdf-estado')?.addEventListener('change', () => {
    if (!currentFamily?.getDnDefaults) return;
    const dn = paramValues['dn'];
    if (dn) autofillDnDefaults(dn);
  });

  // Auto-calculate flow range ratio
  const updateRange = () => {
    const parseVal = v => parseFloat((v || '').replace(/\./g, '').replace(',', '.'));
    const min = parseVal(document.getElementById('pdf-qmin')?.value);
    const max = parseVal(document.getElementById('pdf-qmax')?.value);
    const rangeEl = document.getElementById('pdf-range');
    if (!rangeEl) return;
    if (min && max && min > 0) {
      rangeEl.value = '1:' + Math.round((max / min) / 10) * 10;
      rangeEl.dataset.auto = '1';
    } else {
      rangeEl.value = '';
      delete rangeEl.dataset?.auto;
    }
  };
  document.getElementById('pdf-qmin')?.addEventListener('input', updateRange);
  document.getElementById('pdf-qmax')?.addEventListener('input', updateRange);

  // Copy button
  document.getElementById('btn-copy')?.addEventListener('click', () => {
    const code = document.getElementById('code-display')?.textContent;
    if (!code || code.includes('Preencha')) return;
    navigator.clipboard.writeText(code).then(() => {
      const btn = document.getElementById('btn-copy');
      btn.classList.add('copied');
      btn.innerHTML = `${ICONS.check} Copiado!`;
      showToast('Código copiado: ' + code);
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = `${ICONS.copy} Copiar`;
      }, 2000);
    }).catch(() => showToast('Não foi possível copiar o código.', false));
  });

  // Accordion sections
  document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => header.closest('.section')?.classList.toggle('open'));
  });

  // Back to configure button
  document.getElementById('btn-back-configure')?.addEventListener('click', () => {
    editingSpecId = null;
    navigate('configure');
  });

  // Reset
  document.getElementById('btn-reset')?.addEventListener('click', () => {
    if (!confirm('Deseja realmente limpar toda a configuração?')) return;
    editingSpecId = null;
    paramValues = {};
    optionalValues = {};
    if (currentFamily) {
      currentFamily.parameters.forEach(p => {
        if (p.fixed) paramValues[p.id] = p.options[0].code;
      });
      if (currentFamily.defaults) {
        for (const [pid, code] of Object.entries(currentFamily.defaults)) {
          if (!(pid in paramValues)) paramValues[pid] = code;
        }
      }
      if (currentFamily.optionalDefaults) {
        for (const [oid, code] of Object.entries(currentFamily.optionalDefaults)) {
          optionalValues[oid] = code;
        }
      }
    }
    document.querySelectorAll('.pdf-extra-field').forEach(el => {
      // Don't blank out select defaults — restore sensible defaults instead
      if (el.tagName === 'SELECT') return;
      el.value = '';
    });
    // Restore select defaults
    const defU = document.getElementById('pdf-p-unit');
    if (defU) defU.value = 'bar';
    const defPressaoU = document.getElementById('pdf-pressao-unit');
    if (defPressaoU) defPressaoU.value = 'bar';
    const defQU = document.getElementById('pdf-qunit');
    if (defQU) defQU.value = 'm³/h';
    const defEstado = document.getElementById('pdf-estado');
    if (defEstado) defEstado.value = '';
    const defSentido = document.getElementById('pdf-sentido');
    if (defSentido) { defSentido.value = ''; delete defSentido.dataset.userEdited; }
    currentStepIndex = 0;
    phase = currentFamily ? 'configure' : 'family';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Sentido: track manual edits
  document.getElementById('pdf-sentido')?.addEventListener('change', function() {
    this.dataset.userEdited = '1';
  });

  // Excel / PDF / Folha buttons
  document.getElementById('btn-excel')?.addEventListener('click', generateExcel);
  document.getElementById('btn-pdf')?.addEventListener('click', generatePDF);
  document.getElementById('btn-sheet')?.addEventListener('click', generateSummarySheet);

  // Save spec button
  document.getElementById('btn-save-spec')?.addEventListener('click', showSaveSpecForm);

  // Add to order button
  document.getElementById('btn-add-order')?.addEventListener('click', () => {
    showAddToOrderDialog();
  });

  setupDropdownListeners();
}

function setupDropdownListeners() {
  document.querySelectorAll('.action-dropdown .dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dd = btn.closest('.action-dropdown');
      const wasOpen = dd.classList.contains('open');
      document.querySelectorAll('.action-dropdown.open').forEach(d => {
        d.classList.remove('open');
        d.classList.remove('drop-up');
      });
      if (!wasOpen) {
        // Verifica se há espaço suficiente abaixo; senão, abre para cima
        const menu = dd.querySelector('.dropdown-menu');
        const rect = dd.getBoundingClientRect();
        const menuHeight = menu.scrollHeight || 200; // estimativa antes de medir
        const spaceBelow = window.innerHeight - rect.bottom;
        if (spaceBelow < menuHeight + 16) {
          dd.classList.add('drop-up');
        }
        dd.classList.add('open');
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// DECODE
// ═══════════════════════════════════════════════════════════════
function parseCode(raw) {
  const msgEl = document.getElementById('decode-msg');
  const setMsg = (text, ok) => {
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.style.color = ok ? B.green : '#C83030';
  };

  if (!raw) { setMsg('', true); return; }

  // Auto-detect family — ordena por comprimento de prefixo decrescente
  // para evitar colisão (ex: '0TEC' deve ser testado antes de '0T')
  let famKey = null;
  const sortedKeys = Object.keys(FAMILIES)
    .sort((a, b) => FAMILIES[b].prefix.length - FAMILIES[a].prefix.length);
  for (const key of sortedKeys) {
    if (raw.startsWith(FAMILIES[key].prefix.toUpperCase())) { famKey = key; break; }
  }
  if (!famKey) { setMsg('● Prefixo não reconhecido. Inicia com TEFP, TCF, TUS, 0R ou 0T?', false); return; }

  const fam = FAMILIES[famKey];
  let pos = fam.prefix.length;
  const newParams = {};
  const newOptionals = {};
  const errors = [];

  // ── TYL custom parse (lookup-table based) ──
  if (famKey === 'TYL') {
    // Structure: 0R + PREFIXO(2) + PRECISÃO(1) + SENSOR(1) + TERMOPOÇO(1) + COR(1) + RANGE(1) + DIST_FACE(1) + ESPECÍFICOS(1)
    const tipoCategoria = raw.slice(0, 2); // '0R'
    const prefixo = raw.slice(2, 4);
    // Reverse-lookup PREFIXO → designacao + conexao
    let foundDesig = null, foundConn = null;
    for (const [k, v] of Object.entries(TYL_PREFIXO)) {
      if (v === prefixo) { const [d, c] = k.split('|'); foundDesig = d; foundConn = c; break; }
    }
    if (foundDesig) { newParams.designacao = foundDesig; newParams.conexao = foundConn; }
    else errors.push('Prefixo "' + prefixo + '" não reconhecido na tabela TYL');

    // Skip precisão (pos 4, always '1')
    pos = 5;
    // Code structure after PREFIXO+PRECISÃO: sensor(1) termopoço(1) cor(1,fixo) range(1) dist_face(1,auto) específicos(1)
    const rotParamMap = [
      { id: 'sensor',     fixed: false },
      { id: 'termopoco',  fixed: false },
      { id: null,          fixed: true  },   // cor — fixo '0', skip
      { id: 'range',      fixed: false },
      { id: null,          fixed: true  },   // dist_face — auto, skip
      { id: 'especificos', fixed: false },
    ];
    for (const rm of rotParamMap) {
      const chunk = raw.slice(pos, pos + 1);
      pos += 1;
      if (rm.fixed || !rm.id) continue;
      const param = fam.parameters.find(p => p.id === rm.id);
      if (!param) continue;
      const opts = param.options || [];
      const found = opts.find(o => o.code.toUpperCase() === chunk.toUpperCase());
      if (found) newParams[rm.id] = found.code;
      else if (chunk) errors.push(param.label + ': "' + chunk + '" não reconhecido');
    }
  } else if (famKey === 'TBQM') {
    // ── TBQM custom parse (lookup-table based, prefix '0T') ──
    // Structure: 0T + PREFIXO(2) + PRECISÃO(1) + SENSOR(1) + TERMOPOÇO(1) + COR(1) + RANGE(1) + DIST_FACE(1) + ESPECÍFICOS(1)
    const prefixo = raw.slice(2, 4);
    let foundDesig = null, foundConn = null, foundMat = null, foundClasse = null;
    for (const [k, v] of Object.entries(TBQM_PREFIXO)) {
      if (v === prefixo) {
        const [d, c, m, cl] = k.split('|');
        foundDesig = d; foundConn = c; foundMat = m; foundClasse = cl;
        break;
      }
    }
    if (foundDesig) {
      newParams.designacao = foundDesig; newParams.conexao = foundConn;
      newParams.material = foundMat; newParams.classe = foundClasse;
    } else {
      errors.push('Prefixo "' + prefixo + '" não reconhecido na tabela TBQM');
    }

    // Chars 4-10: precisao(1) sensor(1) termopoco(1) cor(1) range(1) dist_face(1,auto) especificos(1)
    const tbqmMap = [
      { id: 'precisao',    skip: false },
      { id: 'sensor',      skip: false },
      { id: 'termopoco',   skip: false },
      { id: 'cor',         skip: false },
      { id: 'range',       skip: false },
      { id: null,           skip: true  },  // dist_face — auto, skip
      { id: 'especificos', skip: false },
    ];
    pos = 4;
    for (const rm of tbqmMap) {
      const chunk = raw.slice(pos, pos + 1);
      pos += 1;
      if (rm.skip || !rm.id) continue;
      const param = fam.parameters.find(p => p.id === rm.id);
      if (!param) continue;
      const opts = typeof param.getDynamicOptions === 'function'
        ? param.getDynamicOptions(newParams)
        : (param.options || []);
      const found = opts.find(o => o.code.toUpperCase() === chunk.toUpperCase());
      if (found) newParams[rm.id] = found.code;
      else if (chunk) errors.push((param.label || rm.id) + ': "' + chunk + '" não reconhecido');
    }

  } else if (famKey === 'TUS') {
    // ── TUS custom parse (dash-separated) ──
    // Structure: TUS-[model_type]-[caliber]-[pressure_class]-[flange_face]-[schedule]-[material]-[wireless]
    // Example:   TUS-6-3-CL600-RF-SC40-LC-4G
    const parts = raw.slice(4).split('-');
    const tusMap = ['model_type','caliber','pressure_class','flange_face','schedule','material','wireless'];
    tusMap.forEach((id, i) => {
      const chunk = (parts[i] || '').toUpperCase();
      if (!chunk) return;
      const param = fam.parameters.find(p => p.id === id);
      if (!param) return;
      const opts = typeof param.getDynamicOptions === 'function'
        ? param.getDynamicOptions(newParams)
        : (param.options || []);
      const found = opts.find(o => o.code.toUpperCase() === chunk);
      if (found) newParams[id] = found.code;
      else errors.push(param.label + ': "' + parts[i] + '" não reconhecido');
    });

  } else if (famKey === 'ODM') {
    // ── DIAF custom parse ──
    // Structure: 0D + T(1) + GG(2) + D(1) + NNN(3)
    // NNN encodes entrada+esfera+saida via lookup table — needs reverse lookup

    // tipo (1 char)
    const tipoChunk = raw.slice(pos, pos + 1); pos += 1;
    const tipoOpts  = fam.parameters.find(p => p.id === 'tipo')?.options || [];
    const tipoFound = tipoOpts.find(o => o.code.toUpperCase() === tipoChunk);
    if (tipoFound) newParams.tipo = tipoFound.code;
    else errors.push('Tipo: "' + tipoChunk + '" não reconhecido');

    // designacao (2 chars)
    const desigChunk = raw.slice(pos, pos + 2); pos += 2;
    const desigOpts  = fam.parameters.find(p => p.id === 'designacao')?.options || [];
    const desigFound = desigOpts.find(o => o.code.toUpperCase() === desigChunk);
    if (desigFound) newParams.designacao = desigFound.code;
    else errors.push('Designação: "' + desigChunk + '" não reconhecida');

    // display (1 char)
    const dispChunk = raw.slice(pos, pos + 1); pos += 1;
    const dispOpts  = (fam.parameters.find(p => p.id === 'display')?.getDynamicOptions?.(newParams)) || [];
    const dispFound = dispOpts.find(o => o.code.toUpperCase() === dispChunk);
    if (dispFound) newParams.display = dispFound.code;
    else errors.push('Display: "' + dispChunk + '" não reconhecido');

    // NNN (3 chars) → reverse lookup para entrada, esfera, saida
    const nnnStr = raw.slice(pos, pos + 3);
    const nnn    = parseInt(nnnStr, 10);
    if (isNaN(nnn)) {
      errors.push('Sequencial "' + nnnStr + '" inválido');
    } else {
      const isAco = newParams.designacao === '40' || newParams.designacao === '60';
      const lookup = isAco ? DIAF_LOOKUP_ACO : DIAF_LOOKUP_ALU;
      const entry  = Object.entries(lookup).find(([, v]) => v === nnn);
      if (entry) {
        const parts    = entry[0].split('|');
        newParams.entrada = parts[0] || '';
        newParams.esfera  = parts[1] || '';
        newParams.saida   = parts[2] || '';
      } else {
        errors.push('Sequencial ' + nnn + ' não encontrado nas tabelas de conexão');
      }
    }

  } else if (famKey === 'TEC') {
    // ── TEC custom parse ──
    // Structure: 0TEC + PRESSAO(1) + COMUNICACAO(1) + 0001(fixed suffix, ignored)
    for (const param of fam.parameters) {
      const chunk = raw.slice(pos, pos + 1); pos += 1;
      const found = param.options.find(o => o.code.toUpperCase() === chunk);
      if (found) newParams[param.id] = found.code;
      else errors.push(param.label + ': "' + chunk + '" não reconhecido');
    }
    // trailing '0001' is fixed — nothing to parse

  } else {
    // ── Standard linear parse (TEF / TCF) ──
    // Pre-fill fixed
    fam.parameters.forEach(p => { if (p.fixed) newParams[p.id] = p.options[0].code; });

    for (const param of fam.parameters) {
      const opts = typeof param.getDynamicOptions === 'function'
        ? param.getDynamicOptions(newParams)
        : (param.options || []);

      if (param.fixed) { pos += param.options[0].code.length; continue; }
      if (opts.length === 0) { errors.push(param.label + ': sem opções'); break; }

      const len = opts[0].code.length;
      const chunk = raw.slice(pos, pos + len);
      pos += len;
      const found = opts.find(o => o.code.toUpperCase() === chunk.toUpperCase());
      if (found) newParams[param.id] = found.code;
      else errors.push(param.label + ': "' + chunk + '" não reconhecido');
    }

    // Parse optionals
    let suffix = raw.slice(pos);
    const optMap = [];
    fam.optionals.forEach(opt => {
      opt.options.forEach(o => optMap.push({ id: opt.id, code: o.code.toUpperCase(), orig: o.code }));
    });
    optMap.sort((a, b) => b.code.length - a.code.length);
    while (suffix.length > 0) {
      const match = optMap.find(o => suffix.startsWith(o.code));
      if (match) { newOptionals[match.id] = match.orig; suffix = suffix.slice(match.code.length); }
      else { errors.push('Sufixo não reconhecido: "' + suffix + '"'); break; }
    }
  }

  if (errors.length > 0) setMsg('● ' + errors.join(' | '), false);
  else setMsg('✓ Código decodificado com sucesso!', true);

  restoreState(famKey, newParams, newOptionals, 'summary');
}

// ═══════════════════════════════════════════════════════════════
// PROCESS CONDITIONS EXTRAS
// ═══════════════════════════════════════════════════════════════
function getExtras() {
  const pUnit = document.getElementById('pdf-p-unit')?.value || '';
  const qUnit = document.getElementById('pdf-qunit')?.value || '';
  const pressaoVal = document.getElementById('pdf-pressao')?.value || '';
  const pressaoUnit = document.getElementById('pdf-pressao-unit')?.value || '';
  const pminRaw  = (document.getElementById('pdf-pmin')?.value  || '').trim();
  const pnormRaw = (document.getElementById('pdf-pnorm')?.value || '').trim();
  const pmaxRaw  = (document.getElementById('pdf-pmax')?.value  || '').trim();
  return {
    fluido:          document.getElementById('pdf-fluido')?.value || '',
    estado:          document.getElementById('pdf-estado')?.value || '',
    temp:            document.getElementById('pdf-temp')?.value || '',
    distancia_face:  document.getElementById('pdf-face')?.value || '',
    sentido_fluxo:   document.getElementById('pdf-sentido')?.value || '',
    range_med:       document.getElementById('pdf-range')?.value || '',
    qop:             document.getElementById('pdf-qop')?.value || '',
    qop_unit:        qUnit,
    qmin:            document.getElementById('pdf-qmin')?.value || '',
    qnorm:           document.getElementById('pdf-qnorm')?.value || '',
    qmax:            document.getElementById('pdf-qmax')?.value || '',
    qunit:           qUnit,
    // valores brutos de pressão (sem unidade) — usados nas células separadas do novo template TEF
    pmin_raw:        pminRaw,
    pnorm_raw:       pnormRaw,
    pmax_raw:        pmaxRaw,
    // valores com unidade concatenada — mantidos para compatibilidade com TCF e specs antigas
    pmin:            pminRaw  && pUnit ? pminRaw  + ' ' + pUnit : pminRaw,
    pnorm:           pnormRaw && pUnit ? pnormRaw + ' ' + pUnit : pnormRaw,
    pmax:            pmaxRaw  && pUnit ? pmaxRaw  + ' ' + pUnit : pmaxRaw,
    p_unit:          pUnit,
    pressao_op_val:  pressaoVal,
    pressao_op:      pressaoVal && pressaoUnit ? pressaoVal + ' ' + pressaoUnit : pressaoVal,
    pressao_op_unit: pressaoUnit,
    viscosidade:      document.getElementById('pdf-viscosidade')?.value || '',
    viscosidade_unit: document.getElementById('pdf-viscosidade-unit')?.value || 'Cp',
    densidade:        document.getElementById('pdf-densidade')?.value || '',
    densidade_unit:   document.getElementById('pdf-densidade-unit')?.value || 'kg/m³',
    dens_relativa:    document.getElementById('pdf-dens-relativa')?.value || '',
    compress:         document.getElementById('pdf-compress')?.value || '',
    peso_mol:         document.getElementById('pdf-peso-mol')?.value || '',
    temp_proj:        document.getElementById('pdf-temp-proj')?.value || '',
    pressao_proj:     document.getElementById('pdf-pressao-proj')?.value || '',
    cliente:          document.getElementById('pdf-cliente')?.value || '',
    num_doc:          document.getElementById('pdf-num-doc')?.value || '',
    aplicacao:        document.getElementById('pdf-aplicacao')?.value || '',
    notas:            document.getElementById('pdf-notas')?.value || '',
  };
}

// ═══════════════════════════════════════════════════════════════
// EXCEL & PDF GENERATION
// ═══════════════════════════════════════════════════════════════
async function buildExcelWorksheet() {
  const { code, valid } = buildCode();
  if (!valid || code.includes('?')) return null;

  const fam = currentFamily;
  const map = fam.pdfMappings || {};
  // Famílias com skipConditions (TEC) nunca exibem o formulário de condições,
  // então os campos DOM podem conter valores residuais de outra família.
  // Passa apenas os campos de cabeçalho para não contaminar a planilha.
  const rawEx = getExtras();
  const ex = fam.skipConditions
    ? { cliente: rawEx.cliente, num_doc: rawEx.num_doc, aplicacao: rawEx.aplicacao, notas: rawEx.notas }
    : rawEx;

  /* global FD_CORIOLIS_B64, FD_TEMPLATE_B64, FD_ROT_B64, FD_TURB_B64, FD_TEC_B64, FD_TUS_B64 */
  const TEMPLATE_B64_MAP = {
    TCF:  typeof FD_CORIOLIS_B64  !== 'undefined' ? FD_CORIOLIS_B64  : null,
    TBQM: typeof FD_TURB_B64      !== 'undefined' ? FD_TURB_B64      : null,
    TYL:  typeof FD_ROT_B64       !== 'undefined' ? FD_ROT_B64       : null,
    TEF:  typeof FD_TEMPLATE_B64  !== 'undefined' ? FD_TEMPLATE_B64  : null,
    TEC:  typeof FD_TEC_B64       !== 'undefined' ? FD_TEC_B64       : null,
    TUS:  typeof FD_TUS_B64       !== 'undefined' ? FD_TUS_B64       : null,
  };
  const templateB64 = TEMPLATE_B64_MAP[fam.id] || null;

  if (!templateB64) {
    showToast('Template Excel não encontrado para a família ' + fam.id + '.', false);
    return null;
  }

  let arrayBuffer;
  try {
    const binary = atob(templateB64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    arrayBuffer = bytes.buffer;
  } catch (e) {
    showToast('Erro ao carregar o template: ' + e.message, false);
    return null;
  }

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  // TYL uses multiple sheets; TEF/TCF use only the first
  const ws = workbook.worksheets[0];
  const getSheet = (name) => workbook.getWorksheet(name);

  const set = (addr, value, sheet) => {
    const target = sheet || ws;
    if (value === null || value === undefined || value === '') { target.getCell(addr).value = null; return; }
    target.getCell(addr).value = String(value);
  };
  const setNum = (addr, value, sheet) => {
    const target = sheet || ws;
    if (value === null || value === undefined) { target.getCell(addr).value = null; return; }
    target.getCell(addr).value = Number(value) || 0;
  };

  if (typeof fam.populateExcel === 'function') {
    fam.populateExcel({ ws, set, setNum, getSheet, code, paramValues, optionalValues, ex, map });
  } else {
    showToast('Mapeamento Excel não definido para esta família.', false);
  }

  return { workbook, code };
}

async function generateExcel() {
  const result = await buildExcelWorksheet();
  if (!result) return;
  const buffer = await result.workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  triggerDownload(blob, 'FolhaDados_' + result.code + '_' + new Date().toISOString().slice(0, 10) + '.xlsx');
}

// ── Helpers para o renderizador Excel→HTML ──
function xlsxHexColor(arg) {
  if (!arg) return '';
  if (arg.argb) return '#' + arg.argb.substring(2);
  return '#000000';
}

function xlsxEscHtml(str) {
  return typeof str !== 'string' ? str
    : str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function xlsxBuildMergeMap(ws) {
  const parseCol = c => { let n = 0; for (let i = 0; i < c.length; i++) n = n * 26 + (c.charCodeAt(i) - 64); return n; };
  const map = {};
  (ws.model.merges || []).forEach(m => {
    const [start, end] = m.split(':');
    const sc = parseCol(start.match(/[A-Z]+/)[0]), sr = parseInt(start.match(/[0-9]+/)[0]);
    const ec = parseCol(end.match(/[A-Z]+/)[0]),   er = parseInt(end.match(/[0-9]+/)[0]);
    map[`${sr},${sc}`] = { rowspan: er - sr + 1, colspan: ec - sc + 1 };
  });
  return map;
}

function xlsxBuildImgMap(ws, workbook) {
  const map = {};
  (ws.getImages() || []).forEach(imgDesc => {
    const img = workbook.getImage(imgDesc.imageId);
    if (!img?.buffer) return;
    let binary = '';
    const bytes = new Uint8Array(img.buffer);
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    const b64 = window.btoa(binary);
    const r = (imgDesc.range.tl.nativeRow ?? (imgDesc.range.tl.row || 0)) + 1;
    const c = (imgDesc.range.tl.nativeCol ?? (imgDesc.range.tl.col || 0)) + 1;
    map[`${r},${c}`] = `<img src="data:image/${img.extension||'png'};base64,${b64}" style="max-height:44px;max-width:180px;object-fit:contain;vertical-align:middle;">`;
  });
  return map;
}

function xlsxBuildCellStyle(cell, mergeInfo, ws, rowNumber, colNumber) {
  if (!cell.style) return 'padding:2px 4px;box-sizing:border-box;white-space:nowrap;';

  let s = 'padding:2px 4px;box-sizing:border-box;';
  const al = cell.style.alignment || {};
  if (al.horizontal) s += `text-align:${al.horizontal === 'center' ? 'center' : al.horizontal};`;
  if (al.vertical)   s += `vertical-align:${al.vertical === 'middle' ? 'middle' : al.vertical};`;
  if (al.textRotation === 90 || al.textRotation === 'vertical') s += 'writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;';
  s += al.wrapText ? 'white-space:normal;word-wrap:break-word;' : 'white-space:nowrap;';

  const font = cell.style.font || {};
  if (font.bold)   s += 'font-weight:bold;';
  if (font.italic) s += 'font-style:italic;';
  if (font.size)   s += `font-size:${font.size}pt;`;
  if (font.name)   s += `font-family:'${font.name}',Arial,sans-serif;`;
  s += `color:${xlsxHexColor(font.color) || '#000'};`;

  const fill = cell.style.fill || {};
  if (fill.type === 'pattern' && fill.fgColor) {
    const bg = xlsxHexColor(fill.fgColor);
    if (bg !== '#FFFF00' && bg !== '#ffff00') s += `background-color:${bg};`;
  }

  const border = cell.style.border || {};
  if (border.top)  s += `border-top:1px solid ${xlsxHexColor(border.top.color)||'#000'};`;
  if (border.left) s += `border-left:1px solid ${xlsxHexColor(border.left.color)||'#000'};`;

  if (mergeInfo) {
    const brCell = ws.getRow(rowNumber + (mergeInfo.rowspan || 1) - 1).getCell(colNumber + (mergeInfo.colspan || 1) - 1);
    const brB = brCell.style?.border || {};
    if (brB.bottom) s += `border-bottom:1px solid ${xlsxHexColor(brB.bottom.color)||'#000'};`;
    if (brB.right)  s += `border-right:1px solid ${xlsxHexColor(brB.right.color)||'#000'};`;
  } else {
    if (border.bottom) s += `border-bottom:1px solid ${xlsxHexColor(border.bottom.color)||'#000'};`;
    if (border.right)  s += `border-right:1px solid ${xlsxHexColor(border.right.color)||'#000'};`;
  }
  return s;
}


function gerarPdfPropostaManualAPartirDoWorksheet(ws, workbook, nomeArquivo) {

  const dados = extrairDadosPropostaDoWorksheet(ws);

  return gerarPdfPropostaManual({
    header: dados.header,
    items: dados.items,
    totais: dados.totais,
    nomeArquivo
  });
}




function xlsxCellText(cell) {
  if (!cell) return '';

  const v = cell.value;

  // Primeiro trata null/undefined.
  // Não acesse cell.text antes disso.
  if (v === null || v === undefined) return '';

  // Agora sim tenta cell.text com segurança
  try {
    const val = cell.text;
    if (typeof val === 'string' && val !== '') return val;
  } catch (e) {
    // Se o ExcelJS quebrar ao acessar cell.text, segue pelo cell.value
  }

  if (typeof v === 'string') return v;
  if (typeof v === 'number') return String(v);
  if (typeof v === 'boolean') return v ? 'Sim' : 'Não';

  if (v instanceof Date) {
    return v.toLocaleDateString('pt-BR');
  }

  if (typeof v === 'object') {
    // Célula com rich text
    if (Array.isArray(v.richText)) {
      return v.richText.map(rt => rt.text || '').join('');
    }

    // Célula com fórmula — usa o resultado cacheado
    if (v.result !== undefined && v.result !== null) {
      const r = v.result;

      if (r instanceof Date) {
        return r.toLocaleDateString('pt-BR');
      }

      if (typeof r === 'object') {
        return (
          r.text ||
          r.label ||
          r.name ||
          r.description ||
          r.descricao ||
          r.codigo ||
          r.code ||
          ''
        );
      }

      return String(r);
    }

    // Hyperlink
    if (v.text) {
      return typeof v.text === 'string' ? v.text : String(v.text);
    }

    return (
      v.label ||
      v.name ||
      v.description ||
      v.descricao ||
      v.codigo ||
      v.code ||
      ''
    );
  }

  return String(v);
}

function xlsxWorksheetToHtml(ws, workbook) {
  const mergeMap = xlsxBuildMergeMap(ws);
  const imgMap   = xlsxBuildImgMap(ws, workbook);

  let html = '<table class="pdf-excel-table" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:11px;">\n<colgroup>\n';
  ws.columns.forEach(c => { html += `<col style="width:${(c.width || 8.43) * 7.5}px;">\n`; });
  html += '</colgroup>\n<tbody>\n';

  ws.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    html += `<tr style="height:${row.height ? row.height * 1.33 : 15}px">\n`;
    for (let colNumber = 1; colNumber <= ws.columns.length; colNumber++) {
      const cell = row.getCell(colNumber);
      if (cell.isMerged && cell.master !== cell) continue;

      const m = mergeMap[`${rowNumber},${colNumber}`];
      let attrs = '';
      if (m) {
        if (m.colspan > 1) attrs += ` colspan="${m.colspan}"`;
        if (m.rowspan > 1) attrs += ` rowspan="${m.rowspan}"`;
      }

      const s = xlsxBuildCellStyle(cell, m, ws, rowNumber, colNumber);
      const val = xlsxEscHtml(xlsxCellText(cell)).replace(/\r?\n/g, '<br>');

      html += `<td${attrs} style="${s}">${imgMap[`${rowNumber},${colNumber}`]||''}${val}</td>\n`;
    }
    html += '</tr>\n';
  });

  return html + '</tbody></table>';
}

// Converte cor hex (#RRGGBB) → [R, G, B]
function xlsxHexToRgb(hex) {
  if (!hex || typeof hex !== 'string') return [0, 0, 0];
  const h = hex.replace('#', '');
  if (h.length !== 6) return [0, 0, 0];
  return [
    parseInt(h.substring(0, 2), 16) || 0,
    parseInt(h.substring(2, 4), 16) || 0,
    parseInt(h.substring(4, 6), 16) || 0,
  ];
}

// Helper: determina o número da última coluna com dados reais (excluindo trailing empties)
function xlsxLastUsedCol(ws) {
  const parseColStr = s => { let n = 0; for (let i = 0; i < s.length; i++) n = n * 26 + (s.charCodeAt(i) - 64); return n; };
  let last = 1;
  ws.eachRow({ includeEmpty: false }, row => {
    row.eachCell({ includeEmpty: false }, (_c, cn) => { if (cn > last) last = cn; });
  });
  (ws.model.merges || []).forEach(m => {
    const end = m.split(':')[1];
    if (!end) return;
    const colStr = end.match(/[A-Z]+/)?.[0] || '';
    if (colStr) { const cn = parseColStr(colStr); if (cn > last) last = cn; }
  });
  return last;
}

// Helper: determina o número da última linha com dados reais (excluindo trailing empties)
function xlsxLastUsedRow(ws) {
  const parseColStr = s => { let n = 0; for (let i = 0; i < s.length; i++) n = n * 26 + (s.charCodeAt(i) - 64); return n; };
  let last = 1;
  ws.eachRow({ includeEmpty: false }, (_row, rn) => { if (rn > last) last = rn; });
  (ws.model.merges || []).forEach(m => {
    const end = m.split(':')[1];
    if (!end) return;
    const rowNum = parseInt(end.match(/\d+/)?.[0] || '0');
    if (rowNum > last) last = rowNum;
  });
  return last;
}


async function gerarPdfDocumento(tipoDocumento, dados) {
  if (tipoDocumento === 'folha_dados') {
    return gerarPdfPorExcelWorksheet(dados);
  }

  if (tipoDocumento === 'proposta') {
    return gerarPdfPropostaManual(dados);
  }

  throw new Error(`Tipo de documento não suportado: ${tipoDocumento}`);
}



function gerarPdfPropostaManual({ header = {}, items = [], totais = {}, nomeArquivo }) {
  const _jsPDF = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;

  if (!_jsPDF) {
    showToast('Biblioteca jsPDF não carregada.', false);
    return;
  }

  const doc = new _jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait'
  });

  const margin = 7;
  const pageW = doc.internal.pageSize.getWidth();

  let y = 8;

  y = desenharCabecalhoProposta(doc, header, y, margin, pageW);
  y = desenharDadosClienteProposta(doc, header, y, margin, pageW);
  y = desenharTextoIntroducaoProposta(doc, y, margin, pageW);
  y = desenharTabelaItensProposta(doc, items, y, margin, pageW);
  y = desenharTotaisProposta(doc, totais, items, y, margin, pageW);
  y = desenharCondicoesProposta(doc, y, margin, pageW);
  y = desenharAssinaturasProposta(doc, header, y, margin, pageW);
  desenharRodapeProposta(doc, margin, pageW);

  doc.save(nomeArquivo || 'proposta.pdf');
}

function desenharCabecalhoProposta(doc, header, y, margin, pageW) {
  // Logo textual temporário. Depois podemos trocar por imagem.
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(26, 109, 203);
  doc.text('aépio', margin, y + 8);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(8);
  doc.text('MEDIDORES DE GÁS', margin + 2, y + 13);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('PROPOSTA PARA FORNECIMENTO DE MEDIDORES DE GÁS', pageW / 2, y + 7, {
    align: 'center'
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.text('Data da proposta', pageW - margin - 30, y + 3);
  doc.rect(pageW - margin - 38, y + 5, 38, 6);
  doc.text(formatDateBR(new Date()), pageW - margin - 19, y + 9, {
    align: 'center'
  });

  y += 18;
  doc.setDrawColor(0, 0, 0);
  doc.line(margin, y, pageW - margin, y);

  return y + 3;
}

function desenharDadosClienteProposta(doc, header, y, margin, pageW) {
  const tableW = pageW - margin * 2;
  const leftW = tableW * 0.62;
  const rightW = tableW - leftW;
  const rowH = 5;

  const x1 = margin;
  const x2 = margin + leftW;

  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'bold');

  const rows = [
    ['Proposta Nº:', safeText(header.propostaNumero || '')],
    ['Cliente:', safeText(header.cliente || '')],
    ['CNPJ:', safeText(header.cnpj || '')],
    ['Ins. Esta.', safeText(header.inscricaoEstadual || '')],
    ['E-mail:', safeText(header.email || '')],
    ['Telefone:', safeText(header.telefone || '')],
    ['Destino da Compra:', safeText(header.destinoCompra || '')],
  ];

  const rightRows = [
    ['OC do Cliente:', safeText(header.ocCliente || '')],
    ['Endereço:', safeText(header.endereco || '')],
    ['Cidade:', safeText(header.cidade || '')],
    ['Estado:', safeText(header.estado || '')],
    ['CEP:', safeText(header.cep || '')],
    ['Celular:', safeText(header.celular || '')],
    ['Contribuinte:', safeText(header.contribuinte || '')],
  ];

  for (let i = 0; i < rows.length; i++) {
    const yy = y + i * rowH;

    doc.rect(x1, yy, leftW, rowH);
    doc.rect(x2, yy, rightW, rowH);

    doc.setFont('helvetica', 'bold');
    doc.text(rows[i][0], x1 + 2, yy + 4);
    doc.text(rightRows[i][0], x2 + 2, yy + 4);

    doc.setFont('helvetica', 'normal');

    const leftValue = doc.splitTextToSize(rows[i][1], leftW - 32)[0] || '';
    const rightValue = doc.splitTextToSize(rightRows[i][1], rightW - 32)[0] || '';

    doc.text(leftValue, x1 + 28, yy + 4);
    doc.text(rightValue, x2 + 28, yy + 4);
  }

  return y + rows.length * rowH + 6;
}

function desenharTextoIntroducaoProposta(doc, y, margin, pageW) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);

  const txt1 =
    'De acordo com a sua solicitação, informamos abaixo os preços, descrição dos materiais a serem adquiridos e condições de fornecimento.';

  const txt2 =
    'Alertamos que o conteúdo da presente proposta é confidencial e direcionado única e exclusivamente ao cliente acima descriminado, sendo vedada a divulgação, publicação e demais usos sem a devida autorização das partes.';

  const txt3 =
    'Para aprovação, favor retornar essa proposta assinada no campo de acordo.';

  const w = pageW - margin * 2;

  let lines = doc.splitTextToSize(txt1, w);
  doc.text(lines, margin, y);
  y += lines.length * 3.2 + 2;

  lines = doc.splitTextToSize(txt2, w);
  doc.text(lines, margin, y);
  y += lines.length * 3.2 + 2;

  lines = doc.splitTextToSize(txt3, w);
  doc.text(lines, margin, y);
  y += lines.length * 3.2 + 2;

  return y;
}

function desenharTabelaItensProposta(doc, items, y, margin, pageW) {
  const tableW = pageW - margin * 2;
  const rowH = 7;

  const widths = [8, 25, 58, 10, 21, 10, 20, 22, 16];
  const headers = ['Item', 'Código', 'Descrição do Medidor', 'Qtd.', 'Preço Unit.', '% IPI', 'IPI Unit.', 'R$ Total', 'Prazo'];

  let x = margin;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.3);

  for (let i = 0; i < headers.length; i++) {
    doc.rect(x, y, widths[i], rowH);

    const headerLines = doc.splitTextToSize(headers[i], widths[i] - 2);
    doc.text(headerLines, x + widths[i] / 2, y + 3.2, {
      align: 'center'
    });

    x += widths[i];
  }

  y += rowH;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.2);

  if (!items.length) {
    doc.rect(margin, y, tableW, rowH);
    doc.text('Nenhum item encontrado.', margin + 2, y + 4.5);
    return y + rowH + 3;
  }

  items.forEach((item, idx) => {
    const values = [
      safeText(item.item || idx + 1),
      safeText(item.codigo),
      safeText(item.descricao),
      safeText(item.quantidade),
      formatMoneyMaybe(item.precoUnitario),
      safeText(item.ipi),
      formatMoneyMaybe(item.ipiValor),
      formatMoneyMaybe(item.total),
      safeText(item.prazo)
    ];

    const descLines = doc.splitTextToSize(values[2], widths[2] - 3);
    const itemRowH = Math.max(rowH, descLines.length * 3.2 + 3.5);

    x = margin;

    for (let i = 0; i < widths.length; i++) {
      doc.rect(x, y, widths[i], itemRowH);

      if (i === 2) {
        doc.text(descLines, x + 1.5, y + 4.3);
      } else {
        const clipped = doc.splitTextToSize(values[i], widths[i] - 2)[0] || '';
        doc.text(clipped, x + widths[i] / 2, y + 4.5, {
          align: 'center'
        });
      }

      x += widths[i];
    }

    y += itemRowH;
  });

  return y + 3;
}

function desenharTotaisProposta(doc, totais, items, y, margin, pageW) {
  const tableW = pageW - margin * 2;

  const totalIpi = totais.ipi || calcularTotalCampo(items, 'ipiValor');
  const totalProposta = totais.proposta || calcularTotalCampo(items, 'total');

  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');

  doc.rect(margin, y, 70, 8);
  doc.text('Cobrança de frete:', margin + 35, y + 5, { align: 'center' });

  doc.rect(pageW - margin - 70, y, 35, 8);
  doc.rect(pageW - margin - 35, y, 35, 8);

  doc.text('Valor total do IPI', pageW - margin - 52.5, y + 3.5, { align: 'center' });
  doc.text('Valor total da proposta', pageW - margin - 17.5, y + 3.5, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.text(formatMoneyMaybe(totalIpi), pageW - margin - 52.5, y + 6.5, { align: 'center' });
  doc.text(formatMoneyMaybe(totalProposta), pageW - margin - 17.5, y + 6.5, { align: 'center' });

  return y + 14;
}

function desenharCondicoesProposta(doc, y, margin, pageW) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('Condições de fornecimento e observações', margin, y);
  y += 6;

  doc.setFontSize(7.2);

  const blocos = [
    ['1. Impostos', 'IPI não incluso no Preço Unitário e discriminado conforme proposta acima.\nICMS incluso.'],
    ['2. Especificações', 'L = Distância entre Faces em mm'],
    ['3. Garantia', 'Os medidores de gás da marca Aépio possuem garantia contra defeitos de fabricação pelo prazo de 2 (dois) anos após a emissão da nota fiscal, conforme termo de garantia.'],
    ['4. Frete', 'Cobrança: CIF'],
    ['5. Validade da proposta', 'Esta proposta é válida por 30 dias a contar da data de emissão da mesma.'],
    ['6. Condição de Pagamento - Pendente de Liberação de crédito', 'Entrada:     Prazo: 28/56']
  ];

  const w = pageW - margin * 2;

  blocos.forEach(([titulo, texto]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(titulo, margin, y);
    y += 3.5;

    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(texto, w);
    doc.text(lines, margin, y);
    y += lines.length * 3.2 + 3;
  });

  return y;
}

function desenharAssinaturasProposta(doc, header, y, margin, pageW) {
  if (y < 178) y = 178;
  if (y > 215) y = 215;

  doc.setFontSize(6.8);
  doc.setFont('helvetica', 'normal');

  doc.text('Atenciosamente,', margin, y);
  y += 12;

  doc.line(margin, y, margin + 65, y);
  doc.line(pageW - margin - 75, y, pageW - margin, y);

  y += 4;

  doc.text('Felipe Scozziero', margin + 32.5, y, { align: 'center' });
  doc.text(safeText(header.cliente), pageW - margin - 37.5, y, { align: 'center' });

  y += 4;

  doc.text('Aépio Medidores de Gás', margin + 32.5, y, { align: 'center' });

  return y + 8;
}

function desenharRodapeProposta(doc, margin, pageW) {
  const y = 279;
  const w = pageW - margin * 2;

  doc.rect(margin, y - 8, w, 14);

  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');

  doc.text('Dados da empresa: AGAU INDÚSTRIA DE EQUIPAMENTOS PARA ÁGUA LTDA', pageW / 2, y - 3, {
    align: 'center'
  });
  doc.text('Rua Cecília F. Barcelos, 60 Gravataí-RS CEP. 94035-185', pageW / 2, y, {
    align: 'center'
  });
  doc.text('Fone/fax: 51-3208-3030  email: agau@agau.com.br', pageW / 2, y + 3, {
    align: 'center'
  });
  doc.text('CNPJ 02.728.291/0001-64  IE 057/0169879', pageW / 2, y + 6, {
    align: 'center'
  });
}

function parseMoneyNumber(value) {
  if (typeof value === 'number') return value;

  const txtOriginal = safeText(value).trim();

  if (!txtOriginal) return 0;

  // Remove R$, espaços etc.
  let txt = txtOriginal.replace(/[^\d,.-]/g, '');

  // Caso venha no formato brasileiro: 9.597,31
  if (txt.includes(',') && txt.includes('.')) {
    txt = txt.replace(/\./g, '').replace(',', '.');
    const n = Number(txt);
    return Number.isFinite(n) ? n : 0;
  }

  // Caso venha no formato brasileiro simples: 9597,31
  if (txt.includes(',') && !txt.includes('.')) {
    txt = txt.replace(',', '.');
    const n = Number(txt);
    return Number.isFinite(n) ? n : 0;
  }

  // Caso venha do Excel/JS: 9597.31
  const n = Number(txt);
  return Number.isFinite(n) ? n : 0;
}

function formatMoneyMaybe(value) {
  const txt = safeText(value).trim();

  if (!txt) return '';

  const n = parseMoneyNumber(value);

  if (!Number.isFinite(n)) return txt;

  return n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function calcularTotalCampo(items, campo) {
  return items.reduce((acc, item) => acc + parseMoneyNumber(item[campo]), 0);
}



function safeText(value) {
  if (value === null || value === undefined) return '';

  if (typeof value === 'string') {
    return value === '[object Object]' ? '' : value;
  }

  if (typeof value === 'number') return String(value);
  if (typeof value === 'boolean') return value ? 'Sim' : 'Não';

  if (value instanceof Date) {
    return value.toLocaleDateString('pt-BR');
  }

  if (typeof value === 'object') {
    if (Array.isArray(value.richText)) {
      return value.richText.map(rt => rt.text || '').join('');
    }

    if (value.result !== undefined && value.result !== null) {
      return safeText(value.result);
    }

    if (value.text) return safeText(value.text);

    return (
      value.label ||
      value.name ||
      value.description ||
      value.descricao ||
      value.codigo ||
      value.code ||
      value.value ||
      ''
    );
  }

  const txt = String(value);
  return txt === '[object Object]' ? '' : txt;
}

function localizarLinhaCabecalhoItens(ws) {
  const maxRow = xlsxLastUsedRow(ws);
  const maxCol = xlsxLastUsedCol(ws);

  for (let r = 1; r <= maxRow; r++) {
    const linha = [];

    for (let c = 1; c <= maxCol; c++) {
      linha.push(String(xlsxCellText(ws.getRow(r).getCell(c)) || '').toUpperCase());
    }

    const texto = linha.join(' ');

    if (
      texto.includes('ITEM') &&
      texto.includes('CÓDIGO') &&
      texto.includes('DESCRIÇÃO')
    ) {
      return r;
    }
  }

  return null;
}


function extrairItensProposta(ws) {
  const items = [];
  const headerRow = localizarLinhaCabecalhoItens(ws);

  if (!headerRow) return items;

  const maxRow = xlsxLastUsedRow(ws);

  for (let r = headerRow + 1; r <= maxRow; r++) {
    const row = ws.getRow(r);

    const item = safeText(xlsxCellText(row.getCell(1))).trim();

    // Para quando chegar em outra seção
    const linhaToda = [];
    for (let c = 1; c <= 12; c++) {
      linhaToda.push(safeText(xlsxCellText(row.getCell(c))).trim());
    }

    const linhaUpper = linhaToda.join(' ').toUpperCase();

    if (
      linhaUpper.includes('COBRANÇA DE FRETE') ||
      linhaUpper.includes('CONDIÇÕES DE FORNECIMENTO') ||
      linhaUpper.includes('VALOR TOTAL')
    ) {
      break;
    }

    if (!/^\d+$/.test(item)) continue;

    items.push({
      item,
      codigo: linhaToda[1] || '',
      descricao: linhaToda[2] || '',
      quantidade: linhaToda[3] || '',
      precoUnitario: linhaToda[4] || '',
      ipi: linhaToda[5] || '',
      ipiValor: linhaToda[6] || '',
      total: linhaToda[7] || '',
      prazo: linhaToda[8] || ''
    });
  }

  return items;
}


function formatMoneyBR(value) {
  const n = Number(value || 0);

  return n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function formatDateBR(value) {
  if (!value) return '';

  const d = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(d.getTime())) {
    return safeText(value);
  }

  return d.toLocaleDateString('pt-BR');
}

function formatMoneyBR(value) {
  const n = Number(value || 0);

  return n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}


// Renderiza um worksheet ExcelJS diretamente no jsPDF
function xlsxWorksheetToPdf(ws, workbook, doc, pageW, pageH) {
  const CHAR_TO_MM = 1.83;
  const PT_TO_MM   = 0.353;
  const MARGIN     = 4;

  // ── 1. Range real de dados (ignora trailing empty rows/cols) ───────
  const maxRow   = xlsxLastUsedRow(ws);
  const colCount = xlsxLastUsedCol(ws);

  // ── 2. Larguras de colunas (mm) ────────────────────────────────────
  const colWidthsMm = [];
  for (let c = 1; c <= colCount; c++) {
    colWidthsMm.push((ws.getColumn(c).width || 8.43) * CHAR_TO_MM);
  }
  const totalW = colWidthsMm.reduce((a, b) => a + b, 0);

  // ── 3. Alturas de linhas (mm) — apenas até última linha usada ──────
  const rowHeightsRaw = [];
  for (let r = 1; r <= maxRow; r++) {
    rowHeightsRaw.push((ws.getRow(r).height || 15) * PT_TO_MM);
  }
  const totalH = rowHeightsRaw.reduce((a, b) => a + b, 0);

  // ── 4. Escala: prioriza preencher a LARGURA total ──────────────────
  const availW = pageW - 2 * MARGIN;
  const availH = pageH - 2 * MARGIN;
  const scale = availW / totalW;

  // ── 5. Posições X ──────────────────────────────────────────────────
  const colX = [MARGIN];
  for (let i = 0; i < colWidthsMm.length; i++) {
    colX.push(colX[i] + colWidthsMm[i] * scale);
  }

  // ── 6. Alturas e posições Y com suporte a quebras de página ────────
  const rowHeightsMm = rowHeightsRaw.map(h => h * scale);

  const rowY    = [];
  const rowPage = [];
  let pg = 1, yOnPage = MARGIN;
  for (let r = 0; r < maxRow; r++) {
    if (r > 0 && yOnPage + rowHeightsMm[r] > pageH - MARGIN) {
      pg++;
      yOnPage = MARGIN;
    }
    rowY.push(yOnPage);
    rowPage.push(pg);
    yOnPage += rowHeightsMm[r];
  }

  const mergeMap = xlsxBuildMergeMap(ws);

  // ── 7. Imagens ─────────────────────────────────────────────────────
  const imageMap = {};
  (ws.getImages() || []).forEach(imgDesc => {
    const img = workbook.getImage(imgDesc.imageId);
    if (!img?.buffer) return;
    let binary = '';
    const bytes = new Uint8Array(img.buffer);
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    const b64 = window.btoa(binary);

    const tl = imgDesc.range?.tl;
    const br = imgDesc.range?.br;

    const r1 = (tl?.nativeRow ?? tl?.row ?? 0) + 1;
    const c1 = (tl?.nativeCol ?? tl?.col ?? 0) + 1;

    const r2 = br ? (br.nativeRow ?? br.row ?? r1 - 1) + 1 : r1;
    const c2 = br ? (br.nativeCol ?? br.col ?? c1 - 1) + 1 : c1;
    imageMap[`${r1},${c1}`] = {
      dataUrl: `data:image/${img.extension || 'png'};base64,${b64}`,
      ext: (img.extension || 'png').toUpperCase(),
      r1, c1, r2, c2
    };
  });

  doc.setLineWidth(0.1);
  let renderedPage = 1;

  // ── 8. Loop de renderização ────────────────────────────────────────
  for (let r = 1; r <= maxRow; r++) {
    if (rowPage[r - 1] > renderedPage) {
      doc.addPage();
      renderedPage = rowPage[r - 1];
    }

    const y    = rowY[r - 1];
    const rowH = rowHeightsMm[r - 1];
    const row  = ws.getRow(r);

    for (let c = 1; c <= colCount; c++) {
      const cell = row.getCell(c);
      if (cell.isMerged && cell.master !== cell) continue;

      const merge = mergeMap[`${r},${c}`];
      let cellW = colWidthsMm[c - 1] * scale;
      let cellH = rowH;
      if (merge) {
        cellW = 0;
        for (let i = 0; i < merge.colspan; i++) cellW += (colWidthsMm[c - 1 + i] || 0) * scale;
        cellH = 0;
        for (let i = 0; i < merge.rowspan; i++) cellH += rowHeightsMm[r - 1 + i] || 0;
      }

      const x = colX[c - 1];
      const style = cell.style || {};
      const pad = 0.6;

      // ── Detecta overflow de texto (igual ao comportamento visual do Excel) ──
      let overflowCols = 0;
      const cellTextRaw = xlsxCellText(cell);
      const colSpanCount = merge ? merge.colspan : 1;
      if (cellTextRaw && !style.alignment?.wrapText) {
        const fSizeProbe = Math.max(4, (style.font?.size || 11) * scale * 0.55);
        doc.setFont('helvetica', style.font?.bold ? 'bold' : 'normal');
        doc.setFontSize(fSizeProbe);
        const textWProbe = doc.getTextWidth(String(cellTextRaw));
        if (textWProbe > cellW - 2 * pad) {
          let extraW = 0;
          for (let nc = c + colSpanCount; nc <= colCount; nc++) {
            const nextCell = row.getCell(nc);
            const nextHasContent = nextCell.value !== null && nextCell.value !== undefined && String(xlsxCellText(nextCell)).trim() !== '';
            const nextIsMergedAway = nextCell.isMerged && nextCell.master !== nextCell;
            if (nextHasContent || nextIsMergedAway) break;
            extraW += (colWidthsMm[nc - 1] || 0) * scale;
            overflowCols++;
            if (textWProbe <= cellW + extraW - 2 * pad) break;
          }
        }
      }

      // Background
      const fill = style.fill || {};
      if (fill.type === 'pattern' && fill.fgColor) {
        const hex = xlsxHexColor(fill.fgColor);
        if (hex && hex !== '#FFFFFF' && hex !== '#ffffff' && hex !== '#FFFF00' && hex !== '#ffff00' && hex !== '#000000') {
          const [rc, gc, bc] = xlsxHexToRgb(hex);
          doc.setFillColor(rc, gc, bc);
          doc.rect(x, y, cellW, cellH, 'F');
        }
      }

      // Bordas
      const border = style.border || {};
      doc.setDrawColor(0, 0, 0);
      if (border.top)    doc.line(x, y, x + cellW, y);
      const isSwallowed = row.__overflowSwallowed && row.__overflowSwallowed.has(c);
      if (border.left && !isSwallowed)   doc.line(x, y, x, y + cellH);
      if (merge) {
        const brCell = ws.getRow(r + (merge.rowspan || 1) - 1).getCell(c + (merge.colspan || 1) - 1);
        const brB = brCell.style?.border || {};
        if (brB.right && overflowCols === 0)  doc.line(x + cellW, y, x + cellW, y + cellH);
        if (brB.bottom) doc.line(x, y + cellH, x + cellW, y + cellH);
      } else {
        if (border.right && overflowCols === 0)  doc.line(x + cellW, y, x + cellW, y + cellH);
        if (border.bottom) doc.line(x, y + cellH, x + cellW, y + cellH);
      }

      // Marca quais colunas desta linha foram "engolidas" por overflow,
      // para que elas não desenhem sua própria borda esquerda depois.
      if (!row.__overflowSwallowed) row.__overflowSwallowed = new Set();
      if (overflowCols > 0) {
        for (let i = 0; i < overflowCols; i++) {
          row.__overflowSwallowed.add(c + colSpanCount + i);
        }
      }

      // Imagem
      const imgInfo = imageMap[`${r},${c}`];
      if (imgInfo) {
        try {
          let imgX = x + 0.5;
          let imgY = y + 0.5;
          let imgW = cellW - 1;
          let imgH = cellH - 1;

          if (imgInfo.r2 && imgInfo.c2) {
            const startCol = imgInfo.c1;
            const endCol = imgInfo.c2;
            const startRow = imgInfo.r1;
            const endRow = imgInfo.r2;

            imgX = colX[startCol - 1] + 0.5;
            imgY = rowY[startRow - 1] + 0.5;

            imgW = 0;
            for (let cc = startCol; cc <= endCol; cc++) imgW += (colWidthsMm[cc - 1] || 0) * scale;
            imgH = 0;
            for (let rr = startRow; rr <= endRow; rr++) imgH += rowHeightsMm[rr - 1] || 0;

            imgW -= 1;
            imgH -= 1;
          }

          doc.addImage(imgInfo.dataUrl, imgInfo.ext, imgX, imgY, Math.max(1, imgW), Math.max(1, imgH), undefined, 'FAST');
        } catch (e) { /* ignora */ }
      }

      // Texto
      const text = pdfSanitize(xlsxCellText(cell));
      if (!text) continue;

      const font = style.font || {};
      const align = style.alignment || {};
      const isVertical = align.textRotation === 90 || align.textRotation === 'vertical' || align.textRotation === 255;

      const baseSize = font.size || 11;
      const fontSize = Math.max(4, baseSize * scale * 0.55);
      let fStyle = 'normal';
      if (font.bold && font.italic) fStyle = 'bolditalic';
      else if (font.bold)  fStyle = 'bold';
      else if (font.italic) fStyle = 'italic';
      doc.setFont('helvetica', fStyle);
      doc.setFontSize(fontSize);

      const fontHex = xlsxHexColor(font.color);
      if (fontHex) {
        const [rc, gc, bc] = xlsxHexToRgb(fontHex);
        doc.setTextColor(rc, gc, bc);
      } else {
        doc.setTextColor(0, 0, 0);
      }

      // Largura efetiva considerando overflow calculado acima
      let effectiveCellW = cellW;
      if (overflowCols > 0) {
        for (let i = 0; i < overflowCols; i++) {
          effectiveCellW += (colWidthsMm[c - 1 + colSpanCount + i] || 0) * scale;
        }
      }

      if (isVertical) {
        // ── Texto vertical (90°) — rotaciona de baixo pra cima ──
        const maxTextH = cellH - 2 * pad;
        const lines = doc.splitTextToSize(text, maxTextH);
        const lineH = fontSize * 0.38;
        const totalLinesW = lines.length * lineH;
        const tx = x + (cellW + totalLinesW) / 2 - lineH * 0.25;
        const firstLineLen = doc.getTextWidth(lines[0] || '');
        const ty = y + (cellH + firstLineLen) / 2;

        try {
          for (let li = 0; li < lines.length; li++) {
            doc.text(lines[li], tx - li * lineH, ty, { angle: 90 });
          }
        } catch (e) { /* ignora */ }
      } else {
        // ── Texto normal (horizontal) ──
        let tx = x + pad;
        let tAlign = 'left';

        if (align.horizontal === 'center') {
          tx = x + cellW / 2;
          tAlign = 'center';
        } else if (align.horizontal === 'right') {
          tx = x + cellW - pad;
          tAlign = 'right';
        }

        const maxTextW = effectiveCellW - 2 * pad;
        const lineH = fontSize * 0.38;
        const shouldWrap = align.wrapText === true;

        let lines;
        if (shouldWrap) {
          lines = String(text).split(/\r?\n/).flatMap(part => doc.splitTextToSize(part, maxTextW));
        } else {
          lines = String(text).split(/\r?\n/);
        }

        const totalTextH = lines.length * lineH;

        let ty;
        if (align.vertical === 'top') {
          ty = y + lineH;
        } else if (align.vertical === 'bottom') {
          ty = y + cellH - totalTextH + lineH * 0.3;
        } else {
          ty = y + (cellH - totalTextH) / 2 + lineH * 0.75;
        }

        try {
          doc.text(lines, tx, ty, { align: tAlign });
        } catch (e) { /* ignora */ }
      }
    }
  }

  // ── 9. Fechamento manual do rodapé "NOTAS / EM ATENDIMENTO" ──────────
  try {
    doc.setPage(renderedPage);
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.1);

    let notasRow = null;
    let atendimentoRow = null;

    for (let rr = 1; rr <= maxRow; rr++) {
      const rowChk = ws.getRow(rr);
      for (let cc = 1; cc <= colCount; cc++) {
        const txt = String(xlsxCellText(rowChk.getCell(cc)) || '').toUpperCase();
        if (txt.includes('NOTAS')) notasRow = rr;
        if (txt.includes('EM ATENDIMENTO')) atendimentoRow = rr;
      }
    }

    const baseRow = atendimentoRow || notasRow;
    if (baseRow) {
      const yBase = rowY[baseRow - 1];
      const hBase = rowHeightsMm[baseRow - 1];
      const yLine = yBase + hBase + 0.5;
      doc.line(MARGIN, yLine, pageW - MARGIN, yLine);
    }
  } catch (e) { /* ignora */ }
}


function detectarTipoDocumentoPdf(ws, nomeArquivo = '') {
  const nome = String(nomeArquivo || '').toLowerCase();

  if (nome.includes('proposta')) {
    return 'proposta';
  }

  for (let r = 1; r <= Math.min(15, xlsxLastUsedRow(ws)); r++) {
    const row = ws.getRow(r);

    for (let c = 1; c <= Math.min(15, xlsxLastUsedCol(ws)); c++) {
      const txt = String(xlsxCellText(row.getCell(c)) || '').toUpperCase();

      if (
        txt.includes('PROPOSTA PARA') ||
        txt.includes('FORNECIMENTO DE MEDIDORES') ||
        txt.includes('PROPOSTA Nº') ||
        txt.includes('PROPOSTA N')
      ) {
        return 'proposta';
      }

      if (txt.includes('FOLHA DE DADOS')) {
        return 'folha_dados';
      }
    }
  }

  return 'folha_dados';
}

function isLabelText(txt) {
  const t = String(txt || '').trim().toUpperCase();

  return [
    'CLIENTE:',
    'CNPJ:',
    'INS. ESTA.',
    'E-MAIL:',
    'EMAIL:',
    'TELEFONE:',
    'ENDEREÇO:',
    'ENDERECO:',
    'CIDADE:',
    'ESTADO:',
    'CEP:',
    'CELULAR:',
    'DESTINO DA COMPRA:',
    'CONTRIBUINTE:',
    'OC DO CLIENTE:',
    'PROPOSTA Nº:',
    'PROPOSTA N°:'
  ].some(label => t === label || t.startsWith(label));
}

function findValueRightOfLabel(ws, label, maxRows = 30, maxCols = 20) {
  const labelUpper = label.toUpperCase();

  for (let r = 1; r <= maxRows; r++) {
    const row = ws.getRow(r);

    for (let c = 1; c <= maxCols; c++) {
      const txt = safeText(xlsxCellText(row.getCell(c))).trim();
      const txtUpper = txt.toUpperCase();

      if (txtUpper === labelUpper || txtUpper.startsWith(labelUpper)) {
        // Caso o valor esteja na mesma célula: "Cliente: Fulano"
        const sameCellValue = txt.replace(new RegExp('^' + label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), '').trim();
        if (sameCellValue && !isLabelText(sameCellValue)) {
          return sameCellValue;
        }

        // Procura à direita
        for (let nextC = c + 1; nextC <= maxCols; nextC++) {
          const value = safeText(xlsxCellText(row.getCell(nextC))).trim();

          if (!value) continue;
          if (isLabelText(value)) continue;

          return value;
        }
      }
    }
  }

  return '';
}


function extrairDadosPropostaDoWorksheet(ws) {
  const header = {
    dataProposta: formatDateBR(getCellText(ws, 3, 30)),

    propostaNumero: getCellText(ws, 5, 8),
    ocCliente: getCellText(ws, 5, 29),

    cliente: getCellText(ws, 6, 5),
    endereco: getCellText(ws, 6, 24),

    cnpj: getCellText(ws, 7, 5),
    cidade: getCellText(ws, 7, 24),

    inscricaoEstadual: getCellText(ws, 8, 5),
    contribuinte: getCellText(ws, 8, 15),
    estado: getCellText(ws, 8, 24),

    email: getCellText(ws, 9, 5),
    cep: getCellText(ws, 9, 24),

    telefone: getCellText(ws, 10, 5),
    celular: getCellText(ws, 10, 24),

    destinoCompra: getCellText(ws, 11, 24),
    contato: getCellText(ws, 13, 7),

    aprovadoPor: getCellText(ws, 38, 21),
    prazoPagamento: getCellText(ws, 45, 22),
    clienteAssinatura: getCellText(ws, 52, 18)
  };

  const items = extrairItensPropostaPorPosicao(ws);

  const totais = {
    totalIpi: getCellText(ws, 23, 23),
    totalProposta: getCellText(ws, 23, 29),
    frete: getCellText(ws, 38, 10) || 'CIF'
  };

  return { header, items, totais };
}


function extrairItensPropostaPorPosicao(ws) {
  const items = [];

  for (let r = 20; r <= xlsxLastUsedRow(ws); r++) {
    const item = getCellText(ws, r, 2);

    if (!/^\d+$/.test(item)) continue;

    items.push({
      item,

      // No debug, código e descrição ainda não aparecem como texto.
      // Deixa fallback por enquanto.
      codigo: getCodigoItemProposta(ws, r),
      descricao: getDescricaoItemProposta(ws, r),

      quantidade: getCellText(ws, r, 16),
      precoUnitario: getCellText(ws, r, 19),
      ipi: getCellText(ws, r, 23),
      ipiValor: getCellText(ws, r, 25),
      total: getCellText(ws, r, 28),
      prazo: getCellText(ws, r, 33)
    });
  }

  return items;
}


function getDescricaoItemProposta(ws, rowNumber) {
  for (let c = 6; c <= 15; c++) {
    const txt = getCellText(ws, rowNumber, c);

    if (!txt) continue;
    if (txt === '[object Object]') continue;
    if (/^\d+([.,]\d+)?$/.test(txt)) continue;

    return txt;
  }

  return '';
}

function getCodigoItemProposta(ws, rowNumber) {
  for (let c = 3; c <= 5; c++) {
    const txt = getCellText(ws, rowNumber, c);
    if (txt && txt !== '[object Object]') return txt;
  }

  return '';
}

function getCellText(ws, row, col) {
  return safeText(xlsxCellText(ws.getRow(row).getCell(col))).trim();
}



function getFirstTextAfterLabelInRow(ws, rowNumber, label) {
  const row = ws.getRow(rowNumber);
  const maxCol = xlsxLastUsedCol(ws);
  const labelUpper = String(label || '').trim().toUpperCase();

  let found = false;

  for (let c = 1; c <= maxCol; c++) {
    const txt = safeText(xlsxCellText(row.getCell(c))).trim();
    const upper = txt.toUpperCase();

    if (!found && upper === labelUpper) {
      found = true;
      continue;
    }

    if (found) {
      if (!txt) continue;
      if (isLabelText(txt)) continue;
      if (upper === labelUpper) continue;

      return txt;
    }
  }

  return '';
}

async function generatePDF() {
  showToast('Gerando PDF…');

  const result = await buildExcelWorksheet();
  if (!result) return;

  const workbook = result.workbook;

  const _jsPDF = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
  if (!_jsPDF) {
    showToast('Biblioteca jsPDF não carregada.', false);
    return;
  }

  try {
    const doc = new _jsPDF({
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    });

    if (typeof registerTreviaFont === 'function') {
      registerTreviaFont(doc);
    }

    const tipoDocumento = getTipoDocumentoAtual(result, workbook);

    const nomeArquivo = (
      (tipoDocumento === 'proposta' ? 'Proposta_' : 'FolhaDados_') +
      result.code +
      '_' +
      new Date().toISOString().slice(0, 10) +
      '.pdf'
    ).replace(/[^a-zA-Z0-9_\-.]/g, '_');

    const ws = getWorksheetParaPdf(workbook, tipoDocumento);

    if (tipoDocumento === 'proposta') {
      gerarPdfPropostaManualAPartirDoWorksheet(ws, workbook, nomeArquivo, result);
      showToast('PDF da proposta gerado com sucesso!');
      return;
    }

    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();

    xlsxWorksheetToPdf(ws, workbook, doc, pageW, pageH);

    doc.save(nomeArquivo);
    showToast('PDF gerado com sucesso!');
  } catch (e) {
    showToast('Erro ao gerar PDF: ' + e.message, false);
  }
}


function getWorksheetParaPdf(workbook) {
  if (!workbook || !Array.isArray(workbook.worksheets)) {
    throw new Error('Workbook inválido ou sem worksheets.');
  }

  // 1. Se existir folha de dados, usa ela para PDF de folha de dados
  const folhaDados = workbook.worksheets.find(ws => {
    const name = String(ws.name || '').toUpperCase();
    return name.includes('FOLHA DE DADOS');
  });

  if (folhaDados) {
    return folhaDados;
  }

  // 2. Se existir proposta, usa proposta
  const proposta = workbook.worksheets.find(ws => {
    const name = String(ws.name || '').toUpperCase();
    return name.includes('PROPOSTA');
  });

  if (proposta) {
    return proposta;
  }

  // 3. Nunca usar Planilha de Cotação como primeira opção
  const naoAuxiliar = workbook.worksheets.find(ws => {
    const name = String(ws.name || '').toUpperCase();

    return ![
      'PLANILHA DE COTAÇÃO',
      'CHECK_LIST',
      'BASE',
      'ROTARY',
      'TURBINE'
    ].some(aux => name.includes(aux));
  });

  if (naoAuxiliar) {
    return naoAuxiliar;
  }

  throw new Error('Nenhuma worksheet válida encontrada para gerar PDF.');
}


function getTipoDocumentoAtual(result, workbook) {
  // 1. Se algum lugar do código já informar explicitamente, usa isso
  const tipoExplicito = normalizarTipoDocumento(
    result.tipoDocumento ||
    result.tipoPdf ||
    result.documentoPdf ||
    result.documentType ||
    window.tipoDocumentoPdfAtual
  );

  if (tipoExplicito) return tipoExplicito;

  // 2. Fallback seguro:
  // Se não souber, assume folha de dados.
  // Isso evita cair na proposta por engano quando o workbook tem as duas abas.
  return 'folha_dados';
}

function normalizarTipoDocumento(tipo) {
  const t = String(tipo || '').toLowerCase();

  if (t.includes('proposta')) return 'proposta';
  if (t.includes('folha')) return 'folha_dados';
  if (t.includes('dados')) return 'folha_dados';

  return '';
}


function getWorksheetParaPdf(workbook, tipoDocumento) {
  if (!workbook || !Array.isArray(workbook.worksheets) || workbook.worksheets.length === 0) {
    throw new Error('Workbook inválido ou sem worksheets.');
  }

  const worksheets = workbook.worksheets;

  // Caso simples: se só tem uma aba, usa ela.
  // Isso evita erro quando o Excel gerado já veio filtrado.
  if (worksheets.length === 1) {
    return worksheets[0];
  }

  if (tipoDocumento === 'proposta') {
    const wsProposta = worksheets.find(ws =>
      String(ws.name || '').toUpperCase().includes('PROPOSTA')
    );

    if (wsProposta) return wsProposta;

    throw new Error('Aba de proposta não encontrada.');
  }

  if (tipoDocumento === 'folha_dados') {
    const wsFolha = worksheets.find(ws => {
      const name = String(ws.name || '').toUpperCase();

      return (
        name.includes('FOLHA DE DADOS') ||
        name.includes('FOLHADADOS') ||
        name.includes('DADOS IT')
      );
    });

    if (wsFolha) return wsFolha;

    // fallback seguro: evita pegar abas auxiliares
    const wsNaoAuxiliar = worksheets.find(ws => {
      const name = String(ws.name || '').toUpperCase();

      return !(
        name.includes('PLANILHA DE COTAÇÃO') ||
        name.includes('COTACAO') ||
        name.includes('CHECK_LIST') ||
        name.includes('BASE') ||
        name.includes('ROTARY') ||
        name.includes('TURBINE')
      );
    });

    if (wsNaoAuxiliar) {
      return wsNaoAuxiliar;
    }
    throw new Error('Aba FOLHA DE DADOS não encontrada.');
  }
  throw new Error('Tipo de documento inválido: ' + tipoDocumento);
}

// ── Utilitários compartilhados ────────────────────────────────
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Restaura estado da família e navega para a fase indicada
function restoreState(famKey, params, optionals, targetPhase, afterRender) {
  currentFamilyKey = famKey;
  currentFamily    = FAMILIES[famKey];
  paramValues      = { ...params };
  optionalValues   = { ...optionals };
  navigate(targetPhase, 0);
  if (typeof afterRender === 'function') setTimeout(afterRender, 60);
}

// ═══════════════════════════════════════════════════════════════
// SPEC STORAGE — Salvar / Carregar Especificações
// ═══════════════════════════════════════════════════════════════
const STORAGE_KEY = 'aepio_gerador_specs';

function getSavedSpecs() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}
function setSavedSpecs(specs) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(specs)); }
  catch (e) { showToast('Erro ao salvar: armazenamento cheio', false); }
}

// Captura todos os campos de condições do processo
function getProcessConditions() {
  return {
    fluido:       document.getElementById('pdf-fluido')?.value    || '',
    estado:       document.getElementById('pdf-estado')?.value    || '',
    temp:         document.getElementById('pdf-temp')?.value      || '',
    face:         document.getElementById('pdf-face')?.value      || '',
    sentido:      document.getElementById('pdf-sentido')?.value   || '',
    qop:          document.getElementById('pdf-qop')?.value       || '',
    qmin:         document.getElementById('pdf-qmin')?.value      || '',
    qnorm:        document.getElementById('pdf-qnorm')?.value     || '',
    qmax:         document.getElementById('pdf-qmax')?.value      || '',
    qunit:        document.getElementById('pdf-qunit')?.value     || '',
    pmin:         document.getElementById('pdf-pmin')?.value      || '',
    pnorm:        document.getElementById('pdf-pnorm')?.value     || '',
    pmax:         document.getElementById('pdf-pmax')?.value      || '',
    p_unit:       document.getElementById('pdf-p-unit')?.value    || 'bar',
    pressao:      document.getElementById('pdf-pressao')?.value   || '',
    pressao_unit: document.getElementById('pdf-pressao-unit')?.value || 'bar',
    viscosidade:       document.getElementById('pdf-viscosidade')?.value || '',
    viscosidade_unit:  document.getElementById('pdf-viscosidade-unit')?.value || 'Cp',
    densidade:         document.getElementById('pdf-densidade')?.value   || '',
    densidade_unit:    document.getElementById('pdf-densidade-unit')?.value || 'kg/m³',
    dens_relativa:     document.getElementById('pdf-dens-relativa')?.value || '',
    compress:          document.getElementById('pdf-compress')?.value || '',
    peso_mol:          document.getElementById('pdf-peso-mol')?.value || '',
    temp_proj:         document.getElementById('pdf-temp-proj')?.value || '',
    pressao_proj:      document.getElementById('pdf-pressao-proj')?.value || '',
    cliente:           document.getElementById('pdf-cliente')?.value || '',
    num_doc:           document.getElementById('pdf-num-doc')?.value || '',
    aplicacao:         document.getElementById('pdf-aplicacao')?.value || '',
    notas:             document.getElementById('pdf-notas')?.value       || '',
  };
}

// Preenche todos os campos de condições do processo
function setProcessConditions(cond) {
  if (!cond) return;
  const set = (id, val) => { const e = document.getElementById(id); if (e) e.value = val ?? ''; };
  set('pdf-fluido',       cond.fluido);
  set('pdf-estado',       cond.estado);
  set('pdf-temp',         cond.temp);
  set('pdf-face',         cond.face);
  set('pdf-sentido',      cond.sentido);
  set('pdf-qop',          cond.qop);
  set('pdf-qmin',         cond.qmin);
  set('pdf-qnorm',        cond.qnorm);
  set('pdf-qmax',         cond.qmax);
  set('pdf-qunit',        cond.qunit);
  // Backward-compat: pmin/pnorm/pmax may be {value,unit} objects in old saved specs
  set('pdf-pmin',  cond.pmin?.value  ?? cond.pmin);
  set('pdf-pnorm', cond.pnorm?.value ?? cond.pnorm);
  set('pdf-pmax',  cond.pmax?.value  ?? cond.pmax);
  set('pdf-p-unit', cond.p_unit || cond.pmin?.unit || 'bar');
  set('pdf-pressao',           cond.pressao);
  set('pdf-pressao-unit',      cond.pressao_unit || 'bar');
  set('pdf-viscosidade',       cond.viscosidade);
  set('pdf-viscosidade-unit',  cond.viscosidade_unit || 'Cp');
  set('pdf-densidade',         cond.densidade);
  set('pdf-densidade-unit',    cond.densidade_unit || 'kg/m³');
  set('pdf-dens-relativa',     cond.dens_relativa);
  set('pdf-compress',          cond.compress);
  set('pdf-peso-mol',          cond.peso_mol);
  set('pdf-temp-proj',         cond.temp_proj);
  set('pdf-pressao-proj',      cond.pressao_proj);
  set('pdf-cliente',           cond.cliente);
  set('pdf-num-doc',           cond.num_doc);
  set('pdf-aplicacao',         cond.aplicacao);
  set('pdf-notas',             cond.notas);

  // Recalcula range automaticamente
  document.getElementById('pdf-qmax')?.dispatchEvent(new Event('input'));
}

// Salva especificação atual com nome e cliente (cria nova ou atualiza se editingSpecId estiver ativo)
function saveSpec(name, cliente) {
  const { code } = buildCode();
  const data = {
    name:              name.trim(),
    cliente:           (cliente || '').trim(),
    date:              new Date().toISOString(),
    familyKey:         currentFamilyKey,
    paramValues:       { ...paramValues },
    optionalValues:    { ...optionalValues },
    processConditions: getProcessConditions(),
    orderCode:         code,
  };
  const specs = getSavedSpecs();

  if (editingSpecId !== null) {
    const idx = specs.findIndex(s => s.id === editingSpecId);
    editingSpecId = null;
    if (idx !== -1) {
      specs[idx] = { ...specs[idx], ...data };
      setSavedSpecs(specs);
      return specs[idx];
    }
  }

  const spec = { id: generateId(), ...data };
  specs.unshift(spec);
  setSavedSpecs(specs);
  return spec;
}

// Carrega especificação: restaura estado e navega para conditions
function loadSpec(spec) {
  if (!FAMILIES[spec.familyKey]) { showToast('Família desconhecida: ' + spec.familyKey, false); return; }
  restoreState(spec.familyKey, spec.paramValues, spec.optionalValues, 'conditions', () => {
    setProcessConditions(spec.processConditions);
    updateCode();
  });
}

// Carrega spec em modo edição
function editSpec(spec) {
  editingSpecId = spec.id;
  loadSpec(spec);
}

// Remove especificação por id
function deleteSpec(id) {
  setSavedSpecs(getSavedSpecs().filter(s => s.id !== id));
}

// ═══════════════════════════════════════════════════════════════
// TEMPLATES — Modelos reutilizáveis
// ═══════════════════════════════════════════════════════════════
const TEMPLATES_KEY = 'aepio_gerador_templates';

function getSavedTemplates() {
  try { return JSON.parse(localStorage.getItem(TEMPLATES_KEY) || '[]'); } catch { return []; }
}
function setSavedTemplates(tmpls) {
  try { localStorage.setItem(TEMPLATES_KEY, JSON.stringify(tmpls)); }
  catch (e) { showToast('Erro ao salvar: armazenamento cheio', false); }
}

function saveTemplate(name, description) {
  const { code } = buildCode();
  const tmpl = {
    id:          generateId(),
    name:        name.trim(),
    description: (description || '').trim(),
    date:        new Date().toISOString(),
    familyKey:   currentFamilyKey,
    paramValues: { ...paramValues },
    optionalValues: { ...optionalValues },
    orderCode:   code,
  };
  const tmpls = getSavedTemplates();
  tmpls.unshift(tmpl);
  setSavedTemplates(tmpls);
  return tmpl;
}

function deleteTemplate(id) {
  setSavedTemplates(getSavedTemplates().filter(t => t.id !== id));
}

// Aplica modelo: preenche configuração e vai para conditions
function applyTemplate(tmpl) {
  if (!FAMILIES[tmpl.familyKey]) { showToast('Família desconhecida: ' + tmpl.familyKey, false); return; }
  editingSpecId = null;
  restoreState(tmpl.familyKey, tmpl.paramValues, tmpl.optionalValues, 'conditions');
  showToast('Modelo "' + tmpl.name + '" aplicado!');
}

// Gera descrição automática a partir dos parâmetros configurados
function buildAutoDescription() {
  const fam = currentFamily;
  if (!fam) return '';
  const parts = [];
  fam.parameters.forEach(p => {
    if (!p.required || p.fixed || !paramValues[p.id]) return;
    const opts = typeof p.getDynamicOptions === 'function'
      ? p.getDynamicOptions(paramValues)
      : (p.options || []);
    const opt = opts.find(o => o.code === paramValues[p.id]);
    if (opt) parts.push(opt.label);
  });
  return parts.join(' · ');
}

// ── Sidebar: atualiza seção de clientes ──────────────────────
function updateSidebarClients() {
  const container = document.getElementById('sidebar-clients-section');
  if (!container) return;

  const specs = getSavedSpecs();

  // Conta specs por cliente (apenas nomeados)
  const counts = {};
  specs.forEach(s => { if (s.cliente) counts[s.cliente] = (counts[s.cliente] || 0) + 1; });
  const clients = Object.keys(counts).sort((a, b) => a.localeCompare(b, 'pt-BR'));

  container.innerHTML = '';

  // Atualiza estado ativo do botão home
  const homeBtn = document.getElementById('nav-home');
  if (homeBtn) homeBtn.classList.toggle('active', sidebarFilter === null && phase !== 'order' && phase !== 'order-list');

  // Botão do Pedido (aparece sempre; badge mostra quantidade)
  const orderBtn = document.getElementById('nav-order');
  if (orderBtn) {
    orderBtn.classList.toggle('active', phase === 'order' || phase === 'order-list');
    const badge = orderBtn.querySelector('.order-badge');
    if (badge) {
      badge.textContent = orderItems.length;
      badge.style.display = orderItems.length > 0 ? '' : 'none';
    }
  }

  if (clients.length === 0) return;

  // Cabeçalho da seção
  const label = document.createElement('div');
  label.className = 'sidebar-section-label';
  label.textContent = 'Clientes';
  container.appendChild(label);

  // Item para cada cliente
  clients.forEach(cliente => {
    const btn = document.createElement('button');
    btn.className = 'nav-client' + (sidebarFilter === cliente ? ' active' : '');
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;">
        <path d="M2 4a1 1 0 011-1h3.586a1 1 0 01.707.293L8 4h5a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      </svg>
      <span class="nav-client-name">${cliente}</span>
      <span class="nav-client-count">${counts[cliente]}</span>`;
    btn.addEventListener('click', () => {
      sidebarFilter = sidebarFilter === cliente ? null : cliente;
      navigate('family');
    });
    container.appendChild(btn);
  });

  // ── Modelos na sidebar ──
  const templates = getSavedTemplates();
  if (templates.length > 0) {
    const tmplLabel = document.createElement('div');
    tmplLabel.className = 'sidebar-section-label';
    tmplLabel.textContent = 'Modelos';
    container.appendChild(tmplLabel);

    templates.forEach(tmpl => {
      const meta = FAMILY_META[tmpl.familyKey] || { color: B.blue, icon: '⬡' };
      const btn = document.createElement('button');
      btn.className = 'nav-template';
      btn.title = tmpl.description || tmpl.name;
      btn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;">
          <path d="M3 2h10a1 1 0 011 1v11l-4-2.5L6 14V3a1 1 0 011-1z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
        </svg>
        <span class="nav-template-name">${tmpl.name}</span>`;
      btn.addEventListener('click', () => applyTemplate(tmpl));
      container.appendChild(btn);
    });
  }
}

// Exporta especificação como arquivo .json
function exportSpecAsJson(spec) {
  const blob = new Blob([JSON.stringify(spec, null, 2)], { type: 'application/json' });
  triggerDownload(blob, 'Spec_' + (spec.orderCode || spec.name || 'medidor').replace(/[^a-zA-Z0-9_-]/g, '_') + '.json');
}

// Importa especificação de arquivo JSON (string)
function importSpecFromJson(jsonStr) {
  try {
    const spec = JSON.parse(jsonStr);
    if (!spec.familyKey || !spec.paramValues) throw new Error('Formato inválido: falta familyKey ou paramValues');
    if (!FAMILIES[spec.familyKey])             throw new Error('Família desconhecida: ' + spec.familyKey);
    spec.id   = generateId();
    spec.name = spec.name || 'Importado — ' + new Date().toLocaleDateString('pt-BR');
    const specs = getSavedSpecs();
    specs.unshift(spec);
    setSavedSpecs(specs);
    return { ok: true, spec };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

// ── Save spec inline form ────────────────────────────────────
function showSaveSpecForm() {
  const area = document.getElementById(phase === 'summary' ? 'save-spec-area-summary' : 'save-spec-area');
  if (!area) return;

  // Toggle: if already open, close it
  if (area.innerHTML !== '') { area.innerHTML = ''; return; }

  const { code, valid } = buildCode();
  const fColor = FAMILY_META[currentFamilyKey]?.color || B.blue;

  // Detect edit mode — pré-preenche com dados da spec em edição
  const editingSpec = editingSpecId ? getSavedSpecs().find(s => s.id === editingSpecId) : null;
  const isEditMode  = !!editingSpec;

  area.style.cssText = `margin-top:12px;background:${B.white};border:1px solid ${isEditMode ? fColor : B.border};border-radius:10px;padding:18px 20px;`;

  const title = el('div', { style: `font-size:13px;font-weight:600;color:${B.text};margin-bottom:4px;` });
  title.textContent = isEditMode ? 'Editar Especificação' : 'Salvar Especificação';
  area.appendChild(title);

  if (isEditMode) {
    const badge = el('div', { style: `display:inline-block;font-size:11px;font-weight:600;color:${fColor};background:${fColor}18;border-radius:6px;padding:2px 8px;margin-bottom:10px;` });
    badge.textContent = 'Modo Edição — as alterações substituirão a especificação original';
    area.appendChild(badge);
  }

  if (valid && code && !code.includes('?')) {
    const codePill = el('div', { style: `font-family:'IBM Plex Mono',monospace;font-size:12px;color:${fColor};font-weight:600;margin-bottom:14px;` });
    codePill.textContent = code;
    area.appendChild(codePill);
  }

  // ── Cliente ──
  const existingClients = [...new Set(getSavedSpecs().map(s => s.cliente).filter(Boolean))].sort();
  const datalist = document.createElement('datalist');
  datalist.id = 'aepio-clientes-list';
  existingClients.forEach(c => { const o = document.createElement('option'); o.value = c; datalist.appendChild(o); });
  area.appendChild(datalist);

  const clienteLabel = el('div', { style: `font-size:12px;font-weight:500;color:${B.textMd};margin-bottom:4px;` });
  clienteLabel.textContent = 'Cliente (opcional)';
  area.appendChild(clienteLabel);

  const clienteInput = el('input', {
    style: `width:100%;box-sizing:border-box;padding:9px 12px;border:1px solid ${B.border};border-radius:8px;font-size:14px;font-family:inherit;color:${B.text};outline:none;margin-bottom:12px;`,
  });
  clienteInput.type = 'text';
  clienteInput.setAttribute('list', 'aepio-clientes-list');
  clienteInput.placeholder = 'Ex: Petrobras, Vale, SABESP…';
  if (editingSpec?.cliente) clienteInput.value = editingSpec.cliente;
  clienteInput.addEventListener('focus', () => clienteInput.style.borderColor = fColor);
  clienteInput.addEventListener('blur',  () => clienteInput.style.borderColor = B.border);
  clienteInput.addEventListener('keydown', e => { if (e.key === 'Enter') { nameInput.focus(); } });
  area.appendChild(clienteInput);

  // ── Nome da especificação ──
  const nameLabel = el('div', { style: `font-size:12px;font-weight:500;color:${B.textMd};margin-bottom:4px;` });
  nameLabel.textContent = 'Nome da especificação';
  area.appendChild(nameLabel);

  const row = el('div', { style: 'display:flex;gap:8px;align-items:center;' });

  const nameInput = el('input', {
    style: `flex:1;padding:9px 12px;border:1px solid ${B.border};border-radius:8px;font-size:14px;font-family:inherit;color:${B.text};outline:none;`,
  });
  nameInput.type = 'text';
  nameInput.placeholder = 'Ex: Medidor linha 3 — água potável DN100';
  if (editingSpec?.name) nameInput.value = editingSpec.name;
  nameInput.addEventListener('focus',  () => nameInput.style.borderColor = fColor);
  nameInput.addEventListener('blur',   () => nameInput.style.borderColor = B.border);
  nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') confirmSave(); });

  const confirmBtn = el('button', {
    style: `padding:9px 18px;border-radius:8px;border:none;background:${fColor};color:#fff;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;white-space:nowrap;`,
  });
  confirmBtn.textContent = isEditMode ? 'Atualizar' : 'Salvar';
  confirmBtn.addEventListener('click', confirmSave);

  const cancelBtn = el('button', {
    style: `padding:9px 14px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:13px;font-family:inherit;cursor:pointer;color:${B.textMd};`,
  });
  cancelBtn.textContent = 'Cancelar';
  cancelBtn.addEventListener('click', () => { area.innerHTML = ''; });

  row.appendChild(nameInput);
  row.appendChild(confirmBtn);
  row.appendChild(cancelBtn);
  area.appendChild(row);

  setTimeout(() => (isEditMode ? nameInput : clienteInput).focus(), 50);

  function confirmSave() {
    const name = nameInput.value.trim();
    if (!name) { nameInput.style.borderColor = '#C83030'; nameInput.focus(); return; }
    const cliente = clienteInput.value.trim();
    const isEdit = editingSpecId !== null;
    const saved = saveSpec(name, cliente);
    area.innerHTML = '';
    const label = cliente ? `"${name}" (${cliente})` : `"${name}"`;
    showToast(isEdit ? 'Especificação ' + label + ' atualizada!' : 'Especificação ' + label + ' salva!');
    // Se o cliente salvo existir na sidebar, filtra por ele ao voltar
    if (saved?.cliente) sidebarFilter = saved.cliente;
    navigate('family');
  }
}

// ── Save as Template inline form ─────────────────────────────
function showSaveTemplateForm() {
  const area = document.getElementById(phase === 'summary' ? 'save-spec-area-summary' : 'save-spec-area');
  if (!area) return;
  if (area.innerHTML !== '') { area.innerHTML = ''; return; }

  const { code, valid } = buildCode();
  const fColor = '#7C3AED';

  area.style.cssText = `margin-top:12px;background:${B.white};border:1px solid #DDD6FE;border-radius:10px;padding:18px 20px;`;

  const title = el('div', { style: `font-size:13px;font-weight:600;color:${B.text};margin-bottom:4px;` });
  title.textContent = 'Salvar como Modelo';
  area.appendChild(title);

  const sub = el('div', { style: `font-size:12px;color:${B.textMd};margin-bottom:12px;` });
  sub.textContent = 'Modelos são configurações reutilizáveis — basta aplicar e preencher as condições do processo.';
  area.appendChild(sub);

  if (valid && code && !code.includes('?')) {
    const codePill = el('div', { style: `font-family:'IBM Plex Mono',monospace;font-size:12px;color:${fColor};font-weight:600;margin-bottom:14px;` });
    codePill.textContent = code;
    area.appendChild(codePill);
  }

  // Nome do modelo
  const nameLabel = el('div', { style: `font-size:12px;font-weight:500;color:${B.textMd};margin-bottom:4px;` });
  nameLabel.textContent = 'Nome do modelo';
  area.appendChild(nameLabel);

  const nameInput = el('input', {
    style: `width:100%;box-sizing:border-box;padding:9px 12px;border:1px solid ${B.border};border-radius:8px;font-size:14px;font-family:inherit;color:${B.text};outline:none;margin-bottom:12px;`,
  });
  nameInput.type = 'text';
  nameInput.placeholder = 'Ex: Coriolis DN50 Alta Precisão Inox';
  nameInput.addEventListener('focus', () => nameInput.style.borderColor = fColor);
  nameInput.addEventListener('blur',  () => nameInput.style.borderColor = B.border);
  area.appendChild(nameInput);

  // Descrição (auto-preenchida, editável)
  const descLabel = el('div', { style: `font-size:12px;font-weight:500;color:${B.textMd};margin-bottom:4px;` });
  descLabel.textContent = 'Descrição (características do medidor)';
  area.appendChild(descLabel);

  const descInput = el('textarea', {
    style: `width:100%;box-sizing:border-box;padding:9px 12px;border:1px solid ${B.border};border-radius:8px;font-size:13px;font-family:inherit;color:${B.text};outline:none;resize:vertical;min-height:68px;margin-bottom:12px;line-height:1.5;`,
  });
  descInput.placeholder = 'Descreva brevemente as características deste medidor…';
  descInput.value = buildAutoDescription();
  descInput.addEventListener('focus', () => descInput.style.borderColor = fColor);
  descInput.addEventListener('blur',  () => descInput.style.borderColor = B.border);
  area.appendChild(descInput);

  const row = el('div', { style: 'display:flex;gap:8px;' });

  const confirmBtn = el('button', {
    style: `padding:9px 18px;border-radius:8px;border:none;background:${fColor};color:#fff;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;white-space:nowrap;`,
  });
  confirmBtn.textContent = 'Salvar Modelo';
  confirmBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) { nameInput.style.borderColor = '#C83030'; nameInput.focus(); return; }
    saveTemplate(name, descInput.value);
    area.innerHTML = '';
    showToast('Modelo "' + name + '" salvo!');
    navigate('family');
  });

  const cancelBtn = el('button', {
    style: `padding:9px 14px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:13px;font-family:inherit;cursor:pointer;color:${B.textMd};`,
  });
  cancelBtn.textContent = 'Cancelar';
  cancelBtn.addEventListener('click', () => { area.innerHTML = ''; });

  row.appendChild(confirmBtn);
  row.appendChild(cancelBtn);
  area.appendChild(row);

  setTimeout(() => nameInput.focus(), 50);
}

// ── Templates section (shown in family phase) ─────────────────
function makeTemplatesSection() {
  const templates = getSavedTemplates();
  if (templates.length === 0) return null;

  const section = el('div', { style: 'margin-top:28px;' });

  const hdr = el('div', { style: 'display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;' });
  const hdrLeft = el('div', {});
  hdrLeft.innerHTML = `
    <div style="font-size:16px;font-weight:700;color:${B.text};margin-bottom:2px;">Modelos</div>
    <div style="font-size:13px;color:${B.textMd};">Configurações reutilizáveis — aplique e preencha as condições</div>`;
  hdr.appendChild(hdrLeft);
  section.appendChild(hdr);

  const grid = el('div', { style: 'display:flex;flex-direction:column;gap:10px;' });

  templates.forEach(tmpl => {
    const meta = FAMILY_META[tmpl.familyKey] || { color: B.blue, icon: '⬡' };
    const card = el('div', {
      style: `background:${B.white};border:1px solid ${B.border};border-radius:10px;padding:14px 16px;display:flex;align-items:center;gap:14px;transition:box-shadow .15s;`,
    });
    card.addEventListener('mouseenter', () => card.style.boxShadow = '0 2px 12px rgba(26,109,203,.1)');
    card.addEventListener('mouseleave', () => card.style.boxShadow = 'none');

    // Icon
    const iconWrap = el('div', {
      style: `width:36px;height:36px;border-radius:8px;background:${B.blueLt};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;`,
    });
    iconWrap.textContent = meta.icon;

    // Info
    const info = el('div', { style: 'flex:1;min-width:0;' });
    const desc = tmpl.description || '—';
    info.innerHTML = `
      <div style="font-size:14px;font-weight:600;color:${B.text};margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${tmpl.name}</div>
      <div style="font-size:12px;color:${B.textMd};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${desc}">${desc}</div>
      <div style="font-size:11px;color:${B.textLt};margin-top:3px;font-family:'IBM Plex Mono',monospace;">${tmpl.orderCode || tmpl.familyKey}</div>`;

    // Actions
    const actions = el('div', { style: 'display:flex;gap:6px;flex-shrink:0;' });

    const applyBtn = el('button', {
      style: `padding:7px 14px;border-radius:7px;border:none;background:${B.blue};color:#fff;font-size:12px;font-weight:600;font-family:inherit;cursor:pointer;`,
    });
    applyBtn.textContent = 'Aplicar';
    applyBtn.addEventListener('click', () => applyTemplate(tmpl));

    const delBtn = el('button', {
      style: `padding:7px 10px;border-radius:7px;border:1px solid ${B.border};background:${B.white};font-size:12px;color:${B.textLt};cursor:pointer;font-family:inherit;`,
      title: 'Excluir modelo',
    });
    delBtn.innerHTML = ICONS.trash;
    delBtn.addEventListener('click', () => {
      if (!confirm('Excluir modelo "' + tmpl.name + '"?')) return;
      deleteTemplate(tmpl.id);
      card.style.opacity = '0'; card.style.transition = 'opacity .2s';
      setTimeout(() => render(), 220);
    });
    delBtn.addEventListener('mouseenter', () => { delBtn.style.borderColor = '#C83030'; delBtn.style.color = '#C83030'; });
    delBtn.addEventListener('mouseleave', () => { delBtn.style.borderColor = B.border; delBtn.style.color = B.textLt; });

    actions.appendChild(applyBtn);
    actions.appendChild(delBtn);
    card.appendChild(iconWrap);
    card.appendChild(info);
    card.appendChild(actions);
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

// ── Saved specs section (shown in family phase) ──────────────
function makeSavedSpecsSection() {
  const allSpecs = getSavedSpecs();
  if (allSpecs.length === 0) return null;

  // Aplica filtro de cliente da sidebar
  const specs = sidebarFilter !== null
    ? allSpecs.filter(s => s.cliente === sidebarFilter)
    : allSpecs;

  const section = el('div', { style: 'margin-top:32px;' });

  // Quando filtrado: título mostra o cliente
  const titleText = sidebarFilter ? sidebarFilter : 'Especificações Salvas';
  const subText   = `${specs.length} especificação${specs.length !== 1 ? 'ões' : ''} salva${specs.length !== 1 ? 's' : ''}`;

  // Se filtrado mas sem resultados
  if (specs.length === 0) {
    const empty = el('div', { style: `margin-top:32px;text-align:center;padding:32px 20px;color:${B.textLt};font-size:14px;` });
    empty.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 16 16" fill="none" style="margin:0 auto 10px;display:block;opacity:.4;">
        <path d="M2 4a1 1 0 011-1h3.586a1 1 0 01.707.293L8 4h5a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      </svg>
      Nenhuma especificação para <strong>${sidebarFilter}</strong>`;
    return empty;
  }

  // ── Section header ──
  const hdr = el('div', { style: 'display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;' });
  const hdrLeft = el('div', {});
  hdrLeft.innerHTML = `
    <div style="font-size:16px;font-weight:700;color:${B.text};margin-bottom:2px;">${titleText}</div>
    <div style="font-size:13px;color:${B.textMd};">${subText}</div>`;

  // Import JSON button
  const importLabel = el('label', {
    style: `padding:8px 14px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:13px;font-weight:500;cursor:pointer;color:${B.textMd};display:flex;align-items:center;gap:7px;transition:all .15s;`,
  });
  importLabel.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 2v9M4 7l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    Importar JSON`;
  importLabel.addEventListener('mouseenter', () => { importLabel.style.borderColor = B.blue; importLabel.style.color = B.blue; });
  importLabel.addEventListener('mouseleave', () => { importLabel.style.borderColor = B.border; importLabel.style.color = B.textMd; });
  const fileInput = document.createElement('input');
  fileInput.type = 'file'; fileInput.accept = '.json'; fileInput.style.cssText = 'display:none;';
  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      const result = importSpecFromJson(e.target.result);
      if (result.ok) { showToast('Especificação "' + result.spec.name + '" importada!'); render(); }
      else           { showToast('Erro ao importar: ' + result.error, false); }
      fileInput.value = '';
    };
    reader.readAsText(file);
  });
  importLabel.appendChild(fileInput);
  hdr.appendChild(hdrLeft);
  hdr.appendChild(importLabel);
  section.appendChild(hdr);

  // ── Helper: render one spec card ──
  function makeSpecCard(spec) {
    const meta  = FAMILY_META[spec.familyKey] || { color: B.blue, icon: '●' };
    const date  = new Date(spec.date).toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' });
    const card  = el('div', { class: 'spec-card' });
    card.style.cssText = `background:${B.white};border:1px solid ${B.border};border-radius:10px;`;
    card.addEventListener('mouseenter', () => card.style.boxShadow = '0 2px 12px rgba(0,0,0,.08)');
    card.addEventListener('mouseleave', () => card.style.boxShadow = 'none');

    const iconWrap = el('div', {
      style: `width:36px;height:36px;border-radius:8px;background:${meta.color}15;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;`,
    });
    iconWrap.textContent = meta.icon;

    const info = el('div', { style: 'flex:1;min-width:0;' });
    info.innerHTML = `
      <div style="font-size:14px;font-weight:600;color:${B.text};margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${spec.name}</div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:600;color:${meta.color};">${spec.orderCode || '—'}</span>
        <span style="font-size:11px;color:${B.textLt};">${spec.familyKey} · ${date}</span>
      </div>`;

    const actions = el('div', { class: 'spec-card-actions' });

    const loadBtn = el('button', { style: `padding:7px 14px;border-radius:7px;border:none;background:${meta.color};color:#fff;font-size:12px;font-weight:600;font-family:inherit;cursor:pointer;` });
    loadBtn.textContent = 'Carregar';
    loadBtn.addEventListener('click', () => loadSpec(spec));

    // Edit button
    const editBtn = el('button', { style: `padding:7px 10px;border-radius:7px;border:1px solid ${B.border};background:${B.white};font-size:12px;color:${B.textMd};cursor:pointer;font-family:inherit;`, title: 'Editar especificação' });
    editBtn.innerHTML = ICONS.edit;
    editBtn.addEventListener('click', () => editSpec(spec));
    editBtn.addEventListener('mouseenter', () => { editBtn.style.borderColor = meta.color; editBtn.style.color = meta.color; });
    editBtn.addEventListener('mouseleave', () => { editBtn.style.borderColor = B.border; editBtn.style.color = B.textMd; });

    const exportBtn = el('button', { style: `padding:7px 10px;border-radius:7px;border:1px solid ${B.border};background:${B.white};font-size:12px;color:${B.textMd};cursor:pointer;font-family:inherit;`, title: 'Exportar como JSON' });
    exportBtn.innerHTML = ICONS.download;
    exportBtn.addEventListener('click', () => exportSpecAsJson(spec));
    exportBtn.addEventListener('mouseenter', () => { exportBtn.style.borderColor = B.blue; exportBtn.style.color = B.blue; });
    exportBtn.addEventListener('mouseleave', () => { exportBtn.style.borderColor = B.border; exportBtn.style.color = B.textMd; });

    const delBtn = el('button', { style: `padding:7px 10px;border-radius:7px;border:1px solid ${B.border};background:${B.white};font-size:12px;color:${B.textLt};cursor:pointer;font-family:inherit;`, title: 'Excluir especificação' });
    delBtn.innerHTML = ICONS.trash;
    delBtn.addEventListener('click', () => {
      if (!confirm('Excluir "' + spec.name + '"?')) return;
      deleteSpec(spec.id);
      card.style.opacity = '0'; card.style.transition = 'opacity .2s';
      setTimeout(() => render(), 220);
    });
    delBtn.addEventListener('mouseenter', () => { delBtn.style.borderColor = '#C83030'; delBtn.style.color = '#C83030'; });
    delBtn.addEventListener('mouseleave', () => { delBtn.style.borderColor = B.border; delBtn.style.color = B.textLt; });

    actions.appendChild(loadBtn); actions.appendChild(editBtn); actions.appendChild(exportBtn); actions.appendChild(delBtn);
    card.appendChild(iconWrap); card.appendChild(info); card.appendChild(actions);
    return card;
  }

  // Lista plana — agrupamento por cliente só existe na sidebar
  const grid = el('div', { style: 'display:flex;flex-direction:column;gap:10px;' });
  specs.forEach(spec => grid.appendChild(makeSpecCard(spec)));
  section.appendChild(grid);
  return section;
}

// ═══════════════════════════════════════════════════════════════
// PHASE: ORDER (multi-produto)
// ═══════════════════════════════════════════════════════════════

// ── Helpers de arquivo ────────────────────────────────────────
function fileTypeIcon(type = '', name = '') {
  const n = name.toLowerCase();
  if (type === 'application/pdf' || n.endsWith('.pdf')) return '📄';
  if (type.includes('sheet') || n.match(/\.(xlsx?|csv)$/)) return '📊';
  if (type.includes('word') || n.match(/\.(docx?)$/)) return '📝';
  if (type.startsWith('image/')) return '🖼';
  return '📎';
}
function fmtSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(0) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}
async function handleOrderFiles(files) {
  let added = 0;
  for (const file of files) {
    if (file.size > 20 * 1024 * 1024) { showToast(`"${file.name}" excede 20 MB — ignorado.`, false); continue; }
    const id = 'att_' + generateId();
    await idbSave({ id, data: await file.arrayBuffer() });
    orderAtts.push({ id, name: file.name, size: file.size, type: file.type, date: new Date().toISOString() });
    added++;
  }
  if (added) { saveOrderAtts(); showToast(`${added} arquivo${added > 1 ? 's' : ''} anexado${added > 1 ? 's' : ''}`); }
}
async function downloadOrderFile(id) {
  const att = orderAtts.find(a => a.id === id);
  const rec = await idbGet(id);
  if (!att || !rec) { showToast('Arquivo não encontrado.', false); return; }
  triggerDownload(new Blob([rec.data], { type: att.type || 'application/octet-stream' }), att.name);
}
async function deleteOrderFile(id) {
  await idbDeleteMany([id]);
  orderAtts = orderAtts.filter(a => a.id !== id);
  saveOrderAtts();
}

// ── Cabeçalho identificador do pedido ────────────────────────
function makeOrderHeaderCard() {
  const card = el('div', { style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;padding:20px 22px;margin-bottom:20px;` });
  const hdr  = el('div', { style: `display:flex;align-items:center;gap:8px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid ${B.border};` });
  hdr.innerHTML = `<span style="font-size:16px;">📋</span><span style="font-size:14px;font-weight:700;color:${B.text};">Identificação da Cotação</span>`;
  card.appendChild(hdr);

  const fldStyle = `width:100%;padding:8px 12px;border:1.5px solid ${B.border};border-radius:7px;font-size:13px;font-family:inherit;color:${B.text};outline:none;box-sizing:border-box;transition:border-color .15s;`;
  const lblStyle = `display:block;font-size:11px;font-weight:600;color:${B.textLt};text-transform:uppercase;letter-spacing:.05em;margin-bottom:5px;`;

  const mkField = (label, placeholder, ohKey, type = 'text') => {
    const g = el('div', {});
    const l = el('label', {}); l.style.cssText = lblStyle; l.textContent = label;
    const inp = el('input', { style: fldStyle });
    inp.type = type; inp.placeholder = placeholder; inp.value = orderHeader[ohKey] || '';
    inp.addEventListener('focus', () => inp.style.borderColor = B.blue);
    inp.addEventListener('blur',  () => { inp.style.borderColor = B.border; orderHeader[ohKey] = inp.value.trim(); saveOrderHeader(); });
    g.appendChild(l); g.appendChild(inp); return g;
  };

  const row1 = el('div', { class: 'order-header-row1', style: 'display:grid;grid-template-columns:1fr 2fr 1fr;gap:14px;margin-bottom:14px;' });
  row1.appendChild(mkField('N° da Cotação',  'PED-2024-001',         'num'));
  row1.appendChild(mkField('Cliente',       'Nome do cliente',       'cli'));
  row1.appendChild(mkField('Responsável',   'Vendedor / Engenheiro', 'resp'));
  card.appendChild(row1);

  const row2 = el('div', { class: 'order-header-row2', style: 'display:grid;grid-template-columns:160px 1fr;gap:14px;' });
  row2.appendChild(mkField('Prazo de Entrega', '', 'prazo', 'date'));

  // Observações — textarea
  const obsGrp = el('div', {});
  const obsLbl = el('label', {}); obsLbl.style.cssText = lblStyle; obsLbl.textContent = 'Observações';
  const obsTa  = document.createElement('textarea');
  obsTa.style.cssText = fldStyle + 'resize:vertical;min-height:56px;';
  obsTa.placeholder   = 'Observações gerais da cotação...';
  obsTa.value         = orderHeader.obs || '';
  obsTa.addEventListener('focus', () => obsTa.style.borderColor = B.blue);
  obsTa.addEventListener('blur',  () => { obsTa.style.borderColor = B.border; orderHeader.obs = obsTa.value.trim(); saveOrderHeader(); });
  obsGrp.appendChild(obsLbl); obsGrp.appendChild(obsTa);
  row2.appendChild(obsGrp);
  card.appendChild(row2);
  return card;
}

// ── Seção de documentos anexados ────────────────────────────
function makeAttachmentsCard() {
  const card = el('div', { style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;padding:20px 22px;margin-bottom:20px;` });

  const hdr = el('div', { style: `display:flex;align-items:center;gap:8px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid ${B.border};` });
  hdr.innerHTML = `<span style="font-size:16px;">📎</span><span style="font-size:14px;font-weight:700;color:${B.text};">Documentos Anexados</span><span style="font-size:12px;color:${B.textLt};margin-left:4px;">${orderAtts.length ? orderAtts.length + ' arquivo' + (orderAtts.length > 1 ? 's' : '') : 'nenhum'}</span>`;
  card.appendChild(hdr);

  // Drop zone
  const zone = el('div', {
    style: `border:2px dashed ${B.border};border-radius:10px;padding:28px 20px;text-align:center;cursor:pointer;transition:border-color .15s,background .15s;margin-bottom:${orderAtts.length ? 16 : 0}px;`,
  });
  zone.innerHTML = `
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style="margin:0 auto 10px;display:block;opacity:.45;"><path d="M12 16V8m0 0l-3 3m3-3l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 16.5A4.5 4.5 0 0016.5 12H16a6 6 0 10-11.8 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    <div style="font-size:13px;font-weight:600;color:${B.textMd};margin-bottom:4px;">Arraste arquivos aqui ou clique para selecionar</div>
    <div style="font-size:12px;color:${B.textLt};">PDF, Excel, Word, imagens · máx. 20 MB por arquivo</div>`;

  const fileInp = document.createElement('input');
  fileInp.type = 'file'; fileInp.multiple = true; fileInp.style.display = 'none';
  fileInp.accept = '.pdf,.xlsx,.xls,.csv,.doc,.docx,.png,.jpg,.jpeg,.gif,.bmp,.tiff';

  const zoneDragActive = () => { zone.style.borderColor = B.blue; zone.style.background = B.blue + '10'; };
  const zoneDragReset  = () => { zone.style.borderColor = B.border; zone.style.background = ''; };
  zone.addEventListener('click',     () => fileInp.click());
  zone.addEventListener('mouseenter',() => { zone.style.borderColor = B.blue; zone.style.background = B.blue + '06'; });
  zone.addEventListener('mouseleave',() => zoneDragReset());
  zone.addEventListener('dragenter', e => { e.preventDefault(); zoneDragActive(); });
  zone.addEventListener('dragover',  e => { e.preventDefault(); zoneDragActive(); });
  // Ignora dragleave quando o cursor vai para um elemento filho (evita flicker)
  zone.addEventListener('dragleave', e => { if (zone.contains(e.relatedTarget)) return; zoneDragReset(); });
  zone.addEventListener('drop',      async e => {
    e.preventDefault(); zoneDragReset();
    await handleOrderFiles(Array.from(e.dataTransfer.files));
    render();
  });
  fileInp.addEventListener('change', async () => {
    await handleOrderFiles(Array.from(fileInp.files));
    render();
  });

  card.appendChild(zone);
  card.appendChild(fileInp);

  // Lista de arquivos
  if (orderAtts.length) {
    const list = el('div', { style: 'display:flex;flex-direction:column;gap:8px;' });
    orderAtts.forEach(att => {
      const row = el('div', { style: `display:flex;align-items:center;gap:12px;padding:10px 14px;border:1px solid ${B.border};border-radius:8px;transition:background .12s;` });
      row.addEventListener('mouseenter', () => row.style.background = B.bg);
      row.addEventListener('mouseleave', () => row.style.background = '');

      const icon = el('span', { style: 'font-size:20px;flex-shrink:0;' });
      icon.textContent = fileTypeIcon(att.type, att.name);

      const info  = el('div', { style: 'flex:1;min-width:0;' });
      const nameEl = el('div', { style: `font-size:13px;font-weight:500;color:${B.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;` });
      nameEl.textContent = att.name;
      const metaEl = el('div', { style: `font-size:11px;color:${B.textLt};margin-top:2px;` });
      metaEl.textContent = fmtSize(att.size) + ' · ' + new Date(att.date).toLocaleDateString('pt-BR');
      info.appendChild(nameEl); info.appendChild(metaEl);

      const dlBtn = el('button', { style: `padding:6px 10px;border-radius:6px;border:1px solid ${B.border};background:${B.white};cursor:pointer;color:${B.textMd};font-size:12px;font-family:inherit;display:flex;align-items:center;gap:4px;flex-shrink:0;` });
      dlBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2v9m0 0l-3-3m3 3l3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg> Baixar`;
      dlBtn.addEventListener('click', () => downloadOrderFile(att.id));

      const delBtn = el('button', { style: `padding:6px 8px;border-radius:6px;border:1px solid ${B.border};background:${B.white};cursor:pointer;color:${B.textLt};flex-shrink:0;` });
      delBtn.innerHTML = ICONS.trash;
      delBtn.addEventListener('mouseenter', () => { delBtn.style.color = '#C83030'; delBtn.style.borderColor = '#C83030'; });
      delBtn.addEventListener('mouseleave', () => { delBtn.style.color = B.textLt; delBtn.style.borderColor = B.border; });
      delBtn.addEventListener('click', async () => { await deleteOrderFile(att.id); render(); });

      row.appendChild(icon); row.appendChild(info); row.appendChild(dlBtn); row.appendChild(delBtn);
      list.appendChild(row);
    });
    card.appendChild(list);
  }
  return card;
}

// ══════════════════════════════════════════════════════════════
// PHASE: ORDER-LIST — Listagem de cotações
// ══════════════════════════════════════════════════════════════
function makeOrderListPhase() {
  const wrap = div('');

  // ── Header ──
  const hdr = div('page-header');
  hdr.innerHTML = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;">
      <div>
        <h1 class="page-title">Cotações</h1>
        <p class="page-subtitle">Gerencie suas cotações de instrumentação</p>
      </div>
    </div>`;
  wrap.appendChild(hdr);

  // ── Barra de ações ──
  const actBar = el('div', { style: `display:flex;gap:10px;align-items:center;margin-bottom:20px;flex-wrap:wrap;` });
  const newBtn = el('button', { style: `padding:10px 20px;border-radius:8px;border:none;background:${B.blue};color:#fff;font-size:14px;font-weight:600;font-family:inherit;cursor:pointer;display:flex;align-items:center;gap:7px;` });
  newBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Nova Cotação`;
  newBtn.addEventListener('click', () => {
    const nome = prompt('Nome da nova cotação:', `Cotação ${getOrdersList().length + 1}`);
    if (!nome) return;
    createNewOrder(nome.trim() || `Cotação ${getOrdersList().length + 1}`);
    updateSidebarClients();
    navigate('order');
  });
  actBar.appendChild(newBtn);

  const totalLabel = el('span', { style: `font-size:13px;color:${B.textLt};margin-left:auto;` });
  const list = getOrdersList();
  totalLabel.textContent = `${list.length} cotação${list.length !== 1 ? 'ões' : ''}`;
  actBar.appendChild(totalLabel);
  wrap.appendChild(actBar);

  // ── Lista de cotações (empty state) ──
  if (list.length === 0) {
    const empty = el('div', { style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;padding:48px 24px;text-align:center;color:${B.textLt};` });
    empty.innerHTML = `
      <svg width="40" height="40" viewBox="0 0 16 16" fill="none" style="margin:0 auto 14px;display:block;opacity:.35;">
        <path d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
        <path d="M9 1v4h4" stroke="currentColor" stroke-width="1.3"/>
      </svg>
      <div style="font-size:16px;font-weight:600;color:${B.textMd};margin-bottom:6px;">Nenhuma cotação criada</div>
      <div style="font-size:13px;">Clique em "Nova Cotação" para começar</div>`;
    wrap.appendChild(empty);
    return wrap;
  }

  // ── Cards de cotações ──
  const grid = el('div', { style: 'display:flex;flex-direction:column;gap:12px;' });

  list.forEach(order => {
    const items = (() => { try { return JSON.parse(localStorage.getItem('aepio_order_items_' + order.id) || '[]'); } catch { return []; } })();
    const header = (() => { try { return JSON.parse(localStorage.getItem('aepio_order_header_' + order.id) || '{}'); } catch { return {}; } })();
    const isActive = order.id === _activeOrderId;
    const date = new Date(order.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const card = el('div', {
      style: `background:${B.white};border:${isActive ? '2px' : '1px'} solid ${isActive ? B.blue : B.border};border-radius:12px;padding:18px 20px;display:flex;align-items:center;gap:16px;cursor:pointer;transition:all .15s;`,
    });
    card.addEventListener('mouseenter', () => { if (!isActive) { card.style.borderColor = B.blue + '60'; card.style.boxShadow = `0 2px 12px ${B.blue}10`; } });
    card.addEventListener('mouseleave', () => { if (!isActive) { card.style.borderColor = B.border; card.style.boxShadow = 'none'; } });
    card.addEventListener('click', () => {
      switchToOrder(order.id);
      updateSidebarClients();
      navigate('order');
    });

    // Ícone
    const iconWrap = el('div', {
      style: `width:44px;height:44px;border-radius:10px;background:${isActive ? B.blue + '12' : B.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;`,
    });
    iconWrap.innerHTML = `<svg width="20" height="20" viewBox="0 0 16 16" fill="none" style="color:${isActive ? B.blue : B.textLt};">
      <path d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M9 1v4h4M5 7h6M5 10h6M5 13h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`;

    // Info
    const info = el('div', { style: 'flex:1;min-width:0;' });

    const nameRow = el('div', { style: 'display:flex;align-items:center;gap:8px;margin-bottom:4px;' });
    const nameEl = el('div', { style: `font-size:15px;font-weight:600;color:${B.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;` });
    nameEl.textContent = order.name;
    nameRow.appendChild(nameEl);
    if (isActive) {
      const activeBadge = el('span', { style: `font-size:10px;font-weight:700;color:${B.blue};background:${B.blue}15;border-radius:20px;padding:2px 8px;flex-shrink:0;` });
      activeBadge.textContent = 'ATIVA';
      nameRow.appendChild(activeBadge);
    }
    info.appendChild(nameRow);

    const metaRow = el('div', { style: `font-size:12px;color:${B.textMd};display:flex;gap:12px;flex-wrap:wrap;` });
    const clienteSpan = el('span', {});
    clienteSpan.textContent = header.cli || 'Sem cliente';
    metaRow.appendChild(clienteSpan);
    const dateSpan = el('span', { style: `color:${B.textLt};` });
    dateSpan.textContent = date;
    metaRow.appendChild(dateSpan);
    info.appendChild(metaRow);

    // Contagem de itens
    const countWrap = el('div', { style: `display:flex;align-items:center;gap:12px;flex-shrink:0;` });
    const countBadge = el('div', { style: `text-align:center;min-width:52px;` });
    const countNum = el('div', { style: `font-size:22px;font-weight:700;color:${items.length > 0 ? B.blue : B.textLt};line-height:1;` });
    countNum.textContent = items.length;
    const countLabel = el('div', { style: `font-size:10px;color:${B.textLt};margin-top:2px;` });
    countLabel.textContent = items.length === 1 ? 'item' : 'itens';
    countBadge.appendChild(countNum);
    countBadge.appendChild(countLabel);
    countWrap.appendChild(countBadge);

    // Ações
    const acts = el('div', { style: 'display:flex;gap:6px;flex-shrink:0;' });

    const editBtn = el('button', { title: 'Renomear', style: `padding:7px 9px;border-radius:7px;border:1px solid ${B.border};background:${B.white};cursor:pointer;color:${B.textMd};font-size:12px;font-family:inherit;` });
    editBtn.innerHTML = ICONS.edit;
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const novo = prompt('Novo nome da cotação:', order.name);
      if (novo && novo.trim() && novo.trim() !== order.name) {
        const l = getOrdersList();
        const o = l.find(x => x.id === order.id);
        if (o) { o.name = novo.trim(); saveOrdersList(l); render(); }
      }
    });
    acts.appendChild(editBtn);

    if (list.length > 1) {
      const delBtn = el('button', { title: 'Excluir', style: `padding:7px 9px;border-radius:7px;border:1px solid ${B.border};background:${B.white};cursor:pointer;color:${B.textLt};font-size:12px;font-family:inherit;` });
      delBtn.innerHTML = ICONS.trash;
      delBtn.addEventListener('mouseenter', () => { delBtn.style.color = '#C83030'; delBtn.style.borderColor = '#C83030'; });
      delBtn.addEventListener('mouseleave', () => { delBtn.style.color = B.textLt; delBtn.style.borderColor = B.border; });
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cnt = items.length;
        const msg = cnt > 0
          ? `Excluir "${order.name}" com ${cnt} item${cnt > 1 ? 's' : ''}? Esta ação não pode ser desfeita.`
          : `Excluir "${order.name}"?`;
        if (!confirm(msg)) return;
        deleteOrder(order.id);
        updateSidebarClients();
        render();
      });
      acts.appendChild(delBtn);
    }

    card.appendChild(iconWrap);
    card.appendChild(info);
    card.appendChild(countWrap);
    card.appendChild(acts);
    grid.appendChild(card);
  });

  wrap.appendChild(grid);
  return wrap;
}

function makeOrderPhase() {
  const wrap = div('');

  // ── Cabeçalho da página ──────────────────────────────────────
  const hdr = div('page-header');
  const activeOrderName = getOrdersList().find(o => o.id === _activeOrderId)?.name || 'Cotação';
  const backBtn = el('button', { style: `background:none;border:none;cursor:pointer;color:${B.textMd};font-size:13px;font-family:inherit;display:flex;align-items:center;gap:6px;padding:0;margin-bottom:8px;` });
  backBtn.innerHTML = `${ICONS.back} Voltar às cotações`;
  backBtn.addEventListener('click', () => navigate('order-list'));
  hdr.appendChild(backBtn);

  const titleWrap = el('div', {});
  const h1 = el('h1', { class: 'page-title' });
  h1.textContent = activeOrderName;
  titleWrap.appendChild(h1);
  const sub = el('p', { class: 'page-subtitle' });
  sub.textContent = `${orderItems.length} item${orderItems.length !== 1 ? 's' : ''} · ${orderAtts.length} documento${orderAtts.length !== 1 ? 's' : ''} anexado${orderAtts.length !== 1 ? 's' : ''}`;
  titleWrap.appendChild(sub);
  hdr.appendChild(titleWrap);
  wrap.appendChild(hdr);

  // ── Identificação da Cotação (sempre visível) ──────────────────
  wrap.appendChild(makeOrderHeaderCard());

  // ── Empty state ───────────────────────────────────────────────
  if (orderItems.length === 0) {
    const empty = el('div', { style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;padding:48px 24px;text-align:center;color:${B.textLt};margin-bottom:20px;` });
    empty.innerHTML = `
      <svg width="40" height="40" viewBox="0 0 16 16" fill="none" style="margin:0 auto 14px;display:block;opacity:.35;">
        <path d="M2 3h12l-1.5 9H3.5L2 3z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
        <path d="M5 3V2a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" stroke-width="1.3"/>
        <circle cx="6" cy="13" r="1" fill="currentColor"/><circle cx="11" cy="13" r="1" fill="currentColor"/>
      </svg>
      <div style="font-size:16px;font-weight:600;color:${B.textMd};margin-bottom:6px;">Nenhum item ainda</div>
      <div style="font-size:13px;margin-bottom:20px;">Configure um medidor e clique em "+ Cotação" para adicionar</div>
      <button id="empty-order-config-btn" style="padding:9px 20px;border-radius:8px;border:none;background:${B.blue};color:#fff;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;">Configurar medidor</button>`;
    setTimeout(() => {
      document.getElementById('empty-order-config-btn')?.addEventListener('click', () => {
        returnToOrder = true;
        navigate('family');
      });
    }, 0);
    wrap.appendChild(empty);
    wrap.appendChild(makeAttachmentsCard());
    return wrap;
  }

  // ── Itens do pedido ───────────────────────────────────────────
  const tableCard = el('div', { class: 'order-table-card', style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;overflow:hidden;margin-bottom:20px;` });
  const tableScroll = el('div', { class: 'order-table-scroll' });

  // Cabeçalho da tabela
  const COLS = '28px minmax(0,1fr) 100px 100px 52px 84px';
  const tblHdr = el('div', { class: 'order-table-header', style: `display:grid;grid-template-columns:${COLS};gap:10px;align-items:center;padding:10px 16px;background:${B.bg};border-bottom:1px solid ${B.border};font-size:11px;font-weight:700;color:${B.textLt};letter-spacing:.05em;text-transform:uppercase;` });
  tblHdr.innerHTML = '<div>#</div><div>Instrumento</div><div>TAG</div><div>Status</div><div style="text-align:center;">Qtd</div><div></div>';
  tableScroll.appendChild(tblHdr);

  orderItems.forEach((item, idx) => {
    const meta   = FAMILY_META[item.familyKey] || { color: B.blue, icon: '●' };
    const pc     = item.processConditions || {};
    const pv     = item.paramValues || {};
    const fam    = FAMILIES[item.familyKey];
    const famD   = FAM_DISPLAY[item.familyKey] || { badge: item.familyKey };
    const stMap  = ITEM_STATUS_MAP[item.status] || ITEM_STATUS_MAP.pendente;

    // ── Wrapper do item (linha principal + resumo) ──
    const itemWrap = el('div', { style: `border-bottom:1px solid ${B.bg};transition:background .12s;` });
    itemWrap.addEventListener('mouseenter', () => itemWrap.style.background = B.bg);
    itemWrap.addEventListener('mouseleave', () => itemWrap.style.background = '');

    // ── Linha principal ──
    const row = el('div', { class: 'order-table-row', style: `display:grid;grid-template-columns:${COLS};gap:10px;align-items:center;padding:11px 16px 6px;` });

    // #
    const idxEl = el('div', { style: `font-size:13px;font-weight:700;color:${B.textLt};text-align:center;` });
    idxEl.textContent = idx + 1;

    // Código + família inline
    const info = el('div', { style: 'min-width:0;' });
    const codeEl = el('div', { style: 'display:flex;align-items:center;gap:7px;margin-bottom:2px;' });
    codeEl.innerHTML = `<span style="width:20px;height:20px;border-radius:4px;background:${meta.color}18;display:inline-flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;">${meta.icon}</span>`;
    const codeSpan = document.createElement('span');
    codeSpan.style.cssText = `font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:${B.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`;
    codeSpan.textContent = item.code;
    codeEl.appendChild(codeSpan);
    const subEl = el('div', { style: `font-size:11px;color:${B.textMd};` });
    subEl.textContent = famD.badge;
    info.appendChild(codeEl);
    info.appendChild(subEl);

    // TAG input
    const tagInput = el('input', { style: `padding:5px 8px;border:1px solid ${B.border};border-radius:6px;font-size:12px;font-family:inherit;color:${B.text};width:100%;box-sizing:border-box;` });
    tagInput.type = 'text'; tagInput.placeholder = 'TAG-101'; tagInput.value = item.tag || '';
    tagInput.addEventListener('change', () => { item.tag = tagInput.value.trim(); saveOrderItems(); });

    // Status select
    const statusSel = el('select', { style: `padding:5px 6px;border-radius:6px;border:1.5px solid ${stMap.color}40;background:${stMap.bg};color:${stMap.color};font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;width:100%;box-sizing:border-box;outline:none;` });
    Object.entries(ITEM_STATUS_MAP).forEach(([val, s]) => {
      const opt = document.createElement('option');
      opt.value = val; opt.textContent = s.label;
      if (val === (item.status || 'pendente')) opt.selected = true;
      statusSel.appendChild(opt);
    });
    statusSel.addEventListener('change', () => {
      item.status = statusSel.value;
      saveOrderItems();
      const ns = ITEM_STATUS_MAP[item.status] || ITEM_STATUS_MAP.pendente;
      statusSel.style.borderColor  = ns.color + '40';
      statusSel.style.background   = ns.bg;
      statusSel.style.color        = ns.color;
    });

    // Qty
    const qtyInput = el('input', { style: `padding:5px 6px;border:1px solid ${B.border};border-radius:6px;font-size:13px;font-weight:600;font-family:inherit;color:${B.text};width:100%;text-align:center;box-sizing:border-box;` });
    qtyInput.type = 'number'; qtyInput.min = '1'; qtyInput.value = item.qty || 1;
    qtyInput.addEventListener('change', () => { item.qty = Math.max(1, parseInt(qtyInput.value) || 1); qtyInput.value = item.qty; saveOrderItems(); });

    // Actions
    const acts = el('div', { style: 'display:flex;gap:4px;justify-content:flex-end;' });

    const editBtn = el('button', { style: `padding:5px 9px;border-radius:6px;border:1px solid ${B.border};background:${B.white};cursor:pointer;color:${B.textMd};font-size:11px;font-family:inherit;display:flex;align-items:center;gap:3px;`, title: 'Editar configuração' });
    editBtn.innerHTML = `${ICONS.edit} Editar`;
    editBtn.addEventListener('click', () => {
      if (!FAMILIES[item.familyKey]) return;
      restoreState(item.familyKey, item.paramValues, item.optionalValues, 'conditions', () => {
        setProcessConditions(item.processConditions); updateCode();
      });
    });

    const delBtn = el('button', { style: `padding:5px 7px;border-radius:6px;border:1px solid ${B.border};background:${B.white};cursor:pointer;color:${B.textLt};`, title: 'Remover item' });
    delBtn.innerHTML = ICONS.trash;
    delBtn.addEventListener('click', () => { if (!confirm('Remover este item da cotação?')) return; removeOrderItem(item.id); render(); });
    delBtn.addEventListener('mouseenter', () => { delBtn.style.color = '#C83030'; delBtn.style.borderColor = '#C83030'; });
    delBtn.addEventListener('mouseleave', () => { delBtn.style.color = B.textLt; delBtn.style.borderColor = B.border; });

    acts.appendChild(editBtn); acts.appendChild(delBtn);

    row.appendChild(idxEl); row.appendChild(info); row.appendChild(tagInput);
    row.appendChild(statusSel); row.appendChild(qtyInput); row.appendChild(acts);
    itemWrap.appendChild(row);

    // ── Resumo breve abaixo da linha ──
    const specs = [];
    if (fam) {
      const params = fam.parameters || [];
      // Extrair specs-chave de forma legível
      const findParam = (id) => {
        const p = params.find(x => x.id === id);
        if (!p || !pv[id]) return null;
        const opts = typeof p.getDynamicOptions === 'function' ? p.getDynamicOptions(pv) : (p.options || []);
        const o = opts.find(x => x.code === pv[id]);
        return o ? o.label : pv[id];
      };
      // DN / Diâmetro
      const dn = findParam('dn');
      if (dn) specs.push({ lbl: 'DN', val: dn });
      // Versão (compacta/remota)
      const ver = findParam('transmitter_type') || findParam('versao');
      if (ver) specs.push({ lbl: 'Versão', val: ver });
      // Conexão de processo
      const conn = findParam('process_conn') || findParam('conexao');
      if (conn) specs.push({ lbl: 'Conexão', val: conn });
      // Modelo (TCF)
      const modelo = findParam('modelo');
      if (modelo) specs.push({ lbl: 'Modelo', val: modelo });
      // Classe (TBQM)
      const classe = findParam('classe');
      if (classe) specs.push({ lbl: 'Classe', val: classe });
      // Revestimento (TEF)
      const lining = findParam('lining');
      if (lining) specs.push({ lbl: 'Revest.', val: lining });
      // Alimentação
      const pwr = findParam('power_supply');
      if (pwr) specs.push({ lbl: 'Alim.', val: pwr });
      // Tipo (0DM)
      const tipo = findParam('tipo');
      if (tipo) specs.push({ lbl: 'Tipo', val: tipo });
      // Designação (0DM/TYL)
      const desig = findParam('designacao');
      if (desig) specs.push({ lbl: 'Desig.', val: desig });
      // Display (0DM)
      const display = findParam('display');
      if (display) specs.push({ lbl: 'Display', val: display });
      // Entrada (0DM)
      const entrada = findParam('entrada');
      if (entrada) specs.push({ lbl: 'Entrada', val: entrada });
      // Saída (0DM)
      const saida = findParam('saida');
      if (saida) specs.push({ lbl: 'Saída', val: saida });
    }
    // Fluido (das condições de processo)
    if (pc.fluido) specs.push({ lbl: 'Fluido', val: pc.fluido });

    if (specs.length > 0) {
      const specRow = el('div', { style: `padding:0 16px 10px 54px;display:flex;gap:6px;flex-wrap:wrap;` });
      specs.forEach(s => {
        const pill = el('span', { style: `display:inline-flex;align-items:center;gap:4px;font-size:10px;color:${B.textMd};background:${B.bg};border-radius:4px;padding:2px 8px;line-height:1.4;` });
        pill.innerHTML = `<span style="font-weight:700;color:${B.textLt};text-transform:uppercase;letter-spacing:.03em;">${s.lbl}</span> ${s.val}`;
        specRow.appendChild(pill);
      });
      itemWrap.appendChild(specRow);
    }

    tableScroll.appendChild(itemWrap);
  });
  tableCard.appendChild(tableScroll);

  wrap.appendChild(tableCard);

  // ── Documentos Anexados ───────────────────────────────────────
  wrap.appendChild(makeAttachmentsCard());

  // ── Card: Documentos da Cotação ────────────────────────────────
  const docsCard = el('div', { style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;padding:18px 20px;margin-bottom:20px;` });

  const docsHdr = el('div', { style: `display:flex;align-items:center;gap:8px;margin-bottom:6px;padding-bottom:12px;border-bottom:1px solid ${B.bg};` });
  docsHdr.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;color:${B.blue}">
      <path d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M9 1v4h4M5 7h6M5 10h6M5 13h3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
    <span style="font-size:14px;font-weight:700;color:${B.text};">Documentos da Cotação</span>
    <span style="font-size:12px;color:${B.textLt};margin-left:2px;">${orderItems.length} instrumento${orderItems.length !== 1 ? 's' : ''}</span>`;
  docsCard.appendChild(docsHdr);

  const docsDesc = el('p', { style: `font-size:12px;color:${B.textMd};margin-bottom:14px;line-height:1.5;` });
  docsDesc.textContent = 'Gere um PDF consolidado com todos os instrumentos da cotação em um único documento — capa, índice e uma página de resumo por instrumento.';
  docsCard.appendChild(docsDesc);

  const docsBtns = el('div', { style: 'display:flex;gap:10px;flex-wrap:wrap;' });

  const summaryPdfBtn = el('button', { style: `padding:9px 18px;border-radius:8px;border:none;background:${B.blue};color:#fff;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;display:flex;align-items:center;gap:7px;` });
  summaryPdfBtn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M9 1v4h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M7 10l-2 2 2 2M7 12h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Resumo da Cotação (PDF)`;
  summaryPdfBtn.addEventListener('click', generateOrderSummaryPDF);
  docsBtns.appendChild(summaryPdfBtn);

  const listXlsBtn = el('button', { style: `padding:9px 18px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;color:${B.textMd};display:flex;align-items:center;gap:7px;` });
  listXlsBtn.innerHTML = `${ICONS.excel} Lista da Cotação (Excel)`;
  listXlsBtn.addEventListener('click', generateOrderExcel);
  docsBtns.appendChild(listXlsBtn);

  docsCard.appendChild(docsBtns);
  wrap.appendChild(docsCard);

  // ── Barra de ações ────────────────────────────────────────────
  const actBar = el('div', { style: 'display:flex;gap:10px;flex-wrap:wrap;align-items:center;' });

  const addMoreBtn = el('button', { style: `padding:10px 18px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;color:${B.textMd};display:flex;align-items:center;gap:6px;` });
  addMoreBtn.innerHTML = `${ICONS.arrow} Configurar outro medidor`;
  addMoreBtn.addEventListener('click', () => { returnToOrder = true; navigate('family'); });

  const clrBtn = el('button', { style: `padding:10px 16px;border-radius:8px;border:1px solid transparent;background:transparent;font-size:13px;font-family:inherit;cursor:pointer;color:${B.textLt};margin-left:auto;` });
  clrBtn.textContent = 'Limpar cotação';
  clrBtn.addEventListener('click', async () => {
    if (!confirm('Limpar todos os itens e documentos da cotação?')) return;
    await clearOrder();
    render();
  });

  actBar.appendChild(addMoreBtn); actBar.appendChild(clrBtn);
  wrap.appendChild(actBar);
  return wrap;
}

// ── Dialog: Adicionar à Cotação ───────────────────────────────
function showAddToOrderDialog() {
  const { code, valid } = buildCode();
  if (!valid || code.includes('?')) {
    showToast('Complete a configuração (todos os campos obrigatórios) antes de adicionar à cotação.', false);
    return;
  }
  const fColor = FAMILY_META[currentFamilyKey]?.color || B.blue;

  // Build modal
  const overlay = el('div', {
    style: `position:fixed;inset:0;background:rgba(26,35,50,.5);z-index:500;display:flex;align-items:center;justify-content:center;padding:20px;`
  });

  const modal = el('div', {
    style: `background:${B.white};border-radius:14px;padding:24px;max-width:440px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.2);`
  });

  modal.innerHTML = `
    <div style="font-size:17px;font-weight:700;color:${B.text};margin-bottom:4px;">Adicionar à Cotação</div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;color:${fColor};font-weight:600;margin-bottom:18px;">${code}</div>
    <div class="order-modal-fields">
      <div>
        <label style="font-size:12px;font-weight:500;color:${B.textMd};display:block;margin-bottom:5px;">TAG do Instrumento</label>
        <input id="order-tag" type="text" placeholder="Ex: FT-101" style="width:100%;padding:9px 12px;border:1px solid ${B.border};border-radius:8px;font-size:14px;font-family:inherit;outline:none;" />
      </div>
      <div>
        <label style="font-size:12px;font-weight:500;color:${B.textMd};display:block;margin-bottom:5px;">Quantidade</label>
        <input id="order-qty" type="number" min="1" value="1" style="width:100%;padding:9px 12px;border:1px solid ${B.border};border-radius:8px;font-size:14px;font-family:inherit;outline:none;" />
      </div>
    </div>
    <div style="display:flex;gap:10px;justify-content:flex-end;">
      <button id="order-cancel" style="padding:9px 18px;border-radius:8px;border:1px solid ${B.border};background:${B.white};font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;color:${B.textMd};">Cancelar</button>
      <button id="order-confirm" style="padding:9px 22px;border-radius:8px;border:none;background:${fColor};color:#fff;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;">Adicionar</button>
    </div>`;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  setTimeout(() => document.getElementById('order-tag')?.focus(), 60);

  const close = () => overlay.remove();
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.getElementById('order-cancel')?.addEventListener('click', close);
  document.getElementById('order-confirm')?.addEventListener('click', () => {
    const qty = Math.max(1, parseInt(document.getElementById('order-qty')?.value) || 1);
    const tag = (document.getElementById('order-tag')?.value || '').trim();
    addToOrder(qty, tag);
    close();
    updateSidebarClients();
    const orderName = getOrdersList().find(o => o.id === _activeOrderId)?.name || 'Cotação';
    showToast(`"${code}" adicionado — ${orderItems.length} item${orderItems.length > 1 ? 's' : ''} em "${orderName}"`);
    if (returnToOrder) { returnToOrder = false; navigate('order'); }
  });
}

// ── Exportar lista do pedido em Excel ────────────────────────
async function generateOrderExcel() {
  if (orderItems.length === 0) { showToast('Cotação vazia.', false); return; }
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Itens da Cotação');

  // ─ Bloco de cabeçalho do pedido ─
  const oh = orderHeader;
  const metaLines = [
    ['Cotação',      oh.num  || '—'],
    ['Cliente',      oh.cli  || '—'],
    ['Responsável',  oh.resp || '—'],
    ['Prazo',        oh.prazo ? new Date(oh.prazo + 'T00:00:00').toLocaleDateString('pt-BR') : '—'],
    ['Observações',  oh.obs  || ''],
    ['Gerado em',    new Date().toLocaleString('pt-BR')],
  ];
  metaLines.forEach(([k, v]) => {
    const r = ws.addRow([k, v]);
    r.getCell(1).font = { bold: true, color: { argb: 'FF6B7280' }, size: 10 };
    r.getCell(2).font = { size: 10 };
    r.height = 15;
  });
  ws.addRow([]);  // linha em branco

  // ─ Tabela de itens ─
  const startRow = metaLines.length + 2;
  ws.columns = [
    { header: '#',           key: 'idx',    width: 5  },
    { header: 'Família',     key: 'familia', width: 10 },
    { header: 'Order Code',  key: 'code',   width: 30 },
    { header: 'TAG',         key: 'tag',    width: 14 },
    { header: 'Qtd',         key: 'qty',    width: 7  },
    { header: 'Status',      key: 'status', width: 14 },
    { header: 'Cliente',     key: 'cliente', width: 22 },
    { header: 'Fluido',      key: 'fluido', width: 18 },
    { header: 'Qop',         key: 'qop',    width: 14 },
    { header: 'Pressão Op.', key: 'pressao',width: 14 },
    { header: 'Temp. (°C)',  key: 'temp',   width: 12 },
  ];

  // Re-escreve o cabeçalho da tabela na linha correta
  const hdrRow = ws.getRow(startRow);
  hdrRow.values = ['#', 'Família', 'Order Code', 'TAG', 'Qtd', 'Status', 'Cliente', 'Fluido', 'Qop', 'Pressão Op.', 'Temp. (°C)'];
  hdrRow.font      = { bold: true, color: { argb: 'FFFFFFFF' } };
  hdrRow.fill      = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A6DCB' } };
  hdrRow.alignment = { vertical: 'middle', horizontal: 'center' };
  hdrRow.height    = 20;

  orderItems.forEach((item, idx) => {
    const pc  = item.processConditions || {};
    const st  = ITEM_STATUS_MAP[item.status]?.label || 'Pendente';
    const r   = ws.addRow([
      idx + 1, item.familyKey, item.code, item.tag || '', item.qty || 1, st,
      pc.cliente || '', pc.fluido || '',
      pc.qop  ? `${pc.qop} ${pc.qunit || 'm³/h'}` : '',
      pc.pressao ? `${pc.pressao} ${pc.pressao_unit || 'bar'}` : '',
      pc.temp || '',
    ]);
    if ((startRow + idx + 1) % 2 === 0)
      r.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEAF1FB' } };
    r.alignment = { vertical: 'middle' };
    r.height = 18;
  });

  ws.autoFilter = { from: { row: startRow, column: 1 }, to: { row: startRow, column: 11 } };
  ws.views = [{ state: 'frozen', ySplit: startRow }];

  // ─ Aba de documentos anexados ─
  if (orderAtts.length) {
    const wsAtt = wb.addWorksheet('Documentos Anexados');
    wsAtt.columns = [
      { header: 'Arquivo',    key: 'name', width: 40 },
      { header: 'Tamanho',    key: 'size', width: 14 },
      { header: 'Tipo',       key: 'type', width: 24 },
      { header: 'Anexado em', key: 'date', width: 20 },
    ];
    const attHdr = wsAtt.getRow(1);
    attHdr.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    attHdr.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF374151' } };
    attHdr.height = 18;
    orderAtts.forEach(a => {
      wsAtt.addRow([a.name, fmtSize(a.size), a.type || '—', new Date(a.date).toLocaleString('pt-BR')]);
    });
  }

  const buffer = await wb.xlsx.writeBuffer();
  const blob   = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const date   = new Date().toISOString().slice(0, 10);
  const pedNum = oh.num ? `_${oh.num.replace(/[^a-zA-Z0-9]/g, '')}` : '';
  triggerDownload(blob, `Cotacao${pedNum}_${date}.xlsx`);
  showToast(`Excel gerado — ${orderItems.length} item${orderItems.length > 1 ? 's' : ''}`);
}

// ═══════════════════════════════════════════════════════════════
// PHASE: SUMMARY
// ═══════════════════════════════════════════════════════════════
function makeSummaryPhase() {
  const wrap = div('');
  const { code, segments, valid } = buildCode();
  const fColor = FAMILY_META[currentFamilyKey]?.color || B.blue;
  const meta   = FAMILY_META[currentFamilyKey] || { icon: '●', color: B.blue, description: '' };
  const ex     = getExtras();

  // ── Header ──
  const hdr = div('page-header');
  hdr.innerHTML = `
    <div>
      <h1 class="page-title">Resumo</h1>
      <p class="page-subtitle">Revise as configurações antes de salvar ou gerar documentos</p>
    </div>`;
  wrap.appendChild(hdr);

  // ── Order Code card ──
  const codeCard = el('div', { style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;padding:20px 22px;margin-bottom:20px;` });

  const codeRow = el('div', { style: 'display:flex;align-items:center;gap:14px;margin-bottom:12px;flex-wrap:wrap;' });
  const codeTxt = el('div', { style: `font-family:'IBM Plex Mono',monospace;font-size:22px;font-weight:700;color:${valid ? B.text : B.textLt};letter-spacing:.03em;flex:1;min-width:0;word-break:break-all;` });
  codeTxt.textContent = code || '—';

  const copyBtn = el('button', { style: `padding:7px 14px;border-radius:7px;border:1px solid ${B.border};background:${B.white};font-size:12px;font-weight:600;font-family:inherit;cursor:pointer;color:${B.textMd};display:flex;align-items:center;gap:6px;flex-shrink:0;` });
  copyBtn.innerHTML = `${ICONS.copy} Copiar`;
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(code).then(() => {
      copyBtn.innerHTML = `${ICONS.check} Copiado!`;
      setTimeout(() => { copyBtn.innerHTML = `${ICONS.copy} Copiar`; }, 2000);
    });
  });
  codeRow.appendChild(codeTxt);
  codeRow.appendChild(copyBtn);
  codeCard.appendChild(codeRow);

  // Aplicação (cliente)
  if (ex.aplicacao) {
    const appRow = el('div', { style: `display:flex;align-items:center;gap:6px;margin-bottom:10px;` });
    const appLbl = el('span', { style: `font-size:10px;font-weight:600;color:${B.textLt};letter-spacing:.07em;flex-shrink:0;` });
    appLbl.textContent = 'APLICAÇÃO';
    const appVal = el('span', { style: `font-size:12px;color:${B.textMd};` });
    appVal.textContent = ex.aplicacao;
    appRow.appendChild(appLbl);
    appRow.appendChild(appVal);
    codeCard.appendChild(appRow);
  }

  // Code segments
  if (segments.length > 0) {
    const segsWrap = el('div', { style: 'display:flex;flex-wrap:wrap;gap:6px;' });
    segments.forEach(seg => {
      const chip = el('div', { style: `display:inline-flex;flex-direction:column;padding:5px 10px;border-radius:6px;background:${seg.missing ? '#FEF2F2' : seg.fixed ? B.bg : seg.optional ? fColor + '0D' : B.bg};border:1px solid ${seg.missing ? '#FECACA' : B.border};` });
      chip.innerHTML = `
        <span style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;color:${seg.missing ? '#C83030' : seg.optional ? fColor : B.text};">${seg.val}</span>
        <span style="font-size:10px;color:${B.textLt};margin-top:1px;">${seg.label}</span>`;
      segsWrap.appendChild(chip);
    });
    codeCard.appendChild(segsWrap);
  }

  if (valid && !code.includes('?') && typeof currentFamily?.getDescription === 'function') {
    const desc = currentFamily.getDescription(paramValues);
    if (desc) {
      const descEl = el('div', {
        style: `margin-top:12px;font-size:10px;font-weight:500;color:${B.textMd};letter-spacing:0.3px;line-height:1.5;padding:7px 12px;background:${B.blueLt};border-left:3px solid ${fColor};border-radius:0 7px 7px 0;`
      });
      descEl.textContent = desc;
      codeCard.appendChild(descEl);
    }
  }

  wrap.appendChild(codeCard);

  // ── Imagem do medidor (quando disponível) ──
  const summaryImgKey = resolveImageKey(currentFamilyKey, paramValues);
  const summaryImgURI = (typeof EMBEDDED_IMAGES !== 'undefined' && summaryImgKey) ? (EMBEDDED_IMAGES[summaryImgKey] || '') : '';
  if (summaryImgURI) {
    const imgCard = el('div', { style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;padding:16px;margin-bottom:20px;text-align:center;` });
    const img = el('img', { src: summaryImgURI, style: 'max-height:180px;max-width:100%;object-fit:contain;border-radius:8px;' });
    imgCard.appendChild(img);
    wrap.appendChild(imgCard);
  }

  // ── Two-column grid ──
  const grid = el('div', { class: 'summary-grid', style: 'display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;' });

  // Helper: renders a summary card with rows
  function summaryCard(title, icon, rows) {
    const card = el('div', { style: `background:${B.white};border:1px solid ${B.border};border-radius:12px;padding:20px 22px;` });
    const cardHdr = el('div', { style: `display:flex;align-items:center;gap:8px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid ${B.border};` });
    cardHdr.innerHTML = `
      <span style="font-size:18px;">${icon}</span>
      <span style="font-size:14px;font-weight:700;color:${B.text};">${title}</span>`;
    card.appendChild(cardHdr);
    rows.forEach(({ label, value, missing }) => {
      if (!value && !missing) return;
      const row = el('div', { class: 'summary-card-row', style: 'display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:5px 0;border-bottom:1px solid ' + B.bg + ';' });
      const labelSpan = document.createElement('span');
      labelSpan.style.cssText = `font-size:12px;color:${B.textLt};flex-shrink:0;`;
      labelSpan.textContent = label;
      const valSpan = document.createElement('span');
      valSpan.className = 'summary-card-value';
      valSpan.style.cssText = `font-size:13px;font-weight:500;color:${missing ? '#C83030' : B.text};text-align:right;`;
      valSpan.textContent = value || '—';
      row.appendChild(labelSpan);
      row.appendChild(valSpan);
      card.appendChild(row);
    });
    return card;
  }

  // ── Left card: Configuração do Medidor ──
  const meterRows = [];
  // Family
  meterRows.push({ label: 'Família', value: currentFamily?.name || currentFamilyKey });

  // All parameters (including fixed)
  (currentFamily?.parameters || []).forEach(p => {
    const val = paramValues[p.id];
    if (!val && !p.required) return;
    const opts = typeof p.getDynamicOptions === 'function' ? p.getDynamicOptions(paramValues) : (p.options || []);
    const opt  = opts.find(o => o.code === val);
    // Conexão especial YYY: mostra "Especial / (texto digitado)"
    const displayVal = (p.id === 'process_conn' && val === 'YYY')
      ? `Especial / ${paramValues.process_conn_custom || 'Sob Consulta'}`
      : (opt ? opt.label : (val || null));
    meterRows.push({
      label:   p.label,
      value:   displayVal,
      missing: p.required && !val,
    });
    // Linha extra: classe de pressão do corpo quando conexão especial
    if (p.id === 'process_conn' && val === 'YYY') {
      meterRows.push({
        label: 'Classe de Pressão do Corpo',
        value: paramValues.process_conn_body_class || null,
        missing: !paramValues.process_conn_body_class,
      });
    }
  });

  // TYL-specific auto fields
  if (currentFamilyKey === 'TYL') {
    meterRows.push({ label: 'Cor', value: 'Alumínio Anodizado' });
    meterRows.push({ label: 'Precisão', value: 'CE 1%' });
    const distFace = currentFamily.getDistFace?.(paramValues);
    if (distFace) meterRows.push({ label: 'Distância Face a Face', value: distFace + ' mm' });
  }

  // Optionals — each as its own labeled row
  (currentFamily?.optionals || []).forEach(o => {
    const oCode = optionalValues[o.id];
    if (!oCode) return;
    const opt = o.options.find(x => x.code === oCode);
    meterRows.push({ label: o.label, value: opt ? opt.label : oCode });
  });

  grid.appendChild(summaryCard('Configuração do Medidor', meta.icon, meterRows));

  wrap.appendChild(grid);

  // ── Actions bar (with dropdowns) ──
  const actBar = el('div', { class: 'actions-bar' });

  const backBtn = el('button', { class: 'btn btn-secondary' });
  backBtn.innerHTML = `${ICONS.back} Voltar`;
  backBtn.addEventListener('click', () => {
    if (currentFamily?.skipConditions) {
      const lastStep = getWizardSteps().length - 1;
      navigate('configure', Math.max(0, lastStep));
    } else {
      navigate('conditions');
    }
  });

  // ── Dropdown: Salvar ──
  const saveDD = el('div', { class: 'action-dropdown' });
  const saveTog = el('button', { class: 'btn btn-save dropdown-toggle', type: 'button' });
  saveTog.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 2h8l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 2v4h5V2M5 9h6M5 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg> Salvar <svg class="chevron-down" width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const saveMenu = el('div', { class: 'dropdown-menu' });
  const saveSpecItem = el('button', { class: 'dropdown-item' });
  saveSpecItem.innerHTML = ICONS.saveSpec + ' Salvar Especificação';
  saveSpecItem.addEventListener('click', showSaveSpecForm);
  const tmplItem = el('button', { class: 'dropdown-item' });
  tmplItem.innerHTML = ICONS.template + ' Salvar como Modelo';
  tmplItem.addEventListener('click', showSaveTemplateForm);
  if (!currentFamily?.skipConditions) saveMenu.appendChild(saveSpecItem);
  saveMenu.appendChild(tmplItem);
  saveDD.appendChild(saveTog);
  saveDD.appendChild(saveMenu);

  // ── Dropdown: Exportar ──
  const expDD = el('div', { class: 'action-dropdown' });
  const expTog = el('button', { class: 'btn btn-sheet dropdown-toggle', type: 'button' });
  expTog.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 1v4h4M5 7h6M5 10h6M5 13h3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg> Exportar <svg class="chevron-down" width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const expMenu = el('div', { class: 'dropdown-menu' });
  const sheetItem = el('button', { class: 'dropdown-item' });
  sheetItem.innerHTML = ICONS.sheet + ' Gerar Folha de Resumo';
  sheetItem.addEventListener('click', generateSummarySheet);
  expMenu.appendChild(sheetItem);
  if (!currentFamily?.noExcel) {
    const excelItem = el('button', { class: 'dropdown-item' });
    excelItem.innerHTML = ICONS.excel + ' Gerar Excel (Folha de Dados)';
    if (!valid || code.includes('?')) excelItem.disabled = true;
    excelItem.addEventListener('click', generateExcel);
    expMenu.appendChild(excelItem);
  }
  if (!currentFamily?.noPdf) {
    const pdfItem = el('button', { class: 'dropdown-item' });
    pdfItem.innerHTML = ICONS.pdf + ' Folha de Dados (PDF)';
    if (!valid || code.includes('?')) pdfItem.disabled = true;
    pdfItem.addEventListener('click', generatePDF);
    expMenu.appendChild(pdfItem);
  }
  expDD.appendChild(expTog);
  expDD.appendChild(expMenu);

  // ── Dropdown toggle logic ──
  [saveTog, expTog].forEach(tog => {
    tog.addEventListener('click', (e) => {
      e.stopPropagation();
      const dd = tog.closest('.action-dropdown');
      const wasOpen = dd.classList.contains('open');
      actBar.querySelectorAll('.action-dropdown.open').forEach(d => d.classList.remove('open'));
      if (!wasOpen) dd.classList.add('open');
    });
  });
  [saveMenu, expMenu].forEach(menu => {
    menu.addEventListener('click', () => {
      setTimeout(() => menu.closest('.action-dropdown')?.classList.remove('open'), 50);
    });
  });

  const resetBtn = el('button', { class: 'btn btn-ghost' });
  resetBtn.textContent = 'Limpar';
  resetBtn.addEventListener('click', () => document.getElementById('btn-reset')?.click());

  actBar.appendChild(backBtn);
  actBar.appendChild(saveDD);
  actBar.appendChild(expDD);
  actBar.appendChild(resetBtn);
  wrap.appendChild(actBar);

  wrap.appendChild(el('div', { id: 'save-spec-area-summary' }));

  return wrap;
}

// ═══════════════════════════════════════════════════════════════
// SUMMARY SHEET — Folha de Especificação para impressão
// ═══════════════════════════════════════════════════════════════
// Mapa de imagens dos medidores por família → chave em EMBEDDED_IMAGES (templates/images_b64.js)
const FAMILY_IMAGE_KEY = {
  TEF:  'TEF',
  TCF:  'TCF',
  TYL:  'TYL',
  TBQM: 'TBQM',
  // TEC:  'TEC',
  TUS:  'TUS',
};

// Resolve a chave de imagem para a família, suportando seleção dinâmica (ex: 0DM mecânico vs smart)
function resolveImageKey(familyKey, pv = {}) {
  if (familyKey === 'ODM') {
    const isDLA   = pv?.display === 'D' || pv?.display === 'E' || pv?.display === 'F';
    const isSmart = pv?.tipo === 'S';
    if (isDLA)   return 'ODM_DLA';
    if (isSmart) return 'ODM_SMART';
    return 'ODM_MEC';
  }
  if (familyKey === 'TBQM') {
    return (pv?.cor === '2' || pv?.cor === '3') ? 'TBQM' : 'TBQM_AMARELO';
  }
  return FAMILY_IMAGE_KEY[familyKey] || '';
}

// ══════════════════════════════════════════════════════════════
// PDF — helpers de coleta de dados
// ══════════════════════════════════════════════════════════════
function hexRGB(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.substring(0,2),16), parseInt(h.substring(2,4),16), parseInt(h.substring(4,6),16)];
}

// Substitui caracteres Unicode que o jsPDF/Helvetica não renderiza corretamente
function pdfSanitize(str) {
  if (typeof str !== 'string') return String(str ?? '');
  return str
    .replace(/→/g, '->')
    .replace(/←/g, '<-')
    .replace(/↔/g, '<->')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/~/g, '-')
    .replace(/–/g, '-')
    .replace(/—/g, '-')
    .replace(/…/g, '...')
    .replace(/[^\x00-\xFF]/g, '?');
}

// Remove acentos e caracteres não-ASCII para uso em badges e elementos de medição de texto no jsPDF
// (getTextWidth falha silenciosamente com caracteres acentuados em maiúsculas no Helvetica embutido)
function pdfStripAccents(str) {
  if (typeof str !== 'string') return '';
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove diacríticos
    .replace(/[^\x00-\x7F]/g, '');   // remove qualquer não-ASCII restante
}

function collectParamRows(fam, famKey) {
  const rows = [];
  (fam.parameters || []).forEach(p => {
    const val = paramValues[p.id];
    if (!val) return;
    // Skip output2 when NULL (TEF code '0') or Nenhuma (TCF code '1')
    if (p.id === 'output2' && (val === '0' || val === '1')) return;
    // Skip io3 when Nenhuma (code '1')
    if (p.id === 'io3' && val === '1') return;
    const opts = typeof p.getDynamicOptions === 'function' ? p.getDynamicOptions(paramValues) : (p.options || []);
    const opt = opts.find(o => o.code === val);
    const desc = (p.id === 'process_conn' && val === 'YYY' && paramValues.process_conn_custom)
      ? paramValues.process_conn_custom
      : (opt ? opt.label : val);
    rows.push({ label: p.label, code: val, desc });
  });
  if (famKey === 'TYL') {
    rows.push({ label: 'Cor', code: '0', desc: 'Alumínio Anodizado' });
    rows.push({ label: 'Precisão', code: '1', desc: 'CE 1%' });
    const df = fam.getDistFace?.(paramValues);
    if (df) rows.push({ label: 'Dist. Face a Face', code: df+'mm', desc: df + ' mm' });
  }
  if (famKey === 'TBQM') {
    const df = fam.getDistFace?.(paramValues);
    if (df) rows.push({ label: 'Dist. Face a Face', code: df+'mm', desc: df + ' mm' });
  }
  return rows;
}

function collectOptRows(fam) {
  const rows = [];
  (fam.optionals || []).forEach(o => {
    const oCode = optionalValues[o.id];
    if (!oCode) return;
    const opt = o.options.find(x => x.code === oCode);
    rows.push({ label: o.label, code: oCode, desc: opt ? opt.label : oCode });
  });
  return rows;
}

function collectHighlights(famKey, paramRows) {
  const find = (regex) => (paramRows.find(r => r.label.match(regex)) || {}).desc || '—';
  const hl = [];
  if (famKey === 'TEF') {
    hl.push({ label: 'Diâmetro Nominal', val: find(/[Dd]iâmetro|DN/) });
    hl.push({ label: 'Exatidão', val: find(/[Ee]xatidão|[Pp]recisão/), sub: 'da leitura' });
    hl.push({ label: 'Alimentação', val: find(/[Aa]limentação/) });
    hl.push({ label: 'Proteção', val: 'IP66 / IP67', sub: 'padrão' });
  } else if (famKey === 'TCF') {
    hl.push({ label: 'Diâmetro Nominal', val: find(/[Dd]iâmetro|DN/) });
    hl.push({ label: 'Exatidão', val: find(/[Ee]xatidão|[Pp]recisão/) });
    hl.push({ label: 'Alimentação', val: find(/[Aa]limentação/) });
    hl.push({ label: 'Proteção', val: 'IP66 / IP67', sub: 'padrão' });
  } else if (famKey === 'TYL') {
    hl.push({ label: 'Designação', val: find(/[Dd]esignação/) });
    hl.push({ label: 'Conexão', val: find(/[Cc]onexão/) });
    hl.push({ label: 'Range', val: find(/[Rr]ange/) });
    hl.push({ label: 'Classe Pressão', val: 'ANSI#150', sub: 'Pmax 20 bar' });
  } else if (famKey === 'TBQM') {
    hl.push({ label: 'Designação', val: find(/[Dd]esignação/) });
    hl.push({ label: 'Conexão', val: find(/[Cc]onexão/) });
    hl.push({ label: 'Material', val: find(/[Mm]aterial/) });
    hl.push({ label: 'Classe Pressão', val: find(/[Cc]lasse/) });
  }
  return hl;
}

function collectConditions(ex) {
  const items = [];
  if (ex.cliente)        items.push({ l: 'Cliente',               v: ex.cliente });
  if (ex.num_doc)        items.push({ l: 'N° Documento',          v: ex.num_doc });
  if (ex.fluido)         items.push({ l: 'Fluido',                v: ex.fluido });
  if (ex.estado)         items.push({ l: 'Estado',                v: ex.estado });
  if (ex.temp)           items.push({ l: 'Temp. Operação',        v: ex.temp + ' °C' });
  if (ex.temp_proj)      items.push({ l: 'Temp. Projeto',         v: ex.temp_proj + ' °C' });
  if (ex.qop)            items.push({ l: 'Vazão Operação',        v: ex.qop + ' ' + ex.qunit });
  if (ex.qmin)           items.push({ l: 'Qmín',                  v: ex.qmin + ' ' + ex.qunit });
  if (ex.qnorm)          items.push({ l: 'Qnormal',               v: ex.qnorm + ' ' + ex.qunit });
  if (ex.qmax)           items.push({ l: 'Qmáx',                  v: ex.qmax + ' ' + ex.qunit });
  if (ex.pressao_op_val) items.push({ l: 'Pressão Operação',      v: ex.pressao_op_val + ' ' + ex.pressao_op_unit });
  if (ex.pmin_raw)       items.push({ l: 'Pressão Mín.',          v: ex.pmin_raw + ' ' + ex.p_unit });
  if (ex.pnorm_raw)      items.push({ l: 'Pressão Normal',        v: ex.pnorm_raw + ' ' + ex.p_unit });
  if (ex.pmax_raw)       items.push({ l: 'Pressão Máx.',          v: ex.pmax_raw + ' ' + ex.p_unit });
  if (ex.pressao_proj)   items.push({ l: 'Pressão Projeto',       v: ex.pressao_proj + ' bar' });
  if (ex.viscosidade)    items.push({ l: 'Viscosidade',            v: ex.viscosidade + ' ' + (ex.viscosidade_unit || 'Cp') });
  if (ex.densidade)      items.push({ l: 'Densidade',             v: ex.densidade + ' ' + (ex.densidade_unit || 'kg/m³') });
  if (ex.dens_relativa)  items.push({ l: 'Dens. Relativa',        v: ex.dens_relativa });
  if (ex.compress)       items.push({ l: 'F. Compressibilidade',  v: ex.compress });
  if (ex.peso_mol)       items.push({ l: 'Peso Molecular',        v: ex.peso_mol });
  if (ex.sentido_fluxo)  items.push({ l: 'Sentido do Fluxo',      v: ex.sentido_fluxo });
  if (ex.distancia_face) items.push({ l: 'Dist. Face a Face',     v: ex.distancia_face + ' mm' });
  return items;
}

const FAM_DISPLAY = {
  TEF:  { title: 'Medidor Eletromagnético TEF', badge: 'Medidor Eletromagnético', desc: 'Medidor de Vazão Eletromagnético' },
  TCF:  { title: 'Medidor Coriolis TCF', badge: 'Medidor Coriolis', desc: 'Medidor de Vazão Coriolis' },
  TYL:  { title: 'Medidor Rotativo TYL', badge: 'Medidor Rotativo de Gás', desc: 'Medidor Rotativo de Gás' },
  TBQM: { title: 'Medidor Turbina TBQM', badge: 'Medidor Turbina', desc: 'Medidor de Vazão Turbina' },
  TUS:  { title: 'Medidor Ultrassônico TUS', badge: 'Medidor Ultrassônico', desc: 'Medidor Ultrassônico de Gás' },
  ODM: { title: 'Medidor Diafragma 0DM', badge: 'Medidor Diafragma', desc: 'Medidor de Gás por Diafragma' },
  TEC: { title: 'Corretor de Volume TEC-III', badge: 'Corretor de Volume', desc: 'Corretor de Volume TEC-III' },
};

// ══════════════════════════════════════════════════════════════
// PDF — helpers de desenho (cada um recebe ctx { doc, y, ... })
// ══════════════════════════════════════════════════════════════
function pdfDrawHeader(ctx) {
  const { doc, W, ML, MR, hdrH, fR, fG, fB, famDisplay, clienteTitle, logoDataURI,
          headerLabel, headerY, ex } = ctx;
  // headerLabel  — texto da linha pequena no topo do gradiente (padrão: 'RESUMO DO MEDIDOR SELECIONADO')
  // headerY      — y de início do bloco (padrão: 0, útil para reusar em outras páginas)
  const baseY = headerY || 0;

  const gStops = [[11,45,82],[16,61,110],[22,82,143],[26,96,152]];
  const gPos   = [0, 0.35, 0.70, 1.0];
  const N = 210;
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    let s = 1;
    while (s < gPos.length - 1 && t > gPos[s]) s++;
    const lt = (t - gPos[s-1]) / (gPos[s] - gPos[s-1]);
    const c0 = gStops[s-1], c1 = gStops[s];
    doc.setFillColor(
      Math.round(c0[0] + (c1[0]-c0[0]) * lt),
      Math.round(c0[1] + (c1[1]-c0[1]) * lt),
      Math.round(c0[2] + (c1[2]-c0[2]) * lt)
    );
    doc.rect(i * (W / N), baseY, W / N + 1.5, hdrH, 'F');
  }
  doc.setFillColor(fR, fG, fB);
  doc.rect(0, baseY + hdrH, W, 1, 'F');

  doc.setFont('TreviaGroteska', 'bold');
  doc.setFontSize(6);
  doc.setTextColor(180, 200, 220);
  doc.text(pdfStripAccents(headerLabel || 'RESUMO DO MEDIDOR SELECIONADO'), ML, baseY + 9);

  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text((famDisplay.title + clienteTitle).substring(0, 55), ML, baseY + 19);

  doc.setFont('TreviaGroteska', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(180, 205, 230);
  const _subCliente = ex?.cliente || '';
  const _subAplic   = ex?.aplicacao || '';
  const _subText = _subCliente && _subAplic
    ? _subCliente + '  ·  ' + _subAplic
    : (_subCliente || _subAplic || 'Aépio Medidores de Gás e Água');
  doc.text(pdfSanitize(_subText).substring(0, 80), ML, baseY + 25);

  if (logoDataURI) {
    try {
      const lp = doc.getImageProperties(logoDataURI);
      const logoH = 12;
      const logoW = Math.min((lp.width / lp.height) * logoH, 40);
      doc.addImage(logoDataURI, W - MR - logoW, baseY + 9, logoW, logoH);
    } catch(e) {
      pdfDrawFallbackLogo(doc, W, MR, baseY);
    }
  } else {
    pdfDrawFallbackLogo(doc, W, MR, baseY);
  }

  return baseY + hdrH + 3;
}

function pdfDrawFallbackLogo(doc, W, MR, baseY = 0) {
  doc.setFont('TreviaGroteska', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text('Aepio', W - MR, baseY + 19, { align: 'right' });
}

function pdfDrawHero(ctx, y) {
  const { doc, W, imgDataURI, meta, famDisplay } = ctx;
  const heroH = 82;
  doc.setFillColor(244, 248, 253);
  doc.rect(0, y, W, heroH, 'F');

  const frameW = 90, frameH = 74;
  const frameX = W / 2 - frameW / 2, frameY = y + 4;
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(208, 223, 240);
  doc.roundedRect(frameX, frameY, frameW, frameH, 3, 3, 'FD');

  if (imgDataURI) {
    try {

      const ip = doc.getImageProperties(imgDataURI);
      const maxW = frameW - 10;
      const maxH = frameH - 10;
      // calcula scale mantendo proporção
      const scaleW = maxW / ip.width;
      const scaleH = maxH / ip.height;
      const imgScale = Math.min(scaleW, scaleH);   // ← era "availW / totalW", variáveis inexistentes
      const iw = ip.width  * imgScale;
      const ih = ip.height * imgScale;
      doc.addImage(
        imgDataURI,
        frameX + (frameW - iw) / 2,
        frameY + (frameH - ih) / 2,
        iw, ih
      );


    } catch(e) {}
  } else {
    // Fallback sem ícone Unicode (jsPDF/Helvetica não suporta) — usa linhas decorativas
    doc.setDrawColor(210, 220, 232);
    doc.setLineWidth(0.5);
    const cx = W / 2, cy = frameY + frameH / 2;
    for (let d = -16; d <= 16; d += 8) {
      doc.line(cx - 12, cy + d, cx + 12, cy + d);
    }
  }

  // Badge — pdfStripAccents garante que getTextWidth e text() funcionem corretamente com Helvetica
  doc.setFont('TreviaGroteska', 'bold');
  doc.setFontSize(6.5);
  const badgeText = pdfStripAccents(famDisplay.badge).toUpperCase();
  const badgeW = doc.getTextWidth(badgeText) + 10;
  const badgeH = 6;
  const badgeY = frameY + frameH - badgeH / 2;
  doc.setFillColor(14, 63, 106);
  doc.roundedRect(W / 2 - badgeW / 2, badgeY, badgeW, badgeH, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.text(badgeText, W / 2, badgeY + badgeH * 0.7, { align: 'center' });

  return y + heroH + 2;
}

function pdfDrawOrderCode(ctx, y) {
  const { doc, W, fR, fG, fB, code, segments, famDisplay } = ctx;
  doc.setDrawColor(234, 241, 248);
  doc.line(0, y, W, y);
  y += 1.5;

  doc.setFont('TreviaGroteska', 'bold');
  doc.setFontSize(5.5);
  doc.setTextColor(138, 160, 180);
  doc.text('ORDER CODE', W / 2, y + 3.5, { align: 'center' });

  doc.setFontSize(12);
  doc.setTextColor(26, 35, 50);
  doc.text(code || '—', W / 2, y + 9, { align: 'center' });

  // Code chips
  doc.setFont('courier', 'bold');
  doc.setFontSize(7);
  const chipPad = 2.2, chipGap = 0.8;
  let totalChipW = 0;
  const chipWidths = segments.map(seg => {
    const tw = doc.getTextWidth(seg.val) + chipPad * 2;
    totalChipW += tw;
    return tw;
  });
  totalChipW += (segments.length - 1) * chipGap;

  const stripH = 5.5, stripY = y + 12;
  doc.setFillColor(26, 35, 50);
  doc.roundedRect(W / 2 - totalChipW / 2 - 2.5, stripY - 0.5, totalChipW + 5, stripH + 1, 1.8, 1.8, 'F');

  let chipX = W / 2 - totalChipW / 2;
  segments.forEach((seg, i) => {
    const cw = chipWidths[i];
    if (i === 0) doc.setFillColor(fR, fG, fB);
    else if (seg.fixed) doc.setFillColor(30, 51, 80);
    else if (seg.optional) doc.setFillColor(26, 64, 48);
    else doc.setFillColor(46, 64, 96);
    doc.roundedRect(chipX, stripY, cw, stripH, 0.8, 0.8, 'F');

    if (i === 0) doc.setTextColor(255, 255, 255);
    else if (seg.fixed) doc.setTextColor(122, 148, 176);
    else if (seg.optional) doc.setTextColor(128, 200, 160);
    else doc.setTextColor(176, 196, 216);
    doc.text(seg.val, chipX + chipPad, stripY + stripH - 1.3);
    chipX += cw + chipGap;
  });

  y = stripY + stripH + 1.5;
  doc.setFont('TreviaGroteska', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(106, 130, 160);
  doc.text(famDisplay.desc, W / 2, y + 2.5, { align: 'center' });
  return y + 5;
}

function pdfDrawHighlights(ctx, y) {
  const { doc, ML, MR, CW, fR, fG, fB, hlItems } = ctx;
  doc.setDrawColor(234, 241, 248);
  doc.line(ML, y, ctx.W - MR, y);
  y += 2.5;

  if (hlItems.length === 0) return y;

  const hlGap = 2;
  const hlW = (CW - (hlItems.length - 1) * hlGap) / hlItems.length;
  hlItems.forEach((h, i) => {
    const x = ML + i * (hlW + hlGap);
    doc.setFillColor(244, 248, 253);
    doc.setDrawColor(216, 230, 244);
    doc.roundedRect(x, y, hlW, 12, 1.2, 1.2, 'FD');

    doc.setFont('TreviaGroteska', 'bold');
    doc.setFontSize(4.8);
    doc.setTextColor(138, 160, 180);
    doc.text(pdfSanitize(h.label).toUpperCase(), x + 2.5, y + 4);

    doc.setFontSize(8);
    doc.setTextColor(fR, fG, fB);
    doc.text(pdfSanitize(String(h.val)).substring(0, 22), x + 2.5, y + 9);

    if (h.sub) {
      doc.setFont('TreviaGroteska', 'normal');
      doc.setFontSize(4.8);
      doc.setTextColor(106, 130, 160);
      doc.text(pdfSanitize(h.sub), x + 2.5, y + 11.2);
    }
  });
  return y + 15;
}

function pdfSectionLabel(doc, text, y, ML, W, MR) {
  doc.setFont('TreviaGroteska', 'bold');
  doc.setFontSize(5.5);
  doc.setTextColor(138, 160, 180);
  doc.text(text.toUpperCase(), ML, y + 3.5);
  doc.setDrawColor(234, 241, 248);
  doc.setLineWidth(0.25);
  doc.line(ML, y + 4.8, W - MR, y + 4.8);
  return y + 7;
}

function pdfDrawSpecsGrid(doc, items, showCode, y, ML, CW, fR, fG, fB) {
  const colW = CW / 2;
  const rowH = 8;
  items.forEach((item, i) => {
    const col = i % 2;
    const x = ML + col * colW;

    doc.setFont('TreviaGroteska', 'normal');
    doc.setFontSize(5.5);
    doc.setTextColor(106, 130, 160);
    doc.text(pdfSanitize(item.label || item.l || ''), x + 1, y + 3);

    if (showCode && item.code) {
      doc.setFont('courier', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(fR, fG, fB);
      const cText = pdfSanitize(item.code);
      doc.text(cText, x + 1, y + 6.5);
      const cW = doc.getTextWidth(cText);
      doc.setFont('TreviaGroteska', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(26, 35, 50);
      doc.text(' ' + pdfSanitize(item.desc || ''), x + 1 + cW, y + 6.5);
    } else {
      doc.setFont('TreviaGroteska', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(26, 35, 50);
      doc.text(pdfSanitize(String(item.desc || item.v || '')).substring(0, 44), x + 1, y + 6.5);
    }

    doc.setDrawColor(243, 247, 250);
    doc.setLineWidth(0.12);
    doc.line(x + 1, y + rowH - 0.5, x + colW - 3, y + rowH - 0.5);

    if (col === 1) y += rowH;
  });
  if (items.length % 2 !== 0) y += rowH;
  return y;
}

function pdfDrawNotes(ctx, y) {
  const { doc, ML, CW, fR, fG, fB, ex } = ctx;
  if (!ex.notas) return y;

  y += 1.5;
  const noteLines = doc.splitTextToSize(pdfSanitize(ex.notas), CW - 8);
  const noteH = noteLines.length * 3.5 + 4;
  doc.setFillColor(240, 246, 255);
  doc.rect(ML, y, CW, noteH, 'F');
  doc.setDrawColor(fR, fG, fB);
  doc.setLineWidth(0.7);
  doc.line(ML, y, ML, y + noteH);
  doc.setLineWidth(0.15);
  doc.setFont('TreviaGroteska', 'normal');
  doc.setFontSize(6);
  doc.setTextColor(42, 64, 96);
  doc.text(noteLines, ML + 4, y + 4.5);
  return y + noteH + 1.5;
}

function pdfDrawFooter(doc, date, ML, MR, W, H) {
  doc.setDrawColor(232, 239, 245);
  doc.setLineWidth(0.25);
  doc.line(ML, H - 10, W - MR, H - 10);

  doc.setFont('courier', 'normal');
  doc.setFontSize(5.5);
  doc.setTextColor(192, 206, 220);
  doc.text(date, W - MR, H - 6, { align: 'right' });
}

// ══════════════════════════════════════════════════════════════
// PDF — orquestrador principal
// ══════════════════════════════════════════════════════════════
function generateSummarySheet() {
  const fam = currentFamily;
  if (!fam) return;
  showToast('Gerando PDF…');

  const { code, segments } = buildCode();
  // Cor fixa da Aépio — azul corporativo independente da família
  const [fR, fG, fB] = [26, 109, 203]; // #1A6DCB
  const meta = FAMILY_META[currentFamilyKey] || { icon: '●', color: '#1A6DCB' };
  const ex = getExtras();
  const date = new Date().toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' });

  const imgKey = resolveImageKey(currentFamilyKey, paramValues);
  const imgDataURI  = (typeof EMBEDDED_IMAGES !== 'undefined' && imgKey) ? (EMBEDDED_IMAGES[imgKey] || '') : '';
  const logoDataURI = (typeof EMBEDDED_IMAGES !== 'undefined') ? (EMBEDDED_IMAGES.LOGO || '') : '';

  const paramRows = collectParamRows(fam, currentFamilyKey);
  const optRows   = collectOptRows(fam);
  const hlItems   = collectHighlights(currentFamilyKey, paramRows);
  const condItems = collectConditions(ex);
  const famDisplay = FAM_DISPLAY[currentFamilyKey] || { title: fam.name, badge: fam.name, desc: fam.name };
  const clienteTitle = ex.cliente ? ' — ' + ex.cliente : '';

  const _jsPDF = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
  if (!_jsPDF) {
    showToast('Biblioteca jsPDF não carregada. Verifique conexão com internet.', false);
    return;
  }

  try {
  const doc = new _jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  if (typeof registerTreviaFont === 'function') registerTreviaFont(doc);
  const W = 210, H = 297, ML = 14, MR = 14, CW = W - ML - MR;
  const hdrH = 30;

  const ctx = { doc, W, H, ML, MR, CW, hdrH, fR, fG, fB, code, segments, meta,
                famDisplay, clienteTitle, imgDataURI, logoDataURI, hlItems, ex };

  let y = pdfDrawHeader(ctx);
  y = pdfDrawHero(ctx, y);
  y = pdfDrawOrderCode(ctx, y);
  y = pdfDrawHighlights(ctx, y);

  // Especificações
  y = pdfSectionLabel(doc, 'Especificações Selecionadas', y, ML, W, MR);
  y = pdfDrawSpecsGrid(doc, paramRows, true, y, ML, CW, fR, fG, fB);

  // Opcionais
  if (optRows.length > 0) {
    y += 1;
    y = pdfSectionLabel(doc, 'Opções Adicionais', y, ML, W, MR);
    doc.setFont('courier', 'bold');
    doc.setFontSize(6);
    doc.setTextColor(74, 94, 116);
    optRows.forEach(r => {
      doc.text(pdfSanitize(r.code + ' - ' + r.desc), ML + 1, y + 3);
      y += 5.5;
    });
  }

  y = pdfDrawNotes(ctx, y);
  pdfDrawFooter(doc, date, ML, MR, W, H);

  const fileName = ('Resumo_' + currentFamilyKey + '_' + (code || 'config') + '.pdf').replace(/[^a-zA-Z0-9_\-\.]/g, '_');
  doc.save(fileName);
  showToast('PDF salvo com sucesso!');

  } catch (e) {
    showToast('Erro ao gerar PDF: ' + e.message, false);
  }
}

// ══════════════════════════════════════════════════════════════
// PDF — Resumo Consolidado do Pedido
// ══════════════════════════════════════════════════════════════

// Mapeia processConditions (objeto salvo no item) → formato ex usado pelos helpers de PDF
function extrasFromConditions(cond) {
  if (!cond) cond = {};
  const pUnit       = cond.p_unit       || 'bar';
  const pressaoUnit = cond.pressao_unit || 'bar';
  const pminRaw     = (cond.pmin  || '').trim();
  const pnormRaw    = (cond.pnorm || '').trim();
  const pmaxRaw     = (cond.pmax  || '').trim();
  const pressaoVal  = cond.pressao || '';
  return {
    fluido:           cond.fluido          || '',
    estado:           cond.estado          || '',
    temp:             cond.temp            || '',
    distancia_face:   cond.face            || '',
    sentido_fluxo:    cond.sentido         || '',
    range_med:        '',
    qop:              cond.qop             || '',
    qop_unit:         cond.qunit           || '',
    qmin:             cond.qmin            || '',
    qnorm:            cond.qnorm           || '',
    qmax:             cond.qmax            || '',
    qunit:            cond.qunit           || '',
    pmin_raw:         pminRaw,
    pnorm_raw:        pnormRaw,
    pmax_raw:         pmaxRaw,
    pmin:             pminRaw  && pUnit ? pminRaw  + ' ' + pUnit : pminRaw,
    pnorm:            pnormRaw && pUnit ? pnormRaw + ' ' + pUnit : pnormRaw,
    pmax:             pmaxRaw  && pUnit ? pmaxRaw  + ' ' + pUnit : pmaxRaw,
    p_unit:           pUnit,
    pressao_op_val:   pressaoVal,
    pressao_op:       pressaoVal && pressaoUnit ? pressaoVal + ' ' + pressaoUnit : pressaoVal,
    pressao_op_unit:  pressaoUnit,
    viscosidade:      cond.viscosidade       || '',
    viscosidade_unit: cond.viscosidade_unit  || 'Cp',
    densidade:        cond.densidade         || '',
    densidade_unit:   cond.densidade_unit    || 'kg/m³',
    dens_relativa:    cond.dens_relativa     || '',
    compress:         cond.compress          || '',
    peso_mol:         cond.peso_mol          || '',
    temp_proj:        cond.temp_proj         || '',
    pressao_proj:     cond.pressao_proj      || '',
    cliente:          cond.cliente           || '',
    num_doc:          cond.num_doc           || '',
    notas:            cond.notas             || '',
  };
}

// Versão stateless de collectParamRows (usa pv explícito em vez do global paramValues)
function collectParamRowsFromValues(fam, famKey, pv) {
  const rows = [];
  (fam.parameters || []).forEach(p => {
    const val = pv[p.id];
    if (!val) return;
    if (p.id === 'output2' && (val === '0' || val === '1')) return;
    if (p.id === 'io3' && val === '1') return;
    const opts = typeof p.getDynamicOptions === 'function' ? p.getDynamicOptions(pv) : (p.options || []);
    const opt  = opts.find(o => o.code === val);
    const desc = (p.id === 'process_conn' && val === 'YYY' && pv.process_conn_custom)
      ? pv.process_conn_custom
      : (opt ? opt.label : val);
    rows.push({ label: p.label, code: val, desc });
  });
  if (famKey === 'TYL') {
    rows.push({ label: 'Cor',      code: '0', desc: 'Alumínio Anodizado' });
    rows.push({ label: 'Precisão', code: '1', desc: 'CE 1%' });
    const df = fam.getDistFace?.(pv);
    if (df) rows.push({ label: 'Dist. Face a Face', code: df + 'mm', desc: df + ' mm' });
  }
  if (famKey === 'TBQM') {
    const df = fam.getDistFace?.(pv);
    if (df) rows.push({ label: 'Dist. Face a Face', code: df + 'mm', desc: df + ' mm' });
  }
  return rows;
}

// Versão stateless de collectOptRows (usa ov explícito)
function collectOptRowsFromValues(fam, ov) {
  const rows = [];
  (fam.optionals || []).forEach(o => {
    const oCode = ov[o.id];
    if (!oCode) return;
    const opt = o.options.find(x => x.code === oCode);
    rows.push({ label: o.label, code: oCode, desc: opt ? opt.label : oCode });
  });
  return rows;
}

async function generateOrderSummaryPDF() {
  if (orderItems.length === 0) { showToast('Cotação vazia.', false); return; }
  const _jsPDF = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
  if (!_jsPDF) { showToast('Biblioteca jsPDF não carregada. Verifique conexão.', false); return; }

  showToast('Gerando resumo da cotação…');

  try {
    const doc  = new _jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    if (typeof registerTreviaFont === 'function') registerTreviaFont(doc);
    const W = 210, H = 297, ML = 14, MR = 14, CW = W - ML - MR;
    const hdrH = 30;
    const [fR, fG, fB] = [26, 109, 203];
    const date = new Date().toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' });
    const oh = orderHeader;
    const orderName = getOrdersList().find(o => o.id === _activeOrderId)?.name || 'Cotação';
    const logoDataURI = (typeof EMBEDDED_IMAGES !== 'undefined') ? (EMBEDDED_IMAGES.LOGO || '') : '';

    // ─────────────────────────────────────────────────────────
    // CAPA — usa pdfDrawHeader igual às páginas individuais
    // ─────────────────────────────────────────────────────────
    const coverCtx = {
      doc, W, H, ML, MR, CW, hdrH, fR, fG, fB,
      famDisplay:   { title: orderName, badge: 'RESUMO DA COTAÇÃO', desc: '' },
      clienteTitle: oh.cli ? ' — ' + oh.cli : '',
      logoDataURI,
      headerLabel:  'COTAÇÃO DE INSTRUMENTAÇÃO',
      hlItems: [], ex: {}, meta: {}, imgDataURI: '', segments: [], code: '',
    };
    let y = pdfDrawHeader(coverCtx);
    y += 8;

    // Metadados do pedido
    const coverMeta = [
      ['Cliente',       oh.cli   || '—'],
      ['N° Cotação',    oh.num   || '—'],
      ['Responsável',   oh.resp  || '—'],
      ['Prazo',         oh.prazo ? new Date(oh.prazo + 'T00:00:00').toLocaleDateString('pt-BR') : '—'],
      ['Gerado em',     date],
      ['Instrumentos',  `${orderItems.length} item${orderItems.length !== 1 ? 's' : ''}`],
    ];
    doc.setFontSize(9);
    coverMeta.forEach(([k, v]) => {
      doc.setFont('TreviaGroteska','bold');   doc.setTextColor(74, 94, 116);
      doc.text(pdfSanitize(k + ':'), ML, y);
      doc.setFont('TreviaGroteska','normal'); doc.setTextColor(26, 35, 50);
      doc.text(pdfSanitize(v), ML + 40, y);
      y += 5.5;
    });
    y += 6;

    // Tabela índice
    doc.setFont('TreviaGroteska','bold'); doc.setFontSize(8);
    doc.setFillColor(fR, fG, fB); doc.rect(ML, y, CW, 6.5, 'F');
    doc.setTextColor(255, 255, 255);
    const COL = { n: 9, tag: 28, tipo: 58, codigo: 87 };
    let xi = ML + 2;
    doc.text('#',      xi, y + 4.5); xi += COL.n;
    doc.text('TAG',    xi, y + 4.5); xi += COL.tag;
    doc.text('Tipo',   xi, y + 4.5); xi += COL.tipo;
    doc.text('Código', xi, y + 4.5);
    y += 6.5;

    orderItems.forEach((item, idx) => {
      doc.setFillColor(...(idx % 2 === 0 ? [245, 248, 252] : [255, 255, 255]));
      doc.rect(ML, y, CW, 6, 'F');
      const fd = FAM_DISPLAY[item.familyKey] || { badge: item.familyKey };
      doc.setFont('TreviaGroteska','normal'); doc.setFontSize(7.5); doc.setTextColor(26, 35, 50);
      xi = ML + 2;
      doc.text(String(idx + 1),               xi, y + 4); xi += COL.n;
      doc.text(pdfSanitize(item.tag || '—'),  xi, y + 4); xi += COL.tag;
      doc.text(pdfSanitize(fd.badge),         xi, y + 4); xi += COL.tipo;
      doc.setFont('courier','bold');
      doc.text(pdfSanitize(item.code || '—'), xi, y + 4);
      y += 6;
    });

    // ── Resumo breve por instrumento ──
    y += 8;
    doc.setFont('TreviaGroteska','bold'); doc.setFontSize(9); doc.setTextColor(fR, fG, fB);
    doc.text('Resumo dos Instrumentos', ML, y); y += 6;

    orderItems.forEach((item, idx) => {
      const fam = FAMILIES[item.familyKey];
      if (!fam) return;
      const pv = item.paramValues || {};
      const pc = item.processConditions || {};
      const fd = FAM_DISPLAY[item.familyKey] || { badge: item.familyKey };
      const params = fam.parameters || [];

      // Helper: resolve label legível de um parâmetro
      const resolve = (id) => {
        const p = params.find(x => x.id === id);
        if (!p || !pv[id]) return null;
        const opts = typeof p.getDynamicOptions === 'function' ? p.getDynamicOptions(pv) : (p.options || []);
        const o = opts.find(x => x.code === pv[id]);
        return o ? o.label : pv[id];
      };

      // Coletar specs-chave
      const specs = [];
      const dn = resolve('dn');           if (dn)  specs.push(dn);
      const ver = resolve('transmitter_type') || resolve('versao');
                                           if (ver) specs.push(ver);
      const conn = resolve('process_conn') || resolve('conexao');
                                           if (conn) specs.push(conn);
      const modelo = resolve('modelo');    if (modelo) specs.push(modelo);
      const classe = resolve('classe');    if (classe) specs.push(classe);
      const lining = resolve('lining');    if (lining) specs.push('Revest. ' + lining);
      const pwr = resolve('power_supply'); if (pwr) specs.push(pwr);
      const tipo = resolve('tipo');        if (tipo) specs.push(tipo);
      const desig = resolve('designacao'); if (desig) specs.push(desig);
      const disp = resolve('display');     if (disp) specs.push(disp);
      const entr = resolve('entrada');     if (entr) specs.push('Ent: ' + entr);
      const said = resolve('saida');       if (said) specs.push('Sai: ' + said);
      if (pc.fluido) specs.push('Fluido: ' + pc.fluido);

      const specText = specs.length > 0 ? specs.join('  |  ') : '—';

      // Verificar se precisa de nova página
      if (y + 14 > H - 18) { pdfDrawFooter(doc, date, ML, MR, W, H); doc.addPage(); y = 16; }

      // Fundo alternado
      doc.setFillColor(...(idx % 2 === 0 ? [245, 248, 252] : [255, 255, 255]));
      doc.rect(ML, y - 1, CW, 12, 'F');

      // Número + TAG + Tipo
      doc.setFont('TreviaGroteska','bold'); doc.setFontSize(8); doc.setTextColor(26, 35, 50);
      const itemLabel = `${idx + 1}. ${item.tag || '—'}`;
      doc.text(pdfSanitize(itemLabel), ML + 2, y + 3.5);
      doc.setFont('TreviaGroteska','normal'); doc.setTextColor(74, 94, 116);
      doc.text(pdfSanitize(fd.badge), ML + 2 + doc.getTextWidth(pdfSanitize(itemLabel)) + 4, y + 3.5);

      // Specs resumidas
      doc.setFont('TreviaGroteska','normal'); doc.setFontSize(7); doc.setTextColor(100, 116, 139);
      doc.text(pdfSanitize(specText), ML + 2, y + 8.5);

      y += 12;
    });

    pdfDrawFooter(doc, date, ML, MR, W, H);

    // ─────────────────────────────────────────────────────────
    // UMA PÁGINA POR INSTRUMENTO
    // ─────────────────────────────────────────────────────────
    for (let i = 0; i < orderItems.length; i++) {
      const item = orderItems[i];
      const fam  = FAMILIES[item.familyKey];
      if (!fam) continue;

      doc.addPage();

      const pv  = item.paramValues   || {};
      const ov  = item.optionalValues || {};
      const ex  = extrasFromConditions(item.processConditions);
      const code = item.code || '';

      const meta       = FAMILY_META[item.familyKey]     || { icon: '●', color: '#1A6DCB' };
      const famDisplay = FAM_DISPLAY[item.familyKey]     || { title: fam.name, badge: fam.name, desc: fam.name };
      const imgKey     = resolveImageKey(item.familyKey, pv);
      const imgDataURI = (typeof EMBEDDED_IMAGES !== 'undefined' && imgKey) ? (EMBEDDED_IMAGES[imgKey] || '') : '';

      const paramRows = collectParamRowsFromValues(fam, item.familyKey, pv);
      const optRows   = collectOptRowsFromValues(fam, ov);
      const hlItems   = collectHighlights(item.familyKey, paramRows);
      const condItems = collectConditions(ex);
      // Título no gradiente: família + TAG/cliente
      const tagPart    = item.tag    ? ` — TAG: ${item.tag}`    : '';
      const clientePart = ex.cliente ? ` — ${ex.cliente}`        : '';
      const clienteTitle = (tagPart || clientePart).substring(0, 30);

      // Label pequena no topo do gradiente: posição do instrumento + qtd
      const qtyPart    = item.qty > 1 ? `  ·  Qtd: ${item.qty}` : '';
      const instrLabel = `INSTRUMENTO ${i + 1} DE ${orderItems.length}${qtyPart}`;

      const ctx = { doc, W, H, ML, MR, CW, hdrH, fR, fG, fB, code,
                    segments: [], meta, famDisplay, clienteTitle, imgDataURI, logoDataURI,
                    hlItems, ex, headerLabel: instrLabel };

      let py = pdfDrawHeader(ctx);

      py = pdfDrawHero(ctx, py);
      py = pdfDrawOrderCode(ctx, py);
      py = pdfDrawHighlights(ctx, py);

      py = pdfSectionLabel(doc, 'Especificações Selecionadas', py, ML, W, MR);
      py = pdfDrawSpecsGrid(doc, paramRows, true, py, ML, CW, fR, fG, fB);

      if (optRows.length > 0) {
        py += 1;
        py = pdfSectionLabel(doc, 'Opções Adicionais', py, ML, W, MR);
        doc.setFont('courier','bold'); doc.setFontSize(6); doc.setTextColor(74, 94, 116);
        optRows.forEach(r => { doc.text(pdfSanitize(r.code + ' — ' + r.desc), ML + 1, py + 3); py += 5.5; });
      }

      py = pdfDrawNotes(ctx, py);
      pdfDrawFooter(doc, date, ML, MR, W, H);
    }

    const safeName = orderName.replace(/[^a-zA-Z0-9_\-]/g, '_');
    doc.save(`Resumo_${safeName}_${date.replace(/\//g, '-')}.pdf`);
    showToast(`Resumo gerado — ${orderItems.length} instrumento${orderItems.length !== 1 ? 's' : ''} na cotação`);

  } catch (e) {
    showToast('Erro ao gerar resumo: ' + e.message, false);
  }
}

// ── Toast notification ───────────────────────────────────────
function showToast(message, ok = true) {
  const existing = document.getElementById('__aepio_toast__');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = '__aepio_toast__';
  toast.style.cssText = `
    position:fixed;bottom:24px;right:24px;z-index:9999;
    background:${ok ? B.text : '#C83030'};color:#fff;
    border-radius:8px;padding:11px 18px;font-size:14px;font-weight:500;
    display:flex;align-items:center;gap:8px;
    box-shadow:0 4px 24px rgba(0,0,0,.22);
    animation:aepioSlideUp .2s ease;
    font-family:'Trevia Groteska',sans-serif;`;
  toast.innerHTML = `<span style="flex-shrink:0;">${ok ? ICONS.check : '●'}</span> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'aepioFadeOut .3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ═══════════════════════════════════════════════════════════════
// DOM HELPERS
// ═══════════════════════════════════════════════════════════════
function el(tag, attrs = {}, ...children) {
  const elem = document.createElement(tag);
  const KNOWN = { style: 1, class: 1, id: 1 };
  if (attrs.style) elem.style.cssText = attrs.style;
  if (attrs.class) elem.className = attrs.class;
  if (attrs.id)    elem.id = attrs.id;
  Object.entries(attrs).forEach(([k, v]) => {
    if (!KNOWN[k]) elem.setAttribute(k, v);
  });
  children.forEach(c => {
    if (!c) return;
    if (typeof c === 'string') elem.appendChild(document.createTextNode(c));
    else elem.appendChild(c);
  });
  return elem;
}

function div(className, style) {
  const d = document.createElement('div');
  if (className) d.className = className;
  if (style) d.style.cssText = style;
  return d;
}
