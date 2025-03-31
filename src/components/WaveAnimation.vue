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
    <svg class="wave-svg" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <!-- Curvy path that the text follows -->
        <path id="wave-path" d="M0,100 C200,50 400,150 600,100 S1000,50 1200,100" />
        
        <!-- Evenly wide curvy road (this part is the road background) -->
        <path id="road-path" 
          d="M0,100 C200,50 400,150 600,100 S1000,50 1200,100 L1200,200 L0,200 Z" />
      </defs>

      <!-- Static curvy road background -->
      <use href="#road-path" class="road-bg" />

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
  height: 200px;
}

.wave-svg {
  width: 100%;
  height: 100%;
}

.road-bg {
  fill: #0000FF;
}

.wave-text {
  font-size: 12px;
  fill: white; 
  font-weight: bold;
  font-family: Arial, sans-serif;
}

.wave-svg path {
  stroke: #000000;
  stroke-width: 1;
}
</style>

















