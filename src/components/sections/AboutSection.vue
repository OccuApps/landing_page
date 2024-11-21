<template>
  <section id="sobre-nosotros" class="min-h-screen w-full relative flex items-center overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0">
      <img 
        src="/coffee-experience.png" 
        alt="" 
        class="w-full h-full object-cover"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-primary/90"></div>
    </div>

    <!-- Decorative beans -->
    <img 
      src="/coffee-beans.png" 
      alt="" 
      class="absolute top-0 right-0 w-[300px] sm:w-[450px] lg:w-[700px] rotate-[90deg] h-auto transform translate-x-1/4 -translate-y-1/4"
      aria-hidden="true"
    />

    <!-- Content -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-3xl">
<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
        Sobre Nosotros
      </h2> 
      <div class="space-y-6 text-lg text-white/90">
        <p>
          Somos un grupo de entusiastas, amantes del café, la tecnología y la experiencia de los usuarios.
        </p>
        <p>
          Desde 2020, nos enfocamos en crear un espacio para los amantes del café de todo tipo. 
          Desde los que lo preparan en sus cafeterias o en casa, hasta los que disfrutan de encontrar 
          experiencias auténticas de cafeterías indepenientes.
        </p>
        <p>
          OCCU es un mercado en línea que ofrece una amplia gama de productos y servicios para los que 
          al igual que nosotros, amamos el café.
        </p>
        <p class="font-semibold text-white">
          Únete gratis durante el lanzamiento y mantén tu lugar en nuestra comunidad de cafeterías pioneras.
        </p>
      </div>
      <div class="mt-12">
        <RegisterCTA variant="primary" />
      </div>
      </div>
    
    </div>
  </section>
</template>

<script setup>
import RegisterCTA from '../shared/RegisterCTA.vue'
</script>

