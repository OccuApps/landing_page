<template>
    <section id="how-it-works" class="min-h-[100svh] w-full bg-white flex items-center relative ">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div class="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12">
          <!-- Content side -->
          <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <span class="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm sm:text-base mb-6">
              Proceso Simple ✨
            </span>
  
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 lg:mb-6 text-center lg:text-left">
              Comienza a vender en minutos
            </h2>
            
            <!-- Steps -->
            <div class="space-y-6 w-full">
              <div class="flex items-start gap-4 group hover:bg-primary/5 p-4 rounded-lg transition-all duration-300">
                <span class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-primary rounded-full w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">1</span>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-primary-dark mb-2">Regístrate (sin costo, fácil y rápido)</h3>
                  <p class="text-gray-600 text-sm sm:text-base">Compártenos tu historia y productos, añade detalles únicos sobre tu café</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 group hover:bg-primary/5 p-4 rounded-lg transition-all duration-300">
                <span class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-primary rounded-full w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">2</span>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-primary-dark mb-2">Personaliza tu perfil</h3>
                  <p class="text-gray-600 text-sm sm:text-base">Permite que contemos tu historia única y muestra tus productos especiales</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 group hover:bg-primary/5 p-4 rounded-lg transition-all duration-300">
                <span class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-primary rounded-full w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">3</span>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-primary-dark mb-2">Conecta y vende</h3>
                  <p class="text-gray-600 text-sm sm:text-base">Aumenta tu visibilidad y ventas conectando con nuevos clientes</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Image side -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/how-it-works.png" 
              alt="OCCU Process Preview" 
              class="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none mx-auto h-auto object-contain animate-float"
            />
          </div>
        </div>
      </div>
  
      <!-- Decorative elements -->
      <div class="absolute inset-0 pointer-events-none">
        <img 
          src="/coffee-beans.png" 
          alt="" 
          class="absolute bottom-0 right-0 w-[550px] lg:w-[800px] 
                 transform translate-x-1/4 rotate-[-45deg] animate-float"
          aria-hidden="true"
        />
        <img 
          src="/coffee-to-go.png" 
          alt="" 
          class="absolute -top-[15%] left-0 w-[150px] sm:w-[200px] lg:w-[500px] object-contain
                 transform animate-float-delayed hidden lg:block z-[1]"
          aria-hidden="true"
        />
      </div>
    </section>
  </template>
  
  <style scoped>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 6s ease-in-out infinite;
    animation-delay: 2s;
  }
  </style>