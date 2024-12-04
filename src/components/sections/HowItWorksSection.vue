<template>
    <div class="min-h-[100svh] w-full bg-white flex items-center relative">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div class="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12">
                <!-- Content side -->
                <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <h2
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown mb-6 text-center lg:text-left max-w-[540px] sm:max-w-none leading-tight">
                        Comienza a vender <span class="text-primary">en minutos</span>
                    </h2>

                    <!-- Steps -->
                    <div class="space-y-6 w-full">
                        <!-- Step 1 -->
                        <div
                            class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group bg-gray-50">
                            <span
                                class="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-accent rounded-full w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform">1</span>
                            <div>
                                <h3 class="text-lg sm:text-xl font-bold text-dark-brown mb-3">
                                    Regístrate (sin costo, fácil y rápido)
                                </h3>
                                <p class="text-gray-600 text-base">
                                    Compártenos tu historia y productos, añade detalles únicos sobre tu café
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
                                    Personaliza tu perfil
                                </h3>
                                <p class="text-gray-600 text-base">
                                    Permite que contemos tu historia única y muestra tus productos especiales
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
                                    Conecta y vende
                                </h3>
                                <p class="text-gray-600 text-base">
                                    Aumenta tu visibilidad y ventas conectando con nuevos clientes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Image side -->
                <div class="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
                    <img src="/how-it-works.png" alt="OCCU Process Preview"
                        class="w-full h-auto max-w-xs md:max-w-sm lg:max-w-none mx-auto object-cover animate-float"
                        loading="eager" />

                    <!-- Top annotation -->
                    <div
                        class="hidden lg:block absolute left-[5%] top-[20%] flex flex-col justify-center items-center gap-2">
                        <div class="text-dark-brown text-lg xl:text-xl font-bold pb-[15px]">
                            Proceso Simple ✨
                        </div>
                        <svg class="w-auto h-[48px] text-accent transform rotate-[30deg]" viewBox="0 0 48 24">
                            <path d="M 2 2 C 10 14 21 25 46 22" stroke="currentColor" fill="none" stroke-width="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Decorative element -->
        <div class="absolute inset-0 pointer-events-none z-30 hidden xl:block">
            <img src="/coffee-to-go.png" alt=""
                class="absolute -top-[10%] left-[0%] w-[150px] sm:w-[200px] lg:w-[500px] object-contain transform animate-float-delayed hidden lg:block"
                aria-hidden="true" loading="lazy" />
        </div>
    </div>
</template>