<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />

    <!-- This is where Vue Router will load pages -->
    <main class="min-h-screen">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'index',
  components: { 
    Navbar, 
    Footer, 
  },
};
</script>

<style>
/* Global styles */
</style>
