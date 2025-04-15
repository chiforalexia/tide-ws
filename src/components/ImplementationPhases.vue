<script setup lang="ts">
import { ref, computed} from 'vue';

const activePhase = ref(0);
const collapsed = ref(false);
const totalPhases = 6;

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

const progressHeight = computed(() => {
  if (activePhase.value === 0) return '0%';
  return `${(activePhase.value / (totalPhases - 1)) * 100}%`;
});

const phases = ref([
  {
    title: 'Assessment & Readiness',
    description: 'Evaluate the current institutional landscape to determine readiness, identify gaps, and engage key stakeholders.',
    activities: [
      'Assess current infrastructure and capabilities',
      'Identify key stakeholders and decision-makers',
      'Research relevant regulations and policy considerations to ensure legal alignment and risk preparedness'
    ],
    resources: [
      { title: 'Readiness Assessment Template', type: 'Document' },
      { title: 'Stakeholder Mapping Tool', type: 'Interactive' }
    ],
    indicators: [
      'Completed readiness assessment',
      'Stakeholders identified and engaged'
    ],
    tips: [
      'Start with a thorough current state assessment to identify gaps and opportunities.',
      'Engage stakeholders early to build support and gather diverse perspectives.'
    ],
    prerequisites: ['None']
  },
  {
    title: 'Strategic Planning',
    description: 'Define clear goals, success metrics, and create a detailed, actionable roadmap for implementation.',
    activities: [
      'Define clear objectives and success metrics',
      'Develop a comprehensive project plan with timelines'
    ],
    resources: [
      { title: 'Project Planning Guide', type: 'PDF' }
    ],
    indicators: [
      'Documented implementation plan',
      'Timelines established'
    ],
    tips: [
      'Tailor the implementation strategy to reflect institutional context and capacity.',
      'Ensure the plan is flexible enough to adapt to changes during execution.'
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
    description: 'Test and validate the solution in a controlled environment.',
    activities: [
      'Identify a representative pilot setting',
      'Configure test environment',
      'Run pilot and provide support',
      'Gather user feedback',
      'Evaluate pilot outcomes'
    ],
    resources: [
      { title: 'Pilot Plan Template', type: 'Document' },
      { title: 'Training Materials', type: 'PDF' },
      { title: 'Feedback Survey', type: 'Form' }
    ],
    indicators: [
      'Pilot successfully completed',
      'User feedback collected',
      'Improvements identified'
    ],
    tips: [
      'Choose a pilot context with practical constraints similar to the wider rollout',
      'Document all issues and resolutions during the pilot'
    ],
    prerequisites: ['Phase 2 completion']
  },
  {
    title: 'Full Deployment',
    description: 'Roll out the solution across the organization.',
    activities: [
      'Refine and validate deployment plan',
      'Prepare training materials',
      'Execute rollout strategy',
      'Track progress and issues',
      'Activate support channels'
    ],
    resources: [
      { title: 'Deployment Checklist', type: 'Document' },
      { title: 'User Guide', type: 'PDF' },
      { title: 'Support Documentation', type: 'Wiki' }
    ],
    indicators: [
      'Full deployment completed',
      'Users onboarded',
      'Support system established'
    ],
    tips: [
      'Plan for phased rollout to manage risk',
      'Ensure support resources are ready before deployment'
    ],
    prerequisites: ['Phase 3 completion']
  },
  {
    title: 'Evaluation & Optimization',
    description: 'Assess outcomes and implement improvements.',
    activities: [
      'Gather metrics',
      'Analyze performance',
      'Identify improvements',
      'Implement optimizations',
      'Document lessons learned'
    ],
    resources: [
      { title: 'Evaluation Framework', type: 'Template' },
      { title: 'Analytics Dashboard', type: 'Interactive' },
      { title: 'Improvement Log', type: 'Document' }
    ],
    indicators: [
      'Performance metrics collected',
      'Improvements implemented',
      'Success documented'
    ],
    tips: [
      'Establish clear metrics for success',
      'Regular review and optimization cycles'
    ],
    prerequisites: ['Phase 4 completion']
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

            <div class="flex gap-8 items-start">
                <!-- Left side with cards -->
                <div class="sticky top-24 w-5/12">
                    <div class="space-y-8">
                        <div v-for="(phase, index) in phases" :key="index" @click="activePhase = index"
                            class="bg-white rounded-lg p-6 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md"
                            :class="activePhase === index ? 'border-2 border-blue-500' : 'border border-gray-200'">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-lg">
                                    <!-- Clipboard icon -->
                                    <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M9 2h6a1 1 0 011 1v2h-8V3a1 1 0 011-1zM6 6h12v14a2 2 0 01-2 2H8a2 2 0 01-2-2V6z" />
                                    </svg>

                                    <!-- People icon -->
                                    <svg v-else-if="index === 1" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M9 10a4 4 0 100-8 4 4 0 000 8zM23 20v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                    </svg>

                                    <!-- Play icon -->
                                    <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 3l14 9-14 9V3z" />
                                    </svg>

                                    <!-- Chart icon -->
                                    <svg v-else-if="index === 3" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M4 18V5a1 1 0 011-1h2v14H5a1 1 0 01-1-1zm6 0V9a1 1 0 011-1h2v10h-2a1 1 0 01-1-1zm6 0v-6a1 1 0 011-1h2v7h-2a1 1 0 01-1-1z" />
                                    </svg>

                                    <!-- Brain icon -->
                                    <svg v-else-if="index === 4" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" style="transform: translateY(0.5px);">
                                        <path
                                            d="M12 2a7 7 0 00-7 7c0 2.4 1.3 4.3 2.7 6s2.3 3 2.3 4h4c0-1 .9-2.5 2.3-4s2.7-3.6 2.7-6a7 7 0 00-7-7z" />
                                        <path d="M10 21h4" />
                                        <path d="M10.5 22.8h3" />
                                    </svg>
                                </div>
                                <h3 class="font-medium text-lg">{{ phase.title }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

        <!-- Content Area -->
        <div :class="['transition-all duration-300', collapsed ? 'w-full' : 'md:w-2/3']">
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

              <!-- Activities -->
              <div class="mb-8">
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

              <!-- Resources -->
              <div class="mb-8 bg-gray-50 p-6 rounded-xl shadow-lg border border-blue-200">
                <h3 class="text-2xl font-semibold mb-6 text-gray-800">Resources</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div
                    v-for="(resource, i) in phases[activePhase].resources"
                    :key="i"
                    class="bg-white p-6 rounded-xl border hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <h4 class="font-medium text-lg text-gray-800">{{ resource.title }}</h4>
                    <p class="text-sm text-gray-500">{{ resource.type }}</p>
                  </div>
                </div>
              </div>

              <!-- Indicators -->
              <div class="mb-8">
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