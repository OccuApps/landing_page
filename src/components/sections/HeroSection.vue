<template>
  <div class="min-h-[100svh] w-full bg-primary flex flex-col">
    <!-- Main content -->
    <div class="flex-1 flex items-center">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Left content -->
          <div class="flex flex-col items-center md:items-start space-y-4 md:space-y-8">
            <h1
              class="text-4xl sm:text-5xl md:max-lg:text-5xl lg:text-6xl font-extrabold text-center text-white md:text-left">
              <span class="text-dark-brown">Impulsa</span> tu cafetería<br class="hidden md:block" />
              y conecta con<br class="hidden md:block" />
              <span class="text-dark-brown"> nuevos clientes</span>
            </h1>

            <p class="text-xl lg:text-2xl text-slate-100 text-center md:text-left max-w-xl my-2 md:my-3">
              Únete a nuestro marketplace exclusivo para cafeterías independientes y forma parte
              de una comunidad apasionada por el café
            </p>

            <!-- Feature pills -->
            <div class="flex flex-col sm:flex-row gap-4 w-full py-4 md:pt-0">
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
              <RegisterCTA class="text-xl sm:text-2xl w-full sm:w-auto" path="registro">
                Regístrate aquí para el lanzamiento gratuito
              </RegisterCTA>
            </div>
          </div>

          <!-- Right content -->
          <div class="relative flex justify-center z-10 mt-8 md:mt-0">
            <div class="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-none mx-auto">
              <img src="/marketplace-mockup.png" alt="OCCU App Preview" class="w-full h-auto object-cover animate-float"
                loading="eager" />

              <!-- Annotations positioned relative to phone -->
              <div class="hidden md:block absolute w-full h-full top-[10%] left-[10%]">
                <!-- Top annotation -->
                <div
                  class="absolute left-[-10%] xl:-left-[5%] md:top-0 lg:top-[20%] flex flex-col justify-center items-center gap-2">

                  <div class="text-dark-brown text-lg xl:text-xl font-bold pb-2">
                    <span>+500 cafeterías</span>
                  </div>
                  <svg class="w-auto h-[36px] text-accent transform rotate-[30deg]" viewBox="0 0 48 24">
                    <path d="M 2 2 C 10 14 21 25 46 22" stroke="currentColor" fill="none" stroke-width="2" />
                  </svg>
                </div>

                <!-- Bottom annotation -->
                <div
                  class="absolute right-[10%] xl:right-[20%] bottom-[40%] flex flex-col justify-center items-center gap-2">
                  <div class="text-dark-brown text-lg xl:text-xl font-bold flex flex-col items-end pb-2">
                    <span>❤️ Comunidad</span>
                    <span>activa</span>
                  </div>
                  <svg class="w-auto h-[36px] text-accent transform -rotate-[70deg]" viewBox="0 0 48 24">
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
    <div class="absolute right-[5%] bottom-[5%] pointer-events-none hidden xl:block">
      <img src="/coffee-cup.png" alt="" class="w-[15vw] max-w-[200px] transform animate-float-delayed"
        aria-hidden="true" loading="lazy" />
    </div>
  </div>
</template>

<script setup>
import RegisterCTA from "../shared/RegisterCTA.vue";
</script>
