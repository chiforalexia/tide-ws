<template>
  <div class="bg-gray-200 relative overflow-hidden">
    <!-- Wave Wrapper -->
    <div class="wave-wrapper relative h-[250px] w-full">
      <svg
        class="wave-svg absolute left-0 right-0 top-0 h-full w-full"
        viewBox="0 0 1200 250"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="road-path-final"
            d="M0,160 C200,110 400,210 600,160 S1000,110 1200,160 L1200,250 L0,250 Z"
          />
        </defs>

        <!-- Wave fill -->
        <use href="#road-path-final" class="road-bg" />

        <!-- Title bent along wave -->
        <text
          fill="#1D4ED8"
          font-size="32"
          font-family="'Special Gothic Expanded One', sans-serif"
          font-weight="bold"
        >
          <textPath href="#road-path-final" startOffset="3%">
            Integration Roadmap
          </textPath>
        </text>
      </svg>

      <!-- Subtitle: now includes both text blocks -->
      <div
        class="absolute bottom-2 right-4 sm:right-8 text-white-50 text-right max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
      >
        <p class="text-white text-[8px] sm:text-xs md:text-sm leading-tight space-y-1">
          With the SURF Tech Trends Report in hand, you’ve taken the first step:
          <span class="font-bold">
            gaining insight into the signals shaping the future of education and research.
          </span>
          These aren’t instructions but an invitation to reflect, translate, and act.<br />
          <span class="block mt-1">
            You’re not expected to follow a fixed path, but to create one, using these phases as support.
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wave-svg {
  width: 100%;
  height: 100%;
}

.road-bg {
  fill: #000000;
}

.wave-wrapper {
  width: 100%;
  height: 250px;
}
</style>