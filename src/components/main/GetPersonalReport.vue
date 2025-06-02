<!-- Survey Introduction section -->
<template>
  <div
    class="relative h-[60vh] bg-blue-700 text-white overflow-visible pb-10 flex items-center justify-center"
  >
    <!-- Rocket Image -->
    <div
      class="absolute right-2 -top-5 h-96 w-auto sm:h-96 sm:right-2 lg:h-full lg:right-6 z-10 rotate-[10deg]"
    >
      <img
        src="/TIDE_rocket1.svg"
        alt="Rocket image"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Content -->
    <div class="relative z-20 text-center px-4 max-w-3xl">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white m-10 custom-font"
      >
        Discover the
        <span class="block">Right Tech</span>
        <span class="block">Trends for</span>
        <span style="color: #e67300">Your</span> Institution
      </h1>

      <p class="text-md text-white sm:text-md md:text-xl text-white/90 mb-5">
        Get a personalized Tech Trends Report tailored to your unique needs and
        values!
      </p>

       <!-- Button leading to Survey -->
      <router-link
        to="/survey"
        style="display: block; width: fit-content; margin: 0 auto"
      >
        <button
          class="bg-white text-blue-700 hover:bg-blue-100 hover:text-blue-800 py-3 px-8 rounded-lg flex items-center transition-colors duration-300"
        >
          To the Report Survey
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 transition-transform"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M10 19l5-5-5-5" />
          </svg>
        </button>
      </router-link>

      <p class="text-xs text-white italic text-white/90 text-center py-1">
        in less than 5 minutes to your own report
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap");

.custom-font {
  font-family: "Special Gothic Expanded One", sans-serif;
}
</style>
