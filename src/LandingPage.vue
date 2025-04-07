<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content Section -->
    <div class="min-h-screen">
      <!-- Hero Section-->
      <Hero />


      <!-- Wave Animation -->
      <div class="wave-container">
        <WaveAnimation />
      </div>

      <!-- Other sections -->
      <section id="process">
        <!-- Add your process section content here -->
        <ImplementationPhases />
      </section>

      <ImageGrid />

      <section id="features">
        <!-- Add your features section content here -->
      </section>

      <section id="stories">
        <!-- Add your success stories section content here -->
      </section>

    <Footer />
    </div>
  </div>
</template>

<script>
// Import components here
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue'
import ImageGrid from './components/ImageGrid.vue';
import SuccessStories from './components/SuccessStories.vue'
import ImplementationPhases from './components/ImplementationPhases.vue';


export default {
  name: 'LandingPage',
  components: { //Add components here
    Navbar, 
    Hero, 
    Footer,
    ImageGrid,
    SuccessStories,
    ImplementationPhases,
  },
};
</script>

<style>
/* Global styles */
/* @import './assets/styles/style.css';  Adjust the path as needed */
</style>



