<template>
  <div class="min-h-screen w-full bg-gray-50">
    <NavBar />
    <main class="w-full min-h-[100svh] bg-white text-primary-dark">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
</script>

<style>
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