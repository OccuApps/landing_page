<template>
  <div class="w-full mt-[60px] sm:mt-[80px]">
    <section id="home">
      <!-- Banner -->
      <div class="w-full bg-dark-brown py-3 lg:px-8 text-center lg:text-start">
        <div class="max-w-[1440px] mx-auto">
          <span class="text-white text-lg lg:text-xl">🚀 ¡La Startup que revolucinará la industria de las cafeterías
            independientes!</span>
        </div>
      </div>
      <Hero class="py-20 sm:py-16" />
    </section>
    <section id="descubre">
      <Discover class="py-20 sm:py-16" />
    </section>
    <section id="sobre-nosotros">
      <About class="py-20 sm:py-16" />
    </section>
    <section id="proceso">
      <HowItWorksSection class="py-20 sm:py-16" />
    </section>
  </div>
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
    // Don't update routes on mobile while scrolling
    if (window.innerWidth < 768) return;

    const sections = document.querySelectorAll('section');
    const navHeight = document.getElementById('nav')?.clientHeight || 80;

    let currentSection = null;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // Only update if section is significantly in view
      if (rect.top <= navHeight && rect.bottom > navHeight + 100) {
        currentSection = section;
      }
    });

    if (currentSection) {
      const path = currentSection.id === 'home' ? '/' : `/${currentSection.id}`;
      if (route.path !== path) {
        router.push({ path }, { replace: true }).catch(() => { });
      }
    }
  }, 200);
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
  scroll-margin-top: calc(80px + 5rem);
  /* navbar height + padding-top */
  min-height: 100svh;
  scroll-behavior: smooth;
}
</style>