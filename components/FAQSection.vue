<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
        <span class="text-green-500 font-semibold text-lg">Dúvidas Frequentes</span>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
          Perguntas <span class="text-gradient">Frequentes</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Tire suas principais dúvidas sobre o treinamento personalizado e como funciona o processo
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-4xl mx-auto">
        <div class="space-y-4">
          <!-- FAQ 1 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <button 
              @click="toggleFAQ(0)"
              class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-800">
                Quanto tempo leva para ver os primeiros resultados?
              </h3>
              <i 
                class="fas fa-chevron-down text-green-500 transition-transform duration-300"
                :class="{ 'rotate-180': openFAQ === 0 }"
              ></i>
            </button>
            <div 
              v-show="openFAQ === 0"
              class="px-8 pb-6 text-gray-600 leading-relaxed"
            >
              <p>
                Os primeiros resultados começam a aparecer já nas primeiras 2-3 semanas! Você notará mais disposição, 
                melhora no sono e pequenas mudanças no corpo. Resultados mais significativos (perda de peso, ganho de massa) 
                são visíveis entre 4-6 semanas, dependendo da dedicação e consistência.
              </p>
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <button 
              @click="toggleFAQ(1)"
              class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-800">
                Preciso ter equipamentos em casa para o treinamento online?
              </h3>
              <i 
                class="fas fa-chevron-down text-green-500 transition-transform duration-300"
                :class="{ 'rotate-180': openFAQ === 1 }"
              ></i>
            </button>
            <div 
              v-show="openFAQ === 1"
              class="px-8 pb-6 text-gray-600 leading-relaxed"
            >
              <p>
                Não necessariamente! Desenvolvo treinos adaptados ao que você tem disponível. Posso criar rotinas usando apenas 
                o peso corporal, ou com equipamentos básicos como halteres, elásticos ou até garrafas de água. 
                Se você tem acesso a uma academia, ainda melhor - adapto tudo para o ambiente disponível.
              </p>
            </div>
          </div>



          <!-- FAQ 4 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="400">
            <button 
              @click="toggleFAQ(3)"
              class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-800">
                Posso cancelar o plano a qualquer momento?
              </h3>
              <i 
                class="fas fa-chevron-down text-green-500 transition-transform duration-300"
                :class="{ 'rotate-180': openFAQ === 3 }"
              ></i>
            </button>
            <div 
              v-show="openFAQ === 3"
              class="px-8 pb-6 text-gray-600 leading-relaxed"
            >
              <p>
                Sim! Não trabalho com contratos de fidelidade. Você pode cancelar a qualquer momento com 30 dias de antecedência. 
                Além disso, ofereço garantia de satisfação de 30 dias - se não ficar satisfeito, devolvemos seu investimento integral. 
                Meu objetivo é que você fique por escolha, não por obrigação.
              </p>
            </div>
          </div>

          <!-- FAQ 5 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="500">
            <button 
              @click="toggleFAQ(4)"
              class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-800">
                Qual a diferença entre o treinamento online e presencial?
              </h3>
              <i 
                class="fas fa-chevron-down text-green-500 transition-transform duration-300"
                :class="{ 'rotate-180': openFAQ === 4 }"
              ></i>
            </button>
            <div 
              v-show="openFAQ === 4"
              class="px-8 pb-6 text-gray-600 leading-relaxed"
            >
              <p>
                <strong>Online:</strong> Você recebe treinos personalizados, vídeos explicativos, planilhas detalhadas e suporte via WhatsApp. 
                Ideal para quem tem flexibilidade de horário e prefere treinar em casa ou na academia sozinho.<br><br>
                <strong>Presencial:</strong> Acompanhamento direto comigo, correção de postura em tempo real, motivação presencial e 
                ajustes imediatos. Perfeito para quem precisa de mais orientação e motivação direta.
              </p>
            </div>
          </div>

          <!-- FAQ 6 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="600">
            <button 
              @click="toggleFAQ(5)"
              class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-800">
                Tenho limitações físicas, posso fazer o treinamento?
              </h3>
              <i 
                class="fas fa-chevron-down text-green-500 transition-transform duration-300"
                :class="{ 'rotate-180': openFAQ === 5 }"
              ></i>
            </button>
            <div 
              v-show="openFAQ === 5"
              class="px-8 pb-6 text-gray-600 leading-relaxed"
            >
              <p>
                Claro! Trabalho com pessoas de todas as idades e condições físicas. Tenho experiência com reabilitação, 
                lesões, problemas articulares e outras limitações. Sempre adapto os exercícios às suas necessidades específicas, 
                sempre com segurança em primeiro lugar. Recomendo uma avaliação médica prévia em casos específicos.
              </p>
            </div>
          </div>

          <!-- FAQ 7 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="700">
            <button 
              @click="toggleFAQ(6)"
              class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-800">
                Como é feito o pagamento e quais são as formas aceitas?
              </h3>
              <i 
                class="fas fa-chevron-down text-green-500 transition-transform duration-300"
                :class="{ 'rotate-180': openFAQ === 6 }"
              ></i>
            </button>
            <div 
              v-show="openFAQ === 6"
              class="px-8 pb-6 text-gray-600 leading-relaxed"
            >
              <p>
                Aceito diversas formas de pagamento: PIX (com desconto), cartão de crédito (até 12x), débito e transferência bancária. 
                O pagamento é mensal, sempre no mesmo dia que você iniciou o plano. Também ofereço desconto para pagamentos trimestrais 
                ou semestrais à vista. Tudo muito transparente e sem taxas ocultas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Still Have Questions CTA -->
      <div class="mt-16 text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white" data-aos="fade-up" data-aos-delay="800">
        <h3 class="text-3xl font-bold mb-4">Ainda tem dúvidas?</h3>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Não encontrou a resposta que procurava? Entre em contato comigo pelo WhatsApp e tire todas as suas dúvidas!
        </p>
        <a 
          href="https://wa.me/5511999999999?text=Olá Victor! Tenho algumas dúvidas sobre o treinamento personalizado." 
          target="_blank"
          class="bg-white text-green-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
        >
          <i class="fab fa-whatsapp text-xl"></i>
          <span>Tirar Dúvidas no WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const openFAQ = ref(null)

const toggleFAQ = (index) => {
  openFAQ.value = openFAQ.value === index ? null : index
}
</script>