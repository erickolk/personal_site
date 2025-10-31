<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 to-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
        <span class="text-orange-500 font-semibold text-lg">Contato</span>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
          Vamos Começar Sua <span class="text-gradient">Transformação</span> Hoje!
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Preencha o formulário abaixo e receba uma consultoria gratuita personalizada para seus objetivos
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-right" data-aos-delay="200">
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              <i class="fas fa-gift text-orange-500 mr-3"></i>
              Consultoria Gratuita
            </h3>
            <p class="text-gray-600">
              Ao preencher o formulário, você ganha uma consultoria gratuita de 30 minutos.
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                :class="{ 'border-red-500': errors.name }"
                placeholder="Seu nome completo"
              >
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                :class="{ 'border-red-500': errors.email }"
                placeholder="seu@email.com"
              >
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>

            <!-- Phone Field -->
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp *
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                :class="{ 'border-red-500': errors.phone }"
                placeholder="(11) 99999-9999"
              >
              <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
            </div>

            <!-- Goal Field -->
            <div>
              <label for="goal" class="block text-sm font-semibold text-gray-700 mb-2">
                Qual seu principal objetivo?
              </label>
              <select
                id="goal"
                v-model="form.goal"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              >
                <option value="">Selecione seu objetivo</option>
                <option value="perder-peso">Perder peso</option>
                <option value="ganhar-massa">Ganhar massa muscular</option>
                <option value="definir-corpo">Definir o corpo</option>
                <option value="melhorar-saude">Melhorar a saúde</option>
                <option value="condicionamento">Melhorar condicionamento</option>
                <option value="reabilitacao">Reabilitação/Fisioterapia</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                Conte mais sobre você (opcional)
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="Conte sobre sua rotina, experiência com exercícios, limitações, etc."
              ></textarea>
            </div>

            <!-- LGPD Consent -->
            <div class="flex items-start space-x-3">
              <input
                id="consent"
                v-model="form.consent"
                type="checkbox"
                required
                class="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              >
              <label for="consent" class="text-sm text-gray-600 leading-relaxed">
                Concordo em fornecer meus dados para receber informações sobre treinamento personalizado e 
                aceito os <a href="#" class="text-orange-500 hover:underline">termos de privacidade</a>. 
                Posso cancelar a qualquer momento. *
              </label>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-orange-500 to-black text-white font-bold py-4 px-8 rounded-lg hover:from-orange-600 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                <i class="fas fa-paper-plane"></i>
                <span>Quero Minha Consultoria Gratuita!</span>
              </span>
              <span v-else class="flex items-center justify-center space-x-2">
                <i class="fas fa-spinner fa-spin"></i>
                <span>Enviando...</span>
              </span>
            </button>

            <!-- Success/Error Messages -->
            <div v-if="submitMessage" class="text-center p-4 rounded-lg" :class="submitSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
              <i :class="submitSuccess ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'" class="mr-2"></i>
              {{ submitMessage }}
            </div>
          </form>
        </div>

        <!-- Contact Info & Social -->
        <div class="space-y-8" data-aos="fade-left" data-aos-delay="400">
          <!-- Direct Contact -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">
              <i class="fas fa-comments text-orange-500 mr-3"></i>
              Prefere Falar Diretamente?
            </h3>
            
            <div class="space-y-4">
              <!-- WhatsApp -->
              <a 
                href="https://wa.me/5582981539768?text=Olá! Gostaria de saber mais sobre o treinamento personalizado do Team Victor." 
                target="_blank"
                class="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors group"
              >
                <div class="bg-orange-500 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                  <i class="fab fa-whatsapp text-xl"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">WhatsApp</h4>
                  <p class="text-gray-600">(82) 98153-9768</p>
                  <p class="text-sm text-orange-600">Resposta em até 1 hora</p>
                </div>
              </a>

              <!-- Instagram -->
              <a 
                href="https://instagram.com/victor_personal10" 
                target="_blank"
                class="flex items-center space-x-4 p-4 bg-black-50 rounded-lg hover:bg-black-100 transition-colors group"
              >
                <div class="bg-gradient-to-r from-orange-500 to-black text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                  <i class="fab fa-instagram text-xl"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Instagram</h4>
                  <p class="text-gray-600">@victor_personal10</p>
                  <p class="text-sm text-black-600">Dicas diárias e transformações</p>
                </div>
              </a>

              <!-- TikTok -->
              <a 
                href="https://tiktok.com/@emanuell22222" 
                target="_blank"
                class="flex items-center space-x-4 p-4 bg-black-50 rounded-lg hover:bg-black-100 transition-colors group"
              >
                <div class="bg-black text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                  <i class="fab fa-tiktok text-xl"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">TikTok</h4>
                  <p class="text-gray-600">@emanuell22222</p>
                  <p class="text-sm text-black-600">Vídeos de treinos e dicas</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Map -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left" data-aos-delay="600">
            <h3 class="text-xl font-bold text-gray-800 p-6 flex items-center">
              <i class="fas fa-map-marker-alt text-orange-500 mr-3"></i>
              Atendimento Presencial
            </h3>
            <iframe 
              src="https://maps.google.com/maps?key=AIzaSyB
              &output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  goal: '',
  message: '',
  consent: false
})

const errors = ref({})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const remainingSpots = ref(7) // Simulated remaining spots

const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Nome é obrigatório'
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'E-mail é obrigatório'
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'E-mail inválido'
  }
  
  if (!form.value.phone.trim()) {
    errors.value.phone = 'WhatsApp é obrigatório'
  } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(form.value.phone)) {
    errors.value.phone = 'Formato: (11) 99999-9999'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real application, you would send the data to your backend
    console.log('Form submitted:', form.value)
    
    submitSuccess.value = true
    submitMessage.value = 'Formulário enviado com sucesso! Entraremos em contato em até 2 horas.'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      goal: '',
      message: '',
      consent: false
    }
    
    // Redirect to WhatsApp after success
    setTimeout(() => {
      window.open(`https://wa.me/5582981539768?text=Olá! Acabei de preencher o formulário no site do Team Victor. Gostaria de agendar minha consultoria gratuita.`, '_blank')
    }, 3000)
    
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Erro ao enviar formulário. Tente novamente ou entre em contato pelo WhatsApp.'
  } finally {
    isSubmitting.value = false
  }
}

// Format phone number as user types
watch(() => form.value.phone, (newPhone) => {
  const cleaned = newPhone.replace(/\D/g, '')
  if (cleaned.length <= 11) {
    if (cleaned.length <= 2) {
      form.value.phone = cleaned
    } else if (cleaned.length <= 6) {
      form.value.phone = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`
    } else if (cleaned.length <= 10) {
      form.value.phone = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`
    } else {
      form.value.phone = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`
    }
  }
})
</script>