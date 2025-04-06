<template>
    <div>
      <!-- Navbar Component -->
        <Navbar />
  
      <!-- Main Content Section -->
      <div class="min-h-screen">
  
        <!-- sections -->
        <section id="process">
          <!-- Add your process section content here -->
        </section>
  
        <section id="features">
          <!-- Add your features section content here -->
        </section>
        

        <Footer/>
    
      </div>
    </div>
  </template>
  
  <script>
  // Import components here
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';

 
  
  export default {
    name: 'RoadmapPage',
    components: { //Add components here


    },
  };
  </script>
  
  <style>
  /* Global styles */
  /* @import './assets/styles/style.css';  Adjust the path as needed */
  
  </style>