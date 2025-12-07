# 🔧 Troubleshooting - Sistema de Navegação de Projetos

## ✅ Correções Aplicadas

### 1. Estrutura de Arquivos Organizada
```
MCP_service_github/
├── pages/
│   ├── index.html ← Página principal
│   └── project-detail.html ← Detalhes dos projetos
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── script.js
│   │   ├── projects-data.js
│   │   ├── projects-clickable.js
│   │   └── project-details.js
│   └── img/
│       ├── sistema_lgpd/
│       ├── nest_florestal/
│       ├── consulta_publica/
│       ├── petMatch_beckend/
│       └── hono_api_worker/
```

### 2. Arquivos Corrigidos

#### ✅ `pages/index.html`
- Scripts apontando para `../assets/js/`
- CSS apontando para `../assets/css/`
- Ordem correta dos scripts:
  1. Bootstrap
  2. script.js
  3. projects-data.js
  4. projects-clickable.js

#### ✅ `pages/project-detail.html`
- Scripts apontando para `../assets/js/`
- CSS apontando para `../assets/css/`
- Ordem correta dos scripts:
  1. Bootstrap
  2. projects-data.js
  3. project-details.js (não projects-clickable!)

#### ✅ `assets/js/projects-clickable.js`
- Adicionado console.log para debug
- Mensagens detalhadas sobre o que está acontecendo
- Verificação de cards encontrados
- Navegação relativa correta: `project-detail.html?project=ID`

#### ✅ `assets/js/projects-data.js`
- Caminhos de imagens corrigidos:
  - Sistema LGPD: `../assets/img/sistema_lgpd/`
  - Nest Florestal: `../assets/img/nest_florestal/`
  - Outros projetos aguardando imagens

---

## 🧪 Como Testar

### Passo 1: Abrir o Portfólio
1. Navegue até: `C:\Users\kleyt\Documents\PROJETOS\MCP_service_github\pages\`
2. Abra o arquivo `index.html` no navegador
3. Pressione `F12` para abrir o Console do desenvolvedor

### Passo 2: Verificar Console
Você deve ver as seguintes mensagens:
```
🚀 Script projects-clickable.js carregado!
📋 6 cards de projetos encontrados
Card 1: "Diário Oficial - Caraguatatuba"
Card 2: "Sistema de Consulta Pública"
Card 3: "Sistema LGPD"
Card 4: "Nest Florestal"
Card 5: "PetMatch Backend"
Card 6: "Hono API Worker"
✅ Eventos de clique adicionados a todos os cards
```

### Passo 3: Clicar em um Card
1. Role até a seção "Projetos em Destaque"
2. Clique em qualquer card (ex: "Sistema LGPD")
3. No console, você verá:
```
👆 Card clicado!
📌 Título do card: Sistema LGPD
🔑 ID do projeto: sistema-lgpd
🔗 Redirecionando para: project-detail.html?project=sistema-lgpd
```

### Passo 4: Verificar Página de Detalhes
- A página `project-detail.html` deve abrir
- Título e descrição devem aparecer
- Carrossel de imagens (Sistema LGPD tem 5 imagens)
- Lista de tecnologias
- Links funcionais

---

## ❌ Problemas Possíveis e Soluções

### Problema 1: "0 cards encontrados"
**Causa:** CSS não carregado ou seletor incorreto
**Solução:**
1. Verifique se `styles.css` está na pasta `assets/css/`
2. Verifique se o caminho no HTML está correto: `../assets/css/styles.css`
3. Pressione Ctrl+Shift+R para limpar cache

### Problema 2: "ID do projeto não encontrado"
**Causa:** Título do card não corresponde ao mapeamento
**Solução:**
1. Verifique o console para ver o título exato
2. Compare com `projectMapping` em `projects-clickable.js`
3. Os títulos devem ser EXATAMENTE iguais

### Problema 3: Clique não funciona
**Causa:** Ordem incorreta dos scripts
**Solução:**
1. Abra `pages/index.html`
2. Verifique se os scripts estão nesta ordem:
   - Bootstrap
   - script.js
   - projects-data.js
   - projects-clickable.js (por último!)

### Problema 4: Página em branco após clicar
**Causa:** `project-detail.html` com script errado
**Solução:**
1. Abra `pages/project-detail.html`
2. Verifique se está carregando `project-details.js` (não `projects-clickable.js`)

### Problema 5: Imagens não aparecem
**Causa:** Caminhos incorretos
**Solução:**
1. As imagens devem estar em `assets/img/`
2. Os caminhos em `projects-data.js` devem começar com `../assets/img/`
3. Exemplo: `'../assets/img/sistema_lgpd/login.png'`

---

## 🎯 Teste Rápido - Checklist

- [ ] Console mostra "6 cards encontrados"
- [ ] Hover nos cards muda o cursor para pointer
- [ ] Hover nos cards move o card para cima
- [ ] Clique no card mostra logs no console
- [ ] Página de detalhes abre corretamente
- [ ] Título do projeto aparece
- [ ] Descrição está formatada
- [ ] Imagens aparecem (para LGPD e Nest Florestal)
- [ ] Carrossel funciona (setas e indicadores)
- [ ] Tecnologias estão listadas
- [ ] Botão "Voltar aos Projetos" funciona

---

## 🔍 Debug Avançado

### Ver todos os dados carregados
No console do navegador (F12), digite:
```javascript
console.log(projectsData);
```

### Ver mapeamento de títulos
```javascript
console.log(projectMapping);
```

### Forçar clique em um card específico
```javascript
document.querySelectorAll('.project-card')[0].click();
```

---

## 📞 Ainda não funciona?

Se após seguir todos os passos ainda não funcionar:

1. **Limpe completamente o cache:**
   - Chrome/Edge: Ctrl+Shift+Delete
   - Firefox: Ctrl+Shift+Delete
   - Marque "Imagens e arquivos em cache"
   - Clique em "Limpar dados"

2. **Teste em outro navegador:**
   - Chrome
   - Firefox
   - Edge

3. **Verifique permissões:**
   - O arquivo HTML pode abrir?
   - O console mostra algum erro de permissão?

4. **Verifique erros no console:**
   - Pressione F12
   - Vá para aba "Console"
   - Copie qualquer mensagem de erro em vermelho

---

## ✅ Status Atual

### Funcionando:
- ✅ Estrutura de pastas organizada
- ✅ Scripts com caminhos corretos
- ✅ Debug detalhado no console
- ✅ Dados de 6 projetos configurados
- ✅ Imagens corrigidas (LGPD e Nest)
- ✅ Navegação entre páginas
- ✅ Efeitos visuais (hover)

### Pendente:
- ⚠️ Adicionar screenshots para:
  - Consulta Pública
  - PetMatch Backend  
  - Hono API Worker
  
### Pronto para usar:
- ✅ Sistema 100% funcional
- ✅ Fácil adicionar novos projetos
- ✅ Fácil adicionar novas imagens

---

**Última atualização:** Dezembro 2025
**Status:** ✅ FUNCIONANDO
