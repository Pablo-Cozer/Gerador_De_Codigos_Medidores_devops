// Família TEF — Medidor de Vazão Eletromagnético
// Fonte: Specification Datasheet-TEF-Magmeter-V1.0.pdf (Tancy Instrument Group)

// Conexões disponíveis por DN — tabela de dimensões pág. 24-25 do datasheet
// YYY = Especial / Sob Consulta (classe digitada manualmente pelo usuário)
const CONN_ESPECIAL = { code: 'YYY', label: 'Especial / Sob Consulta' };
const TEF_CONN_BY_DN = {
  '015': [
    { code: 'E03', label: 'EN1092-1 PN25 RF Flange' },
    { code: 'E04', label: 'EN1092-1 PN40 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '020': [
    { code: 'E03', label: 'EN1092-1 PN25 RF Flange' },
    { code: 'E04', label: 'EN1092-1 PN40 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '025': [
    { code: 'E03', label: 'EN1092-1 PN25 RF Flange' },
    { code: 'E04', label: 'EN1092-1 PN40 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '032': [
    { code: 'E04', label: 'EN1092-1 PN40 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '040': [
    { code: 'E04', label: 'EN1092-1 PN40 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '050': [
    { code: 'E04', label: 'EN1092-1 PN40 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '065': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'E03', label: 'EN1092-1 PN25 RF Flange' },
    { code: 'E04', label: 'EN1092-1 PN40 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  // DN80 a DN600: apenas PN10, PN16 e Class150
  '080': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '100': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '125': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '150': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '200': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '250': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '300': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '350': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '400': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '450': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '500': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
  '600': [
    { code: 'E01', label: 'EN1092-1 PN10 RF Flange' },
    { code: 'E02', label: 'EN1092-1 PN16 RF Flange' },
    { code: 'A01', label: 'ANSI Class 150 RF Flange' },
    CONN_ESPECIAL,
  ],
};

// Denominação NPS por DN (para designação na folha de dados)
const TEF_NPS_MAP = {
  '015': '½"',  '020': '¾"',  '025': '1"',   '032': '1¼"', '040': '1½"',
  '050': '2"',  '065': '2½"', '080': '3"',   '100': '4"',  '125': '5"',
  '150': '6"',  '200': '8"',  '250': '10"',  '300': '12"', '350': '14"',
  '400': '16"', '450': '18"', '500': '20"',  '600': '24"',
};

// Distância face a face (dimensão L, mm) — tabela de dimensões pág. 24-25
// L é igual para todas as classes de pressão dentro de cada DN
const TEF_FACE_BY_DN = {
  '015': 200, '020': 200, '025': 200, '032': 200, '040': 200,
  '050': 200, '065': 200, '080': 200, '100': 250, '125': 250,
  '150': 300, '200': 350, '250': 450, '300': 500, '350': 550,
  '400': 600, '450': 600, '500': 600, '600': 600,
};

// Faixas de medição por DN (m³/h) — seção 4.2, pág. 14
const TEF_FLOW_BY_DN = {
  '015': { qmin: '0,3',  qmax: '6'     },
  '020': { qmin: '0,6',  qmax: '11'    },
  '025': { qmin: '0,9',  qmax: '18'    },
  '032': { qmin: '1,5',  qmax: '29'    },
  '040': { qmin: '2,3',  qmax: '45'    },
  '050': { qmin: '3,5',  qmax: '71'    },
  '065': { qmin: '6',    qmax: '119'   },
  '080': { qmin: '9',    qmax: '181'   },
  '100': { qmin: '14',   qmax: '283'   },
  '125': { qmin: '22',   qmax: '442'   },
  '150': { qmin: '32',   qmax: '636'   },
  '200': { qmin: '57',   qmax: '1131'  },
  '250': { qmin: '88',   qmax: '1767'  },
  '300': { qmin: '127',  qmax: '2545'  },
  '350': { qmin: '173',  qmax: '3464'  },
  '400': { qmin: '226',  qmax: '4524'  },
  '450': { qmin: '286',  qmax: '5726'  },
  '500': { qmin: '353',  qmax: '7069'  },
  '600': { qmin: '509',  qmax: '10200' },
};

const TEF = {
  id: 'TEF',
  name: 'TEF \u2014 Eletromagn\u00E9tico',
  prefix: 'TEFP',

  getDnDefaults(dnCode) {
    const flow = TEF_FLOW_BY_DN[dnCode];
    const face = TEF_FACE_BY_DN[dnCode];
    if (!flow) return null;
    return {
      face,
      qmin: flow.qmin,
      qmax: flow.qmax,
      unit: 'm\u00B3/h',
    };
  },

  // Valores padrão pré-selecionados para configuração rápida
  defaults: {
    transmitter_type: 'C',       // Compacto
    ex_approval:      '00',      // Área Não Perigosa
    precision:        '2',       // 0,5% o.r.
    transmitter_housing: '1',    // Alumínio
    electrical_conn:  'M',       // ISO M20 x 1,5
    power_supply:     'D',       // 24 V CC
    flange_material:  '1',       // Aço Carbono
    sensor_housing:   '1',       // Aço Carbono
    lining:           'B',       // PTFE
    electrode:        '1',       // Inox 316L
  },
  optionalDefaults: {
    language:         '01',      // Inglês
    grounding_rings:  'R1',      // Anéis de Aterramento 304
  },

  parameters: [
    {
      id: 'transmitter_type',
      label: 'Tipo de Transmissor',
      required: true,
      options: [
        { code: 'C', label: 'Vers\u00E3o Compacta' },
        { code: 'R', label: 'Vers\u00E3o Remota' },
      ],
    },
    {
      id: 'dn',
      label: 'Di\u00E2metro Nominal',
      required: true,
      options: [
        { code: '015', label: 'DN15' },
        { code: '020', label: 'DN20' },
        { code: '025', label: 'DN25' },
        { code: '032', label: 'DN32' },
        { code: '040', label: 'DN40' },
        { code: '050', label: 'DN50' },
        { code: '065', label: 'DN65' },
        { code: '080', label: 'DN80' },
        { code: '100', label: 'DN100' },
        { code: '125', label: 'DN125' },
        { code: '150', label: 'DN150' },
        { code: '200', label: 'DN200' },
        { code: '250', label: 'DN250' },
        { code: '300', label: 'DN300' },
        { code: '350', label: 'DN350' },
        { code: '400', label: 'DN400' },
        { code: '450', label: 'DN450' },
        { code: '500', label: 'DN500' },
        { code: '600', label: 'DN600' },
      ],
    },
    {
      id: 'ex_approval',
      label: 'Aprova\u00E7\u00E3o Ex',
      required: true,
      options: [
        { code: '00', label: '\u00C1rea N\u00E3o Perigosa' },
        { code: 'AA', label: 'NEPSI Ex db ib IIC T1...T6 Gb' },
      ],
    },
    {
      id: 'precision',
      label: 'Precis\u00E3o',
      required: true,
      options: [
        { code: '1', label: '1,0% o.r.' },
        { code: '2', label: '0,5% o.r.' },
      ],
    },
    {
      id: 'transmitter_housing',
      label: 'Caixa do Transmissor',
      required: true,
      options: [
        { code: '1', label: 'Alum\u00EDnio' },
        { code: '2', label: 'A\u00E7o Inoxid\u00E1vel 316L' },
        { code: 'Y', label: 'Especial' },
      ],
    },
    {
      id: 'electrical_conn',
      label: 'Conex\u00E3o El\u00E9trica',
      required: true,
      options: [
        { code: 'N', label: 'ANSI 1/2 NPT' },
        { code: 'M', label: 'ISO M20 x 1,5' },
        { code: 'Y', label: 'Especial' },
      ],
    },
    {
      id: 'power_supply',
      label: 'Fonte de Alimenta\u00E7\u00E3o',
      required: true,
      options: [
        { code: 'A', label: '220 V CA' },
        { code: 'D', label: '24 V CC' },
        { code: 'Y', label: 'Especial' },
      ],
    },
    {
      id: 'output1',
      label: 'Sa\u00EDda 1',
      required: true,
      fixed: true,
      options: [
        { code: '1', label: '4-20 mA HART + Freq./Pulso + MODBUS RS485' },
      ],
    },
    {
      id: 'output2',
      label: 'Sa\u00EDda 2',
      required: true,
      fixed: true,
      options: [
        { code: '0', label: 'NULL' },
      ],
    },
    {
      id: 'flange_material',
      label: 'Material da Flange',
      required: true,
      options: [
        { code: '1', label: 'A\u00E7o Carbono' },
        { code: '2', label: 'A\u00E7o Inoxid\u00E1vel 304L' },
        { code: '3', label: 'A\u00E7o Inoxid\u00E1vel 316L' },
        { code: 'Y', label: 'Especial' },
      ],
    },
    {
      id: 'sensor_housing',
      label: 'Caixa do Sensor',
      required: true,
      options: [
        { code: '1', label: 'A\u00E7o Carbono' },
        { code: '2', label: 'A\u00E7o Inoxid\u00E1vel 304' },
        { code: '3', label: 'A\u00E7o Inoxid\u00E1vel 316' },
        { code: 'Y', label: 'Especial' },
      ],
    },
    {
      id: 'lining',
      label: 'Revestimento',
      required: true,
      options: [
        { code: 'A', label: 'Neoprene (-20\u00B0C a 80\u00B0C)' },
        { code: 'B', label: 'PTFE (-40\u00B0C a 130\u00B0C)' },
        { code: 'C', label: 'PFA (-20\u00B0C a 150\u00B0C)' },
        { code: 'D', label: 'PFA Alta Temperatura (-20\u00B0C a 180\u00B0C)' },
        { code: 'E', label: 'Poliuretano' },
        { code: 'F', label: 'Cer\u00E2mica' },
        { code: 'G', label: 'F46' },
        { code: 'Y', label: 'Especial' },
      ],
    },
    {
      id: 'electrode',
      label: 'Eletrodo',
      required: true,
      options: [
        { code: '1', label: 'A\u00E7o Inoxid\u00E1vel 316L' },
        { code: '2', label: 'Hastelloy HC' },
        { code: '3', label: 'Tit\u00E2nio' },
        { code: '4', label: 'T\u00E2ntalo' },
        { code: '5', label: 'Platina Ir\u00EDdio' },
        { code: '6', label: 'Carboneto de Tungst\u00EAnio' },
        { code: '7', label: 'Cer\u00E2mica' },
        { code: 'Y', label: 'Especial' },
      ],
    },
    {
      id: 'process_conn',
      label: 'Conex\u00E3o do Processo',
      required: true,
      // Opções dinâmicas: dependem do DN selecionado (tabela de dimensões pág. 24-25)
      getDynamicOptions: (pv) => TEF_CONN_BY_DN[pv.dn] || [],
    },
  ],

  optionals: [
    {
      id: 'cable_length',
      label: 'Comprimento do Cabo',
      remoteOnly: true,
      options: [
        { code: 'L05', label: '5 metros' },
        { code: 'L10', label: '10 metros' },
        { code: 'L15', label: '15 metros' },
        { code: 'L20', label: '20 metros' },
      ],
    },
    {
      id: 'language',
      label: 'Idioma',
      options: [
        { code: '01', label: 'Ingl\u00EAs' },
      ],
    },
    {
      id: 'custom_param',
      label: 'Par\u00E2metro Personalizado',
      options: [
        { code: 'SS', label: 'Especificado pelo Cliente' },
      ],
    },
    {
      id: 'calibration',
      label: 'Fluxo de Calibra\u00E7\u00E3o',
      options: [
        { code: 'C1', label: 'Calibra\u00E7\u00E3o Personalizada 3 Pontos' },
        { code: 'C2', label: 'Calibra\u00E7\u00E3o Personalizada 5 Pontos' },
        { code: 'C3', label: 'IEC/ISO 17025 \u2014 3 pts (pontos padr\u00E3o)' },
        { code: 'C4', label: 'IEC/ISO 17025 \u2014 3 pts (pontos personalizados)' },
        { code: 'C5', label: 'IEC/ISO 17025 \u2014 5 pts (pontos personalizados)' },
        { code: 'CY', label: 'Especial' },
      ],
    },
    {
      id: 'grounding_rings',
      label: 'An\u00E9is de Aterramento',
      options: [
        { code: 'R1', label: 'An\u00E9is de Aterramento 304' },
        { code: 'R2', label: 'An\u00E9is de Aterramento 316L' },
        { code: 'R3', label: 'An\u00E9is de Aterramento Hastelloy' },
        { code: 'R4', label: 'An\u00E9is de Aterramento T\u00E2ntalo' },
        { code: 'RY', label: 'Especial' },
      ],
    },
    {
      id: 'material_cert',
      label: 'Certificado de Material',
      options: [
        { code: 'M1', label: 'Sim' },
      ],
    },
    {
      id: 'sil',
      label: 'Seguran\u00E7a SIL',
      options: [
        { code: 'S2', label: 'SIL2' },
      ],
    },
    {
      id: 'maritime_cert',
      label: 'Certificado Mar\u00EDtimo',
      options: [
        { code: 'MC', label: 'CCS' },
      ],
    },
    {
      id: 'pressure_test',
      label: 'Teste de Press\u00E3o',
      options: [
        { code: 'P1', label: 'Teste Hidrost\u00E1tico' },
      ],
    },
    {
      id: 'protection_grade',
      label: 'Grau de Prote\u00E7\u00E3o',
      remoteOnly: true,
      options: [
        { code: 'I8', label: 'IP68 (apenas vers\u00E3o remota)' },
      ],
    },
    {
      id: 'nameplate',
      label: 'Placa de Identifica\u00E7\u00E3o',
      options: [
        { code: 'Z1', label: 'Campo personalizado na placa' },
        { code: 'Z2', label: 'Tag em Inox' },
      ],
    },
  ],

  pdfMappings: {
    tipo: 'Eletromagn\u00E9tico',
    getGrauProtecao: (optionals, params) => {
      if (optionals.protection_grade === 'I8') return 'IP68';
      return (params && params.transmitter_type === 'R') ? 'IP66/67/68' : 'IP66/67';
    },
    getTipoTransmissor: (params) => params.transmitter_type === 'C' ? 'Vers\u00E3o Compacta (Acoplada)' : 'Vers\u00E3o Remota',
    getSinalSaida: () => '4-20 mA + HART + FREQ/PULSO + RS485',
    getAlimentacao: (params) => {
      const map = { 'A': '220 V CA', 'D': '24 V CC', 'Y': 'Especial' };
      return map[params.power_supply] || '';
    },
    getConexaoEletrica: (params) => {
      const map = { 'N': 'ANSI 1/2 NPT', 'M': 'ISO M20 x 1,5', 'Y': 'Especial' };
      return map[params.electrical_conn] || '';
    },
    getMaterialCaixa: (params) => {
      const map = { '1': 'Alum\u00EDnio', '2': 'A\u00E7o Inoxid\u00E1vel 316L', 'Y': 'Especial' };
      return map[params.transmitter_housing] || '';
    },
    getRevestimento: (params) => {
      const map = {
        'A': 'Neoprene (-20\u00B0C a 80\u00B0C)',
        'B': 'PTFE (-40\u00B0C a 130\u00B0C)',
        'C': 'PFA (-20\u00B0C a 150\u00B0C)',
        'D': 'PFA Alta Temp. (-20\u00B0C a 180\u00B0C)',
        'E': 'Poliuretano',
        'F': 'Cer\u00E2mica',
        'G': 'F46',
        'Y': 'Especial',
      };
      return map[params.lining] || '';
    },
    getMaterialFlange: (params) => {
      const map = { '1': 'A\u00E7o Carbono', '2': 'A\u00E7o Inoxid\u00E1vel 304L', '3': 'A\u00E7o Inoxid\u00E1vel 316L', 'Y': 'Especial' };
      return map[params.flange_material] || '';
    },
    getEletrodo: (params) => {
      const map = {
        '1': 'A\u00E7o Inoxid\u00E1vel 316L',
        '2': 'Hastelloy HC',
        '3': 'Tit\u00E2nio',
        '4': 'T\u00E2ntalo',
        '5': 'Platina Ir\u00EDdio',
        '6': 'Carboneto de Tungst\u00EAnio',
        '7': 'Cer\u00E2mica',
        'Y': 'Especial',
      };
      return map[params.electrode] || '';
    },
    getCaixaSensor: (params) => {
      const map = { '1': 'A\u00E7o Carbono', '2': 'A\u00E7o Inoxid\u00E1vel 304', '3': 'A\u00E7o Inoxid\u00E1vel 316', 'Y': 'Especial' };
      return map[params.sensor_housing] || '';
    },
    getAtex: (params) => params.ex_approval === 'AA' ? 'NEPSI Ex db ib IIC T1...T6 Gb' : '\u00C1rea N\u00E3o Perigosa',
    getConexaoProcesso: (params) => {
      if (params.process_conn === 'YYY') return params.process_conn_custom || 'Especial / Sob Consulta';
      const all = Object.values(TEF_CONN_BY_DN).flat();
      const opt = all.find(o => o.code === params.process_conn);
      return opt ? opt.label : '';
    },
    getClassePressao: (params) => {
      if (params.process_conn === 'YYY') return params.process_conn_body_class || 'Especial';
      const map = {
        'E00': 'PN6',  'E01': 'PN10', 'E02': 'PN16',
        'E03': 'PN25', 'E04': 'PN40', 'A01': 'ANSI Classe 150',
      };
      return map[params.process_conn] || '';
    },
    getClassePrecisao: (params) => {
      const map = { '1': '1,0%', '2': '0,5%' };
      return map[params.precision] || '';
    },
    getFluxoCalibr: (optionals) => {
      if (!optionals.calibration) return 'Padr\u00E3o';
      const map = {
        'C1': 'Calibra\u00E7\u00E3o Personalizada 3 Pontos',
        'C2': 'Calibra\u00E7\u00E3o Personalizada 5 Pontos',
        'C3': 'IEC/ISO 17025 \u2014 3 pts',
        'C4': 'IEC/ISO 17025 \u2014 3 pts (Custom)',
        'C5': 'IEC/ISO 17025 \u2014 5 pts (Custom)',
        'CY': 'Especial',
      };
      return map[optionals.calibration] || 'Padr\u00E3o';
    },
    getTestePressao: (optionals) => optionals.pressure_test === 'P1' ? 'Teste Hidrost\u00E1tico' : 'Padr\u00E3o',
    getPlacaId: (optionals) => {
      if (!optionals.nameplate) return 'PADR\u00C3O';
      const map = { 'Z1': 'Campo Personalizado', 'Z2': 'Tag em Inox' };
      return map[optionals.nameplate] || 'PADR\u00C3O';
    },
  },

  populateExcel({ ws, set, code, paramValues: pv, optionalValues: ov, ex, map }) {
    const dn = pv.dn ? 'DN' + parseInt(pv.dn) : '';

    // ── CABEÇALHO ──────────────────────────────────────────────
    set('H1', ex.num_doc ? 'N° ' + ex.num_doc : '');
    set('E2', ex.cliente || '');

    // ── IDENTIFICAÇÃO ──────────────────────────────────────────
    set('E5', code);
    set('E6', 'MEDI\u00C7\u00C3O DE VAZ\u00C3O');
    set('H6', ex.aplicacao || '');
    set('E7', 'ELETROMAGN\u00C9TICO');

    // Designação: NPS + Qmax do sensor  (ex: 10" QMAX 1767)
    const nps = TEF_NPS_MAP[pv.dn] || dn;
    const qmaxSensor = (TEF_FLOW_BY_DN[pv.dn] || {}).qmax || ex.qmax || '';
    set('E8', qmaxSensor ? nps + ' QMAX ' + qmaxSensor : dn);

    // ── CARACTERÍSTICAS GERAIS ─────────────────────────────────
    set('E9',  dn);
    set('H9',  map.getConexaoProcesso(pv));     // ex: EN1092-1 PN10 RF Flange ou texto especial

    set('E10', 'Aço Carbono');               // Material do Corpo — sempre AC (estrutural)
    set('E11', map.getRevestimento(pv));         // Revestimento (liner interno)
    set('E12', map.getMaterialFlange(pv));       // Material da Flange

    // Anel de Aterramento (opcional \u2014 limpa se n\u00E3o selecionado)
    const grMap = {
      R1: 'An\u00E9is de Aterramento AI 304',
      R2: 'An\u00E9is de Aterramento AI 316L',
      R3: 'An\u00E9is de Aterramento Hastelloy',
      R4: 'An\u00E9is de Aterramento T\u00E2ntalo',
      RY: 'Especial',
    };
    set('E13', ov.grounding_rings ? (grMap[ov.grounding_rings] || ov.grounding_rings) : '');

    set('E14', map.getClassePressao(pv));        // Classe de Pressão
    set('E15', map.getClassePrecisao(pv));       // Classe de Precisão
    set('E16', 'PADR\u00C3O DE F\u00C1BRICA');   // Cor (fixo)
    set('E17', ex.range_med       || '');
    set('E18', ex.distancia_face  || '');
    set('E19', ex.sentido_fluxo   || '');

    // Qmax / Qmin do sensor (da tabela de DN, usam mesma unidade de vazão)
    if (qmaxSensor) {
      set('E20', qmaxSensor);
      set('H20', ex.qunit || 'm\u00B3/h');
    }
    const qminSensor = (TEF_FLOW_BY_DN[pv.dn] || {}).qmin;
    if (qminSensor) {
      set('E21', qminSensor);
      set('H21', ex.qunit || 'm\u00B3/h');
    }

    // Repetibilidade (derivada da precisão)
    const repMap = { '1': '\u22640,32%', '2': '\u22640,16%' };
    set('E22', repMap[pv.precision] || '');

    set('E23', map.getGrauProtecao(ov, pv));      // Grau de Proteção
    set('E24', map.getPlacaId(ov));              // Placa de Identificação

    // ── TRANSMISSOR ────────────────────────────────────────────
    set('E25', map.getTipoTransmissor(pv));
    set('E26', map.getSinalSaida());
    set('E27', map.getAlimentacao(pv));
    set('E29', map.getConexaoEletrica(pv));
    // Comprimento do cabo — limpa se não selecionado (versão compacta)
    if (ov.cable_length) {
      set('E28', ov.cable_length.replace('L', ''));
      set('H28', '(metros)');
    } else {
      set('E28', '');
      set('H28', '');
    }
    set('E30', map.getMaterialCaixa(pv));        // Material do Invólucro

    // ── SENSOR ─────────────────────────────────────────────────
    set('E31', map.getEletrodo(pv));
    set('E32', map.getCaixaSensor(pv));

    // ── CONDIÇÕES DO PROCESSO ──────────────────────────────────
    set('E33', ex.fluido ? ex.fluido.toUpperCase() : '');
    set('G33', ex.estado || '');

    // Vazão de Operação — ponto único de trabalho
    set('E34', ex.qop ? ex.qop + (ex.qop_unit ? ' ' + ex.qop_unit : '') : '');

    // Faixa Qmin – Qmax (célula única combinada)
    const qMinMax = [ex.qmin, ex.qmax].filter(Boolean).join(' \u2013 ');
    set('E35', qMinMax ? qMinMax + (ex.qunit ? ' ' + ex.qunit : '') : '');

    // Pressão de Operação — célula única (valor + unidade combinados)
    if (ex.pressao_op_val) {
      set('E36', ex.pressao_op_val + (ex.pressao_op_unit ? ' ' + ex.pressao_op_unit : ''));
    } else {
      set('E36', '');
    }

    // Faixa de Pressão Pmin / Pnormal / Pmax + unidade compartilhada
    set('E37', ex.pmin_raw || '');
    set('F37', ex.pnorm_raw || '');
    set('G37', ex.pmax_raw || '');
    set('H37', ex.p_unit || '');

    // Viscosidade, Densidade, Temperatura
    set('E38', ex.viscosidade ? ex.viscosidade + ' ' + (ex.viscosidade_unit || 'Cp') : '');
    set('E39', ex.densidade   ? ex.densidade   + ' ' + (ex.densidade_unit   || 'kg/m\u00B3') : '');
    set('E40', ex.temp ? ex.temp + ' \u00BAC' : '');

    // TEMPERATURA MIN/MÁX (Row 41) — temperatura de projeto
    set('E41', ex.temp_proj ? ex.temp_proj + ' ºC' : '');

    // ATEX e Conexão do Processo (preenchidos automaticamente pelo configurador)
    set('E42', map.getAtex(pv));
    set('E43', map.getConexaoProcesso(pv));

    // ── CALIBRAÇÃO ─────────────────────────────────────────────
    set('E44', map.getFluxoCalibr(ov));
    set('E45', map.getTestePressao(ov));

    // ── CERTIFICADOS / SEGURANÇA ───────────────────────────────
    set('E46', ov.material_cert ? 'SIM' : '');
    set('E47', ov.maritime_cert === 'MC' ? 'CCS' : '');
    set('E48', ov.sil === 'S2' ? 'SIL2' : '');

    // ── NOTAS ──────────────────────────────────────────────────
    set('B49', ex.notas || '');
  },
};
