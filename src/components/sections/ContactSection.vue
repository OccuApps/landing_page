<!-- components/sections/Contact.vue -->
<template>
  <div class="min-h-[100svh] w-full flex items-center py-20 sm:py-16">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark text-center mb-8">
          Contáctanos
        </h2>

        <form class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nombre*</label>
              <input 
                type="text" 
                required
                class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input 
                type="tel" 
                class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input 
              type="email" 
              required
              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Mensaje*</label>
            <textarea 
              rows="4" 
              required
              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
              placeholder="Escribe tus comentarios..."
            ></textarea>
          </div>

          <button 
            type="submit"
            class="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark 
                   transition-colors duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  </div>
</template>