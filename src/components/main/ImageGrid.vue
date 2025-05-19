<template>
  <section id="technologies" class="py-24">

    <div class="container mx-auto px-4 mb-12">
      <!-- Title section -->
      <div class="text-center">
        <!-- Badge -->
        <div class="bubble">
          Technologies
        </div>

        <!-- Main title -->
        <h2 class="text-3xl md:text-4xl font-bold mb-2">
          Explore the Future of Technology
        </h2>

        <!-- Subtitle -->
        <p class="text-gray-600 max-w-2xl mx-auto">
          From AI to Quantum and beyond, explore how emerging technologies are shaping the future of research and innovation in the Netherlands through the SURF Tech Trends Report.
        </p>
      </div>
    </div>

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
              <!-- Black overlay hover -->
              <div
                class="absolute inset-0 bg-black transition-all duration-300 ease-in-out"
                :class="section.hovered ? 'opacity-40' : 'opacity-10'"
              ></div>
              
              <!-- Gradient fade overlay -->
              <div 
                class="absolute inset-0 transition-opacity duration-300"
                :class="section.hovered ? 'opacity-100' : 'opacity-80'"
                style="background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);"
              ></div>
            </div>

            <!-- Content block that slides up -->
            <div 
              class="absolute inset-x-0 bottom-0 transform transition-all duration-300"
              :class="section.hovered ? 'translate-y-1' : 'translate-y-8'"
            >
              <!-- Content -->
              <div class="px-6 py-3">
                <h3 class="text-white text-xl md:text-2xl font-bold mb-7">{{ section.title }}</h3>
                <!-- Subtitle and description - only visible on hover -->
                <div 
                  class="overflow-hidden transition-all duration-300"
                  :class="section.hovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'"
                >
                  <p class="text-white text-sm mb-2">{{ section.description }}</p>
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
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
                  <h2 class="text-5xl font-bold text-gray-800 py-6 ">{{ section.title }}</h2>
                  <p class="text-gray-600 text-xl leading-relaxed">{{ section.description }}</p>

                </div>
                <img 
                  :src="section.image" 
                  :alt="section.title"
                  class="w-48 h-48 object-cover rounded-xl shadow-lg"
                />
              </div>

              <!-- Main content grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left column with subchapters -->
                <div class="space-y-6">
                  <!-- Subchapters Box -->
                  <div class="bg-gray-50 rounded-xl p-8 shadow-lg border border-blue-500">
                    <div class="flex items-center gap-3 mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
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
                <div class="space-y-10">

                  <!-- Technologies Box -->
                  <div class="bg-gray-50 rounded-xl p-6 shadow-lg border border-green-500">
                    <div class="flex items-center gap-2 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>
                      <h3 class="text-xl font-semibold text-gray-800">Initiatives included in the Report</h3>
                    </div>
                    <ul class="space-y-3">
                      <li 
                        v-for="(tech, idx) in section.Technologies" 
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                  
        
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
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
  Technologies: string[]
  hovered: boolean
}

const sections = ref<Section[]>([
  {
    id: 1,
    title: 'Artificial Intelligence',
    description: 'Artificial Intelligence (AI) and, more specifically, Machine Learning (ML) continue to evolve, leading to both groundbreaking achievements and ethical concerns.',
    image: '/public/tile_AI.png',
    subChapters: [
      'Towards ‘Frankenmodels’',
      'More efficient approaches towards AI systems',
      'New ways to access data',
      'Towards trustworthy AI',
      'More accessible computing and models'
    ],
    Technologies: [
      'DeepMind’s Flamingo model',
      'Towards AI-specific hardware',
      'ODISSEI Secure Supercomputer',
      'Algorithm registers',
      'Facilitating model design with autoML'
    ],
    hovered: false
  },
  {
    id: 2,
    title: 'Advanced Computing',
    description: 'Solving societal challenges with digital research infrastructure on a global scale requires a unique combination of computing, storage, and networking technologies.',
    image: '/public/tile_AC.png',
    subChapters: [
      'Computing continuum',
      'Energy sustainability in digital infrastructures',
      'Protect sovereignty in digital infrastructure',
      'Unconventional paradigms for computing',
      'High-end computing in qualitative research fields'
    ],
    Technologies: [
      'Urgent computing',
      'Digital and green transition picking up in Netherlands / Europe',
      'Geographical chips act',
      'Machine learning enhanced scientific computing',
      'Community specific project calls'
    ],
    hovered: false
  },
  {
    id: 3,
    title: 'Quantum',
    description: 'Quantum technologies span computing, communication, and sensing, promising exponential performance improvements and novel applications.',
    image: '/public/tile_Quantum.png',
    subChapters: [
      'Quantum Key Distribution (QKD) gaining momentum',
      'Quantum Computing in the Cloud',
      'Hybrid quantum/classical computing',
      'Error correction techniques',
      'Quantum curiosity'
    ],
    Technologies: [
      'Quantum Key Distribution: The Future Of Secure Communication',
      'Tools and tutorials for quantum computing',
      'NVIDIA Announces Hybrid Quantum-Classical Computing Platform',
      'Machine learning enhanced scientific computing',
      'Community specific project calls'
    ],
    hovered: false
  },
  {
    id: 4,
    title: 'Edge',
    description: 'Edge computing enables real-time, distributed processing and automation close to the data source, supporting smart environments and systems.',
    image: '/public/tile_Edge.png',
    subChapters: [
      'Cloud-Edge Continuum',
      'Digital Twins',
      'Actual real-time data streams',
      'Run code anywhere',
      'Robotic Automation'
    ],
    Technologies: [
      'How IoT is helping to create smart university campuses',
      'Digital twin: Empowering power systems with real-time training and predictive simulation',
      'Real-time attention span tracking in online education',
      'Leveraging containers for reproducible psychological research',
      'The rise of robots-as-a-service'
    ],
    hovered: false
  },
  {
    id: 5,
    title: 'Network',
    description: 'Modern networks support intelligent connectivity and architectural flexibility across cloud, edge, and enterprise environments.',
    image: '/public/tile_Network.png',
    subChapters: [
      'Big Tech and networking',
      'Intelligent networks',
      'Edge and campus architecture',
      'Next generation networks'
    ],
    Technologies: [
      'Big tech conquers internet infrastructure',
      'Creating a Smarter Network',
      'The AI driven campus architecture',
      'ITU-T Technical Report - Use Case: Huge Scientific Data Applications (HSD)',
    ],
    hovered: false
  },
  {
    id: 6,
    title: 'eXtended Reality',
    description: 'XR, or \'eXtended Reality\' is both a technology in its own right, as well as a term used for a combination of other reality-altering technologies; combinations of virtual reality, augmented reality and mixed reality could all constitute XR.',
    image: '/public/tile_XR.png',
    subChapters: [
      'Enriching XR by combining technologies',
      'Virtual social interactions are getting more advanced',
      'New gear for new realities',
      'An increasing number of ethical concerns',
      'A fragmented ecosystem'
    ],
    Technologies: [
      'Generative AI for possible digital world creation',
      'Virtual campuses are opening',
      'Build your XR training scenario with Interhaptics',
      'The future of advertising in AR/VR',
      'Rapid growth in technologies accelerate development of Metaverse'
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

.surf-green {
  color: #17A95D;
}

.surf-blue {
  color: #0072C6;
}


</style>