<template>
    <div class="w-full py-20">
      <div class="max-w-3xl mx-auto px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Únete a la comunidad de cafeterías independientes</h1>
          <p class="text-secondary text-xl">
            Regístrate para recibir acceso gratuito al marketplace en su lanzamiento
          </p>
        </div>
  
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <input 
              type="text" 
              v-model="form.cafeName"
              placeholder="Nombre de la cafetería"
              required
              class="w-full px-4 py-3 border rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
  
          <div>
            <input 
              type="text" 
              v-model="form.ownerName"
              placeholder="Nombre completo del propietario o representante"
              required
              class="w-full px-4 py-3 border rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
  
          <div>
            <input 
              type="email" 
              v-model="form.email"
              placeholder="Correo electrónico"
              required
              class="w-full px-4 py-3 border rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
  
          <div>
            <input 
              type="tel" 
              v-model="form.phone"
              placeholder="Teléfono"
              class="w-full px-4 py-3 border rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
  
          <div class="flex items-center">
            <input 
              type="checkbox" 
              v-model="form.terms"
              required
              class="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label class="ml-2 text-secondary">
              Acepto los términos y condiciones y la política de privacidad
            </label>
          </div>
  
          <button 
            type="submit"
            class="w-full btn-primary text-lg"
          >
            Quiero ser parte
          </button>
        </form>
  
        <div 
          v-if="showSuccess" 
          class="mt-8 text-center"
        >
          <h2 class="text-2xl font-bold text-primary">¡Gracias por unirte!</h2>
          <p class="text-secondary">Te contactaremos pronto con los detalles del lanzamiento</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  const showSuccess = ref(false)
  const form = reactive({
    cafeName: '',
    ownerName: '',
    email: '',
    phone: '',
    terms: false
  })
  
  const handleSubmit = () => {
    showSuccess.value = true
  }
  </script>