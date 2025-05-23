<template>
  <div>
    <!-- Header -->
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center m-2 text-black-800">
      Integration Roadmap
    </h1>

    <p class=" sm:text-lg md:text-xl text-gray-600 max-w-3xl m-4 text-center mx-auto">
      With the SURF Tech Trends Report in hand, you’ve taken the first step: 
      <span class="font-bold">
        gaining insight into the signals shaping the future of education and research.
      </span> 
      These aren’t instructions but an invitation to reflect, translate, and act.
    </p>

    <div class="text-sm sm:text-base md:text-lg text-blue-600 m-8 text-center">
      You’re not expected to follow a fixed path, but to create one, using these phases as support.
    </div>

    <div class="min-h-screen sidebar-bg flex">
      <!-- Sidebar -->
      <div
        :class="[
          'transition-all duration-500 relative border-r border-gray-200',
          collapsed ? 'w-20' : 'w-72',
          'group'
        ]"
        @mouseover="collapsed = false"
        @mouseleave="collapsed = true"
      >
        <div class="absolute top-3 left-5 z-40">
          <button
            @click="toggleSidebar"
            class="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
          >
            <span v-if="!collapsed">✕</span>
            <span v-else>☰</span>
          </button>
        </div>

        <div class="space-y-6 pt-10 pl-4 pr-2">
          <div v-for="(phase, index) in phases" :key="index">
            <button
              @click="activePhase = index"
              :class="[
                'transition-all duration-300 flex items-center px-3 py-3 rounded-xl cursor-pointer shadow-md border w-full hover:scale-[1.02] hover:shadow-lg',
                activePhase === index ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-200' : 'bg-white border-gray-200',
                collapsed ? 'justify-center w-10 h-10 p-0 rounded-full' : ''
              ]"
            >
              <div class="flex items-center gap-3 w-full">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full" :class="activePhase >= index ? 'bg-blue-500' : 'bg-gray-300'" />
                  <div class="text-blue-600 font-semibold text-sm">{{ index + 1 }}</div>
                </div>
                <span v-if="!collapsed" class="text-sm font-semibold text-gray-800 truncate">
                  {{ phase.title }}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 px-8 py-12">
        <div class="max-w-6xl mx-auto">
          <div :class="['transition-all duration-300', collapsed ? 'w-full' : 'md:w-full']">
            <transition name="fade" mode="out-in">
              <div
                :key="activePhase"
                id="phase-content"
                class="bg-white rounded-xl p-10 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl"
              >
                <!-- Title with tooltip icon -->
                <h2 class="text-3xl font-bold mb-4 text-blue-700 flex items-center">
                  {{ phases[activePhase].title }}
                  <button
                    @click="showJustification = !showJustification"
                    class="ml-3 -mt-1.5 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer focus:outline-none"
                    title="Why this phase matters?"
                  >
                    <span
                      class="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400 text-xs font-semibold"
                    >
                      i
                    </span>
                  </button>
                </h2>

                <!-- Justification Box -->
      
                <div v-if="showJustification" class="relative bg-gray-100 p-6 rounded-xl shadow-inner mb-6">
                  <!-- Close Button -->
                  <button
                    @click="showJustification = false"
                    class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
                    aria-label="Close Justification"
                  >
                    
                  </button>

                    <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                    <!-- Text -->
                    <div class="md:w-2/3 text-gray-800 text-base leading-relaxed">
                      <div v-html="phases[activePhase].justification"></div>
                    </div>

                    <!-- Image -->
                    <div v-if="phases[activePhase].justificationImage" class="md:w-1/3 flex-shrink-0">
                      <img
                        :src="phases[activePhase].justificationImage"
                        alt="Justification Image"
                        class="w-full max-w-xs rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                  <!-- Activities, Indicators, Stakeholders -->
                  <div class="md:col-span-2 space-y-10">
                    <!-- Phase Subtitle -->
                    <div v-if="phases[activePhase].subtitle">
                      <h3 class="text-lg font-semibold text-gray-600 mb-2">
                        {{ phases[activePhase].subtitle }}
                      </h3>
                    </div>

                    <!-- Phase Description -->
                    <div>
                      <h2 class="text-2xl font-bold text-gray-800 mb-4">Phase Overview</h2>
                      <p class="text-gray-700 leading-relaxed">
                        {{ phases[activePhase].description }}
                      </p>
                    </div>

                    <!-- Optional Note Box -->
                    <div v-if="phases[activePhase].note" class="border-l-4 border-surf-200-green p-4 rounded-lg background-surf space-y-1 ring-1 ring-surf-200-green">
                      <h3 class="text-lg font-semibold surf-500-green ">Note</h3>
                      <p class="text-m italic text-gray-600 leading-relaxed">
                        {{ phases[activePhase].note }}
                      </p>
                    </div>

                    <!-- Activities -->
                    <div>
                      <div class="flex items-center gap-2 mb-4">
                        <svg class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" stroke-width="2.2"
                          viewBox="0 0 28 28" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 9h16M6 14h16M6 19h16" />
                        </svg>
                        <h3 class="text-xl font-semibold text-black-800">Key Activities</h3>
                      </div>

                      <ul class="space-y-2">
                        <li v-for="(activity, i) in phases[activePhase].activities" :key="i">
                          <div class="flex items-start gap-3 mb-2">
                            <span
                              class="w-8 h-8 rounded-full phases_bubble flex items-center justify-center flex-shrink-0 text-sm font-bold"
                            >
                              {{ i + 1 }}
                            </span>
                            <span class="text-gray-800 font-medium text-lg">{{ activity.activity }}</span>
                          </div>

                          <!-- Sub-bullets / details -->
                          <div class="pl-12 space-y-2 text-gray-600">
                            <div v-for="(detail, j) in activity.details" :key="j" v-html="detail"></div>
                          </div>


                          <!-- Tools (if available) -->
                          <div v-if="activity.tools && activity.tools.length" class="pl-16 mt-3">
                            <h4 class="font-semibold text-gray-600 mb-1">Tools:</h4>
                            <ul class="list-disc space-y-1 text-gray-500 text-sm pl-4">
                              <li v-for="(tool, k) in activity.tools" :key="k">
                                {{ tool }}
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <!-- Indicators -->
                    <div>
                      <div class="flex items-center gap-2 mb-4">
                        <svg class="w-6 h-6 surf-green" fill="none" stroke="currentColor" stroke-width="2"
                          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M9 11l3 3L22 4" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        <h3 class="text-xl font-semibold text-gray-800">Success Indicators</h3>
                      </div>
                      <ul class="space-y-3">
                        <li
                          v-for="(indicator, i) in phases[activePhase].indicators"
                          :key="i"
                          class="flex items-center gap-3"
                        >
                          <svg
                            class="w-6 h-6 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="text-gray-700">{{ indicator }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Stakeholders -->
                    <div>
                      <div class="flex items-center gap-2 mb-4">
                        <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" stroke-width="2"
                          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="7" r="4" />
                          <path d="M5.5 21h13a1 1 0 0 0 1-1v-1c0-2.5-2-4.5-4.5-4.5h-6A4.5 4.5 0 0 0 4 19v1a1 1 0 0 0 1.5 1z" />
                        </svg>
                        <h3 class="text-xl font-semibold text-gray-800">Stakeholder Engagement</h3>
                      </div>

                      <!-- Render list if array, paragraph if string -->
                      <div class="text-gray-700">
                        <ul v-if="Array.isArray(phases[activePhase].stakeholderEngagement)" class="list-disc pl-5 space-y-1">
                          <li v-for="(item, index) in phases[activePhase].stakeholderEngagement" :key="index">{{ item }}</li>
                        </ul>
                        <p v-else>{{ phases[activePhase].stakeholderEngagement }}</p>
                      </div>
                    </div>
                    </div>


                  <!-- Resources -->
                  <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-surf-blue-100 h-fit">
                    <div class="flex items-center gap-2 mb-6">
                      <svg class="w-6 h-6 secondary-text" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h12l4 4v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                        <polyline points="16 4 16 8 20 8" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                        <line x1="8" y1="16" x2="16" y2="16" />
                      </svg>
                      <h3 class="text-2xl font-semibold text-gray-800">Resources</h3>
                    </div>
                    <div class="space-y-4">
                      <div
                        v-for="(resource, i) in phases[activePhase].resources"
                        :key="i"
                      >
                        <ResourceCard :resource="resource" :index="i" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import ResourceCard from './ResourceCard.vue';

const activePhase = ref(0);
const collapsed = ref(true);
const totalPhases = 6;
const showJustification = ref(false);

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

const phases = ref([
  {
    title: 'Exploration',
    subtitle: "Making Sense of Emerging Trends",
    description: 'Move from observing trends to making sense of them. This phase surfaces possibilities and helps imagine futures that can inform resilient, actionable strategies. It lays the groundwork for focused, future-ready planning.',
    activities: [
      {
        activity: 'Familiarise yourself with the SURF Tech Trends Report',
        details: [
          'Begin by reviewing the report and combining its insights with your own expertise and institutional knowledge.',
        ]
      },
      {
        activity: 'Assemble a cross-functional team',
        details: [
          `Foresight and innovation thrive in diverse groups. Bring together a mix of perspectives to challenge assumptions and reveal blind spots. Your team might include:`,
          `<ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Academic leadership (e.g. program directors)</li>
            <li>Researchers</li>
            <li>IT managers and digital transformation leads</li>
            <li>Student representatives</li>
            <li>Operations, finance, or facilities managers</li>
            <li>Learning technologists or instructional designers</li>
            <li>HR or organizational development specialists</li>
            <li>Communications and marketing staff</li>
            <li>External stakeholders or partners (if appropriate)</li>
          </ul>`
        ]
      },
      {
        activity: 'Brainstorm using a Futures Wheel with the Tech Trends in mind',
        details: [
          'Each participant writes down as many future possibilities, ideas, or risks as possible without discussion.',
          'Focus on capturing volume and variety—no judgment, just curiosity.'
        ]
      },
      {
        activity: 'Map initial stakeholders',
        details: [
          ' Identify the individuals, groups, or partners who might be impacted by or have influence over future',
          'Create a preliminary map to shape meaningful engagement throughout the process.'
        ]
      },
      {
        activity: 'Futures Triangle',
        details: [
          'Use this tool to map the pull of the future, push of the present, and weight of the past on your institution’s trajectory.',
          'Helps to frame opportunities and constraints realistically.'
        ]
      },
      {
      activity: 'Select a Framing Method for Scenario Development',
      details: [
        `There are multiple ways to structure scenarios. Choose an approach that fits your context, resources, and goals:`,
        `<ul class="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Axes of Uncertainty:</strong> establishing two critical uncertainties as axes, creating a matrix to define four possible futures.</li>
          <li><strong>Trend Clusters:</strong> combining groups of trends and drivers to build scenario narratives.</li>
          <li><strong>Impact vs. Uncertainty Mapping:</strong> categorizing factors by their potential impact and unpredictability.</li>
          <li><strong>Wildcard Event Scenarios:</strong> constructing futures around sudden, disruptive events.</li>
        </ul>`
      ]
    },
    {
      activity: 'Develop a Set of Plausible Scenarios',
      details: [
        `Whether you use axes, trend clusters, or another method, aim to craft three to four distinct, plausible narratives. These should be stories about how the future might unfold under different conditions, not predictions.`
      ]
    },
    {
      activity: 'Document the Process',
      details: [
        `Thoroughly capture assumptions, discussion points, and early signals. This documentation becomes a valuable input for strategic decision-making and alignment in later phases.`
      ]
    }
    ],
    stakeholderEngagement: 'Engage a diverse group from the outset. Cross-functional participation strengthens the quality of insights and builds ownership for future strategy. Early stakeholder mapping ensures you know who to involve, inform, or consult as the process moves forward.',
    indicators: [
      'You’ve completed a structured ideation and futures exploration process.',
      'Four plausible, well-defined scenarios are documented.',
      'Key stakeholders are mapped for future engagement.',
      'The external operating environment is clearly understood through PESTEL and Futures Triangle analysis.'
    ],
    resources: [
    {
    title: 'Tech Trends Report',
    description: ' This report serves as your go-to reference for spotting early signals and understanding technological developments that could shape the future of education and research. Use it as the starting point when scanning for trends and opportunities, and to inform your organization’s strategic conversations and innovation priorities.',
    tips: [
      'Use the report as a first reference when identifying relevant signals, trends, and emerging technologies for your context.',
      'Bring it into strategic discussions or innovation workshops to frame conversations around where technology is heading.',
      'With the help of this roadmap, evaluate how the trends outlined could impact your institution within the next years.',
      'Share key insights with leadership and innovation teams.'
    ],
    url: '',
    time: '30 min',
    people: 'Individual or team',
    exampleimage: '/public/report_cover.png',
    citation: 'SURF. (2023). SURF Tech Trends 2023. https://www.surf.nl/en/tech-trends'
  },
  {
    title: 'Brainstorm using the Futures Wheel',
    description: 'In this activity, you\'ll generate ideas using a Futures Wheel, combining insights from the SURF Tech Trends Report with your own experiences and observations. The aim is to surface bold, surprising, or unconventional ideas.',
    tips: [
      'Use a clear space, such as a blank wall, digital board, or virtual collaboration tool.',
      'Start by placing a central trend or signal from the SURF Tech Trends Report in the center of the wheel. Individually  write down immediate impacts or consequences of that trend on Post-its (physical or virtual) and place them around the center. From each first-order impact, branch out to explore second and third order consequences.',
      'Include your personal experiences, sector insights, cultural dynamics, and practical realities. Focus on quantity over quality. No idea is too bold, incomplete, or far-fetched at this stage.',
      'Once the wheel is populated, you or the group can reflect on surprising patterns, contradictions, or unexpected opportunities that emerge.',
    ],
    url: '/resources/silent-brainstorm.pdf',
    time: '5–10 min',
    people: 'Individual or team',
    exampleimage: '/public/phases_resources/images/futures_wheel.png',
    citation: 'Jerome C.  Glenn, & Gordon, T. J. (2009). Futures Research Methodology (3.0). The Millennium Project. https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/'
  },
  {
    title: 'Futures Triangle',
    description: 'Explore the forces influencing possible futures for your organization or sector by mapping key trends and drivers onto a Futures Triangle framework.',
    tips: [
      'Draw a triangle and label the points: Pull of the Future, Push of the Present, and Weight of the Past.',
      'Use the Tech Trends Report to identify strong ‘pulls’ and reflect on operational and contextual forces.',
      'Write each idea on a Post-it and place it in the relevant corner of the triangle.',
      'Look for tensions or areas of alignment between forces.'
    ],
    url: 'https://journals.sagepub.com/doi/10.1177/19467567231203162',
    time: '45 min',
    people: 'Individual or team',
    exampleimage: '/public/phases_resources/images/futures_triangle.png',
    citation: 'Inayatullah, S. (2023). The Futures Triangle: Origins and Iterations. World Futures Review, 15(2–4), 112–121. https://doi.org/10.1177/19467567231203162'
  },
  {
    title: 'Axes of Uncertainty',
    description: 'This tool will help you identify and map critical uncertainties that could shape your future operating environment. You’ll select two high-impact, high-uncertainty factors and place them on intersecting axes to frame four plausible future scenarios.',
    tips: [
      'Start by reviewing external trends and drivers from the Tech Trends Report and your operational context',
      'Identify factors with both high impact and high uncertainty.',
      'Select the two most significant uncertainties and map them as X and Y axes on a matrix, thus generating four plausible future worlds at the intersections.',
      "Label the extremes of each axis (e.g., 'High AI adoption' vs. 'Low AI adoption').",
      'Use this matrix as a foundation for scenario building in the next step.'
    ],
    url: 'https://medium.com/swlh/how-futurists-cope-with-uncertainty-a4fbdff4b8c6',
    time: '45–60 min',
    people: 'Team (3–5 people)',
    exampleimage: '/public/phases_resources/images/axes_uncertainty.png',
    citation: 'Webb, A. (2020, March 16). How Futurists Cope With Uncertainty. The Startup. https://medium.com/swlh/how-futurists-cope-with-uncertainty-a4fbdff4b8c6; Schwartz, P. (1997). The Art of the Long View. Doubleday/Currency.'
  },
  {
    title: 'Developing Scenarios',
    description: 'In this activity you will develop detailed, plausible future narratives based on the four quadrants generated by your Axes of Uncertainty matrix. This helps teams stress-test strategies and identify opportunities and risks under different future conditions.',
    tips: [
      'Start with the completed Axes of Uncertainty matrix. For each quadrant, imagine what the world might look like if both uncertainties play out in those positions.',
      'Build a short scenario narrative for each, considering implications for your institution, stakeholders, and sector. Use prompts like: “What opportunities might arise?” and “What challenges could emerge?”'],
    url: 'https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/',
    time: '1.5–2 hours',
    people: 'Team (3–5 people)',
    exampleimage: '/public/phases_resources/images/scenario_building.png',
    citation: 'SchSchwartz, P. (1997). The Art of the Long View. Doubleday/Currency.wartz, P. (1996). The Art of the Long View: Planning for the Future in an Uncertain World. Currency); Jerome C.  Glenn, & Gordon, T. J. (2009). Futures Research Methodology (3.0). The Millennium Project. https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/',
  },
  {
    title: 'Innovation Readiness Assessment',
    description: 'Innovation readiness refers to how prepared an organization is to successfully implement and sustain innovation, regardless of its type or scope. One example of a framework that supports this is the Maastricht Innovation Readiness Approach (MIRA), which helps organizations reflect on their innovation readiness by: Providing insight into the key factors that influence an organization\'s ability to innovate. Mapping how much attention is currently being paid to these factors within the organization.assess your organization\'s preparedness for change across key dimensions. Ideal for planning major organizational shifts or new initiatives.',
    tips: [
      'When preparing for major organizational changes, innovation projects, or strategic shifts.',
      'To gather input from a diverse group of stakeholders and build a well-rounded understanding of your organization’s readiness.',
      'As a baseline assessment that can be revisited periodically to track progress as part of ongoing innovation management and capacity-building.'
    ],
    url: 'https://www.awolimburg.nl/userfiles/files/meetinstrumenten/2024-07-18-mira-instrument.pdf',
    time: '2–3 hours',
    people: 'Team (3–5 people)',
    exampleimage: '/public/phases_resources/images/readiness_assessment.png',
    citation: 'Maastricht University. (2024). Maastricht Innovation Readiness Aanpak (MIRA). https://www.awolimburg.nl/nl/projecten/innovation-readiness'
  },
    ],
    justification: "This phase marks the shift from simply noticing trends to actively making sense of them. Starting here moves your organization from awareness to actionable foresight. It’s about exploring how signals of change intersect with your institution’s mission, culture, and operational realities. Through this process you will uncover opportunities and tensions worth addressing. This roadmap will help you create a foundation for informed, future-ready decisions.",
justificationImage: "",
  },

  {
  title: 'Strategic Planning',
  subtitle: 'From foresight to action - translating scenarios into strategic options, innovation opportunities, and implementation plans.',
  
  justification: `The Strategic Planning phase is the second phase because it brings foresight back to an organisation’s context. It is about identifying opportunities and threats from your scenarios and assessing an organisation’s capability gaps to act on them. This phase ensures your strategic response is both ambitious and achievable within the operational reality. Rather than offering a rigid formula, this phase invites you to collectively explore which pathways are most relevant, ambitious, and feasible for your organization.`,

  description: 'Now that you’ve explored plausible future scenarios for your institution, this phase focuses on translating those insights into actionable, strategic priorities. This phase is about shaping an innovation strategy that is fit for the future by aligning with your institutional vision, navigating uncertainties, and preparing you for multiple plausible futures.',
note: "These keys steps are intended as conversation starters, not rigid steps. Every institution integrates change differently. What matters is creating a plan that works for your people, aligns with your culture, and builds on your existing strengths. Use what resonates and adapt the rest.",

  activities: [
    {
      activity: 'Translate scenarios into strategic opportunities',
      details: [
        'Identify future strategic initiatives, innovation ideas, and responses to emerging risks and opportunities uncovered in your foresight work.'
      ],
      tools: [
        'White Spots — to surface overlooked opportunities and gaps exposed by your scenarios.',
        'Backcasting — to map pathways from desirable future outcomes back to present-day action points.'
      ]
    },
    {
      activity: 'Assess and prioritize initiatives',
      details: [
        'Use frameworks to balance radical and incremental innovation and evaluate where to invest resources.'
      ],
      tools: [
        'Innovation Portfolio Matrix — map new projects based on risk and impact.',
        'Cost-Impact Mapping — visualize quick wins vs. big bets.',
        'Crowd Clovers — crowdsource feedback on initiative feasibility and desirability.'
      ]
    },
    {
      activity: 'Evaluate your innovation readiness',
      details: [
        'Assess your institution’s current innovation capability, culture, governance, and resourcing to ensure your proposed strategy is both ambitious and executable.'
      ],
      tools: [
        'Innovation Maturity Models — map current maturity (e.g., developing, established, leading).',
        'SWOT-TOWS — assess internal strengths and weaknesses against external opportunities and threats.',
        'Must-Win Battles — identify critical priorities and capability gaps to address before moving forward.'
      ]
    },
    {
      activity: 'Sharpen your innovation narrative',
      details: [
        'Refine your future vision, and spotlight bold, unconventional ideas in your current strategy.'
      ],
      tools: [
        'VOICE Stars — assess initiatives by Vision, Opportunity, Impact, Culture fit, and Execution readiness.',
        'Dark Horse Prototypes — showcase radical or unconventional ideas worth testing.',
        'Paper Mock-ups — visualize future service, product, or strategy concepts quickly and cheaply.'
      ]
    },
    {
      activity: 'Align innovation with institutional strategy',
      details: [
        'Ensure initiatives are aligned with your institution’s mission, values, and long-term objectives.'
      ],
      tools: [
        'Strategic Alignment Rubrics — score initiatives against institutional priorities and strategic fit.'
      ]
    },
    {
      activity: 'Engage stakeholders through scenario rehearsals',
      details: [
        'Use tools to test assumptions, build commitment, and stress-test strategic choices with leadership and operational teams.'
      ],
      tools: [
        'Wind Tunnelling — assess how initiatives perform under different future scenarios.',
        'Change Paths — map likely implementation journeys and resistance points.',
        'Buddy Checks — peer-review strategy drafts and initiative portfolios before final decisions.'
      ]
    },
    {
      activity: 'Document decisions and invite feedback',
      details: [
        'Thoroughly capture rationale, priorities, and uncertainties.',
        'Leave structured opportunities for ongoing feedback and iteration.'
      ],
      tools: [
        'Decision Logs — record key strategy decisions and underlying reasoning.',
        'Feedback Forms — structured templates for gathering input post-workshops and rehearsals.',
        'Retrospective Sessions — reflect on the process and adjust course where needed.'
      ]
    }
  ],

  stakeholderEngagement: `Engage stakeholders through scenario rehearsals. Use tools like Wind Tunnelling, Change Paths and Buddy Checks to test assumptions, build commitment, and stress-test strategic choices with leadership and operational teams.`,

  indicators: [
    'Strategic initiatives and innovation projects are prioritized with clear rationale and alignment to institutional goals.',
    'Innovation maturity has been assessed, and gaps are addressed.',
    'Leadership teams are aligned around a shared innovation roadmap shaped by scenario insights.',
    'Teams are mobilized with a clear, inspiring narrative of where the institution is headed, and why.'
  ],

  
  resources: [
  {
    title: 'White Spots',
    description: 'A visual tool to uncover gaps in your knowledge, assumptions, or strategic planning — the “unknown unknowns” that could affect your project or future scenarios. It helps make blind spots visible so you can address them early, while also surfacing overlooked opportunities.',
    tips: [
      'Use White Spots to uncover overlooked opportunities: what aren’t we seeing yet?',
      'Start by listing what you know for sure about your situation or future context, then identify uncertainties and assumptions you’re making.',
      'Mark areas where you realize you don’t have enough information. These are your White Spots.',
      'Use sticky notes or color codes to highlight gaps in data, expertise, or understanding.',
      'Prioritize which White Spots to investigate first based on potential impact.'
    ],
    url: 'https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf',
    time: '30–60 min',
    people: 'Team activity',
    exampleimage: '',
    citation: 'Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation, p.45. https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf'
  },
  {
    title: 'Backcasting',
    description: 'Backcasting is a strategic planning method that starts with defining a desirable future and then works backward to identify the policies, actions, and steps needed to connect that specified future to the present.',
    tips: [
      'Start by envisioning a successful, desirable future scenario for your organization.',
      'Identify the key steps, decisions, and milestones needed to move from your current state to the desired future.',
      'Work backward to map the pathway and identify immediate and medium-term actions.',
      'Use this method to develop long-term strategies that are resilient, goal-oriented, and adaptable.'
    ],
    url: 'https://projects.research-and-innovation.ec.europa.eu/sites/default/files/rio/report/HOW%20TO_%20Get%20Started%20with%20Backcasting%20Formatted%20v4.pdf',
    time: '2–3 hours',
    people: 'Team activity',
    exampleimage: '',
    citation: 'Holmberg, J., & Robert, K.-H. (2000). Backcasting—A framework for strategic planning. International Journal of Sustainable Development & World Ecology, 7(4), 291–308. https://doi.org/10.1080/13504500009470049; California 100 & School of International Futures (2023), “Beyond Strategic Planning: A Foresight Toolkit for Decision Makers”; European Commission (2023). Mutual Learning Exercise on Citizen Science Initiatives – How to get started with the backcasting approach.'
  },
  {
    title: 'Scenario Readiness Canvas',
    description: 'A strategic tool for assessing how prepared your organization is for a range of future scenarios. Adapted from Scott Smith’s *How to Future*, it helps teams map potential futures against current capabilities, identify readiness gaps, and spot areas needing action.',
    tips: [
      'List the scenarios you have developed across the top of the canvas.',
      'List key capabilities and resources down the side (e.g., leadership, tech infrastructure, policy readiness).',
      'For each scenario-capability pair, rate your readiness (e.g., High / Medium / Low or color-coded).',
      'In each box, note why — what makes you strong or vulnerable in that scenario?',
      'Identify specific actions to boost readiness where needed and use a summary section to spot common gaps or assets across scenarios.'
    ],
    url: 'https://scott-smith-f83k.squarespace.com/s/Scenario-Readiness-Canvas-A4.pdf',
    time: '',
    people: 'Team activity',
    exampleimage: '',
    citation: 'Smith, S., & Ashby, M. (2020). How To Future: Leading and Sense-making in an Age of Hyperchange. Kogan Page Inspire. https://www.howtofuture.com'
  },
  {
    title: 'Visioning Canvas (Five Bold Steps Canvas)',
    description: 'A visual tool to co-create a clear, inspiring vision for the future. Developed by David Sibbet, it helps teams map out their ideal future state, key themes, enablers, challenges, and five bold steps toward success.',
    tips: [
      'Keep the vision statement short and bold.',
      'Limit to a maximum of 5 central themes.',
      'Visualize ideas with drawings, quotes, and images.',
      'Name both enablers and obstacles to success.',
      'Define 5 clear next steps and display the canvas in a visible place, revisiting it regularly for alignment.'
    ],
    url: 'https://www.businessmodelinnovatie.nl/vision-canvas/',
    time: '1 hour',
    people: 'Team activity',
    exampleimage: '',
    citation: 'The Grove Consultants International. (2024). Strategic Visioning Process Outline. https://www.thegrove.com/sv-process-overview-download; Fransen, R. (2020, July 15). Vision Canvas | Business Model Innovatie | Five Bold Steps Canvas. https://www.businessmodelinnovatie.nl/vision-canvas/'
  },
  {
    title: 'Innovation Ambition Matrix',

    description: 'This framework helps you categorize and balance your innovation initiatives based on their ambition: Core (optimize existing offerings), Adjacent (expand into new areas), and Transformational (create entirely new markets or business models). It ensures your innovation portfolio includes a healthy mix of incremental improvements and bold future bets.',
    tips: [
      'Use this matrix during annual or quarterly planning to align your innovation efforts with business strategy.',
      'Engage diverse perspectives (leadership, operations, frontline teams) when categorizing initiatives to avoid blind spots.',
      'Regularly reassess your portfolio as market conditions, technology, and customer needs evolve.'
    ],
    url: 'https://hbr.org/2012/05/managing-your-innovation-portfolio',
    time: '1.5–2 hours',
    people: 'Team activity',
    exampleimage: '',
    citation: 'Nagji, B., & Tuff, G. (2012). Managing Your Innovation Portfolio. Harvard Business Review.'
  },
  {
    title: 'Cross Impact Mapping',
    description: 'This framework visualizes projects based on relative cost and potential impact. It helps leadership identify "quick wins," "big bets," and areas that may need to be deprioritized or redesigned.',
    tips: [
      'Involve finance, operations, and frontline teams to ensure realistic cost assessments.',
      'Use this map to facilitate transparent conversations about trade-offs and opportunity costs.',
      'Pair with stakeholder input to validate the value perception across roles.'
    ],
    url: 'https://foresightculture.com/2018/03/09/how-to-use-cross-impact-analysis',
    time: '1–1.5 hours',
    people: 'Team activity',
    exampleimage: '',
    citation: 'Jerome C. Glenn, & Gordon, T. J. (2009). Futures Research Methodology (3.0). The Millennium Project. https://millennium-project.org/publications/futures-research-methodology-version-3-0-2/; Mahaffie, J. (2018, March 9). How to use cross impact analysis. Foresight Culture. https://foresightculture.com/2018/03/09/how-to-use-cross-impact-analysis'
  },
  {
    title: 'Crowd Clovers',

    description: 'Crowd Clovers is a simple tool for mapping your personal or team’s innovation network. It helps visualize who you’re connected to, where ideas and feedback come from, and where important gaps might exist.',
    tips: [
      'Facilitate short workshops where participants individually or collectively map their current innovation networks.',
      'Identify missing connections, underused relationships, and opportunities to strengthen collaboration across departments or stakeholder groups.',
      'Use the results to improve knowledge sharing, decision-making, and team diversity in innovation projects.'
    ],
    url: 'https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf',
    time: '1–2 hours',
    people: 'Team activity',
    exampleimage: '',
    citation: 'Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation. https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf'
  },
  {
    title: 'SWOT Analysis',
  
    description: 'SWOT Analysis is a strategic planning technique used to identify Strengths, Weaknesses, Opportunities, and Threats related to business competition or project planning.',
    tips: [
      'After developing your scenarios in phase 1, run a separate SWOT for each to uncover scenario-specific risks and opportunities.',
      'Use insights from the SWOTs to refine your strategic priorities, contingency plans, and innovation bets.',
      'Consider assigning different teams to different scenarios to gather diverse perspectives.'
    ],
    url: 'https://link.springer.com/chapter/10.1007/978-3-658-25074-4_7',
    time: '1–2 hours',
    people: 'Team activity (5–8 people)',
    exampleimage: '',
    citation: 'Van der Heijden, K. (2005). Scenarios: The Art of Strategic Conversation. Wiley; Luoto, L., & Lonkila, A. (2018). The Use of SWOT Analysis for Future Scenarios: A Case Study of Privacy and Emerging Technologies. In *Envisioning Uncertain Futures* (pp. 105–131). Springer VS, Wiesbaden. https://doi.org/10.1007/978-3-658-25074-4_7'
  },
  {
    title: 'Must-Win "Battles"',
    type: 'Strategic Planning',
    description: 'Identify the critical priorities your organization must win in the next planning horizon to achieve its strategic goals. Use this tool to focus resources and leadership attention where it matters most.',
    tips: [
      'Limit to 3–5 battles to maintain focus and avoid dilution.',
      'Align Must Win Battles with long-term vision and immediate challenges.',
      'Communicate these battles broadly across the organization.'
    ],
    url: '',
    time: '1–2 hours',
    people: 'Individual or team',
    exampleimage: '',
    citation: 'Killing, J. P., Killing, P., Malnight, T., & Keys, T. (2005). *Must-win battles: How to win them, again and again*. Wharton School Pub.'
  },
  {
    title: 'Voice Stars',
    type: 'Strategic Planning',
    description: 'Voice Stars is a diagnostic tool that can help to assess the leadership potential of individuals and teams for driving radical innovation. It helps identify "star-shaped" leaders: individuals with the unique blend of traits needed to guide innovation. It also reveals how well a team supports collective innovation leadership.',
    tips: [
      'Use the tool as a self-assessment or team exercise to explore leadership strengths and gaps.',
      'Reflect honestly on individual and team capabilities across key leadership dimensions.',
      'Use the results to guide personal development plans and strengthen team collaboration dynamics.',
      'Revisit the assessment regularly to track progress as your innovation efforts evolve.'
    ],
    url: 'https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf',
    time: '30–60 min',
    people: 'Team activity',
    exampleimage: '',
    citation: 'Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). *Playbook for Strategic Foresight and Innovation*. https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf'
  },
  {
    title: 'Paper Mockups',
    type: 'Strategic Planning',
    description: 'A quick, low-cost way to turn abstract ideas into tangible models. Use simple materials, like paper and markers, to prototype a service, system, or concept and test it with others. Use as a tool for alignment before investing resources.',
    tips: [
      'Decide what to mock up: a full service, system flow, or single interaction.',
      'Grab basic materials: paper, pens, tape, cups — whatever’s handy.',
      'Build it rough and quick: no need for perfection, focus on the idea’s core.',
      'Label parts clearly, so others can follow.',
      'Test it with someone: watch their reactions and gather questions or suggestions.'
    ],
    url: 'https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf',
    time: '30–60 min',
    people: 'Team activity',
    exampleimage: '',
    citation: 'Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). *Playbook for Strategic Foresight and Innovation*. https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf'
  },
  {
  title: 'Dark Horse Prototypes',
  description: 'A fast, physical prototype of a previously rejected, risky, or forgotten idea. It\'s a way to refocus on what really matters and possibly uncover hidden opportunity.',
  tips: [
    'Encourage outlandish, contrarian ideas to provoke new thinking.',
    'Pick an old, risky, or dismissed idea you still feel curious about — it can be a forgotten Paper Mockup or a different risky concept.',
    'Grab simple materials like paper, tape, or found objects.',
    'Build a rough prototype that highlights the core of the idea.',
    'Focus on what makes this idea exciting or valuable now.',
    'Test it with someone and see if it sparks new thinking.'
  ],
  url: 'https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf',
  time: '30–60 min',
  people: 'Team activity',
  exampleimage: '',
  citation: 'Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation (p. 145). https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf'
},
{
  title: 'Wind Tunneling',
  type: 'Strategic Planning',
  description: 'A structured exercise to pressure-test ideas against multiple possible futures. Wind-tunnelling helps teams stress-test strategies against pre-developed future scenarios. Helps uncover risks and blind spots by simulating how your strategy would hold up in different scenarios.',
  tips: [
    'Revisit your existing scenarios to set the context.',
    'Present the strategies or plans to test.',
    'Evaluate how each strategy holds up across all scenarios.',
    'Identify which options are most resilient and adaptable.',
    'Use the insights to refine your strategies for greater flexibility.'
  ],
  url: 'https://www.undp.org/sites/g/files/zskgke326/files/2022-07/UNDP-RBAP-Foresight-Playbook-Appendix-2022_0.pdf',
  time: '2–3 hours',
  people: 'Team activity (up to 20)',
  exampleimage: 'yes',
  citation: 'UNDP. (2022). *UNDP RBAP: Foresight Playbook* (p. 47). https://www.undp.org/sites/g/files/zskgke326/files/2022-07/UNDP-RBAP-Foresight-Playbook-Appendix-2022_0.pdf'
},
{
  title: 'Buddy Check',
  type: 'Strategic Planning',
  description: 'Buddy Checks is a very simple method for evaluating promising innovation partners and teammates by observing their authentic reactions to new ideas. It helps teams spot like-minded innovators and understand how different personalities respond to innovation scenarios. It can speed up the process of building strong, aligned teams.',
  tips: [
    'Present your idea in a raw or provocative way to spark authentic reactions.',
    'Observe both verbal and non-verbal cues to gauge openness, curiosity, and constructive challenge.',
    'Use role-playing to simulate real situations and see how people react under pressure or uncertainty.',
    'Debrief as a team to discuss what reactions felt energizing, supportive, or resistant.',
    'Use these insights to decide who to engage further for different roles or phases of your innovation journey.'
  ],
  url: 'https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf',
  time: '15 min',
  people: 'Team activity',
  exampleimage: '',
  citation: 'Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation. https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf'
},
{
  title: 'Change Paths',
  type: 'Strategic Planning',
  description: 'Change Paths helps teams explore multiple routes toward future innovations. Prioritize top decisions based on their ability to move the organization toward its desired future. This method acknowledges that innovation is rarely linear, encouraging teams to visualize and plan for a flexible, yet focused path forward.',
  tips: [
    'Start with drawing a circle and outline your vision: Define the future state or innovation you want to achieve and write it in the circle.',
    'Identify Key Choices: Pinpoint 2–3 major decisions or steps crucial to reaching the vision.',
    'Map the path — draw the path as a wiggly line, marking decision points, recognizing that the journey will involve both smart and lucky choices.',
    'Focus on Milestones: Highlight critical milestones your team needs to prioritize.',
    'Share the Change Path to align your team and stakeholders around the journey, showing that progress is not always a straight line.'
  ],
  url: 'https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf',
  time: '30 min',
  people: 'Team activity',
  exampleimage: '',
  citation: 'Carleton, T., Cockayne, W., & Tahvanainen, A.-J. (2013). Playbook for Strategic Foresight and Innovation. https://web.stanford.edu/group/archaeolog/cgi-bin/archaeolog/wp-content/uploads/2020/05/Playbook-for-Strategic-Foresight-and-Innovation-US-Stanford.pdf'
}
],
  },
  {
  title: 'Pilot Experimentation',
  subtitle: 'Build fast. Learn faster. Make innovation real.',
  description: 'Launch your pilot. Build the systems, teams, and habits that will drive real-world impact while learning and adapting as you go.',

  justification: `The Pilot Experimentation phase moves selected initiatives from concept to practice. We recognize that how, and when you pilot new initiatives depends on available resources, staffing, and institutional priorities. The steps below are intended as inspiration and conversation starters to shape your own approach.`,

  activities: [
    {
      activity: 'Form a Pilot Team',
      details: [
        'Bring together a cross-functional group and consider defining clear roles, responsibilities, and timelines.',
        'Use simple planning tools (such as a Project Plan Template) that suit your team\'s working style and available capacity.'
      ],
     
    },
    {
      activity: 'Adopt a Flexible, Learning-Focused Approach',
      details: [
        'Stay adaptable, whether through agile methods, phased rollouts, or informal iteration.',
        'The goal is to prioritize learning over perfection.'
      ],
    
    },
    {
      activity: 'Develop Shared, Goal-Oriented Metrics',
      details: [
        'Develop goal-oriented evaluation metrics and systems for regular feedback.'
      ],
      
    },
    {
      activity: 'Connect with Peers',
      details: [
        'Where possible, invite other institutions, networks, or sector partners into conversations about similar pilots.',
        'Share experiences, challenges, and approaches for mutual learning.'
      ],
     
    }
  ],

  stakeholderEngagement: 'Stakeholders become co-pilots. Engage frontline users in prototyping, feedback loops, and iterative design. Their insights could drive success, and build long-term ownership.',

  indicators: [
    'A clear, resourced, and context-appropriate pilot plan is in place.',
    'Your pilot is live and actively supported.',
    'Feedback is being gathered.',
    'Lessons are shared internally, and where possible, with peer institutions.'
  ],

  resources: [
    {
    title: 'Pilot Project Plan Template',
    type: 'Pilot Experimentation',
    description: 'A Pilot Project Plan is a practical, structured document your team creates to outline how an innovation will be tested in a real-world setting. Many institutions already have processes or formats for this but if you are looking for a refresher you can adapt this template.',
    tips: [
      'Pilot objectives and intended outcomes.',
      'Scope and boundaries of the pilot.',
      'Roles, responsibilities, and ownership.',
      'Key deliverables and milestones.',
      'Assumptions, risks, and mitigation strategies.',
      'Evaluation criteria and data collection plan.'
    ],
    url: '',
    time: '1.5 hrs (90 mins)',
    people: 'Team activity',
    exampleimage: '',
    citation: ''
  },
    {
  title: 'Agile Sprint Board / Gantt Chart',
  type: 'Pilot Experimentation',
  description: 'Visual tools to organize your pilot into manageable sprints or timelines. They help teams track progress, surface blockers, and stay focused on short-term deliverables without losing sight of the big picture.',
  tips: [
    'Use sprint boards in daily stand-ups to maintain momentum and shared awareness.',
    'Update the board collaboratively to encourage transparency and team autonomy.',
    'Combine with a Gantt chart for executive reporting and cross-team coordination.'
  ],
  url: 'https://www.teamgantt.com/downloads/excel-gantt-chart-template',
  time: '1 - 2 hours',
  people: 'Team activity',
  exampleimage: '',
  citation: ''
}
  ],
    justificationImage: "",
},

{
  title: 'Full Deployment',
  subtitle: "From Pilots to Practice: Embedding Innovation.",
  justification: 'The Full Deployment phase marks a significant step in moving from successful pilot to broader institutional integration. Every institution has its own rhythm and way of embedding change, so while these steps offer a helpful starting framework, you’ll know best how to shape them within your own culture, priorities, and decision-making processes.',
note: "While this roadmap provides a useful starting point, every institution has its own approach to embedding change. Feel free to use these steps as inspiration but adapt them to fit your culture, goals, and processes.",
  description: 'This phase is about moving from successful pilots to consistent, organization-wide adoption. It focuses on rolling out your solution with clear structure, strong support systems, and thoughtful communication.',

  activities: [
    {
      activity: 'Finalize Deployment Plans',
      details: [
        'Review rollout details, timelines, and mitigation strategies.',
        'Adjust them to reflect what you’ve learned in pilots and what is realistic for your environment.'
      ]
    },
    {
      activity: 'Train and Support Users',
      details: [
        'Provide the right guidance and training in ways that work for your teams, whether through tailored sessions, self-guided materials, or informal peer learning.'
      ]
    },
    {
      activity: 'Coordinate Logistics and Support',
      details: [
        'Confirm that infrastructure, staffing, and support mechanisms are ready for a smooth scale-up.'
      ]
    },
    {
      activity: 'Track Adoption and Resolve Issues',
      details: [
        'Set up mechanisms to track progress and surface challenges early, whether through formal dashboards or regular team check-ins.',
        'Focus on responsiveness and learning as you go.'
      ]
    }
  ],

  indicators: [
    'Deployment has reached all intended teams and functions.',
    'Feedback and check-in practices show that users feel supported and well-informed.',
    'Minimal disruption occurs, with issues addressed quickly and transparently.',
    'Performance and usage data show active adoption.'
  ],

  stakeholderEngagement: [
  'Maintain clear communication channels. Ensure everyone knows where to get help or give feedback.',
  'Share wins and updates. Use internal comms, showcases, or quick demos to maintain excitement and transparency.'
],
  resources: [
    {
    title: 'Deployment Checklist',
    type: 'Full Deployment',
    description: 'A detailed list to ensure nothing critical is missed when scaling from pilot to organization-wide rollout. Keeps teams aligned and confident during complex transitions.',
    tips: [
      'Use as a living document: update your existing project plan or scale up your pilot plan by integrating the feedback and lessons learned from the pilot phase.',
      'Ensure that all aspects of scaling are covered, from logistics to resource allocation and training.',
      'Assign clear owners for each checklist item to ensure accountability.',
      'Include both technical and cultural readiness items (e.g., team sentiment, narrative alignment).'
    ],
    url: '',
    time: '30-45 min',
    people: 'Idividual or team',
    exampleimage: '',
    citation: ''
  },
  {
  title: 'User Guide',
  type: 'Full Deployment',
  description: 'Step-by-step guidance tailored to different user roles. Reduces confusion and supports confident adoption across diverse stakeholders.',
  tips: [
    'Create separate guides for power users, frontline staff, and supervisors.',
    'Use screenshots and plain language to make the guide intuitive.',
    'Offer it both as a PDF and embedded in support systems for easy access.'
  ],
  url: 'https://whatfix.com/blog/user-guides/',
  time: '1 hour',
  people: 'Individual or team',
  exampleimage: 'no pic',
  citation: 'Olmstead, L. (2023, August 2). How to Create a User Guide (Examples, Tips, Tools). The Whatfix Blog | Drive Digital Adoption. https://whatfix.com/blog/user-guides/'
}
  ],
    justificationImage: '/phases_resources/images/forecasting_funnel.png',
},
{
  title: 'Evaluation & Optimization',
  subtitle: "Improve. Scale. Repeat.",
  justification: "This phase offers a structure for reflecting on the outcomes of your initiatives while also keeping an eye on long-term alignment with your organizational vision and ongoing future readiness. These steps aren’t meant to prescribe exactly how you should proceed. Rather, they serve as a conversation starter to help you consider how evaluation, improvement, and foresight could be approached within your context.",
  description: 'Once deployed, it\'s time to evaluate impact, adapt based on feedback, and build a foundation for future improvement.',
  activities: [
    {
      activity: 'Gather Feedback',
      details: [
        'Consider how you might gather insights from those involved.',
        'This could include surveys, interviews, informal conversations, or performance data – whichever tools suit your culture and project.'
      ]
    },
    {
      activity: 'Monitor Alignment with Vision & Strategic Priorities',
      details: [
        'It can be valuable to check whether initiatives are still aligned with your long-term ambitions. '
      ]
    },
    {
      activity: 'Implement Improvements',
      details: [
        'Document all updates in a structured way.',
        'Decide what quick fixes you want to make and what deserves a bigger conversation. ',
        'Future readiness often benefits from regular, light-touch conversations, rather than large, infrequent reviews. '
      ]
    },
    {
      activity: 'Capture and Share Lessons Learned',
      details: [
        'Think about the best way for your team to share what’s been learned.',
        'An After-Action Review or Retrospect are useful tools that helps with structured reflection, encourages open dialogue, and helps in documenting insights that can inform future initiatives.'
      ]
    }
  ],
  indicators: [
    'Clarity on what’s working, what’s not, and what needs adjustment.',
    'Users feel heard and involved in refinement',
    'Insights and learnings feeding back into future initiatives.',
  ],
  stakeholderEngagement: ['Close the Loop - Share back what you’ve learned and how you’re improving.', 'Invite Critique - Create safe spaces for honest feedback and refinement ideas.', 'Keep Futuring in the Conversation - Regularly check in on how current initiatives fit with your anticipated future and emerging challenges.'],
  resources: [
  {
  title: 'After Action Review (AAR)',
  type: 'Evaluation & Optimization',
  description: 'A structured process for reflecting on a completed project or initiative to assess its effectiveness and identify lessons learned. Originally developed by the U.S. Army, AARs have been widely adopted in various sectors for continuous improvement.',
  tips: [
    'What was supposed to happen?',
    'What actually happened?',
    'Why was there a difference?',
    'How can we avoid such mistakes in the future?',
    'What can we learn from this?'
  ],
  url: 'https://hbr.org/2023/01/a-better-approach-to-after-action-reviews',
  time: '30 - 60 min',
  people: 'Team',
  exampleimage: 'no pic',
  citation: 'Baškarada, S., McKay, T., & McKenna, T. (2013). Technology deployment process model. *Operations Management Research, 6*(3–4), 105–118. https://doi.org/10.1007/s12063-013-0082-5'
}
  ],
}
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sidebar {
  transition: width 0.7s ease;
  background-color: #EAECF0
}

.sidebar-bg {
  background-color: #EAECF0
}

.sidebar:hover {
  width: 18rem !important;
}

.space-y-6 {
  padding-top: 4rem; /* Adjust this to lower the menu */
}

.surf-500-green {
  color: #C15500;
}
.surf-100-background{
  background-color: #DFF4FF;
}

.border-surf-blue-100 {
  border-color: #B3E5FF;
}

.border-surf-200-green {
  border-left-color: #FF9A4E;
}
.background-surf {
  background-color: #FFE6D2;
}

.ring-surf-200-green {
  --tw-ring-color: #FF9A4E;
}

.ring-surf-200-blue {
  --tw-ring-color: #FF9A4E;
}
</style>