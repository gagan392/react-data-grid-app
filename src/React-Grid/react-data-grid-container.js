import { Component, Fragment } from "react";
import peopleTemplate from "../peopleTemplate";

import filter from "@inovua/reactdatagrid-community/filter";

import ReactDataGridApp from "./react-data-grid";
import HeaderBar from "./header";
import Footer from "./footer-material";
import getDataFromApi from "./gridClient";

const columns = [
  {
    name: "id",
    header: "Id",
    defaultVisible: false,
    type: "number",
    defaultWidth: 80,
  },
  { name: "name", header: "Name", defaultFlex: 1 },
  { name: "email", header: "Email", defaultFlex: 1 },
  { name: "age", header: "Age", type: "number", defaultFlex: 1 },
  {
    id: "desc",
    header: "Description",
    defaultFlex: 2,
    render: ({ data }) =>
      data.name + ", aged: " + data.age + ". Lives in " + data.country,
  },
];

const defaultFilterValue = [
  { name: "name", operator: "startsWith", type: "string", value: "" },
  { name: "age", operator: "gte", type: "number", value: undefined },
];

class ReactDataGridContainer extends Component {

  constructor(props) {
    super(props);
    const initialData = filter(peopleTemplate, defaultFilterValue);
    this.state = {
      isFetching: true,
      filterValue: defaultFilterValue,
      dataSource: initialData,
    };
  }

  async componentDidMount() {
    const data = await getDataFromApi();
    this.setState({
      isFetching: false,
      data: data,
      dataSource: data,
    });
  }

  onFilterValueChange = (data, events) => {
    const filteredData = filter(this.state.data, data);
    this.setState({
      filterValue: data,
      dataSource: filteredData
    });
  };

  render() {
    return (
      <Fragment>
        {
          <div className="App">
            <HeaderBar headerText={'City Leader'} />
            <ReactDataGridApp columns={columns} onFilterValueChange={this.onFilterValueChange} {...this.state} />
            <Footer footerText={'© 2020 FooBar Company L.P. and its affiliates.'}/>
          </div>
        }
      </Fragment>
    );
  }
}

export default ReactDataGridContainer;
