<template>
  <section id="home" class="min-h-screen w-full bg-primary flex items-center snap-start pt-16 relative">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <!-- Left side - centered on mobile -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6 text-center lg:text-left">
            Impulsa tu cafetería y conecta con nuevos clientes
          </h1>
          <p class="text-base sm:text-lg lg:text-xl text-white mb-6 lg:mb-8 text-center lg:text-left">
            Únete gratis a nuestro marketplace de cafeterías independientes
          </p>
          <!-- <div class="flex justify-center lg:justify-start w-full">
            <RegisterCTA variant="primary" />
          </div> -->
        </div>

        <!-- Right side - centered image -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <div class="relative">
            <img 
              src="/phone-mockup.png" 
              alt="OCCU App Preview" 
              class="w-auto h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
 <!-- Decorative elements -->
 <div class="absolute inset-0 w-full pointer-events-none">
      <img 
        src="/coffee-beans.png" 
        alt="" 
        class="absolute bottom-10 left-0 w-[300px] sm:w-[450px] lg:w-[700px] 
               transform -translate-x-1/4 rotate-[45deg] h-[10vh] lg:h-[25vh] object-contain
               hidden md:block"
        aria-hidden="true"
      />
      <img 
        src="/coffee-cup.png" 
        alt="" 
        class="absolute bottom-[5%] right-0 w-[250px] sm:w-[300px] lg:w-[350px] 
               transform translate-y-2/3
               hidden md:block z-10"
        aria-hidden="true"
      />
    </div>

  </section>
</template>

<script setup>
import RegisterCTA from '../shared/RegisterCTA.vue'
</script>

