<template>
  <section id="sobre" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Trainer Photo -->
        <div class="order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Personal Trainer profissional"
              class="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            >
            <!-- Floating Stats -->
            <div class="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg ">
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-500">5+</div>
                <div class="text-sm text-gray-600">Anos de<br>Experiência</div>
              </div>
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div class="text-center">
                <div class="text-3xl font-bold text-black">200+</div>
                <div class="text-sm text-gray-600">Alunos<br>Transformados</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
          <div class="mb-6">
            <span class="text-orange-500 font-semibold text-lg">Conheça seu treinador</span>
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
              Olá, eu sou o 
              <span class="text-gradient">Victor Emanuel</span>, líder do Team Victor
            </h2>
          </div>

          <div class="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Sou <strong>Victor Emanuel</strong>, especialista em treinamento feminino, e masculino, pós graduando em BODYBUILDING e ESTÉTICA CORPORAL. 
              Tenho +5 anos de experiência ajudando pessoas comuns a alcançarem corpos incríveis e vidas mais saudáveis.
            </p>
            
            <p>
              Por isso desenvolvo planos 100% personalizados e individualizados para suas necessidades e objetivos.
            </p>
          </div>

          <!-- Certifications -->
          <div class="mt-8 mb-8">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Certificações:</h3>
            <div class="grid grid-cols-1 gap-4">
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">CREF Ativo</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">Imersão em Treinamento de Glúteos: Do Básico ao Avançado - João Franken</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">Biomecânica Aplicada ao Exercício para Hipertrofia Muscular - Rafael Socin</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">MTOR: Metodologia de Treinamento Otimizando Resultados - Maurício Medeiros</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">Clínica Prática dos Principais Exercícios da Musculação para Força e Hipertrofia - Jonato Prestes</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">Montagem e Organização do Treinamento - Thiago Trindade</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">Hipertrofia e Estética para Glúteos - Carlos Garon</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">Quebrando Paradigmas - Walter Krause</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">Periodização na Musculação para Máxima Hipertrofia - Leandro Ribeiro</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-orange-500 mr-3"></i>
                <span class="text-gray-600">Avaliação Postural - João Franken</span>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5582981539768?text=Olá! Gostaria de saber mais sobre você e os métodos de treinamento do Team Victor." 
              target="_blank"
              class="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <i class="fab fa-whatsapp"></i>
              <span>Saiba Mais Sobre Mim</span>
            </a>
            
            <a 
              href="#servicos" 
              class="btn-outline inline-flex items-center justify-center space-x-2"
            >
              <i class="fas fa-dumbbell"></i>
              <span>Ver Meus Serviços</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>