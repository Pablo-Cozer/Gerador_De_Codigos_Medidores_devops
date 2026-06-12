// TYL — Medidor Rotativo de Gás
// Fonte: Codificação_Rot_Turb.xlsx (aba Rotativos) + TYL Catalog.pdf

// ── Lookup table: (designação, conexão) → PREFIXO de 2 caracteres ──────────
// Primeiro código de cada combinação única (duplicatas G40/G65/G100 DN50 removidas)
const TYL_PREFIXO = {
    // G6 (DN20–DN50)
    'G6|DN20':           'AA', 'G6|DN20 ROSCADO':    'AB',
    'G6|DN25':           'AC', 'G6|DN25 ROSCADO':    'AD',
    'G6|DN32':           'AE', 'G6|DN32 ROSCADO':    'AF',
    'G6|DN40':           'AG', 'G6|DN40 ROSCADO':    'AH',
    'G6|DN50':           'AI',
    // G10 (DN20–DN50)
    'G10|DN20':          'AJ', 'G10|DN20 ROSCADO':   'AK',
    'G10|DN25':          'AL', 'G10|DN25 ROSCADO':   'AM',
    'G10|DN32':          'AN', 'G10|DN32 ROSCADO':   'AO',
    'G10|DN40':          'AP', 'G10|DN40 ROSCADO':   'AQ',
    'G10|DN50':          'AR',
    // G16 (DN20–DN50)
    'G16|DN20':          'AS', 'G16|DN20 ROSCADO':   'AT',
    'G16|DN25':          'AU', 'G16|DN25 ROSCADO':   'AV',
    'G16|DN32':          'AW', 'G16|DN32 ROSCADO':   'AX',
    'G16|DN40':          'AY', 'G16|DN40 ROSCADO':   'AZ',
    'G16|DN50':          'BA',
    // G25 (DN20–DN50)
    'G25|DN20':          'BB', 'G25|DN20 ROSCADO':   'BC',
    'G25|DN25':          'BD', 'G25|DN25 ROSCADO':   'BE',
    'G25|DN32':          'BF', 'G25|DN32 ROSCADO':   'BG',
    'G25|DN40':          'BH', 'G25|DN40 ROSCADO':   'BI',
    'G25|DN50':          'BJ',
    // G40 (DN50)
    'G40|DN50':          'BK',
    // G65 (DN50)
    'G65|DN50':          'BN',
    // G100 (DN50, DN80–DN250)
    'G100|DN50':         'BQ',
    'G100|DN80':         'BT', 'G100|DN100':         'BU',
    'G100|DN150':        'BV', 'G100|DN200':         'BW',
    'G100|DN250':        'BX',
    // G160 (DN80–DN250)
    'G160|DN80':         'BY', 'G160|DN100':         'BZ',
    'G160|DN150':        'CA', 'G160|DN200':         'CB',
    'G160|DN250':        'CC',
    // G250 (DN80–DN250)
    'G250|DN80':         'CD', 'G250|DN100':         'CE',
    'G250|DN150':        'CF', 'G250|DN200':         'CG',
    'G250|DN250':        'CH',
    // G400 (DN80–DN250)
    'G400|DN80':         'CI', 'G400|DN100':         'CJ',
    'G400|DN150':        'CK', 'G400|DN200':         'CL',
    'G400|DN250':        'CM',
    // G650 (DN80–DN250)
    'G650|DN80':         'CN', 'G650|DN100':         'CO',
    'G650|DN150':        'CP', 'G650|DN200':         'CQ',
    'G650|DN250':        'CR',
};

// ── Conexões válidas por Designação ──────────────────────────────────────────
const TYL_CONN_BY_DESIG = {
    'G6':   ['DN20','DN20 ROSCADO','DN25','DN25 ROSCADO','DN32','DN32 ROSCADO','DN40','DN40 ROSCADO','DN50'],
    'G10':  ['DN20','DN20 ROSCADO','DN25','DN25 ROSCADO','DN32','DN32 ROSCADO','DN40','DN40 ROSCADO','DN50'],
    'G16':  ['DN20','DN20 ROSCADO','DN25','DN25 ROSCADO','DN32','DN32 ROSCADO','DN40','DN40 ROSCADO','DN50'],
    'G25':  ['DN20','DN20 ROSCADO','DN25','DN25 ROSCADO','DN32','DN32 ROSCADO','DN40','DN40 ROSCADO','DN50'],
    'G40':  ['DN50'],
    'G65':  ['DN50'],
    'G100': ['DN50','DN80','DN100'],
    'G160': ['DN80','DN100','DN150'],
    'G250': ['DN80','DN100','DN150','DN200','DN250'],
    'G400': ['DN80','DN100','DN150','DN200','DN250'],
    'G650': ['DN80','DN100','DN150','DN200','DN250'],
};

// ── Defaults por designação (conexão e range) ───────────────────────────────
const TYL_DESIG_DEFAULTS = {
    'G10':  { conexao: 'DN25 ROSCADO', range: 'D' },   // 1:40
    'G16':  { conexao: 'DN40 ROSCADO', range: 'E' },   // 1:50
    'G25':  { conexao: 'DN40 ROSCADO', range: 'F' },   // 1:80
    'G40':  { conexao: 'DN50',         range: 'H' },   // 1:130
    'G65':  { conexao: 'DN50',         range: 'J' },   // 1:200
    'G100': { conexao: 'DN80',  range: 'K' },             // 1:260
    'G160': { conexao: 'DN80',  range: 'K' },             // 1:260
    'G250': { conexao: 'DN100', range: 'J' },             // 1:200
    'G400': { conexao: 'DN100', range: 'J' },             // 1:200
    'G650': { conexao: 'DN150', range: 'G' },             // 1:100
};

// ── Distância entre faces automática (mm) — fonte: TYL Catalog.pdf, pág. 6 ──
// Mapeamento por (designação, DN) → distância face-a-face em mm
// Coluna L da tabela de dimensões (PN16 / ANSI#150)
const TYL_DIST_FACE = {
    // G6 não consta no catálogo — usa mesma do G10 (DN25=130mm)
    // Para DN20/DN32/DN40 roscados usa 130mm (padrão menor)
    'G6|DN20': 130,  'G6|DN20 ROSCADO': 130,
    'G6|DN25': 130,  'G6|DN25 ROSCADO': 130,
    'G6|DN32': 130,  'G6|DN32 ROSCADO': 130,
    'G6|DN40': 130,  'G6|DN40 ROSCADO': 130,
    'G6|DN50': 171,
    // G10 — DN25: L=130mm
    'G10|DN20': 130, 'G10|DN20 ROSCADO': 130,
    'G10|DN25': 130, 'G10|DN25 ROSCADO': 130,
    'G10|DN32': 130, 'G10|DN32 ROSCADO': 130,
    'G10|DN40': 130, 'G10|DN40 ROSCADO': 130,
    'G10|DN50': 171,
    // G16 — DN50: L=171mm
    'G16|DN20': 171, 'G16|DN20 ROSCADO': 171,
    'G16|DN25': 171, 'G16|DN25 ROSCADO': 171,
    'G16|DN32': 171, 'G16|DN32 ROSCADO': 171,
    'G16|DN40': 171, 'G16|DN40 ROSCADO': 171,
    'G16|DN50': 171,
    // G25 — DN50: L=171mm
    'G25|DN20': 171, 'G25|DN20 ROSCADO': 171,
    'G25|DN25': 171, 'G25|DN25 ROSCADO': 171,
    'G25|DN32': 171, 'G25|DN32 ROSCADO': 171,
    'G25|DN40': 171, 'G25|DN40 ROSCADO': 171,
    'G25|DN50': 171,
    // G40 — DN50: L=171mm
    'G40|DN50': 171,
    // G65 — DN50: L=171mm
    'G65|DN50': 171,
    // G100 — DN80: L=171mm, DN100+: L=241mm (G100 DN50 não consta, usa 171)
    'G100|DN50': 171,
    'G100|DN80': 171, 'G100|DN100': 241,
    'G100|DN150': 241, 'G100|DN200': 241, 'G100|DN250': 241,
    // G160 — DN80: L=241mm
    'G160|DN80': 241, 'G160|DN100': 241,
    'G160|DN150': 241, 'G160|DN200': 241, 'G160|DN250': 241,
    // G250 — DN100: L=241mm
    'G250|DN80': 241, 'G250|DN100': 241,
    'G250|DN150': 241, 'G250|DN200': 241, 'G250|DN250': 241,
    // G400 — DN100: L=241mm, DN150: L=450mm
    'G400|DN80': 241, 'G400|DN100': 241,
    'G400|DN150': 450, 'G400|DN200': 450, 'G400|DN250': 450,
    // G650 — DN150: L=450mm
    'G650|DN80': 450, 'G650|DN100': 450,
    'G650|DN150': 450, 'G650|DN200': 450, 'G650|DN250': 450,
};

// ── Faixa de vazão por designação (m³/h) — fonte: TYL Catalog.pdf, pág. 5 ──
// Chave: designação ou designação|DN (para casos onde o Qmín difere por DN)
const TYL_FLOW_RANGE = {
    // G6 — não consta no catálogo; estimado pela proporção G10
    'G6':          { qmin: 0.25, qmax: 10  },
    // G10 — DN25: 0.4–16 m³/h, rangeabilidade 1:40
    'G10':         { qmin: 0.4,  qmax: 16  },
    // G16 — 0.5–25 m³/h, rangeabilidade 1:50
    'G16':         { qmin: 0.5,  qmax: 25  },
    // G25 — 0.5–40 m³/h, rangeabilidade 1:80
    'G25':         { qmin: 0.5,  qmax: 40  },
    // G40 — 0.5–65 m³/h, rangeabilidade 1:130
    'G40':         { qmin: 0.5,  qmax: 65  },
    // G65 — 0.5–100 m³/h, rangeabilidade 1:200
    'G65':         { qmin: 0.5,  qmax: 100 },
    // G100 — DN80: 0.65–160 m³/h, rangeabilidade 1:250
    'G100':        { qmin: 0.65, qmax: 160 },
    // G160 — 1.6–250 m³/h (DN80 e DN100 têm os mesmos valores), rangeabilidade 1:160
    'G160':        { qmin: 1.6,  qmax: 250 },
    // G250 — 2.0–400 m³/h, rangeabilidade 1:200
    'G250':        { qmin: 2.0,  qmax: 400 },
    // G400 — Qmín difere por DN (3.2 para DN≤100, 6.5 para DN≥150)
    'G400|DN80':   { qmin: 3.2,  qmax: 650 },
    'G400|DN100':  { qmin: 3.2,  qmax: 650 },
    'G400|DN150':  { qmin: 6.5,  qmax: 650 },
    'G400|DN200':  { qmin: 6.5,  qmax: 650 },
    'G400|DN250':  { qmin: 6.5,  qmax: 650 },
    // G650 — 10–1000 m³/h, rangeabilidade 1:100
    'G650':        { qmin: 10.0, qmax: 1000 },
};

// ── Código da distância face → tabela da planilha ───────────────────────────
// Valores extraídos da aba Rotativos: 121→A, 171→B, 241→C, 450→D
const TYL_DIST_FACE_CODE = {
    121: 'A',
    130: 'A',   // G10 DN25 = 130mm, código A (mais próximo de 121)
    171: 'B',
    241: 'C',
    450: 'D',
    600: 'D',   // G1000 (futuro) — fallback
};

const TYL = {
    id: 'TYL',
    name: 'TYL — Rotativo',
    prefix: '0R',

    // Valores padrão pré-selecionados
    defaults: {
        precisao:    '1',     // CE 1%
        sensor:      'C',     // 1x LF 0x HF
        termopoco:   '0',     // 0x TW
        range:       'G',     // 1:100 (sobrescrito por TYL_DESIG_DEFAULTS quando designação é selecionada)
        especificos: 'A',     // Esq→Dir, Index Padrão, S/ Suporte
    },

    // Callback: quando um parâmetro muda, aplica defaults dependentes da designação
    onParamChange(pv) {
        const dd = TYL_DESIG_DEFAULTS[pv.designacao];
        if (!dd) return;
        const validConns = TYL_CONN_BY_DESIG[pv.designacao] || [];
        // Ao trocar designação, preenche range default se ainda não setado
        if (dd.range && !pv.range) pv.range = dd.range;
        // Reseta conexão se não setada OU se a atual não é válida para a nova designação
        if (dd.conexao && (!pv.conexao || !validConns.includes(pv.conexao))) pv.conexao = dd.conexao;
    },

    // ── buildCode customizado — o Rotativo não segue a lógica linear do TEF/TCF ──
    // Estrutura: 0R + [prefixo 2L] + [CE] + [sensor] + [TW] + [COR] + [range] + [dist] + [dir]
    buildCode(paramValues) {
        const desig   = paramValues.designacao;
        const conn    = paramValues.conexao;
        const sensor  = paramValues.sensor;
        const termo   = paramValues.termopoco;
        const range   = paramValues.range;
        const espec   = paramValues.especificos;
        const ce      = paramValues.precisao || '1';
        const cor     = '0'; // fixo: Alumínio Anodizado (única opção)

        const key     = desig && conn ? (desig + '|' + conn) : null;
        const prefixo = key ? TYL_PREFIXO[key] : null;
        const distMm  = key ? TYL_DIST_FACE[key] : null;
        const distCode = distMm ? (TYL_DIST_FACE_CODE[distMm] || '?') : '?';

        return '0R' + (prefixo || '??') + ce + (sensor || '?') + (termo || '?') + cor + (range || '?') + distCode + (espec || '?');
    },

    // Retorna a distância face-a-face em mm para exibição no resumo
    getDistFace(paramValues) {
        const key = paramValues.designacao && paramValues.conexao
            ? (paramValues.designacao + '|' + paramValues.conexao)
            : null;
        return key ? (TYL_DIST_FACE[key] || null) : null;
    },

    // Retorna { qmin, qmax } em m³/h — qmin calculado a partir do range selecionado
    getFlowRange(paramValues) {
        const desig = paramValues.designacao;
        if (!desig) return null;
        const dn = (paramValues.conexao || '').replace(' ROSCADO', '');
        const spec = TYL_FLOW_RANGE[desig + '|' + dn] || TYL_FLOW_RANGE[desig] || null;
        if (!spec) return null;
        const ratios = { A:10, B:20, C:30, D:40, E:50, F:80, G:100, H:130, I:160, J:200, K:260 };
        const ratio = ratios[paramValues.range];
        if (ratio) return { qmin: +(spec.qmax / ratio).toFixed(2), qmax: spec.qmax };
        return spec;
    },

    parameters: [
        {
            id: 'designacao',
            label: 'Designação (Tamanho)',
            required: true,
            options: [
                { code: 'G6',   label: 'G6' },
                { code: 'G10',  label: 'G10' },
                { code: 'G16',  label: 'G16' },
                { code: 'G25',  label: 'G25' },
                { code: 'G40',  label: 'G40' },
                { code: 'G65',  label: 'G65' },
                { code: 'G100', label: 'G100' },
                { code: 'G160', label: 'G160' },
                { code: 'G250', label: 'G250' },
                { code: 'G400', label: 'G400' },
                { code: 'G650', label: 'G650' },
            ],
        },
        {
            id: 'conexao',
            label: 'Conexão / Rosca',
            required: true,
            getDynamicOptions: (pv) => {
                const conns = TYL_CONN_BY_DESIG[pv.designacao] || [];
                return conns.map(c => ({ code: c, label: c }));
            },
        },
        {
            id: 'precisao',
            label: 'Classe de Exatidão',
            required: true,
            options: [
                { code: '0', label: 'CE 0,5%' },
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
                { code: 'C', label: '1x LF  0x HF' },
                { code: 'D', label: '1x LF  1x HF' },
                { code: 'E', label: '1x LF  2x HF' },
                { code: 'F', label: '2x LF  0x HF' },
                { code: 'G', label: '2x LF  1x HF' },
            ],
        },
        {
            id: 'termopoco',
            label: 'Termopoço',
            required: true,
            options: [
                { code: '0', label: '0x (Sem)' },
                { code: '1', label: '1x' },
            ],
        },
        {
            id: 'range',
            label: 'Range (Faixa)',
            required: true,
            options: [
                { code: 'A', label: '1:10' },
                { code: 'B', label: '1:20' },
                { code: 'C', label: '1:30' },
                { code: 'D', label: '1:40' },
                { code: 'E', label: '1:50' },
                { code: 'F', label: '1:80' },
                { code: 'G', label: '1:100' },
                { code: 'H', label: '1:130' },
                { code: 'I', label: '1:160' },
                { code: 'J', label: '1:200' },
                { code: 'K', label: '1:260' },
            ],
        },
        {
            id: 'especificos',
            label: 'Sentido / Index / Suporte EVC',
            required: true,
            options: [
                { code: 'A', label: 'Esq → Dir, Index Padrão, S/ Suporte' },
                { code: 'B', label: 'Esq → Dir, Index Padrão, C/ Suporte' },
                { code: 'C', label: 'Esq → Dir, Index Alumínio, S/ Suporte' },
                { code: 'D', label: 'Esq → Dir, Index Alumínio, C/ Suporte' },
                { code: 'E', label: 'Dir → Esq, Index Padrão, S/ Suporte' },
                { code: 'F', label: 'Dir → Esq, Index Padrão, C/ Suporte' },
                { code: 'G', label: 'Dir → Esq, Index Alumínio, S/ Suporte' },
                { code: 'H', label: 'Dir → Esq, Index Alumínio, C/ Suporte' },
            ],
        },
    ],

    optionals: [],

    // ── Mapeamento Excel — escrita direta na FOLHA DE DADOS IT1 ──
    // Template v2: sem aba ORÇAMENTO, todos os campos #REF! são preenchidos aqui
    populateExcel({ ws, set, setNum, getSheet, code, paramValues: pv, ex }) {
        const fd = getSheet('FOLHA DE DADOS IT1');
        if (!fd) { (typeof showToast === 'function' ? showToast : alert)('Aba FOLHA DE DADOS IT1 não encontrada.', false); return; }

        const s  = (addr, val) => set(addr, val, fd);
        const sn = (addr, val) => setNum(addr, val, fd);

        const rangeLabel = resolveLabel(TYL, 'range', pv.range);
        const sensor     = parseSensor(resolveLabel(TYL, 'sensor', pv.sensor));
        const termoLabel = TERMO_MAP[pv.termopoco] || '';
        const espec      = SENTIDO_MAP[pv.especificos] || {};
        const ceLabel    = pv.precisao === '0' ? 'CE 0,5%' : 'CE 1%';
        const connPure   = (pv.conexao || '').replace(' ROSCADO', '');
        const key        = pv.designacao && pv.conexao ? (pv.designacao + '|' + pv.conexao) : null;
        const distFace   = key ? TYL_DIST_FACE[key] : '';

        // ── Cabeçalho ──
        s('E2', ex.cliente || '');
        s('H1', ex.num_doc ? 'N° ' + ex.num_doc : '');

        // ── Identificação e características (col E) ──
        s('E5',  code);
        s('H6',  ex.aplicacao || '');
        s('E7',  'ROTATIVO');
        s('E8',  pv.designacao || '');
        s('E9',  connPure);
        s('H9',  'FLANGEADO RF ANSI#150');
        s('E10', 'ALUMÍNIO');
        s('E11', 'ANSI#150');
        s('H11', 'PMAX 20 BAR');
        s('E12', ceLabel);
        s('E13', 'ALUMÍNIO ANODIZADO');
        s('E14', rangeLabel);
        sn('E15', distFace || '');
        s('E16', espec.fluxo || '');
        s('E17', espec.index || '');

        // ── Qmin - Qmax (row 18) ──
        const flowRange = TYL.getFlowRange ? TYL.getFlowRange(pv) : null;
        s('E18', flowRange ? flowRange.qmin + ' - ' + flowRange.qmax + ' m³/h' : '');

        // ── Sensores ──
        s('E20', sensor.lfFull);
        s('E21', sensor.hfFull || '');
        s('E22', termoLabel);

        // ── Condições de processo ──
        populateConditions(s, sn, ex, { val: 'E', val2: 'F', val3: 'G', unit: 'H' });

        // ── Notas ──
        s('B40', ex.notas || '');
    },

    pdfMappings: {
        tipo: 'Rotativo',
        getGrauProtecao: () => 'IP 67',
        getTipoTransmissor: () => '',
        getSinalSaida: () => '',
        getAlimentacao: () => '',
        getConexaoEletrica: () => '',
        getMaterialCaixa: () => 'Alumínio Anodizado',
        getRevestimento: () => 'N/A',
        getMaterialFlange: () => 'Alumínio',
        getEletrodo: () => 'N/A',
        getCaixaSensor: () => '',
        getAtex: () => 'Ex-Zone 1',
        getConexaoProcesso: (pv) => pv.conexao || '',
    },
};
