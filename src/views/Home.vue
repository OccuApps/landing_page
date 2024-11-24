<template>
  <main class="w-full">
    <section id="home"><Hero /></section>
    <section id="descubre"><Discover /></section>
    <section id="sobre-nosotros"><About /></section>
    <section id="how-it-works"><HowItWorksSection/></section>
    <section id="contacto"><Contact /></section>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick } from "vue";
import { useRouter, useRoute } from 'vue-router';
import Hero from "../components/sections/HeroSection.vue";
import Discover from "../components/sections/DiscoverSection.vue";
import About from "../components/sections/AboutSection.vue";
import Contact from "../components/sections/ContactSection.vue";
import HowItWorksSection from "../components/sections/HowItWorksSection.vue";

const router = useRouter();
const route = useRoute();
let scrollTimeout;


const handleScroll = () => {
  // Add debounce to prevent too many route updates
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const sections = document.querySelectorAll('section');
    const navHeight = document.getElementById('nav')?.clientHeight || 80;
    
    let currentSection = null;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= navHeight && rect.bottom > navHeight) {
        currentSection = section;
      }
    });
    
    if (currentSection) {
      const path = currentSection.id === 'home' ? '/' : `/${currentSection.id}`;
      if (route.path !== path) {
        router.push({ path }, { replace: true });
      }
    }
  }, 100);
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = document.getElementById('nav')?.clientHeight || 80;
    const top = element.offsetTop - navHeight;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};

onMounted(async () => {
  await nextTick();
  const initialSection = route.path === '/' ? 'home' : route.path.substring(1);
  window.addEventListener('scroll', handleScroll);
  scrollToSection(initialSection);
});


onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (scrollTimeout) clearTimeout(scrollTimeout);
});

</script>

<style scoped>
section {
  scroll-margin-top: 80px;
  min-height: 100svh;
  scroll-behavior: smooth;
}
</style>