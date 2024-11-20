<template>
    <div>
      <HeroSection id="home" />
      <DiscoverSection id="descubre" />
      <AboutSection id="sobre-nosotros" />
      <ContactSection id="contacto" />
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  import HeroSection from '../components/sections/HeroSection.vue'
  import DiscoverSection from '../components/sections/DiscoverSection.vue'
  import AboutSection from '../components/sections/AboutSection.vue'
  import ContactSection from '../components/sections/ContactSection.vue'
  
  const router = useRouter()
  
  // Intersection Observer to handle scroll-based routing
  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px',
    threshold: 0
  }
  
  const handleIntersect = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const path = entry.target.id === 'home' ? '/' : `/${entry.target.id}`
        router.push({ path }, { replace: true })
      }
    })
  }
  
  onMounted(() => {
    const observer = new IntersectionObserver(handleIntersect, observerOptions)
    
    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section)
    })
  
    // Cleanup
    onUnmounted(() => {
      observer.disconnect()
    })
  })
  </script>