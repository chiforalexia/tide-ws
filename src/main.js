import { createApp } from 'vue';
import './assets/styles/tailwind.css';  // Make sure Tailwind CSS is loaded
import './assets/styles/style.css';  
import App from './index.vue';  // Main component to mount
import { createRouter, createWebHistory } from 'vue-router';  // Import Vue Router
import RoadmapPage from './pages/RoadmapPage.vue';  // Import other pages
import LandingPage from './pages/LandingPage.vue';
import SuccessStoriesPage from './pages/SuccessStoriesPage.vue';
import SurveyPage from './survey/survey.vue';
import ResultPage from './survey/result.vue';
import KnowledgeHub from './pages/KnowledgeHub.vue';


// Define the routes
const routes = [
  { path: '/', component: LandingPage },  // Landing page route
  { path: '/roadmap', component: RoadmapPage },  // Roadmap page route
  { path: '/success-stories', component: SuccessStoriesPage }, // Success stories page route
  { path: '/survey', component: SurveyPage }, // Survey page route
  { path: '/result', component: ResultPage }, // Result page route
  { path: '/knowledge-hub', component: KnowledgeHub }, // Knowledge Hub page route
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
