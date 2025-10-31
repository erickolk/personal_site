// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],
  
  // Static Site Generation Configuration
  nitro: {
    prerender: {
      // Prerender the site using the configured baseURL
      routes: ['/personal_site/'],
      // Avoid crawling/validating hashed client assets during prerender
      ignore: ['/personal_site/_nuxt/**', '/_nuxt/**'],
      crawlLinks: true,
      // As a safeguard, don't fail the build due to asset 404
      failOnError: false
    }
  },
  
  // SEO Configuration
  app: {
    baseURL: '/personal_site/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Personal Trainer - Transforme Seu Corpo e Sua Vida',
      meta: [
        { name: 'description', content: 'Treinamento personalizado com resultados reais. Transforme seu corpo e sua vida com acompanhamento profissional. Agende sua consulta gratuita!' },
        { name: 'keywords', content: 'personal trainer, treinamento personalizado, fitness, emagrecimento, musculação, nutrição, transformação corporal' },
        { name: 'author', content: 'Personal Trainer' },
        { property: 'og:title', content: 'Personal Trainer - Transforme Seu Corpo e Sua Vida' },
        { property: 'og:description', content: 'Treinamento personalizado com resultados reais. Transforme seu corpo e sua vida com acompanhamento profissional.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      ]
    }
  },

  // Google Fonts Configuration
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
      Poppins: [300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  },

  // CSS Configuration
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/css/main.css'
  ],
})