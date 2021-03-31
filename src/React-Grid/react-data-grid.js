import React from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

const gridStyle = { minHeight: 550 };

class ReactDataGridApp extends React.Component {

  render() {
    const { dataSource, filterValue, columns, onFilterValueChange, selected, onSelectionChange } = this.props;

    return (
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={dataSource}
        onFilterValueChange={onFilterValueChange}
        filterValue={filterValue}
        sortable={true}
        pagination={true}
        selected={selected}
        checkboxColumn
        onSelectionChange={onSelectionChange}
      />
    );
  }
}

export default ReactDataGridApp;
