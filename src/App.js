import { useState } from "react";

import "./App.css";
import ReactDataGridContainer from "./React-Grid/react-data-grid-container";
import HeaderBar from "./Header/header";
import Footer from "./Footer/footer";

import { PDFViewer } from "@react-pdf/renderer";
import PdfDocument from "./Grid-Pdf-Viewer/grid-pdf-viewer";

const styles = {
  iFrameSize: {
    height: "600px",
    width: "400px",
  }
};

function App() {
  const [pdfData, setPdfData] = useState([]);
  const [previewData, setPreviewData] = useState(false);

  const onDataChange = (data) => {
    setPdfData(data);
  };

  const nextBtnHandler = () => {
    setPreviewData(true);
  };

  const backBtnHandler = () => {
    setPreviewData(false);
    setPdfData([]);
  };

  return (
    <div className="App">
      <HeaderBar
        headerText={"City Legder"}
        pdfData={pdfData}
        nextBtnHandler={nextBtnHandler}
        backBtnHandler={backBtnHandler}
      />
      {!previewData ? (
        <ReactDataGridContainer onDataChange={onDataChange} />
      ) : (
        <PDFViewer style={styles.iFrameSize}>
          <PdfDocument data={pdfData} />
        </PDFViewer>
      )}
      <Footer footerText={"© 2020 FooBar Company L.P. and its affiliates."} />
    </div>
  );
}

export default App;
