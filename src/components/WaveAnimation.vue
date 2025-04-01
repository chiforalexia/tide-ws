<script setup>
import { ref, onMounted } from 'vue';

// The text to animate
const text = "FOR YOUR COFFEE, TEA, CEREAL, SMOOTHIES, PROTEIN SHAKES, LUNCHBOX, AND MORE... THE BEST TECH SOLUTIONS ";
const repeatedText = text.repeat(3);
const startOffset = ref(0);

// Animation logic for scrolling text
onMounted(() => {
  const animate = () => {
    startOffset.value = (startOffset.value - 0.2) % 100;
    requestAnimationFrame(animate);
  };
  animate();
});
</script>

<template>
  <div class="wave-wrapper">
    <svg class="wave-svg" viewBox="0 0 1200 250" preserveAspectRatio="xMidYMid meet">
      <defs>
        <!-- Main wave path for text -->
        <path id="wave-path" d="M0,100 C200,50 400,150 600,100 S1000,50 1200,100" />
        
        <!-- Top evenly wide blue wave background -->
        <path id="road-path" 
          d="M0,100 C200,50 400,150 600,100 S1000,50 1200,100 L1200,250 L0,250 Z" />

        <!-- Bottom white wave (moved slightly more up) -->
        <path id="lower-road-path" 
          d="M0,123 C200,73 400,173 600,123 S1000,73 1200,123 L1200,250 L0,250 Z" />
      </defs>

      <!-- Main blue wave background -->
      <use href="#road-path" class="road-bg" />

      <!-- Bottom white wave -->
      <use href="#lower-road-path" class="road-white" />

      <!-- Animated text moving along the wave path -->
      <text class="wave-text" dy="16">
        <textPath :href="'#wave-path'" :startOffset="startOffset + '%'">
          {{ repeatedText }}
        </textPath>
      </text>
    </svg>
  </div>
</template>

<style scoped>
.wave-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
}

.wave-svg {
  width: 100%;
  height: 100%;
}

.road-bg {
  fill: #0000FF;
}

.road-white {
  fill: white;
}

.wave-text {
  font-family: 'Bungee Tint', sans-serif;
  fill:rgb(247, 245, 244);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
}

.wave-svg path {
  stroke-width: 1;
}
</style>


























