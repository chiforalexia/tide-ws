<template>
    <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(item, index) in items" :key="index" class="relative group overflow-hidden rounded-lg h-64"
                @mouseenter="item.hovered = true" @mouseleave="item.hovered = false">
                <!-- Image with overlay -->
                <div class="relative h-full">
                    <img :src="item.image" :alt="item.title"
                        class="w-full h-full object-cover transition-transform duration-300"
                        :class="{ 'scale-110': item.hovered }" />
                    <!-- Black overlay on the image - now always visible -->
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <!-- Content block that slides up -->
                <div class="absolute inset-x-0 bottom-0 transform transition-transform duration-500"
                    :class="item.hovered ? 'translate-y-0' : 'translate-y-[calc(100%-4rem)]'">
                    <!-- Content -->
                    <div class="relative px-6 py-4">
                        <h3 class="text-white text-2xl font-bold mb-2">{{ item.title }}</h3>

                        <!-- Description and button - only visible on hover -->
                        <div class="overflow-hidden transition-all duration-500"
                            :class="item.hovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'">
                            <p class="text-white text-sm mb-4">{{ item.description }}</p>
                            <div class="text-right">
                                <button
                                    class="bg-white text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
    {
        title: 'Artificial Intelligence',
        description: 'Artificial Intelligence (AI) and, more specifically, Machine Learning (ML) have taken off in recent years.',
        image: '/public/tile_AI.png',
        hovered: false
    },
    {
        title: 'Advanced Computing',
        description: 'Solving sociytal challenges with digital research infrastructure on a global scale requires a unique combination of computing, storage, and networking technologies.',
        image: '/public/tile_AC.png',
        hovered: false
    },
    {
        title: 'Quantum',
        description: 'There are three main subfields under under the umbrella of Quantum Information Science and Technology: quantum computing and simulation, quantum sensing and metrology, and quantum communication.',
        image: '/public/tile_Quantum.png',
        hovered: false
    },
    {
        title: 'Edge',
        description: 'Edge cbmputihg covers a broad spectrum of technologies from Internet of Things sensors to Extended Reality devices.',
        image: '/public/tile_Edge.png',
        hovered: false
    },
    {
        title: 'Network',
        description: 'Fixed communication networks are essential for the digitalisation of society in the Netherlands. Networks also integrate compute and storage more ang more.',
        image: '/public/tile_Network.png',
        hovered: false
    },
    {
        title: 'eXtended Reality',
        description: 'XR, or \'eXtended Reality\' is bth a technology in its own right, as well as a term used for a combination of other reality-altering technologies; combinations of virtual reality, augmented reality and mixed reality could all constitute XR.',
        image: '/public/tile_XR.png',
        hovered: false
    }
])
</script>

<style scoped>
.transform {
    will-change: transform;
}
</style>