<template>
  <section id="descubre" class="min-h-screen w-full flex items-center relative">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/occu.svg" 
        alt="" 
        class="w-auto h-full object-cover opacity-35"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-primary-dark"></div>
    </div>

    <!-- Content -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <!-- Left side content -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-center lg:text-left">
            Potencia tu visibilidad sin costos
          </h2>
          <p class="text-base sm:text-lg lg:text-xl text-white mb-12 text-center lg:text-left">
            OCCU esta diseñada para satisfacer las necesidades tecnologicas y elementos esenciales de tu café.
          </p>
          
          <!-- Numbered steps -->
          <div class="space-y-8 w-full">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-primary">1.</span>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Regístrate</h3>
                <p class="text-white/80">Sin costo, fácil y rápido</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-primary">2.</span>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Comparte tu historia</h3>
                <p class="text-white/80">Añade detalles únicos sobre tu café</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-primary">3.</span>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Conecta</h3>
                <p class="text-white/80">Aumenta tu visibilidad y ventas</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - Phone image -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <img 
            src="/phone-orders.png" 
            alt="OCCU Orders Preview" 
            class="w-auto h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  </section>
</template>