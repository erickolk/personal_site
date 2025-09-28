# Victor Emanuel Personal Trainer - Landing Page

Uma landing page moderna e otimizada para conversão, desenvolvida com Nuxt 3 e Vue.js, focada em atrair leads qualificados para treinamento personalizado e transformação corporal.

## 🚀 Características

- **Framework**: Nuxt 3 com SSR (Server-Side Rendering)
- **Estilização**: Tailwind CSS para design responsivo e moderno
- **Animações**: AOS (Animate On Scroll) para engajamento visual
- **SEO**: Otimizado com meta tags, dados estruturados e sitemap
- **Responsivo**: Design mobile-first com foco na experiência do usuário
- **Conversão**: CTAs estratégicos, prova social e elementos de urgência
- **Acessibilidade**: ARIA labels, alto contraste e navegação por teclado

## 📋 Seções da Landing Page

1. **Hero Section** - Título impactante com CTA principal
2. **Sobre o Personal** - Bio, foto e credenciais do treinador
3. **Serviços** - Pacotes de treinamento com preços e benefícios
4. **Resultados** - Galeria de transformações antes/depois
5. **Depoimentos** - Avaliações e feedback de clientes
6. **Benefícios** - Por que escolher este personal trainer
7. **FAQ** - Perguntas frequentes com accordion
8. **Contato** - Formulário com validação e compliance LGPD
9. **Footer** - Links sociais e informações legais

## 🛠️ Tecnologias Utilizadas

- **Nuxt 3** - Framework Vue.js full-stack
- **Vue 3** - Framework JavaScript reativo
- **Tailwind CSS** - Framework CSS utilitário
- **Google Fonts** - Tipografia (Inter e Poppins)
- **Font Awesome** - Ícones
- **AOS** - Animações on scroll
- **VueUse** - Utilitários Vue composables

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos para instalação

1. **Clone ou baixe o projeto**
```bash
# Se usando Git
git clone <repository-url>
cd personal-trainer-landing

# Ou extraia os arquivos do projeto na pasta desejada
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:3000
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Geração estática
npm run generate

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
personal-trainer-landing/
├── assets/
│   └── css/
│       └── main.css          # Estilos globais e Tailwind
├── components/
│   ├── AboutSection.vue      # Seção sobre o personal
│   ├── BenefitsSection.vue   # Seção de benefícios
│   ├── ContactSection.vue    # Formulário de contato
│   ├── FAQSection.vue        # Perguntas frequentes
│   ├── FooterSection.vue     # Rodapé
│   ├── HeroSection.vue       # Seção hero principal
│   ├── ResultsSection.vue    # Resultados e transformações
│   ├── ServicesSection.vue   # Serviços e pacotes
│   └── TestimonialsSection.vue # Depoimentos
├── layouts/
│   └── default.vue           # Layout padrão com navegação
├── pages/
│   └── index.vue             # Página principal
├── nuxt.config.ts            # Configuração do Nuxt
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
```

## 🎨 Personalização

### Cores e Tema

As cores principais podem ser alteradas no arquivo `assets/css/main.css`:

```css
:root {
  --primary-green: #10b981;
  --primary-blue: #3b82f6;
  --text-dark: #1f2937;
}
```

### Conteúdo

Para personalizar o conteúdo:

1. **Informações do Personal**: Edite os componentes individuais
2. **Dados de Contato**: Atualize links do WhatsApp, Instagram, etc.
3. **Preços e Serviços**: Modifique o `ServicesSection.vue`
4. **Depoimentos**: Atualize o `TestimonialsSection.vue`

### SEO

Configure as meta tags no arquivo `pages/index.vue`:

```javascript
useHead({
  title: 'Seu Título Personalizado',
  meta: [
    {
      name: 'description',
      content: 'Sua descrição personalizada'
    }
    // ... outras meta tags
  ]
})
```

## 📱 Responsividade

O projeto utiliza design mobile-first com breakpoints:

- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+
- **2xl**: 1536px+

## 🔧 Configurações Importantes

### Google Analytics

Para ativar o Google Analytics, descomente e configure no `pages/index.vue`:

```javascript
script: [
  {
    async: true,
    src: 'https://www.googletagmanager.com/gtag/js?id=SEU_GA_ID'
  }
  // ... resto da configuração
]
```

### Formulário de Contato

O formulário atualmente simula o envio. Para integrar com um backend real:

1. Substitua a simulação no `ContactSection.vue`
2. Configure um endpoint de API
3. Implemente validação server-side

### LGPD Compliance

O formulário inclui checkbox de consentimento LGPD. Certifique-se de:

1. Ter uma política de privacidade válida
2. Implementar mecanismos de opt-out
3. Seguir as diretrizes da LGPD

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm run build
# Faça upload da pasta .output para Vercel
```

### Netlify

```bash
npm run generate
# Faça upload da pasta dist para Netlify
```

### Servidor Próprio

```bash
npm run build
# Configure um servidor Node.js para servir a pasta .output
```

## 📊 Performance

A landing page foi otimizada para:

- **Core Web Vitals**: LCP, FID, CLS otimizados
- **SEO**: Meta tags, dados estruturados, sitemap
- **Acessibilidade**: WCAG 2.1 AA compliance
- **Mobile**: Design mobile-first responsivo

## 🤝 Suporte

Para dúvidas ou suporte:

1. Verifique a documentação do Nuxt 3
2. Consulte a documentação do Tailwind CSS
3. Revise os comentários no código

## 📄 Licença

Este projeto é fornecido como template para uso comercial e pessoal.

---

**Desenvolvido com ❤️ para transformar vidas através do fitness**