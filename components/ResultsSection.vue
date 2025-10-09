<script setup>
import { ref } from 'vue';
import resultado1 from '~/assets/images/resultados/WhatsApp Image 2025-10-07 at 14.46.36.jpeg';
import resultado2 from '~/assets/images/resultados/WhatsApp Image 2025-10-07 at 14.46.36 (1).jpeg';
import resultado3 from '~/assets/images/resultados/WhatsApp Image 2025-10-07 at 14.46.36 (2).jpeg';
import resultado4 from '~/assets/images/resultados/WhatsApp Image 2025-10-07 at 14.46.37.jpeg';
import yasminResultado from '~/assets/images/resultados/yasmin.jpeg';


const resultados = ref([
  {
    id: 1,
    imagem: yasminResultado,
    nome: 'Yasmin',
    descricao: 'Ganhou 6 kilos de massa muscular e teve aumento significativo na definição.',
    pesoInicial: '54kg',
    pesoAtual: '59kg',
    tempo: 'Não informado',
  },
  {
    id: 3,
    imagem: resultado1,
    nome: 'Maria Aparecida',
    descricao: 'Ganhou 8kg de massa muscular',
    pesoInicial: '52kg',
    pesoAtual: '58kg',
    tempo: '1 ano e 6 meses',
  },
  {
    id: 4,
    imagem: resultado2,
    nome: 'Maria Aparecida',
    descricao: 'Aumentou a definição muscular, e melhorou em 100% a postura!',
    pesoInicial: '52kg',
    pesoAtual: '58kg',
    tempo: '1 ano e 6 meses',
  },
  {
    id: 3,
    imagem: resultado4,
    nome: 'Luiza',
    descricao: 'Ganhou 6kg de massa muscular',
    pesoInicial: '70kg',
    pesoAtual: '76kg',
    tempo: '4 meses',
  },
  {
    id: 5,
    imagem: resultado3,
    nome: 'Rafaela',
    descricao: 'Ganhou 5kg de massa muscular',
    pesoInicial: '52kg',
    pesoAtual: '57kg',
    tempo: '4 meses',
  },
]);
</script>

<template>
  <section id="resultados" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
        <span class="text-orange-500 font-semibold text-lg">Resultados</span>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
          Transformações <span class="text-gradient">Reais</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Veja as incríveis transformações dos meus alunos. Estes resultados podem ser seus também!
        </p>
      </div>

      <!-- Results Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Result Card -->
        <div 
          v-for="(resultado, index) in resultados" 
          :key="resultado.id"
          class="bg-white text-black rounded-2xl shadow-lg overflow-hidden card-hover" 
          data-aos="fade-up" 
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="relative">
            <img 
              :src="resultado.imagem" 
              :alt="'Resultado de ' + resultado.nome"
              class="w-full h-64 object-cover"
            >
            <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
              ANTES
            </div>
            <div class="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
              DEPOIS
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ resultado.nome }}</h3>
            <p class="text-gray-600 mb-4">{{ resultado.descricao }}</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Peso inicial:</span>
                <span class="font-semibold">{{ resultado.pesoInicial }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Peso atual:</span>
                <span class="font-semibold text-orange-500">{{ resultado.pesoAtual }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tempo:</span>
                <span class="font-semibold">{{ resultado.tempo }}</span>
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