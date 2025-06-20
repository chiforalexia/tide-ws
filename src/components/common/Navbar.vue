<!-- Responsive sticky navigation bar -->
<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'py-2 bg-white/80 backdrop-blur-lg' : 'py-5 bg-transparent',
    ]"
  >
    <div class="container max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between">
        <!-- Logo Section -->
        <router-link to="/" class="flex items-center pt-1 md:pt-2">
          <div class="relative flex items-start top-4">
            <img
              src="/surf_logo.svg"
              alt="SURF Logo"
              class="w-36 h-auto z-10"
            />
            <span
              class="text-2xl bg-white rounded-xl py-1 px-3 pl-8 font-bold absolute left-20 -z-10"
              >Roadmap</span
            >
          </div>
        </router-link>

        <!-- Floating Menu Bubble (Desktop) -->
        <div
          class="hidden md:flex items-center bg-white rounded-xl custom-shadow px-3 py-1 space-x-10 transition-all duration-300 hover:scale-105 justify-center"
        >
          <a
            href="/survey"
            class="font-medium hover:text-primary transition-colors link-underline"
            >Personalized Report</a
          >
          <a
            href="/success-stories"
            class="font-medium hover:text-primary transition-colors link-underline"
            >Success Stories</a
          >
          <a
            href="/roadmap"
            class="font-medium hover:text-primary transition-colors"
            ><button class="w-full btn">Explore the Roadmap</button></a
          >
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden focus:outline-none ml-4"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 p-4 bg-white rounded-lg shadow-md space-y-4 animate-fade-in"
      >
        <a
          href="/survey"
          class="block py-2 font-medium hover:text-primary transition-colors"
          @click="closeMobileMenu"
        >
          Personalized Report
        </a>
        <a
          href="/success-stories"
          class="block py-2 font-medium hover:text-primary transition-colors"
          @click="closeMobileMenu"
        >
          Success Stories
        </a>
        <a
          href="/roadmap"
          class="block py-2 font-medium hover:text-primary transition-colors"
          @click="closeMobileMenu"
        >
          <button class="w-full btn">Explore Roadmap</button>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

// Scroll detection
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
});

// Mobile menu logic
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
/* Header padding transitions */
header {
  transition: all 0.3s ease;
}

/* Responsive padding based on scroll */
header.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
header.py-5 {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Animated underline */
.link-underline {
  text-decoration: none;
  position: relative;
}
.link-underline::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}
.link-underline:hover::after {
  background-color: #007bff;
}

/* Button style */
.btn {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: #0056b3;
}

/* Fade-in animation for mobile nav */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

.custom-shadow {
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
