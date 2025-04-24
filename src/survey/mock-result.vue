<template>
    <div class="max-w-xl mx-auto py-24 px-4">
      <h1 class="text-2xl font-bold text-blue-700 mb-4">
        Your Tech Trend Focus: {{ readiness.toUpperCase() }}
      </h1>
  
      <p class="mb-2">Institution size: <strong>{{ size }}</strong></p>
      <p class="mb-2">Priority value: <strong>{{ value }}</strong></p>
  
      <p class="mb-4" v-if="selectedPages.length">
        Based on your selections, we recommend the following trend pages:
      </p>
  
      <ul class="list-disc ml-6 mb-6" v-if="selectedPages.length">
        <li v-for="page in selectedPages" :key="page">Page {{ page }}</li>
      </ul>
  
      <p class="text-red-600" v-else>
        😕 No matching trends found for your criteria. Try different selections.
      </p>
  
      <button
        v-if="selectedPages.length"
        class="bg-green-600 hover:bg-green-800 text-white px-5 py-2 rounded"
        @click="mockDownload"
      >
        Download Custom Report
      </button>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { PDFDocument } from 'pdf-lib'
  
  const route = useRoute()
  
  const size = route.query.size || 'unknown'
  const value = route.query.value || 'unknown'
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
  
  async function mockDownload() {
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
  