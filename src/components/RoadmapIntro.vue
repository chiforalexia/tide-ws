<template>
    <section id="roadmap-intro" class="py-20 md:py-28 bg-light">
      <div class="mx-auto w-full max-w-6xl px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
          <!-- Left: Text Content -->
          <div
            class="transition-all duration-700 delay-100"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          >
            <span class="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm mb-4">
              Discover Our Roadmap
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              A Step-by-Step Guide to
              <span class="primary-text">Successful Implementation</span>
            </h2>
            <p class="text-lg mb-8">
              Our detailed roadmap breaks down the technology adoption process into manageable 
              phases, providing clear guidance and resources for each step of your journey.
            </p>
            <button @click="navigateToRoadmap" class="flex btn items-center">
              Explore Full Roadmap
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 transition-transform" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 19l5-5-5-5" />
              </svg>
            </button>
          </div>
  
          <!-- Right: Roadmap Steps -->
          <div
            class="transition-all duration-700 delay-300"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          >
            <div class="card">
              <h3 class="text-xl font-semibold mb-6">Implementation Phases</h3>
              <div class="space-y-4">
                <div
                  v-for="(step, index) in steps"
                  :key="step.id"
                  class="flex items-center p-3 rounded-lg transition-all duration-300"
                  :class="activeStep === index ? 'bg-gray-100 transform scale-105' : 'hover:bg-gray-50'"
                  @click="setActiveStep(index)"
                >
                  <div
                    :class="step.color + ' w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0'"
                  >
                    {{ step.id }}
                  </div>
                  <div class="flex-grow">
                    <h4 class="font-medium">{{ step.title }}</h4>
                  </div>
                  <div v-if="activeStep === index" class="ml-auto">
                    <span class="w-3 h-3 rounded-full bg-blue-600 animate-ping opacity-75 block"></span>
                  </div>
                </div>
              </div>
  
              <div class="mt-6 text-center">
                <!-- <router-link to="/roadmap" class="inline-flex items-center">
                  View Detailed Roadmap
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-1" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 19l5-5-5-5" />
                  </svg>
                </router-link> -->
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const steps = [
    { id: 1, title: 'Assessment & Planning', color: 'bg-blue-100 text-blue-600' },
    { id: 2, title: 'Stakeholder Engagement', color: 'bg-blue-100 text-blue-600' },
    { id: 3, title: 'Pilot Implementation', color: 'bg-blue-100 text-blue-600' }, // Updated for better visibility
    { id: 4, title: 'Full Deployment', color: 'bg-blue-100 text-blue-600' },
    { id: 5, title: 'Evaluation & Optimization', color: 'bg-blue-100 text-blue-600 ' } // Updated for better visibility
  ]
  
  const activeStep = ref(0)
  const isVisible = ref(false)
  const router = useRouter()
  
  const setActiveStep = (index) => {
    activeStep.value = index
  }
  
  const navigateToRoadmap = () => {
    router.push('/roadmap')
  }
  
  onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    }, { threshold: 0.1 })
  
    const element = document.getElementById('roadmap-intro')
    if (element) observer.observe(element)
  
    const interval = setInterval(() => {
      activeStep.value = (activeStep.value + 1) % steps.length
    }, 1000)
  
    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  })
  </script>
  
  <style scoped>
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #005dc1;
  }
  </style>
  