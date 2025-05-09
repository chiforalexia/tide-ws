<template>
  <div>
    <!-- Header -->
    <h1 class="text-5xl font-extrabold text-center mb-2 text-black-800">
      Implementation Phases
      <div class="text-xl text-grey-200 mt-3">
        We invite you to translate the tech trends for your institution
      </div>
      <div class="text-2xl text-blue-600 mt-2">Start exploring</div>
    </h1>
    <!-- Subtitle paragraph -->
    <p class="text-sm text-gray-500 max-w-3xl mx-auto mt-6 text-center leading-relaxed">
      With the SURF Tech Trends Report in hand, you’ve taken the first step: gaining insight into the signals shaping the future of education and research. These aren’t instructions but an invitation to reflect, translate, and act. 
      <br/><br/>
      You’re not expected to follow a fixed path, but to create one, using these phases as support.
    </p>

    <div class="min-h-screen bg-gray-50 flex">
      <!-- Sidebar -->
      <div
        :class="[
          'transition-all duration-500 relative bg-white border-r border-gray-200',
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
                    ×
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
                    <!-- Phase Description -->
                    <div>
                      <h2 class="text-2xl font-bold text-gray-800 mb-4">Phase Overview</h2>
                      <p class="text-gray-700 leading-relaxed">
                        {{ phases[activePhase].description }}
                      </p>
                    </div>

                    <!-- Activities -->
                    <div>
                      <div class="flex items-center gap-2 mb-4">
                        <svg class="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" stroke-width="2.2"
                          viewBox="0 0 28 28" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 9h16M6 14h16M6 19h16" />
                        </svg>
                        <h3 class="text-xl font-semibold text-gray-800">Key Activities</h3>
                      </div>

                      <ul class="space-y-2">
                        <li v-for="(activity, i) in phases[activePhase].activities" :key="i">
                          <div class="flex items-start gap-3 mb-2">
                            <span
                              class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold"
                            >
                              {{ i + 1 }}
                            </span>
                            <span class="text-gray-800 font-medium text-lg">{{ activity.activity }}</span>
                          </div>

                          <!-- Sub-bullets / details -->
                          <ul class="pl-12 space-y-2 list-disc text-gray-600">
                            <li v-for="(detail, j) in activity.details" :key="j">
                              {{ detail }}
                            </li>
                          </ul>

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
                        <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" stroke-width="2"
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
                      <p class="text-gray-700">{{ phases[activePhase].stakeholderEngagement }}</p>
                    </div>
                  </div>

                  <!-- Resources -->
                  <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-blue-200 h-fit">
                    <div class="flex items-center gap-2 mb-6">
                      <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" stroke-width="2"
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
    description: `Move from observing trends to making sense of them. In this phase, you’ll explore how signals of change intersect with your institution’s mission, culture, and operational context. The goal is to surface possibilities, imagine futures, and lay the groundwork for focused strategic planning.`,
    activities: [
      {
        activity: 'Familiarise yourself with the SURF Tech Trends Report',
        details: [
          'Review the report thoroughly and combine its insights with your own expertise and knowledge of your institution.',
          'Start identifying signals of change relevant to your mission, culture, and strategy.'
        ]
      },
      {
        activity: 'Assemble a cross-functional team',
        details: [
          'Bring together people from different functions, disciplines, and backgrounds to broaden perspectives.',
          'Innovation thrives in diverse groups where assumptions are challenged and fresh ideas emerge.'
        ]
      },
      {
        activity: 'Run a silent brainstorm with the Tech Trends in mind',
        details: [
          'Each participant writes down as many future possibilities, ideas, or risks as possible without discussion.',
          'Focus on capturing volume and variety—no judgment, just curiosity.'
        ]
      },
      {
        activity: 'Map initial stakeholders',
        details: [
          'Identify individuals, groups, and partners who might influence or be impacted by future initiatives.',
          'Create a preliminary map to guide engagement in upcoming phases.'
        ]
      },
      {
        activity: 'Conduct a PESTEL Analysis',
        details: [
          'Explore Political, Economic, Social, Technological, Environmental, and Legal drivers of change.',
          'Identify broader trends and emerging signals shaping your sector.'
        ]
      },
      {
        activity: 'Use the Futures Triangle tool',
        details: [
          'Map the pull of the future, push of the present, and weight of the past on your institution’s trajectory.',
          'Helps to frame opportunities and constraints realistically.'
        ]
      },
      {
        activity: 'Establish axes matrix for scenario development',
        details: [
          'Identify two key uncertainties to build your scenarios around.',
          'Leverage group insights and diverse perspectives to select relevant, impactful axes.'
        ]
      },
      {
        activity: 'Develop four plausible scenarios',
        details: [
          'Use your axes to craft four distinct, plausible futures.',
          'These narratives will help stress-test strategies and surface opportunities and risks later.'
        ]
      },
      {
        activity: 'Document the process',
        details: [
          'Capture key assumptions, discussion points, ideas, and early signals.',
          'This documentation becomes a critical input for decision-making in later phases.'
        ]
      }
    ],
    stakeholderEngagement: `Engage a diverse, cross-functional group from the outset. Early stakeholder mapping helps identify who to involve, inform, or consult as the process progresses, strengthening insights and ownership of future strategy.`,
    indicators: [
      'You’ve completed a structured ideation and futures exploration process.',
      'Four plausible, well-defined scenarios are documented.',
      'Key stakeholders are mapped for future engagement.',
      'The external operating environment is clearly understood through PESTEL and Futures Triangle analysis.'
    ],
    resources: [
    {
    title: 'Tech Trends Report',
    type: 'Document',
    description: 'This report serves as your go-to reference for spotting early signals and understanding technological developments that could shape the future of education and research.',
    tips: [
      'Use the report as a first reference when identifying relevant signals, trends, and emerging technologies for your context.',
      'Bring it into strategic discussions or innovation workshops to frame conversations around where technology is heading.',
      'Evaluate how the trends outlined could impact your institution within the next years.',
      'Share key insights with leadership and innovation teams to keep decision-making aligned with sector-wide developments.'
    ],
    url: '/resources/personalisation-page.pdf',
    time: '30 min',
    people: 'Individual or team',
    exampleimage: '/public/phases_resources/images/tech_trends_report.png',
    citation: 'Was in the slides from Copenhagen'
  },
  {
    title: 'Silent Brainstorm',
    type: 'Activity',
    description: 'In this activity, you\'ll independently generate ideas by combining insights from the SURF Tech Trends Report with your own background, experiences, and observations.',
    tips: [
      'Get a blank canvas or physical wall space.',
      'Use Post-it notes (physical or digital) to write down every idea that comes to mind — one idea per note.',
      'Start by reviewing the trends and signals from the SURF Tech Trends Report and reflect on how they might intersect with your context.',
      'Write down every idea — no filtering, no judging. Even half-formed, unusual, or provocative thoughts are valuable here.'
    ],
    url: '/resources/silent-brainstorm.pdf',
    time: '5–10 min',
    people: 'Individual or team',
    exampleimage: '/public/phases_resources/images/silent_brainstorm.png',
    citation: 'Was in the slides from Copenhagen'
  },
  {
    title: 'Futures Triangle',
    type: 'Activity',
    description: 'Explore the forces influencing possible futures for your organization or sector by mapping key trends and drivers onto a Futures Triangle framework.',
    tips: [
      'Draw a triangle and label the points: Pull of the Future, Push of the Present, and Weight of the Past.',
      'Use the Tech Trends Report to identify strong ‘pulls’ and reflect on operational and contextual forces.',
      'Write each idea on a Post-it and place it in the relevant corner of the triangle.',
      'Look for tensions or areas of alignment between forces.'
    ],
    url: '/resources/futures-triangle.pdf',
    time: '45 min',
    people: 'Individual or team',
    exampleimage: '/public/phases_resources/images/futures_triangle.png',
    citation: 'Was in the slides from Copenhagen'
  },
  {
    title: 'PESTEL Analysis',
    type: 'Framework',
    description: 'Analyze the Political, Economic, Social, Technological, Environmental, and Legal factors influencing your environment to identify risks, opportunities, and strategic context.',
    tips: [
      'Conduct a PESTEL analysis at the start of a new strategy cycle.',
      'Integrate it into risk management processes.',
      'Combine with SWOT for a complete internal and external assessment.'
    ],
    url: '/resources/pestel-analysis.pdf',
    time: '1.5–2 hours',
    people: 'Team (3–5 people)',
    exampleimage: '/public/phases_resources/images/pestel_analysis.png',
    citation: 'Standard foresight and strategic analysis method'
  },
  {
    title: 'Axes of Uncertainty',
    type: 'Framework',
    description: 'A strategic foresight tool to identify and map critical uncertainties that could shape your future operating environment.',
    tips: [
      'Review external trends and drivers from the Tech Trends Report and your operational context.',
      'Identify factors with both high impact and high uncertainty.',
      'Select the two most significant uncertainties and map them as X and Y axes on a matrix.',
      'Label the extremes of each axis.',
      'Use this matrix as a foundation for scenario building.'
    ],
    url: '/resources/axes-of-uncertainty.pdf',
    time: '45–60 min',
    people: 'Cross-functional or strategic foresight team (3–5 people)',
    exampleimage: '/public/phases_resources/images/axes_uncertainty.png',
    citation: 'Best practice foresight tool (Voros, 2003; Schwartz, 1991)'
  },
  {
    title: 'Horizon Scanning',
    type: 'Framework',
    description: 'A systematic approach to identifying early signals of change, emerging trends, and weak signals that may impact your organization’s future environment.',
    tips: [
      'Regularly scan academic, industry, news, and innovation sources.',
      'Use STEEP/PESTEL categories to organize findings.',
      'Track both mainstream and outlier signals.',
      'Log insights in a shared document for pattern spotting.'
    ],
    url: '/resources/horizon-scanning.pdf',
    time: '1–2 hours',
    people: 'Foresight team or innovation leads',
    exampleimage: '/public/phases_resources/images/horizon_scanning.png',
    citation: 'Standard foresight methodology (Curry & Hodgson, 2008; Hines & Bishop, 2006)'
  },
  {
    title: 'Building Scenarios',
    type: 'Framework',
    description: 'A collaborative activity where you develop detailed, plausible future narratives based on the four quadrants generated by your Axes of Uncertainty matrix.',
    tips: [
      'Start with the completed Axes of Uncertainty matrix.',
      'For each quadrant, imagine what the world might look like.',
      'Build a short scenario narrative considering implications for your institution and sector.',
      'Use prompts like: “What opportunities might arise?” and “What challenges could emerge?”'
    ],
    url: '/resources/building-scenarios.pdf',
    time: '1.5–2 hours',
    people: 'Cross-functional or strategy team (3–5 people)',
    exampleimage: '/public/phases_resources/images/scenario_building.png',
    citation: 'Best practice scenario planning method (Schwartz, 1991; Wilkinson & Kupers, 2013)'
  },
  {
    title: 'Readiness Assessment Template',
    type: 'Document',
    description: 'A template that helps assess your organization’s preparedness for change across key dimensions. Ideal for planning major organizational shifts or new initiatives.',
    tips: [
      'Use when preparing for significant transformations.',
      'Gather input from diverse stakeholders for a rounded perspective.',
      'Reassess periodically as part of ongoing change management.'
    ],
    url: '/resources/readiness-assessment.pdf',
    time: '2–3 hours',
    people: 'Change management team or leadership (3–6 people)',
    exampleimage: '/public/phases_resources/images/readiness_assessment.png',
    citation: 'Standard organizational change practice'
  },
  {
    title: 'Stakeholder Mapping',
    type: 'Activity',
    description: 'This tool helps you map stakeholder relationships and their engagement pathways. Essential for ensuring alignment and fostering effective communication during complex projects.',
    tips: [
      'Use early in project planning to identify key actors and their influence.',
      'Update regularly as stakeholder dynamics evolve.',
      'Include it in risk assessments to identify potential blockers and champions.'
    ],
    url: '/resources/stakeholder-mapping.pdf',
    time: '1 hour',
    people: 'Team (2–4 people)',
    exampleimage: '/public/phases_resources/images/stakeholder_mapping.png',
    citation: 'Common foresight and change management tool'
  },
  {
    title: 'Futures/Implications Analysis Wheel',
    type: 'Framework',
    description: 'A structured tool for identifying first-, second-, and third-order consequences of a trend, event, or decision, helping organizations anticipate ripple effects and unintended outcomes.',
    tips: [
      'Place a key trend or decision in the center of the wheel.',
      'List first-order impacts, then branch out to second- and third-order consequences.',
      'Encourage creative, non-linear thinking to surface unexpected outcomes.',
      'Use this to uncover risks and opportunities you might miss at first glance.'
    ],
    url: '/resources/implications-analysis-wheel.pdf',
    time: '1 hour',
    people: 'Team',
    exampleimage: '/public/phases_resources/images/implications_wheel.png',
    citation: 'Adapted from foresight and risk assessment practices (Fahey & Randall, 1998; Rohrbeck et al., 2015)'
  }
    ],
    justification: `
  <p>Begin with the <strong>Exploration</strong> phase because it marks the transition from observing trends to making sense of them. This phase aligns with Steps 1 to 4 of the Seven-Step Forecasting Funnel:</p>
  <ul class="list-disc pl-6 mt-2">
    <li><strong>Steps 1 & 2:</strong> Captured in the SURF Tech Trends Report -these involve identifying emerging signals and synthesizing them into trends.</li>
    <li><strong>Step 3:</strong> Encourages you to explore uncertainties and map plausible outcomes.</li>
    <li><strong>Step 4:</strong> Focuses on building future scenarios that describe how trends and uncertainties could shape your institution.</li>
  </ul>
  <p class="mt-4">By starting here, you move from awareness to foresight - laying the foundation for meaningful planning and innovation.</p>
`,
justificationImage: '/phases_resources/images/forecasting_funnel.png',
  },

  {
  title: 'Strategic Planning',
  subtitle: 'From foresight to action — translating scenarios into strategic options, innovation opportunities, and implementation plans.',
  description: `From insight to action. Choose your future—then plan for it. Build a bold innovation strategy that aligns with your vision and resources. Prioritize projects, rehearse future challenges, and set the stage for execution.`,
  note: `Each tool is placed where it delivers the most value in this process. However, tools can be pulled up again as needed to revisit assumptions, explore new ideas, or stress-test evolving decisions.`,
  
  whatYouAreDoing: `Now that you’ve explored and assessed possible future scenarios for your institution, it’s time to translate those insights into concrete strategic options, innovation initiatives, and risk responses. This phase is about shaping a bold, future-fit innovation strategy that aligns with your institutional vision, navigates uncertainties, and prepares you for multiple plausible futures.`,
  
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
        'Innovation Portfolio Matrix — map projects based on risk and impact.',
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
        'Innovation Maturity Models — map current maturity (e.g., nascent, developing, established, leading).',
        'SWOT-TOWS — assess internal strengths and weaknesses against external opportunities and threats.',
        'Must-Win Battles — identify critical priorities and capability gaps to address before moving forward.'
      ]
    },
    {
      activity: 'Sharpen your innovation narrative',
      details: [
        'Refine your future vision and spotlight bold, unconventional ideas in your current strategy.'
      ],
      tools: [
        'VOICE Stars — assess initiatives by Vision, Opportunity, Impact, Culture fit, and Execution readiness.',
        'Dark Horse Prototypes — showcase radical or unconventional ideas worth testing.',
        'Paper Mockups — visualize future service, product, or strategy concepts quickly and cheaply.'
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
  
  stakeholderEngagement: `Use tools like Change Paths and Buddy Checks to rehearse scenarios with leadership and cross-functional teams. This builds commitment and aligns diverse priorities early.`,

  indicators: [
    'Strategic initiatives and innovation projects are prioritized with clear rationale and alignment to institutional goals.',
    'Innovation maturity has been assessed and gaps are addressed.',
    'Leadership teams are aligned around a shared innovation roadmap shaped by scenario insights.',
    'Teams are mobilized with a clear, inspiring narrative of where the institution is headed — and why.'
  ],
  resources: [
  {
    title: 'Innovation Portfolio Matrix',
    type: 'Framework',
    description: 'This tool helps you map and balance your innovation initiatives by plotting them against dimensions of impact and uncertainty. It ensures your innovation portfolio includes a healthy mix of safe bets and transformative ideas.',
    tips: [
      'Use this matrix during annual planning to balance short-term wins and long-term bets.',
      'Include diverse perspectives when scoring impact and uncertainty to surface blind spots.',
      'Reassess quarterly to reflect shifting priorities or external changes.'
    ],
    url: '/resources/innovation-portfolio-matrix.pdf'
  },
  {
    title: 'Cost-Impact Mapping',
    type: 'Framework',
    description: 'This framework visualizes projects based on relative cost and potential impact. It helps leadership identify "quick wins," "big bets," and areas that may need to be deprioritized or redesigned.',
    tips: [
      'Involve finance, operations, and frontline teams to ensure realistic cost assessments.',
      'Use this map to facilitate transparent conversations about trade-offs and opportunity costs.',
      'Pair with stakeholder input to validate the value perception across roles.'
    ],
    url: '/resources/cost-impact-mapping.pdf'
  },
  {
    title: 'Strategic Alignment Rubrics',
    type: 'Document',
    description: 'These rubrics help assess how well ideas align with institutional goals, values, and mission. They’re especially useful when filtering a long list of initiatives down to those with the highest strategic fit.',
    tips: [
      'Use early in the innovation funnel to ensure only aligned ideas proceed.',
      'Involve leadership to calibrate and refine what "alignment" means at this moment.',
      'Update the rubric yearly to reflect evolving strategy and external context.'
    ],
    url: '/resources/strategic-alignment-rubrics.pdf'
  },
  {
    title: 'White Spots / Paper Mockups / Dark Horse Prototypes',
    type: 'Vision Tools',
    description: 'These tools help clarify and stretch your vision by exploring what’s missing (White Spots), visualizing early ideas (Paper Mockups), and testing radical alternatives (Dark Horse Prototypes).',
    tips: [
      'Use White Spots to uncover overlooked opportunities—what aren’t we seeing yet?',
      'Encourage teams to create quick, low-fidelity mockups to communicate ideas fast.',
      'Design a Dark Horse prototype to deliberately challenge assumptions and generate surprise insights.'
    ],
    url: '/resources/vision-tools.pdf'
  },
  {
    title: 'Change Paths / Buddy Checks / VOICE Stars / Crowd Clovers',
    type: 'Team Tools',
    description: 'These participatory tools support inclusive planning and alignment. Use them to validate assumptions, test team cohesion, and crowdsource ideas, risks, or readiness from across your organization.',
    tips: [
      'Run Buddy Checks before major decisions to pressure-test logic with a peer or critic.',
      'Use VOICE Stars to evaluate innovation through values, outcomes, integration, culture, and equity lenses.',
      'Engage broader staff via Crowd Clovers to gather feedback and generate commitment from the ground up.'
    ],
    url: '/resources/team-tools.pdf'
  }
],
justification: '<p><strong>The Strategic Planning </strong>phase is the second phase because it brings foresight back to your organisation’s context. It connects directly to <strong>Step 5 and Step 6 of the Seven-Step Funnel</strong> — identifying opportunities and threats from your scenarios (Step 5) and assessing your organisation’s capability gaps to act on them (Step 6). This phase ensures your strategic response is both ambitious and achievable within your operational reality.</p>',
    justificationImage: '/phases_resources/images/forecasting_funnel.png',
  },
  {
  title: 'Pilot Experimentation',
  description: `Build fast. Learn faster. Make innovation real. Launch your pilot. Build the systems, teams, and habits that will drive real-world impact—while learning and adapting as you go.`,
  activities: [
    {
      activity: 'Form an implementation team',
      details: [
        'Assemble a dedicated group with clear roles, responsibilities, and decision-making authority.',
        'Use the Planning Template to define timelines, resource needs, and governance structures.'
      ],
      tools: [
        'Planning Template'
      ]
    },
    {
      activity: 'Balance design goals with real-world conditions',
      details: [
        'Track where you must stay true to core principles vs. where adaptation is acceptable.',
        'Continuously monitor constraints and opportunities on the ground.'
      ],
      tools: [
        'Fidelity-Flexibility Tracker'
      ]
    },
    {
      activity: 'Apply agile implementation approaches',
      details: [
        'Break the pilot into short, iterative sprints or cycles.',
        'Hold regular stand-ups and retrospectives to quickly surface issues and pivot as needed.'
      ],
      tools: [
        'Agile Sprint Framework',
        'Iteration Feedback Loops'
      ]
    },
    {
      activity: 'Use change management strategies to maintain engagement',
      details: [
        'Communicate frequently and transparently about pilot progress, successes, and lessons learned.',
        'Identify and address sources of resistance proactively.'
      ],
      tools: [
        'Change Management Playbook',
        'Pulse Surveys'
      ]
    }
  ],
  indicators: [
    'Your pilot is live and actively supported',
    'Feedback is flowing and being used to adapt in real-time',
    'You’re building visible momentum and buy-in'
  ],
  stakeholderEngagement: `Stakeholders become co-pilots. Engage frontline users in prototyping, feedback loops, and iterative design. Their insights drive success and build long-term ownership.`,
  resources: [
    {
      title: 'Implementation Planning Template',
      type: 'Document',
      description: 'A comprehensive document to structure your pilot—from scope and timelines to ownership and deliverables. It lays the groundwork for coordinated action and accountability.',
      tips: [
        'Co-create the plan with key implementers to foster ownership from day one.',
        'Include risk assumptions and mitigation strategies to stay ahead of roadblocks.',
        'Revisit and revise the template at major checkpoints to reflect evolving realities.'
      ],
      url: '/resources/implementation-planning-template.pdf'
    },
    {
      title: 'Agile Sprint Board / Gantt Chart',
      type: 'Tool',
      description: 'Visual tools to organize your pilot into manageable sprints or timelines. They help teams track progress, surface blockers, and stay focused on short-term deliverables without losing sight of the big picture.',
      tips: [
        'Use sprint boards in daily stand-ups to maintain momentum and shared awareness.',
        'Update the board collaboratively to encourage transparency and team autonomy.',
        'Combine with a Gantt chart for executive reporting and cross-team coordination.'
      ],
      url: '/resources/agile-board-gantt-chart.pdf'
    },
    {
      title: 'Pilot Evaluation Metrics',
      type: 'Framework',
      description: 'A framework to define and track what success looks like for your pilot. Includes inputs, outcomes, and learning indicators to assess impact and guide improvements.',
      tips: [
        'Co-define success metrics with users and stakeholders to reflect what really matters.',
        'Balance quantitative and qualitative data to capture nuanced learnings.',
        'Use real-time data dashboards or check-ins to adapt without waiting until the end.'
      ],
      url: '/resources/pilot-evaluation-metrics.pdf'
    },
    {
      title: 'Fidelity-Flexibility Tracker',
      type: 'Tool',
      description: 'This tool helps pilot teams decide when to stick to original plans (fidelity) versus when to adapt based on field realities (flexibility). It supports real-time learning and contextual decision-making.',
      tips: [
        'Use during retrospectives or after critical incidents to reflect on needed pivots.',
        'Score key practices weekly to track if the pilot is drifting or innovating with purpose.',
        'Discuss as a team to normalize adaptation as a strength, not a failure.'
      ],
      url: '/resources/fidelity-flexibility-tracker.pdf'
    },
    {
      title: 'Change Management Toolkit',
      type: 'Toolkit',
      description: 'A suite of templates and guidance for engaging teams, managing resistance, and building readiness. Focuses on communication, training, and alignment across roles.',
      tips: [
        'Tailor messaging to different stakeholder groups—what excites one may worry another.',
        'Map out emotional journeys of users and support staff to anticipate pain points.',
        'Use quick pulse surveys and informal check-ins to track engagement and morale.'
      ],
      url: '/resources/change-management-toolkit.pdf'
    },
    {
      title: 'Training Materials',
      type: 'PDF',
      description: 'Foundational materials that prepare users and teams for the pilot. Helps build confidence, reduce friction, and ensure consistent knowledge across the rollout.',
      tips: [
        'Deliver training in short, digestible modules to support busy teams.',
        'Follow up with live Q&A or peer coaching for applied understanding.',
        'Embed storytelling or real scenarios to make materials more relatable and sticky.'
      ],
      url: '/resources/training-materials.pdf'
    },
    {
      title: 'Feedback Survey',
      type: 'Form',
      description: 'A structured way to gather feedback from users, implementers, and partners. Supports rapid learning and iteration based on real-world input.',
      tips: [
        'Keep surveys short and focused to maximize completion and relevance.',
        'Include open-ended prompts to surface unanticipated insights.',
        'Close the loop—share what you learned and what you’re changing as a result.'
      ],
      url: '/resources/feedback-survey.html'
    }
  ],
justification: `<p><strong>The Pilot Implementation </strong> phase corresponds to the <strong>Actioning step in the Seven-Step Funnel.</strong> This is where selected initiatives and strategic choices move from planning to real-world testing. Pilots help validate assumptions, surface operational challenges, and build organisational confidence before scaling up full implementation.</p>`,
    justificationImage: '/public/phases_resources/images/forecasting_funnel.png',
},

{
  title: 'Full Deployment',
  description: `Scale success. Anchor innovation in the system. Roll out your solution with consistency, structure, and strong support systems—turning pilot success into everyday practice.`,
  activities: [
    {
      activity: 'Finalize Deployment Plans',
      details: [
        'Confirm final rollout timelines, team responsibilities, and communication protocols.',
        'Incorporate lessons learned from the pilot to adjust risk mitigation strategies.'
      ],
      tools: [
        'Risk Mitigation Matrix'
      ]
    },
    {
      activity: 'Train and Support Users',
      details: [
        'Develop and deliver tailored training sessions and materials for different user groups.',
        'Ensure clear, up-to-date documentation is available through multiple channels.'
      ],
    },
    {
      activity: 'Coordinate Logistics and Support',
      details: [
        'Confirm infrastructure, staffing, and tech support readiness prior to go-live.',
        'Set up clear escalation processes for operational issues.'
      ],

    },
    {
      activity: 'Track Adoption and Resolve Issues',
      details: [
        'Monitor real-time usage data and feedback to identify adoption trends.',
        'Use issue tracking systems to quickly resolve problems and adjust support as needed.'
      ],

    }
  ],
  indicators: [
    'Deployment has reached all intended teams and functions',
    'Users report confidence and clarity through feedback or training completion rates',
    'Minimal disruption during transition, with responsive support in place',
    'Performance and usage data show active adoption'
  ],
  stakeholderEngagement: `Maintain clear communication channels so everyone knows where to get help or give feedback. Share wins, updates, and milestones through internal comms, showcases, or quick demos to sustain excitement and transparency.`,
  resources: [
  {
    title: 'Deployment Checklist',
    type: 'Document',
    description: 'A detailed list to ensure nothing critical is missed when scaling from pilot to organization-wide rollout. Keeps teams aligned and confident during complex transitions.',
    tips: [
      'Use this as a living document—update it in real-time as deployment evolves.',
      'Assign clear owners for each checklist item to ensure accountability.',
      'Include both technical and cultural readiness items such as team sentiment and narrative alignment.',
      'Review and adjust the checklist after each major milestone for continuous improvement.'
    ],
    url: '/resources/deployment-checklist.pdf',
    time: '1–2 hours',
    people: 'Deployment team (3–6 people)',
    exampleimage: '/public/phases_resources/images/deployment_checklist.png',
    citation: 'Internal deployment best practices'
  },
  {
    title: 'User Guide',
    type: 'Website',
    description: 'Step-by-step guidance tailored to different user roles. Reduces confusion and supports confident adoption across diverse stakeholders.',
    tips: [
      'Create separate guides for power users, frontline staff, and supervisors.',
      'Use screenshots, video walkthroughs, and plain language to make the guide intuitive and accessible.',
      'Offer it both as a downloadable PDF and embedded directly into your support systems.',
      'Keep the guide regularly updated based on feedback from end users.'
    ],
    url: 'https://whatfix.com/blog/user-guides/',
    time: '2–3 hours to prepare',
    people: 'Individual or Documentation team',
    exampleimage: '/public/phases_resources/images/user_guide.png',
    citation: 'Whatfix Blog (2023)'
  }
  ],
justification: `<p><strong>The Full Deployment phase is part of the Actioning step in the Seven-Step Funnel.</strong> It involves scaling successful pilot projects into broader, institution-wide initiatives. This phase ensures new solutions are fully integrated into operations, with clear ownership, resources, and governance in place.</p>`,
    justificationImage: '/phases_resources/images/forecasting_funnel.png',
},
{
  title: 'Evaluation & Optimization',
  description: `Improve. Scale. Repeat. Once deployed, it's time to evaluate impact, adapt based on feedback, and build a foundation for future improvement.`,
  activities: [
    {
      activity: 'Gather Qualitative Feedback',
      details: [
        'Conduct surveys, interviews, or roundtables to surface deeper insights and improvement opportunities.'
      ]
    },
    {
      activity: 'Implement Improvements',
      details: [
        'Address quick wins based on initial feedback.',
        'Prioritize and plan for bigger changes where needed.',
        'Document all updates and decisions in a structured way.'
      ]
    },
    {
      activity: 'Capture and Share Lessons Learned',
      details: [
        'Feed key insights and outcomes back into your institutional processes, playbooks, and training materials.',
        'Use these lessons to inform and strengthen future innovation initiatives.'
      ]
    }
  ],
  indicators: [
    'Data shows performance gains or clear gaps for improvement',
    'Users feel heard and involved in refinement',
    'Adjustments lead to improved usability, adoption, or outcomes',
    'Lessons are accessible and used to inform new initiatives'
  ],
  stakeholderEngagement: `Close the loop by sharing what you’ve learned and how you’re improving. Invite critique and create safe spaces for honest feedback and refinement ideas.`,
  resources: [
  {
    title: 'After Action Review (AAR) Template',
    type: 'Template',
    description: 'The Asana After Action Review (AAR) Template is a structured tool designed to help teams reflect on a completed project or initiative by identifying what went well, what didn’t, and how to improve going forward.',
    tips: [
      'Use the pre-built task list for setting up and running an AAR meeting.',
      'Prompt your team for input on goals, outcomes, successes, and challenges.',
      'Assign follow-up actions and document lessons learned for future reference.',
      'Customize the template within Asana to suit your team’s workflow and project context.'
    ],
    url: 'https://asana.com/resources/after-action-review-template',
    time: '30–45 min',
    people: 'Team',
    exampleimage: '/public/phases_resources/images/aar_template.png',
    citation: 'Asana resource template'
  },
  {
    title: 'Feedback Survey',
    type: 'Document',
    description: 'A structured method for collecting insights from users, stakeholders, or partners about their experience with a solution, process, or rollout. Helps identify blind spots and surface opportunities for improvement.',
    tips: [
      'Use both quantitative (e.g., rating scales) and qualitative (e.g., open-text) questions for a well-rounded view.',
      'Send surveys at key moments: post-deployment, after training, or during adoption milestones.',
      'Segment responses by role, team, or usage level to tailor your improvements.',
      'Analyze both trends in aggregate scores and rich insights from open comments.'
    ],
    url: 'https://www.forbes.com/councils/forbestechcouncil/2023/03/01/16-effective-strategies-to-collect-feedback-on-new-internal-tech/',
    time: '15–30 min',
    people: 'Individual or team',
    exampleimage: '/public/phases_resources/images/feedback_survey.png',
    citation: 'Forbes Tech Council (2023)'
  }
  ],
justification: `<p><strong>The Evaluation & Optimization phase also belongs to the Actioning step in the Seven-Step Funnel.</strong> It focuses on continuously measuring the impact of implemented initiatives, capturing lessons learned, and refining approaches. This phase keeps your strategy agile and responsive as conditions evolve.</p>`,
    justificationImage: '/phases_resources/images/forecasting_funnel.png',
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
}

.sidebar:hover {
  width: 18rem !important;
}

.space-y-6 {
  padding-top: 4rem; /* Adjust this to lower the menu */
}
</style>