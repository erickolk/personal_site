// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],
  
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://erickolk.github.io/personal_site/' }
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

  // SSR Configuration
  ssr: false,

  // Nitro Configuration for better performance
  nitro: {
    compressPublicAssets: true,
    preset: 'github_pages'
  },

  // Runtime Config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://erickolk.github.io/personal_site/'
    }
  }
})