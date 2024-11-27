<template>
  <div class="min-h-[100svh] w-full bg-primary flex items-center relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <img src="/coffee-experience.png" alt="" class="w-full h-full object-cover opacity-10" loading="lazy" />
    </div>
    <!-- Decorative elements -->
    <img src="/coffee-beans-2.png" alt=""
      class="absolute -top-[5%] right-0 w-[300px] sm:w-[450px] lg:w-[700px] xl:w-[35vhx] h-auto 
             transform translate-x-[15%] rotate-[45deg] hidden md:block pointer-events-none animate-float-rotate opacity-1" aria-hidden="true"
      loading="lazy" />

    <!-- Content -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
      <div class="max-w-4xl mx-auto text-center lg:text-left">
        <!-- Heading -->
        <h2 class="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown leading-tight mb-6">
          Sobre Nosotros
        </h2>

        <!-- Mission Statement -->
        <p class="text-lg sm:text-xl text-gray-50 mb-12 leading-relaxed">
          Conectamos amantes del café con experiencias auténticas y cafeterías independientes.
        </p>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <span class="text-orange-500 text-4xl mb-4">☕</span>
            <h3 class="text-lg font-bold text-dark-brown mb-2">Cafeterías Independientes</h3>
            <p class="text-base text-gray-600">Impulsando el crecimiento de negocios locales.</p>
          </div>
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <span class="text-orange-500 text-4xl mb-4">🏠</span>
            <h3 class="text-lg font-bold text-dark-brown mb-2">Baristas Caseros</h3>
            <p class="text-base text-gray-600">Todo lo necesario para tu café en casa.</p>
          </div>
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <span class="text-orange-500 text-4xl mb-4">🔍</span>
            <h3 class="text-lg font-bold text-dark-brown mb-2">Exploradores</h3>
            <p class="text-base text-gray-600">Descubre nuevas experiencias de café.</p>
          </div>
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <span class="text-orange-500 text-4xl mb-4">❤️</span>
            <h3 class="text-lg font-bold text-dark-brown mb-2">Amantes del Café</h3>
            <p class="text-base text-gray-600">Comunidad de café artesanal.</p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="w-full">
          <RegisterCTA variant="primary" class="text-2xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import shared RegisterCTA component
import RegisterCTA from '../shared/RegisterCTA.vue';
</script>
