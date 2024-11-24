<template>
  <div class="min-h-[100svh] w-full bg-white flex items-center relative overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <!-- Banner -->
      <div class="w-full sm:w-auto mb-8 text-center">
        <span class="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary text-base">
          Contáctanos ✨
        </span>
      </div>

      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-8 text-center">
        Envíanos tus comentarios
      </h2>

      <!-- Embedded Form -->
      <div class="w-full max-w-2xl mx-auto bg-white/5 rounded-xl shadow-lg overflow-hidden">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQJCE-sHGbdBp6ReFLcV4hbQKdFUZVtIwMKxtbGTujL5vMFw/viewform?embedded=true" width="640" height="979" frameborder="0" marginheight="0" marginwidth="0" class="w-full min-h-[600px] border-0">Cargando...</iframe>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <img 
        src="/coffee-beans.png" 
        alt="" 
        class="absolute bottom-0 right-0 w-[300px] sm:w-[550px] lg:w-[800px] 
               transform translate-x-1/4 rotate-[-45deg] animate-float opacity-50"
        aria-hidden="true"
        loading="lazy"
      />
    </div>
  </div>
</template>