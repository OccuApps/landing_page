<template>
  <section id="descubre" class="min-h-screen w-full flex items-center relative">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/occu.svg" 
        alt="" 
        class="w-auto h-full object-cover opacity-35 justify-self-end brightness-90"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-primary-dark"></div>
    </div>

    <!-- Content -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="flex flex-col lg:flex-row-reverse	 items-center justify-center gap-8 lg:gap-12">
        <!-- content -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-center lg:text-left">
            Potencia tu visibilidad sin costos
          </h2>
          <p class="text-base sm:text-lg lg:text-xl text-white mb-12 text-center lg:text-left">
            OCCU está diseñada para satisfacer las necesidades tecnológicas y elementos esenciales de tu café.
          </p>
          
          <!-- Numbered steps -->
          <div class="space-y-8 w-full">
            <div class="flex items-start gap-6">
              <span class="inline-flex items-center justify-center text-4xl font-bold text-primary bg-white rounded-full w-14 h-14 min-w-[3.5rem]">1</span>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">¡Descubre cafeterías independientes!</h3>
                <p class="text-white/80">Conecta con una audiencia amante del café que busca experiencias locales.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="inline-flex items-center justify-center text-4xl font-bold text-primary bg-white rounded-full w-14 h-14 min-w-[3.5rem]">2</span>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">¡Ordena tu café en linea!</h3>
                <p class="text-white/80">Selecciona la cafetería que desees, explora el menú, personaliza tu pedido y deja que comience la preparación.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="inline-flex items-center justify-center text-4xl font-bold text-primary bg-white rounded-full w-14 h-14 min-w-[3.5rem]">3</span>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">¡Prepara tu cafe en casa!</h3>
                <p class="text-white/80">¡Todas tus necesidades y elementos esenciales de café en un solo lugar!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone image -->
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