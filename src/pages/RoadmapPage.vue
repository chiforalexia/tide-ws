<template>
    <div>
  
      <!-- Main Content Section -->
      <div class="min-h-screen">
  
        <!-- sections -->
        <section id="process" class="pt-40">
            <HeroRdm />
           <implementationPhases />
        </section>
  
        <!-- <section id="features" class="pt-40">
      
           <Template />
        </section> -->
      </div>
    </div>
  </template>
  
  <script>
  // Import components here
  import Navbar from '../components/common/Navbar.vue';
  import Footer from '../components/common/Footer.vue';
  import implementationPhases from '../components/roadmap/ImplementationPhases.vue'
  import HeroRdm from '../components/roadmap/HeroRdm.vue';
  
  export default {
    name: 'RoadmapPage',
    components: { //Add components here
      Navbar,
      Footer,
      implementationPhases,
      HeroRdm,

    },
  };
  </script>
  
  <style>
  /* Global styles */
  /* @import './assets/styles/style.css';  Adjust the path as needed */
  
  </style>