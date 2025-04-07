<template>
    <div class="excel-embed-container">
      <!-- Handsontable Interactive Excel Preview -->
      <div ref="excelTable" class="handsontable-container"></div>
  
      <!-- Download button for the Excel file -->
      <a :href="excelDownloadLink" download="YourExcelFile.xlsx">
        <button class="download-button">Download Excel File</button>
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
        hotInstance: null, // Reference for Handsontable instance
      };
    },
    mounted() {
      this.loadExcel();
    },
    methods: {
      async loadExcel() {
        try {
          // Fetch the Excel file from GitHub
          const response = await fetch(this.excelFileUrl);
          const arrayBuffer = await response.arrayBuffer();
  
          // Read the Excel file
          const workbook = XLSX.read(arrayBuffer, { type: "array" });
          const sheetName = workbook.SheetNames[0]; // Get first sheet
          const sheet = workbook.Sheets[sheetName];
  
          // Convert sheet to JSON array (2D array format)
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
          // Initialize Handsontable
          this.hotInstance = new Handsontable(this.$refs.excelTable, {
            data: jsonData,
            colHeaders: true,
            rowHeaders: true,
            filters: true,
            dropdownMenu: true,
            licenseKey: "non-commercial-and-evaluation", // Free for personal use
          });
        } catch (error) {
          console.error("Error loading Excel file:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .excel-embed-container {
    text-align: center;
    margin: 20px auto;
    max-width: 1000px;
  }
  
  .handsontable-container {
    width: 100%;
    max-width: 900px;
    height: 500px;
    overflow: auto;
    margin: auto;
  }
  
  .download-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .download-button:hover {
    background-color: #45a049;
  }
  </style>
  