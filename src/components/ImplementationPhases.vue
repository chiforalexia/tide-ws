<script setup lang="ts">
import { ref, computed } from 'vue';

const activePhase = ref(0);
const totalPhases = 5;

const progressHeight = computed(() => {
  if (activePhase.value === 0) return '0%';
  // Calculate progress based on active phase (0-4)
  // For 5 phases, each phase represents 25% of the total distance between first and last dot
  return `${(activePhase.value / (totalPhases - 1)) * 100}%`;
});

const phases = [
    {
        title: 'Assessment & Planning',
        description: 'Evaluate institutional readiness and develop a comprehensive implementation strategy.',
        activities: [
            'Assess current infrastructure and capabilities',
            'Identify key stakeholders and decision-makers',
            'Define clear objectives and success metrics',
            'Develop a comprehensive project plan with timelines',
            'Research relevant regulations and policy considerations to ensure legal alignment and risk preparedness'
        ],
        resources: [
            { title: 'Readiness Assessment Template', type: 'Document' },
            { title: 'Stakeholder Mapping Tool', type: 'Interactive' },
            { title: 'Project Planning Guide', type: 'PDF' }
        ],
        indicators: [
            'Completed readiness assessment',
            'Documented implementation plan',
            'Timelines established'
        ],
        tips: [
            'Start with a thorough current state assessment to identify gaps and opportunities.',
            'Tailor the implementation strategy to reflect institutional context and capacity.'
        ],
        prerequisites: ['None']
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
            'Select pilot group',
            'Configure test environment',
            'Train pilot users',
            'Collect feedback',
            'Analyze results'
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
            'Choose a diverse pilot group for comprehensive feedback',
            'Document all issues and resolutions during the pilot'
        ],
        prerequisites: ['Phase 2 completion']
    },
    {
        title: 'Full Deployment',
        description: 'Roll out the solution across the organization.',
        activities: [
            'Finalize deployment plan',
            'Prepare training materials',
            'Execute rollout strategy',
            'Monitor progress',
            'Provide support'
        ],
        resources: [
            { title: 'Deployment Checklist', type: 'Document' },
            { title: 'User Guide', type: 'PDF' },
            { title: 'Support Documentation', type: 'Wiki' }
        ],
        indicators: [
            'Full deployment completed',
            'Users trained',
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
];
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <h1 class="text-3xl font-bold text-center mb-12">Implementation Phases</h1>

            <div class="flex flex-col md:flex-row gap-8">
                <!-- Timeline (Sticky Left Column with Progress Bar) -->
                <div class="md:w-1/3">
                    <div class="sticky top-4 relative">
                        <!-- Vertical Progress Line -->
                        <div class="absolute right-[2px] top-[52px] bottom-[52px] w-1 bg-gray-200">
                            <div class="absolute top-0 w-full bg-blue-500 transition-all duration-500"
                                :style="{ height: progressHeight }">
                            </div>
                        </div>

                        <!-- Cards with aligned dots -->
                        <div class="space-y-8">
                            <div v-for="(phase, index) in phases" :key="index" class="relative flex items-center">
                                <!-- Card -->
                                <div @click="activePhase = index"
                                    class="bg-white rounded-lg p-6 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md w-full mr-6"
                                    :class="activePhase === index ? 'border-2 border-blue-500' : 'border border-gray-200'">
                                    <div class="flex items-center gap-4">
                                        <div
                                            class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-lg">
                                            {{ index + 1 }}
                                        </div>
                                        <h3 class="font-medium text-lg">{{ phase.title }}</h3>
                                    </div>
                                </div>

                                <!-- Dot -->
                                <div class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                                    <div class="w-4 h-4 rounded-full"
                                        :class="activePhase >= index ? 'bg-blue-500' : 'bg-gray-300'">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Phase Details (Right Side) -->
                <div class="md:w-2/3">
                    <transition name="fade" mode="out-in">
                        <div :key="activePhase" class="bg-white rounded-lg p-8 shadow-lg">
                            <h2 class="text-2xl font-bold mb-4">{{ phases[activePhase].title }}</h2>
                            <p class="text-gray-600 mb-8">{{ phases[activePhase].description }}</p>

                            <!-- Activities -->
                            <div class="mb-8">
                                <h3 class="text-lg font-semibold mb-4">Key Activities</h3>
                                <ul class="space-y-4">
                                    <li v-for="(activity, index) in phases[activePhase].activities" :key="index"
                                        class="flex items-start gap-3">
                                        <span
                                            class="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm">
                                            {{ index + 1 }}
                                        </span>
                                        <span class="text-gray-700">{{ activity }}</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Resources -->
                            <div class="mb-8">
                                <h3 class="text-lg font-semibold mb-4">Resources</h3>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div v-for="(resource, index) in phases[activePhase].resources" :key="index"
                                        class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                        <h4 class="font-medium">{{ resource.title }}</h4>
                                        <p class="text-sm text-gray-500">{{ resource.type }}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Success Indicators -->
                            <div class="mb-8">
                                <h3 class="text-lg font-semibold mb-4">Success Indicators</h3>
                                <ul class="space-y-3">
                                    <li v-for="(indicator, index) in phases[activePhase].indicators" :key="index"
                                        class="flex items-center gap-3">
                                        <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span class="text-gray-700">{{ indicator }}</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Tips -->
                            <div>
                                <h3 class="text-lg font-semibold mb-4">Implementation Tips</h3>
                                <ul class="space-y-3">
                                    <li v-for="(tip, index) in phases[activePhase].tips" :key="index"
                                        class="flex items-start gap-3">
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

.phase-card {
    transition: all 0.3s ease;
}

.phase-card:hover {
    transform: translateY(-2px);
}
</style>
