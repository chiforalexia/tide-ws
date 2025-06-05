import { createApp } from "vue";
import "./assets/styles/tailwind.css"; // Tailwind CSS styles
import "./assets/styles/style.css"; // SURF CSS styles
import App from "./index.vue"; // Main component to mount
import { createRouter, createWebHistory } from "vue-router"; //  Vue Router
import RoadmapPage from "./pages/RoadmapPage.vue"; 
import LandingPage from "./pages/LandingPage.vue";
import SuccessStoriesPage from "./pages/SuccessStoriesPage.vue";
import SurveyPage from "./survey/survey.vue";
import ResultPage from "./survey/result.vue";
import KnowledgeHub from "./pages/KnowledgeHub.vue";

// Defining the routes
const routes = [
  { path: "/", component: LandingPage }, // Landing page route
  { path: "/roadmap", component: RoadmapPage }, // Roadmap page route
  { path: "/success-stories", component: SuccessStoriesPage }, // Success stories page route
  { path: "/survey", component: SurveyPage }, // Survey page route
  { path: "/result", component: ResultPage }, // Result page route
  { path: "/knowledge-hub", component: KnowledgeHub }, // Knowledge Hub page route
];

// Creating the router instance
const router = createRouter({
  history: createWebHistory(), // HTML5 history mode for clean URLs (no # in the URL)
  routes, // defined routes

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return new Promise((resolve) => {
        // Wait until the DOM is ready
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: "smooth", 
          });
        }, 300); // delay 
      });
    } else {
      return { top: 0 };
    }
  },
});

createApp(App)
  .use(router) // Integrating the router into the app
  .mount("#app"); // Mounting the app to the DOM
