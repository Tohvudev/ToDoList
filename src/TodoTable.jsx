import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const TodoTable = (props) => {
  const handleDelete = (index) => {
    props.onDelete(index);
  };

  const columnDefs = [
    { headerName: "Date", field: "date", valueFormatter: (params) => new Date(params.value).toLocaleDateString(), filter: "agDateColumnFilter", floatingFilter: true, alwaysShowFloatingFilter: true },
    { headerName: "Description", field: "description", filter: true, floatingFilter: true, alwaysShowFloatingFilter: true },
    {
      headerName: "Action",
      cellRenderer: (params) => (
        <button onClick={() => handleDelete(params.node.rowIndex)}>Delete</button>
      ),
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600, margin: "0 auto" }}>
      <AgGridReact
        rowData={props.todos}
        columnDefs={columnDefs}
        domLayout='autoHeight'
        floatingFiltersHeight={50}
        animateRows={true}
      />
    </div>
  );
};

export default TodoTable;
