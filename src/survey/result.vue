<template>
  <div class="max-w-3xl mx-auto py-32 px-4 md:px-6">
    <div class="space-y-8">
      <!-- Header Section -->
      <div class="flex flex-col items-center text-center space-y-4">
        <h1 class="text-3xl font-bold">Tech Trend Results</h1>

        <p class="text-gray-600 max-w-xl">
          <span v-if="readiness === 'watch'">Monitor these technologies for potential future impact.</span>
          <span v-else-if="readiness === 'plan'">Begin testing these technologies in controlled environments.</span>
          <span v-else-if="readiness === 'act'">Technologies ready for implementation in production environments.</span>
          <span v-else>Readiness level description not available.</span>
        </p>
      </div>

      <!-- Results Card -->
      <div class="bg-white shadow border border-gray-200 rounded-lg overflow-hidden">
        <div class="bg-gray-50 border-b px-6 py-4 flex justify-between items-center">
          <h3 class="text-lg font-medium">Your Results Summary</h3>
  
        </div>

        <div class="p-6 space-y-6">
          <!-- Size and Priority -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-center p-4 rounded-lg bg-gray-50 border">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <div>
                <p class="text-sm text-gray-500">Institution Size</p>
                <p class="font-semibold">{{ size }}</p>
              </div>
            </div>

            <div class="flex items-center p-4 rounded-lg bg-gray-50 border">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2a4 4 0 018 0v2m-4-4a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              <div>
                <p class="text-sm text-gray-500">Priority Value</p>
                <p class="font-semibold">{{ value }}</p>
              </div>
            </div>
          </div>

          <hr class="border-gray-200" />
          <!-- Selected Pages -->
          <ValuesTriangle :selectedValues="selectedSubvalues" />
  
        </div>

        <!-- Download Button -->
        <div v-if="selectedPages.length" class="bg-gray-50 px-6 py-4 border-t text-right">
          <button
            @click="Download"
            class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-medium transition"
          >
            Download Custom Report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import { useRoute } from 'vue-router'
  import { PDFDocument } from 'pdf-lib'
  import ValuesTriangle from './ValuesTriangle.vue'
  
  const route = useRoute()
  
  const size = route.query.size || 'unknown'
  const value = route.query.values || 'unknown'
  const readiness = route.query.readiness || 'watch'
  const selectedPages = (route.query.pages || '')
    .split(',')
    .map(p => parseInt(p, 10))
    .filter(p => !isNaN(p))
  
  const loadPdf = async () => {
    const pdfUrl = '/2023TechTrendsReport.pdf' // PDF path in public folder
    const response = await fetch(pdfUrl)
    if (!response.ok) throw new Error('PDF fetch failed')
    const pdfBytes = await response.arrayBuffer()
    return await PDFDocument.load(pdfBytes)
  }
  
  async function Download() {
    try {
      if (!selectedPages.length) {
        alert('No pages to download.')
        return
      }
  
      const pdfDoc = await loadPdf()
      const newPdfDoc = await PDFDocument.create()
  
      for (const pageIndex of selectedPages) {
        const [page] = await newPdfDoc.copyPages(pdfDoc, [pageIndex - 1]) // adjust to 0-indexed
        newPdfDoc.addPage(page)
      }
  
      const pdfBytes = await newPdfDoc.save()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
  
      const link = document.createElement('a')
      link.href = url
      link.download = 'custom-tech-trends-report.pdf'
      link.click()
  
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Download error:', err)
      alert('Something went wrong downloading the report.')
    }
  }
  </script>
  