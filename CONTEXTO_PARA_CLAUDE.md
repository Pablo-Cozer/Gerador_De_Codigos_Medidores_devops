# Contexto: Aépio — Gerador de Código de Medidores

## O que é

SPA vanilla JS (sem framework, sem servidor) que guia o usuário num wizard passo a passo para configurar medidores de vazão do fabricante **Tancy**, gerar o **order code** padronizado e exportar a **Folha de Dados em Excel** (ExcelJS + template base64) e **resumos em PDF** (jsPDF bundled). Roda inteiramente no browser a partir de `index.html` — sem autenticação, sem backend, sem banco de dados.

**Importante:** a aplicação é exclusiva para produtos Tancy. Não existe conceito de "fornecedor" ou "fabricante" como entidade — cada linha de produto é uma "família" (TEF, TCF, TUS etc.). Para "adicionar um novo fornecedor" leia: adicionar uma nova família (seção 12-A do `PROJETO.md`).

## Stack em uma linha

`index.html` + `app.js` (vanilla JS ~5000 linhas) + `families/*.js` (um objeto JS por família) + templates Excel em base64 (`templates/template_*.js`) + jsPDF local + ExcelJS 4.4.0 via CDN jsDelivr (internet obrigatória para Excel) + `localStorage` / `IndexedDB` para persistência.

## Estrutura de arquivos

| Arquivo/Pasta | Responsabilidade |
|---|---|
| `index.html` | Estrutura HTML estática; carrega todos os scripts; define sidebar, `#wizard-root`, `#conditions-section` |
| `app.js` | Toda a lógica: state machine, wizard UI, `buildCode()`, `parseCode()`, geração Excel/PDF, cotações, specs |
| `families/tef.js` | Eletromagnético — prefixo `TEFP`, variável template `FD_TEMPLATE_B64` |
| `families/tcf.js` | Coriolis — prefixo `TCF`, variável template `FD_CORIOLIS_B64` |
| `families/tyl.js` | Rotativo de gás — prefixo `0R`, variável template `FD_ROT_B64` |
| `families/tbqm.js` | Turbina de gás — prefixo `0T`, variável template `FD_TURB_B64` |
| `families/tus.js` | Ultrassônico — prefixo `TUS`, variável template `FD_TUS_B64` |
| `families/tec.js` | Computador TEC III — prefixo `0TEC`, variável template `FD_TEC_B64` |
| `families/diaf.js` | Diafragma — prefixo `0DM` (sem Excel/PDF ainda) |
| `families/_shared.js` | Helpers: `populateConditions()`, `parseSensor()`, `resolveLabel()` |
| `templates/template_*.js` | Templates Excel em base64 — **nunca editar diretamente**; regenerados via `node scripts/sync_templates.js` |
| `templates/font_trevia_b64.js` | Fonte Trevia Groteska em base64 (registrada no jsPDF) |
| `templates/jspdf.umd.min.js` | jsPDF bundled localmente |
| `scripts/sync_templates.js` | Converte `docs/*.xlsx` → base64 → `templates/template_*.js` |
| `style.css` | Todo o CSS; variáveis `--blue`, `--bg`, `--border` etc. |

## State machine

```
phase: 'family' → 'configure' → 'conditions' → ('order-list' | 'order')
```

`navigate(phase)` atualiza `phase` + History API + chama `render()`. Estado global: `paramValues` (seleções do wizard), `optionalValues` (opcionais), `currentFamilyKey`, `currentFamily`.

## Interface de cada família

```js
{
  id, name, prefix, skipConditions,   // skipConditions: true → pula tela de condições (TEC III)
  defaults, parameters[], optionals[],
  buildCode(pv),           // monta o order code
  getDescription(pv),      // descrição textual
  getFlowRange(pv),        // → { qmin, qmax } para auto-fill (TYL, TBQM, TUS)
  getDnDefaults(dn, state),// → { qmin, qmax, face } por DN (TEF, TCF)
  populateExcel({ ws, set, setNum, getSheet, code, paramValues, optionalValues, ex, map }),
  pdfMappings: { ... }
}
```

`ex` (extras) é o objeto com todos os campos das condições de processo. Para TEC (`skipConditions: true`), `ex` é restrito a `{ cliente, num_doc, aplicacao, notas }` para evitar contaminação com valores DOM de outra família.

## Chaves localStorage

| Chave | Conteúdo |
|-------|----------|
| `aepio_orders_list` | Array de cotações `{ id, name, createdAt }` |
| `aepio_active_order_id` | ID da cotação ativa |
| `aepio_order_items_{id}` | Array de itens da cotação |
| `aepio_order_header_{id}` | Cabeçalho da cotação |
| `aepio_gerador_specs` | Especificações salvas (`STORAGE_KEY`) |
| `aepio_gerador_templates` | Modelos salvos (`TEMPLATES_KEY`) |

## Convenções específicas

- **TYL e TBQM — lookup-table prefix:** `designacao + conexao` (TYL) ou `+ material + classe` (TBQM) são comprimidos em 2 chars usando `TYL_PREFIXO` / `TBQM_PREFIXO`. O wizard usa os params separados; `buildCode()` e `parseCode()` usam a lookup para comprimir/expandir.
- **TUS `model_type` ≠ `caliber`:** `model_type` = vias acústicas (4/6/8); `caliber` = polegadas (3/4/6/8/10/12). Excel `E8` = `TUS-{model_type}`.
- **TUS 8 vias:** mínimo calibre 6" — filtrado em `getDynamicOptions` do parâmetro `caliber`.
- **TUS face-to-face CL900+3":** usa chave composta `'CL900|3'` (320 mm) em vez da tabela padrão (240 mm).
- **YYY (conexão especial):** `process_conn === 'YYY'` → `process_conn_custom` guarda descrição livre. Todo `getConexaoProcesso` deve ter guard `if (params.process_conn === 'YYY') return params.process_conn_custom`.
- **TEC III:** `skipConditions: true` — pula condições completamente.
- **TUS condições:** `skipConditions: false` mas `#conditions-process-sections` recebe `display: none` — só Identificação e Dados do Instrumento são visíveis.
- **Range 1:X:** `Math.round((qmax / qmin) / 10) * 10` — arredondado para dezena mais próxima.
- **Templates:** nunca editar `templates/template_*.js` diretamente. Editar `docs/*.xlsx` + `node scripts/sync_templates.js`.

## Padrões técnicos não-óbvios

- **`dataset.auto = '1'`** marca campos auto-preenchidos (qmin, qmax, face, range). O listener de `input` deleta esse atributo (edição manual). Em `renderConditionsHeader()`, após `dispatchEvent(new Event('input'))` no qmax (para acionar o cálculo do range), o código **re-seta** `dataset.auto` nos dois campos — o dispatch aciona o mesmo listener que deleta o atributo.
- **`#conditions-process-sections { display: contents; }`** em `style.css`: torna o div transparente ao CSS grid pai (sem `display: contents`, o div vira uma célula única e quebra o layout). `display: none` para TUS ainda funciona porque sobrescreve `contents`.
- **Pressão dupla em `getExtras()`:** `pmin_raw/pnorm_raw/pmax_raw` = valor numérico puro (TEF, células separadas); `pmin/pnorm/pmax` = valor+unidade concatenados (TCF, compat.). Os campos `*_raw` **não** são salvos em `processConditions`.
- **Migração multi-cotação:** `migrateOrders()` na inicialização converte o schema antigo (chave única `aepio_gerador_order`) para o novo (IDs por cotação). **Não remover essa função.**
- **`TEMPLATE_B64_MAP` é local** a `buildExcelWorksheet()` (linha 2188) — não é global. Mapeia `fam.id` → variável global `FD_*_B64` de cada `templates/template_*.js`.

## Onde olhar primeiro

- Para entender o negócio: seção 2 do `PROJETO.md`
- Para a arquitetura e módulos de `app.js`: seção 4 do `PROJETO.md`
- Para as regras de negócio: seção 10 do `PROJETO.md`
- Para resolver bug: seção 13 do `PROJETO.md`
- Para adicionar família ou parâmetro: seção 12 do `PROJETO.md`
- Para atualizar template Excel: seção 12-C do `PROJETO.md`

## Para evoluir esta aplicação

- ExcelJS vem do CDN — baixar localmente elimina dependência de internet para export Excel
- `app.js` ~5000 linhas — candidato a modularização (ES modules + Vite) quando o projeto escalar
- Cotação (`nav-order`) está com `display:none` — funcionalidade v2, parcialmente implementada
- Sem Git ainda — versionar antes de qualquer nova feature
- Sem testes — ao adicionar família nova, testar: wizard → condições → Excel → PDF → decode round-trip
