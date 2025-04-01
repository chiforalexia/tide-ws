<template>
    <header
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-2 bg-white/80 backdrop-blur-lg shadow-sm'
          : 'py-5 bg-transparent'
      ]"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <!-- Logo Section -->
            <router-link to="/" class="flex items-center space-x-2">
              <img
                src="/SURF_fc-01.jpg"
                alt="SURF Logo"
                class="w-30 h-10 rounded-lg bg-primary flex items-center justify-center"
              />
              <span class="font-display font-semibold text-xl">
                Roadmap
              </span>
            </router-link>
          </div>
  
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a
              href="#process"
              class="font-medium hover:text-primary transition-colors link-underline"
              >Process</a
            >
            <a
              href="#features"
              class="font-medium hover:text-primary transition-colors link-underline"
              >Features</a
            >
            <a
              href="#stories"
              class="font-medium hover:text-primary transition-colors link-underline"
              >Success Stories</a
            >
            <button class="btn">Get Started</button>
          </nav>
  
          <!-- Mobile Menu Button -->
          <button
            class="md:hidden focus:outline-none"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <!-- Menu (hamburger) Icon (SVG) -->
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <!-- Close (X) Icon (SVG) -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
  
        <!-- Mobile Navigation -->
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
          <a
            href="#process"
            class="block py-2 font-medium hover:text-primary transition-colors"
            @click="closeMobileMenu"
          >
            Process
          </a>
          <a
            href="#features"
            class="block py-2 font-medium hover:text-primary transition-colors"
            @click="closeMobileMenu"
          >
            Features
          </a>
          <a
            href="#stories"
            class="block py-2 font-medium hover:text-primary transition-colors"
            @click="closeMobileMenu"
          >
            Success Stories
          </a>
          <button class="w-full btn">Get Started</button>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const isScrolled = ref(false);
  const isMobileMenuOpen = ref(false);
  
  // Check scroll position
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  
  // Watch for scroll event on mount
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
  
  // Close mobile menu
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
  };
  </script>
  
  <style scoped>
  /* Styling for the navbar */
  header {
    background-color: transparent;
    transition: all 0.3s ease;
  }
  
  header.py-2 {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  
  header.py-5 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  /* Link styling */
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
    background-color: #007bff; /* Change this to the color of your choice */
  }
  
  /* Button Styling */
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  
  /* Mobile Menu Animation */
  .animate-fade-in {
    animation: fadeIn 0.3s ease-in-out;
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
  