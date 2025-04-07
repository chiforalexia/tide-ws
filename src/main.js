import { createApp } from 'vue';
import './assets/styles/tailwind.css';  // Make sure Tailwind CSS is loaded
import App from './index.vue';  // Main component to mount
import { createRouter, createWebHistory } from 'vue-router';  // Import Vue Router
import RoadmapPage from './pages/RoadmapPage.vue';  // Import other pages
import LandingPage from './pages/LandingPage.vue';
import SuccessStoriesPage from './pages/SuccessStoriesPage.vue';

// Define the routes
const routes = [
  { path: '/', component: LandingPage },  // Landing page route
  { path: '/roadmap', component: RoadmapPage },  // Roadmap page route
  { path: '/success-stories', component: SuccessStoriesPage} // Success stories page route
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),  // Use HTML5 history mode for clean URLs (no # in the URL)
  routes,  // Set the defined routes
});

// Create the app and use the router
createApp(App)
  .use(router)  // Integrate the router into the app
  .mount('#app');  // Mount the app to the DOM
