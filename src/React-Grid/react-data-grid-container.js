import { Component, Fragment } from "react";
import peopleTemplate from "../peopleTemplate";

import ReactDataGridApp from "./react-data-grid";
import getDataFromApi from "./gridClient";

class ReactDataGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      data: peopleTemplate,
    };
  }

  async componentDidMount() {
    const data = await getDataFromApi();
    this.setState({
      isFetching: false,
      data: data,
    });
  }

  render() {
    const data = this.state.data;
    return (
      <Fragment>
        {data.length && data.length > 0 ? (
          <div className="App">
            <ReactDataGridApp data={data} />
          </div>
        ) : (
          <div className="App">
            <ReactDataGridApp data={peopleTemplate} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default ReactDataGridContainer;
