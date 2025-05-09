<template>
  <div class="relative h-[60vh] bg-blue-700 text-white overflow-hidden pb-10">
    <div class="absolute top-17 -right-2 w-72 h-72 md:w-96 md:h-96 pointer-events-none">
      <img src="/Rocket2.svg" alt="Rocket2" class="w-full h-full object-contain" />
    </div>

    <div class="container mx-auto px-6 py-16 max-w-full text-center relative z-10">
      <!-- Main content -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-left custom-font">
        Discover the
        <span class="block">Right Tech</span> 
        <span class="block">Trends for</span> <span style="color: #FFC294;">Your</span> Institution
      </h1>
      <p class="text-xl text-white/90 mb-10 text-center">
        Get a personalized Tech Trends Report tailored to your unique needs, budget, and values!
      </p>

      <router-link to="/survey">
        <button class="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all">
          To the Report questionnaire
        </button>
      </router-link>

      <p class="text-xs italic text-white/90 text-center py-1">
        in 5 minutes to your own report
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap');

.custom-font {
  font-family: 'Special Gothic Expanded One', sans-serif;
}
</style>
