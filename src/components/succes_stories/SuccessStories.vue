<template>
    <section class="py-16 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <div class="bubble">
          Success Stories
        </div>
        <h2 class="text-4xl font-bold mb-4"> <span class = "primary-text">Real Results</span> from SURF Members</h2>
        <p class="text-gray-600 text-xl max-w-2xl mx-auto">
          Get inspired and see how other institutions successfully implement new technologies.
        </p>
      </div>
  
      <!-- Mobile Dropdown Selector -->
      <div class="md:hidden mb-6">
        <div class="bg-white rounded-lg border shadow-sm p-4">
          <label for="story-select" class="block text-sm font-medium text-gray-700 mb-2">
            Select a Success Story
          </label>
          <div class="relative">
            <select
              id="story-select"
              v-model.number="selectedStoryId"
              class="block w-full bg-white border rounded-lg py-2 px-4 pr-10 text-base text-gray-800 shadow-sm appearance-none surf-focus-ring"
            >
              <option v-for="story in stories" :key="story.id" :value="story.id">
                {{ story.subtitle }} — {{ story.institution }}
              </option>
            </select>
            <svg
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 surf-dropdown-arrow pointer-events-none"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
  
      <div class="grid md:grid-cols-12 gap-8">
        <!-- Desktop Sidebar -->
        <div class="hidden md:block md:col-span-4 space-y-4">
          <div
            v-for="story in stories"
            :key="story.id"
            @click="selectedStoryId = story.id"
            class="p-4 rounded-lg border cursor-pointer transition-colors flex items-center gap-3 hover:surf-blue-lightest"
            :class="{ 'surf-border-blue-main bg-white shadow-md': story.id === selectedStoryId }"
          >
            <div
              class="w-2 h-2 rounded-full"
              :class="story.id === selectedStoryId ? 'surf-blue-main' : 'bg-gray-300'"
            ></div>
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
              <img :src="selectedStory.image" :alt="selectedStory.imageAlt" class="w-full h-full object-cover" />
            </div>
  
            <!-- Content Section -->
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">{{ selectedStory.institution }}</h3>
  
              <div class="mb-6">
                <h4 class="font-semibold mb-2">Key Outcomes</h4>
                <ul class="space-y-2">
                  <li v-for="(outcome, index) in selectedStory.outcomes" :key="index" class="flex items-start gap-2">
                    <svg
                      class="w-5 h-5 text surf-green-bright mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
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
                <a :href="selectedStory.link" class="btn-blue" target="_blank" rel="noopener">
                  Read More
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M10 14L21 3m0 0h-6m6 0v6"
                    />
                  </svg>
                </a>
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
        'Full university control over access and usage',
      ],
      quote:
        '"If we want an AI solution that is in line with our moral values as a university, it is important to have a strong negotiating position with Microsoft."',
      author: '— Danny van den Berg, UvA ICT',
      link:
        'https://www.folia.nl/en/actueel/164740/uva-created-its-own-chatgpt-for-students-and-teachers-is-it-safer-than-the-original',
    },
    {
      id: 2,
      institution: 'TU Delft',
      subtitle: 'New Media Centre XR Zone',
      image: '/tudelft.jpg', // Path to the image related to XR Zone
      imageAlt: 'TU Delft XR Zone',
      outcomes: [
        'Enhanced immersive learning experiences for students across disciplines',
        'Increased collaboration between researchers and industry leaders in the XR field',
        'Pioneering new research in augmented and virtual reality technologies',
      ],
      quote: '',
      author: '',
      link: 'https://newmediacentre.tudelft.nl/xr/',
    },
    {
      id: 3,
      institution: 'VISTA College',
      subtitle: 'XR Lab',
      image: 'VR.jpg',
      imageAlt: 'VISTA College XR Lab',
      outcomes: [
        'Developed a dedicated XR Lab as a central initiative',
        'Built a scalable framework for integrating XR into educational practice',
        "Positioned the XR Lab as a key pillar in VISTA's new Center of Teaching and Learning",
        'Strengthened regional collaboration with partners',
      ],
      quote: '',
      author: '',
      link: 'https://mbodigitaal.nl/2023/10/trots-op-xr-als-bestendigd-onderdeel-van-het-curriculum-xr-is-geen-uitstapje/',
    },
    {
        id: 4,
        institution: 'Delft University of Technology',
        subtitle: 'Mondai | House of AI',
        image: '/mondai.jpg',
        imageAlt: 'Mondai | House of AI',
        outcomes: [
        'Created a hybrid AI campus network in Delft and Rotterdam',
        'Connected researchers, students, companies and public organisations in a shared AI community',
        'Applied AI research to solve real-world business and societal challenges',
        'Organised events and meetups to spark new ideas and partnerships',
        'Made AI expertise and talent easily accessible for regional organisations'
    ],
    quote:
      '"We are boosting the development of AI applications in seven strategic domains that are relevant for both TU Deflt and the South Holland region"',
    author: "Joost Poort",
    link: "https://mondai.tudelftcampus.nl/en/",
  },
];

const selectedStoryId = ref(1);

const selectedStory = computed(() =>
  stories.find((story) => story.id === selectedStoryId.value),
);
</script>

<script>
export default {
  name: "SuccessStories",
};
</script>

<style scoped>
.surf-green-bright {
  border-color: #17a95d;
  color: #17a95d;
}

/* Custom blue colors */
.surf-blue-lightest {
  background-color: #dff4ff;
}

.surf-blue-light {
  background-color: #b3e5ff;
}

.surf-blue-mid {
  background-color: #78befd;
}

.surf-blue-main {
  background-color: #0077c8;
  border-color: #0077c8;
  color: white;
}

.surf-blue-dark {
  background-color: #004c97;
  border-color: #004c97;
  color: white;
}

/* For border color only */
.surf-border-blue-main {
  border-color: #0077c8;
}

/* For text color */
.surf-text-blue-main {
  color: #0077c8;
}

/* Hover background for sidebar items */
.hover\:surf-blue-lightest:hover {
  background-color: #dff4ff;
}

/* Focus styles for select */
.surf-focus-ring {
  outline: none;
  border-color: #0077c8;
  box-shadow: 0 0 0 2px #dff4ff;
}

/* Arrow color for select dropdown */
.surf-dropdown-arrow {
  color: #78befd;
}
</style>
