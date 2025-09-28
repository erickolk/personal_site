<template>
  <section id="resultados" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
        <span class="text-green-500 font-semibold text-lg">Transformações Reais</span>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
          Resultados Reais de <span class="text-gradient">Alunos Satisfeitos</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Veja as incríveis transformações dos meus alunos. Estes resultados podem ser seus também!
        </p>
      </div>

      <!-- Results Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Result 1 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="100">
          <div class="relative">
            <!-- Before/After Images -->
            <div class="grid grid-cols-2">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Antes da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  ANTES
                </div>
              </div>
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Depois da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  DEPOIS
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Maria Silva</h3>
            <p class="text-gray-600 mb-4">Perdeu 15kg em 3 meses</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Peso inicial:</span>
                <span class="font-semibold">78kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Peso atual:</span>
                <span class="font-semibold text-green-500">63kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tempo:</span>
                <span class="font-semibold">3 meses</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 2 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="200">
          <div class="relative">
            <div class="grid grid-cols-2">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Antes da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  ANTES
                </div>
              </div>
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Depois da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  DEPOIS
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">João Santos</h3>
            <p class="text-gray-600 mb-4">Ganhou 8kg de massa muscular</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Peso inicial:</span>
                <span class="font-semibold">65kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Peso atual:</span>
                <span class="font-semibold text-green-500">73kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tempo:</span>
                <span class="font-semibold">4 meses</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 3 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="300">
          <div class="relative">
            <div class="grid grid-cols-2">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Antes da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  ANTES
                </div>
              </div>
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Depois da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  DEPOIS
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Ana Costa</h3>
            <p class="text-gray-600 mb-4">Perdeu 22kg em 6 meses</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Peso inicial:</span>
                <span class="font-semibold">89kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Peso atual:</span>
                <span class="font-semibold text-green-500">67kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tempo:</span>
                <span class="font-semibold">6 meses</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 4 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="400">
          <div class="relative">
            <div class="grid grid-cols-2">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Antes da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  ANTES
                </div>
              </div>
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Depois da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  DEPOIS
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Pedro Lima</h3>
            <p class="text-gray-600 mb-4">Definição muscular em 5 meses</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">BF inicial:</span>
                <span class="font-semibold">18%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">BF atual:</span>
                <span class="font-semibold text-green-500">12%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tempo:</span>
                <span class="font-semibold">5 meses</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 5 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="500">
          <div class="relative">
            <div class="grid grid-cols-2">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Antes da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  ANTES
                </div>
              </div>
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Depois da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  DEPOIS
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Carla Mendes</h3>
            <p class="text-gray-600 mb-4">Perdeu 18kg em 4 meses</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Peso inicial:</span>
                <span class="font-semibold">82kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Peso atual:</span>
                <span class="font-semibold text-green-500">64kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tempo:</span>
                <span class="font-semibold">4 meses</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 6 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="600">
          <div class="relative">
            <div class="grid grid-cols-2">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Antes da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  ANTES
                </div>
              </div>
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Depois da transformação"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  DEPOIS
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Roberto Alves</h3>
            <p class="text-gray-600 mb-4">Ganhou 12kg de massa magra</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Peso inicial:</span>
                <span class="font-semibold">68kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Peso atual:</span>
                <span class="font-semibold text-green-500">80kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tempo:</span>
                <span class="font-semibold">7 meses</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" data-aos="fade-up" data-aos-delay="700">
        <div class="text-center">
          <div class="text-4xl font-bold text-green-500 mb-2">200+</div>
          <div class="text-gray-600">Alunos Transformados</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-blue-500 mb-2">95%</div>
          <div class="text-gray-600">Taxa de Sucesso</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-orange-500 mb-2">2.5kg</div>
          <div class="text-gray-600">Perda Média/Mês</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-purple-500 mb-2">5+</div>
          <div class="text-gray-600">Anos de Experiência</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center" data-aos="fade-up" data-aos-delay="800">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">Seja o Próximo Sucesso!</h3>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Estes resultados podem ser seus também. Comece sua transformação hoje mesmo!
        </p>
        <a 
          href="#contato" 
          class="btn-primary text-lg px-12 py-4 inline-flex items-center space-x-3"
        >
          <span>Quero Minha Transformação</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>