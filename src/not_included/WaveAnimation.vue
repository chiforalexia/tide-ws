<script setup>
import { ref, onMounted } from "vue";

// The text to animate
const text =
  "FOR YOUR COFFEE, TEA, CEREAL, SMOOTHIES, PROTEIN SHAKES, LUNCHBOX, AND MORE... THE BEST TECH SOLUTIONS ";
const repeatedText = text.repeat(33);

const startOffset = ref(0);

// Smooth infinite animation
onMounted(() => {
  const animate = () => {
    startOffset.value = (startOffset.value - 0.25) % 100;
    requestAnimationFrame(animate);
  };
  animate();
});
</script>

<template>
  <div class="wave-wrapper absolute bottom-0 left-0 w-full z-0">
    <svg
      class="wave-svg"
      viewBox="0 0 1200 250"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <path
          id="wave-path"
          d="M0,100 C200,50 400,150 600,100 S1000,50 1200,100"
        />
        <path
          id="road-path"
          d="M0,100 C200,50 400,150 600,100 S1000,50 1200,100 L1200,250 L0,250 Z"
        />
        <path
          id="lower-road-path"
          d="M0,123 C200,73 400,173 600,123 S1000,73 1200,123 L1200,250 L0,250 Z"
        />
      </defs>

      <use href="#road-path" class="road-bg" />
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

<script setup>
import { ref, onMounted } from "vue";

// The text to animate
const text =
  "FOR YOUR COFFEE, TEA, CEREAL, SMOOTHIES, PROTEIN SHAKES, LUNCHBOX, AND MORE... THE BEST TECH SOLUTIONS ";
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

<style scoped>
/* Import font */
@import url("https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Outline&family=Bungee+Tint&display=swap");

.wave-wrapper {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.wave-svg {
  width: 100%;
  height: 100%;
  transform: rotate(10deg);
}

.road-bg {
  fill: #b4d4f5;
}

.road-white {
  fill: white;
}

.wave-text {
  font-family: "Bungee", sans-serif;
  fill: #ffffff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
}
</style>
