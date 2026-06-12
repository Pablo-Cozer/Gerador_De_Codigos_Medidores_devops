// TEC — Corretor de Volume TEC-III
// Fonte: Cod_TECIII.xlsx
// Estrutura do codigo: 0TEC[P][C][NNNN]
//   0    = Linha (Gas) — fixo
//   TEC  = Tipo — fixo
//   P    = Pressao
//   C    = Comunicacao
//   NNNN = Sequencial (fixo 0001)

const TEC = {
  id: 'TEC',
  name: 'TEC-III — Corretor de Volume',
  prefix: '0TEC',
  skipConditions: true,

  defaults: {
    pressao:      'G',
    comunicacao:  'A',
  },

  buildCode(pv) {
    const p = pv.pressao    || '?';
    const c = pv.comunicacao || '?';
    return '0TEC' + p + c + '0001';
  },

  parameters: [
    {
      id: 'pressao',
      label: 'Faixa de Pressão',
      required: true,
      options: [
        { code: 'A', label: '0,8 – 2 bar' },
        { code: 'B', label: '1 – 5 bar' },
        { code: 'C', label: '2 – 10 bar' },
        { code: 'D', label: '4 – 20 bar' },
        { code: 'E', label: '10 – 50 bar' },
        { code: 'F', label: '20 – 100 bar' },
        { code: 'G', label: '0,8 – 10 bar' },
        { code: 'H', label: '4 – 100 bar' },
        { code: 'J', label: 'N/A' },
      ],
    },
    {
      id: 'comunicacao',
      label: 'Comunicação',
      required: true,
      options: [
        { code: 'A', label: 'RS485 + Óptica' },
        { code: 'B', label: 'RS485 + Óptica + NB-IoT' },
        { code: 'C', label: 'RS485 + Óptica + 4G' },
        { code: 'D', label: 'RS485 + Óptica + Bluetooth' },
      ],
    },
  ],

  optionals: [],

  pdfMappings: {
    tipo: 'Corretor de Volume',
    getGrauProtecao: () => '',
    getTipoTransmissor: () => '',
    getSinalSaida: () => '',
    getAlimentacao: () => '',
    getConexaoEletrica: () => '',
    getMaterialCaixa: () => '',
    getRevestimento: () => 'N/A',
    getMaterialFlange: () => 'N/A',
    getEletrodo: () => 'N/A',
    getCaixaSensor: () => '',
    getAtex: () => '',
    getConexaoProcesso: () => '',
  },

  // ── Faixas de pressão → range legível ──────────────────────
  _pressaoRange: {
    A: '0,8 – 2 bar',   B: '1 – 5 bar',    C: '2 – 10 bar',
    D: '4 – 20 bar',    E: '10 – 50 bar',   F: '20 – 100 bar',
    G: '0,8 – 10 bar',  H: '4 – 100 bar',   J: 'N/A',
  },

  // ── Comunicação → descrições ───────────────────────────────
  _comLabels: {
    A: 'RS485 + Óptica',
    B: 'RS485 + Óptica + NB-IoT',
    C: 'RS485 + Óptica + 4G',
    D: 'RS485 + Óptica + Bluetooth',
  },

  populateExcel({ ws, set, code, paramValues: pv, ex }) {
    const pCode = pv.pressao    || '';
    const cCode = pv.comunicacao || '';
    const pRange = this._pressaoRange[pCode] || '';
    const cLabel = this._comLabels[cCode]    || '';

    const hasModem = cCode === 'B' || cCode === 'C' || cCode === 'D';
    const modemType = cCode === 'B' ? 'NB-IoT'
                    : cCode === 'C' ? '4G'
                    : cCode === 'D' ? 'Bluetooth' : '';

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
    set('F15', 'Bateria 3,6V Lítio (EVE ER34615) — vida útil > 6 anos / Ext. 6,5V DC ±10%, 1W');
    set('F16', hasModem ? 'MODBUS RTU (RS485) + ' + modemType : 'MODBUS RTU (RS485)');
    set('F17', 'Sim — aço inox');

    // ── ENTRADAS E SAÍDAS (rows 18-24) ───────────────────────
    set('F18', '2 entradas LF (reed switch), 0–2 Hz');
    set('F19', '1 saída digital (reed switch)');
    set('F20', '1 entrada HF, 0–5 kHz (com alimentação externa)');
    set('F21', '6,5V DC ±10%, 1W');
    set('F22', 'Opcional — 4-20 mA (com alimentação externa)');
    set('F23', hasModem ? modemType : 'N/A');
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
    set('F37', pRange || 'N/A');
    set('F38', pRange || 'N/A');
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
