import { createApp } from 'vue';
import './assets/styles/tailwind.css';  // Make sure Tailwind CSS is loaded
import App from './index.vue';  // Main component to mount
import { createRouter, createWebHistory } from 'vue-router';  // Import Vue Router
import RoadmapPage from './pages/RoadmapPage.vue';  // Import other pages
import LandingPage from './pages/LandingPage.vue';
import SuccessStoriesPage from './pages/SuccessStoriesPage.vue';
import QuestionnairePage from './pages/QuestionnairePage.vue';
import Recommendations from './components/Recommendations.vue';

// Define the routes
const routes = [
  { path: '/', component: LandingPage },  // Landing page route
  { path: '/roadmap', component: RoadmapPage },  // Roadmap page route
  { path: '/success-stories', component: SuccessStoriesPage }, // Success stories page route
  { path: '/questionnaire', component: QuestionnairePage }, // Questionnaire page route
  { path: '/recommendations', component: Recommendations } // Recommendations page route
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),  // Use HTML5 history mode for clean URLs (no # in the URL)
  routes,  // Set the defined routes

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return new Promise((resolve) => {
        // Wait until the DOM is ready
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth', // optional
          })
        }, 300) // delay may need tweaking
      });
    } else {
      return { top: 0 }
    }
  }
});

// Create the app and use the router
createApp(App)
  .use(router)  // Integrate the router into the app
  .mount('#app');  // Mount the app to the DOM
