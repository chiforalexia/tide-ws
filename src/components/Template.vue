<template>
  <div class="container mx-auto px-4 mb-10">
    <!-- Title section -->
    <div class="text-center mb-6">
      <!-- Badge -->
      <div class="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm mb-4">
        Roadmap Template
      </div>

      <!-- Main title -->
      <h2 class="text-3xl md:text-4xl font-bold mb-2">
        Customizable Implementation Roadmap
      </h2>

      <!-- Subtitle -->
      <p class="text-gray-600 max-w-2xl mx-auto">
        Get started with a technology implementation roadmap, adjustable to your institution's needs.
      </p>
    </div>
  </div>

  <div class="excel-embed-container">
    <!-- Handsontable Interactive Excel Preview -->
    <div ref="excelTable" class="handsontable-container mb-6"></div>

    <!-- Download button for the Excel file -->
    <a :href="excelDownloadLink" download="YourExcelFile.xlsx">
      <button class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full mt-6">Download Excel File</button>
    </a>
  </div>
</template>

<script>
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";
import * as XLSX from "xlsx";

export default {
  name: "ExcelEmbed",
  data() {
    return {
      excelFileUrl: "https://github.com/chiforalexia/tide-ws/raw/refs/heads/main/Example-web%201.xlsx",
      excelDownloadLink: "https://github.com/chiforalexia/tide-ws/raw/refs/heads/main/Example-web%201.xlsx",
      hotInstance: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loadExcel();
    });
  },
  methods: {
    async loadExcel() {
      try {
        // Get data over GitHub API
        const apiUrl = 'https://api.github.com/repos/chiforalexia/tide-ws/contents/Example-web%201.xlsx';
        const response = await fetch(apiUrl);
        const data = await response.json();
        const fileUrl = data.download_url;
        
        // Get excel file content from the CORS-enabled download URL
        const fileResponse = await fetch(fileUrl);
        const arrayBuffer = await fileResponse.arrayBuffer();

        // Read excel file
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Sheet into JSON array
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

        console.log("Parsed Excel Data:", jsonData);

        if (jsonData.length > 1 && jsonData[0].length > 1) {
          // Run Handsontable
          this.hotInstance = new Handsontable(this.$refs.excelTable, {
            data: jsonData.slice(1),
            colHeaders: jsonData[0],
            rowHeaders: true,
            filters: true,
            dropdownMenu: true,
            licenseKey: "non-commercial-and-evaluation",
            // Adjustments for size and zoom
            width: '100%',
            stretchH: 'all',
            rowHeight: 35,
            autoColumnSize: true,
            fontSize: 14,
          });
        } else {
          console.error("No valid data found in the Excel sheet.");
        }
      } catch (error) {
        console.error("Error loading Excel file:", error);
      }
    }
  }
}
</script>

<style scoped>
.excel-embed-container {
  text-align: center;
  margin: 20px auto;
  max-width: 1000px;
}

.handsontable-container {
  width: 100%;
  height: 100%; /* Allow Handsontable to take up the full height of the container */
  background-color: #f9f9f9;
  margin: auto;
  box-sizing: border-box;
}
</style>
