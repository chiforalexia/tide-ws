<template>
  <div class="container mx-auto px-4 py-32 max-w-4xl">
    <!-- This is the content to export -->
    <div ref="pdfContent">
      <div
        class="text-center mb-12 bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow-sm"
      >
        <h1 class="text-4xl font-bold mb-6 bg-clip-text text-blue-700">
          Your Personalized Technology Recommendations
        </h1>

        <div class="bg-white p-6 rounded-lg shadow-md mb-8 max-w-2xl mx-auto">
          <h2 class="text-xl font-semibold mb-4 text-blue-500">
            Your Institution Profile
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="bg-purple-50 p-4 rounded-lg">
              <p class="text-sm text-gray-500">Institution Type</p>
              <p class="font-medium text-purple-800">{{ institutionName }}</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-sm text-gray-500">Size</p>
              <p class="font-medium text-blue-800">{{ sizeDescription }}</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="text-sm text-gray-500 mb-1">Key Values</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(label, i) in selectedValueLabels"
                  :key="i"
                  class="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                >
                  {{ label }}
                </span>
                <span
                  v-if="selectedValueLabels.length === 0"
                  class="text-gray-500 text-sm"
                  >No values selected</span
                >
              </div>
            </div>
          </div>
        </div>

        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Based on your profile, we've curated the following technology
          recommendations.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div
          v-for="(category, index) in techCategories"
          :key="index"
          class="hover:shadow-lg transition-shadow border-l-4 card"
          :style="{ borderLeftColor: `hsl(${(index * 50) % 360}, 70%, 60%)` }"
        >
          <div
            class="flex flex-row items-center gap-4 bg-gradient-to-r from-white to-gray-50 p-4"
          >
            <div
              class="p-2 rounded-full"
              :style="{
                backgroundColor: `hsla(${(index * 50) % 360}, 70%, 95%, 0.5)`,
              }"
            >
              <!-- Simplified SVG icon based on the category -->
              <svg
                v-if="category.icon === 'Laptop'"
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 18V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13h20zM2 18h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"
                ></path>
              </svg>
              <svg
                v-if="category.icon === 'Server'"
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 3h18v18H3z"></path>
                <path d="M3 6h18M3 12h18M3 18h18"></path>
              </svg>
              <svg
                v-if="category.icon === 'HardDrive'"
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 12h20M12 2v20"></path>
              </svg>
              <svg
                v-if="category.icon === 'Database'"
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 5h18M3 10h18M3 15h18M3 20h18"></path>
              </svg>
              <svg
                v-if="category.icon === 'BookOpen'"
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16v16H4z"></path>
                <path d="M4 12h16"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold">{{ category.title }}</h3>
              <p class="text-sm text-gray-600">{{ category.description }}</p>
            </div>
          </div>
          <div class="p-4">
            <ul class="list-disc pl-5 space-y-2">
              <li
                v-for="(rec, i) in getPersonalizedRecommendations(category)"
                :key="i"
                :class="{ 'font-semibold': isRecommended(rec) }"
                class="text-gray-700"
              >
                {{ rec }}
                <span
                  v-if="isRecommended(rec)"
                  class="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full"
                  >Recommended for you</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 text-center space-y-6">
      <button
        @click="handleDownload"
        class="bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-800 hover:to-blue-500 transition-all transform hover:scale-105 duration-300 shadow-md text-white font-medium py-3 px-6 rounded-lg"
      >
        Download Full Recommendations
      </button>

      <div class="pt-8">
        <p class="text-lg mb-6 text-gray-600">
          Want to see how these technologies fit into the broader AI landscape?
        </p>
        <router-link to="/roadmap">
          <button
            class="mt-2 group border border-blue-200 text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg"
          >
            View Our Complete Technology Roadmap
            <span
              class="ml-2 group-hover:translate-x-1 transition-transform inline-block"
              >→</span
            >
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationsPage",
  data() {
    return {
      formData: this.$route?.state?.formData || {},
      techCategories: [
        {
          title: "Classroom Technologies",
          description:
            "Interactive tools designed for engaging learning environments.",
          icon: "Laptop",
          recommendations: [
            "AI-powered smart projectors",
            "Collaborative digital whiteboards",
            "Mixed reality learning pods",
          ],
        },
        {
          title: "Infrastructure",
          description: "Core systems to support your digital transformation.",
          icon: "Server",
          recommendations: [
            "Edge computing clusters",
            "Green data center solutions",
            "Hyperconverged infrastructure",
          ],
        },
        {
          title: "Research Tools",
          description: "Advanced technologies for groundbreaking research.",
          icon: "HardDrive",
          recommendations: [
            "Quantum computing access points",
            "AI research assistants",
            "Distributed computing frameworks",
          ],
        },
        {
          title: "Data Management",
          description:
            "Solutions for organizing and utilizing institutional data.",
          icon: "Database",
          recommendations: [
            "Federated learning platforms",
            "Privacy-preserving analytics",
            "Blockchain credential verification",
          ],
        },
        {
          title: "Learning Resources",
          description: "Next-generation content delivery and management.",
          icon: "BookOpen",
          recommendations: [
            "Adaptive learning platforms",
            "Immersive content libraries",
            "AI-generated curriculum tools",
          ],
        },
      ],
      valueToTechMapping: {
        innovation: [
          "AI research assistants",
          "Quantum computing access points",
          "Mixed reality learning pods",
        ],
        accessibility: [
          "Adaptive learning platforms",
          "Collaborative digital whiteboards",
          "Privacy-preserving analytics",
        ],
        sustainability: [
          "Green data center solutions",
          "Federated learning platforms",
          "Edge computing clusters",
        ],
        "cost-efficiency": [
          "Hyperconverged infrastructure",
          "AI-generated curriculum tools",
          "Blockchain credential verification",
        ],
        "global-collaboration": [
          "Distributed computing frameworks",
          "Collaborative digital whiteboards",
          "Immersive content libraries",
        ],
        "data-privacy": [
          "Privacy-preserving analytics",
          "Blockchain credential verification",
          "Federated learning platforms",
        ],
        "personalized-learning": [
          "Adaptive learning platforms",
          "AI-powered smart projectors",
          "AI-generated curriculum tools",
        ],
      },
    };
  },
  computed: {
    selectedValues() {
      return this.formData.values || [];
    },
    institutionName() {
      const map = {
        university: "University",
        college: "College",
        "research-institute": "Research Institute",
        "k12-school": "K-12 School",
        "technical-school": "Technical/Vocational School",
        "online-education": "Online Education Provider",
      };
      return map[this.formData.institution] || "Educational Institution";
    },
    sizeDescription() {
      const map = {
        small: "small-sized",
        medium: "medium-sized",
        large: "large-sized",
        "very-large": "very large",
      };
      return map[this.formData.size] || "";
    },
    selectedValueLabels() {
      const valueMap = {
        innovation: "Innovation & Cutting-edge Technology",
        accessibility: "Accessibility & Inclusivity",
        sustainability: "Sustainability & Environmental Impact",
        "cost-efficiency": "Cost Efficiency & Resource Optimization",
        "global-collaboration": "Global Collaboration",
        "data-privacy": "Data Privacy & Security",
        "personalized-learning": "Personalized Learning",
      };
      return this.selectedValues.map((v) => valueMap[v] || v);
    },
  },
  methods: {
    getPersonalizedRecommendations(category) {
      if (this.selectedValues.length === 0) return category.recommendations;
      const recs = category.recommendations.filter((rec) =>
        this.selectedValues.some((val) =>
          this.valueToTechMapping[val]?.includes(rec),
        ),
      );
      return recs.length > 0 ? recs : category.recommendations;
    },
    isRecommended(rec) {
      return this.selectedValues.some((val) =>
        this.valueToTechMapping[val]?.includes(rec),
      );
    },
    handleDownload() {
      const element = this.$refs.pdfContent;
      const opt = {
        margin: 0.5,
        filename: "tech-recommendations.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().set(opt).from(element).save();
    },
  },
};
</script>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
  color: #1f2937; /* Tailwind's gray-800 */
}

h1,
h2,
h3 {
  color: #1e40af; /* Tailwind's blue-800 */
}

.card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.card h3 {
  font-size: 1rem; /* smaller heading */
  color: #334155; /* Tailwind slate-700 */
}

.card p {
  font-size: 0.875rem;
  color: #475569; /* Tailwind slate-600 */
}

.list-disc li {
  font-size: 0.875rem;
}

button {
  transition: all 0.3s ease;
}

.bg-section {
  background: linear-gradient(135deg, #e0f2fe 0%, #f0f4ff 100%);
}

.section-card {
  background-color: #f9fafb;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  border-radius: 1rem;
}

.tag {
  background-color: #dbeafe;
  color: #1e3a8a;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

.shadow-md {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
}
</style>
