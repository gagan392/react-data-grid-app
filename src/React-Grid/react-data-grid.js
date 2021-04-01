import React from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import filter from "@inovua/reactdatagrid-community/filter";

const gridStyle = { minHeight: 750 };

class ReactDataGridApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      dataSource: this.props.dataSource,
      isFetching: this.props.isFetching,
      filterValue: this.props.filterValue
    }
  }

  componentDidUpdate() {
    // conditional update
    if(this.props.isFetching !== this.state.isFetching) {
      this.setState({isFetching: this.props.isFetching});
      if(!this.props.isFetching) this.setState({dataSource: this.props.dataSource})
    }
  }

  onFilterValueChange = (filterValue, events) => {
    const filteredData = filter(this.props.dataSource, filterValue);
    this.setState({
      filterValue: filterValue,
      dataSource: filteredData
    });
    if (this.props.onFilterValueChange) {
      this.props.onFilterValueChange(filterValue, events);
    }
  }

  onSelectionChange = (selectedData) => {
    this.setState(selectedData)
    if (this.props.onSelectionChange) {
      this.props.onSelectionChange(selectedData)
    }
  }

  render() {
    const { columns, pagination, checkboxColumn } = this.props;
    const filterAttributes = !this.props.defaultFilterValue ? {
      onFilterValueChange: this.onFilterValueChange, filterValue: this.state.filterValue
    } : {
      defaultFilterValue: this.props.defaultFilterValue
    }

    return (
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        onSelectionChange={this.onSelectionChange}
        columns={columns}
        pagination={pagination}
        checkboxColumn={checkboxColumn}
        {...filterAttributes}
        {...this.state}
      />
    );
  }
}

export default ReactDataGridApp;
