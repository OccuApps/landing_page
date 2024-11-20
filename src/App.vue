<template>
  <div class="min-h-screen w-full bg-gray-50">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
</script>