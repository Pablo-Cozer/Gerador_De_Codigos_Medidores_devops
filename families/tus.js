// TUS — Medidor Ultrassônico de Gás
// Fonte: TUS Ultrasonic Gas Meter Manual (Order Instruction)
// Estrutura: TUS-[VIAS]-[POLEGADAS]-[CLASSE]-[FLANGE]-[SCHEDULE]-[MATERIAL]-[IoT]
// Exemplo:   TUS-6-3-CL600-RF-SC40-LC-4G

const TUS_FLOW_RANGE = {
    '3':  { qmin: 7.5,   qmax: 530  },
    '4':  { qmin: 12.0,  qmax: 900  },
    '6':  { qmin: 30.0,  qmax: 2000 },
    '8':  { qmin: 50.0,  qmax: 3400 },
    '10': { qmin: 80.0,  qmax: 5500 },
    '12': { qmin: 100.0, qmax: 7200 },
};

// Face-to-face (L) em mm por calibre — fonte: Sheets 3-1 a 3-4 do manual
// CL900 + 3" tem L=320mm; demais classes e calibres seguem a tabela padrão
const TUS_FACE_DIST = {
    '3': 240, '4': 300, '6': 450, '8': 600, '10': 750, '12': 900,
    'CL900|3': 320,
};

const TUS = {
  id: 'TUS',
  name: 'TUS — Ultrassônico',
  prefix: 'TUS',
  skipConditions: false,

  defaults: {
    model_type:     '6',
    caliber:        '6',
    pressure_class: 'CL150',
    flange_face:    'RF',
    schedule:       'SC40',
    material:       'CS',
    wireless:       'N',
  },

  buildCode(pv) {
    return 'TUS'
      + '-' + (pv.model_type     || '?')
      + '-' + (pv.caliber        || '?')
      + '-' + (pv.pressure_class || '?')
      + '-' + (pv.flange_face    || '?')
      + '-' + (pv.schedule       || '?')
      + '-' + (pv.material       || '?')
      + '-' + (pv.wireless       || '?');
  },

  getFlowRange(pv) {
    return TUS_FLOW_RANGE[pv.caliber || ''] || null;
  },

  getDescription(pv) {
    const viasLabel = pv.model_type ? pv.model_type + ' VIAS' : '';
    const dnMap = { '3':'DN80', '4':'DN100', '6':'DN150', '8':'DN200', '10':'DN250', '12':'DN300' };
    const calLabel = pv.caliber
      ? pv.caliber + '" (' + (dnMap[pv.caliber] || '') + ')'
      : '';
    const matMap = { CS: 'AÇO CARBONO', SS: 'AÇO INOX', LC: 'AÇO CARBONO BAIXA TEMP.' };
    const parts = ['MEDIDOR ULTRASSÔNICO GÁS'];
    if (viasLabel) parts.push(viasLabel);
    if (calLabel)  parts.push(calLabel);
    if (pv.pressure_class) parts.push(pv.pressure_class);
    if (pv.flange_face)    parts.push('FLANGE ' + pv.flange_face);
    if (pv.schedule)       parts.push(pv.schedule);
    if (pv.material)       parts.push(matMap[pv.material] || pv.material);
    if (pv.wireless && pv.wireless !== 'N') parts.push(pv.wireless);
    return parts.join(', ');
  },

  parameters: [
    {
      id: 'model_type',
      label: 'Número de Vias',
      required: true,
      options: [
        { code: '4', label: '4 vias' },
        { code: '6', label: '6 vias' },
        { code: '8', label: '8 vias' },
      ],
    },
    {
      id: 'caliber',
      label: 'Diâmetro Nominal',
      required: true,
      getDynamicOptions(pv) {
        const all = [
          { code: '3',  label: '3"  — DN80' },
          { code: '4',  label: '4"  — DN100' },
          { code: '6',  label: '6"  — DN150' },
          { code: '8',  label: '8"  — DN200' },
          { code: '10', label: '10" — DN250' },
          { code: '12', label: '12" — DN300' },
        ];
        // TUS-8: mínimo DN150 (6") conforme manual
        if (pv.model_type === '8') return all.filter(o => parseInt(o.code) >= 6);
        return all;
      },
    },
    {
      id: 'pressure_class',
      label: 'Classe de Pressão',
      required: true,
      options: [
        { code: 'CL150', label: 'Classe 150' },
        { code: 'CL300', label: 'Classe 300' },
        { code: 'CL600', label: 'Classe 600' },
        { code: 'CL900', label: 'Classe 900' },
      ],
    },
    {
      id: 'flange_face',
      label: 'Acabamento do Flange',
      required: true,
      options: [
        { code: 'RF', label: 'RF — Raised Face' },
        { code: 'RJ', label: 'RJ — Ring Type Joint' },
      ],
    },
    {
      id: 'schedule',
      label: 'Schedule',
      required: true,
      options: [
        { code: 'SC40', label: 'Schedule 40' },
        { code: 'SC60', label: 'Schedule 60' },
        { code: 'SC80', label: 'Schedule 80' },
      ],
    },
    {
      id: 'material',
      label: 'Material do Corpo',
      required: true,
      options: [
        { code: 'CS', label: 'Aço Carbono (CS)' },
        { code: 'SS', label: 'Aço Inox (SS)' },
        { code: 'LC', label: 'Baixa Temp. — Aço Carbono (LC)' },
      ],
    },
    {
      id: 'wireless',
      label: 'Comunicação IoT',
      required: true,
      options: [
        { code: 'N',  label: 'Básico — RS485 + Ethernet' },
        { code: '4G', label: '4G (remoto)' },
      ],
    },
  ],

  optionals: [],

  populateExcel({ ws, set, setNum, getSheet, code, paramValues: pv, ex }) {
    const fd = getSheet('Planilha1');
    if (!fd) { (typeof showToast === 'function' ? showToast : alert)('Aba Planilha1 não encontrada.', false); return; }

    const s  = (addr, val) => set(addr, val, fd);
    const sn = (addr, val) => setNum(addr, val, fd);

    const CAL_LABEL = { '3':'3"','4':'4"','6':'6"','8':'8"','10':'10"','12':'12"' };
    const DN_LABEL  = { '3':'DN80','4':'DN100','6':'DN150','8':'DN200','10':'DN250','12':'DN300' };
    const PC_MAP    = {
      CL150: 'ANSI#150 / 20 bar',
      CL300: 'ANSI#300 / 50 bar',
      CL600: 'ANSI#600 / 110 bar',
      CL900: 'ANSI#900 / 150 bar',
    };
    const PC_NUM = { CL150:'150', CL300:'300', CL600:'600', CL900:'900' };
    const MAT_MAP = { CS:'AÇO CARBONO', SS:'AÇO INOX', LC:'AÇO CARBONO BAIXA TEMP.' };

    const cal = pv.caliber        || '';
    const pc  = pv.pressure_class || '';
    const calStr = CAL_LABEL[cal] || '';
    const dnStr  = DN_LABEL[cal]  || '';

    // ── Cabeçalho ──────────────────────────────────────────────────
    s('I1', ex.num_doc ? 'N° ' + ex.num_doc : '');
    s('E2', ex.cliente || '');
    s('E3', calStr && pc
      ? 'MEDIDOR ULTRASSÔNICO TUS ' + cal + 'POL #' + (PC_NUM[pc] || '')
      : 'MEDIDOR ULTRASSÔNICO TUS');

    // ── Identificação (R5/R6) ───────────────────────────────────────
    s('E5', code);
    s('H6', ex.aplicacao || '');

    // ── Características gerais e metrológicas ───────────────────────
    // E7 = 'ULTRASSÔNICO' fixo no template
    s('E8', pv.model_type ? 'TUS-' + pv.model_type : '');
    s('E9', dnStr && calStr
      ? dnStr + ' (' + calStr + ') / FLANGEADA ' + (pv.flange_face || '')
      : '');
    s('E10', MAT_MAP[pv.material] || '');
    s('E11', PC_MAP[pc] || '');
    // E12 = ≤0,5%  | E13 = BRANCO  — fixos no template
    s('E14', ex.range_med || '');
    sn('E15', ex.distancia_face ? Number(ex.distancia_face) || '' : '');
    s('E16', ex.sentido_fluxo || '');
    // E17 = DIGITAL / IP 67 — fixo
    if (ex.qmin || ex.qmax) {
      s('E18', (ex.qmin || '') + ' m³/h  —  ' + (ex.qmax || '') + ' m³/h');
    }
    // E19 = ≤0,05%  |  E20–E27 = specs de sensores/comunicação — fixos

    // ── Módulo 4G (condicional) ─────────────────────────────────────
    if (pv.wireless === '4G') {
      s('E28', 'MÓDULO 4G');
      s('H28', 'Comunicação Remota');
    } else {
      s('E28', '');
      s('H28', '');
    }

    // E29 = SOFTWARE INCLUSO  |  E30 = PAINEL LCD — fixos
    s('E31', pv.model_type ? pv.model_type + ' CANAIS' : '');
    // H31 = Liga de Titânio — fixo
    // E32 = 24 ±4Vdc  |  E33 = ATEX  |  E34/E36 = temp. — fixos

    // ── Condições de processo ───────────────────────────────────────
    const fluidoParts = [];
    if (ex.fluido) fluidoParts.push(ex.fluido.toUpperCase());
    if (ex.pressao_op_val) {
      fluidoParts.push(ex.pressao_op_val + ' ' + (ex.pressao_op_unit || 'BAR').toUpperCase());
    } else if (ex.pmax_raw) {
      fluidoParts.push(ex.pmax_raw + ' ' + (ex.p_unit || 'BAR').toUpperCase());
    }
    s('E38', fluidoParts.join(' / '));

    // A39 = 'NOTAS'  |  A40-A41 = notas fixas do produto — não sobrescrever
  },

  pdfMappings: {
    tipo: 'Ultrassônico',
    getGrauProtecao: () => 'IP67',
    getTipoTransmissor: () => '',
    getSinalSaida: () => '4–20 mA / RS485 / Ethernet',
    getAlimentacao: () => '24 VDC ±4V',
    getConexaoEletrica: () => '',
    getMaterialCaixa: () => '',
    getRevestimento: () => 'N/A',
    getMaterialFlange: (pv) => {
      const map = { CS: 'Aço Carbono', SS: 'Aço Inox', LC: 'Aço Carbono Baixa Temp.' };
      return map[pv.material] || '';
    },
    getEletrodo: () => 'N/A',
    getCaixaSensor: () => '',
    getAtex: () => 'Ex d ia IIB+H2 T6 Gb',
    getConexaoProcesso: (pv) => {
      return (pv.caliber ? pv.caliber + '"' : '')
        + (pv.flange_face    ? ' ' + pv.flange_face    : '')
        + (pv.pressure_class ? ' ' + pv.pressure_class : '');
    },
  },
};
