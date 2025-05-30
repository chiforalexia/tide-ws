<template>
  <div>
    <!-- Main Content Section -->
    <div class="min-h-screen">
      <!-- sections -->
      <section>
        <!-- Add your process section content here -->
        <Questionnaire />
      </section>
    </div>
  </div>
</template>

<script>
// Import components here
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
import Questionnaire from "../components/not_included/Questionaire.vue";

export default {
  name: "RoadmapPage",
  components: {
    //Add components here
    Navbar,
    Footer,
    Questionnaire,
  },
};
</script>

<style>
/* Global styles */
/* @import './assets/styles/style.css';  Adjust the path as needed */
</style>
