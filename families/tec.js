// TEC — Corretor de Volume TEC-III
// Fonte: configurador-tec.xlsx
// Estrutura: TEC-III-[Pressão]-[Correção]-[IoT]-[Com.Local]-[Corrente]-[Sinal]-[Idioma]
// Campos com valor padrão (em branco) são omitidos do código. Separador: -

// Formata código de pressão para exibição (ex: '0.08/0.5' → '0,08 – 0,5 Mpa')
function tecFormatPressao(code) {
  if (!code) return '';
  if (code.includes('/')) {
    const [lo, hi] = code.split('/');
    return lo.replace('.', ',') + ' – ' + hi.replace('.', ',') + ' Mpa';
  }
  const n = parseFloat(code);
  return (Number.isInteger(n) ? n.toFixed(1) : code).replace('.', ',') + ' Mpa';
}

const TEC = {
  id: 'TEC',
  name: 'TEC-III — Corretor de Volume',
  prefix: 'TEC-III',
  skipConditions: true,

  defaults: {
    pressao:   '0.08/1.0',
    correcao:  '',
    iot:       '',
    com_local: 'R',
    corrente:  'I',
    sinal:     '1',
  },

  buildCode(pv) {
    const parts = ['TEC-III', pv.pressao || '?'];
    if (pv.correcao)  parts.push(pv.correcao);
    if (pv.iot)       parts.push(pv.iot);
    if (pv.com_local) parts.push(pv.com_local);
    if (pv.corrente)  parts.push(pv.corrente);
    if (pv.sinal)     parts.push(pv.sinal);
    return parts.join('-');
  },

  getDescription(pv) {
    const pLabel = tecFormatPressao(pv.pressao);
    const parts  = ['CORRETOR DE VOLUME TEC-III', pLabel];
    const corMap = { A: 'SEM SENSORES', B: 'SENSOR TEMP.', C: 'SENSOR PRESS.' };
    const iotMap = { '2G': 'IoT 2G', '4G': 'IoT 4G LTE', NB: 'IoT NB-IoT' };
    if (pv.correcao  && corMap[pv.correcao]) parts.push(corMap[pv.correcao]);
    if (pv.iot       && iotMap[pv.iot])      parts.push(iotMap[pv.iot]);
    if (pv.com_local === 'R')                parts.push('COM. ÓPTICA');
    if (pv.corrente  === 'I')                parts.push('4-20mA');
    if (pv.sinal     === '1')                parts.push('SINAL LF');
    if (pv.sinal     === '2')                parts.push('SINAL HF');
    return parts.filter(Boolean).join(', ');
  },

  parameters: [
    {
      id: 'pressao',
      label: 'Pressão Máxima de Trabalho',
      required: true,
      options: [
        { code: '0.08/0.5',  label: '0,08 / 0,5 Mpa' },
        { code: '0.08/1.0',  label: '0,08 / 1,0 Mpa' },
        { code: '0.08/2.0',  label: '0,08 / 2,0 Mpa' },
        { code: '0.1/3.5',   label: '0,1 / 3,5 Mpa' },
        { code: '0.1/5.0',   label: '0,1 / 5,0 Mpa' },
        { code: '0.2/7.0',   label: '0,2 / 7,0 Mpa' },
        { code: '0.4/2.0',   label: '0,4 / 2,0 Mpa' },
        { code: '0.4/10',    label: '0,4 / 10 Mpa' },
        { code: '0.5/12',    label: '0,5 / 12 Mpa' },
      ],
    },
    {
      id: 'correcao',
      label: 'Método de Correção',
      required: true,
      options: [
        { code: '',  label: 'Padrão — temp. e pressão por sensores' },
        { code: 'A', label: 'A — Sem sensores (config. fixas)' },
        { code: 'B', label: 'B — Sensor de temp. (pressão por config.)' },
        { code: 'C', label: 'C — Sensor de pressão (temp. por config.)' },
      ],
    },
    {
      id: 'iot',
      label: 'Comunicação Remota (IoT)',
      required: true,
      options: [
        { code: '',   label: 'Sem módulo IoT' },
        { code: '2G', label: '2G' },
        { code: '4G', label: '4G LTE Cat.1' },
        { code: 'NB', label: 'NB-IoT' },
      ],
    },
    {
      id: 'com_local',
      label: 'Com Local',
      required: true,
      options: [
        { code: '',  label: 'Sem sensor IEC' },
        { code: 'R', label: 'R — Sensor IEC' },
      ],
    },
    {
      id: 'corrente',
      label: 'Módulo 4~20',
      required: true,
      options: [
        { code: '',  label: 'Sem módulo' },
        { code: 'I', label: 'I — Com módulo' },
      ],
    },
    {
      id: 'sinal',
      label: 'Modo de Sinal',
      required: true,
      options: [
        { code: '',  label: 'Sem entrada de pulso' },
        { code: '1', label: '1 — LF (Baixa Frequência)' },
        { code: '2', label: '2 — HF (Alta Frequência)' },
      ],
    },
  ],

  optionals: [],

  pdfMappings: {
    tipo: 'Corretor de Volume',
    getGrauProtecao:    () => '',
    getTipoTransmissor: () => '',
    getSinalSaida:      () => '',
    getAlimentacao:     () => '',
    getConexaoEletrica: () => '',
    getMaterialCaixa:   () => '',
    getRevestimento:    () => 'N/A',
    getMaterialFlange:  () => 'N/A',
    getEletrodo:        () => 'N/A',
    getCaixaSensor:     () => '',
    getAtex:            () => '',
    getConexaoProcesso: () => '',
  },

  populateExcel({ ws, set, code, paramValues: pv, ex }) {
    const pLabel  = tecFormatPressao(pv.pressao);
    const iotMap  = { '2G': '2G', '4G': '4G LTE Cat.1', NB: 'NB-IoT' };
    const iotLabel = iotMap[pv.iot] || '';

    const comParts = ['MODBUS RTU (RS485)'];
    if (pv.com_local === 'R') comParts.push('Óptica');
    if (iotLabel)              comParts.push(iotLabel);
    if (pv.corrente === 'I')  comParts.push('4-20mA');
    const cLabel = comParts.join(' + ');

    // ── CABEÇALHO ────────────────────────────────────────────
    set('H1', ex.num_doc ? 'N° ' + ex.num_doc : '');
    set('E2', ex.cliente || '');

    // ── IDENTIFICAÇÃO / APLICAÇÃO (rows 4-5) ─────────────────
    set('E4', 'ELETROCONVERSOR DE VOLUME DE GÁS');
    set('E5', 'CONVERSOR DE VOLUME DE GÁS PARA AS CONDIÇÕES DE BASE');
    set('H5', ex.aplicacao || '');

    // ── INVÓLUCRO (rows 6-10) ────────────────────────────────
    set('F6',  'Alumínio injetado');
    set('F7',  '260 × 185 × 105 mm');
    set('F8',  '≈ 2,7 kg');
    set('F9',  'IP66');
    set('F10', '-25°C a +55°C (MID) / -25°C a +70°C');

    // ── GERAL / ACESSÓRIOS (rows 11-17) ──────────────────────
    set('F11', 'LCD 256×160 monocromático dot matrix');
    set('F12', cLabel);
    set('F13', 'T, PT, PTZ (AGA8-92DC, SGERG-88, AGA8-G1/G2, NX-19)');
    set('F14', 'Sim — IEC 62056-21');
    set('F15', 'Bateria 3,6V Lítio (EVE ER34615) — vida útil > 6 anos / Ext. 5,7V DC ±10%, 1W');
    set('F16', cLabel);
    set('F17', 'Sim — aço inox');

    // ── ENTRADAS E SAÍDAS (rows 18-24) ───────────────────────
    set('F18', '2 entradas LF (reed switch), 0–2 Hz');
    set('F19', '1 saída digital (reed switch)');
    set('F20', '1 entrada HF, 0–5 kHz (com alimentação externa)');
    set('F21', '5,7V DC ±10%, 1W');
    set('F22', pv.corrente === 'I'
      ? 'Sim — 4-20 mA (com alimentação externa)'
      : 'Opcional — 4-20 mA (com alimentação externa)');
    set('F23', iotLabel || 'N/A');
    set('F24', '2 entradas tipo encoder (Elster/Actaris)');

    // ── TRANSDUTOR DE TEMPERATURA (rows 25-33) ───────────────
    set('F25', 'TB147 — Pt1000 / I²C');
    set('F26', 'Conforme certificado de calibração');
    set('F27', '60 mm');
    set('F28', '-30°C a +80°C');
    set('F29', '-30°C a +80°C');
    set('F30', '±0,1°C');
    set('F31', 'I²C');
    set('F32', '1 m (padrão)');
    set('F33', 'Rastreável — acreditada');

    // ── TRANSDUTOR DE PRESSÃO (rows 34-42) ───────────────────
    set('F34', 'TB148 — Piezoresistivo / I²C');
    set('F35', 'Conforme certificado de calibração');
    set('F36', '1/4" NPT — Aço inox 316');
    set('F37', pLabel || 'N/A');
    set('F38', pLabel || 'N/A');
    set('F39', '±0,1% F.E.');
    set('F40', 'I²C');
    set('F41', '1 m (padrão)');
    set('F42', 'Rastreável — acreditada');

    // ── CONDIÇÕES DE OPERAÇÃO (rows 43-46) ───────────────────
    set('F43', ex.fluido || '');
    set('F44', ex.pmax   || '');
    set('F45', ex.temp   || '');
    set('F46', ex.qmax   || '');

    // ── MODELO / REFERÊNCIA (rows 47-48) ─────────────────────
    set('F47', 'TEC-III');
    set('F48', code);
  },
};
