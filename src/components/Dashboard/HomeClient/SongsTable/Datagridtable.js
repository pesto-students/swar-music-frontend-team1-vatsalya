import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import './Datagridtable.css';
const rows= [
  { id: 1, col1: 'Hello', col2: 'World',col3:'Data',col4:'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome',col3:'Data',col4:'World' },
  { id: 3, col1: 'MUI', col2: 'is Amazing',col3:'Data',col4:'World' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  { field: 'col3', headerName: 'Column 3', width: 150 },
  { field: 'col4', headerName: 'Column 4', width: 150 },
];

export default function App() {
  return (
    <div className='datatable' style={{ height: 300, width: '50%'  }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
