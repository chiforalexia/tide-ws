<script setup>
import { ref } from 'vue'

const selectedTrack = ref('All Tracks')

const tracks = [
  'All Tracks',
  'Approval & Initiation',
  'Project Planning & Development',
  'Testing & Quality Assurance',
  'Deployment'
]

const roadmapItems = [
  {
    track: 'Approval & Initiation',
    items: [
      {
        name: 'NLP Engine Core',
        status: 'completed',
        startDate: '2023-Q1',
        endDate: '2023-Q2'
      },
      {
        name: 'Knowledge Base Integration',
        status: 'completed',
        startDate: '2023-Q2',
        endDate: '2023-Q3'
      },
      {
        name: 'Context Awareness',
        status: 'completed',
        startDate: '2023-Q3',
        endDate: '2023-Q4'
      },
      {
        name: 'Autonomous Agents',
        status: 'planned',
        startDate: '2025-Q1',
        endDate: '2025-Q4'
      }
    ]
  },
  {
    track: 'Project Planning & Development',
    items: [
      {
        name: 'Cloud Infrastructure',
        status: 'in progress',
        startDate: '2024-Q1',
        endDate: '2024-Q3'
      },
      {
        name: 'Load Balancing',
        status: 'planned',
        startDate: '2024-Q3',
        endDate: '2024-Q4'
      }
    ]
  },
  {
    track: 'Testing & Quality Assurance',
    items: [
      {
        name: 'User Personalization',
        status: 'in progress',
        startDate: '2024-Q2',
        endDate: '2024-Q3'
      },
      {
        name: 'Multimodal Interactions',
        status: 'in progress',
        startDate: '2024-Q3',
        endDate: '2024-Q4'
      },
      {
        name: 'Real-time Translation',
        status: 'planned',
        startDate: '2025-Q1',
        endDate: '2025-Q2'
      }
    ]
  },
  {
    track: 'Deployment',
    items: [
      {
        name: 'Developer API Platform',
        status: 'in progress',
        startDate: '2024-Q2',
        endDate: '2024-Q3'
      },
      {
        name: 'Analytics Dashboard',
        status: 'planned',
        startDate: '2024-Q3',
        endDate: '2024-Q4'
      },
      {
        name: 'Enterprise Security',
        status: 'planned',
        startDate: '2024-Q4',
        endDate: '2025-Q1'
      },
      {
        name: 'Industry Solutions',
        status: 'planned',
        startDate: '2025-Q1',
        endDate: '2025-Q2'
      }
    ]
  }
]

const filterItems = (track) => {
  selectedTrack.value = track
}

const getStatusColor = (status) => {
  switch(status) {
    case 'completed': return '#B8E3C9'
    case 'in progress': return '#B3E5FF'
    case 'planned': return '#EAECF0'
    default: return '#9CA3AF'
  }
}

const getTrackColor = (track) => {
  switch(track) {
    case 'Approval & Initiation': return '#FFE6D2'
    case 'Project Planning & Development': return '#DFF4FF'
    case 'Testing & Quality Assurance': return '#f6e8fc'
    case 'Deployment': return '#DCF2E5'
    default: return '#6B7280'
  }
}

const getQuarterPosition = (date) => {
  const [year, quarter] = date.split('-')
  const yearOffset = (parseInt(year) - 2023) * 4
  const quarterOffset = parseInt(quarter.substring(1)) - 1
  return yearOffset + quarterOffset
}

const getDurationQuarters = (startDate, endDate) => {
  const startPos = getQuarterPosition(startDate)
  const endPos = getQuarterPosition(endDate)
  return endPos - startPos + 1
}
</script>

<template>
  <div class="roadmap-container">
    <div class="roadmap-header">
      <div class="text-center mb-12">
            <div class="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm mb-4">
                Case Study
            </div>
            <h2 class="text-3xl font-bold mb-4">Roadmap based on Successful Implementations</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
                View a breakdown of how the UvA developed their AI Chatbot.
            </p>
        </div>
    </div>

    <div class="track-filter">
      <span class="filter-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
        Filter by track:
      </span>
      <div class="filter-buttons">
        <button 
          v-for="track in tracks" 
          :key="track"
          :class="['filter-btn', selectedTrack === track ? 'active' : '']"
          @click="filterItems(track)"
        >
          {{ track }}
        </button>
      </div>
    </div>

    <div class="timeline-container">
      <div class="timeline-header">
        <div class="track-column">Track</div>
        <div class="quarters-grid">
          <template v-for="year in ['Year 1', 'Year 3', 'Year 2']" :key="year">
            <div class="year">{{ year }}</div>
            <div v-for="quarter in ['Q1', 'Q2', 'Q3', 'Q4']" :key="year + '-' + quarter" class="quarter">

              {{ quarter }}
            </div>
          </template>
        </div>
      </div>

      <div class="timeline-tracks">
        <template v-for="track in roadmapItems" :key="track.track">
          <div 
            v-if="selectedTrack === 'All Tracks' || selectedTrack === track.track"
            class="track-row"
          >
            <div class="track-name">
              <div class="track-indicator" :style="{ backgroundColor: getTrackColor(track.track) }"></div>
              {{ track.track }}
            </div>
            <div class="track-items">
              <div 
                v-for="item in track.items" 
                :key="item.name"
                class="roadmap-item"
                :style="{
                  '--start-quarter': getQuarterPosition(item.startDate),
                  '--duration-quarters': getDurationQuarters(item.startDate, item.endDate),
                  '--status-color': getStatusColor(item.status),
                  '--track-color': getTrackColor(track.track)
                }"
              >
                <div class="item-content">
                  <span class="item-name">{{ item.name }}</span>
                  <span class="item-status" :class="item.status">{{ item.status }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
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

<style scoped>
.roadmap-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.roadmap-header {
  text-align: center;
  margin-bottom: 3rem;
}

.roadmap-header h1 {
  color: #8B5CF6;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.roadmap-header p {
  color: #6B7280;
}

.track-filter {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4B5563;
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: none;
  background: #F3F4F6;
  color: #4B5563;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  background: #E5E7EB;
}

.filter-btn.active {
  background: #8B5CF6;
  color: white;
}

.timeline-container {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding-bottom: 2rem;
}

.timeline-header {
  display: grid;
  grid-template-columns: 200px 1fr;
  border-bottom: 1px solid #E5E7EB;
  padding: 1rem;
}

.quarters-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.5rem;
  align-items: center;
}

.year {
  grid-column: span 4;
  text-align: center;
  font-weight: 600;
  color: #4B5563;
}

.quarter {
  text-align: center;
  color: #6B7280;
  font-size: 0.875rem;
}

.track-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 1rem;
  border-bottom: 1px solid #E5E7EB;
}

.track-name {
  font-weight: 600;
  color: #4B5563;
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
  width: auto;
  min-width: 50px;
  height: 30px;
  background: var(--track-color);
  opacity: 1;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: #1F2937;
  font-size: 0.875rem;
  box-sizing: border-box;
  z-index: 1;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.roadmap-item {
  position: relative;
  left: calc(var(--start-quarter) * (100% / 12) + 4px);
  width: auto;
  min-width: 50px;
  max-width: 300px;
  height: 40px;
  background: var(--track-color);
  opacity: 1;
  border-radius: 0.5rem;
  padding: 0.25rem 0.25rem;
  color: #1F2937;
  font-size: 0.875rem;
  box-sizing: border-box;
  z-index: 1;
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.roadmap-item:hover {
  filter: brightness(85%);
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
}

.item-status {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  overflow: hidden; 
  text-overflow: ellipsis;
}

.item-status.completed {
  background-color: #DCF2E5;
  color: #008939; 
}

.item-status.in-progress {
  background-color: #DFF4FF;
  color: #0077C8;
}

.item-status.planned {
  background-color: #F4F6F8;
  color: #5E6873;
}

.status-legend {
  padding: 1.5rem;
  border-top: 1px solid #E5E7EB;
  margin-top: 1rem;
}

.status-legend h3 {
  font-size: 0.875rem;
  color: #4B5563;
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
  color: #6B7280;
  font-size: 0.875rem;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.legend-dot.completed {
  background-color: #22C55E;
}

.legend-dot.in-progress {
  background-color: #3B82F6;
}

.legend-dot.planned {
  background-color: #9CA3AF;
}

</style>