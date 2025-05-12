<template>
  <div class="max-w-3xl mx-auto py-32">
    <div class="bg-white shadow-xl rounded-xl p-8 space-y-6 border">
      <h1 class="text-3xl font-extrabold text-gray-800 mb-4">Personalize your Tech Trends Report</h1>
      <form @submit.prevent="submitForm" class="space-y-8">

        <!-- Institution Size -->
        <div>
          <label class="block text-lg font-semibold text-gray-700 mb-2">
            How far ahead are you planning?  
            <span class="text-sm text-gray-500">(We’ll suggest technologies based on your timeline)</span>
          </label>
          <select v-model="size" class="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option disabled value="">-- Select your timeline --</option>
            <option value="small">0-3 years</option>
            <option value="medium">3-5 years</option>
            <option value="large">5+ years</option>
          </select>
          <p v-if="showError && !size" class="text-red-600 text-sm mt-1">Please select a timeline.</p>
        </div>

        <!-- Values and Subvalues -->
        <div>
          <label class="block text-lg font-semibold text-gray-700 mb-3">Which values are most important to your institution? <span class="text-sm text-gray-500">(Select up to 3)</span></label>

          <!-- Value Section Template -->
          <div v-for="category in Object.keys(subvalues)" :key="category" class="mb-4">
            <div class="flex items-center mb-1">
              <h3 :class="valueColors[category] + ' font-large font-extrabold mr-2'">
                {{ category.charAt(0).toUpperCase() + category.slice(1) }}
              </h3>
              <button @click.prevent="openInfoBox === category ? openInfoBox = null : openInfoBox = category" class="text-blue-600 hover:text-blue-800" aria-label="Info">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </button>
            </div>

            <div v-if="openInfoBox === category" class="relative bg-white border border-gray-300 p-6 rounded-lg shadow-xl mb-4 z-10">
              <button @click="openInfoBox = null" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold" aria-label="Close">&times;</button>
              <p class="text-gray-800 whitespace-pre-line">{{ valueInfo[category] }}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label v-for="subvalue in subvalues[category]" :key="subvalue">
                <input type="checkbox" v-model="selectedSubvalues[category]" :value="subvalue" /> {{ subvalue }}
              </label>
            </div>
          </div>
          <p v-if="showError && Object.values(selectedSubvalues).flat().length === 0" class="text-red-600 text-sm">Please select at least one value.</p>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow transition"
          :disabled="Object.values(selectedSubvalues).flat().length > 3"
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
import { ref, reactive } from 'vue'
import { trends } from './trends.js'

const size = ref('')
const openInfoBox = ref(null)
const showError = ref(false)
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

const valueColors = {
  autonomy: 'text-purple-700',
  justice: 'text-blue-700',
  humanity: 'text-green-700'
}

const valueInfo = {
  justice: `Justice comprises concepts such as equality, inclusivity and integrity. Education should offer equal opportunities to all, without disadvantaging or excluding any specific group. Social or cultural background and gender should not influence how pupils and students are treated. This means that all pupils and students should be treated without prior judgement, not just by their teachers, but also by algorithms. Equality is paramount in education.

• Inclusivity in education means that it is open to all students. Everyone may take part, belong and be taught how to participate in society.

• Integrity means, among other things, that education is trusted, transparent and verifiable, as are the data and systems that are used. Integrity also means that public resources are used for the purpose for which they are intended, while taking into account sustainability, to do justice to future generations.`,
  humanity: `Humanity means having consideration for the human aspect in the education sector. It comprises social cohesion, meaningful contact, respect, safety, health and well-being, and self-development.

• Educational institutions are places for social connection, encounters and meaningful contact.

• An educational institution should respect the unique character of every student, who should be seen and heard as an individual rather than treated as a number or a cog in the system. It should provide a safe environment – online, physical and mental – and safeguard the health and well-being of its students.

• In this environment, it should be possible to make mistakes that do not have an impact beyond the educational context.

• The human perspective is paramount in education: not a single decision should be taken or opinion expressed about a student that is based purely on data analysis.

• Education encourages self-development: the expression of the individual character of students in relation to the world.`,
  autonomy: `The literal meaning of autonomy is to live under your own laws. Autonomy comprises values such as self-determination, the safeguarding of personal privacy and educational independence and freedom.

• Students have the right to self-determination: they have sufficient freedom to choose the type of education that suits them and they have autonomy over their development and choices.

• The safeguarding of personal life and personal data is an important part of autonomy: lecturers and students need to know that their privacy is ensured when they use the digital resources of their educational institution, and that they may determine how their data is used.

• Educational independence means that educational institutions are able to teach without external interference.

• Educational freedom means that educational institutions are able to structure their teaching based on the distinctive character and convictions of the institution and within the boundaries of the law and the contours of a free, pluriform and democratic society.`
}

const sizeToReadiness = {
  small: 'act',
  medium: 'plan',
  large: 'watch',
}

function submitForm() {
  if (!size.value || Object.values(selectedSubvalues).flat().length === 0 || Object.values(selectedSubvalues).flat().length > 3) {
    showError.value = true
    return
  }

  const readiness = sizeToReadiness[size.value]
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
