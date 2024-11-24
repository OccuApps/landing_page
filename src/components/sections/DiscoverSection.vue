<template>
  <div class="min-h-[100svh] w-full bg-white flex items-center relative overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12">
        <!-- Content side -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <!-- Banner -->
          <div class="w-full sm:w-auto mb-8">
            <span class="inline-block w-full sm:w-auto text-center px-6 py-3 
                       bg-primary/10 rounded-full text-primary text-base 
                       hover:bg-primary/20 transition-all duration-300">
              Descubre el poder de OCCU ✨
            </span>
          </div>

          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark 
                     mb-6 text-center lg:text-left max-w-[540px] sm:max-w-none leading-tight">
            Potencia tu visibilidad sin costos
          </h2>

          <p class="text-base sm:text-lg text-gray-600 mb-12 text-center lg:text-left 
                    max-w-xl leading-relaxed">
            OCCU está diseñada para satisfacer las necesidades tecnológicas y elementos
            esenciales de tu café.
          </p>

          <!-- Steps -->
          <div class="space-y-6 w-full">
            <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left 
                        gap-6 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
              <span class="inline-flex items-center justify-center text-2xl sm:text-3xl 
                         font-bold text-white bg-primary rounded-full w-14 h-14 
                         flex-shrink-0 group-hover:scale-110 transition-transform">1</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-primary-dark mb-3">
                  ¡Descubre cafeterías independientes!
                </h3>
                <p class="text-gray-600 text-base">
                  Conecta con una audiencia amante del café que busca experiencias locales.
                </p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left 
                        gap-6 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
              <span class="inline-flex items-center justify-center text-2xl sm:text-3xl 
                         font-bold text-white bg-primary rounded-full w-14 h-14 
                         flex-shrink-0 group-hover:scale-110 transition-transform">2</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-primary-dark mb-3">
                  ¡Ordena tu café en línea!
                </h3>
                <p class="text-gray-600 text-base">
                  Explora menús, personaliza pedidos y disfruta de una experiencia de compra fluida.
                </p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left 
                        gap-6 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
              <span class="inline-flex items-center justify-center text-2xl sm:text-3xl 
                         font-bold text-white bg-primary rounded-full w-14 h-14 
                         flex-shrink-0 group-hover:scale-110 transition-transform">3</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-primary-dark mb-3">
                  ¡Prepara tu café en casa!
                </h3>
                <p class="text-gray-600 text-base">
                  Accede a todos los elementos esenciales para crear la experiencia perfecta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image side with floating elements -->
        <div class="w-full lg:w-1/2 flex justify-center relative">
          <img src="/app-mockup.png" alt="OCCU App Preview" class="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none mx-auto 
                   h-auto object-contain animate-float" loading="eager" />
          <div class="absolute top-1/4 -left-8 bg-primary/10 backdrop-blur-md p-4 
                      rounded-lg hidden lg:flex items-center gap-2 animate-float-delayed">
            <span class="text-2xl">☕</span>
            <span class="text-primary font-medium">Descubre más</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <img src="/coffee-beans.png" alt="" class="absolute bottom-0 w-[300px] sm:w-[550px] lg:w-[800px] 
               transform -translate-x-1/4 rotate-[45deg] animate-float opacity-50" aria-hidden="true" loading="lazy" />
      <img src="/coffee-cups.png" alt="" class="absolute bottom-0 w-full h-[30vh] sm:h-[45vh] lg:h-[30vh] object-contain
               transform animate-float-delayed hidden lg:block z-[1]" aria-hidden="true" loading="lazy" />
    </div>
  </div>
</template>