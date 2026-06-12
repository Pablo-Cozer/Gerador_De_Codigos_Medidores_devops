// ═══════════════════════════════════════════════════════════════
// Constantes e helpers compartilhados entre famílias de gás (TYL, TBQM)
// ═══════════════════════════════════════════════════════════════

// Termopoço: código → label legível
const TERMO_MAP = { '0': '0x TW', '1': '1x TW', '2': '2x TW' };

// Específicos: código → sentido de fluxo + tipo de index
const SENTIDO_MAP = {
    'A': { fluxo: 'ESQUERDA -> DIREITA', index: 'PADRÃO' },
    'B': { fluxo: 'ESQUERDA -> DIREITA', index: 'PADRÃO, EVC SUPP.' },
    'C': { fluxo: 'ESQUERDA -> DIREITA', index: 'ALUMÍNIO' },
    'D': { fluxo: 'ESQUERDA -> DIREITA', index: 'ALUMÍNIO, EVC SUPP.' },
    'E': { fluxo: 'DIREITA -> ESQUERDA', index: 'PADRÃO' },
    'F': { fluxo: 'DIREITA -> ESQUERDA', index: 'PADRÃO, EVC SUPP.' },
    'G': { fluxo: 'DIREITA -> ESQUERDA', index: 'ALUMÍNIO' },
    'H': { fluxo: 'DIREITA -> ESQUERDA', index: 'ALUMÍNIO, EVC SUPP.' },
};

// Resolve o label de uma opção dado o objeto da família, paramId e código
function resolveLabel(family, paramId, code) {
    if (!code) return '';
    const p = family.parameters.find(x => x.id === paramId);
    if (!p) return code;
    const opts = typeof p.getDynamicOptions === 'function'
        ? p.getDynamicOptions({}) : (p.options || []);
    const opt = opts.find(o => o.code === code);
    return opt ? opt.label.replace(/\s+/g, ' ').trim() : code;
}

// Extrai contagens LF e HF de um label de sensor (ex: "1x LF  0x HF")
function parseSensor(sensorLabel) {
    const m = sensorLabel.match(/(\d)x\s*LF\s+(\d)x\s*HF/);
    return {
        lfFull:  m ? m[1] + 'x LF' : sensorLabel,
        hfFull:  m ? m[2] + 'x HF' : '',
        lfCount: m ? m[1] + 'x' : '',
        hfCount: m ? m[2] + 'x' : '',
    };
}

// Preenche as condições de processo na folha de dados Excel
// colMap: { val: 'E', val2: 'F', val3: 'G' } para definir as colunas de escrita
// Sempre escreve (mesmo vazio) para limpar placeholders do template original
function populateConditions(s, sn, ex, colMap) {
    const c1 = colMap.val, c2 = colMap.val2, c3 = colMap.val3;

    s(c1 + '25', ex.fluido    || '');
    s(c3 + '25', ex.estado    || '');

    const visc = ex.viscosidade
        ? ex.viscosidade + (ex.viscosidade_unit ? ' ' + ex.viscosidade_unit : '')
        : '';

    s(c1 + '26', '');            // Cp/Cv — limpa placeholder
    s(c3 + '26', visc);

    s(c1 + '27', ex.dens_relativa || '');
    s(c1 + '28', ex.temp          || '');
    s(c1 + '29', ex.temp_proj     || '');

    s(c1 + '30', ex.qmin  || '');
    s(c2 + '30', ex.qnorm || '');
    s(c3 + '30', ex.qmax  || '');

    s(c1 + '31', ex.pmin_raw  || '');
    s(c2 + '31', ex.pnorm_raw || '');
    s(c3 + '31', ex.pmax_raw  || '');
    // Unidade de pressão (Pmin-Pmax) — coluna de unidades (H para TYL, R para TBQM)
    if (colMap.unit) s(colMap.unit + '31', ex.p_unit || 'bar');

    s(c1 + '32', ex.pressao_proj || '');
    s(c1 + '33', ex.compress     || '');
    s(c1 + '34', ex.peso_mol    || '');
}
