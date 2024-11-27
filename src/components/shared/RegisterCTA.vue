<template>
  <router-link to="/" :class="[
    'inline-flex items-center justify-center px-8 py-2 lg:py-4 rounded-2xl font-extrabold text-center transition-all',
    variant === 'primary'
      ? 'bg-accent text-black hover:bg-accent/90'
      : 'bg-secondary text-black hover:bg-accent/90'
  ]">
    <slot>Regístrate para el lanzamiento gratuito</slot>
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