<template>
  <div class="bg-black text-white font-sans leading-normal tracking-normal">
    <!-- Header -->
    <header :class="['bg-black', 'shadow-md', 'sticky', 'top-0', 'z-50', 'transition-all', 'duration-300', { 'py-2': !isScrolled, 'py-1': isScrolled }]">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="text-2xl font-bold text-white"><span class="text-orange-500">#TeamVictor</span></a>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-8">
          <a v-for="item in menuItems" :key="item.name" :href="item.href" @click.prevent="scrollToSection(item.id)" class="text-white hover:text-orange-500 transition-colors duration-300 font-medium">{{ item.name }}</a>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition name="slide-fade">
        <div v-if="isMenuOpen" class="md:hidden bg-black p-4">
          <nav class="flex flex-col space-y-4">
            <a v-for="item in menuItems" :key="item.name" :href="item.href" @click.prevent="closeMenuAndScroll(item.id)" class="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-center">{{ item.name }}</a>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Back to Top Button -->
    <transition name="fade">
      <button v-if="showBackToTop" @click="scrollToTop" class="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white font-bold p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const showBackToTop = ref(false)

const menuItems = [
  { name: 'Início', href: '#inicio', id: 'inicio' },
  { name: 'Sobre', href: '#sobre', id: 'sobre' },
  { name: 'Serviços', href: '#servicos', id: 'servicos' },
  { name: 'Resultados', href: '#resultados', id: 'resultados' },
  { name: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
  { name: 'Contato', href: '#contato', id: 'contato' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  showBackToTop.value = window.scrollY > 300
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80 // Altura do header
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const closeMenuAndScroll = (id) => {
  isMenuOpen.value = false
  scrollToSection(id)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>