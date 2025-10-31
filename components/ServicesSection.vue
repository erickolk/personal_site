<template>
  <section id="servicos" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
        <span class="text-orange-500 font-semibold text-lg">Meus Serviços</span>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
          Soluções Completas para <span class="text-gradient">Seu Objetivo</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Escolha o plano ideal para sua jornada de transformação. Todos incluem acompanhamento personalizado e suporte completo.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Mensal Plan -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay="50">
          <div class="p-8">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-black rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-calendar-day text-white text-2xl"></i>
            </div>
            
            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Plano Mensal</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Treinamento personalizado mês a mês com acompanhamento contínuo para manter a constância e evoluir sem parar.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Treinos 100% personalizados</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Check-ins semanais</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Suporte via WhatsApp</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="mb-2">
              <span class="text-3xl font-bold text-gray-800">R$ 200</span>
              <span class="text-gray-600">/mês</span>
            </div>
            <p class="text-sm text-gray-600 mb-6">
              Pagamento: <strong>R$ 200 no PIX</strong> ou <strong>em até 12x no cartão de crédito</strong>.
            </p>

            <!-- CTA -->
            <a 
              href="https://wa.me/5582981539768?text=Ol%C3%A1!%20Quero%20o%20Plano%20Mensal.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F" 
              target="_blank" rel="noopener" 
              class="btn-primary w-full text-center inline-block"
            >
              Quero esse plano!
            </a>
          </div>
        </div>
        <!-- Bimestral Plan -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay="100">
          <div class="p-8">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-black rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-calendar-alt text-white text-2xl"></i>
            </div>
            
            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Plano Bimestral</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Dois meses de treinamento personalizado para você começar com tudo. Ideal para quem busca resultados rápidos e consistentes.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Treinos 100% personalizados</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Acompanhamento quinzenal</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Suporte via WhatsApp</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-800">R$ 200</span>
              <span class="text-gray-600">/bimestre</span>
            </div>

            <!-- CTA -->
            <a 
              href="https://wa.me/5582981539768?text=Ol%C3%A1!%20Quero%20o%20Plano%20Bimestral.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F" 
              target="_blank" rel="noopener" 
              class="btn-primary w-full text-center inline-block"
            >
              Quero esse plano!
            </a>
          </div>
        </div>

        <!-- Trimestral Plan -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-500 relative" data-aos="fade-up" data-aos-delay="200">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Mais Popular
            </span>
          </div>
          
          <div class="p-8">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-black rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-calendar-check text-white text-2xl"></i>
            </div>
            
            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Plano Trimestral</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Três meses de acompanhamento para consolidar seus hábitos e alcançar metas mais ousadas. O melhor custo-benefício.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Todos os benefícios do plano bimestral</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Avaliação postural inicial</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Ajustes mensais no treino</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-800">R$ 270</span>
              <span class="text-gray-600">/trimestre</span>
            </div>

            <!-- CTA -->
            <a 
              href="https://wa.me/5582981539768?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Plano%20Trimestral.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F" 
              target="_blank" rel="noopener" 
              class="btn-primary w-full text-center inline-block"
            >
              Quero esse plano!
            </a>
          </div>
        </div>

        <!-- 4 Meses Plan -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay="300">
          <div class="p-8">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-black rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-road text-white text-2xl"></i>
            </div>
            
            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Plano de 4 Meses</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Um programa completo para uma transformação real e duradoura. Ideal para quem está comprometido com a mudança de vida.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Todos os benefícios do plano trimestral</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">2 avaliações posturais</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-orange-500"></i>
                <span class="text-gray-600">Suporte prioritário</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-800">R$ 350</span>
              <span class="text-gray-600">/4 meses</span>
            </div>

            <!-- CTA -->
            <a 
              href="https://wa.me/5582981539768?text=Ol%C3%A1!%20Quero%20o%20Plano%20de%204%20Meses.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F" 
              target="_blank" rel="noopener" 
              class="btn-primary w-full text-center inline-block"
            >
              Quero esse plano!
            </a>
          </div>
        </div>
      </div>

      <!-- Anual Plan -->
      <div class="mt-16 bg-gradient-to-r from-gray-800 to-black rounded-2xl p-8 text-center text-white" data-aos="fade-up" data-aos-delay="400">
        <h3 class="text-3xl font-bold mb-4">Oferta Especial - Plano Anual</h3>
        <p class="text-xl mb-6 opacity-90">
          Compromisso total com sua evolução por um preço imbatível.
        </p>
        <div class="mb-6">
          <span class="text-5xl font-bold ml-4">R$ 1000</span>
          <span class="text-xl">/ano</span>
        </div>
        <p class="text-lg mb-8 opacity-90">
          Economia e resultados garantidos o ano todo. Vagas limitadas!
        </p>
        <a 
          href="https://wa.me/5582981539768?text=Ol%C3%A1!%20Quero%20o%20Plano%20Anual.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F" 
          target="_blank" rel="noopener" 
          class="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
        >
          <span>Quero o Plano Anual!</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>