<template>
  <div class="min-h-[100svh] w-full bg-white flex items-center relative overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div class="flex flex-col md:flex-row-reverse items-center justify-center gap-8 lg:gap-12">
        <!-- Content side -->
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown mb-6 text-center lg:text-left max-w-[540px] sm:max-w-none leading-tight">
            Aumenta tu visibilidad <span class="text-primary">sin costos</span>
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 mb-12 text-center lg:text-left max-w-xl leading-relaxed">
            OCCU te conecta con amantes del café y simplifica la experiencia de compra para tus clientes.
          </p>

          <!-- Steps -->
          <div class="space-y-6 w-full">
            <!-- Step 1 -->
            <div
              class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group bg-gray-50">
              <span
                class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-accent rounded-full w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform">1</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-dark-brown mb-3">
                  ¡Descubre cafeterías independientes!
                </h3>
                <p class="text-gray-600 text-base">
                  Conecta con una audiencia amante del café que busca experiencias locales.
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div
              class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group bg-gray-50">
              <span
                class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-accent rounded-full w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform">2</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-dark-brown mb-3">
                  ¡Ordena tu café en línea!
                </h3>
                <p class="text-gray-600 text-base">
                  Explora menús, personaliza pedidos y disfruta de una experiencia de compra fluida.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div
              class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group bg-gray-50">
              <span
                class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-accent rounded-full w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform">3</span>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-dark-brown mb-3">
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
        <div class="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
          <!-- Main Image -->
          <img src="/app-mockup.png" alt="OCCU App Preview"
            class="w-full h-auto max-w-xs md:max-w-sm lg:max-w-none mx-auto object-cover animate-float"
            loading="eager" />

          <!-- Top annotation -->
          <div
            class="hidden md:block absolute left-0 xl:left-[5%] top-[20%] flex flex-col justify-center items-center gap-2">
            <div class="text-dark-brown text-lg xl:text-xl font-bold pb-[15px]">
              Descubre más
            </div>
            <svg class="w-auto h-[48px] text-accent transform rotate-[30deg]" viewBox="0 0 48 24">
              <path d="M 2 2 C 10 14 21 25 46 22" stroke="currentColor" fill="none" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-x-[5%] bottom-[-9%] pointer-events-none z-[1] hidden xl:block">
      <!-- Coffee beans decorative element -->
      <img src="/coffee-beans.png" alt=""
        class="w-[300px] sm:w-[550px] lg:w-[800px] transform -translate-x-[20%] rotate-[45deg]" aria-hidden="true"
        loading="lazy" />
    </div>
  </div>
</template>
