<template>
    <div>
      <!-- Main Content Section -->
      <div class="min-h-screen">
  
        <!-- sections -->
        <section class="pt-40">
          <HeroRdm />
          <ImplementationPhases />
        </section>
  
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/common/Navbar.vue';
  import Footer from '../components/common/Footer.vue';
  import ImplementationPhases from '../components/roadmap/ImplementationPhases.vue'
  import HeroRdm from '../components/roadmap/HeroRdm.vue';
  //import heror from '..heror.vue';
  
  export default {
    name: 'RoadmapPage',
    components: { 
      Navbar,
      Footer,
      ImplementationPhases,
      HeroRdm,
    },
  };
  </script>
