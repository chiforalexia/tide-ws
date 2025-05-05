<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  resource: {
    title: string;
    type: string;
    subtitle: string;
    description: string;
    tips: string[];
    url: string;
  };
  index: number;
}>();

const showLearnMore = ref(false);

const closeOverlay = () => {
  showLearnMore.value = false;
};
</script>

<template>
    <!-- Overlay -->
    <div
      v-if="showLearnMore"
      class="fixed inset-0 bg-gray-800 bg-opacity-60 z-50 flex items-center justify-center"
      @click.self="closeOverlay"
    >
      <div class="bg-white rounded-lg max-w-3xl w-full shadow-xl overflow-hidden relative">
        <div class="h-1.5 w-full bg-gradient-to-r from-blue-500 to-green-400"></div>
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
          <div class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 mb-2">
            {{ resource.type }}
          </div>
  
          <p class="text-gray-600 mb-4">
            {{ resource.description }}
          </p>
  
          <div class="bg-gray-50 p-4 rounded-lg mt-4 border-l-4 border-blue-400 text-sm text-gray-600">
            <h4 class="font-semibold mb-2 text-gray-700">Tips for Using This Resource:</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="(tip, index) in resource.tips" :key="index">{{ tip }}</li>
            </ul>
          </div>
  
          <div class="flex justify-between items-center mt-6 p-4 border-t border-gray-100 bg-gray-50">
            <a
              :href="resource.url"
              target="_blank"
              class="text-white text-xs bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md transition-colors"
            >
              Download Resource
            </a>
            
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
        <div class="flex items-center gap-2 mb-2">
          <h4 class="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
            {{ resource.title }}
          </h4>
        </div>
        <p class="text-xs text-gray-500 mb-auto">{{ resource.type }}</p>
  
        <!-- Optional: Leave this if you want the button too -->
        <div class="flex justify-end mt-2">
          <button
            @click.stop="showLearnMore = true"
            class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-7 px-3 text-xs bg-blue-50 border-blue-100 text-blue-600 hover:bg-blue-100 border"
          >
            Learn How
          </button>
        </div>
      </div>
    </div>
  </template>
  

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
</style>
