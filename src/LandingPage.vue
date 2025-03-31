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
      </section>

      <section id="features">
        <!-- Add your features section content here -->
      </section>

      <section id="stories">
        <!-- Add your success stories section content here -->
      </section>

      <section>
        <!-- Photoscroll element -->
        <Photoscroll />
      </section>

      <Footer />
    </div>
  </div>
</template>

<script>
// Import components here
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Photoscroll from './components/Photoscroll.vue';
import Footer from './components/Footer.vue';
import WaveAnimation from './components/WaveAnimation.vue';

export default {
  name: 'LandingPage',
  components: { //Add components here
    Navbar, 
    Hero, 
    Photoscroll,
    Footer,
    WaveAnimation,
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