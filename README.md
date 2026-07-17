# Lucas Wolfgramm - Portfólio Pessoal

Portfólio pessoal moderno e responsivo desenvolvido com HTML5, CSS3 e melhores práticas de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico** - Estrutura acessível e bem organizada
- **CSS3 Moderno** - CSS Variables, Flexbox, Grid Layout
- **Design Responsivo** - Mobile-first approach
- **Google Fonts** - Poppins para tipografia moderna
- **Zero Dependências** - Sem jQuery, Bootstrap ou frameworks pesados

## 📁 Estrutura do Projeto

```
AboutMe/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principais
├── img/
│   ├── me.png          # Foto de perfil
│   ├── gmail.png       # Ícone de email
│   ├── github.png      # Ícone do GitHub
│   └── linkedin.png    # Ícone do LinkedIn
└── README.md           # Este arquivo
```

## 🛠️ Como Executar Localmente

1. Clone este repositório:
```bash
git clone https://github.com/lucaswolfgramm/AboutMe.git
```

2. Navegue até o diretório do projeto:
```bash
cd AboutMe
```

3. Abra o arquivo `index.html` no seu navegador ou use um servidor local:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

4. Acesse no navegador: `http://localhost:8000`

## 🌐 Deploy no GitHub Pages

### Opção 1: GitHub Pages (Recomendado)

1. **Prepare o repositório:**
   - Certifique-se de que o arquivo `index.html` está na raiz do repositório
   - Commit e push as alterações:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Ative o GitHub Pages:**
   - Vá para o repositório no GitHub
   - Clique em **Settings** (Configurações)
   - Na barra lateral esquerda, clique em **Pages**
   - Em **Build and deployment**, selecione:
     - **Source**: Deploy from a branch
     - **Branch**: main (ou master)
     - **Folder**: /(root)
   - Clique em **Save**

3. **Aguarde o deploy:**
   - O GitHub irá fazer o deploy automaticamente
   - Após alguns minutos, seu site estará disponível em:
     - `https://lucaswolfgramm.github.io/AboutMe/`

### Opção 2: GitHub Actions (Automático)

Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --bg-primary: #0a0e17;
    --bg-secondary: #111827;
    --accent-primary: #3b82f6;
    --accent-secondary: #8b5cf6;
    /* ... outras variáveis */
}
```

### Alterar Fonte

Mude a fonte Google Fonts no `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=SUA+FONTES&display=swap" rel="stylesheet">
```

E atualize a variável no CSS:

```css
:root {
    --font-family: 'Sua Fonte', sans-serif;
}
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## ♿ Acessibilidade

- HTML semântico
- Navegação por teclado
- Contraste de cores adequado
- Meta tags para SEO
- Suporte a leitores de tela

## 🔧 Manutenção

### Atualizar Informações

1. **Experiência:** Edite a seção `#experience` no `index.html`
2. **Formação:** Edite a seção `#education` no `index.html`
3. **Skills:** Edite a seção `#skills` no `index.html`
4. **Contato:** Edite a seção `.footer` no `index.html`

### Adicionar Nova Seção

```html
<section id="nova-secao" class="section">
    <div class="container">
        <h2 class="section-title">
            <span class="icon">🎯</span>
            Título da Seção
        </h2>
        <div class="section-content">
            <!-- Conteúdo aqui -->
        </div>
    </div>
</section>
```

## 📄 Licença

Este projeto é open source e está disponível para uso pessoal.

## 👤 Contato

- **Email:** lucas.wol@hotmail.com
- **GitHub:** [@lucaswolfgramm](https://github.com/lucaswolfgramm)
- **LinkedIn:** [lucaswolfgramm](https://br.linkedin.com/in/lucaswolfgramm)

---

Desenvolvido com ❤️ usando HTML5 e CSS3 modernos.
