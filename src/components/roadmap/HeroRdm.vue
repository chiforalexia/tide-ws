 <!-- Roadmap Hero section -->
<template>
  <div class="relative overflow-hidden">
    <!-- Wave Wrapper -->
    <div class="wave-wrapper relative w-full">
      <svg
        class="wave-svg absolute left-0 right-0 top-0 w-full"
        viewBox="0 90 1200 100"
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
          font-size="38"
          font-family="'Special Gothic Expanded One', sans-serif"
          font-weight=""
        >
          <textPath href="#road-path-final" startOffset="10%">
            Implementation Roadmap
          </textPath>
        </text>
      </svg>

    </div>
  </div>
</template>

<style scoped>
.wave-svg {
  width: 100%;
  height: 100%;
}

.road-bg {
  fill: #DBDAD9;
}


.wave-wrapper {
  width: 100%;
  height: 150px;
}
</style>