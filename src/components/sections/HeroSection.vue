<template>
  <div class="min-h-[100svh] w-full bg-primary flex flex-col">
    <!-- Banner -->
    <div class="w-full bg-dark-brown py-3 lg:px-8 mb-12 lg:mb-0 text-center lg:mt-[40px] text-center lg:text-start">
      <div class="max-w-[1440px] mx-auto">
        <span class="text-white text-lg lg:text-xl">🚀 ¡Únete gratis durante el lanzamiento!</span>

      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 flex items-center">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left content -->
          <div class="flex flex-col items-center lg:items-start space-y-4 lg:space-y-8">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-white lg:text-left">
              <span class="text-dark-brown">Impulsa</span> tu cafetería<br class="hidden lg:block" />
              y conecta con<br class="hidden lg:block" />
              <span class="text-dark-brown"> nuevos clientes</span>
            </h1>

            <p class="text-xl sm:text-2xl text-slate-100 text-center lg:text-left max-w-xl my-2 lg:my-3 ">
              Únete a nuestro marketplace exclusivo para cafeterías independientes y forma parte
              de una comunidad apasionada por el café
            </p>
            <!-- Feature pills -->
            <div class="flex flex-col sm:flex-row gap-4 w-full py-4 lg:pt-0">
              <div class="w-full sm:w-auto px-6 py-3 border-2 border-white rounded-lg 
              flex items-center justify-center gap-2 text-white">
                <span class="text-xl">✨</span>
                <span class="text-xl font-medium">Sin costos</span>
              </div>
              <div class="w-full sm:w-auto px-6 py-3 border-2 border-white rounded-lg 
              flex items-center justify-center gap-2 text-white">
                <span class="text-xl">👁️</span>
                <span class="text-xl font-medium">Mayor visibilidad</span>
              </div>
              <div class="w-full sm:w-auto px-6 py-3 border-2 border-white rounded-lg 
              flex items-center justify-center gap-2 text-white">
                <span class="text-xl">💰</span>
                <span class="text-xl font-medium">Más ventas</span>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="group hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              <RegisterCTA class="text-2xl w-full">
                Regístrate aquí para el lanzamiento gratuito
              </RegisterCTA>
            </div>
          </div>

          <!-- Right content -->
          <div class="relative flex justify-center z-10">
            <div class="relative w-full max-lg:max-w-[500px] lg:max-w-none mx-auto">
              <img src="/marketplace-mockup.png" alt="OCCU App Preview"
                class="w-full h-auto lg:h-[45vh]  object-cover animate-float" loading="eager" />

              <!-- Annotations positioned relative to phone -->
              <div class="hidden lg:block absolute w-full h-full top-0 left-0">
                <!-- Top annotation -->
                <div class="absolute -left-4 top-[20%] flex flex-col justify-center items-center gap-2">

                  <div class="text-dark-brown text-xl font-bold pb-2">
                    <span>+500 cafeterías</span>
                  </div>
                  <svg class="w-auto h-12 text-accent transform rotate-[30deg]" viewBox="0 0 48 24">
                    <path d="M 2 2 C 10 14 21 25 46 22" stroke="currentColor" fill="none" stroke-width="2" />
                  </svg>
                </div>

                <!-- Bottom annotation -->
                <div class="absolute -right-4 bottom-[30%] flex flex-col justify-center items-center gap-2">

                  <div class="text-dark-brown text-xl font-bold flex flex-col items-end pb-2">
                    <span>❤️ Comunidad</span>
                    <span>activa</span>
                  </div>
                  <svg class="w-auto h-12 text-accent transform -rotate-[70deg]" viewBox="0 0 48 24">
                    <path d="M 2 2 C 10 14 21 25 46 22" stroke="currentColor" fill="none" stroke-width="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- <img src="/coffee-beans.png" alt="" class="absolute bottom-0 left-0 w-[550px] sm:w-[600px] lg:w-[850px] 
               transform -translate-x-1/4 rotate-45 animate-float opacity-60" aria-hidden="true" loading="lazy" /> -->
      <img src="/coffee-cup.png" alt="" class="absolute bottom-0 right-[15%] w-[150px] sm:w-[400px] lg:w-[600px] 
               transform animate-float-delayed hidden xl:block" aria-hidden="true" loading="lazy" />
    </div>
  </div>
</template>
<script setup>
import RegisterCTA from "../shared/RegisterCTA.vue";
</script>