# Portfólio Kleiton Ferreira

Acesse meu portfólio online: [https://kleitonfr.github.io/portfolio](https://kleitonfr.github.io/portfolio)

## Deploy no GitHub Pages

### Opção 1: Criar novo repositório "portfolio"

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New Repository"
3. Nome: `portfolio`
4. Marque como **Public**
5. Clique em "Create repository"

### Comandos para fazer upload:

```bash
cd C:\Users\kleyt\Documents\PROJETOS\MCP_service_github

# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial portfolio commit"

# Adicionar o repositório remoto (substitua SEU_USUARIO)
git remote add origin https://github.com/kleitonfr/portfolio.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### Ativar GitHub Pages:

1. No repositório, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione **main** branch
4. Clique em **Save**
5. Aguarde alguns minutos
6. Seu site estará disponível em: `https://kleitonfr.github.io/portfolio`

### Opção 2: Usar o repositório existente

Se preferir usar seu repositório principal:
- URL será: `https://kleitonfr.github.io/kleitonfr` (se criar repo com seu username)
- Ou pode criar subpasta: `https://kleitonfr.github.io/portfolio`

## Próximo passo: Gerar QR Code

Após publicar, anote a URL e vou criar a capa do LinkedIn com o QR Code!