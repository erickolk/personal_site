<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Header -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div class="container-custom">
        <div class="flex items-center justify-between py-4">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-dumbbell text-white text-lg"></i>
            </div>
            <span class="text-xl font-bold text-gray-800">FitTransform</span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#inicio" @click.prevent="scrollToSection('inicio')" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Início</a>
            <a href="#sobre" @click.prevent="scrollToSection('sobre')" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Sobre</a>
            <a href="#servicos" @click.prevent="scrollToSection('servicos')" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Serviços</a>
            <a href="#resultados" @click.prevent="scrollToSection('resultados')" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Resultados</a>
            <a href="#depoimentos" @click.prevent="scrollToSection('depoimentos')" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Depoimentos</a>
            <a href="#contato" @click.prevent="scrollToSection('contato')" class="btn-primary">Contato</a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i class="fas fa-bars text-gray-700 text-xl"></i>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div 
          v-show="mobileMenuOpen" 
          class="md:hidden py-4 border-t border-gray-100"
        >
          <div class="flex flex-col space-y-4">
            <a href="#inicio" @click.prevent="scrollToSection('inicio', true)" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Início</a>
            <a href="#sobre" @click.prevent="scrollToSection('sobre', true)" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Sobre</a>
            <a href="#servicos" @click.prevent="scrollToSection('servicos', true)" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Serviços</a>
            <a href="#resultados" @click.prevent="scrollToSection('resultados', true)" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Resultados</a>
            <a href="#depoimentos" @click.prevent="scrollToSection('depoimentos', true)" class="text-gray-700 hover:text-green-500 transition-colors font-medium">Depoimentos</a>
            <a href="#contato" @click.prevent="scrollToSection('contato', true)" class="btn-primary w-full text-center">Contato</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-20">
      <slot />
    </main>

    <!-- WhatsApp Floating Button -->
    <a 
      href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o treinamento personalizado." 
      target="_blank"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 pulse-green"
    >
      <i class="fab fa-whatsapp text-2xl"></i>
    </a>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToSection = (sectionId, isMobile = false) => {
  if (isMobile) {
    closeMobileMenu()
  }
  
  const section = document.getElementById(sectionId)
  if (section) {
    const yOffset = -80; // Altura do header para não sobrepor a seção
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }
}

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
      mobileMenuOpen.value = false
    }
  })
})
</script>