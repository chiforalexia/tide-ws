<template>
  <div>
    <!-- Hero Section-->
    <Hero />
    
    <!-- Other sections -->

      <!-- Information Section-->
      <section id="info">

      </section>

      <!-- Report Chapters -->
      <section id="chapters">
        <ImageGrid />
      </section>

      <!-- Roadmap Introduction Section-->
      <section id="roadinfo">
        <RoadmapIntro />
      </section>

      <!-- Something menu -->
      <section id="photoscroll">
        <Photoscroll />
      </section>

  </div>
</template>

<script>
// Import components here
import Hero from '../components/Hero.vue';
import Photoscroll from '../components/Photoscroll.vue';
import ImageGrid from '../components/ImageGrid.vue';
import RoadmapIntro from '../components/RoadmapIntro.vue';

export default {
  name: 'LandingPage',
  components: { //Add components here
    Hero, 
    Photoscroll,
    ImageGrid,
    RoadmapIntro,

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