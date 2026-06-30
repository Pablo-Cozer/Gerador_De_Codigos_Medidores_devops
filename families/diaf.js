// DIAF — Medidor Diafragma
// Fonte: Codificação_Medidores_Diafragma_REV2.xlsx
// Estrutura do codigo: 0D[T][GG][D][NNN]
//   T   = Tipo: M(Mecânico) S(Smart) T(Techem)
//   GG  = Designação: 10(G1.0) 16(G1.6) 25(G2.5) 40(G4.0) 60(G6.0)
//   D   = Display: A(Base) B(Sensor Reed) C(Sensor Hall) D(DLA Lora) E(DLA NB PRE) F(DLA NB POS)
//   NNN = Sequencial conforme combinação (entrada, esfera, saída)

// ── Lookup: 'entrada|esfera|saida' → NNN (igual para G1.0, G1.6, G2.5) ──
const DIAF_LOOKUP_ALU = {
  '3/8" NPT||3/8" SAE':1,'3/8" NPT||1/2" BSP':2,'3/8" NPT||1/2" SAE':3,
  '3/8" NPT||3/4" BSP':4,'3/8" NPT||1" BSP':5,'3/8" NPT||1.1/4" BSP':6,
  '3/8" NPT||155MM F3/4 X M1/2':7,'3/8" NPT||305MM F3/4 X M1/2':8,
  '3/8" NPT||3/4" PROL':9,
  '3/8" NPT|90° MACHO X FEMEA 1/2"|3/8" SAE':10,'3/8" NPT|90° MACHO X FEMEA 1/2"|1/2" BSP':11,
  '3/8" NPT|90° MACHO X FEMEA 1/2"|1/2" SAE':12,'3/8" NPT|90° MACHO X FEMEA 1/2"|3/4" BSP':13,
  '3/8" NPT|90° MACHO X FEMEA 1/2"|1" BSP':14,'3/8" NPT|90° MACHO X FEMEA 1/2"|1.1/4" BSP':15,
  '3/8" NPT|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':16,'3/8" NPT|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':17,
  '3/8" NPT|90° MACHO X FEMEA 1/2"|3/4" PROL':18,
  '3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|3/8" SAE':19,'3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|1/2" BSP':20,
  '3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|1/2" SAE':21,'3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|3/4" BSP':22,
  '3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|1" BSP':23,'3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|1.1/4" BSP':24,
  '3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':25,'3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':26,
  '3/8" NPT|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':27,
  '3/8" SAE FEMEA||3/8" SAE':28,'3/8" SAE FEMEA||1/2" BSP':29,'3/8" SAE FEMEA||1/2" SAE':30,
  '3/8" SAE FEMEA||3/4" BSP':31,'3/8" SAE FEMEA||1" BSP':32,'3/8" SAE FEMEA||1.1/4" BSP':33,
  '3/8" SAE FEMEA||155MM F3/4 X M1/2':34,'3/8" SAE FEMEA||305MM F3/4 X M1/2':35,
  '3/8" SAE FEMEA||3/4" PROL':36,
  '3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|3/8" SAE':37,'3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|1/2" BSP':38,
  '3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|1/2" SAE':39,'3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|3/4" BSP':40,
  '3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|1" BSP':41,'3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|1.1/4" BSP':42,
  '3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':43,'3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':44,
  '3/8" SAE FEMEA|90° MACHO X FEMEA 1/2"|3/4" PROL':45,
  '3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|3/8" SAE':46,'3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|1/2" BSP':47,
  '3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|1/2" SAE':48,'3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|3/4" BSP':49,
  '3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|1" BSP':50,'3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|1.1/4" BSP':51,
  '3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':52,'3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':53,
  '3/8" SAE FEMEA|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':54,
  '3/8" SAE||3/8" SAE':55,'3/8" SAE||1/2" BSP':56,'3/8" SAE||1/2" SAE':57,
  '3/8" SAE||3/4" BSP':58,'3/8" SAE||1" BSP':59,'3/8" SAE||1.1/4" BSP':60,
  '3/8" SAE||155MM F3/4 X M1/2':61,'3/8" SAE||305MM F3/4 X M1/2':62,
  '3/8" SAE||3/4" PROL':63,
  '3/8" SAE|90° MACHO X FEMEA 1/2"|3/8" SAE':64,'3/8" SAE|90° MACHO X FEMEA 1/2"|1/2" BSP':65,
  '3/8" SAE|90° MACHO X FEMEA 1/2"|1/2" SAE':66,'3/8" SAE|90° MACHO X FEMEA 1/2"|3/4" BSP':67,
  '3/8" SAE|90° MACHO X FEMEA 1/2"|1" BSP':68,'3/8" SAE|90° MACHO X FEMEA 1/2"|1.1/4" BSP':69,
  '3/8" SAE|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':70,'3/8" SAE|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':71,
  '3/8" SAE|90° MACHO X FEMEA 1/2"|3/4" PROL':72,
  '3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|3/8" SAE':73,'3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|1/2" BSP':74,
  '3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|1/2" SAE':75,'3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|3/4" BSP':76,
  '3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|1" BSP':77,'3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|1.1/4" BSP':78,
  '3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':79,'3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':80,
  '3/8" SAE|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':81,
  '1/2" BSP||1/2" BSP':82,'1/2" BSP||1/2" SAE':83,'1/2" BSP||3/4" BSP':84,
  '1/2" BSP||1" BSP':85,'1/2" BSP||1.1/4" BSP':86,'1/2" BSP||155MM F3/4 X M1/2':87,
  '1/2" BSP||305MM F3/4 X M1/2':88,'1/2" BSP||3/4" PROL':89,
  '1/2" BSP|90° MACHO X FEMEA 1/2"|1/2" BSP':90,'1/2" BSP|90° MACHO X FEMEA 1/2"|1/2" SAE':91,
  '1/2" BSP|90° MACHO X FEMEA 1/2"|3/4" BSP':92,'1/2" BSP|90° MACHO X FEMEA 1/2"|1" BSP':93,
  '1/2" BSP|90° MACHO X FEMEA 1/2"|1.1/4" BSP':94,'1/2" BSP|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':95,
  '1/2" BSP|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':96,'1/2" BSP|90° MACHO X FEMEA 1/2"|3/4" PROL':97,
  '1/2" BSP|MACHO X FEMEA BORBOLETA 1/2"|1/2" BSP':98,'1/2" BSP|MACHO X FEMEA BORBOLETA 1/2"|1/2" SAE':99,
  '1/2" BSP|MACHO X FEMEA BORBOLETA 1/2"|3/4" BSP':100,'1/2" BSP|MACHO X FEMEA BORBOLETA 1/2"|1" BSP':101,
  '1/2" BSP|MACHO X FEMEA BORBOLETA 1/2"|1.1/4" BSP':102,'1/2" BSP|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':103,
  '1/2" BSP|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':104,'1/2" BSP|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':105,
  '1/2" SAE||1/2" SAE':106,'1/2" SAE||3/4" BSP':107,'1/2" SAE||1" BSP':108,
  '1/2" SAE||1.1/4" BSP':109,'1/2" SAE||155MM F3/4 X M1/2':110,'1/2" SAE||305MM F3/4 X M1/2':111,
  '1/2" SAE||3/4" PROL':112,
  '1/2" SAE|90° MACHO X FEMEA 1/2"|1/2" SAE':113,'1/2" SAE|90° MACHO X FEMEA 1/2"|3/4" BSP':114,
  '1/2" SAE|90° MACHO X FEMEA 1/2"|1" BSP':115,'1/2" SAE|90° MACHO X FEMEA 1/2"|1.1/4" BSP':116,
  '1/2" SAE|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':117,'1/2" SAE|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':118,
  '1/2" SAE|90° MACHO X FEMEA 1/2"|3/4" PROL':119,
  '1/2" SAE|MACHO X FEMEA BORBOLETA 1/2"|1/2" SAE':120,'1/2" SAE|MACHO X FEMEA BORBOLETA 1/2"|3/4" BSP':121,
  '1/2" SAE|MACHO X FEMEA BORBOLETA 1/2"|1" BSP':122,'1/2" SAE|MACHO X FEMEA BORBOLETA 1/2"|1.1/4" BSP':123,
  '1/2" SAE|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':124,'1/2" SAE|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':125,
  '1/2" SAE|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':126,
  '3/4" BSP||3/4" BSP':127,'3/4" BSP||1" BSP':128,'3/4" BSP||1.1/4" BSP':129,
  '3/4" BSP||155MM F3/4 X M1/2':130,'3/4" BSP||305MM F3/4 X M1/2':131,'3/4" BSP||3/4" PROL':132,
  '3/4" BSP|90° MACHO X FEMEA 1/2"|3/4" BSP':133,'3/4" BSP|90° MACHO X FEMEA 1/2"|1" BSP':134,
  '3/4" BSP|90° MACHO X FEMEA 1/2"|1.1/4" BSP':135,'3/4" BSP|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':136,
  '3/4" BSP|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':137,'3/4" BSP|90° MACHO X FEMEA 1/2"|3/4" PROL':138,
  '3/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|3/4" BSP':139,'3/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|1" BSP':140,
  '3/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|1.1/4" BSP':141,'3/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':142,
  '3/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':143,'3/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':144,
  '1" BSP||1" BSP':145,'1" BSP||1.1/4" BSP':146,'1" BSP||155MM F3/4 X M1/2':147,
  '1" BSP||305MM F3/4 X M1/2':148,'1" BSP||3/4" PROL':149,
  '1" BSP|90° MACHO X FEMEA 1/2"|1" BSP':150,'1" BSP|90° MACHO X FEMEA 1/2"|1.1/4" BSP':151,
  '1" BSP|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':152,'1" BSP|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':153,
  '1" BSP|90° MACHO X FEMEA 1/2"|3/4" PROL':154,
  '1" BSP|MACHO X FEMEA BORBOLETA 1/2"|1" BSP':155,'1" BSP|MACHO X FEMEA BORBOLETA 1/2"|1.1/4" BSP':156,
  '1" BSP|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':157,'1" BSP|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':158,
  '1" BSP|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':159,
  '1.1/4" BSP||1.1/4" BSP':160,'1.1/4" BSP||155MM F3/4 X M1/2':161,
  '1.1/4" BSP||305MM F3/4 X M1/2':162,'1.1/4" BSP||3/4" PROL':163,
  '1.1/4" BSP|90° MACHO X FEMEA 1/2"|1.1/4" BSP':164,'1.1/4" BSP|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':165,
  '1.1/4" BSP|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':166,'1.1/4" BSP|90° MACHO X FEMEA 1/2"|3/4" PROL':167,
  '1.1/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|1.1/4" BSP':168,'1.1/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':169,
  '1.1/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':170,'1.1/4" BSP|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':171,
  '155MM F3/4 X M1/2||155MM F3/4 X M1/2':172,'155MM F3/4 X M1/2||305MM F3/4 X M1/2':173,
  '155MM F3/4 X M1/2||3/4" PROL':174,
  '155MM F3/4 X M1/2|90° MACHO X FEMEA 1/2"|155MM F3/4 X M1/2':175,'155MM F3/4 X M1/2|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':176,
  '155MM F3/4 X M1/2|90° MACHO X FEMEA 1/2"|3/4" PROL':177,
  '155MM F3/4 X M1/2|MACHO X FEMEA BORBOLETA 1/2"|155MM F3/4 X M1/2':178,'155MM F3/4 X M1/2|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':179,
  '155MM F3/4 X M1/2|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':180,
  '305MM F3/4 X M1/2||305MM F3/4 X M1/2':181,'305MM F3/4 X M1/2||3/4" PROL':182,
  '305MM F3/4 X M1/2|90° MACHO X FEMEA 1/2"|305MM F3/4 X M1/2':183,'305MM F3/4 X M1/2|90° MACHO X FEMEA 1/2"|3/4" PROL':184,
  '305MM F3/4 X M1/2|MACHO X FEMEA BORBOLETA 1/2"|305MM F3/4 X M1/2':185,'305MM F3/4 X M1/2|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':186,
  '3/4" PROL||3/4" PROL':187,
  '3/4" PROL|90° MACHO X FEMEA 1/2"|3/4" PROL':188,
  '3/4" PROL|MACHO X FEMEA BORBOLETA 1/2"|3/4" PROL':189,
  // G4.0 e G6.0 (Aço) — seq 190-201
  '3/4" BSP||155MM F1.1/4 X M1':190,'3/4" BSP||305MM F1.1/4 X M1':191,
  '1" BSP||155MM F1.1/4 X M1':192,'1" BSP||305MM F1.1/4 X M1':193,
  '1.1/4" BSP||155MM F1.1/4 X M1':194,'1.1/4" BSP||305MM F1.1/4 X M1':195,
  '1/2" BSP FEMEA||155MM F1.1/4 X M1':196,'1/2" BSP FEMEA||305MM F1.1/4 X M1':197,
  '155MM F1.1/4 X M1||155MM F1.1/4 X M1':198,'155MM F1.1/4 X M1||305MM F1.1/4 X M1':199,
  '305MM F1.1/4 X M1||155MM F1.1/4 X M1':200,'305MM F1.1/4 X M1||305MM F1.1/4 X M1':201,
};

// ── Entradas e saídas disponíveis (todas as designações) ──
const DIAF_ENTRADAS = [
  '3/8" NPT','3/8" SAE FEMEA','3/8" SAE',
  '1/2" BSP','1/2" BSP FEMEA','1/2" SAE','3/4" BSP',
  '1" BSP','1.1/4" BSP',
  '155MM F3/4 X M1/2','305MM F3/4 X M1/2','3/4" PROL',
  '155MM F1.1/4 X M1','305MM F1.1/4 X M1',
];
const DIAF_SAIDAS = [
  '3/8" SAE','1/2" BSP','1/2" SAE','3/4" BSP',
  '1" BSP','1.1/4" BSP',
  '155MM F3/4 X M1/2','305MM F3/4 X M1/2','3/4" PROL',
  '155MM F1.1/4 X M1','305MM F1.1/4 X M1',
];
const DIAF_ESFERAS = [
  { code: '', label: 'Nenhuma' },
  { code: '90° MACHO X FEMEA 1/2"', label: '90° Macho x Femea 1/2"' },
  { code: 'MACHO X FEMEA BORBOLETA 1/2"', label: 'Macho x Femea Borboleta 1/2"' },
];

// ── Helper: filtra saidas validas dado (entrada, esfera) ──
function diafGetValidSaidas(entrada, esfera) {
  const esf = esfera || '';
  return DIAF_SAIDAS.filter(s => {
    const key = entrada + '|' + esf + '|' + s;
    return DIAF_LOOKUP_ALU[key] !== undefined;
  });
}

// ── Faixa de vazao por designacao (m3/h) ──
const DIAF_FLOW_RANGE = {
  '10': { qmin: 0.016, qmax: 1.6 },
  '16': { qmin: 0.016, qmax: 2.5 },
  '25': { qmin: 0.04,  qmax: 4.0 },
  '40': { qmin: 0.04,  qmax: 6.0 },
  '60': { qmin: 0.06,  qmax: 10.0 },
};

const DIAF = {
  id: 'ODM',
  name: '0DM — Diafragma',
  prefix: '0D',
  skipConditions: true,
  noPdf: true,
  noExcel: true,

  defaults: {
    tipo:       'M',
    designacao: '10',
    display:    'A',
    entrada:    '3/8" NPT',
    esfera:     '',
    saida:      '3/8" SAE',
  },

  buildCode(pv) {
    const t   = pv.tipo       || '?';
    const gg  = pv.designacao || '??';
    const d   = pv.display    || '?';
    const key = (pv.entrada || '') + '|' + (pv.esfera || '') + '|' + (pv.saida || '');
    const seq = DIAF_LOOKUP_ALU[key];
    const nnn = seq != null ? String(seq).padStart(3, '0') : '???';
    return '0D' + t + gg + d + nnn;
  },

  getFlowRange(pv) {
    return DIAF_FLOW_RANGE[pv.designacao] || null;
  },

  getDescription(pv) {
    const tipoMap  = { M: 'MECÂNICO', S: 'SMART', T: 'MECÂNICO TECHEM' };
    const desigMap = { '10': 'G1.0', '16': 'G1.6', '25': 'G2.5', '40': 'G4.0', '60': 'G6.0' };
    const matMap   = { '10': 'ALUMÍNIO', '16': 'ALUMÍNIO', '25': 'ALUMÍNIO', '40': 'AÇO', '60': 'AÇO' };
    const dispMap  = {
      A: 'BASE', B: 'SENSOR REED', C: 'SENSOR HALL',
      D: 'DLA LORA', E: 'DLA NB PRE', F: 'DLA NB POS',
    };
    const parts = ['MEDIDOR DIAFRAGMA'];
    if (pv.tipo)      parts.push(tipoMap[pv.tipo]      || pv.tipo);
    if (pv.designacao) parts.push(matMap[pv.designacao] || '');
    parts.push('50 KPA');
    if (pv.designacao) parts.push(desigMap[pv.designacao] || pv.designacao);
    if (pv.display && pv.display !== 'A') parts.push(dispMap[pv.display] || pv.display);
    if (pv.entrada)   parts.push('ENTRADA ' + pv.entrada);
    if (pv.esfera)    parts.push(pv.esfera);
    if (pv.saida)     parts.push('SAÍDA ' + pv.saida);
    return parts.filter(Boolean).join(', ');
  },

  parameters: [
    {
      id: 'tipo',
      label: 'Tipo',
      required: true,
      options: [
        { code: 'M', label: 'Mecânico' },
        { code: 'S', label: 'Smart' },
        { code: 'T', label: 'Techem' },
      ],
    },
    {
      id: 'designacao',
      label: 'Designação',
      required: true,
      options: [
        { code: '10', label: 'G1.0 — Alumínio' },
        { code: '16', label: 'G1.6 — Alumínio' },
        { code: '25', label: 'G2.5 — Alumínio' },
        { code: '40', label: 'G4.0 — Aço' },
        { code: '60', label: 'G6.0 — Aço' },
      ],
    },
    {
      id: 'display',
      label: 'Sensor',
      required: true,
      options: [
        { code: 'A', label: 'Base' },
        { code: 'B', label: 'Sensor Reed' },
        { code: 'C', label: 'Sensor Hall' },
        { code: 'D', label: 'DLA Lora' },
        { code: 'E', label: 'DLA NB PRE' },
        { code: 'F', label: 'DLA NB POS' },
      ],
    },
    {
      id: 'entrada',
      label: 'Conexão de Entrada',
      required: true,
      options: DIAF_ENTRADAS.map(e => ({ code: e, label: e })),
    },
    {
      id: 'esfera',
      label: 'Esfera',
      required: true,
      options: DIAF_ESFERAS,
    },
    {
      id: 'saida',
      label: 'Conexão de Saída',
      required: true,
      getDynamicOptions: (pv) => {
        const validas = diafGetValidSaidas(pv.entrada || '', pv.esfera || '');
        return validas.length > 0
          ? validas.map(s => ({ code: s, label: s }))
          : DIAF_SAIDAS.map(s => ({ code: s, label: s }));
      },
    },
  ],

  optionals: [],

  pdfMappings: {
    tipo: 'Diafragma',
    getGrauProtecao: () => '',
    getTipoTransmissor: (pv) => {
      const m = { M: 'Mecânico', S: 'Smart', T: 'Techem' };
      return m[pv.tipo] || '';
    },
    getSinalSaida: () => '',
    getAlimentacao: () => '',
    getConexaoEletrica: () => '',
    getMaterialCaixa: (pv) => {
      const gg = pv.designacao;
      return (gg === '40' || gg === '60') ? 'Aço' : 'Alumínio';
    },
    getRevestimento: () => 'N/A',
    getMaterialFlange: () => 'N/A',
    getEletrodo: () => 'N/A',
    getCaixaSensor: () => '',
    getAtex: () => '',
    getConexaoProcesso: (pv) => {
      const e = pv.entrada || '';
      const s = pv.saida   || '';
      return e === s ? e : ('Ent: ' + e + ' / Saí: ' + s);
    },
  },
};
