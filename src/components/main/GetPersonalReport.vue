<template>
  <div class="container mx-auto px-4 py-16 max-w-3xl">
    <div class="text-center mb-12">
      <div class="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
        <span class="mr-1">Personalize your Report</span>
      </div>
      <br><br>

      <h1 class="text-4xl font-bold mb-6">
        Discover the Right Technology Trends for Your Institution
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        Get personalized recommendations tailored to your educational or research institution's unique needs and values.
      </p>

      <router-link to="/survey">
        <button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
          Get Your Personalized Report
        </button>
      </router-link>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <!-- Card 1 -->
      <div
        class="card transition-all duration-700 ease-in-out"
        :class="activeCard === 0 ? 'bg-blue-50 border-4 border-blue-400 scale-103' : ''"
      >
        <div class="card-header justify-center">
          <svg class="h-8 w-8 mb-2 text-blue-500" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.6-1.5 4.7-3.5 6H8.5C6.5 13.7 5 11.6 5 9a7 7 0 0 1 7-7z" />
          </svg>
          <h3 class="card-title">Informed Decisions</h3>
        </div>
        <div class="card-content">
          <p class="card-description">
            Make strategic technology investments based on tailored recommendations that align with your institution's values.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="card transition-all duration-700 ease-in-out"
        :class="activeCard === 1 ? 'bg-green-50 border-4 border-green-400 scale-103' : ''"
      >
        <div class="card-header justify-center">
          <svg class="h-8 w-8 mb-2 text-green-500" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
          <h3 class="card-title">Stay Ahead</h3>
        </div>
        <div class="card-content">
          <p class="card-description">
            Keep your institution at the forefront of educational technology with insights on emerging trends.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="card transition-all duration-700 ease-in-out"
        :class="activeCard === 2 ? 'bg-purple-50 border-4 border-purple-400 scale-103' : ''"
      >
        <div class="card-header justify-center">
          <svg class="h-8 w-8 mb-2 text-purple-500" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 8l3 6H9l3-6z" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <h3 class="card-title">Enhance Learning</h3>
        </div>
        <div class="card-content">
          <p class="card-description">
            Improve educational outcomes by implementing the most effective technologies for your specific context.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// State to track which card is currently active
const activeCard = ref(0)

// Change the active card every 2 seconds
onMounted(() => {
  setInterval(() => {
    activeCard.value = (activeCard.value + 1) % 3 // Loop through the cards
  }, 2000)
})
</script>

<style scoped>
.card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.card-header {
  margin-bottom: 1rem;
  text-align: center;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
}

.card-description {
  font-size: 1rem;
  color: #4b5563; /* text-gray-600 */
  text-align: center;
}

.card.scale-103 {
  transform: scale(1.03); /* Subtle scaling effect for the active card */
}
</style>
