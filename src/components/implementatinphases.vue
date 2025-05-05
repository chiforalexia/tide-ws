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
    description: `Look outward. Look inward. Start shaping what’s next. Uncover the trends shaping your environment—and assess your institutional readiness to innovate. This phase is about scanning, sense-making, and stakeholder discovery.`,
    activities: [
      'Explore emerging trends and disruptions with tools like PESTEL, Scenario Planning, and Horizon Scanning.',
      'Localize insights from the SURF Tech Trends Report to your institutional context.',
      'Evaluate internal readiness using innovation maturity models and cultural diagnostics.',
      'Map stakeholders to identify who needs to be engaged—and when.'
    ],
    stakeholderEngagement: `Use the Stakeholder Mapping Tool to identify influence patterns and engagement priorities. Bring diverse voices into exploration workshops to build momentum and trust from the start.`,
    resources: [
  {
    title: 'SURF Tech Trends Report',
    type: 'Document',
    description: 'This report provides an in-depth analysis of emerging technologies. Use it to spark discussions on future possibilities and inform strategic decisions.',
    tips: [
      'Leverage this as a conversation starter during strategic meetings or innovation sessions.',
      'Use it to identify new technology opportunities and assess how they could impact your industry in the next 3-5 years.',
      'Regularly review and share it with leadership teams to ensure your organization stays aligned with global trends.'
    ],
    url: '/resources/surf-tech-trends.pdf'
  },
  {
    title: 'Innovation Maturity Models (Tidd & Bessant, Ch. 3)',
    type: 'Document',
    description: 'This tool helps evaluate how ready your organization is for innovation and change. Use it to assess strengths and weaknesses before launching new projects.',
    tips: [
      'Apply it before launching new initiatives to understand where your organization stands and what needs improvement.',
      'Use it to create an innovation action plan with targeted improvements in leadership, culture, and processes.',
      'Revisit periodically to measure progress and realign your innovation strategies.'
    ],
    url: '/resources/maturity-models.pdf'
  },
  {
    title: 'PESTEL Analysis',
    type: 'Framework',
    tips: [
      'Conduct a PESTEL analysis at the start of a new strategic planning cycle.',
      'Integrate this tool into your risk management processes to anticipate potential challenges.',
      'Use it alongside SWOT analysis for a more comprehensive view of both internal and external factors.'
    ],
    url: '/resources/pestel-analysis.pdf'
  },
  {
    title: 'SWOT, Horizon Scanning, Scenario Planning',
    type: 'Framework',
    description: 'These frameworks are designed to surface external signals and pressures, enabling you to plan for multiple future scenarios. Great for brainstorming and visioning in group settings.',
    tips: [
      'Use SWOT to assess internal capabilities and external threats.',
      'Conduct Horizon Scanning regularly to identify emerging trends and weak signals that could disrupt your strategy.',
      'Implement Scenario Planning workshops to help teams think creatively about various future possibilities and develop flexible strategies.'
    ],
    url: '/resources/scenario-tools.pdf'
  },
  {
    title: 'Readiness Assessment Template',
    type: 'Document',
    description: 'This template helps assess your organization’s preparedness for change across key dimensions. Ideal for planning major organizational shifts or new initiatives.',
    tips: [
      'Use this template when planning any major transformation, whether adopting new technology or shifting organizational culture.',
      'Gather input from key stakeholders to get a comprehensive view of organizational readiness.',
      'Reassess readiness periodically as part of your change management strategy.'
    ],
    url: '/resources/readiness-assessment-template.pdf'
  },
  {
    title: 'Stakeholder Mapping Tool',
    type: 'Interactive',
    description: 'This tool helps you map stakeholder relationships and their engagement pathways. Essential for ensuring alignment and fostering effective communication during complex projects.',
    tips: [
      'Use it in the early stages of project planning to identify and categorize key stakeholders.',
      'Regularly update the map as stakeholder dynamics evolve, ensuring continuous engagement and buy-in.',
      'Leverage it for risk management by identifying stakeholders who could be sources of support or opposition.'
    ],
    url: '/resources/stakeholder-mapping-tool.html'
  },
  {
    title: 'Foresight Framework – Context Maps / Progression Curves / Janus Cones',
    type: 'Perspective',
    description: 'These perspective tools allow you to map broad trends and visualize how signals might evolve into future scenarios. Great for making informed long-term strategic decisions.',
    tips: [
      'Use Context Maps to visualize how various signals (social, technological, environmental) interconnect and influence each other.',
      'Apply Progression Curves to anticipate the development trajectory of trends or technologies.',
      'Use Janus Cones during scenario planning to explore alternative futures and the range of possible outcomes for your business.'
    ],
    url: '/resources/foresight-framework-tools.pdf'
  }
],

    indicators: [
      'You’ve mapped external and internal landscapes',
      'You’ve built a baseline of institutional readiness',
      'Key stakeholders are informed and ready to co-design the future'
    ],
    justification: `We chose the "Exploration" phase because it's a critical step in understanding the core problem and aligning stakeholders around initial solutions. This phase corresponds to steps 1 and 2 in the "Seven-Step Forecasting Funnel", where we define the problem and set the scope for the solution.`,
    justificationImage: '/public/forecasting_funnel.png',
  },
  {
    title: 'Strategic Planning',
description: `From insight to action. Choose your future—then plan for it. Build a bold innovation strategy that aligns with your vision and resources. Prioritize projects, rehearse future challenges, and set the stage for execution.`,
activities: [
  'Use Cost-Impact Mapping and the Innovation Portfolio Matrix to assess and prioritize opportunities.',
  'Align efforts to institutional vision and strategic priorities.',
  'Sharpen your innovation story with foresight tools like White Spots and VOICE Stars.',
  'Engage diverse stakeholders in scenario rehearsals and decision-making.'
],
stakeholderEngagement: `Use tools like Change Paths and Buddy Checks to rehearse scenarios with leadership and cross-functional teams. This builds commitment and aligns diverse priorities early.`,
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
    title: 'Decision-Making Frameworks (Scoring, MoSCoW)',
    type: 'Framework',
    description: 'These frameworks provide structured ways to prioritize options—by scoring, classifying (e.g., Must-have, Should-have), or weighting criteria. They help teams make decisions objectively, especially under uncertainty or tension.',
    tips: [
      'Use during cross-team sessions to reduce bias and create shared accountability.',
      'Agree on decision criteria in advance to avoid anchoring on pet projects.',
      'Combine quantitative and qualitative scoring to capture both logic and intuition.'
    ],
    url: '/resources/decision-frameworks.pdf'
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
indicators: [
  'Innovation projects are prioritized with clear value and strategic fit',
  'Leaders are aligned around a shared innovation roadmap',
  'Teams are energized by a clear, compelling narrative of where you\'re headed'
],
justification: `Explanation .....`,
    justificationImage: '/public/forecasting_funnel.png',
  },
  {
  title: 'Pilot Implementation',
  description: `Build fast. Learn faster. Make innovation real. Launch your pilot. Build the systems, teams, and habits that will drive real-world impact—while learning and adapting as you go.`,
  activities: [
    'Form an implementation team and use the Planning Template to define timelines, roles, and resources.',
    'Use the Fidelity-Flexibility Tracker to balance design goals with real-world conditions.',
    'Apply agile approaches to stay flexible, learn quickly, and iterate fast.',
    'Use change management strategies to keep teams engaged and resistance low.'
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
  indicators: [
    'Your pilot is live and actively supported',
    'Feedback is flowing and being used to adapt in real-time',
    'You’re building visible momentum and buy-in'
  ],
justification: `Explanation .....`,
    justificationImage: '/public/forecasting_funnel.png',
},

{
  title: 'Full Deployment',
  description: `Scale success. Anchor innovation in the system. Refine, formalize, and roll out your solution organization-wide. Focus on coordination, consistency, and strong support systems.`,
  activities: [
    'Finalize deployment plans based on pilot insights',
    'Train staff and empower users with tailored support',
    'Ensure logistics, resources, and technical support are in place',
    'Track adoption and performance continuously'
  ],
  stakeholderEngagement: `Create moments of recognition. Celebrate champions, highlight user stories, and maintain open channels for feedback and troubleshooting.`,
  resources: [
    {
      title: 'Deployment Checklist',
      type: 'Document',
      description: 'A detailed list to ensure nothing critical is missed when scaling from pilot to organization-wide rollout. Keeps teams aligned and confident during complex transitions.',
      tips: [
        'Use as a living document—update in real-time as deployment evolves.',
        'Assign clear owners for each checklist item to ensure accountability.',
        'Include both technical and cultural readiness items (e.g., team sentiment, narrative alignment).'
      ],
      url: '/resources/deployment-checklist.pdf'
    },
    {
      title: 'User Guide',
      type: 'PDF',
      description: 'Step-by-step guidance tailored to different user roles. Reduces confusion and supports confident adoption across diverse stakeholders.',
      tips: [
        'Create separate guides for power users, frontline staff, and supervisors.',
        'Use screenshots and plain language to make the guide intuitive.',
        'Offer it both as a PDF and embedded in support systems for easy access.'
      ],
      url: '/resources/user-guide.pdf'
    },
    {
      title: 'Support Documentation',
      type: 'Wiki',
      description: 'A centralized and searchable knowledge base for FAQs, troubleshooting, and training updates. Critical for sustaining smooth operations post-launch.',
      tips: [
        'Assign a documentation owner to keep content updated and relevant.',
        'Include a feedback option so users can flag unclear or outdated entries.',
        'Use analytics to see which pages are most visited—this reveals where users need help.'
      ],
      url: '/resources/support-docs.html'
    }
  ],
  indicators: [
    'Your solution is embedded across teams and departments',
    'Users are confident, trained, and supported',
    'Systems are in place for smooth long-term operation'
  ], 
justification: `Explanation .....`,
    justificationImage: '/public/forecasting_funnel.png',
},
{
  title: 'Evaluation & Optimization',
  description: `Improve. Scale. Repeat. Use evidence to optimize performance and drive continuous improvement. Document learnings to support institutional learning and future foresight.`,
  activities: [
    'Evaluate outcomes with defined KPIs and dashboards',
    'Gather feedback from users, stakeholders, and partners',
    'Identify quick optimizations—and larger pivots where needed',
    'Document lessons learned to strengthen your innovation capacity'
  ],
  stakeholderEngagement: `Bring your community back into the loop. Share what you have learned, invite critique, and celebrate progress. This is how you build a culture of innovation.`,
  resources: [
    {
      title: 'Evaluation Framework Template',
      type: 'Template',
      description: 'A guided structure to assess pilot or project results—covering inputs, activities, outcomes, and systemic impact. Designed to support evidence-based reflection and reporting.',
      tips: [
        'Co-design evaluation questions with users and funders to ensure relevance.',
        'Include unintended outcomes—both positive and negative—for richer insight.',
        'Use in both formal reviews and informal team debriefs.'
      ],
      url: '/resources/evaluation-framework-template.pdf'
    },
    {
      title: 'Analytics Dashboard',
      type: 'Interactive Tool',
      description: 'Real-time visualizations of key metrics, adoption trends, and engagement levels. Supports continuous insight and agile responses.',
      tips: [
        'Use dashboard alerts to flag emerging risks or performance dips.',
        'Segment data by user group or region to identify localized patterns.',
        'Share dashboard snapshots in regular team updates to encourage data-driven decisions.'
      ],
      url: '/resources/analytics-dashboard.html'
    },
    {
      title: 'Improvement Log',
      type: 'Document',
      description: 'A structured space to record changes, the reasons behind them, and what happened as a result. Vital for organizational learning and accountability.',
      tips: [
        'Log both big changes and small tweaks—micro-adjustments can have ripple effects.',
        'Use the log in retrospectives to reflect on decision-making quality.',
        'Review periodically to spot recurring issues or successful strategies.'
      ],
      url: '/resources/improvement-log.pdf'
    }
  ],
  indicators: [
    'You have made data-driven improvements',
    'You are capturing and sharing lessons learned',
    'Your institution is building innovation muscle for the next cycle'
  ],
justification: `Explanation .....`,
    justificationImage: '/public/forecasting_funnel.png',
}
]);
</script>

<template>
  <div>
    <!-- Header -->
    <h1 class="text-5xl font-extrabold text-center mb-2 text-black-800">
      Implementation Phases
      <div class="text-xl text-grey-200 mt-3">
        We invite you to translate the tech trends for your institution
      </div>
      <div class="text-2xl text-blue-600 mt-2">Click to explore</div>
    </h1>

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
                    class="ml-3 text-gray-500 hover:text-gray-700 cursor-pointer text-xl focus:outline-none"
                    title="Why this phase matters?"
                  >
                    ?
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
                      <p>{{ phases[activePhase].justification }}</p>
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
                    <!-- Activities -->
                    <div>
                      <div class="flex items-center gap-2 mb-4">
                        <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2"
                          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M9 12h6M9 16h6M9 8h6" />
                        </svg>
                        <h3 class="text-xl font-semibold text-gray-800">Key Activities</h3>
                      </div>
                      <ul class="space-y-4">
                        <li
                          v-for="(activity, i) in phases[activePhase].activities"
                          :key="i"
                          class="flex items-start gap-3"
                        >
                          <span
                            class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold"
                          >
                            {{ i + 1 }}
                          </span>
                          <span class="text-gray-700">{{ activity }}</span>
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
                          <path d="M17 20h5V4H2v16h5m10-10l-4 4-4-4" />
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
                        <path d="M4 4v16h16V4H4zm8 2v12M6 10h12" />
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