<template>
  <section id="servicos" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
        <span class="text-green-500 font-semibold text-lg">Meus Serviços</span>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
          Planos de <span class="text-gradient">Treinamento</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Escolha o plano ideal para sua jornada de transformação. Todos incluem acompanhamento personalizado e suporte completo.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Online Training -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay="100">
          <div class="p-8">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-laptop text-white text-2xl"></i>
            </div>
            
            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Treinamento Online</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Treinos personalizados que você pode fazer em casa ou na academia. Inclui vídeos explicativos, 
              planilhas detalhadas e acompanhamento semanal via WhatsApp.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Treinos 100% personalizados</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Vídeos explicativos</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Suporte via WhatsApp</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Ajustes semanais</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-800">R$ 199</span>
              <span class="text-gray-600">/mês</span>
            </div>

            <!-- CTA -->
            <a 
              href="#contato" 
              class="btn-primary w-full text-center inline-block"
            >
              Quero esse plano!
            </a>
          </div>
        </div>

        <!-- In-Person Training -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-500 relative" data-aos="fade-up" data-aos-delay="200">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Mais Popular
            </span>
          </div>
          
          <div class="p-8">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-dumbbell text-white text-2xl"></i>
            </div>
            
            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Treinamento Presencial</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Acompanhamento presencial completo com treinos na academia ou ao ar livre. 
              Máxima atenção, correção de postura e motivação em tempo real.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Acompanhamento presencial</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Correção de postura</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Motivação em tempo real</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Flexibilidade de horários</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-800">R$ 399</span>
              <span class="text-gray-600">/mês</span>
            </div>

            <!-- CTA -->
            <a 
              href="#contato" 
              class="btn-primary w-full text-center inline-block"
            >
              Quero esse plano!
            </a>
          </div>
        </div>

        <!-- Integrated Nutrition -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay="300">
          <div class="p-8">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fas fa-apple-alt text-white text-2xl"></i>
            </div>
            
            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Nutrição Integrada</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Plano alimentar personalizado integrado ao seu treino. Cardápios semanais, 
              lista de compras e acompanhamento nutricional completo.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Cardápio personalizado</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Lista de compras</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Receitas saudáveis</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-gray-600">Acompanhamento semanal</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-800">R$ 299</span>
              <span class="text-gray-600">/mês</span>
            </div>

            <!-- CTA -->
            <a 
              href="#contato" 
              class="btn-primary w-full text-center inline-block"
            >
              Quero esse plano!
            </a>
          </div>
        </div>
      </div>

      <!-- Special Offer -->
      <div class="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-center text-white" data-aos="fade-up" data-aos-delay="400">
        <h3 class="text-3xl font-bold mb-4">Oferta Especial - Combo Completo</h3>
        <p class="text-xl mb-6 opacity-90">
          Treinamento Presencial + Nutrição Integrada por apenas
        </p>
        <div class="mb-6">
          <span class="text-2xl line-through opacity-75">R$ 698</span>
          <span class="text-5xl font-bold ml-4">R$ 599</span>
          <span class="text-xl">/mês</span>
        </div>
        <p class="text-lg mb-8 opacity-90">
          Economize R$ 99 por mês! Vagas limitadas - apenas 10 alunos por mês.
        </p>
        <a 
          href="#contato" 
          class="bg-white text-green-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
        >
          <span>Quero o Combo Completo!</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>