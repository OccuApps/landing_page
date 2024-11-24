<template>
  <div class="min-h-[100svh] w-full bg-primary flex items-center py-16 sm:py-20 relative">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary opacity-50"></div>

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
        <!-- Content -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 sm:space-y-8">
          <!-- Banner - full width on mobile -->
          <div class="w-full sm:w-auto">
            <span class="inline-block w-full sm:w-auto text-center px-6 py-3 bg-white/10 rounded-full 
                       text-white text-base backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              ¡Únete gratis durante el lanzamiento! 🚀
            </span>
          </div>

          <!-- Heading -->
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left 
                     leading-tight max-w-[540px] sm:max-w-none">
            Impulsa tu cafetería y conecta con nuevos clientes
          </h1>

          <!-- Description -->
          <p class="text-base sm:text-lg text-white/90 text-center lg:text-left max-w-xl 
                    leading-relaxed px-4 sm:px-0">
            Únete a nuestro marketplace exclusivo para cafeterías independientes y forma parte
            de una comunidad apasionada por el café
          </p>

          <!-- Feature cards - stacked on mobile -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <div class="flex items-center justify-center sm:justify-start gap-3 p-4 
                        bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
              <span class="text-2xl">✨</span>
              <span class="text-white font-medium">Sin costos</span>
            </div>
            <div class="flex items-center justify-center sm:justify-start gap-3 p-4 
                        bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
              <span class="text-2xl">🚀</span>
              <span class="text-white font-medium">Mayor visibilidad</span>
            </div>
            <div class="flex items-center justify-center sm:justify-start gap-3 p-4 
                        bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
              <span class="text-2xl">💫</span>
              <span class="text-white font-medium">Más ventas</span>
            </div>
          </div>

          <!-- CTA -->
          <div class="group hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <RegisterCTA variant="primary" class="w-full sm:w-auto py-4 text-lg font-medium shadow-xl 
                     hover:shadow-2xl transition-all duration-300" />
          </div>
        </div>

        <!-- Image section -->
        <div class="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          <img src="/marketplace-mockup.png" alt="OCCU App Preview" class="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none mx-auto h-auto 
                   object-contain animate-float" loading="eager" />
          <!-- Floating elements - hidden on mobile -->
          <div class="absolute top-1/4 -left-8 bg-white/20 backdrop-blur-md p-4 rounded-lg 
                      hidden lg:flex items-center gap-2 animate-float-delayed 
                      hover:bg-white/30 transition-all duration-300">
            <span class="text-2xl">☕</span>
            <span class="text-white font-medium">+500 Cafeterías</span>
          </div>
          <div class="absolute bottom-1/4 -right-8 bg-white/20 backdrop-blur-md p-4 rounded-lg 
                      hidden lg:flex items-center gap-2 animate-float
                      hover:bg-white/30 transition-all duration-300">
            <span class="text-2xl">❤️</span>
            <span class="text-white font-medium">Comunidad activa</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <img src="/coffee-beans.png" alt="" class="absolute bottom-0 left-0 w-[550px] sm:w-[600px] lg:w-[850px] 
               transform -translate-x-1/4 rotate-45 animate-float opacity-60" aria-hidden="true" loading="lazy" />
      <img src="/coffee-cup.png" alt="" class="absolute -bottom-[5%] right-[5%] w-[150px] sm:w-[200px] lg:w-[400px] 
               transform animate-float-delayed hidden xl:block z-[1]" aria-hidden="true" loading="lazy" />
    </div>
  </div>
</template>

<script setup>
import RegisterCTA from '../shared/RegisterCTA.vue'
</script>