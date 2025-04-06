<script setup lang="ts">
import { ref, nextTick } from 'vue'


interface Section {
  id: number
  title: string
  description: string
  image: string
  subChapters: string[]
  hovered: boolean
}

const sections = ref<Section[]>([
  {
    id: 1,
    title: 'Artificial Intelligence',
    description: 'Artificial Intelligence (AI) and, more specifically, Machine Learning (ML) continue to evolve, leading to both groundbreaking achievements and ethical concerns.',
    image: '/public/tile_AI.png',
    subChapters: [
      'Machine Learning',
      'Neural Networks',
      'Natural Language Processing',
      'Computer Vision',
      'Robotics'
    ],
    keyTrends: [
      'Frankenmodels & Modular AI',
      'Efficient AI Systems',
      'New Data Access Methods',
      'Trustworthy AI',
      'Accessible AI Computing'
    ],
    dutchTechnologies: [
      'TU Delft AI Labs',
      'Philips Healthcare AI',
      'ING AI Solutions',
      'TNO AI Research',
      'Amsterdam AI Hub'
    ],
    hovered: false
  },
  {
    id: 2,
    title: 'Advanced Computing',
    description: 'Solving societal challenges with digital research infrastructure on a global scale requires a unique combination of computing, storage, and networking technologies.',
    image: '/public/tile_AC.png',
    subChapters: [
      'High Performance Computing',
      'Cloud Infrastructure',
      'Data Centers',
      'Green Computing',
      'Distributed Systems'
    ],
    keyTrends: [
      'Quantum Integration',
      'Sustainable Computing',
      'Edge Computing',
      'AI Accelerators',
      'Neuromorphic Computing'
    ],
    dutchTechnologies: [
      'SURF Supercomputing',
      'Dutch National Supercomputer',
      'Amsterdam Data Hub',
      'Green IT Amsterdam',
      'Delft Quantum Computing'
    ],
    hovered: false
  },
  {
    id: 3,
    title: 'Quantum',
    description: 'There are three main subfields under the umbrella of Quantum Information Science and Technology: quantum computing and simulation, quantum sensing and metrology, and quantum communication.',
    image: '/public/tile_Quantum.png',
    subChapters: [
      'Quantum Computing',
      'Quantum Cryptography',
      'Quantum Sensing',
      'Quantum Networks',
      'Quantum Algorithms'
    ],
    keyTrends: [
      'Error Correction',
      'Quantum Supremacy',
      'Quantum Internet',
      'Quantum Software',
      'Quantum-Safe Security'
    ],
    dutchTechnologies: [
      'QuTech Delft',
      'Quantum Delta NL',
      'QphoX',
      'Orange Quantum Systems',
      'Quantum.Amsterdam'
    ],
    hovered: false
  },
  {
    id: 4,
    title: 'Edge',
    description: 'Edge computing covers a broad spectrum of technologies from Internet of Things sensors to Extended Reality devices.',
    image: '/public/tile_Edge.png',
    subChapters: [
      'IoT Devices',
      'Edge Analytics',
      'Mobile Edge Computing',
      'Smart Sensors',
      'Edge Security'
    ],
    keyTrends: [
      '5G Integration',
      'Edge AI/ML',
      'IoT Platforms',
      'Smart Cities',
      'Edge Orchestration'
    ],
    dutchTechnologies: [
      'SURF Edge Lab',
      'KPN Edge Cloud',
      'Dutch Edge Forum',
      'Smart Industry NL',
      'EdgeLab Amsterdam'
    ],
    hovered: false
  },
  {
    id: 5,
    title: 'Network',
    description: 'Fixed communication networks are essential for the digitalisation of society in the Netherlands. Networks also integrate compute and storage more and more.',
    image: '/public/tile_Network.png',
    subChapters: [
      '5G Networks',
      'Network Security',
      'Software-Defined Networks',
      'Network Protocols',
      'Network Architecture'
    ],
    keyTrends: [
      '6G Research',
      'Network Slicing',
      'Zero Trust Security',
      'Open RAN',
      'Network AI'
    ],
    dutchTechnologies: [
      'KPN Networks',
      'TNO Telecom',
      'Dutch Optics Centre',
      'SURFnet',
      'Amsterdam Internet Exchange'
    ],
    hovered: false
  },
  {
    id: 6,
    title: 'eXtended Reality',
    description: 'XR, or \'eXtended Reality\' is both a technology in its own right, as well as a term used for a combination of other reality-altering technologies; combinations of virtual reality, augmented reality and mixed reality could all constitute XR.',
    image: '/public/tile_XR.png',
    subChapters: [
      'Virtual Reality',
      'Augmented Reality',
      'Mixed Reality',
      'Immersive Technologies',
      'XR Applications'
    ],
    keyTrends: [
      'Metaverse',
      'Digital Twins',
      'Haptic Feedback',
      'Social VR',
      'Enterprise AR'
    ],
    dutchTechnologies: [
      'TNO XR Lab',
      'Dutch VR Days',
      'XR Base Amsterdam',
      'VirtualDutch',
      'AR/VR Next'
    ],
    hovered: false
  }
])

const activeSection = ref<Section | null>(null)
const scrollContainer = ref<HTMLElement | null>(null)
const progress = ref(0)

const openSection = (section: Section) => {
  activeSection.value = section
  progress.value = 0
  document.body.style.overflow = 'hidden'

  nextTick(() => {
    if (scrollContainer.value) {
      const index = sections.value.findIndex(s => s.id === section.id)
      if (index !== -1) {
        scrollContainer.value.scrollTo({
          left: index * scrollContainer.value.clientWidth,
          behavior: 'smooth'
        })
      }
    }
  })
}

const closeSection = () => {
  activeSection.value = null
  document.body.style.overflow = ''
}

const updateProgress = () => {
  if (!scrollContainer.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  
  requestAnimationFrame(() => {
    progress.value = (scrollLeft / (scrollWidth - clientWidth)) * 100
  })
}

const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return
  
  const scrollAmount = scrollContainer.value.clientWidth
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}

const setHovered = (section: Section, value: boolean) => {
  section.hovered = value
}
</script>

<template>
  <section id="technologies" class="py-24">
    <div class="min-h-[90vh] flex items-center justify-center">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="section in sections"
            :key="section.id"
            @click="openSection(section)"
            class="relative group overflow-hidden rounded-lg h-48 md:h-56 cursor-pointer"
            @mouseenter="setHovered(section, true)"
            @mouseleave="setHovered(section, false)"
          >
            <!-- Image with overlay -->
            <div class="relative h-full">
              <img 
                :src="section.image" 
                :alt="section.title"
                class="w-full h-full object-cover transition-transform duration-300"
                :class="{ 'scale-110': section.hovered }"
              />
              <!-- Black overlay -->
              <div 
                class="absolute inset-0 bg-black transition-opacity duration-300"
                :class="section.hovered ? 'opacity-70' : 'opacity-50'"
              ></div>
            </div>

            <!-- Content block that slides up -->
            <div 
              class="absolute inset-x-0 bottom-0 transform transition-all duration-300"
              :class="section.hovered ? 'translate-y-0' : 'translate-y-8'"
            >
              <!-- Content -->
              <div class="px-6 py-4">
                <h3 class="text-white text-xl md:text-2xl font-bold mb-5">{{ section.title }}</h3>
                <!-- Subtitle and description - only visible on hover -->
                <div 
                  class="overflow-hidden transition-all duration-300"
                  :class="section.hovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'"
                >
                  <p class="text-white text-sm mb-4">{{ section.description }}</p>
                  <div class="text-right">
                    <button class="px-2 py-2 border-2 border-white text-white rounded-full bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
                    >
                    Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Expanded section with background tiles visible -->
    <div v-if="activeSection" class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <!-- Semi-transparent overlay -->
      <div class="absolute inset-0 bg-black/20 backdrop-blur-sm" @click.self="closeSection"></div>

      <!-- Content container with top gap -->
      <div class="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col" style="max-height: calc(100vh - 8rem);">

        <!-- Close button -->
        <button 
          @click="closeSection" 
          class="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 z-50"
        >
          <X class="w-6 h-6" />
        </button>

        <div 
          ref="scrollContainer" 
          class="flex-1 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          @scroll="updateProgress"
        >
          <div 
            v-for="section in sections" 
            :key="section.id"
            class="min-w-full w-full flex-shrink-0 snap-center flex items-start justify-center p-6 md:p-10"
          >
            <div class="max-w-6xl w-full space-y-8 overflow-y-auto" style="max-height: calc(100vh - 8rem);">
              <!-- Header with larger image -->
              <div class="flex items-start gap-8">
                <div class="flex-1">
                  <h2 class="text-5xl font-bold text-gray-800 mb-6">{{ section.title }}</h2>
                  <p class="text-gray-600 text-xl leading-relaxed">{{ section.description }}</p>
                </div>
                <img 
                  :src="section.image" 
                  :alt="section.title"
                  class="w-48 h-48 object-cover rounded-xl shadow-lg"
                />
              </div>

              <!-- Main content grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Left column with subchapters -->
                <div class="md:col-span-2 space-y-6">
                  <!-- Subchapters Box -->
                  <div class="bg-gray-50 rounded-xl p-8 shadow-sm">
                    <div class="flex items-center gap-3 mb-6">
                      <Cpu class="w-6 h-6 text-blue-500" />
                      <h3 class="text-2xl font-semibold text-gray-800">Subchapters</h3>
                    </div>
                    <ul class="space-y-4">
                      <li 
                        v-for="(subChapter, idx) in section.subChapters" 
                        :key="idx"
                        class="flex items-center text-gray-700 text-lg"
                      >
                        <div class="w-2 h-2 rounded-full bg-blue-500 mr-4"></div>
                        {{ subChapter }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Right column with Key Trends and Dutch Technologies -->
                <div class="space-y-6">
                  <!-- Key Trends Box -->
                  <div class="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <div class="flex items-center gap-2 mb-4">
                      <Lightbulb class="w-5 h-5 text-orange-500" />
                      <h3 class="text-xl font-semibold text-gray-800">Key Trends</h3>
                    </div>
                    <ul class="space-y-3">
                      <li 
                        v-for="(trend, idx) in section.keyTrends" 
                        :key="idx"
                        class="flex items-center text-gray-700"
                      >
                        <div class="w-2 h-2 rounded-full bg-orange-500 mr-3"></div>
                        {{ trend }}
                      </li>
                    </ul>
                  </div>

                  <!-- Dutch Technologies Box -->
                  <div class="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <div class="flex items-center gap-2 mb-4">
                      <Flag class="w-5 h-5 text-green-500" />
                      <h3 class="text-xl font-semibold text-gray-800">Dutch Technologies</h3>
                    </div>
                    <ul class="space-y-3">
                      <li 
                        v-for="(tech, idx) in section.dutchTechnologies" 
                        :key="idx"
                        class="flex items-center text-gray-700"
                      >
                        <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                        {{ tech }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation and progress -->
        <div class="absolute bottom-4 right-4 flex items-center gap-4 bg-white rounded-full p-0.5 shadow-lg">
          <button 
            @click="scroll('left')"
            class="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 disabled:opacity-50"
            :disabled="progress <= 0"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>
          <!-- progress bar -->
          <div class="w-20 md:w-24 h-1.5 bg-white rounded-full overflow-hidden">
            <div 
              class="h-full bg-blue-500 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-pulse transition-all duration-300"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
          <button 
            @click="scroll('right')"
            class="p-1 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 disabled:opacity-50"
            :disabled="progress >= 100"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.transform {
  will-change: transform;
}
</style>