import "./App.css";

import ReactDataGridApp from "./React-Grid/react-data-grid";

import getDataFromApi from "./React-Grid/gridClient";
// import people from './people';

function App() {
  const data = getDataFromApi();
  console.log(" api data ", data);

  return (
    <div className="App">
      <ReactDataGridApp data={data} />
    </div>
  );
}

export default App;
