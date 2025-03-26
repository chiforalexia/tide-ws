<template>
    <section class="relative min-h-screen bg-white flex items-center justify-center">
      <!-- Section Content -->
      <div class="text-center text-gray-800 px-6 py-12 max-w-4xl mx-auto">
        <!-- Heading with Highlight -->
        <div class="transition-all duration-700 opacity-100 translate-y-0">
          <span class="text-xl font-bold text-blue-500">Institutional Technology Adoption</span>
        </div>
  
        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 opacity-100 translate-y-0 delay-100">
          Your Roadmap to Successful <span class="text-blue-600">Technology Integration</span>
        </h1>
  
        <!-- Description -->
        <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 opacity-100 translate-y-0 delay-200">
          A collaborative platform designed to guide institutions through adopting new technologies, fostering knowledge sharing, and enabling successful implementation.
        </p>
  
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 opacity-100 translate-y-0 delay-300">
          <button class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full">Explore Roadmap</button>
          <button class="border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-8 rounded-full border-2">See Success Stories</button>
        </div>
  
        <!-- Scroll Down Link -->
        <div class="animate-bounce transition-all duration-700 delay-500 opacity-100">
          <a href="#process" class="inline-flex items-center text-sm font-medium text-gray-600" aria-label="Scroll to learn more">
            <span class="mr-2">Discover the process</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Hero',
  };
  </script>
  
  <style scoped>
  /* Custom styles for the Hero section */
  .hero {
    background: white;
  }
  </style>
  