<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '~/assets/images/logos/logo.png';

const currentYear = new Date().getFullYear()
const showBackToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 500
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer -->
    <div class="container-custom py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand & Description -->
        <div class="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
          <div class="flex items-center space-x-3 mb-6">
            <a href="#" class="text-2xl font-bold text-white">#TeamVictor</a>
          </div>
          <p class="text-gray-300 mb-6 max-w-md leading-relaxed">
            Especialista em transformação corporal com mais de 8 anos de experiência. 
            Ajudo pessoas comuns a alcançarem resultados extraordinários através de 
            treinamento personalizado.
          </p>
          
          <!-- Social Media -->
          <div class="flex space-x-4">
            <a 
              href="https://wa.me/5582981539768" 
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <i class="fab fa-whatsapp text-xl"></i>
            </a>
            <a 
              href="https://instagram.com/victor_personal10" 
              target="_blank"
              class="bg-gradient-to-r from-orange-500 to-black hover:from-orange-600 hover:to-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="https://tiktok.com/@emanuell22222" 
              target="_blank"
              class="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok text-xl"></i>
            </a>
            <a 
              href="mailto:contato@victoremanueltrainer.com" 
              class="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="E-mail"
            >
              <i class="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 class="text-lg font-semibold mb-6 text-orange-500">Links Rápidos</h4>
          <ul class="space-y-3">
            <li>
              <a href="#hero" class="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i>
                Início
              </a>
            </li>
            <li>
              <a href="#about" class="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i>
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#services" class="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i>
                Serviços
              </a>
            </li>
            <li>
              <a href="#results" class="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i>
                Resultados
              </a>
            </li>
            <li>
              <a href="#testimonials" class="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contact" class="text-gray-300 hover:text-orange-500 transition-colors flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i>
                Contato
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 class="text-lg font-semibold mb-6 text-orange-500">Contato</h4>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <i class="fas fa-map-marker-alt text-orange-500 mt-1"></i>
              <div>
                <p class="text-gray-300">São Paulo, SP</p>
                <p class="text-sm text-gray-400">Atendimento presencial e online</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fab fa-whatsapp text-orange-500"></i>
              <div>
                <p class="text-gray-300">(82) 98153-9768</p>
                <p class="text-sm text-gray-400">Resposta em até 1 hora</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-envelope text-orange-500"></i>
              <div>
                <p class="text-gray-300">contato@victoremanueltrainer.com</p>
                <p class="text-sm text-gray-400">Resposta em até 24h</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-clock text-orange-500"></i>
              <div>
                <p class="text-gray-300">Seg - Sex: 6h às 22h</p>
                <p class="text-sm text-gray-400">Sáb: 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter/Final CTA -->
      <div class="mt-16 pt-8 border-t border-gray-800">
        <div class="bg-gradient-to-r from-orange-500 to-black rounded-2xl p-8 text-center" data-aos="fade-up" data-aos-delay="400">
          <h3 class="text-3xl font-bold mb-4">Pronto para Transformar sua Vida?</h3>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Não deixe para amanhã a transformação que você pode começar hoje. 
            Agende sua consultoria gratuita agora!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5582981539768?text=Olá! Quero agendar minha consultoria gratuita!" 
              target="_blank"
              class="bg-white text-orange-500 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <i class="fab fa-whatsapp text-xl"></i>
              <span>Consultoria Gratuita</span>
            </a>
            <a 
              href="#contact"
              class="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <i class="fas fa-form text-xl"></i>
              <span>Preencher Formulário</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="bg-gray-950 py-6">
      <div class="container-custom">
        <div class="w-full lg:w-4/12 px-4">
          <p class="text-gray-400 mb-4">
            Transformando vidas através do fitness. Foco, disciplina e resultados.
          </p>
        </div>
        <div class="w-full lg:w-auto px-4 mb-8 lg:mb-0">
          <h3 class="font-bold text-lg text-white mb-4">Redes Sociais</h3>
          <div class="flex space-x-4">
            <a href="https://instagram.com/victor_personal10" class="text-gray-400 hover:text-orange-500 transition-colors"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://wa.me/5582981539768" class="text-gray-400 hover:text-orange-500 transition-colors"><i class="fab fa-whatsapp fa-2x"></i></a>
            <a href="https://tiktok.com/@emanuell22222" class="text-gray-400 hover:text-orange-500 transition-colors"><i class="fab fa-tiktok fa-2x"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Back to Top Button -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-black text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Voltar ao topo"
    >
      <i class="fas fa-arrow-up text-xl"></i>
    </button>
  </footer>
</template>