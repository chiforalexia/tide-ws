<template>
  <div>
    <!-- Header -->
    <h1 class="text-5xl font-extrabold text-center mb-2 text-black-800">
      Integration Roadmap
    </h1>

    <!-- Paragraph -->
    <p class="text-xl text-gray-600 max-w-3xl mx-auto mt-6 text-center leading-relaxed">
      With the SURF Tech Trends Report in hand, you’ve taken the first step: <span class="font-bold"> gaining insight into the signals shaping the future of education and research.</span>  These aren’t instructions but an invitation to reflect, translate, and act.
    </p>

    <!-- Blue subtitle at the bottom -->
    <div class="text-lg text-blue-600 m-8 text-center">
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
                        <svg class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" stroke-width="2.2"
                          viewBox="0 0 28 28" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 9h16M6 14h16M6 19h16" />
                        </svg>
                        <h3 class="text-xl font-semibold text-gray-800">Key Activities</h3>
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
                          <ul class="pl-12 space-y-2 list-disc text-gray-600">
                            <li v-for="(detail, j) in activity.details" :key="j" v-html="detail"></li>
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
                      <p class="text-gray-700">{{ phases[activePhase].stakeholderEngagement }}</p>
                    </div>
                  </div>

                  <!-- Resources -->
                  <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-blue-200 h-fit">
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
    description: 'Now it’s time to move from observing trends to making sense of them. The goal isn’t to predict what will happen, but to surface a range of possibilities and begin imagining futures that inform smarter, more resilient strategies. The goal is to discover possibilities, imagine futures, and lay the groundwork for focused strategic planning.',
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
        activity: 'Brainstorm using a Futures Wheel with the Tech Trends in Mind',
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
    stakeholderEngagement: ['Engage a diverse group from the outset. Cross-functional participation strengthens the quality of insights and builds ownership for future strategy.',
  'Early stakeholder mapping ensures you know who to involve, inform, or consult as the process moves forward.'],
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
    citation: 'SURF. (2023). SURF Tech Trends 2023. https://www.surf.nl/en/tech-trends'
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
    citation: ''
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
    citation: 'Inayatullah, S. (2023). The Futures Triangle: Origins and Iterations. World Futures Review, 15(2–4), 112–121. https://doi.org/10.1177/19467567231203162'
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
    exampleimage: '/public/phases_resources/images/pestle_analysis.png',
    citation: 'Aguilar, F. J. (1967). Scanning the business environment. Macmillan. https://bac-lac.on.worldcat.org/oclc/301680659'
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
    justification: "This phase marks the shift from simply noticing trends to actively making sense of them. Starting here moves your organization from awareness to actionable foresight. It’s about exploring how signals of change intersect with your institution’s mission, culture, and operational realities. Through this process you will uncover opportunities and tensions worth addressing. This roadmap will help you create a foundation for informed, future-ready decisions.",
justificationImage: "",
  },

  {
  title: 'Strategic Planning',
  subtitle: 'From foresight to action — translating scenarios into strategic options, innovation opportunities, and implementation plans.',
  
  justification: `The Strategic Planning phase is the second phase because it brings foresight back to an organisation’s context. It is about identifying opportunities and threats from your scenarios and assessing an organisation’s capability gaps to act on them. This phase ensures your strategic response is both ambitious and achievable within the operational reality. Rather than offering a rigid formula, this phase invites you to collectively explore which pathways are most relevant, ambitious, and feasible for your organization.`,

  description: ['From foresight to action: translating scenarios into strategic options, innovation opportunities, and implementation plans.',
"Note: Each tool suggested here is placed where it typically adds value, but you know your organization’s context best. Feel free to revisit, adapt, or reorder tools as needed to fit your usual planning structure."],

  whatYouAreDoing: `Now that you’ve explored plausible future scenarios for your institution, this phase focuses on translating those insights into actionable, strategic priorities. This phase is about shaping a bold, future-fit innovation strategy that aligns with your institutional vision, navigates uncertainties, and prepares you for multiple plausible futures.`,

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
        'Decision-Making Frameworks (e.g., Scoring, MoSCoW) — structured prioritization of options.',
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

  finalNote: `These key steps are intended as conversation starters, not rigid steps. Every institution integrates change differently. What matters is creating a plan that works for your people, aligns with your culture, and builds on your existing strengths. Use what resonates, and adapt the rest.`,
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
  }],
  },
  {
  title: 'Pilot Experimentation',
  description: `Build fast. Learn faster. Make innovation real. 
Launch your pilot. Build the systems, teams, and habits that will drive real-world impact while learning and adapting as you go.`,

  justification: `The Pilot Experimentation phase moves selected initiatives from concept to practice. We recognize that how, and when you pilot new initiatives depends on available resources, staffing, and institutional priorities. The steps below are intended as inspiration and conversation starters to shape your own approach.`,

  activities: [
    {
      activity: 'Form a Pilot Team',
      details: [
        'Bring together a cross-functional group and consider defining clear roles, responsibilities, and timelines.',
        'Use simple planning tools (such as a Project Plan Template) that suit your team\'s working style and available capacity.'
      ],
      tools: [
        'Project Plan Template'
      ]
    },
    {
      activity: 'Adopt a Flexible, Learning-Focused Approach',
      details: [
        'Stay adaptable, whether through agile methods, phased rollouts, or informal iteration.',
        'The goal is to prioritize learning over perfection.'
      ],
      tools: [
        'Agile Sprint Framework',
        'Iteration Feedback Loops'
      ]
    },
    {
      activity: 'Develop Shared, Goal-Oriented Metrics',
      details: [
        'Develop goal-oriented evaluation metrics and systems for regular feedback.'
      ],
      tools: [
        'Evaluation Metrics Framework',
        'Feedback Loops'
      ]
    },
    {
      activity: 'Connect with Peers',
      details: [
        'Where possible, invite other institutions, networks, or sector partners into conversations about similar pilots.',
        'Share experiences, challenges, and approaches for mutual learning.'
      ],
      tools: [
        'Peer Learning Sessions',
        'Knowledge Exchange Workshops'
      ]
    }
  ],

  stakeholderEngagement: `Stakeholders become co-pilots. Engage frontline users in prototyping, feedback loops, and iterative design. Their insights could drive success, and build long-term ownership.`,

  indicators: [
    'A clear, resourced, and context-appropriate pilot plan is in place.',
    'Your pilot is live and actively supported.',
    'Feedback is being gathered.',
    'Lessons are shared internally, and where possible, with peer institutions.'
  ],

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
    justificationImage: "",
},

{
  title: 'Full Deployment',
  justification: `The Full Deployment phase marks a significant step in moving from successful pilot to broader institutional integration. Every institution has its own rhythm and way of embedding change, so while these steps offer a helpful starting framework, you’ll know best how to shape them within your own culture, priorities, and decision-making processes.`,

  description: `From Pilots to Practice: Embedding Innovation.
This phase is about rolling out the solution across the organization with consistency, structure, and strong support systems.`,

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
    'Users feel supported and well-informed — measured through whatever feedback or check-in practices your organization values.',
    'Minimal disruption occurs, with issues addressed quickly and transparently.',
    'Performance and usage data show active adoption.'
  ],

  stakeholderEngagement: `Maintain Clear Communication Channels.
Ensure everyone knows where to get help or give feedback.

Share Wins and Updates.
Use internal comms, showcases, or quick demos to maintain excitement and transparency.`, 
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
    justificationImage: '/phases_resources/images/forecasting_funnel.png',
},
{
  title: 'Evaluation & Optimization',
  justification: "This phase offers a structure for reflecting on the outcomes of your initiatives while also keeping an eye on long-term alignment with your organizational vision and ongoing future readiness. These steps aren’t meant to prescribe exactly how you should proceed. Rather, they serve as a conversation starter to help you consider how evaluation, improvement, and foresight could be approached within your context.",
  description: `Improve. Scale. Repeat. Once deployed, it's time to evaluate impact, adapt based on feedback, and build a foundation for future improvement.`,
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
</style>