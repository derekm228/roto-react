import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

// AG Grid styles (required)
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; // or ag-theme-alpine

export default function Grid() {
  // Simple demo data
  const rowData = useMemo(
    () => [
      { id: 1, name: "Alice", role: "PM",   age: 31 },
      { id: 2, name: "Bob",   role: "Dev",  age: 28 },
      { id: 3, name: "Cara",  role: "QA",   age: 26 },
      { id: 4, name: "Derek", role: "Lead", age: 35 },
    ],
    []
  );

  const colDefs = useMemo(
    () => [
      { field: "id",   headerName: "#", maxWidth: 90, sortable: true },
      { field: "name", filter: true, sortable: true },
      { field: "role", filter: true },
      { field: "age",  sortable: true },
    ],
    []
  );

  return (
    <div style={{ padding: 24 }}>
      <h2>Team</h2>

      {/* Theme class controls look; inline height makes grid visible */}
      <div className="ag-theme-quartz" style={{ height: 420, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination
          paginationPageSize={10}
          rowSelection="single"
        />
      </div>
    </div>
  );
}