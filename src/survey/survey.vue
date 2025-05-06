<template>
  <div class="max-w-3xl mx-auto py-32">
    <div class="bg-white shadow-xl rounded-xl p-8 space-y-6 border">
      <h1 class="text-3xl font-extrabold text-gray-800 mb-4">Personalize your Tech Trends Report</h1>
      <form @submit.prevent="submitForm" class="space-y-8">

        <!-- Institution Size -->
        <div>
          <label class="block text-lg font-semibold text-gray-700 mb-2">Select your institution size:</label>
          <select v-model="size" class="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option disabled value="">-- Select Size --</option>
            <option value="small">Small (&lt; 1,000)</option>
            <option value="medium">Medium (1,000–10,000)</option>
            <option value="large">Large (&gt;10,000)</option>
          </select>
        </div>

        <!-- Values and Subvalues -->
        <div>
          <label class="block text-lg font-semibold text-gray-700 mb-3">Which values are most important to your institution? <span class="text-sm text-gray-500">(Select up to 3)</span></label>

          <!-- Autonomy -->
          <div class="mb-4">
            <h3 class="text-orange font-large font-extrabold mb-1">Autonomy</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label v-for="subvalue in subvalues['autonomy']" :key="subvalue">
                <input type="checkbox" v-model="selectedSubvalues['autonomy']" :value="subvalue" /> {{ subvalue }}
              </label>
            </div>
          </div>
          

          <!-- Justice -->
          <div class="mb-4">
            <h3 class="text-blue-700 font-large font-extrabold mb-1">Justice</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label v-for="subvalue in subvalues['justice']" :key="subvalue">
                <input type="checkbox" v-model="selectedSubvalues['justice']" :value="subvalue" /> {{ subvalue }}
              </label>
            </div>
          </div>

          <!-- Humanity -->
          <div class="mb-4">
            <h3 class="text-green-700 font-large font-extrabold mb-1">Humanity</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label v-for="subvalue in subvalues['humanity']" :key="subvalue">
                <input type="checkbox" v-model="selectedSubvalues['humanity']" :value="subvalue" /> {{ subvalue }}
              </label>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow transition"
          :disabled="!size || Object.values(selectedSubvalues).every(subvalue => subvalue.length === 0) || Object.values(selectedSubvalues).flat().length > 3"
        >
          Get My Report
        </button>

        <!-- Warning -->
        <p v-if="Object.values(selectedSubvalues).flat().length > 3" class="text-red-600 text-sm">Please select no more than 3 values.</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, reactive, watch } from 'vue'
import { trends } from './trends.js'  // Import the trends data

const size = ref('')
const selectedSubvalues = reactive({
  autonomy: [],
  justice: [],
  humanity: [],
})
const router = useRouter()

const subvalues = {
  autonomy: [
    'Self-determination of pupils and students',
    'Safeguarding of private life and personal data',
    'Independence of education',
    'Freedom of education',
  ],
  justice: [
    'Inclusivity',
    'Equality',
    'Integrity',
  ],
  humanity: [
    'Respect',
    'Health, well-being',
    'Safety',
    'Personal development',
    'Social cohesion',
    'Meaningful contact'
    ]
}

const sizeToReadiness = {
  small: 'act',
  medium: 'plan',
  large: 'watch',
}


function submitForm() {
  const readiness = sizeToReadiness[size.value]

  // Filter trends by subvalues
  const selectedPages = []
  const selectedValues = Object.values(selectedSubvalues).flat()

  trends.forEach(trend => {
  const isReadinessMatch = (() => {
    if (readiness === 'act') return trend.readiness === 'act'
    if (readiness === 'plan') return ['act', 'plan'].includes(trend.readiness)
    if (readiness === 'watch') return ['plan', 'watch'].includes(trend.readiness)
    return false
  })()

  if (isReadinessMatch) {
    const matchingSubvalues = trend.subvalues.filter(subvalue => selectedValues.includes(subvalue))
    if (matchingSubvalues.length > 0) {
      selectedPages.push(...trend.pages)
    }
  }
})

  const uniquePages = [...new Set(selectedPages)].sort((a, b) => a - b)

  router.push({
    path: '/result',
    query: {
      size: size.value,
      values: Object.keys(selectedSubvalues).filter(key => selectedSubvalues[key].length).join(','),
      readiness,
      pages: uniquePages.join(','),
    },
  })
}
</script>
