// eslint-disable-file
import { Component } from "react";
import peopleTemplate from "../peopleTemplate";

import filter from "@inovua/reactdatagrid-community/filter";

import ReactDataGridApp from "./react-data-grid";
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
      selected: {},
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

  onSelectionChange = ({ selected, data }) => {
    console.log("data ", data);
    console.log("selected ", selected);
    // if condition to handle select all
    if (selected === true) {
      this.setState({ selected: data });
      this.props.onDataChange(data);
    } else {
      this.setState({ selected: selected });
      this.props.onDataChange(selected);
    }
  };

  render() {
    return (
      <ReactDataGridApp
        columns={columns}
        onFilterValueChange={this.onFilterValueChange}
        onSelectionChange={this.onSelectionChange}
        {...this.state}
      />
    );
  }
}

export default ReactDataGridContainer;
