<template>
  <section class="relative min-h-screen bg-transparent flex items-center justify-center flex-col">
    <div class="content-wrapper">
      <div class="text-content">
        <span class="subtitle text-blue-500"></span>
        
        <h1 class="title">
          {{ introData.title }}
          <span class="text-blue-600">{{ introData.title2 }}</span>
        </h1>
        
        <p class="description">
          {{ introData.description }}
        </p>
        
        <div class="features-list">
          <div v-for="(feature, index) in introData.features" 
               :key="index"
               class="feature-item">
            <span class="bullet">•</span>
            {{ feature }}
          </div>
        </div>
      </div>
      
      <div class="image-wrapper flex flex-col items-center space-y-4 mt-6">
        <div class="image-container">
          <transition name="fade" mode="out-in">
            <img 
              :key="currentImageIndex"
              :src="images[currentImageIndex]" 
              :alt="`Slide ${currentImageIndex + 1}`"
              class="report-image" 
            />
          </transition>
        </div>
        <div>
          <a 
            href="https://www.surf.nl/en/tech-trends"
            class="inline-block bg-green-100 text-green-800 px-3 py-1.5 rounded-full shadow-md transition-all duration-300 hover:bg-white hover:bg-green-200 transition"
          >
            Download Full Report
          </a>
        </div>
      </div>
    </div>

    <!-- Bubble -->
    <div class="transition-all duration-700 delay-500 opacity-100">
      <a href="#chapters" class="inline-flex items-center animate-bounce bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-200 transition">
        <span class="mr-2">Translate your vision into real impact</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="w-4 h-4 animate-bounce">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      currentImageIndex: 0,
      intervalId: null,
      introData: {
        title: "From Insight to Implementation:",
        title2: "Bridging Innovation and Adoption",
        description: "You've heard of the SURF Tech Trends Report — now it's time to act.\n\nThis site is your practical supplement to the SURF report: a living roadmap designed for institutional decision-makers including:",
        features: [
          "Technology roadmaps grounded in real-world implementation",
          "Success stories from institutions already leading change",
          "Toolkits, guidance, and support to help your organization adopt"
        ]
      },
      images: [
        '/public/report_cover.png',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
      ]
    }
  },
  mounted() {
    this.startSlideshow()
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
      }, 5000)
    }
  }
}
</script>

<style scoped>
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 4rem;
  align-items: center;
  text-align: center;
}

.text-content {
  flex: 1;
  max-width: 500px;
}

.subtitle {
  font-size: 0.9rem;
  font-weight: bold;
  display: block;
  margin-bottom: 1rem;
}

.title {
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.description {
  font-size: 1rem;
  color: #4B5563;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.features-list {
  margin-top: 1.5rem;
  text-align: left;
  padding-left: 1rem;
}

.feature-item {
  font-size: 0.95rem;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: start;
}

.bullet {
  margin-right: 0.5rem;
  color: #3B82F6;
  font-size: 1.2rem;
  line-height: 1;
}

.image-container {
  flex: 1;
  position: relative;
  max-width: 500px;
}

.report-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.message-bubble {
  background: #3B82F6;
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.message-bubble::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #3B82F6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 2rem;
  }
  
  .image-container {
    order: -1;
    max-width: 100%;
  }
  
  .title {
    font-size: 1.75rem;
  }

  .text-content {
    max-width: 100%;
  }

  .features-list {
    text-align: center;
    padding-left: 0;
  }

  .feature-item {
    justify-content: center;
  }
}
</style>