<template>
  <div class="min-h-screen w-full bg-primary flex flex-col items-center justify-center relative overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center max-w-2xl mx-auto leading-tight">
        Únete a la comunidad de <span class="text-dark-brown">cafeterías independientes</span>
      </h2>
      <!-- Embedded Form -->
      <div class="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeAQu9beceu408jT1kwd2WLgMv78alXcWG7bvSNiJS-48JniA/viewform?embedded=true"
          frameborder="0" marginheight="0" marginwidth="0"
          class="w-full h-[70vh] border-0" ref="iframe" @load="resizeIframe">Cargando…</iframe>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-x-0 bottom-0 pointer-events-none pointer-events-none hidden xl:block">
      <img src="/coffee-beans.png" alt=""
        class="absolute bottom-20 right-[10%] w-[150px] lg:w-[400px] lg:w-[700px] transform translate-x-1/4 rotate-[-45deg] animate-float"
        aria-hidden="true" loading="lazy" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resizeIframe() {
      const iframe = this.$refs.iframe;
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
  }
}
</script>

<style scoped>
.responsive-iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.responsive-iframe-container iframe {
  width: 100%;
  border: none;
}
</style>
