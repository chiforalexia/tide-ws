<template>
  <div>
    <!-- Hero Section-->
    <section >
      <Hero />
    </section>
    
    <!-- Other sections -->

    <!-- Website Introduction Section -->
      <section id="website-introduction">
        <WebsiteIntroduction />
      </section>

      <!-- Report Chapters -->
      <section id="chapters">
        <ImageGrid />
      </section>

      <!-- Personal Report -->
      <section id="getpersonalreport">
        <GetPersonalReport />
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
import Hero from '../components/main/Hero.vue';
import Photoscroll from '../components/main/Photoscroll.vue';
import ImageGrid from '../components/main/ImageGrid.vue';
import SuccessStories from '../components/succes_stories/SuccessStories.vue';
import WebsiteIntroduction from '../components/main/WebsiteIntroduction.vue';
import RoadmapIntro from '../components/main/RoadmapIntro.vue';
import GetPersonalReport from '../components/main/GetPersonalReport.vue';

export default {
  name: 'LandingPage',
  components: { //Add components here
    Hero, 
    Photoscroll,
    ImageGrid,
    SuccessStories,
    WebsiteIntroduction,
    RoadmapIntro,
    GetPersonalReport,

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