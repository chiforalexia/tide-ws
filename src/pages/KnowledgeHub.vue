<!-- Knowledge Hub contains all the resources used on the website -->
<template>
  <div class="max-w-5xl mx-auto px-6 py-32 text-gray-800">
    <!-- Title -->
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
      Knowledge Hub
    </h1>

    <!-- Intro -->
    <p
      class="text-center text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
    >
      Below you can find all the resources used in this website.
    </p>

    <!-- Resource Sections -->
    <section
      v-for="section in resourceSections"
      :key="section.title"
      class="mt-8"
    >
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
              <span
                v-if="link.source"
                class="text-gray-500 italic ml-2 text-sm"
              >
                {{ link.source }}
              </span>
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
                { label: "Tech Trends Report", url: "https://www.surf.nl/en/tech-trends",
                  source: "SURF. (2023). Tech Trends Report."
                },
                {
                  label: "Futures Wheel",
                  url: "https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/",
                  source: "Jerome C.  Glenn, & Gordon, T. J. (2009). Futures Research Methodology (3.0). The Millennium Project.",
                },
                {
                  label: "Futures Triangle",
                  url: "https://doi.org/10.1177/19467567231203162",
                  source: "Inayatullah, S. (2023). The Futures Triangle: Origins and Iterations. World Futures Review, 15(2–4), 112–121.",
                },
                {
                  label: "Axes of Uncertainty",
                  url: "https://medium.com/swlh/how-futurists-cope-with-uncertainty-a4fbdff4b8c6",
                  source: "Webb, A. (2020, March 16). How Futurists Cope With Uncertainty. The Startup.; Schwartz, P. (1997). The Art of the Long View. Doubleday/Currency.",
                },
                {
                  label: "Developing Scenarios",
                  url: "https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/",
                  source: "SchSchwartz, P. (1997). The Art of the Long View. Doubleday/Currency.wartz, P. (1996). The Art of the Long View: Planning for the Future in an Uncertain World. Currency); Jerome C. Glenn, & Gordon, T. J. (2009). Futures Research Methodology (3.0). The Millennium Project.",
                },
                {
                  label: "Innovation Readiness Assessment",
                  url: "https://www.awolimburg.nl/nl/projecten/innovation-readiness",
                  source: "Maastricht University. (2024). Maastricht Innovation Readiness Aanpak (MIRA).",
                }
              ]
            },
            {
              title: "Strategic Planning phase",
              links: [
                { label: "White Spots",
                  url: "https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf",
                  source: "Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation, p.45."
               },
                {
                  label: "Backasting",
                  url: "https://doi.org/10.1080/13504500009470049",
                  source: "Holmberg, J., & Robert, K.-H. (2000). Backcasting—A framework for strategic planning. International Journal of Sustainable Development & World Ecology, 7(4), 291–308.; California 100 & School of International Futures (2023), “Beyond Strategic Planning: A Foresight Toolkit for Decision Makers”; European Commission (2023). Mutual Learning Exercise on Citizen Science Initiatives – How to get started with the backcasting approach.",
                },
                {
                  label: "Scenario Readiness Canvas",
                  url: "https://www.howtofuture.com",
                  source: "Smith, S., & Ashby, M. (2020). How To Future: Leading and Sense-making in an Age of Hyperchange. Kogan Page Inspire.",
                },
                { label: "White Spots",
                  url: "https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf",
                  source: "Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation, p.45."
               },
                {
                  label: "Visioning Canvas (Five Bold Steps Canvas)",
                  url: " https://www.businessmodelinnovatie.nl/vision-canvas/",
                  source: "Fransen, R. (2020, July 15). Vision Canvas | Business Model Innovatie | Five Bold Steps Canvas. BASED UPON  The Grove Consultants International. (2024). Strategic Visioning Process Outline. https://www.thegrove.com/sv-process-overview-download ",
                },
                {
                  label: "Innovation Ambition Matrix",
                  url: "https://hbr.org/2012/05/managing-your-innovation-portfolio",
                  source: "Nagji, B., & Tuff, G. (2012). Managing Your Innovation Portfolio. Harvard Business Review.",
                },
                {
                  label: "Cross Impact Mapping",
                  url: "https://foresightculture.com/2018/03/09/how-to-use-cross-impact-analysis",
                  source: "Mahaffie, J. (2018, March 9). How to use cross impact analysis. Foresight Culture. BASED ON Jerome C. Glenn, & Gordon, T. J. (2009). Futures Research Methodology (3.0). The Millennium Project. https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/",
                },
                { label: "Crown Clovers",
                  url: "https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf",
                  source: "Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation."
               },
                {
                  label: "SWOT Analysis",
                  url: "https://doi.org/10.1007/978-3-658-25074-4_7",
                  source: "Van der Heijden, K. (2005). Scenarios: The Art of Strategic Conversation. Wiley; Luoto, L., & Lonkila, A. (2018). The Use of SWOT Analysis for Future Scenarios: A Case Study of Privacy and Emerging Technologies. In *Envisioning Uncertain Futures* (pp. 105–131). Springer VS, Wiesbaden.",
                },
                {
                  label: "Must-Win 'Battles' ",
                  url: "https://books.google.nl/books?hl=en&lr=&id=RFvrtu9xxkcC&oi=fnd&pg=PT8&dq=Killing,+J.+P.,+Killing,+P.,+Malnight,+T.,+%26+Keys,+T.+(2005).+Must-win+battles:+How+to+win+them,+again+and+again.+Wharton+School+Pub.&ots=4wAiX3obFH&sig=iDpS_4MqYsp48Jk3QIQGeJivpq0&redir_esc=y#v=onepage&q&f=false",
                  source: "Killing, J. P., Killing, P., Malnight, T., & Keys, T. (2005). *Must-win battles: How to win them, again and again*. Wharton School Pub.",
                },
                {
                  label: "Voice Stars",
                  url: " https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf",
                  source: "Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). *Playbook for Strategic Foresight and Innovation*.",
                },
                { label: "Paper Mockups",
                  url: "https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf",
                  source: "Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation."
               },
                { label: "Dark Horse Protetype",
                  url: "https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf",
                  source: "Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation."
               },
                {
                  label: "Wind Tunneling",
                  url: " https://www.undp.org/sites/g/files/zskgke326/files/2022-07/UNDP-RBAP-Foresight-Playbook-Appendix-2022_0.pdf",
                  source: "UNDP. (2022). *UNDP RBAP: Foresight Playbook* (p. 47).",
                },
                {
                  label: "Buddy Check",
                  url: "https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf",
                  source: "Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation."
               },
                {
                  label: "Change Paths",
                  url: "https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf",
                  source: "Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation."
               },
              ]
            },
           {
              title: "Full Deployment phase",
              links: [
                {
                  label: "Agile Sprint Board/ Gantt Chart",
                  url: "https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/",
                  source: "Jerome C.  Glenn, & Gordon, T. J. (2009). Futures Research Methodology (3.0). The Millennium Project.",
                },
              ]
            },
            {
              title: "Evaluation & Optimization phase",
              links: [
                {
                  label: "After Action Review (AAR)",
                  url: "https://hbr.org/2023/01/a-better-approach-to-after-action-reviews",
                  source: "Baškarada, S., McKay, T., & McKenna, T. (2013). Technology deployment process model. *Operations Management Research, 6*(3–4), 105–118. https://doi.org/10.1007/s12063-013-0082-5",
                }
              ]
            },

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