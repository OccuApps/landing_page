<template>
  <section id="home" class="min-h-[100svh] w-full bg-primary flex items-center py-20 sm:py-16 relative overflow-x-hidden">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        <!-- Content -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
          <span class="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm sm:text-base 
                     hover:bg-white/20 transition-all duration-300">
            ¡Únete gratis durante el lanzamiento! 🚀
          </span>
          
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
            Impulsa tu cafetería y conecta con nuevos clientes
          </h1>
          
          <p class="text-base sm:text-lg text-white/90 text-center lg:text-left max-w-xl">
            Únete a nuestro marketplace exclusivo para cafeterías independientes y forma parte 
            de una comunidad apasionada por el café
          </p>

          <!-- Feature highlights -->
          <div class="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <div class="flex items-center gap-2">
              <span class="text-white/90">✨</span>
              <span class="text-white/90">Sin costos</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-white/90">🚀</span>
              <span class="text-white/90">Mayor visibilidad</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-white/90">💫</span>
              <span class="text-white/90">Más ventas</span>
            </div>
          </div>

          <RegisterCTA variant="primary" />
        </div>

        <!-- Image with floating elements -->
        <div class="w-full lg:w-1/2 relative">
          <img 
            src="/marketplace-mockup.png" 
            alt="OCCU App Preview"
            class="w-full max-w-[400px] sm:max-w-[700px] lg:max-w-none mx-auto h-auto object-contain animate-float"
          />
          <!-- Floating elements -->
          <div class="absolute top-1/4 -left-8 bg-white/10 backdrop-blur-sm p-4 rounded-lg 
                    hidden lg:block animate-float-delayed">
            <span class="text-white">☕ +500 Cafeterías</span>
          </div>
          <div class="absolute bottom-1/4 -right-8 bg-white/10 backdrop-blur-sm p-4 rounded-lg 
                    hidden lg:block animate-float">
            <span class="text-white">❤️ Comunidad activa</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <img 
        src="/coffee-beans.png" 
        alt=""
        class="absolute bottom-0 left-0 w-full sm:w-[550px] lg:w-[800px] 
               transform -translate-x-1/4 rotate-45  animate-float"
        aria-hidden="true"
      />
      <!-- <img 
        src="/coffee-cup.png" 
        alt=""
        class="absolute bottom-[5%] right-0 w-[150px] sm:w-[200px] lg:w-[400px] 
               transform  animate-float-delayed hidden lg:block"
        aria-hidden="true"
      /> -->
    </div>
  </section>
</template>

<script setup>
import RegisterCTA from '../shared/RegisterCTA.vue'
</script>