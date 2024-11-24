<template>
  <div class="min-h-[100svh] w-full relative flex items-center overflow-hidden">
    <!-- Background with overlay -->
    <div class="absolute inset-0">
      <img src="/coffee-experience.png" alt="" class="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
      <div class="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary/90"></div>
    </div>

    <!-- Decorative elements -->
    <img src="/coffee-beans-2.png" alt=""
      class="absolute -top-[5%] right-0 w-[300px] sm:w-[450px] lg:w-[700px] h-auto 
             transform translate-x-[15%] rotate-[45deg] hidden md:block pointer-events-none animate-float-rotate opacity-60" aria-hidden="true"
      loading="lazy" />

    <!-- Content -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
      <div class="max-w-3xl mx-auto">
        <!-- Section label -->
        <div class="group">
          <span class="inline-block px-6 py-3 bg-white/10 rounded-full text-white text-base 
                     hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
            Nuestra Historia desde 2020 ✨
          </span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white my-8 leading-tight">
          Sobre Nosotros
        </h2>

        <!-- Mission statement -->
        <p class="text-xl sm:text-2xl text-white font-medium mb-12 leading-relaxed">
          Conectamos amantes del café con experiencias auténticas y cafeterías independientes.
        </p>

        <!-- Main content -->
        <div class="space-y-8 text-base sm:text-lg text-white/90">
          <p class="leading-relaxed max-w-2xl">
            Somos un grupo de entusiastas, unidos por nuestra pasión por el café,
            la innovación tecnológica y las experiencias excepcionales.
          </p>

          <!-- Feature cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-12">
            <div class="bg-white/5 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 
                        group cursor-pointer">
              <span class="text-4xl mb-4 block group-hover:scale-110 transition-transform">☕</span>
              <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Cafeterías Independientes</h3>
              <p class="text-white/80 text-sm sm:text-base">Impulsando el crecimiento de negocios locales</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 
                        group cursor-pointer">
              <span class="text-4xl mb-4 block group-hover:scale-110 transition-transform">🏠</span>
              <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Baristas Caseros</h3>
              <p class="text-white/80 text-sm sm:text-base">Todo lo necesario para tu café en casa</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 
                        group cursor-pointer">
              <span class="text-4xl mb-4 block group-hover:scale-110 transition-transform">🔍</span>
              <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Exploradores</h3>
              <p class="text-white/80 text-sm sm:text-base">Descubre nuevas experiencias de café</p>
            </div>
            <div class="bg-white/5 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 
                        group cursor-pointer">
              <span class="text-4xl mb-4 block group-hover:scale-110 transition-transform">❤️</span>
              <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Amantes del Café</h3>
              <p class="text-white/80 text-sm sm:text-base">Comunidad de café artesanal</p>
            </div>
          </div>

          <!-- CTA section -->
          <div class="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-md">
            <p class="text-lg sm:text-xl font-semibold text-white mb-6 leading-relaxed">
              Únete gratis durante el lanzamiento y sé parte de nuestra comunidad pionera de cafeterías.
            </p>
            <div class="group hover:scale-105 transition-transform duration-300">
              <RegisterCTA variant="primary"
                class="w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RegisterCTA from '../shared/RegisterCTA.vue'
</script>
