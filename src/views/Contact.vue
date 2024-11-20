<template>
    <div class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold text-center mb-8">Contáctanos</h1>
      <p class="text-center mb-8">Contactanos o envíanos tus comentarios.</p>
  
      <div class="bg-white rounded-lg shadow-lg p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Contact Name*</label>
            <input 
              type="text" 
              v-model="form.name"
              required
              class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              v-model="form.phone"
              class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700">Email Address*</label>
            <input 
              type="email" 
              v-model="form.email"
              required
              class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700">Subject</label>
            <input 
              type="text" 
              v-model="form.subject"
              class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea 
              v-model="form.message"
              rows="4"
              placeholder="Write your thoughts..."
              class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
            ></textarea>
          </div>
  
          <button 
            type="submit"
            class="w-full py-3 px-4 bg-primary text-white rounded-md hover:bg-opacity-90"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleSubmit = () => {
    // Add form submission logic here
    console.log('Form submitted:', form)
  }
  </script>