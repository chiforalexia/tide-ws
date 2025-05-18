<template>
    <!-- Overlay -->
    <div
      v-if="showLearnMore"
      class="fixed inset-0 bg-gray-800 bg-opacity-60 z-50 flex items-center justify-center"
      @click.self="closeOverlay"
    >
      <div class="bg-white rounded-lg max-w-4xl w-full shadow-xl overflow-hidden relative">
        <!-- Corrected gradient -->
        <div class="h-1.5 w-full bg-gradient-to-r from-blue-500 to-green-500"></div>
  
        <div class="p-6">
          <button
            @click="closeOverlay"
            class="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            ✕
          </button>
  
          <h3 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            {{ resource.title }}
          </h3>
  
          <!-- Bubbles -->
          <div class="flex flex-wrap gap-2 mt-2 mb-4">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium type">
              {{ resource.type }}
            </span>
            <span v-if="resource.time" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium time">
              {{ resource.time }}
            </span>
            <span v-if="resource.people" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium people">
              {{ resource.people }}
            </span>
          </div>
  
          <p class="text-gray-600 mb-4">
            {{ resource.description }}
          </p>
  
          <!-- Conditional layout for tips + image -->
          <div v-if="resource.exampleimage" class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-start">
            <!-- Tips box -->
            <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400 text-sm text-gray-600">
              <h4 class="font-semibold mb-2 text-gray-700">Tips for Using This Resource:</h4>
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(tip, index) in resource.tips" :key="index">{{ tip }}</li>
              </ul>
            </div>
  
            <!-- Example image -->
            <div>
              <img :src="resource.exampleimage" alt="Example usage" class="rounded-lg shadow-md w-full object-cover max-h-64" />
            </div>
          </div>
  
          <!-- Full-width tips if no image -->
          <div v-else class="mt-6">
            <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400 text-sm text-gray-600 w-full">
              <h4 class="font-semibold mb-2 text-gray-700">Tips for Using This Resource:</h4>
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(tip, index) in resource.tips" :key="index">{{ tip }}</li>
              </ul>
            </div>
          </div>
  
  
          <!-- Download + Citation -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 p-4 border-t border-gray-100 bg-gray-50 gap-2 rounded-lg">
            <a
              :href="resource.url"
              target="_blank"
              class="download-btn"
            >
              Download Resource
            </a>

            <p v-if="resource.citation" class="text-xs text-gray-500 italic mt-2 sm:mt-0">
              {{ resource.citation }}
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Card -->
    <div
      class="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group fade-in"
      :style="{ animationDelay: `${0.1 * (index + 1)}s` }"
      @click="showLearnMore = true"
    >
      <div class="flex flex-col h-full">
        <h4 class="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
          {{ resource.title }}
        </h4>
  
        <!-- Only type shown on card -->
        <div class="mb-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium resources_bubble">
            {{ resource.type }}
          </span>
        </div>
  
       
  
        <div class="flex justify-end mt-2">
          <button
            @click.stop="showLearnMore = true"
            class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-7 px-3 text-xs  phases_bubble border-blue-100 hover:bg-blue-100 border"
          >
            Learn How
          </button>
        </div>
      </div>
    </div>
  </template>

  
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  resource: {
    title: string;
    type: string;
    subtitle?: string;
    description: string;
    tips: string[];
    url: string;
    time?: string;
    people?: string;
    exampleimage?: string;
    citation?: string;
  };
  index: number;
}>();

const showLearnMore = ref(false);

const closeOverlay = () => {
  showLearnMore.value = false;
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}



.type{
  background-color: #DFF4FF;
  color: #004C97;
}

.time{
  background-color: #FFE6D2;
  color: #C15500;
}

.people{
  background-color: #DCF2E5;
  color: #006731;
}

</style>
