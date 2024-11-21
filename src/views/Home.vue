<template>
  <div>
    <section id="home">
      <HeroSection />
    </section>
    <section id="descubre">
      <DiscoverSection />
    </section>
    <section id="sobre-nosotros">
      <AboutSection />
    </section>
    <section id="contacto">
      <ContactSection />
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import HeroSection from "../components/sections/HeroSection.vue";
import DiscoverSection from "../components/sections/DiscoverSection.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";

const route = useRoute();

onMounted(() => {
  // Only scroll on initial page load
  const initialSection = route.path === '/' ? 'home' : route.path.substring(1);
  const element = document.getElementById(initialSection);
  if (element) {
    const top = element.offsetTop - 80;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
});
</script>

<style scoped>
section {
  min-height: 100vh;
  scroll-margin-top: 80px;
}
</style>