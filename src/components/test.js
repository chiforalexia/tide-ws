import { nextTick } from "vue";

async function loadExcel(excelFileUrl, excelTableRef, hotInstance) {
  try {
    const response = await fetch(excelFileUrl);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log("Excel Data:", jsonData);

    await nextTick();

    if (excelTableRef) {
      if (hotInstance) {
        hotInstance.destroy();
      }

      new Handsontable(excelTableRef, {
        data: jsonData,
        colHeaders: true,
        rowHeaders: true,
        filters: true,
        dropdownMenu: true,
        licenseKey: "non-commercial-and-evaluation",
      });
    } else {
      console.error("Table ref missing.");
    }
  } catch (error) {
    console.error("Error loading Excel file:", error);
  }
}

