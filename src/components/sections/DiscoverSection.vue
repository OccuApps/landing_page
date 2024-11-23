<template>
  <section id="descubre" class="min-h-[100svh] w-full relative overflow-hidden flex items-center">
    <!-- Background with overlay -->
    <div class="absolute inset-0 z-0">
      <!-- <img 
        src="/OCCU-logo-vertical.png" 
        alt="" 
        class="w-auto h-full object-cover opacity-35 brightness-90"
        aria-hidden="true"
      /> -->
      <div class="absolute inset-0 bg-primary-dark bg-opacity-90 backdrop-blur-sm"></div>
    </div>

    <!-- Content -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20 sm:py-16 min-h-[100svh] flex items-center">
      <div class="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12 w-full">
        <!-- Content side -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <span class="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm sm:text-base mb-6">
            Descubre el poder de OCCU 🚀
          </span>

          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center lg:text-left">
            Potencia tu visibilidad sin costos
          </h2>

          <p class="text-base sm:text-lg text-white/90 mb-12 text-center lg:text-left">
            OCCU está diseñada para satisfacer las necesidades tecnológicas y elementos esenciales de tu café.
          </p>
          
          <!-- Steps -->
          <div class="space-y-6 w-full">
            <div class="flex items-start gap-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
              <span class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary 
                         bg-white rounded-full w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">1</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-white mb-2">¡Descubre cafeterías independientes!</h3>
                <p class="text-white/80 text-sm sm:text-base">Conecta con una audiencia amante del café que busca experiencias locales.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
              <span class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary 
                         bg-white rounded-full w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">2</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-white mb-2">¡Ordena tu café en línea!</h3>
                <p class="text-white/80 text-sm sm:text-base">Explora menús, personaliza pedidos y disfruta de una experiencia de compra fluida.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
              <span class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary 
                         bg-white rounded-full w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">3</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-white mb-2">¡Prepara tu café en casa!</h3>
                <p class="text-white/80 text-sm sm:text-base">Accede a todos los elementos esenciales para crear la experiencia perfecta.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image side -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <img 
            src="/app-mockup.png" 
            alt="OCCU App Preview" 
            class="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none mx-auto h-auto object-contain animate-float"
          />
        </div>
      </div>
    </div>
     <!-- Decorative elements -->
     <div class="absolute inset-0 pointer-events-none">
    
      <img 
        src="/coffee-cup.png" 
        alt=""
        class="absolute top-[5%] right-0 w-[150px] sm:w-[200px] lg:w-[400px] 
               transform  animate-float-delayed hidden lg:block"
        aria-hidden="true"
      />
    </div>
  </section>
</template>