<template>
  <section id="inicio" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Single Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="hero"
        alt="Treino acompanhado"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container-custom text-center text-white">
      <div class="max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
        <!-- Main Title -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforme Seu Corpo e 
          <span class="text-orange-500">
          Sua Vida
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">Treinamento personalizado com resultados reais em semanas. </p>
        <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Não é mágica, é apenas meu método, mais de 250 corpos transformados na consultoria. 
          Comece agora, e vamos buscar a sua melhor versão
        </p>

        <!-- Main CTA Button -->
        <div class="mb-12" data-aos="fade-up" data-aos-delay="200">
          <a 
            href="#contato" 
            class="btn-primary text-lg md:text-xl px-12 py-4 inline-flex items-center space-x-3 group"
          >
            <span>Venha fazer parte do time!</span>
            <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <!-- Social Media Links -->
        <div class="flex justify-center items-center space-x-6" data-aos="fade-up" data-aos-delay="400">
          <span class="text-gray-300 text-sm md:text-base">Siga-me nas redes:</span>
          
          <a 
            href="https://wa.me/5582981539768?text=Olá! Gostaria de saber mais sobre o treinamento personalizado." 
            target="_blank"
            class="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            title="WhatsApp"
          >
            <i class="fab fa-whatsapp text-xl"></i>
          </a>
          
          <a 
            href="https://instagram.com/victor_personal10" 
            target="_blank"
            class="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            title="Instagram"
          >
            <i class="fab fa-instagram text-xl"></i>
          </a>
          
          <a 
            href="https://tiktok.com/@emanuell22222" 
            target="_blank"
            class="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            title="TikTok"
          >
            <i class="fab fa-tiktok text-xl"></i>
          </a>
        </div>
      </div>

      <!-- Scroll Down Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sobre" class="text-white/70 hover:text-white transition-colors">
          <i class="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-black/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
  </section>
</template>

<script setup>
import hero from '~/assets/images/hero/IMG_2662.PNG'
</script>