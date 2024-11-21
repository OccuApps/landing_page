<template>
  <router-link 
    to="/" 
    :class="[
      'inline-flex flex-col items-center justify-center px-8 py-3 rounded-full transition-all font-medium border-2',
      variant === 'primary' 
        ? 'bg-transparent border-white text-white hover:bg-white hover:text-primary' 
        : 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white'
    ]"
  >
    <span>Regístrate para el</span>
    <span>lanzamiento gratuito</span>
  </router-link>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  }
})
</script>