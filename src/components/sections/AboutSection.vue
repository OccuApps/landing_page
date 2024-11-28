<template>
  <div class="min-h-[100svh] w-full bg-primary flex items-center relative overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="flex flex-col items-center text-center lg:text-left">
        <!-- Heading -->
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-brown mb-6">
          Sobre Nosotros
        </h2>

        <!-- Body Text -->
        <p class="text-lg sm:text-xl text-slate-100 max-w-xl leading-relaxed mb-8">
          Somos un grupo de entusiastas, amantes del café, la tecnología y la experiencia de los usuarios. Desde 2020, nos enfocamos en crear un espacio para los amantes del café de todo tipo. Desde los que lo preparan en sus cafeterías o en casa, hasta los que disfrutan de encontrar experiencias auténticas de cafeterías independientes. OCCU es un mercado en línea que ofrece una amplia gama de productos y servicios para los que, al igual que nosotros, aman el café.
        </p>

        <!-- Decorative Image -->
        <img src="/coffee-cups.png" alt="Coffee to go" class="w-[150px] sm:w-[200px] lg:w-[300px] mx-auto mb-8" />

       
        <!-- CTA Button -->
        <div class="group hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              <RegisterCTA class="text-xl sm:text-2xl w-full sm:w-auto">
                Descubre más
              </RegisterCTA>
            </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RegisterCTA from "../shared/RegisterCTA.vue";
</script>