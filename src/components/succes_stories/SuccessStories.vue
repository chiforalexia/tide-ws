<template>
    <section class="py-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
            <div class="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm mb-4">
                Success Stories
            </div>
            <h2 class="text-3xl font-bold mb-4">Real Results from SURF Community Members</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
                Discover how institutions like yours successfully implemented new technologies through the SURF
                Communities platform.
            </p>
        </div>

        <!-- Mobile Dropdown Selector -->
        <div class="md:hidden mb-6">
            <div class="bg-white rounded-lg border shadow-sm p-4">
                <label for="story-select" class="block text-sm font-medium text-gray-700 mb-2">
                    Select a Success Story
                </label>
                <div class="relative">
                    <select id="story-select" v-model.number="selectedStoryId"
                        class="block w-full bg-white border border-gray-300 rounded-lg py-2 px-4 pr-10 text-base text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                        <option v-for="story in stories" :key="story.id" :value="story.id">
                            {{ story.subtitle }} — {{ story.institution }}
                        </option>
                    </select>
                    <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                        fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-12 gap-8">
            <!-- Desktop Sidebar -->
            <div class="hidden md:block md:col-span-4 space-y-4">
                <div v-for="story in stories" :key="story.id" @click="selectedStoryId = story.id"
                    class="p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors flex items-center gap-3"
                    :class="{ 'border-blue-500 bg-white shadow-md': story.id === selectedStoryId }">
                    <div class="w-2 h-2 rounded-full"
                        :class="story.id === selectedStoryId ? 'bg-blue-500' : 'bg-gray-300'"></div>
                    <div>
                        <h3 class="font-semibold">{{ story.institution }}</h3>
                        <p class="text-sm text-gray-600">{{ story.subtitle }}</p>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="md:col-span-8 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition">
                <div class="grid md:grid-cols-2 h-full">
                    <!-- Image Section -->
                    <div class="h-60 md:h-auto">
                        <img :src="selectedStory.image" :alt="selectedStory.imageAlt"
                            class="w-full h-full object-cover">
                    </div>

                    <!-- Content Section -->
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-4">{{ selectedStory.institution }}</h3>

                        <div class="mb-6">
                            <h4 class="font-semibold mb-2">Key Outcomes</h4>
                            <ul class="space-y-2">
                                <li v-for="(outcome, index) in selectedStory.outcomes" :key="index"
                                    class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>{{ outcome }}</span>
                                </li>
                            </ul>
                        </div>

                        <blockquote class="italic text-gray-700 border-l-4 border-gray-200 pl-4 mb-4">
                            {{ selectedStory.quote }}
                        </blockquote>
                        <p class="font-bold text-gray-600">{{ selectedStory.author }}</p>

                        <div class="mt-6 flex justify-end">
                            <button
                                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Read Full Case Study
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const stories = [
    {
        id: 1,
        institution: 'University of Amsterdam',
        subtitle: 'UvA AI Chat',
        image: '/roeterseiland.jpg',
        imageAlt: 'UvA AI Chat',
        outcomes: [
            'Improved student writing support and ease of use',
            'Strong privacy safeguards through anonymised input',
            'Full university control over access and usage'
        ],
        quote: '"If we want an AI solution that is in line with our moral values as a university, it is important to have a strong negotiating position with Microsoft."',
        author: '— Danny van den Berg, UvA ICT'
    },
    {
    id: 2,
    institution: 'Delft University of Technology',
    subtitle: 'XR Zone Integration',
    image: '/tudelft.jpg',  // Path to the image related to XR Zone
    imageAlt: 'TU Delft XR Zone',
    outcomes: [
        'Enhanced immersive learning experiences for students across disciplines',
        'Increased collaboration between researchers and industry leaders in the XR field',
        'Pioneering new research in augmented and virtual reality technologies'
    ],
    quote: '"By integrating the XR Zone into our research and teaching spaces, we are leading the way in digital transformation at TU Delft."',
    author: '— Arno Freeke, XR Zone Coordinator'
    },

    {
        id: 3,
        institution: 'VISTA College',
        subtitle: 'XR Lab',
        image: 'VR.jpg',
        imageAlt: 'VISTA College XR Lab',
        outcomes: [
            'Outcome #1',
            'Outcome #2',
            'Outcome #3'
        ],
        quote: '',
        author: ''
    }
]

const selectedStoryId = ref(1)

const selectedStory = computed(() =>
    stories.find(story => story.id === selectedStoryId.value)
)
</script>

<script>
export default {
    name: 'SuccessStories',
};
</script>

