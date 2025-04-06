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
    <div v-if="activeSection" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Darker semi-transparent overlay -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click.self="closeSection"></div>

      <!-- Content container (larger height and slightly lifted up) -->
      <div class="relative w-full mx-10 md:mx-25 bg-white rounded-2xl shadow-2xl overflow-y-auto flex flex-col mt-2 ">

        <!-- Close button -->
        <button 
          @click="closeSection" 
          class="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 z-50"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>

        </button>

        <!-- Scrollable horizontal content inside frame -->
        <div 
          ref="scrollContainer" 
          class="flex-1 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          @scroll="updateProgress"
        >
          <div 
            v-for="section in sections" 
            :key="section.id"
            class="min-w-full w-full flex-shrink-0 snap-center flex flex-col"
          >
            <!-- Banner with title -->
            <div 
              class="relative h-1/4 md:h-1/3 bg-cover bg-center flex items-center justify-center"
              :style="`background-image: url('${section.image}')`"
            >
              <div class="bg-black/50 w-full h-full absolute inset-0 z-0"></div>
              <h2 class="relative z-10 text-white text-4xl md:text-5xl font-bold text-center px-4">
                {{ section.title }}
              </h2>
            </div>

            <!-- Scrollable vertical content area -->
            <div class="flex-1 p-6 md:p-10 overflow-y-auto bg-white">
              <p class="text-gray-700 text-lg leading-relaxed mb-6">
                {{ section.description }}
              </p>
              <ul class="space-y-3">
                <li 
                  v-for="(subChapter, idx) in section.subChapters" 
                  :key="idx"
                  class="flex items-center text-gray-700 text-base md:text-lg"
                >
                  <div class="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  {{ subChapter }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Navigation and progress bar -->
        <div class="sticky bottom-4 right-4 flex items-center gap-4 bg-white rounded-full p-2 shadow-lg self-end mr-4">
          <button 
            @click="scroll('left')"
            class="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 disabled:opacity-50"
            :disabled="progress <= 0"
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>

          </button>

          <div class="w-14 md:w-14 h-2 bg-white rounded-full overflow-hidden">
            <div 
              class="h-full bg-blue-500 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-pulse transition-all duration-300"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>

          <button 
            @click="scroll('right')"
            class="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 disabled:opacity-50"
            :disabled="progress >= 100"
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>

          </button>
        </div>
      </div>
    </div>

  </section>
</template>

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
    description: 'Artificial Intelligence (AI) and, more specifically, Machine Learning (ML) have taken off in recent years.',
    image: '/public/tile_AI.png',
    subChapters: [
      'Machine Learning',
      'Neural Networks',
      'Natural Language Processing',
      'Computer Vision',
      'Robotics',
      'something',
      'something',
      'something'
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