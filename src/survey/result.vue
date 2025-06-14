<!-- Survey results page -->
<template>
  <div class="max-w-3xl mx-auto py-32 px-4 md:px-6">
    <div class="space-y-8">
      <!-- Header Section -->
      <div class="flex flex-col items-center text-center space-y-4">
        <h1 class="text-4xl font-bold">
          <span style="color: #e67300">Tech Trends</span>
          Results
        </h1>
        <p class="text-gray-600 text-2xl max-w-xl">
          <span v-if="readiness === 'watch'">Monitor these technologies for potential future impact.</span>
          <span v-else-if="readiness === 'plan'">Begin experimenting with these trends and technologies.</span>
          <span v-else-if="readiness === 'act'">Technologies ready for implementation in production environments.</span>
          <span v-else>Readiness level description not available.</span>
        </p>
      </div>

      <!-- Results summary card -->
      <div
        class="bg-white shadow border border-gray-200 rounded-lg overflow-hidden"
      >
        <div
          class="bg-gray-50 border-b px-6 py-4 flex justify-between items-center"
        >
          <h3 class="text-lg font-medium">Your Results Summary</h3>
        </div>

        <div class="p-6 space-y-6">
          <!-- Timeline and values -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="flex items-center p-4 rounded-lg bg-gray-50 border border-blue-600 shadow-lg"
            >
              <img
                src="/planning.svg"
                alt="Planning Horizon Icon"
                class="w-5 h-5 text-blue-600 mr-3"
              />
              <div>
                <p class="text-sm text-black">Planning Horizon</p>
                <p class="font-semibold text-gray-500">{{ size }} years</p>
              </div>
            </div>

            <div
              class="flex items-center p-4 rounded-lg bg-gray-50 border surf-green-dark shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text surf-green-dark mr-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
              <div>
                <p class="text-sm text-black">Priority Value</p>
                <p class="font-semibold text-gray-500">{{ value }}</p>
              </div>
            </div>
          </div>

          <hr class="border-gray-200" />

          <!-- Chapter Summary -->
          <div
            class="mt-6 bg-gray-50 border border-purple-700 shadow-lg p-5 rounded-lg flex items-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-purple-700 mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <div>
              <h2 class="text-xl font-semibold mb-3">Included Chapters</h2>
              <p class="text-gray-500">
                Your custom report includes insights from the following
                chapters:
              </p>
              <ul
                class="mt-3 list-disc list-inside text-gray-500 font-semibold"
              >
                <li v-for="chapter in selectedChapters" :key="chapter">
                  {{ chapter }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Download Button -->
        <div
          v-if="selectedPages.length"
          class="bg-gray-50 px-6 py-4 border-t text-right"
        >
          <button @click="Download" class="download-btn">
            Download Custom Report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PDFDocument } from "pdf-lib";
import { trends } from "./trends.js";

const route = useRoute();

const size = route.query.size || "unknown";
const value = route.query.values || "unknown";
const readiness = route.query.readiness || "watch";

const selectedPages = (route.query.pages || "")
  .split(",")
  .map((p) => parseInt(p, 10))
  .filter((p) => !isNaN(p));

const selectedSubvalues = computed(() => {
  return route.query.values ? route.query.values.split(", ") : [];
});

// unique chapters based on the selected pages
const selectedChapters = computed(() => {
  const chapterSet = new Set();
  trends.forEach((trend) => {
    if (trend.pages.some((p) => selectedPages.includes(p))) {
      chapterSet.add(trend.chapter);
    }
  });
  return Array.from(chapterSet).sort();
});

const loadPdf = async () => {
  const pdfUrl = "/2023TechTrendsReport.pdf";
  const response = await fetch(pdfUrl);
  if (!response.ok) throw new Error("PDF fetch failed");
  const pdfBytes = await response.arrayBuffer();
  return await PDFDocument.load(pdfBytes);
};

async function Download() {
  try {
    if (!selectedPages.length) {
      alert("No pages to download.");
      return;
    }

    const pdfDoc = await loadPdf();
    const newPdfDoc = await PDFDocument.create();

    for (const pageIndex of selectedPages) {
      const [page] = await newPdfDoc.copyPages(pdfDoc, [pageIndex - 1]); // pages are 0-indexed
      newPdfDoc.addPage(page);
    }

    const pdfBytes = await newPdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "custom-tech-trends-report.pdf";
    link.click();

    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Download error:", err);
    alert("Something went wrong downloading the report.");
  }
}
</script>

<style>
.surf-green-dark {
  border-color: #006731;
  color: #006731;
}
</style>
