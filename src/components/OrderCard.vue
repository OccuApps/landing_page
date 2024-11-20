<template>
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="font-bold">{{ order.name }}</h3>
          <p class="text-sm text-gray-600">{{ order.description }}</p>
        </div>
        <div class="text-right">
          <p class="font-bold">${{ order.price.toFixed(2) }}</p>
          <div class="flex items-center mt-2">
            <button @click="decreaseQuantity" class="px-2 py-1 border rounded">-</button>
            <span class="mx-2">{{ quantity }}</span>
            <button @click="increaseQuantity" class="px-2 py-1 border rounded">+</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    order: {
      type: Object,
      required: true
    }
  })
  
  const quantity = ref(1)
  
  const decreaseQuantity = () => {
    if (quantity.value > 1) quantity.value--
  }
  
  const increaseQuantity = () => {
    quantity.value++
  }
  </script>