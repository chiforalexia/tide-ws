<template>
  <section
    class="relative min-h-screen bg-transparent flex items-center justify-center"
  >
    <!-- Hero Section Content -->
    <div
      class="text-center text-gray-800 px-6 py-12 max-w-4xl mx-auto z-10 relative"
    >
      <div class="transition-all duration-700 opacity-100 translate-y-0">
        <span class="text-xl primary-text font-bold text-blue-500"
          >Institutional Technology Adoption</span
        >
      </div>

      <div
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold font-customfont mb-6 transition-all duration-700 opacity-100 translate-y-0 delay-100"
      >
        Your Roadmap <span class="text-blue-700">into the Future</span>
      </div>

      <p
        class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 opacity-100 translate-y-0 delay-200"
      >
        A platform designed to guide institutions through adopting new
        technologies, knowledge sharing, and enabling successful implementation.
      </p>

      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 opacity-100 translate-y-0 delay-300"
      >
        <router-link
          to="/survey"
          class="bg-blue-700 hover:bg-blue-600 text-white py-3 px-8 rounded-lg flex items-center transition-colors duration-300"
        >
          Personalize your Report
        </router-link>
        <router-link
          to="/roadmap"
          class="border-blue-700 text-blue-700 hover:bg-blue-100 py-3 px-8 rounded-lg flex items-center transition-colors duration-300 border-2"
        >
          Explore the Roadmap
        </router-link>
        <!-- <button class="">See Success Stories</button> -->
      </div>

      <div class="transition-all duration-700 delay-500 opacity-100">
        <a href="#website-introduction" class="inline-flex bubble">
          <span class="mr-2">Discover the process</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 animate-bounce item-center justify-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Wave Animation -->
    <div class="wave-wrapper dy=12">
      <svg
        class="wave-svg"
        viewBox="0 0 1200 250"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <!-- Main wave path for text -->
          <path
            id="wave-path"
            d="M0,100 C200,50 400,150 600,100 S1000,50 1200,100"
          />

          <!-- Top evenly wide blue wave background -->
          <path
            id="road-path"
            d="M0,100 C200,50 400,150 600,100 S1000,50 1200,100 L1200,250 L0,250 Z"
          />

          <!-- Bottom white wave (moved slightly more up) -->
          <path
            id="lower-road-path"
            d="M0,123 C200,73 400,173 600,123 S1000,73 1200,123 L1200,250 L0,250 Z"
          />
        </defs>

        <!-- Main blue wave background -->
        <use href="#road-path" class="road-bg" />

        <!-- Bottom white wave -->
        <use href="#lower-road-path" class="road-white" />

        <!-- Animated text moving along the wave path -->
        <text class="wave-text" dy="13">
          <textPath :href="'#wave-path'" :startOffset="startOffset + '%'">
            {{ repeatedText }}
          </textPath>
        </text>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const text = "FROM REPORT TO REALITY—STEP INTO THE FUTURE  • ";
const repeatCount = 48;
const repeatedText = text.repeat(repeatCount);

const startOffset = ref(0);

onMounted(() => {
  const animate = () => {
    startOffset.value = (startOffset.value - 0.12) % 100;
    requestAnimationFrame(animate);
  };
  animate();
});
</script>

<style scoped>
/* Hero section content */
.hero {
  background: transparent;
}

.text-center {
  position: relative;
  z-index: 10; /* Ensures the text is above the wave */
}

.road-bg {
  fill: oklch(48.8% 0.243 264.376); /* Blue wave */
}

.road-white {
  fill: #f4f6f8; /* White wave */
}

.wave-wrapper {
  position: absolute;
  bottom: -50px; /* Adjust to raise wave higher or lower */
  left: 50%;
  transform: translateX(-50%) rotate(-10deg); /* Center the wave and rotate */
  width: 100%;
  max-width: 1400px; /* Make sure wave doesn't stretch too wide */
  height: 425px; /* Adjust height for the wave */
  z-index: -1;
  /* overflow: hidden; /* Prevent horizontal scrolling */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 128px,
    black calc(100% - 200px),
    transparent 100%
  ); /* Smooth fade */
}

.mask-container {
  mask-image: linear-gradient(
    to right,
    transparent 0,
    black 128px,
    black calc(100% - 200px),
    transparent 100%
  );
}

.wave-svg {
  width: 100%;
  height: 100%; /* Match container */
}

.wave-text {
  font-family: "Bungee Tint", sans-serif;
  fill: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  dominant-baseline: middle;
}
</style>
