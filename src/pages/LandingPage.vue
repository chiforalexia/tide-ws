<template>
  <div>
    <!-- Hero Section-->
    <Hero />
    
    <!-- Wave Animation -->
    <div class="wave-container">
    <WaveAnimation />
    </div>

    <!-- Other sections -->

      <!-- Report Chapters -->
      <section id="chapters">
      <ImageGrid />
      </section>

      <section id="features">
      <!-- Add your features section content here -->
      </section>

      <!-- Success Stories -->
      <section id="stories">
      <SuccessStories />
      </section>

      <!-- Something menu -->
      <section>
      <Photoscroll />
      </section>

  </div>
</template>

<script>
// Import components here
import Hero from '../components/Hero.vue';
import Photoscroll from '../components/Photoscroll.vue';
import WaveAnimation from '../components/WaveAnimation.vue';
import ImageGrid from '../components/ImageGrid.vue';
import SuccessStories from '../components/SuccessStories.vue'

export default {
  name: 'LandingPage',
  components: { //Add components here
    Hero, 
    Photoscroll,
    WaveAnimation,
    ImageGrid,
    SuccessStories,

  },
};
</script>

<style>
/* Global styles */
/* @import './assets/styles/style.css';  Adjust the path as needed */

.wave-container {
  position: relative;
  width: 100%;
  margin: -2rem 0; /* Negative margin to remove gaps */
  z-index: 1;
}
</style>