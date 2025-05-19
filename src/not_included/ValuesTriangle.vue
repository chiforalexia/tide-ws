<template>
    <svg :viewBox="viewBox" class="w-full h-auto">
      <!-- Hexagon background -->
      <polygon :points="hexPoints" fill="#f5f5f5" stroke="#ccc" stroke-width="1" />
  
      <!-- Sections (Autonomy, Justice, Humanity) -->
      <template v-for="(section, index) in sections" :key="section.name">
        <path
          :d="sectorPath(index)"
          :fill="section.color"
          fill-opacity="0.2"
        />
        <text
          :x="section.labelPos.x"
          :y="section.labelPos.y"
          class="text-center font-bold"
          text-anchor="middle"
          fill="#333"
          font-size="14"
        >
          {{ section.name }}
        </text>
  
        <!-- Subvalue bubbles -->
        <g v-for="(value, vIdx) in section.values" :key="vIdx">
          <circle
            :cx="getBubblePosition(index, vIdx).x"
            :cy="getBubblePosition(index, vIdx).y"
            r="16"
            :fill="isSelected(section.name, value) ? section.color : '#e0e0e0'"
            :stroke="isSelected(section.name, value) ? '#000' : 'none'"
            stroke-width="1"
          />
          <text
            :x="getBubblePosition(index, vIdx).x"
            :y="getBubblePosition(index, vIdx).y + 4"
            font-size="10"
            text-anchor="middle"
            fill="#333"
          >
            {{ value }}
          </text>
        </g>
      </template>
    </svg>
  </template>
  
  <script setup>
  const props = defineProps({
    selectedValues: {
      type: Object,
      required: true,
    },
  });
  
  const viewBox = "0 0 400 400";
  const center = { x: 200, y: 200 };
  const radius = 150;
  
  // Define your sectors and subvalues
  const sections = [
    {
      name: "Autonomy",
      color: "#f97316",
      values: [
      'Self-determination of pupils and students',
        'Safeguarding of private life and personal data',
        'Independence of education',
        'Freedom of education',
      ],
      labelPos: { x: 200, y: 50 },
    },
    {
      name: "Justice",
      color: "#1e40af",
      values: [
      'Inclusivity',
    'Equality',
    'Integrity',
      ],
      labelPos: { x: 350, y: 200 },
    },
    {
      name: "Humanity",
      color: "#15803d",
      values: [
      'Respect',
    'Health, well-being',
    'Safety',
    'Personal development',
    'Social cohesion',
    'Meaningful contact'
      ],
      labelPos: { x: 50, y: 200 },
    },
  ];
  
  // Draw the 6-point hexagon
  function hexPoints() {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const x = center.x + radius * Math.cos(angle);
      const y = center.y + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  }
  
  // Each sector is 120 degrees
  function sectorPath(index) {
    const startAngle = (2 * Math.PI / 3) * index;
    const endAngle = startAngle + (2 * Math.PI / 3);
  
    const x1 = center.x + radius * Math.cos(startAngle);
    const y1 = center.y + radius * Math.sin(startAngle);
    const x2 = center.x + radius * Math.cos(endAngle);
    const y2 = center.y + radius * Math.sin(endAngle);
  
    return `M ${center.x},${center.y} L ${x1},${y1} A ${radius},${radius} 0 0,1 ${x2},${y2} Z`;
  }
  
  // Position bubbles evenly inside a sector
  function getBubblePosition(sectionIndex, valueIndex) {
    const angleOffset = (2 * Math.PI / 3) * sectionIndex + Math.PI / 3;
    const spread = 20 + valueIndex * 25;
    return {
      x: center.x + (spread * Math.cos(angleOffset)),
      y: center.y + (spread * Math.sin(angleOffset)),
    };
  }
  
  function isSelected(section, value) {
    return props.selectedValues?.[section.toLowerCase()]?.includes(value);
  }
  </script>
  
  <style scoped>
  svg {
    max-width: 600px;
    display: block;
    margin: auto;
  }
  </style>
  