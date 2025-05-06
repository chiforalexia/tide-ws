<template>
    <div>
  
      <!-- Main Content Section -->
      <div class="min-h-screen">
  
        <!-- sections -->
        <section >
          <!-- Add your process section content here -->
           <Recommendations />
        </section>
  

      </div>
    </div>
  </template>
  
  <script>
  // Import components here
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import Recommendations from '../components/Recommendations.vue'


  
  export default {
    name: 'RoadmapPage',
    components: { //Add components here
        Navbar,
        Footer,
        Recommendations,


    },
  };
  </script>
  
  <style>
  /* Global styles */
  /* @import './assets/styles/style.css';  Adjust the path as needed */
  
  </style>