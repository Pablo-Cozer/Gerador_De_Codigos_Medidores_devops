# Aépio — Gerador de Código de Medidores

Ferramenta interna para configurar medidores Tancy, gerar **order codes**, **Folhas de Dados em Excel** e **Resumos em PDF**.

---

## Como abrir

1. Extraia o `.zip` em qualquer pasta.
2. Abra o arquivo **`index.html`** em um navegador moderno (Chrome, Edge ou Firefox).
3. Nenhuma instalação, servidor ou banco de dados é necessário.

> **Requisito de internet:** a geração de Excel usa a biblioteca ExcelJS carregada do CDN jsDelivr. Se o computador estiver **sem internet**, a exportação de Excel não funcionará — as demais funcionalidades (configuração, PDF e pedido) funcionam offline.

---

## Famílias de Medidores Suportadas

| Família | Nome | Excel | PDF |
|---------|------|-------|-----|
| **TEF** | Eletromagnético (líquidos) | ✅ | ✅ |
| **TCF** | Coriolis | ✅ | ✅ |
| **TYL** | Rotativo de Pistões | ✅ | ✅ |
| **TBQM** | Turbina de Gás | ✅ | ✅ |
| **TUS** | Ultrassônico de Gás | ✅ | ✅ |
| **TEC III** | Computador de Vazão | ✅ | ✅ |
| **0DM** | Medidor Diafragma | ❌ | ❌ |

> O 0DM gera o código de pedido mas ainda não possui Folha de Dados.

---

## Fluxo de Uso

### 1. Selecionar a Família
Na tela inicial, clique no cartão da família desejada.

### 2. Configurar o Medidor (Wizard)
O configurador apresenta os parâmetros **passo a passo**. Para cada etapa:
- Selecione a opção desejada.
- O **order code** é atualizado em tempo real no topo.
- Parâmetros com `?` indicam campos ainda não preenchidos.
- Campos com dependência são filtrados automaticamente (ex: conexões disponíveis mudam conforme o DN).

**Opções Especiais (`YYY`):** em conexão de processo, selecione "Especial / Sob Consulta" e digite a descrição no campo que aparece — o texto digitado aparece no resumo e na Folha de Dados.

### 3. Condições do Processo
Após concluir a configuração, clique em **"Condições do Processo"** para preencher:
- Cliente, N° Documento, Aplicação
- Fluido, temperatura, vazão (Qmín / Qnormal / Qmáx), pressão, propriedades do fluido
- Os campos de Dados do Instrumento são preenchidos automaticamente

> Para **TUS** e **TEC III** (que não têm condições de processo variáveis), apenas Identificação e Dados do Instrumento são exibidos.

### 4. Exportar

#### Folha de Dados — Excel
- Botão **Exportar → Gerar Excel (Folha de Dados)**
- Baixa o template Excel da família preenchido com todos os dados configurados.

#### Folha de Dados — PDF
- Botão **Exportar → Folha de Dados (PDF)**
- Gera um PDF da Folha de Dados diretamente no navegador.

#### Folha de Resumo — PDF
- Botão **Exportar → Folha de Resumo (PDF)**
- Gera um PDF compacto com o order code, especificações e condições de processo — ideal para aprovação rápida.

---

## Funcionalidades Adicionais

### Decodificar Código
- Cole um order code no campo de busca no topo da tela e pressione **Enter** ou clique na lupa.
- O sistema restaura toda a configuração correspondente ao código.

### Salvar Especificação
- **Salvar → Salvar Especificação**: guarda a configuração atual com nome e cliente no navegador (localStorage).
- As especificações salvas ficam disponíveis em **Especificações Salvas** no menu lateral.

### Modelos (Templates)
- **Salvar → Salvar como Modelo**: salva a configuração sem as condições de processo, para reutilizar como ponto de partida.
- Disponível em **Modelos** no menu lateral.

### Gestão de Cotações
- **Adicionar à Cotação**: inclui o item configurado (com quantidade e TAG) na lista de cotação ativa.
- **Cotação** no menu lateral: visualize, edite status, quantidade e TAG de cada item.
  - Status disponíveis: Pendente, Aprovado, Rejeitado, Em revisão.
- **Exportar → Gerar PDF Consolidado**: gera um PDF com todos os instrumentos da cotação em um único documento.
- O sistema suporta **múltiplas cotações** — crie, renomeie e alterne entre elas pelo menu lateral.

---

## Comportamentos Automáticos por Família

| Família | Comportamento automático |
|---------|--------------------------|
| TYL | Qmín calculado a partir do range selecionado; distância face-a-face preenchida por tabela |
| TBQM | Qmín/Qmáx e distância face preenchidos automaticamente conforme designação e DN |
| TUS | Qmín/Qmáx (tabela do manual), distância face e sentido de fluxo preenchidos automaticamente |
| TEF / TCF | Qmín/Qmáx preenchidos pelo DN selecionado; conexão do processo preenchida automaticamente |
| TEC III | Sem condições de processo — Folha de Dados gerada apenas com dados de configuração |

---

## Dica de Range de Medição
O campo **Range de Medição** (ex: `1:70`) é calculado automaticamente a partir de Qmín e Qmáx, arredondado para a dezena mais próxima.

---

## Suporte
Em caso de dúvidas ou erros, entre em contato com a equipe Aépio.
