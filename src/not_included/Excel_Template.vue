<template>
  <div class="container mx-auto px-4 mb-10">
    <!-- Title section -->
    <div class="text-center mb-6">
      <!-- Badge -->
      <div
        class="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm mb-4"
      >
        Roadmap Template
      </div>

      <!-- Main title -->
      <h2 class="text-3xl md:text-4xl font-bold mb-2">
        Customizable Implementation Roadmap
      </h2>

      <!-- Subtitle -->
      <p class="text-gray-600 max-w-2xl mx-auto">
        Get started with a technology implementation roadmap, adjustable to your
        institution's needs.
      </p>
    </div>

    <div class="excel-embed-container">
      <!-- Handsontable Interactive Excel Preview -->
      <div ref="excelTable" class="handsontable-container mb-6"></div>

      <!-- Download button for the Excel file -->
      <a :href="excelDownloadLink" download="YourExcelFile.xlsx">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full mt-6"
        >
          Download Excel File
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";
import * as XLSX from "xlsx";

export default {
  name: "ExcelEmbed",
  data() {
    // Links must be changed after committed to main or changing the excel itself
    return {
      excelFileUrl:
        "https://github.com/chiforalexia/tide-ws/raw/refs/heads/Ella/Example-web%201.xlsx",
      excelDownloadLink:
        "https://github.com/chiforalexia/tide-ws/raw/refs/heads/Ella/Example-web%201.xlsx",
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
        const corsProxy = "https://api.allorigins.win/raw?url=";
        const cacheBustedUrl = this.excelFileUrl + "?v=" + Date.now(); // 💥 Bust cache
        const fileUrl = `${corsProxy}${encodeURIComponent(cacheBustedUrl)}`;

        console.log("Fetching Excel file from:", fileUrl);

        const fileResponse = await fetch(fileUrl);
        if (!fileResponse.ok) {
          console.error("Error fetching file:", fileResponse.statusText);
          this.renderMockData();
          return;
        }

        const arrayBuffer = await fileResponse.arrayBuffer();
        console.log("Excel file successfully fetched");

        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          defval: "",
        });

        console.log("Workbook loaded:", workbook);
        console.log("Sheet name:", sheetName);
        console.log("Parsed Excel Data:", jsonData);

        if (jsonData.length <= 1 || jsonData[0].length <= 1) {
          console.warn(
            "Excel data appears to be empty or has no headers. Falling back to mock data.",
          );
          this.renderMockData();
          return;
        }

        this.renderHandsontable(jsonData.slice(1), jsonData[0]);
      } catch (error) {
        console.error("Error loading or rendering the Excel file:", error);
        this.renderMockData();
      }
    },
    renderHandsontable(data, headers) {
      if (this.hotInstance) {
        this.hotInstance.destroy();
      }

      this.hotInstance = new Handsontable(this.$refs.excelTable, {
        data: data,
        colHeaders: headers,
        rowHeaders: true,
        filters: true,
        dropdownMenu: true,
        licenseKey: "non-commercial-and-evaluation",
        width: "100%",
        stretchH: "all",
        rowHeight: 35,
        autoColumnSize: true,
        manualColumnResize: true,
      });

      console.log("Handsontable rendered successfully!");
    },
    renderMockData() {
      const headers = ["Name", "Role", "Start Date"];
      const data = [
        ["Alex", "Developer", "2023-01-01"],
        ["Morgan", "Designer", "2023-02-15"],
        ["Taylor", "Manager", "2023-03-10"],
      ];
      this.renderHandsontable(data, headers);
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
  min-height: 400px;
  background-color: #f9f9f9;
  margin: auto;
  box-sizing: border-box;
  border: 1px solid #ccc;
}
</style>
