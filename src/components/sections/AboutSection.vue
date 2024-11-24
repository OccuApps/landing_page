<template>
  <div class="min-h-[100svh] w-full relative flex items-center overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0">
      <img 
        src="/coffee-experience.png" 
        alt="" 
        class="w-full h-full object-cover"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/85 backdrop-blur-sm"></div>
    </div>

    <!-- Decorative elements -->
    <img 
  src="/coffee-beans-2.png" 
  alt="" 
  class="absolute -top-[5%] right-0 w-[300px] sm:w-[450px] lg:w-[700px] h-auto 
         transform translate-x-[15%] rotate-[45deg] hidden md:block pointer-events-none animate-float-rotate"
  aria-hidden="true"
/>
    <!-- Content -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-16">
      <div class="max-w-3xl">
        <!-- Section label -->
        <span class="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm sm:text-base mb-6">
          Nuestra Historia ✨
        </span>

        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
          Sobre Nosotros
        </h2> 
        
        <!-- Mission statement -->
        <p class="text-xl sm:text-2xl text-white font-medium mb-8 leading-relaxed">
          Conectamos amantes del café con experiencias auténticas y cafeterías independientes desde 2020.
        </p>
        
        <!-- Main content -->
        <div class="space-y-6 text-lg text-white/90">
          <p class="leading-relaxed">
            Somos un grupo de entusiastas, unidos por nuestra pasión por el café, 
            la innovación tecnológica y las experiencias excepcionales.
          </p>
          
          <!-- Features cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div class="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <span class="text-3xl mb-4 block">☕</span>
              <h3 class="font-semibold text-white mb-2">Cafeterías Independientes</h3>
              <p class="text-white/80">Impulsando el crecimiento de negocios locales</p>
            </div>
            <div class="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <span class="text-3xl mb-4 block">🏠</span>
              <h3 class="font-semibold text-white mb-2">Baristas Caseros</h3>
              <p class="text-white/80">Todo lo necesario para tu café en casa</p>
            </div>
            <div class="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <span class="text-3xl mb-4 block">🔍</span>
              <h3 class="font-semibold text-white mb-2">Exploradores</h3>
              <p class="text-white/80">Descubre nuevas experiencias de café</p>
            </div>
            <div class="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <span class="text-3xl mb-4 block">❤️</span>
              <h3 class="font-semibold text-white mb-2">Amantes del Café</h3>
              <p class="text-white/80">Comunidad de café artesanal</p>
            </div>
          </div>

          <!-- Call to action -->
          <div class="bg-white/10 p-6 sm:p-8 rounded-xl mt-12">
            <p class="font-semibold text-white text-xl mb-6 leading-relaxed">
              Únete gratis durante el lanzamiento y sé parte de nuestra comunidad pionera de cafeterías.
            </p>
            <RegisterCTA variant="primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RegisterCTA from '../shared/RegisterCTA.vue'
</script>
