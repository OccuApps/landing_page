<template>
  <div class="min-h-[100svh] w-full bg-primary flex items-center relative overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center max-w-2xl mx-auto">
        Únete a la comunidad de <span class="text-dark-brown">cafeterías independientes</span>
      </h2>
      <p class="text-xl text-white text-center max-w-xl mx-auto mb-6" text-slate-100>
        Regístrate para recibir acceso gratuito al marketplace en su lanzamiento
      </p>

      <!-- Embedded Form -->
      <div class="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScQJCE-sHGbdBp6ReFLcV4hbQKdFUZVtIwMKxtbGTujL5vMFw/viewform?embedded=true"
          width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0"
          class="w-full border-0">Cargando...</iframe>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-x-0 bottom-0 pointer-events-none">
      <img src="/coffee-beans.png" alt=""
        class="absolute bottom-0 right-[10%] w-[150px] sm:w-[300px] lg:w-[400px] transform translate-x-1/4 rotate-[-45deg] animate-float"
        aria-hidden="true" loading="lazy" />
    </div>
  </div>
</template>
