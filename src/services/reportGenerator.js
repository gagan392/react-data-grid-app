import jsPDF from "jspdf";
import "jspdf-autotable";

// define a generatePDF function that accepts a tickets argument
const generatePDF = gridData => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Id", "Name", "Age", "Email"];
  // define an empty array of rows
  const tableRows = [];

  // for each gridData pass all its data into an array
  gridData.forEach(data => {
    const gridRowData = [
      data.id,
      data.name,
      data.age,
      data.email
    ];
    // push each tickcet's info into a row
    tableRows.push(gridRowData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("City Ledger", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;