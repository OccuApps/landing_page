<template>
  <nav class="w-full bg-primary shadow-lg fixed top-0 z-50">
    <div class="max-w-[1440px] mx-auto p-4 sm:px-6 lg:px-8">
      <!-- Desktop Navigation -->
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img src="/occu-logo.svg" alt="OCCU" class="h-10 w-auto" />
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="nav-link text-white hover:text-white/90 transition-colors"
            @click.prevent="handleNavClick(link.path)"
          >
            {{ link.text }}
          </router-link>
          <RegisterCTA variant="primary" class="ml-4 px-6" />
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-white hover:text-white/90 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden bg-primary">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="block px-3 py-2 text-white hover:text-white/90"
            @click.prevent="(isOpen = false), handleNavClick(link.path)"
          >
            {{ link.text }}
          </router-link>
          <div class="px-3 py-2">
            <RegisterCTA variant="primary" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import RegisterCTA from "../shared/RegisterCTA.vue";
import { useRouter } from "vue-router";

const isOpen = ref(false);
const router = useRouter();


const links = [
  { path: "/descubre", text: "Descubre" },
  { path: "/sobre-nosotros", text: "Sobre nosotros" },
  { path: "/contacto", text: "Contáctanos" },
];

const handleNavClick = async (path) => {
  const targetId = path === '/' ? 'home' : path.substring(1);
  const element = document.getElementById(targetId);
  
  if (element) {
    // First scroll to the section
    const top = element.offsetTop - 80;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
    
    // Then update the route without triggering scroll
    await router.push({ path }, { replace: true });
  }
  
  // Close mobile menu if open
  isOpen.value = false;
};
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active::after {
  width: 100%;
}
</style>
