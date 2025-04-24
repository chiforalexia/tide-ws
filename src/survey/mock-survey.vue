<template>
    <div class="max-w-xl mx-auto py-24 px-4">
      <h1 class="text-2xl font-bold mb-6">Mock Tech Trends Survey</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <label class="block text-lg font-medium text-gray-700">Select your institution size:</label>
        <select v-model="size" class="w-full border px-3 py-2 rounded text-gray-700">
            <option disabled value="">-- Select Size --</option>
            <option value="small">Small (&lt; 1,000)</option>
            <option value="medium">Medium (1,000–10,000)</option>
            <option value="large">Large (&gt;10,000)</option>
        </select>

        <label class="block text-lg font-medium text-gray-700">Which value matters most to your institution?</label>
        <select v-model="value" class="w-full border px-3 py-2 rounded text-gray-700">
            <option disabled value="">-- Select Value --</option>
            <option value="autonomy">Autonomy</option>
            <option value="justice">Justice</option>
            <option value="humanity">Humanity</option>
        </select>
  
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded transition"
          :disabled="!size"
        >
          Get My Report
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  
  const size = ref('')
  const value = ref('')
  const router = useRouter()
  
  const sizeToReadiness = {
  small: 'act',
  medium: 'plan',
  large: 'watch',
}

const trendIndex = [
  {
    name: "Towards ‘Frankenmodels’",
    page: 4,
    readiness: ['act'],
    values: ['autonomy', 'justice', 'humanity'],
  },
  {
    name: "More efficient approaches to AI systems",
    page: 5,
    readiness: ['plan'],
    values: ['autonomy', 'justice'],
  },
  {
    name: "Federated learning",
    page: 6,
    readiness: ['watch', 'plan', 'act'],
    values: ['autonomy', 'justice', 'humanity'],
  },
  {
    name: "Run code anywhere",
    page: 7,
    readiness: ['watch', 'plan', 'act'],
    values: ['autonomy', 'justice', 'humanity'],
  },
  {
    name: "Edge and campus architecture",
    page: 8,
    readiness: ['act'],
    values: ['autonomy', 'justice', 'humanity'],
  },
  {
    name: "Quantum curiosity",
    page: 10,
    readiness: ['watch'],
    values: ['autonomy', 'justice', 'humanity'],
  },
  {
    name: "Virtual social interactions are getting more advanced",
    page: 12,
    readiness: ['plan'],
    values: ['autonomy', 'justice', 'humanity'],
  },
  // Extend this array with more trends as needed
]

function submitForm() {
  const readiness = sizeToReadiness[size.value]

  const selectedPages = trendIndex
    .filter(t => t.readiness.includes(readiness) && t.values.includes(value.value))
    .map(t => t.page)

  router.push({
    path: '/mock-result',
    query: {
      size: size.value,
      value: value.value,
      readiness,
      pages: selectedPages.join(','),
    },
  })
}
  </script>
  