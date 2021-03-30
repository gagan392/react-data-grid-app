import "./App.css";
import ReactDataGridContainer from "./React-Grid/react-data-grid-container";
import HeaderBar from "./Header/header";
import Footer from "./Footer/footer";
function App() {  

  return (
    <div className="App">
      <HeaderBar headerText={'City Leader'} />
      <ReactDataGridContainer />
      <Footer footerText={'© 2020 FooBar Company L.P. and its affiliates.'}/>
    </div>
  );
}

export default App;
