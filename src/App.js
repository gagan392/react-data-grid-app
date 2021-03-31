import { useState } from "react";

import "./App.css";
import ReactDataGridContainer from "./React-Grid/react-data-grid-container";
import HeaderBar from "./Header/header";
import Footer from "./Footer/footer";

function App() {

  const [ pdfData, setPdfData ] = useState([]);

  const onDataChange = (data) => {
    setPdfData(data);
  }

  return (
    <div className="App">
      <HeaderBar headerText={'City Leader'} pdfData={pdfData} />
      <ReactDataGridContainer onDataChange={onDataChange} />
      <Footer footerText={'© 2020 FooBar Company L.P. and its affiliates.'}/>
    </div>
  );
}

export default App;
