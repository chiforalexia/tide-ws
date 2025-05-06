<template>
    <div>
  
      <!-- Main Content Section -->
      <div class="min-h-screen">
  
        <!-- sections -->
        <section id="process" class="pt-40">
          <!-- Add your process section content here -->
           <ImplementationPhases />
        </section>
  
        <section id="features" class="pt-40">
          <!-- Add your features section content here -->

        </section>
      </div>
    </div>
  </template>
  
  <script>
  // Import components here
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import ImplementationPhases from '../components/ImplementationPhases.vue'
  //import Template from '../components/Template.vue';

 
  
  export default {
    name: 'RoadmapPage',
    components: { //Add components here
      Navbar,
      Footer,
      //Template,
      ImplementationPhases,

    },
  };
  </script>
  
  <style>
  /* Global styles */
  /* @import './assets/styles/style.css';  Adjust the path as needed */
  
  </style>