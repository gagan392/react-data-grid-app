import React from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import filter from "@inovua/reactdatagrid-community/filter";

const gridStyle = { minHeight: 550 };

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

class ReactDataGridApp extends React.Component {
  constructor(props) {
    super(props);
    const initialData = filter(this.props.data, defaultFilterValue);
    this.state = {
      filterValue: defaultFilterValue,
      dataSource: initialData,
    };
  }
  //   initialData = useCallback(filter(people, defaultFilterValue), []);

  onFilterValueChange = (data, events) => {
    console.log("filter data", data);
    const filteredData = filter(this.props.data, data);
    this.setState({
      filterValue: data,
      dataSource: filteredData,
    });
  };

  render() {
    // const [dataSource, setDataSource] = useState(initialData);
    // const [filterValue, setFilterValue] = useState(defaultFilterValue);

    // const onFilterValueChange = useCallback((filterValue) => {
    //   const data = filter(people, filterValue);

    //   setFilterValue(filterValue);
    //   setDataSource(data);
    // }, []);

    const dataSource = this.state.dataSource;
    const filterValue = this.state.filterValue;

    return (
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={dataSource}
        onFilterValueChange={this.onFilterValueChange}
        filterValue={filterValue}
        sortable={true}
      />
    );
  }
}

export default ReactDataGridApp;
