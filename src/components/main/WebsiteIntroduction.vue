<template>
  <section
    class="relative bg-transparent flex items-center justify-center flex-col px-6"
  >
    <div
      class="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      <!-- Text Content -->
      <div class="flex-1 max-w-xl text-left lg:text-left space-y-6">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          From Insight to Implementation:
          <span class="block primary-text"
            >Bridging Innovation and Adoption</span
          >
        </h1>
        <p class="text-black text-lg leading-relaxed">
          You've heard of the SURF Tech Trends Report — now it's time to act.
          <br />
          This site is your practical supplement to the SURF report: a living
          roadmap designed for institutional decision-makers including:
        </p>
        <ul class="space-y-2 text-left text-gray-700 list-disc list-inside">
          <li>
            A survey to tailor the SURF Tech Trend Report to your own needs
          </li>
          <li>
            An implementation roadmap grounded in real-world implementation
          </li>
          <li>Success stories from institutions already leading change</li>
          <li>
            Toolkits, guidance, and support to help your organization adopt
          </li>
        </ul>
      </div>

      <!-- Image + Download Button -->
      <div class="flex-1 flex flex-col items-center space-y-4">
        <img
          src="/public/report_cover.png"
          alt="Tech Trends Report Cover"
          class="w-full max-w-md rounded-xl shadow-lg"
        />
        <a href="https://www.surf.nl/en/tech-trends" class="bubble">
          Download Full Report
        </a>
      </div>
    </div>

    <!-- CTA Bubble
    <div class="mt-12">
      <a href="#chapters" class="inline-flex items-center animate-bounce bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition">
        <span class="mr-2">Translate your vision into real impact</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div> -->
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
