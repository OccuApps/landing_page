<template>
  <main class="w-full">
    <Hero />
    <Discover />
    <About />
    <HowItWorksSection/>
    <Contact />
  </main>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import Hero from "../components/sections/HeroSection.vue";
import Discover from "../components/sections/DiscoverSection.vue";
import About from "../components/sections/AboutSection.vue";
import Contact from "../components/sections/ContactSection.vue";
import HowItWorksSection from "../components/sections/HowItWorksSection.vue";

const route = useRoute();

onMounted(async () => {
  await nextTick();
  const initialSection = route.path === '/' ? 'home' : route.path.substring(1);
  const element = document.getElementById(initialSection);
  if (element) {
    const navHeight = 80; // Match your navbar height
    const top = element.offsetTop - navHeight;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
});
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
  min-height: 100svh;
  scroll-behavior: smooth;
}
</style>