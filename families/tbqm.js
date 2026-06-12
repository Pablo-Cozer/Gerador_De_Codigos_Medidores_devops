// TBQM — Medidor de Vazão por Turbina (Gás)
// Fonte: Codificação_Rot_Turb.xlsx (aba Turbinas) + TYL Catalog.pdf

// ── Lookup table: (designação, conexão, material, classe) → PREFIXO 2 chars ──
const TBQM_PREFIXO = {
    // G40 DN50
    'G40|DN50|AÇO CARBONO|ANSI#150': 'AA', 'G40|DN50|AÇO CARBONO|ANSI#300': 'AB',
    'G40|DN50|AÇO CARBONO|ANSI#600': 'AC', 'G40|DN50|AÇO CARBONO|ANSI#900': 'AD',
    'G40|DN50|ALUMÍNIO|PN16': 'DC',
    // G65 DN50
    'G65|DN50|AÇO CARBONO|ANSI#150': 'AE', 'G65|DN50|AÇO CARBONO|ANSI#300': 'AF',
    'G65|DN50|AÇO CARBONO|ANSI#600': 'AG', 'G65|DN50|AÇO CARBONO|ANSI#900': 'AH',
    'G65|DN50|ALUMÍNIO|PN16': 'DD',
    // G100 DN80
    'G100|DN80|AÇO CARBONO|ANSI#150': 'AI', 'G100|DN80|AÇO CARBONO|ANSI#300': 'AJ',
    'G100|DN80|AÇO CARBONO|ANSI#600': 'AK', 'G100|DN80|AÇO CARBONO|ANSI#900': 'AL',
    'G100|DN80|ALUMÍNIO|PN16': 'DE',
    // G160 DN80
    'G160|DN80|AÇO CARBONO|ANSI#150': 'AM', 'G160|DN80|AÇO CARBONO|ANSI#300': 'AN',
    'G160|DN80|AÇO CARBONO|ANSI#600': 'AO', 'G160|DN80|AÇO CARBONO|ANSI#900': 'AP',
    'G160|DN80|ALUMÍNIO|PN16': 'DF',
    // G250 DN80
    'G250|DN80|AÇO CARBONO|ANSI#150': 'AQ', 'G250|DN80|AÇO CARBONO|ANSI#300': 'AR',
    'G250|DN80|AÇO CARBONO|ANSI#600': 'AS', 'G250|DN80|AÇO CARBONO|ANSI#900': 'AT',
    'G250|DN80|ALUMÍNIO|PN16': 'DG',
    // G160 DN100
    'G160|DN100|AÇO CARBONO|ANSI#150': 'AU', 'G160|DN100|AÇO CARBONO|ANSI#300': 'AV',
    'G160|DN100|AÇO CARBONO|ANSI#600': 'AW', 'G160|DN100|AÇO CARBONO|ANSI#900': 'AX',
    'G160|DN100|ALUMÍNIO|PN16': 'DH',
    // G250 DN100
    'G250|DN100|AÇO CARBONO|ANSI#150': 'AY', 'G250|DN100|AÇO CARBONO|ANSI#300': 'AZ',
    'G250|DN100|AÇO CARBONO|ANSI#600': 'BA', 'G250|DN100|AÇO CARBONO|ANSI#900': 'BB',
    'G250|DN100|ALUMÍNIO|PN16': 'DI',
    // G400 DN100
    'G400|DN100|AÇO CARBONO|ANSI#150': 'BC', 'G400|DN100|AÇO CARBONO|ANSI#300': 'BD',
    'G400|DN100|AÇO CARBONO|ANSI#600': 'BE', 'G400|DN100|AÇO CARBONO|ANSI#900': 'BF',
    'G400|DN100|ALUMÍNIO|PN16': 'DJ',
    // G400 DN150
    'G400|DN150|AÇO CARBONO|ANSI#150': 'BG', 'G400|DN150|AÇO CARBONO|ANSI#300': 'BH',
    'G400|DN150|AÇO CARBONO|ANSI#600': 'BI', 'G400|DN150|AÇO CARBONO|ANSI#900': 'BJ',
    'G400|DN150|ALUMÍNIO|PN16': 'DK',
    // G650 DN150
    'G650|DN150|AÇO CARBONO|ANSI#150': 'BK', 'G650|DN150|AÇO CARBONO|ANSI#300': 'BL',
    'G650|DN150|AÇO CARBONO|ANSI#600': 'BM', 'G650|DN150|AÇO CARBONO|ANSI#900': 'BN',
    'G650|DN150|ALUMÍNIO|PN16': 'DL',
    // G1000 DN150
    'G1000|DN150|AÇO CARBONO|ANSI#150': 'BO', 'G1000|DN150|AÇO CARBONO|ANSI#300': 'BP',
    'G1000|DN150|AÇO CARBONO|ANSI#600': 'BQ', 'G1000|DN150|AÇO CARBONO|ANSI#900': 'BR',
    'G1000|DN150|ALUMÍNIO|PN16': 'DM',
    // G650 DN200
    'G650|DN200|AÇO CARBONO|ANSI#150': 'BS', 'G650|DN200|AÇO CARBONO|ANSI#300': 'BT',
    'G650|DN200|AÇO CARBONO|ANSI#600': 'BU', 'G650|DN200|AÇO CARBONO|ANSI#900': 'BV',
    'G650|DN200|ALUMÍNIO|PN16': 'DN',
    // G1000 DN200
    'G1000|DN200|AÇO CARBONO|ANSI#150': 'BW', 'G1000|DN200|AÇO CARBONO|ANSI#300': 'BX',
    'G1000|DN200|AÇO CARBONO|ANSI#600': 'BY', 'G1000|DN200|AÇO CARBONO|ANSI#900': 'BZ',
    'G1000|DN200|ALUMÍNIO|PN16': 'DO',
    // G1600 DN200
    'G1600|DN200|AÇO CARBONO|ANSI#150': 'CA', 'G1600|DN200|AÇO CARBONO|ANSI#300': 'CB',
    'G1600|DN200|AÇO CARBONO|ANSI#600': 'CC', 'G1600|DN200|AÇO CARBONO|ANSI#900': 'CD',
    'G1600|DN200|ALUMÍNIO|PN16': 'DP',
    // G1000 DN250
    'G1000|DN250|AÇO CARBONO|ANSI#150': 'CE', 'G1000|DN250|AÇO CARBONO|ANSI#300': 'CF',
    'G1000|DN250|AÇO CARBONO|ANSI#600': 'CG', 'G1000|DN250|AÇO CARBONO|ANSI#900': 'CH',
    'G1000|DN250|ALUMÍNIO|PN16': 'DQ',
    // G1600 DN250
    'G1600|DN250|AÇO CARBONO|ANSI#150': 'CI', 'G1600|DN250|AÇO CARBONO|ANSI#300': 'CJ',
    'G1600|DN250|AÇO CARBONO|ANSI#600': 'CK', 'G1600|DN250|AÇO CARBONO|ANSI#900': 'CL',
    'G1600|DN250|ALUMÍNIO|PN16': 'DR',
    // G2500 DN250
    'G2500|DN250|AÇO CARBONO|ANSI#150': 'CM', 'G2500|DN250|AÇO CARBONO|ANSI#300': 'CN',
    'G2500|DN250|AÇO CARBONO|ANSI#600': 'CO', 'G2500|DN250|AÇO CARBONO|ANSI#900': 'CP',
    'G2500|DN250|ALUMÍNIO|PN16': 'DS',
    // G1600 DN300
    'G1600|DN300|AÇO CARBONO|ANSI#150': 'CQ', 'G1600|DN300|AÇO CARBONO|ANSI#300': 'CR',
    'G1600|DN300|AÇO CARBONO|ANSI#600': 'CS', 'G1600|DN300|AÇO CARBONO|ANSI#900': 'CT',
    'G1600|DN300|ALUMÍNIO|PN16': 'DT',
    // G2500 DN300
    'G2500|DN300|AÇO CARBONO|ANSI#150': 'CU', 'G2500|DN300|AÇO CARBONO|ANSI#300': 'CV',
    'G2500|DN300|AÇO CARBONO|ANSI#600': 'CW', 'G2500|DN300|AÇO CARBONO|ANSI#900': 'CX',
    'G2500|DN300|ALUMÍNIO|PN16': 'DU',
    // G4000 DN300
    'G4000|DN300|AÇO CARBONO|ANSI#150': 'CY', 'G4000|DN300|AÇO CARBONO|ANSI#300': 'CZ',
    'G4000|DN300|AÇO CARBONO|ANSI#600': 'DA', 'G4000|DN300|AÇO CARBONO|ANSI#900': 'DB',
    'G4000|DN300|ALUMÍNIO|PN16': 'DV',
};

// ── Conexões (DN) disponíveis por designação ──────────────────────────────────
const TBQM_CONN_BY_DESIG = {
    'G40':   ['DN50'],
    'G65':   ['DN50'],
    'G100':  ['DN80'],
    'G160':  ['DN80','DN100'],
    'G250':  ['DN80','DN100'],
    'G400':  ['DN100','DN150'],
    'G650':  ['DN150','DN200'],
    'G1000': ['DN150','DN200','DN250'],
    'G1600': ['DN200','DN250','DN300'],
    'G2500': ['DN250','DN300'],
    'G4000': ['DN300'],
};

// ── Classes de pressão por material ───────────────────────────────────────────
const TBQM_CLASSE_BY_MAT = {
    'AÇO CARBONO': ['ANSI#150','ANSI#300','ANSI#600','ANSI#900'],
    'ALUMÍNIO':    ['PN16'],
};

// ── Defaults por designação ───────────────────────────────────────────────────
const TBQM_DESIG_DEFAULTS = {
    'G40':   { conexao: 'DN50',  range: 'A' },
    'G65':   { conexao: 'DN50',  range: 'A' },
    'G100':  { conexao: 'DN80',  range: 'B' },
    'G160':  { conexao: 'DN80',  range: 'B' },
    'G250':  { conexao: 'DN100', range: 'B' },
    'G400':  { conexao: 'DN100', range: 'B' },
    'G650':  { conexao: 'DN150', range: 'B' },
    'G1000': { conexao: 'DN200', range: 'B' },
    'G1600': { conexao: 'DN250', range: 'B' },
    'G2500': { conexao: 'DN300', range: 'B' },
    'G4000': { conexao: 'DN300', range: 'B' },
};

// ── Qmax por designação (m³/h) — fonte: TYL Catalog.pdf ─────────────────────
// Qmin é calculado: Qmax / turndown (range A=1:10, B=1:20)
const TBQM_FLOW_QMAX = {
    'G40':   65,    'G65':   100,   'G100':  160,
    'G160':  250,   'G250':  400,   'G400':  650,
    'G650':  1000,  'G1000': 1600,  'G1600': 2500,
    'G2500': 4000,  'G4000': 6500,
};

// ── Distância entre faces (mm) — tabela do catálogo TYL ──────────────────────
const TBQM_DIST_FACE = {
    'DN50':  150,
    'DN80':  240,
    'DN100': 300,
    'DN150': 450,
    'DN200': 600,
    'DN250': 750,
    'DN300': 900,
};

const TBQM_DIST_FACE_CODE = {
    150: 'A', 240: 'B', 300: 'C', 450: 'D', 600: 'E', 750: 'F', 900: 'G',
};

// ═══════════════════════════════════════════════════════════════
// Definição da família TBQM
// ═══════════════════════════════════════════════════════════════
const TBQM = {
    id: 'TBQM',
    name: 'TBQM — Turbina',
    prefix: '0T',

    defaults: {
        sensor: 'D',        // 1x LF 0x HF
        termopoco: '0',     // 0x TW
        cor: '0',           // Amarelo Padrão
        precisao: '1',      // CE 1% (fixo)
        range: 'A',         // 1:10
        especificos: 'A',   // Esq→Dir, Index Padrão
        material: 'AÇO CARBONO', // fixo
        classe: 'ANSI#150',
    },

    parameters: [
        {
            id: 'designacao',
            label: 'Designação',
            required: true,
            options: [
                { code: 'G40',   label: 'G40' },
                { code: 'G65',   label: 'G65' },
                { code: 'G100',  label: 'G100' },
                { code: 'G160',  label: 'G160' },
                { code: 'G250',  label: 'G250' },
                { code: 'G400',  label: 'G400' },
                { code: 'G650',  label: 'G650' },
                { code: 'G1000', label: 'G1000' },
                { code: 'G1600', label: 'G1600' },
                { code: 'G2500', label: 'G2500' },
                { code: 'G4000', label: 'G4000' },
            ],
        },
        {
            id: 'conexao',
            label: 'Conexão (DN)',
            required: true,
            getDynamicOptions(pv) {
                const dns = TBQM_CONN_BY_DESIG[pv.designacao] || [];
                return dns.map(d => ({ code: d, label: d }));
            },
        },
        {
            id: 'material',
            label: 'Material do Corpo',
            required: true,
            fixed: true,
            options: [
                { code: 'AÇO CARBONO', label: 'Aço Carbono' },
            ],
        },
        {
            id: 'classe',
            label: 'Classe de Pressão',
            required: true,
            getDynamicOptions(pv) {
                // Material sempre Aço Carbono → classes ANSI
                const classes = TBQM_CLASSE_BY_MAT['AÇO CARBONO'] || ['ANSI#150'];
                return classes.map(c => ({ code: c, label: c }));
            },
        },
        {
            id: 'precisao',
            label: 'Classe de Exatidão',
            required: true,
            fixed: true,
            options: [
                { code: '1', label: 'CE 1%' },
            ],
        },
        {
            id: 'sensor',
            label: 'Sensor (LF / HF)',
            required: true,
            options: [
                { code: 'A', label: '0x LF  0x HF' },
                { code: 'B', label: '0x LF  1x HF' },
                { code: 'C', label: '0x LF  2x HF' },
                { code: 'D', label: '1x LF  0x HF' },
                { code: 'E', label: '1x LF  1x HF' },
                { code: 'F', label: '1x LF  2x HF' },
                { code: 'G', label: '2x LF  0x HF' },
                { code: 'H', label: '2x LF  1x HF' },
                { code: 'I', label: '2x LF  2x HF' },
            ],
        },
        {
            id: 'termopoco',
            label: 'Termopoço',
            required: true,
            options: [
                { code: '0', label: '0x TW' },
                { code: '1', label: '1x TW' },
                { code: '2', label: '2x TW' },
            ],
        },
        {
            id: 'cor',
            label: 'Cor',
            required: true,
            options: [
                { code: '0', label: 'Amarelo Padrão' },
                { code: '1', label: 'Amarelo Petrobras' },
                { code: '2', label: 'Cinza RAL 7035' },
                { code: '3', label: 'Cinza Munsell 6.5' },
            ],
        },
        {
            id: 'range',
            label: 'Range de Medição',
            required: true,
            options: [
                { code: 'A', label: '1:10' },
                { code: 'B', label: '1:20' },
            ],
        },
        {
            id: 'especificos',
            label: 'Direção Fluxo / Index',
            required: true,
            options: [
                { code: 'A', label: 'Esq → Dir, Index Padrão' },
                { code: 'B', label: 'Esq → Dir, Index Padrão, EVC Supp.' },
                { code: 'C', label: 'Esq → Dir, Index Alumínio' },
                { code: 'D', label: 'Esq → Dir, Index Alumínio, EVC Supp.' },
                { code: 'E', label: 'Dir → Esq, Index Padrão' },
                { code: 'F', label: 'Dir → Esq, Index Padrão, EVC Supp.' },
                { code: 'G', label: 'Dir → Esq, Index Alumínio' },
                { code: 'H', label: 'Dir → Esq, Index Alumínio, EVC Supp.' },
            ],
        },
    ],

    optionals: [],

    // ── Callback: aplica defaults quando muda designação ──
    onParamChange(pv) {
        // Material sempre fixo em Aço Carbono
        pv.material = 'AÇO CARBONO';
        // Precisão sempre CE 1%
        pv.precisao = '1';
        // Default de classe se não selecionada
        if (!pv.classe) pv.classe = 'ANSI#150';

        const d = TBQM_DESIG_DEFAULTS[pv.designacao];
        if (d) {
            if (!pv.conexao || !(TBQM_CONN_BY_DESIG[pv.designacao] || []).includes(pv.conexao)) {
                pv.conexao = d.conexao;
            }
            if (!pv.range) pv.range = d.range;
        }
    },

    // ── Dist. Face helper (auto-calculado a partir do DN) ──
    getDistFace(pv) {
        return pv.conexao ? TBQM_DIST_FACE[pv.conexao] || '' : '';
    },

    // ── Faixa de vazão (Qmin–Qmax) baseada na designação e range ──
    getFlowRange(pv) {
        const qmax = TBQM_FLOW_QMAX[pv.designacao];
        if (!qmax) return null;
        const turndown = pv.range === 'B' ? 20 : 10;
        const qmin = qmax / turndown;
        return { qmin: String(qmin), qmax: String(qmax) };
    },

    // ── Geração do código: 0T + PREFIXO + PRECISAO + SENSOR + TW + COR + RANGE + DIST_FACE + ESPECIFICOS ──
    // Total: 2 + 2 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 11 chars
    buildCode(pv) {
        const key = `${pv.designacao}|${pv.conexao}|${pv.material}|${pv.classe}`;
        const prefixo = TBQM_PREFIXO[key] || '??';

        const distFace = TBQM_DIST_FACE[pv.conexao];
        const distCode = distFace ? (TBQM_DIST_FACE_CODE[distFace] || '?') : '?';

        return '0T'
            + prefixo
            + (pv.precisao  || '?')
            + (pv.sensor    || '?')
            + (pv.termopoco || '?')
            + (pv.cor       || '?')
            + (pv.range     || '?')
            + distCode
            + (pv.especificos || '?');
    },

    // ── Parse code (reverso) ──
    parseCode(raw) {
        if (!raw || raw.length !== 11 || !raw.startsWith('0T')) return null;
        const prefixo = raw.slice(2, 4);

        // Reverse lookup PREFIXO → designação, conexão, material, classe
        let desig = '', conn = '', mat = '', classe = '';
        for (const [key, val] of Object.entries(TBQM_PREFIXO)) {
            if (val === prefixo) {
                const parts = key.split('|');
                desig = parts[0]; conn = parts[1]; mat = parts[2]; classe = parts[3];
                break;
            }
        }
        if (!desig) return null;

        return {
            designacao: desig,
            conexao: conn,
            material: mat,
            classe: classe,
            precisao: raw[4],
            sensor: raw[5],
            termopoco: raw[6],
            cor: raw[7],
            range: raw[8],
            // raw[9] = dist_face (auto, ignorar)
            especificos: raw[10],
        };
    },

    // ── Mapeamento Excel — escrita direta na FOLHA DE DADOS IT1 ──
    populateExcel({ ws, set, setNum, getSheet, code, paramValues: pv, ex }) {
        const fd = getSheet('FOLHA DE DADOS IT1');
        if (!fd) { (typeof showToast === 'function' ? showToast : alert)('Aba FOLHA DE DADOS IT1 não encontrada.', false); return; }

        const s  = (addr, val) => set(addr, val, fd);
        const sn = (addr, val) => setNum(addr, val, fd);

        const rangeLabel = resolveLabel(TBQM, 'range', pv.range);
        const sensor     = parseSensor(resolveLabel(TBQM, 'sensor', pv.sensor));
        const termoLabel = TERMO_MAP[pv.termopoco] || '';
        const espec      = SENTIDO_MAP[pv.especificos] || {};
        const corLabel   = resolveLabel(TBQM, 'cor', pv.cor);
        const distFace   = TBQM_DIST_FACE[pv.conexao] || '';

        // ── Cabeçalho ──
        s('E2', ex.cliente || '');
        s('H1', ex.num_doc ? 'N° ' + ex.num_doc : '');

        // ── Identificação e características (col E) ──
        s('E5', code);
        s('H6',  ex.aplicacao || '');
        s('E7',  'TURBINA');
        s('E8',  pv.designacao || '');
        s('E9',  pv.conexao || '');
        s('H9',  'FLANGEADO RF ' + (pv.classe || 'ANSI#150'));
        s('E10', 'AÇO CARBONO');
        s('E11', pv.classe || 'ANSI#150');
        s('H11', 'PMAX 20 BAR');
        s('E12', 'CE 1%');
        s('E13', corLabel);
        s('E14', rangeLabel);
        sn('E15', distFace || '');
        s('E16', espec.fluxo || '');
        s('E17', espec.index || '');

        // ── Qmin - Qmax (row 18) ──
        const flowRange = TBQM.getFlowRange ? TBQM.getFlowRange(pv) : null;
        s('E18', flowRange ? flowRange.qmin + ' - ' + flowRange.qmax + ' m³/h' : '');

        // ── Sensores (col E) ──
        s('E20', sensor.lfFull);
        s('E21', sensor.hfFull || '');
        s('E22', termoLabel);

        // ── Condições de processo (col E/F/G/H) ──
        populateConditions(s, sn, ex, { val: 'E', val2: 'F', val3: 'G', unit: 'H' });

        // ── Notas ──
        s('B40', ex.notas || '');
    },

    pdfMappings: {
        tipo: 'Turbina',
        getGrauProtecao: () => 'IP 67',
        getTipoTransmissor: () => '',
        getSinalSaida: () => '',
        getAlimentacao: () => '',
        getConexaoEletrica: () => '',
        getMaterialCaixa: (pv) => pv.cor === '0' ? 'Amarelo Padrão' : '',
        getRevestimento: () => 'N/A',
        getMaterialFlange: (pv) => pv.material || '',
        getEletrodo: () => 'N/A',
        getCaixaSensor: () => '',
        getAtex: () => 'Ex-Zone 1',
        getConexaoProcesso: (pv) => pv.conexao || '',
    },
};
