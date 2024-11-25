<template>
  <nav id="nav" class="w-full bg-primary/95 backdrop-blur-sm fixed top-0 z-50 transition-all duration-300">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Desktop Navigation -->
      <div class="flex justify-between h-16 sm:h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center" @click.prevent="handleNavClick('/')">
            <img src="/occu-logo.svg" alt="OCCU" class="h-8 sm:h-10 w-auto" />
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-6 lg:gap-8">
          <router-link v-for="link in links" :key="link.path" :to="link.path"
            class="nav-link text-white hover:text-white/90 transition-colors text-lg lg:text-xl"
            @click.prevent="handleNavClick(link.path)">
            {{ link.text }}
          </router-link>
          <RegisterCTA class="ml-2 lg:ml-4 text-xl">
            Regístrate aquí
          </RegisterCTA>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button @click="toggleMenu" class="text-white hover:text-white/90 focus:outline-none p-2"
            aria-label="Toggle menu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen"
        class="md:hidden bg-primary absolute top-full left-0 w-full transform transition-all duration-300"
        :class="isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'">
        <div class="px-4 py-3 space-y-2 shadow-lg">
          <router-link v-for="link in links" :key="link.path" :to="link.path"
            class="block py-2 text-white hover:text-white/90 text-lg" @click="handleMobileNavClick(link.path)">
            {{ link.text }}
          </router-link>
          <div class="pt-2">
            <RegisterCTA class="ml-2 lg:ml-4 w-full text-xl">
              Regístrate aquí
            </RegisterCTA>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import RegisterCTA from "../shared/RegisterCTA.vue";
import { useRouter } from "vue-router";

const isOpen = ref(false);
const router = useRouter();

const links = [
  { path: "/descubre", text: "Descubre" },
  { path: "/sobre-nosotros", text: "Sobre nosotros" },
  { path: "/contacto", text: "Contáctanos" },
];

// Close menu when clicking outside
const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('nav')) {
    isOpen.value = false;
  }
};

// Toggle mobile menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const handleNavClick = async (path) => {
  // Close mobile menu first if open
  if (isOpen.value) {
    isOpen.value = false;
    document.body.style.overflow = '';
  }

  // Wait for DOM updates
  await nextTick();

  const targetId = path === '/' ? 'home' : path.substring(1);
  const element = document.getElementById(targetId);

  if (element) {
    const navHeight = document.getElementById('nav')?.clientHeight || 80;
    const top = element.offsetTop - navHeight;

    // Update route first
    await router.push({ path }, { replace: true });

    // Then scroll after a short delay
    setTimeout(() => {
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }, 50);
  }
};


const handleMobileNavClick = async (path) => {
  // Close mobile menu first
  isOpen.value = false;
  document.body.style.overflow = '';

  // Wait for DOM updates
  await nextTick();

  // Then handle navigation
  await handleNavClick(path);
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
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
  bottom: -2px;
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