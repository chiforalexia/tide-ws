<template>
  <div class="max-w-5xl mx-auto px-6 py-32 text-gray-800">
    <!-- Title -->
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
      Knowledge Hub
    </h1>

    <!-- Intro -->
    <p class="text-center text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
      Below you can find all the resources used in this website.
    </p>

    <!-- Resource Sections -->
    <section v-for="section in resourceSections" :key="section.title" class="mt-8">
      <h2 class="text-2xl font-bold text-black mt-6">{{ section.title }}</h2>
      <ul class="space-y-6 ml-6">
        <li v-for="group in section.groups" :key="group.title">
          <strong class="text-lg text-black">{{ group.title }}</strong>
          <ul class="list-disc list-inside ml-6 mt-2 space-y-2 text-blue-600">
            <li v-for="link in group.links" :key="link.url">
              <a
                :href="link.url"
                class="underline hover:text-blue-800"
                target="_blank"
                rel="noopener"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resourceSections: [
        {
          title: "Main Page",
          groups: [
            {
              title: "SURF Tech Trends section",
              links: [
                { label: "SURF Tech Trends Report", url: "https://www.surf.nl/en/tech-trends" }
              ]
            },
            {
              title: "Get Inspired section",
              links: [
                {
                  label: "Generative AI Model",
                  url: "https://www.eur.nl/en/news/erasmus-university-trains-first-generative-ai-model-social-science-and-humanities"
                },
                { label: "SURF Futuring", url: "https://www.surf.nl/en/themes/futuring" },
                { label: "House of AI", url: "https://mondai.tudelftcampus.nl/en/" },
                { label: "EDGE Research Center", url: "https://www.utwente.nl/en/edge/" }
              ]
            }
          ]
        },
        {
          title: "Roadmap Page",
          groups: [
            {
              title: "Background",
              links: [
                {
                  label: "Internal Foresight Activities",
                  url: "https://www.sciencedirect.com/science/article/pii/S0016328725000114"
                },
                {
                  label: "Nature of Strategic Foresight",
                  url: "https://www.sciencedirect.com/science/article/pii/S0040162516306035"
                }
              ]
            },
            {
              title: "Exploration phase",
              links: [
                { label: "Tech Trends Report", url: "https://www.surf.nl/en/tech-trends" },
                {
                  label: "Futures Wheel",
                  url: "https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/"
                },
                {
                  label: "Futures Triangle",
                  url: "https://doi.org/10.1177/19467567231203162"
                }
              ]
            },
            {
              title: "Strategic Planning phase",
              links: [
                { label: "Roadmapping Templates", url: "https://example.com/resource4" },
                { label: "Budget Planning Tools", url: "https://example.com/resource5" }
              ]
            },
            {
              title: "Pilot Experimentation phase",
              links: [
                { label: "Testbed Platforms", url: "https://example.com/resource6" },
                { label: "Experiment Log Templates", url: "https://example.com/resource7" }
              ]
            },
            {
              title: "Full Deployment phase",
              links: [
                { label: "Implementation Guidelines", url: "https://example.com/resource8" }
              ]
            },
            {
              title: "Evaluation & Optimization phase",
              links: [
                { label: "Feedback Loops", url: "https://example.com/resource9" },
                { label: "KPI Dashboards", url: "https://example.com/resource10" }
              ]
            }
          ]
        },
        {
          title: "Success Stories Page",
          groups: [
            {
              title: "Success Stories",
              links: [
                {
                  label: "UvA AI Chat",
                  url: "https://www.folia.nl/en/actueel/164740/uva-created-its-own-chatgpt-for-students-and-teachers-is-it-safer-than-the-original"
                },
                {
                  label: "New Media Centre XR Zone",
                  url: "https://newmediacentre.tudelft.nl/xr/"
                },
                {
                  label: "Mondai | House of AI",
                  url: "https://mondai.tudelftcampus.nl/en/"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
