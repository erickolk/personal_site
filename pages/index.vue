<template>
  <div class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <HeroSection id="inicio" />
    
    <!-- About Section -->
    <AboutSection id="sobre" />
    
    <!-- Services Section -->
    <ServicesSection id="servicos" />
    
    <!-- Results Section -->
    <ResultsSection id="resultados" />
    
    <!-- Testimonials Section -->
    <TestimonialsSection id="depoimentos" />
    
    <!-- FAQ Section -->
    <FAQSection id="faq" />
    
    <!-- Contact Section -->
    <ContactSection id="contato" />
    
    <!-- Footer Section -->
    <FooterSection />
  </div>
</template>

<script setup>
// SEO Meta Tags
useHead({
  title: 'Victor Emanuel Personal Trainer - Transforme Seu Corpo e Sua Vida',
  meta: [
    {
      name: 'description',
      content: 'Transforme seu corpo com Victor Emanuel, personal trainer especializado em emagrecimento, ganho de massa muscular e condicionamento físico. Resultados garantidos em 90 dias!'
    },
    {
      name: 'keywords',
      content: 'Victor Emanuel, personal trainer, emagrecimento, ganho de massa muscular, condicionamento físico, treinamento personalizado, nutrição esportiva, transformação corporal, academia, fitness'
    },
    {
      name: 'author',
        content: 'Victor Emanuel Personal Trainer'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph / Facebook
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
        content: 'Victor Emanuel Personal Trainer - Transforme Seu Corpo e Sua Vida'
    },
    {
      property: 'og:description',
        content: 'Transforme seu corpo com Victor Emanuel, personal trainer especializado em emagrecimento, ganho de massa muscular e condicionamento físico. Resultados garantidos!'
    },
    {
      property: 'og:image',
      content: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80'
    },
    {
      property: 'og:url',
        content: 'https://victoremanueltrainer.com'
    },
    {
      property: 'og:site_name',
        content: 'Victor Emanuel Personal Trainer'
    },
    // Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
        content: 'Victor Emanuel Personal Trainer - Transforme Seu Corpo e Sua Vida'
    },
    {
      name: 'twitter:description',
      content: 'Transforme seu corpo com Victor Emanuel, personal trainer especializado em emagrecimento, ganho de massa muscular e condicionamento físico. Resultados garantidos!'
    },
    {
      name: 'twitter:image',
      content: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80'
    },
    // Additional SEO
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'theme-color',
      content: '#10b981'
    },
    {
      name: 'msapplication-TileColor',
      content: '#10b981'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://victoremanueltrainer.com'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    }
  ],
  script: [
    // Google Analytics placeholder (uncomment and add your GA4 ID)
    /*
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `
    }
    */
    // Structured Data for SEO
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Victor Emanuel",
        "jobTitle": "Personal Trainer",
        "description": "Personal trainer especializado em transformação corporal com mais de 8 anos de experiência",
        "url": "https://victoremanueltrainer.com",
        "sameAs": [
          "https://instagram.com/victoremanueltrainer",
          "https://tiktok.com/@victoremanueltrainer"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-11-99999-9999",
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "offers": {
          "@type": "Offer",
          "name": "Treinamento Personalizado com Victor Emanuel",
          "description": "Treinamento personalizado",
          "priceCurrency": "BRL",
          "price": "199",
          "priceValidUntil": "2024-12-31"
        }
      })
    }
  ]
})

// Initialize AOS animations on client side
onMounted(() => {
  if (process.client) {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      })
    })
  }
})
</script>

<style>
/* Additional page-specific styles if needed */
html {
  scroll-behavior: smooth;
}

/* Ensure sections have proper spacing for anchor links */
section[id] {
  scroll-margin-top: 80px;
}
</style>