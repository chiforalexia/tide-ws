<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content Section -->
    <div class="min-h-screen">
      <!-- Hero Section-->
      <Hero />

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
import Footer from './components/Footer.vue'

export default {
  name: 'LandingPage',
  components: { //Add components here
    Navbar, 
    Hero, 
    Photoscroll,
    Footer,
  },
};
</script>

<style>
/* Global styles */
/* @import './assets/styles/style.css';  Adjust the path as needed */
</style>
