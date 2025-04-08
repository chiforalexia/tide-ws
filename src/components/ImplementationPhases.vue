<script setup lang="ts">
import { ref } from 'vue';

const activePhase = ref(0);
const touchStart = ref(null);
const sectionRef = ref(null);

const handleTouchStart = (e: TouchEvent) => {
    touchStart.value = e.touches[0].clientX;
};

const scrollToPhaseTop = () => {
    if (window.matchMedia('(max-width: 768px)').matches && sectionRef.value) {
        const offsetTop = sectionRef.value.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
};

const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStart.value) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.value - touchEnd;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            activePhase.value = (activePhase.value + 1) % phases.length;
        } else {
            activePhase.value = (activePhase.value - 1 + phases.length) % phases.length;
        }
        scrollToPhaseTop();
    }

    touchStart.value = null;
};

const handlePhaseSelected = (index: number) => {
    activePhase.value = index;
    scrollToPhaseTop();
};

const phases = [
    {
        title: 'Assessment & Planning',
        description: 'Evaluate institutional readiness and develop a comprehensive implementation strategy.',
        activities: [
            'Assess current infrastructure and capabilities',
            'Identify key stakeholders and decision-makers',
            'Define clear objectives and success metrics',
            'Develop a comprehensive project plan with timelines',
            'Conduct a risk assessment and mitigation strategy'
        ],
        resources: [
            { title: 'Readiness Assessment Template', type: 'Document' },
            { title: 'Stakeholder Mapping Tool', type: 'Interactive' },
            { title: 'Project Planning Guide', type: 'PDF' }
        ],
        indicators: [
            'Completed readiness assessment',
            'Documented implementation plan',
            'Resource allocation secured'
        ],
        tips: [
            'Start with a thorough current state assessment to identify gaps and opportunities.',
            'Align implementation goals with broader institutional strategic objectives for better buy-in.'
        ],
        prerequisites: ['None'],
        color: 'bg-green-50'
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
        prerequisites: ['Phase 1 completion'],
        color: 'bg-green-50'
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
        prerequisites: ['Phase 2 completion'],
        color: 'bg-blue-50'
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
        prerequisites: ['Phase 3 completion'],
        color: 'bg-blue-50'
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
        prerequisites: ['Phase 4 completion'],
        color: 'bg-orange-50'
    }
];
</script>

<template>
    <section ref="sectionRef" class="relative mt-4 pt-24 py-16 px-4 max-w-7xl mx-auto">
        <!-- Title -->
        <h1 class="text-3xl font-bold text-center mb-12">The Five Phases of Successful Implementation</h1>

        <!-- Visual Roadmap -->
        <div class="implementation-container mb-16 relative">
            <!-- Main vertical line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

            <!-- Phases -->
            <div class="relative space-y-2">
                <div v-for="(phase, index) in phases" :key="index"
                    class="relative flex items-center"
                    :class="index % 2 === 0 ? 'justify-start' : 'justify-end'">
                    <!-- Connector -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-200"
                        :class="index % 2 === 0 ? 'translate-x-0' : '-translate-x-full'"></div>

                    <!-- Phase marker -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>

                    <!-- Phase card -->
                    <div class="w-5/12 phase-card p-4 rounded-lg shadow-sm transition-all duration-300 cursor-pointer"
                        :class="[
                            phase.color,
                            { 'ml-8': index % 2 === 0, 'mr-8': index % 2 === 1 }
                        ]"
                        @click="handlePhaseSelected(index)">
                        <div class="flex items-start justify-between mb-2">
                            <span class="bg-white/80 backdrop-blur-sm text-sm font-medium px-2 py-1 rounded">
                                Phase {{ index + 1 }}
                            </span>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">{{ phase.title }}</h3>
                        <p class="text-sm text-gray-600">{{ phase.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Phase Navigation Styled as a Pill Card -->
        <div ref="navigationRef"
            class="transition-all duration-300 sticky top-16 z-40 bg-white/95 backdrop-blur-sm md:static">
            <div class="max-w-6xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm transition p-3 sm:px-6 sm:py-4"
                @touchstart="handleTouchStart" @touchend="handleTouchEnd">
                <div class="flex items-center justify-between gap-2 sm:gap-4">
                    <!-- Prev Arrow -->
                    <button @click="()=> { activePhase = (activePhase - 1 + phases.length) % phases.length; scrollToPhaseTop(); }"
                        class="text-gray-600 hover:text-blue-600 transition p-1" aria-label="Previous Phase">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2.5"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <!-- Title + Progress Bar -->
                    <div class="flex flex-col items-center flex-1 px-2 sm:px-4">
                        <h2 class="text-center text-sm sm:text-base md:text-lg font-medium">
                            {{ phases[activePhase].title }}
                        </h2>
                        <div class="w-full max-w-md h-1.5 bg-blue-100 rounded-full overflow-hidden mt-2">
                            <div class="h-full bg-blue-500 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-pulse transition-all duration-500"
                                :style="{ width: ((activePhase + 1) / phases.length * 100) + '%' }"></div>
                        </div>
                    </div>

                    <!-- Next Arrow -->
                    <button @click="() => { activePhase = (activePhase + 1) % phases.length; scrollToPhaseTop() }"
                        class="text-gray-600 hover:text-blue-600 transition p-1" aria-label="Next Phase">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2.5"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Content Area -->
        <div class="px-2 sm:px-8 py-4 sm:py-6 mt-6" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
            <div class="max-w-6xl mx-auto">
                <transition name="fade" mode="out-in">
                    <div :key="activePhase" class="bg-white rounded-lg p-4 sm:p-6">
                        <!-- Title and Description -->
                        <h2 class="text-lg sm:text-xl font-semibold mb-2">Phase {{ activePhase + 1 }} of {{
                            phases.length }}</h2>
                        <p class="text-gray-600 mb-6 sm:mb-8">{{ phases[activePhase].description }}</p>

                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            <!-- Left Column -->
                            <div class="lg:col-span-2">
                                <!-- Key Activities -->
                                <h3 class="font-semibold mb-4">Key Activities</h3>
                                <ol class="space-y-3 mb-6 sm:mb-8">
                                    <li v-for="(activity, index) in phases[activePhase].activities" :key="index"
                                        class="flex items-start gap-3">
                                        <span
                                            class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                                            {{ index + 1 }}
                                        </span>
                                        <span class="text-gray-700">{{ activity }}</span>
                                    </li>
                                </ol>

                                <!-- Implementation Tips -->
                                <h3 class="font-semibold mb-4">Implementation Tips</h3>
                                <ul class="space-y-2 mb-6 sm:mb-8">
                                    <li v-for="(tip, index) in phases[activePhase].tips" :key="index"
                                        class="text-gray-700">
                                        • {{ tip }}
                                    </li>
                                </ul>

                                <!-- Prerequisites -->
                                <h3 class="font-semibold mb-4">Prerequisites for this phase</h3>
                                <ul class="text-gray-700">
                                    <li v-for="(prerequisite, index) in phases[activePhase].prerequisites" :key="index">
                                        {{ prerequisite }}
                                    </li>
                                </ul>
                            </div>

                            <!-- Right Column -->
                            <div class="space-y-6">
                                <!-- Resources & Tools -->
                                <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm transition">
                                    <h3 class="font-semibold mb-2">Resources & Tools</h3>
                                    <p class="text-sm text-gray-600 mb-4">Supporting materials for this phase</p>
                                    <div class="space-y-3">
                                        <div v-for="(resource, index) in phases[activePhase].resources" :key="index"
                                            class="bg-white rounded-lg p-3 sm:p-4 flex items-center gap-3 border border-gray-200 shadow-sm transition">
                                            <div class="w-8 h-8 rounded bg-blue-50 flex items-center justify-center">
                                                <svg class="w-4 h-4 text-blue-600" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                    <path fill-rule="evenodd"
                                                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div class="font-medium text-sm">{{ resource.title }}</div>
                                                <div class="text-xs text-gray-500">{{ resource.type }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Success Indicators -->
                                <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm transition">
                                    <h3 class="font-semibold mb-2">Success Indicators</h3>
                                    <p class="text-sm text-gray-600 mb-4">How to measure progress</p>
                                    <div class="space-y-2">
                                        <div v-for="(indicator, index) in phases[activePhase].indicators" :key="index"
                                            class="flex items-center gap-2">
                                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span class="text-sm text-gray-700">{{ indicator }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
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

.implementation-container {
    min-height: 800px;
    padding: 2rem 0;
}
</style>