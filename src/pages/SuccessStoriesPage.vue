<template>
  <div>
    <!-- Main Content Section -->
    <div class="min-h-screen">
      <section class="pt-36">
        <WorldMap />
      </section>
      <!-- Sections -->
      <section>
        <SuccessStories />
      </section>
      <section>
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

