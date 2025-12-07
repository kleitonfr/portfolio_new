# Sistema de Navegação de Projetos - Portfólio Kleiton Ferreira

## 📋 Descrição

Este sistema permite que os cards de projetos no portfólio sejam clicáveis e direcionem para páginas de detalhes completas com informações, imagens, tecnologias e links de cada projeto.

## 🎯 Funcionalidades

- ✅ Cards de projetos totalmente clicáveis
- ✅ Página de detalhes dinâmica para cada projeto
- ✅ Carrossel de imagens quando há múltiplas screenshots
- ✅ Informações detalhadas sobre cada projeto
- ✅ Lista de tecnologias utilizadas
- ✅ Links para GitHub, demos e outros recursos
- ✅ Conteúdo embed (como posts do LinkedIn)
- ✅ Design responsivo e acessível

## 📁 Arquivos Criados

### 1. `projects-data.js`
Contém todos os dados dos projetos em formato JavaScript:
- Títulos e descrições
- Informações detalhadas
- Tecnologias utilizadas
- Caminhos das imagens
- Links externos
- Conteúdo embed (quando aplicável)

### 2. `projects-clickable.js`
Torna os cards de projetos clicáveis:
- Mapeia títulos para IDs dos projetos
- Adiciona eventos de clique aos cards
- Redireciona para página de detalhes
- Adiciona efeitos visuais de hover

### 3. `project-details.js`
Carrega e renderiza as informações do projeto na página de detalhes:
- Carrega dados da URL
- Popula título, descrição e tecnologias
- Cria carrossel de imagens
- Adiciona links e conteúdo embed

### 4. `project-detail.html` (atualizado)
Página template para exibir detalhes dos projetos

## 🚀 Como Usar

### 1. Estrutura de Arquivos

```
MCP_service_github/
├── index.html                  # Página principal
├── project-detail.html         # Página de detalhes (template)
├── projects-data.js            # Dados dos projetos
├── projects-clickable.js       # Torna cards clicáveis
├── project-details.js          # Carrega detalhes do projeto
├── styles.css                  # Estilos
└── img/                        # Pasta de imagens
    ├── consulta_publica/
    ├── sistema_lgpd/
    ├── nest_florestal/
    ├── petMatch_beckend/
    └── hono_api_worker/
```

### 2. Na Página Principal (index.html)

O arquivo já está configurado! Os scripts são carregados no final:

```html
<script src="projects-clickable.js"></script>
```

### 3. Adicionar Novo Projeto

Para adicionar um novo projeto, edite o arquivo `projects-data.js`:

```javascript
const projectsData = {
    'meu-novo-projeto': {
        id: 'meu-novo-projeto',
        title: 'Título do Projeto',
        brief: 'Descrição curta',
        description: `
            <p>Descrição detalhada em HTML...</p>
            <h3>Seção</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        `,
        technologies: ['Tech1', 'Tech2', 'Tech3'],
        images: [
            'img/projeto/screenshot1.png',
            'img/projeto/screenshot2.png'
        ],
        links: [
            { name: 'GitHub', url: 'https://...', icon: 'bi-github' },
            { name: 'Demo', url: 'https://...', icon: 'bi-box-arrow-up-right' }
        ],
        // Opcional: conteúdo embed como iframe do LinkedIn
        embedContent: `<div>...</div>`
    }
};
```

Depois, adicione o mapeamento em `projects-clickable.js`:

```javascript
const projectMapping = {
    'Título do Projeto': 'meu-novo-projeto'
};
```

### 4. Adicionar Imagens

1. Crie uma pasta para o projeto em `img/`
2. Adicione as imagens do projeto
3. Atualize os caminhos no `projects-data.js`

Exemplo:
```
img/
└── meu-projeto/
    ├── screenshot1.png
    ├── screenshot2.png
    └── logo.png
```

## 📝 Projetos Configurados

### 1. Diário Oficial
- ✅ Descrição completa
- ✅ Imagens do GitHub
- ✅ Links para GitHub e Demo

### 2. Sistema de Consulta Pública
- ✅ Descrição detalhada
- ⚠️ Aguardando imagens
- ✅ Projeto privado

### 3. Sistema LGPD
- ✅ Descrição completa
- ✅ 5 screenshots disponíveis
- ✅ Projeto privado

### 4. Nest Florestal (MPOA)
- ✅ Descrição completa do caso de uso
- ✅ 13+ screenshots disponíveis
- ✅ Projeto privado

### 5. PetMatch Backend
- ✅ Descrição das funcionalidades
- ✅ Embed do LinkedIn
- ⚠️ Aguardando screenshots
- ✅ Link para post do LinkedIn

### 6. Trilhas Interativas (Hono API Worker)
- ✅ Descrição do ecossistema completo
- ⚠️ Aguardando screenshots
- ✅ Link para design no Figma
- ✅ Projeto privado

## 🎨 Customização

### Alterar Cores
Edite a seção `<style>` em `project-detail.html` para mudar as cores do tema.

### Adicionar Seções
No `projects-data.js`, você pode adicionar HTML customizado na propriedade `description`.

### Modificar Layout
Edite `project-detail.html` para alterar a estrutura da página de detalhes.

## 🔗 Navegação

- Clique em qualquer card → Abre página de detalhes
- Botão "Voltar aos Projetos" → Retorna para #projects na home
- Links no navbar → Funcionam normalmente

## ✅ Testado e Funcionando

- ✅ Navegação entre páginas
- ✅ Carregamento dinâmico de dados
- ✅ Carrossel de múltiplas imagens
- ✅ Links externos
- ✅ Design responsivo
- ✅ Efeitos hover nos cards

## 📱 Responsividade

O sistema é totalmente responsivo:
- Cards adaptam-se ao tamanho da tela
- Carrossel funciona em mobile
- Layout otimizado para tablets
- Navbar colapsável

## 🐛 Solução de Problemas

### Card não está clicável
- Verifique se o título do card em `index.html` corresponde ao mapeamento em `projects-clickable.js`

### Página de detalhes não carrega
- Confirme que o `project-detail.html` está na raiz do projeto
- Verifique se os scripts estão sendo carregados na ordem correta

### Imagens não aparecem
- Verifique os caminhos relativos em `projects-data.js`
- Confirme que as imagens existem na pasta `img/`

### Carrossel não funciona
- Certifique-se de que o Bootstrap 5 está sendo carregado
- Verifique se há pelo menos 2 imagens no array

## 📄 Licença

Este código faz parte do portfólio de Kleiton Ferreira.

---

**Desenvolvido com ❤️ por Kleiton Ferreira**
