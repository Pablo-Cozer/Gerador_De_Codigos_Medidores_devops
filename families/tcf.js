// TCF — Coriolis Mass Flowmeter
// Tancy Instrument Group Co., Ltd.

// Conexões de processo por DN (códigos de 3 chars)
const TCF_FLANGES_BY_DN = {
    '008': [{ code: 'YYY', label: 'Special Connection' }],
    '015': [
        { code: '053', label: 'EN1092-1 PN40 RF' },
        { code: '054', label: 'EN1092-1 PN63 RF' },
        { code: '055', label: 'EN1092-1 PN100 RF' },
        { code: '056', label: 'ANSI 1/2" Class 150 RF' },
        { code: '057', label: 'ANSI 1/2" Class 300 RF' },
        { code: '058', label: 'ANSI 1/2" Class 600 RF' },
        { code: 'YYY', label: 'Special Connection' },
    ],
    '025': [
        { code: '103', label: 'EN1092-1 PN40 RF' },
        { code: '104', label: 'EN1092-1 PN63 RF' },
        { code: '105', label: 'EN1092-1 PN100 RF' },
        { code: '106', label: 'ANSI 1" Class 150 RF' },
        { code: '107', label: 'ANSI 1" Class 300 RF' },
        { code: '108', label: 'ANSI 1" Class 600 RF' },
        { code: 'YYY', label: 'Special Connection' },
    ],
    '050': [
        { code: '203', label: 'EN1092-1 PN40 RF' },
        { code: '204', label: 'EN1092-1 PN63 RF' },
        { code: '205', label: 'EN1092-1 PN100 RF' },
        { code: '206', label: 'ANSI 2" Class 150 RF' },
        { code: '207', label: 'ANSI 2" Class 300 RF' },
        { code: '208', label: 'ANSI 2" Class 600 RF' },
        { code: 'YYY', label: 'Special Connection' },
    ],
    '080': [
        { code: '301', label: 'EN1092-1 PN16 RF' },
        { code: '303', label: 'EN1092-1 PN40 RF' },
        { code: '304', label: 'EN1092-1 PN63 RF' },
        { code: '305', label: 'EN1092-1 PN100 RF' },
        { code: '306', label: 'ANSI 3" Class 150 RF' },
        { code: '307', label: 'ANSI 3" Class 300 RF' },
        { code: '308', label: 'ANSI 3" Class 600 RF' },
        { code: 'YYY', label: 'Special Connection' },
    ],
    '100': [
        { code: '401', label: 'EN1092-1 PN16 RF' },
        { code: '403', label: 'EN1092-1 PN40 RF' },
        { code: '404', label: 'EN1092-1 PN63 RF' },
        { code: '405', label: 'EN1092-1 PN100 RF' },
        { code: '406', label: 'ANSI 4" Class 150 RF' },
        { code: '407', label: 'ANSI 4" Class 300 RF' },
        { code: '408', label: 'ANSI 4" Class 600 RF' },
        { code: 'YYY', label: 'Special Connection' },
    ],
    '150': [
        { code: '601', label: 'EN1092-1 PN16 RF' },
        { code: '603', label: 'EN1092-1 PN40 RF' },
        { code: '604', label: 'EN1092-1 PN63 RF' },
        { code: '605', label: 'EN1092-1 PN100 RF' },
        { code: '606', label: 'ANSI 6" Class 150 RF' },
        { code: '607', label: 'ANSI 6" Class 300 RF' },
        { code: '608', label: 'ANSI 6" Class 600 RF' },
        { code: 'YYY', label: 'Special Connection' },
    ],
    '250': [
        { code: 'A01', label: 'EN1092-1 PN16 RF' },
        { code: 'A03', label: 'EN1092-1 PN40 RF' },
        { code: 'A04', label: 'EN1092-1 PN63 RF' },
        { code: 'A05', label: 'EN1092-1 PN100 RF' },
        { code: 'A06', label: 'ANSI 10" Class 150 RF' },
        { code: 'A07', label: 'ANSI 10" Class 300 RF' },
        { code: 'A08', label: 'ANSI 10" Class 600 RF' },
        { code: 'YYY', label: 'Special Connection' },
    ],
};

// Distância Face a Face (dimensão L em mm)
// Baseado nas Tabelas 1 (Integrado) e 2 (Remoto). As dimensões 'L' são idênticas.
const TCF_FACE_DIMS = {
    // DN25
    '103': 440, '104': 470, '105': 470, '106': 440, '107': 470, '108': 490, 
    // DN50
    '203': 715, '204': 760, '205': 760, '206': 715, '207': 760, '208': 760, 
    // DN80
    '301': 920, '303': 920, '304': 960, '305': 960, '306': 920, '307': 960, '308': 960, 
    // DN100
    '401': 1334, '403': 1360, '404': 1386, '405': 1410, '406': 1384, '407': 1402, '408': 1448, 
    // DN150
    '601': 1194, '603': 1234, '604': 1274, '605': 1314, '606': 1262, '607': 1282, '608': 1332, 
};

const TCF_FACE_BY_CONN = {
    INTEGRATED: TCF_FACE_DIMS, // Modelos U e C (Compacto/Integrado)
    REMOTE: TCF_FACE_DIMS      // Modelo R (Remoto)
};

// ── Faixas de vazão para LÍQUIDO por DN (kg/h) ──────────────────────────────
// Fonte: datasheet TCF seção 2.2 — Liquid measuring range
// Para GÁS: ṁg = a * ρg * c * (π/2) * d²  (seção 2.3) — depende de condições de processo
const TCF_FLOW_LIQUID = {
    '025': { qmin: '450',   qmax: '18000',  zeroStab: '0,45' },
    '050': { qmin: '2000',  qmax: '80000',  zeroStab: '2'    },
    '080': { qmin: '4000',  qmax: '200000', zeroStab: '5'    },
    '100': { qmin: '12000', qmax: '480000', zeroStab: '12'   },
    '150': { qmin: '20000', qmax: '800000', zeroStab: '20'   },
};

const TCF = {
    id: 'TCF',
    name: 'TCF \u2014 Coriolis',
    prefix: 'TCF',

    // ── Chamado pelo app.js após qualquer mudança de parâmetro obrigatório ───
    onParamChange(paramValues) {
        const conn = paramValues.process_conn;
        const txType = paramValues.transmitter_type;
        if (!txType) return;

        const faceEl = document.getElementById('pdf-face');
        if (!faceEl) return;

        // Se o usuário ainda não escolheu a conexão de processo (ou mudou o DN e ela foi limpa)
        if (!conn) {
            if (faceEl.dataset.auto === '1') {
                faceEl.value = '';
                faceEl.placeholder = 'Aguardando Conexão...';
            }
            return;
        }

        // Se já escolheu a conexão, preenche a distância Face a Face correspondente da tabela
        if (!faceEl.value || faceEl.dataset.auto === '1') {
            const mapType = txType === 'R' ? 'REMOTE' : 'INTEGRATED';
            const L = TCF_FACE_BY_CONN[mapType]?.[conn];
            if (L !== undefined) {
                faceEl.value = L;
                faceEl.dataset.auto = '1';
                faceEl.placeholder = 'Auto';
            } else {
                faceEl.value = '';
                faceEl.placeholder = 'N/A na Tabela';
            }
        }
    },

    // ── Retorna defaults por DN e estado do fluido ───────────────────────────
    // Chamado por autofillDnDefaults() em app.js.
    // Para LÍQUIDO: valores da tabela TCF_FLOW_LIQUID (seção 2.2 do datasheet).
    // Para GÁS/VAPOR: vazão depende da fórmula da seção 2.3 — retorna flags isGas=true.
    getDnDefaults(dn, estado) {
        const dnKey = String(dn).padStart(3, '0');
        const estadoUp = (estado || '').toUpperCase();
        const isGas = estadoUp.includes('G\u00c1S') || estadoUp.includes('GAS')
                   || estadoUp.includes('VAPOR') || estadoUp.includes('VAP');

        const dnNum = parseInt(dnKey);

        if (isGas) {
            // Para gás a vazão máxima é calculada pela fórmula:
            //   ṁg = a * ρg * c * (π/2) * d²
            // Não há valor fixo — o usuário precisa calcular e preencher.
            return {
                qmin: '',
                qmax: '',
                nps: 'DN' + dnNum,
                unit: 'kg/h',
                isGas: true,
                designacao: 'TCF' + dnKey,
            };
        }

        // Líquido: usar tabela TCF_FLOW_LIQUID
        const flow = TCF_FLOW_LIQUID[dnKey];
        if (!flow) return null;

        return {
            qmin: flow.qmin,
            qmax: flow.qmax,
            nps: 'DN' + dnNum,
            unit: 'kg/h',
            zeroStability: flow.zeroStab,
            designacao: 'TCF' + dnKey,
        };
    },

    // Valores padrão pré-selecionados para configuração rápida
    defaults: {
        transmitter_type: 'C',       // Compacto
        ex_approval:      '00',      // Área Não Perigosa
        precision:        '1',       // 0,2% o.r.
        transmitter_housing: '1',    // Alumínio
        electrical_conn:  'M',       // ISO M20×1,5
        power_supply:     'D',       // 24 V CC
        output2:          '1',       // Nenhuma
        io3:              '1',       // Nenhuma
        process_temp:     'U',       // -40°C ~ +204°C
        sensor_material:  'S',       // Inox 316L
    },
    optionalDefaults: {
        language:         '01',      // Inglês
    },

    parameters: [
        {
            id: 'modelo',
            label: 'Modelo',
            required: true,
            fixed: true,
            options: [{ code: 'U', label: 'Model Ultimate' }],
        },
        {
            id: 'transmitter_type',
            label: 'Tipo de Transmissor',
            required: true,
            options: [
                { code: 'C', label: 'Compacto (Integral)' },
                { code: 'R', label: 'Remoto' },
            ],
        },
        {
            id: 'dn',
            label: 'Di\u00e2metro Nominal (DN)',
            required: true,
            options: [
                { code: '008', label: 'DN08' },
                { code: '015', label: 'DN15' },
                { code: '025', label: 'DN25' },
                { code: '050', label: 'DN50' },
                { code: '080', label: 'DN80' },
                { code: '100', label: 'DN100' },
                { code: '150', label: 'DN150' },
                { code: '250', label: 'DN250' },
            ],
        },
        {
            id: 'ex_approval',
            label: 'Aprova\u00e7\u00e3o Ex',
            required: true,
            options: [
                { code: '00', label: '\u00c1rea N\u00e3o Perigosa' },
                { code: 'AA', label: 'NEPSI Ex db ib IIC T1...T6 Gb' },
            ],
        },
        {
            id: 'precision',
            label: 'Precis\u00e3o',
            required: true,
            options: [
                { code: '1', label: '0,2% o.r.' },
                { code: '2', label: '0,15% o.r.' },
                { code: '3', label: '0,1% o.r.' },
            ],
        },
        {
            id: 'transmitter_housing',
            label: 'Invólucro',
            required: true,
            options: [
                { code: '1', label: 'Alum\u00ednio' },
                { code: '2', label: 'Inox 316L' },
                { code: 'Y', label: 'Especial' },
            ],
        },
        {
            id: 'electrical_conn',
            label: 'Conex\u00e3o El\u00e9trica',
            required: true,
            options: [
                { code: 'N', label: 'ANSI 1/2 NPT' },
                { code: 'M', label: 'ISO M20\u00d71,5' },
                { code: 'Y', label: 'Especial' },
            ],
        },
        {
            id: 'power_supply',
            label: 'Fonte de Alimenta\u00e7\u00e3o',
            required: true,
            options: [
                { code: 'D', label: '24 V CC' },
                { code: 'A', label: '220 V CA' },
                { code: 'S', label: 'Auto-Ajust\u00e1vel' },
                { code: 'Y', label: 'Especial' },
            ],
        },
        {
            id: 'output1',
            label: 'Sa\u00edda 1',
            required: true,
            fixed: true,
            options: [
                { code: '1', label: '4-20 mA HART + Freq./Pulso + MODBUS RS485' },
            ],
        },
        {
            id: 'output2',
            label: 'Sa\u00edda 2',
            required: true,
            options: [
                { code: '1', label: 'Nenhuma' },
                { code: '2', label: '4-20 mA Ativa' },
                { code: '3', label: '4-20 mA Passiva' },
            ],
        },
        {
            id: 'io3',
            label: 'Entrada/Sa\u00edda 3',
            required: true,
            options: [
                { code: '1', label: 'Nenhuma' },
                { code: '2', label: '4-20 mA Entrada Ativa' },
                { code: '3', label: '4-20 mA Entrada Passiva' },
            ],
        },
        {
            id: 'process_temp',
            label: 'Temperatura do Processo',
            required: true,
            options: [
                { code: 'U', label: '-40\u00b0C a +204\u00b0C' },
                { code: 'Y', label: 'Especial' },
            ],
        },
        {
            id: 'sensor_material',
            label: 'Material do Sensor (Tubo)',
            required: true,
            options: [
                { code: 'S', label: 'Inox 316L' },
                { code: 'H', label: 'Alloy C22' },
                { code: 'Y', label: 'Especial' },
            ],
        },
        {
            id: 'process_conn',
            label: 'Conex\u00e3o do Processo',
            required: true,
            // Opções dinâmicas: dependem do DN selecionado
            getDynamicOptions: (pv) => TCF_FLANGES_BY_DN[pv.dn] || [],
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
                { code: 'L25', label: '25 metros' },
            ],
        },
        {
            id: 'language',
            label: 'Idioma',
            options: [
                { code: '01', label: 'Ingl\u00eas' },
            ],
        },
        {
            id: 'custom_param',
            label: 'Par\u00e2metros Personalizados',
            options: [
                { code: 'SS', label: 'Especificado pelo Cliente' },
            ],
        },
        {
            id: 'advanced_diag',
            label: 'Diagn\u00f3stico Avan\u00e7ado',
            options: [
                { code: 'A1', label: 'Sim' },
            ],
        },
        {
            id: 'flow_calibration',
            label: 'Calibra\u00e7\u00e3o de Vaz\u00e3o',
            options: [
                { code: 'C1', label: 'Personalizada 3 pontos' },
                { code: 'C2', label: 'Personalizada 5 pontos' },
                { code: 'C3', label: 'IEC/ISO 17025 \u2014 3 pts (pontos padr\u00e3o)' },
                { code: 'C4', label: 'IEC/ISO 17025 \u2014 3 pts (pontos personalizados)' },
                { code: 'C5', label: 'IEC/ISO 17025 \u2014 5 pts (pontos personalizados)' },
                { code: 'CY', label: 'Especial' },
            ],
        },
        {
            id: 'density_calibration',
            label: 'Calibra\u00e7\u00e3o de Densidade',
            options: [
                { code: 'CA', label: '0,0005 g/cc' },
                { code: 'CZ', label: 'Especial' },
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
            id: 'custody_transfer',
            label: 'Transfer\u00eancia de Cust\u00f3dia',
            options: [
                { code: 'O2', label: 'OIML R117' },
            ],
        },
        {
            id: 'sil',
            label: 'Seguran\u00e7a SIL',
            options: [
                { code: 'S2', label: 'SIL2' },
            ],
        },
        {
            id: 'maritime_cert',
            label: 'Certificado Mar\u00edtimo',
            options: [
                { code: 'MC', label: 'CCS' },
                { code: 'MD', label: 'DNV' },
            ],
        },
        {
            id: 'cleaning',
            label: 'Limpeza',
            options: [
                { code: 'SG', label: 'Oil & Grease Free' },
            ],
        },
        {
            id: 'pressure_test',
            label: 'Teste de Press\u00e3o',
            options: [
                { code: 'P1', label: 'Teste Hidrost\u00e1tico' },
            ],
        },
        {
            id: 'penetrant_test',
            label: 'Ensaio por Penetrante',
            options: [
                { code: 'D1', label: 'Sim' },
            ],
        },
        {
            id: 'xray_test',
            label: 'Ensaio por Raio-X',
            options: [
                { code: 'X1', label: 'Sim' },
            ],
        },
        {
            id: 'pmi_test',
            label: 'PMI (Identifica\u00e7\u00e3o de Material)',
            options: [
                { code: 'PM', label: 'Sim' },
            ],
        },
        {
            id: 'heat_jacket',
            label: 'Jaqueta de Aquecimento',
            options: [
                { code: 'J1', label: 'Semi Jaqueta' },
                { code: 'J2', label: 'Jaqueta Completa' },
            ],
        },
        {
            id: 'nameplate',
            label: 'Placa de Identifica\u00e7\u00e3o',
            options: [
                { code: 'Z1', label: 'Campo personalizado na placa' },
                { code: 'Z2', label: 'Tag em Inox' },
            ],
        },
    ],

    pdfMappings: {
        tipo: 'M\u00e1ssico Coriolis',
        getGrauProtecao: () => 'IP66/67',
        getTipoTransmissor: (params) => {
            const m = { 'U': 'Ultimate', 'C': 'VERS\u00c3O COMPACTA', 'R': 'VERS\u00c3O REMOTA' };
            return m[params.transmitter_type] || '';
        },
        getSinalSaida: () => '4-20 mA + HART + FREQ/PULSO + RS485',
        getAlimentacao: (params) => {
            const m = { 'D': '24 V CC', 'A': '220 V CA', 'S': 'Auto-Ajust\u00e1vel', 'Y': 'Especial' };
            return m[params.power_supply] || '';
        },
        getConexaoEletrica: (params) => {
            const m = { 'N': 'ANSI 1/2 NPT', 'M': 'ISO M20\u00d71,5', 'Y': 'Especial' };
            return m[params.electrical_conn] || '';
        },
        getMaterialCaixa: (params) => {
            const m = { '1': 'Alum\u00ednio', '2': 'Inox 316L', 'Y': 'Especial' };
            return m[params.transmitter_housing] || '';
        },
        getRevestimento: () => 'N/A',
        getMaterialFlange: (params) => {
            const all = Object.values(TCF_FLANGES_BY_DN).flat();
            const opt = all.find(o => o.code === params.process_conn);
            return opt ? opt.label : '';
        },
        getEletrodo: () => 'N/A (Coriolis)',
        getCaixaSensor: (params) => {
            const m = { 'S': 'Inox 316L', 'H': 'Alloy C22', 'Y': 'Especial' };
            return m[params.sensor_material] || '';
        },
        getAtex: (params) => params.ex_approval === 'AA'
            ? 'NEPSI Ex db ib IIC T1...T6 Gb'
            : '\u00c1rea N\u00e3o Perigosa',
        getConexaoProcesso: (params) => {
            if (params.process_conn === 'YYY') return params.process_conn_custom || 'Especial / Sob Consulta';
            const all = Object.values(TCF_FLANGES_BY_DN).flat();
            const opt = all.find(o => o.code === params.process_conn);
            return opt ? opt.label : '';
        },
        getClassePressao: (params) => {
            const conn = params.process_conn || '';
            if (conn.endsWith('1')) return 'PN16';
            if (conn.endsWith('3')) return 'PN40';
            if (conn.endsWith('4')) return 'PN63';
            if (conn.endsWith('5')) return 'PN100';
            if (conn.endsWith('6')) return 'Class 150';
            if (conn.endsWith('7')) return 'Class 300';
            if (conn.endsWith('8')) return 'Class 600';
            return '';
        },
        getClassePrecisao: (params, estado) => {
            const estadoUp = (estado || '').toUpperCase();
            const isGas = estadoUp.includes('GÁS') || estadoUp.includes('GAS')
                       || estadoUp.includes('VAPOR') || estadoUp.includes('VAP');
            if (isGas) return '0,35% (Gás)';
            const m = { '1': '0,2%', '2': '0,15%', '3': '0,1%' };
            return m[params.precision] || '';
        },
        getFluxoCalibr: (optionals) => {
            if (!optionals.flow_calibration) return 'Padr\u00e3o';
            const m = {
                'C1': 'Personalizada 3 pontos',
                'C2': 'Personalizada 5 pontos',
                'C3': 'IEC/ISO 17025 \u2014 3 pts',
                'C4': 'IEC/ISO 17025 \u2014 3 pts (Custom)',
                'C5': 'IEC/ISO 17025 \u2014 5 pts (Custom)',
                'CY': 'Especial',
            };
            return m[optionals.flow_calibration] || 'Padr\u00e3o';
        },
        getTestePressao: (optionals) => optionals.pressure_test === 'P1' ? 'Teste Hidrost\u00e1tico' : 'Padr\u00e3o',
        getRepetibilidade: () => '0,05%',
        getTempMedia: (params) => {
            const m = { 'U': '-40\u00b0C a +204\u00b0C', 'Y': 'Especial' };
            return m[params.process_temp] || '';
        },
        getPlacaId: (optionals) => {
            if (!optionals.nameplate) return 'PADR\u00c3O';
            const m = { 'Z1': 'Campo Personalizado', 'Z2': 'Tag em Inox' };
            return m[optionals.nameplate] || 'PADR\u00c3O';
        },
        getDensidadeCalibr: (optionals) => {
            if (!optionals.density_calibration) return 'PADR\u00c3O';
            const m = { 'CA': '0,0005 g/cc', 'CZ': 'Especial' };
            return m[optionals.density_calibration] || 'PADR\u00c3O';
        },
        // Retorna estabilidade zero baseada no DN (somente para líquido)
        getEstabilidadeZero: (params, estado) => {
            const dnKey = String(params.dn || '').padStart(3, '0');
            const estadoUp = (estado || '').toUpperCase();
            const isGas = estadoUp.includes('G\u00c1S') || estadoUp.includes('GAS')
                       || estadoUp.includes('VAPOR') || estadoUp.includes('VAP');
            if (isGas) return 'Ver f\u00f3rmula \u1e41g = a\u00b7\u03c1g\u00b7c\u00b7(\u03c0/2)\u00b7d\u00b2';
            const flow = TCF_FLOW_LIQUID[dnKey];
            return flow ? flow.zeroStab + ' kg/h' : '';
        },
    },

    // ── Mapeamento de células do template FD_CORIOLIS (atualizado) ──────────
    // R5=IDENT, R8=DESIGN, R9=TAMANHO, R10=MAT.FLANGE, R11=CL.PRESS,
    // R12=CL.PREC, R13=COR(fixo), R14=DIST.FACE, R15=SENTIDO,
    // R16=Qmax, R17=Qmin, R18=ESTAB.ZERO, R19=REPET(fixo), R20=FAIXA.TEMP(fixo),
    // R21=PLACA(fixo), R22=IP, R23=TIPO.TX, R24=SINAL, R25=2aSAIDA(opt),
    // R26=IO3(opt), R27=ALIM, R28=CABO, R29=CONN.ELET, R30=MAT.INVOLUCRO,
    // R31=MAT.TUBO.SENSOR, R32=CARCACA.SENSOR,
    // R33=FLUIDO/ESTADO, R34=DENS.FLUIDO, R35=VISCOSIDADE, R36=TEMP.OP,
    // R37=TEMP.PROJETO, R38=Qmin-Qnorm-Qmax, R39=Pmin-Pmax, R40=PRESS.OP,
    // R41=ATEX, R42=CONN.PROC, R43=FLUXO.CAL, R44=TESTE.PRESS,
    // R45=DENS.CAL, R46=TIPO.CAL, R47=CERT.MAT, R48=CAMISA, B50=NOTAS
    populateExcel({ ws, set, code, paramValues: pv, optionalValues: ov, ex, map }) {
        const dn = pv.dn ? 'DN' + parseInt(pv.dn) : '';
        const estadoUp = (ex.estado || '').toUpperCase();
        const isGas = estadoUp.includes('G\u00c1S') || estadoUp.includes('GAS')
                   || estadoUp.includes('VAPOR') || estadoUp.includes('VAP');

        // ── CABEÇALHO ──────────────────────────────────────────────
        set('H1', ex.num_doc ? 'N° ' + ex.num_doc : '');
        set('E2', ex.cliente || '');

        // IDENTIFICAÇÃO (R5)
        set('E5', code);

        // APLICAÇÃO (R6)
        set('H6', ex.aplicacao || '');

        // DESIGNAÇÃO (R8)
        set('E8', ex.designacao || ('TCF' + (pv.dn ? parseInt(pv.dn) : '')));

        // TAMANHO / CONEXÃO (R9) — H9 = observação (ex: Special Connection)
        set('E9', dn);
        set('H9', map.getConexaoProcesso(pv));

        // MATERIAL DO FLANGE (R10)
        set('E10', map.getMaterialFlange(pv));

        // CLASSE DE PRESSÃO (R11)
        set('E11', map.getClassePressao(pv));

        // CLASSE DE PRECISÃO (Row 12) — 0,35% para gás, variável para líquido
        set('E12', map.getClassePrecisao(pv, ex.estado));

        // COR (Row 13) — 'PADRÃO DE FÁBRICA' já pré-preenchido no template

        // DISTÂNCIA FACE (Row 14)
        set('E14', ex.distancia_face || '');

        // SENTIDO FLUXO (Row 15)
        set('E15', ex.sentido_fluxo || '');

        // Qmax/Qmin sensor range (Row 16/17)
        // Para líquido: usa tabela de especificação do hardware (TCF_FLOW_LIQUID)
        // Para gás: depende de cálculo — usa valor inserido pelo usuário no formulário
        const flowSpec = isGas ? null : TCF_FLOW_LIQUID[String(pv.dn || '').padStart(3, '0')];
        const sensorQmax = flowSpec ? flowSpec.qmax : ex.qmax;
        const sensorQmin = flowSpec ? flowSpec.qmin : ex.qmin;
        set('E16', sensorQmax || '');
        set('E17', sensorQmin || '');

        // ESTABILIDADE ZERO (Row 18)
        const zeroStab = map.getEstabilidadeZero(pv, ex.estado);
        set('E18', zeroStab || '');

        // REPETIBILIDADE (Row 19) — pré-preenchido (0,0005)
        // FAIXA DE TEMPERATURA (Row 20) — pré-preenchida (-40~204°C)

        // PLACA DE IDENTIFICAÇÃO / TAG (Row 21) — pré-preenchida 'PADRÃO'; sobrescreve se opcional
        const placa = map.getPlacaId(ov);
        if (placa && placa !== 'PADR\u00c3O') set('E21', placa);

        // GRAU DE PROTEÇÃO IP (Row 22)
        set('E22', map.getGrauProtecao());

        // TIPO DE TRANSMISSOR (Row 23)
        set('E23', map.getTipoTransmissor(pv));

        // SINAL DE SAÍDA (Row 24)
        set('E24', map.getSinalSaida());

        // 2ª SAÍDA ANALÓGICA (Row 25)
        {
            const out2Map = { '2': '4-20 mA Ativa', '3': '4-20 mA Passiva' };
            const io3Map  = { '2': '4-20 mA Entrada Ativa', '3': '4-20 mA Entrada Passiva' };
            const parts = [];
            if (out2Map[pv.output2]) parts.push('Saída 2: ' + out2Map[pv.output2]);
            if (io3Map[pv.io3])      parts.push('I/O 3: ' + io3Map[pv.io3]);
            set('E25', parts.join(' | '));
        }

        // ALIMENTAÇÃO (Row 26)
        set('E26', map.getAlimentacao(pv));

        // COMPRIMENTO DO CABO (Row 27) — H27 '(metros)' já no template
        if (ov.cable_length) {
            set('E27', ov.cable_length.replace('L', ''));
        } else {
            set('E27', '');
            set('H27', '');
        }

        // CONEXÃO ELÉTRICA (Row 28)
        set('E28', map.getConexaoEletrica(pv));

        // MATERIAL DO INVÓLUCRO (Row 29)
        set('E29', map.getMaterialCaixa(pv));

        // MATERIAL DO TUBO SENSOR (Row 30)
        set('E30', map.getCaixaSensor(pv));

        // INVÓLUCRO DO SENSOR (Row 31)
        set('E31', map.getCaixaSensor(pv));

        // FLUÍDO / ESTADO (Row 32) — E32 = fluido, G32 = estado
        set('E32', ex.fluido ? ex.fluido.toUpperCase() : '');
        set('G32', ex.estado || '');

        // DENSIDADE DO FLUIDO (Row 33)
        set('E33', ex.densidade ? ex.densidade + ' ' + (ex.densidade_unit || 'kg/m³') : '');

        // VISCOSIDADE (Row 34)
        set('E34', ex.viscosidade ? ex.viscosidade + ' ' + (ex.viscosidade_unit || 'Cp') : '');

        // TEMPERATURA OPERAÇÃO (Row 35)
        set('E35', ex.temp ? ex.temp + ' \u00b0C' : '');

        // TEMPERATURA MÁX/MÍN (Row 36) — entrada do usuário tem prioridade; fallback = faixa parametrizada
        set('E36', ex.temp_proj ? ex.temp_proj + ' ºC' : map.getTempMedia(pv));

        // Qmin / Qnormal / Qmax — condições de processo (Row 37)
        set('E37', ex.qmin  || '');
        set('F37', ex.qnorm || '');
        set('G37', ex.qmax  || '');
        set('H37', ex.qunit || '');

        // Pmin / Pmax (Row 38)
        set('E38', ex.pmin_raw || '');
        set('G38', ex.pmax_raw || '');
        set('H38', ex.p_unit   || '');

        // PRESSÃO OPERAÇÃO (Row 39) — célula única E40:G40 merged
        if (ex.pressao_op_val) {
            set('E39', ex.pressao_op_val + (ex.pressao_op_unit ? ' ' + ex.pressao_op_unit : ''));
        } else {
            set('E39', '');
        }

        // ATEX (Row 40)
        set('E40', map.getAtex(pv));

        // CONEXÃO DO PROCESSO (Row 41)
        set('E41', map.getConexaoProcesso(pv));

        // FLUXO DE CALIBRAÇÃO (Row 42)
        set('E42', map.getFluxoCalibr(ov));

        // TESTE DE PRESSÃO (Row 43)
        set('E43', map.getTestePressao(ov));

        // DENSIDADE DE CALIBRAÇÃO (Row 44)
        set('E44', map.getDensidadeCalibr(ov));

        // TIPO DE CALIBRAÇÃO (Row 45)
        set('E45', ov.flow_calibration ? map.getFluxoCalibr(ov) : 'PADRÃO');

        // CERTIFICADO DE MATERIAL (Row 46)
        set('E46', ov.material_cert === 'M1' ? 'Sim' : '');

        // CAMISA DE AQUECIMENTO (Row 47)
        const jacketMap = { 'J1': 'Semi Jaqueta', 'J2': 'Jaqueta Completa' };
        set('E47', jacketMap[ov.heat_jacket] || '');

        // ENSAIO POR PENETRANTE (Row 48)
        set('E48', ov.penetrant_test === 'D1' ? 'Sim' : '');

        // TRANSFERÊNCIA DE CUSTÓDIA (Row 49)
        set('E49', ov.custody_transfer === 'O2' ? 'OIML R117' : '');

        // NOTAS (Row 50) — A50 já tem o label 'NOTAS', valor vai em B50
        set('B50', ex.notas || '');
    },
};
