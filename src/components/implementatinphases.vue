<script setup lang="ts">
import { ref, computed} from 'vue';

const activePhase = ref(0);
const collapsed = ref(false);
const totalPhases = 6;

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

const phases = ref([
{
  title: 'Exploration',
  description: 'Scan the external environment and assess internal readiness to identify trends, capabilities, and stakeholder engagement opportunities.',
  activities: [
    'Scan the external environment for emerging trends and disruptions using tools like PESTEL, horizon scanning, and scenario planning',
    'Explore insights from sources such as the SURF Tech Trends Report and contextualize them for your institution',
    'Conduct a readiness/maturity assessment using innovation models (see Tidd & Bessant, Ch. 3)',
    'Review institutional infrastructure, culture, and leadership alignment',
    'Map key stakeholders and influencers to understand engagement needs and governance structures',
    'Identify existing challenges and gaps in current innovation approaches'
  ],
  resources: [
    { title: 'SURF Tech Trends Report', type: 'Document' },
    { title: 'Innovation Maturity Models (Tidd & Bessant, Ch. 3)', type: 'Document' },
    { title: 'PESTEL Analysis', type: 'Framework' },
    { title: 'SWOT, Horizon Scanning, Scenario Planning', type: 'Framework' },
    { title: 'Readiness Assessment Template', type: 'Document' },
    { title: 'Stakeholder Mapping Tool', type: 'Interactive' },
    { title: 'Foresight Framework - Context Maps (p. 60)', type: 'Perspective' },
    { title: 'Foresight Framework - Progression Curves (p. 70)', type: 'Perspective' },
    { title: 'Foresight Framework - Janus Cones (p. 82)', type: 'Perspective' }
  ],
  indicators: [
    'Clear mapping of external trends and internal capabilities',
    'Stakeholders identified and engaged early',
    'Challenges and opportunities documented with supporting evidence',
    'Readiness evaluation completed'
  ],
  tips: [
    'Use both problem-push (unmet needs) and solution-pull (emerging opportunities) strategies to guide exploration.',
    'Visual tools like Janus Cones can help frame long-term implications of current trends.',
    'Align findings with user needs and institutional strategy to build a strong case for innovation.'
  ],
  prerequisites: ['None']
},

{
  title: 'Strategic Planning',
  description: 'Evaluate innovation options, prioritize projects, and develop a strategic, scalable plan aligned with institutional vision and capabilities.',
  activities: [
    'Assess innovation ideas for feasibility, impact, risk, and alignment with institutional priorities',
    'Apply tools like cost-impact analysis and risk assessment frameworks',
    'Select and prioritize innovation projects using tools like the Innovation Portfolio Matrix',
    'Ensure alignment with organizational vision, capacity, and resources',
    'Engage leadership, IT, legal, and policy stakeholders for strategic validation and long-term planning',
    'Sharpen and communicate a compelling innovation vision using Foresight Framework tools'
  ],
  resources: [
    { title: 'Innovation Portfolio Matrix (Tidd & Bessant, Ch. 4)', type: 'Framework' },
    { title: 'Cost-Impact Mapping (Tidd & Bessant, Ch. 5)', type: 'Framework' },
    { title: 'Decision-Making Frameworks (Scoring Matrices, MoSCoW)', type: 'Framework' },
    { title: 'Strategic Alignment Rubrics', type: 'Document' },
    { title: 'Foresight Framework - White Spots (p. 130)', type: 'Vision Tool' },
    { title: 'Foresight Framework - Paper Mockups (p. 140)', type: 'Vision Tool' },
    { title: 'Foresight Framework - Dark Horse Prototypes (p. 150)', type: 'Vision Tool' },
    { title: 'Foresight Framework - Change Paths (p. 154)', type: 'Team Tool' },
    { title: 'Foresight Framework - Buddy Checks (p. 174)', type: 'Team Tool' },
    { title: 'Foresight Framework - VOICE Stars (p. 184)', type: 'Team Tool' },
    { title: 'Foresight Framework - Crowd Clovers (p. 194)', type: 'Team Tool' }
  ],
  indicators: [
    'Prioritized list of innovation projects with strategic fit',
    'Balanced portfolio including both incremental and radical innovations',
    'Leadership buy-in for selected innovation directions',
    'Shared and communicated innovation vision'
  ],
  tips: [
    'Use portfolio thinking to manage risk and balance innovation types.',
    'Engage diverse stakeholders early to ensure broad support and uncover blind spots.',
    'Align innovation planning with institutional mission, long-term goals, and capacity for change.'
  ],
  prerequisites: ['Assessment & Readiness']
},
  {
    title: 'Stakeholder Engagement',
    description: 'Build support and alignment across the organization.',
    activities: [
      'Identify key stakeholders',
      'Develop communication strategy',
      'Conduct stakeholder workshops',
      'Gather feedback and requirements',
      'Create engagement timeline'
    ],
    resources: [
      { title: 'Stakeholder Matrix', type: 'Template' },
      { title: 'Communication Plan', type: 'Document' },
      { title: 'Feedback Forms', type: 'Interactive' }
    ],
    indicators: [
      'Stakeholder buy-in achieved',
      'Communication plan established',
      'Requirements documented'
    ],
    tips: [
      'Engage stakeholders early and often throughout the process',
      'Document all feedback and decisions for future reference'
    ],
    prerequisites: ['Phase 1 completion']
  },
  {
  title: 'Pilot Implementation',
  description: 'Turn plans into action by testing and validating your innovation in a real-world setting, while building capacity for broader implementation.',
  activities: [
    'Establish an implementation team with clear roles, responsibilities, and support structures',
    'Develop a robust implementation plan outlining activities, deadlines, responsibilities, and success indicators',
    'Allocate necessary resources including personnel, funding, tools, and technologies',
    'Pilot and prototype the solution in a controlled setting, balancing design fidelity with real-world flexibility',
    'Coordinate across departments and teams to ensure seamless execution',
    'Apply change management practices to communicate, manage resistance, and build buy-in throughout the pilot'
  ],
  resources: [
    { title: 'Implementation Planning Template', type: 'Document' },
    { title: 'Agile Sprint Board / Gantt Chart', type: 'Tool' },
    { title: 'Pilot Evaluation Metrics', type: 'Framework' },
    { title: 'Fidelity-Flexibility Tracker', type: 'Tool' },
    { title: 'Change Management Toolkit', type: 'Toolkit' },
    { title: 'Training Materials', type: 'PDF' },
    { title: 'Feedback Survey', type: 'Form' }
  ],
  indicators: [
    'Implementation team established with defined roles and responsibilities',
    'Pilot plan documented and aligned with strategic objectives',
    'Pilot successfully initiated with ongoing tracking and support',
    'Feedback loops in place to capture insights and enable iterative improvements'
  ],
  tips: [
    'Start small and iterate—don’t overplan the first step.',
    'Ensure visible leadership support to drive momentum and credibility.',
    'Capture and document quick wins to build early enthusiasm and buy-in.',
    'Use retrospectives and pulse surveys to learn and adapt throughout the pilot phase.'
  ],
  prerequisites: ['Phase 2 completion']
},
{
  title: 'Full Deployment',
  description: 'Transition from implementation to sustained deployment, ensuring the solution is fully integrated and functioning across the organization.',
  activities: [
    'Refine and validate the deployment plan based on insights gained from the implementation phase',
    'Prepare and finalize training materials to ensure users are equipped with the skills for successful adoption',
    'Execute the full-scale rollout strategy, ensuring logistics such as timing, resources, and coordination are in place',
    'Track progress and address issues through ongoing monitoring and regular feedback loops',
    'Activate dedicated support channels to provide technical assistance, coaching, and resources for resolving challenges promptly'
  ],
  resources: [
    { title: 'Deployment Checklist', type: 'Document' },
    { title: 'User Guide', type: 'PDF' },
    { title: 'Support Documentation', type: 'Wiki' }
  ],
  indicators: [
    'Full deployment successfully completed',
    'Users successfully onboarded and engaged',
    'Support system and channels firmly established and operational'
  ],
  tips: [
    'Consider a phased rollout to manage risks and ensure smoother transitions during deployment.',
    'Ensure support resources, such as technical assistance and feedback mechanisms, are fully prepared before beginning full deployment.',
    'Be proactive in addressing challenges such as training gaps, resource constraints, or scheduling conflicts to maintain momentum.'
  ],
  prerequisites: ['Phase 4 completion']
},

{
  title: 'Evaluation & Optimization',
  description: 'Assess the performance of the deployed solution, gather feedback, and optimize processes for continuous improvement and future innovation efforts.',
  activities: [
    'Gather key performance indicators (KPIs), user feedback, and market reception data to evaluate the solution’s impact',
    'Conduct a detailed performance analysis, comparing outcomes with expected goals to identify strengths and areas for improvement',
    'Identify areas for improvement based on data and insights, and pinpoint opportunities to refine or optimize the solution',
    'Implement necessary optimizations, ensuring that improvements are effectively integrated and aligned with organizational objectives',
    'Document lessons learned, best practices, and recommendations to inform future innovation efforts'
  ],
  resources: [
    { title: 'Evaluation Framework (Template)', type: 'Template' },
    { title: 'Analytics Dashboard (Interactive)', type: 'Tool' },
    { title: 'Improvement Log', type: 'Document' }
  ],
  indicators: [
    'Key performance metrics successfully collected and analyzed',
    'Improvements made based on data-driven insights and feedback',
    'Key lessons learned and successes documented for future reference'
  ],
  tips: [
    'Establish clear success metrics early and ensure they align with overall organizational goals.',
    'Set up regular review cycles and feedback loops to continuously optimize the solution.',
    'Document key insights and improvements to build a knowledge base for future innovations and projects.'
  ],
  prerequisites: ['Phase 5 completion']
}
]);

</script>

<template>
  <div class="min-h-screen bg-gray-50 relative">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-extrabold text-center mb-16 text-gray-800">
        Implementation Phases
        <div class="text-xl text-blue-600 mt-2">Click to explore.</div>
      </h1>

      <div class="flex flex-col md:flex-row gap-10">
        <!-- Sidebar -->
        <div :class="['transition-all duration-300 relative', collapsed ? 'w-20' : 'md:w-1/3']">
          <!-- Toggle Button -->
          <div class="absolute -top-4 left-3 z-40">
            <button
              @click="toggleSidebar"
              class="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
            >
              <span v-if="!collapsed">✕</span>
              <span v-else>☰</span>
            </button>
          </div>

          <!-- Phase Buttons -->
          <div class="space-y-6 pt-12">
            <div v-for="(phase, index) in phases" :key="index" class="relative">
              <button
                @click="activePhase = index"
                :class="[
                  'transition-all duration-300 flex items-center px-5 py-6 rounded-xl cursor-pointer shadow-md border w-3/4 hover:scale-[1.02] hover:shadow-lg',
                  activePhase === index ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-200' : 'bg-white border-gray-200',
                  collapsed ? 'justify-center w-14 h-14 p-0 w-full rounded-full' : ''
                ]"
              >
                <div class="flex items-center gap-3 w-full">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 rounded-full" :class="activePhase >= index ? 'bg-blue-500' : 'bg-gray-300'" />
                    <div class="text-blue-600 font-semibold qtext-sm">{{ index + 1 }}</div>
                  </div>
                  <span v-if="!collapsed" class="text-sm font-semibold text-gray-800 truncate">
                    {{ phase.title }}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div :class="['transition-all duration-300', collapsed ? 'w-full' : 'md:w-full']">
          <transition name="fade" mode="out-in">
            <div
              :key="activePhase"
              id="phase-content"
              class="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl"
            >
              <h2 class="text-3xl font-bold mb-4 text-blue-700">
                {{ phases[activePhase].title }}
              </h2>
              <p class="text-gray-600 mb-8 text-lg">{{ phases[activePhase].description }}</p>
              <div class="grid md:grid-cols-3 gap-8">
                
                <!-- Left column: Activities, Indicators, Tips -->
                <div class="md:col-span-2 space-y-10">
                    <!-- Activities -->
                    <div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">Key Activities</h3>
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
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">Success Indicators</h3>
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

                    <!-- Tips -->
                    <div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">Implementation Tips</h3>
                    <ul class="space-y-3">
                        <li
                        v-for="(tip, i) in phases[activePhase].tips"
                        :key="i"
                        class="flex items-start gap-3"
                        >
                        <span class="text-blue-500 text-xl leading-none">•</span>
                        <span class="text-gray-700">{{ tip }}</span>
                        </li>
                    </ul>
                    </div>
                </div>

                <!-- Right column: Resources -->
                <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-blue-200 h-fit">
                    <h3 class="text-2xl font-semibold mb-6 text-gray-800">Resources</h3>
                    <div class="space-y-4">
                    <div
                        v-for="(resource, i) in phases[activePhase].resources"
                        :key="i"
                        class="bg-white p-4 rounded-lg border hover:shadow transition duration-300"
                    >
                        <h4 class="font-medium text-gray-800">{{ resource.title }}</h4>
                        <p class="text-sm text-gray-500">{{ resource.type }}</p>
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
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
