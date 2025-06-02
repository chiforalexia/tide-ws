<template>
  <div>
    <!-- Main Content Section -->
    <div class="min-h-screen">
      <!-- sections -->
      <section id="process" class="pt-40">
        <!-- Add your process section content here -->
        <SuccessStories />
      </section>

      <section id="features">
        <!-- Add your features section content here -->
        <WorldMap />
      </section>

      <section id="features">
        <!-- Add your features section content here -->
        <Roadmap-template />
      </section>

    </div>
  </div>
</template>

<script>
// Import components here
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
import SuccessStories from "../components/succes_stories/SuccessStories.vue";
import RoadmapTemplate from "../components/succes_stories/RoadmapTemplate.vue";
import WorldMap from "../components/succes_stories/WorldMap.vue";

export default {
  name: "SuccessStoriesPage",
  components: {
    //Add components here
    Navbar,
    Footer,
    SuccessStories,
    RoadmapTemplate,
    WorldMap,
  }
};
</script>

<style>
/* Global styles */
/* @import './assets/styles/style.css';  Adjust the path as needed */
</style>
