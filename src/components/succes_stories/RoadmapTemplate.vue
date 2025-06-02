 <!-- Roadmap example component -->
<template>
  <div class="roadmap-container">
    <div class="roadmap-header">
      <div class="text-center mb-12">
        <div class="bubble">
          Case Study
        </div>
        <h2 class="text-3xl font-bold mb-4">Roadmap of Successful 
          <span style= "color: #E67300">Implementation</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Below you can find a detailed overview of the timeline and steps taken
          during the UvA AI Chat's development.
        </p>
      </div>
    </div>


    <!-- Mobile dropdown -->
    <div class="md:hidden mb-6">
      <div class="bg-white rounded-lg border shadow-sm p-4">
        <label
          for="track-select"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Filter by Track
        </label>
        <div class="relative">
          <select
            id="track-select"
            v-model="selectedTrack"
            class="block w-full bg-white border border-gray-300 rounded-lg py-2 px-4 pr-10 text-base text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            <option v-for="track in tracks" :key="track" :value="track">
              {{ track }}
            </option>
          </select>
          <svg
            class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Filter option -->
    <div class="w-full hidden md:flex flex-wrap items-center gap-4 mb-6">
      <div class="flex items-center gap-2 text-gray-600 font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polygon
            points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
          ></polygon>
        </svg>
        Filter by track:
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="track in tracks"
          :key="track"
          :class="[
            'filter-btn',
            selectedTrack === track ? 'active' : '',
            track === 'All Tracks' ? 'all-tracks-btn' : '',
          ]"
          @click="filterItems(track)"
        >
          {{ track }}
        </button>
      </div>
    </div>

    <div class="timeline-container">
      <div class="timeline-scroll-wrapper">
        <div class="three-quarter-line"></div>
        <div class="timeline-header">
          <div class="track-column">Track</div>
          <div class="quarters-grid">
            <div class="year">Year 1</div>
            <div class="year">Year 2</div>
            <div class="year">Year 3</div>
          </div>
        </div>

        <div class="timeline-tracks">
          <template v-for="track in roadmapItems" :key="track.track">
            <div
              v-if="
                selectedTrack === 'All Tracks' || selectedTrack === track.track
              "
              class="track-row"
            >
              <div class="track-name">
                <div
                  class="track-indicator"
                  :style="{ backgroundColor: getTrackColor(track.track) }"
                ></div>
                {{ track.track }}
              </div>
              <div class="track-items">
                <div
                  v-for="item in track.items"
                  :key="item.name"
                  class="roadmap-item"
                  :style="{
                    '--start-quarter': getQuarterPosition(item.startDate),
                    '--duration-quarters': getDurationQuarters(
                      item.startDate,
                      item.endDate,
                    ),
                    '--status-color': getStatusColor(item.status),
                    '--track-color': getTrackColor(track.track),
                  }"
                >
                  <div class="item-content">
                    <span class="item-name">{{ item.name }}</span>
                    <span class="item-status" :class="item.status">{{
                      item.status
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="one-quarter-line"></div>
              <div class="half-line"></div>
              <div class="three-quarter-line"></div>
            </div>
          </template>
        </div>
      </div>

      <div class="status-legend">
        <h3>Status Legend</h3>
        <div class="legend-items">
          <div class="legend-item">
            <span class="legend-dot completed"></span>
            <span>Completed</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot in-progress"></span>
            <span>In Progress</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot planned"></span>
            <span>Planned</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTrack = ref("All Tracks");

const tracks = [
  "All Tracks",
  "Exploration",
  "Strategic Planning",
  "Pilot Implementation",
  "Full Deployment",
  "Evaluation & Optimization",
];

const roadmapItems = [
  {
    track: "Exploration",
    items: [
      {
        name: "Initial LLM Testing",
        status: "completed",
        startDate: "2023-Q1",
        endDate: "2023-Q2",
      },
      {
        name: "Project Plan",
        status: "completed",
        startDate: "2023-Q2",
        endDate: "2023-Q3",
      },
      {
        name: "Identify Key Stakeholders",
        status: "completed",
        startDate: "2023-Q3",
        endDate: "2023-Q4",
      },
      {
        name: "Conduct Risk Assessments",
        status: "completed",
        startDate: "2025-Q1",
        endDate: "2025-Q4",
      },
    ],
  },
  {
    track: "Strategic Planning",
    items: [
      {
        name: "Stakeholder Buy-in",
        status: "completed",
        startDate: "2024-Q1",
        endDate: "2024-Q3",
      },
      {
        name: "Create Budget Proposal",
        status: "in-progress",
        startDate: "2024-Q3",
        endDate: "2024-Q4",
      },
    ],
  },
  {
    track: "Pilot Implementation",
    items: [
      {
        name: "Determine Representative Pilot Setting",
        status: "completed",
        startDate: "2024-Q2",
        endDate: "2024-Q3",
      },
      {
        name: "Run Pilot",
        status: "in-progress",
        startDate: "2024-Q3",
        endDate: "2024-Q4",
      },
      {
        name: "Evaluate Pilot Feedback",
        status: "planned",
        startDate: "2025-Q1",
        endDate: "2025-Q2",
      },
    ],
  },
  {
    track: "Full Deployment",
    items: [
      {
        name: "Secure Departmental Buy-in",
        status: "planned",
        startDate: "2024-Q2",
        endDate: "2024-Q3",
      },
      {
        name: "Establish Maintenance & Support ",
        status: "planned",
        startDate: "2024-Q3",
        endDate: "2024-Q4",
      },
      {
        name: "Monitor Usage",
        status: "planned",
        startDate: "2024-Q4",
        endDate: "2025-Q1",
      },
    ],
  },
  {
    track: "Evaluation & Optimization",
    items: [],
  },
];

const filterItems = (track) => {
  selectedTrack.value = track;
};

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "#B8E3C9";
    case "in-progress":
      return "#FFF3B0";
    case "planned":
      return "#EAECF0";
    default:
      return "#9CA3AF";
  }
};

const getTrackColor = (track) => {
  switch (track) {
    case "Exploration":
      return "#DCF2E5";
    case "Strategic Planning":
      return "#DCF2E5";
    case "Pilot Implementation":
      return "#DFF4FF";
    case "Full Deployment":
      return "#DFF4FF";
    case "Evaluation & Optimization":
      return "#FFE6D2";
    default:
      return "#6B7280";
  }
};

const getQuarterPosition = (date) => {
  const [year, quarter] = date.split("-");
  const yearOffset = (parseInt(year) - 2023) * 4;
  const quarterOffset = parseInt(quarter.substring(1)) - 1;
  return yearOffset + quarterOffset;
};

const getDurationQuarters = (startDate, endDate) => {
  const startPos = getQuarterPosition(startDate);
  const endPos = getQuarterPosition(endDate);
  return endPos - startPos + 1;
};
</script>

<style scoped>
.roadmap-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline-scroll-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.timeline-scroll-wrapper > * {
  min-width: 768px;
}

.track-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  font-weight: 500;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: #f3f4f6;
  color: #4b5563;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.2s;
}

.filter-btn:hover {
  background: #e5e7eb;
}

.filter-btn.active {
  background: #1d4ed8;
  color: white;
}

.track-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
}

.timeline-header {
  display: grid;
  grid-template-columns: 200px 1fr;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem;
}

.quarters-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.5rem;
  align-items: center;
  position: relative;
}

.year {
  grid-column: span 4;
  text-align: center;
  font-weight: 600;
  color: #4b5563;
}

.track-column {
  border-right: 1px solid #e5e7eb;
}

.track-name {
  font-weight: 600;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-right: 1px solid #e5e7eb;
}

.track-indicator {
  width: 4px;
  height: 16px;
  border-radius: 2px;
}

.track-items {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: auto;
  padding: 0.5rem;
  flex-grow: 1;
}

.roadmap-item {
  position: relative;
  left: calc(var(--start-quarter) * (100% / 12) + 4px);
  width: fit-content;
  max-width: 370px;
  height: 40px;
  background: var(--track-color);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: #1f2937;
  font-size: 0.875rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
}

.roadmap-item:hover {
  filter: brightness(85%);
}

.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.item-name {
  font-weight: 500;
  padding-right: 10px;
}

.item-status {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  white-space: nowrap;
}

.item-status.completed {
  background-color: #e7f9c6;
  color: #008939;
}

.item-status.in-progress {
  background-color: #fcf8db;
  color: #0077c8;
}

.item-status.planned {
  background-color: #f4f6f8;
  color: #5e6873;
}

.status-legend {
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1rem;
}

.status-legend h3 {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1rem;
}

.legend-items {
  display: flex;
  gap: 2rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.legend-dot.completed {
  background-color: #008939;
}

.legend-dot.in-progress {
  background-color: #0077c8;
}

.legend-dot.planned {
  background-color: #eaecf0;
}
</style>
