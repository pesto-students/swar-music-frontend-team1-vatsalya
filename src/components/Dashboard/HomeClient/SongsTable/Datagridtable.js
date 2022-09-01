import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import './Datagridtable.css';

const rows= [
  { id: 1, col1: '1', col2: 'World',col3:'Data',col4:'World' , col5:'Shine'},
  { id: 2, col1: '2', col2: 'Sky is pink',col3:'Data',col4:'World',col5:'Shine'}, 
  { id: 3, col1: '3', col2: 'is Amazing',col3:'Data',col4:'World' , col5:'Shine'},
  { id: 4, col1: '4', col2: 'is Amazing',col3:'Data',col4:'World',col5:'Shine' },
  { id: 5, col1: '5', col2: 'is Amazing',col3:'Data',col4:'World',col5:'Shine' },
];

const columns = [
  { field: 'col1', headerName: '#', width: 80, },
  { field: 'col2', headerName: 'TITLE', width: 210 },
  { field: 'col3', headerName: 'ARTIST', width: 210 },
  { field: 'col4', headerName: 'TIME', width: 150 },
  { field: 'col5', headerName: 'ALBUM', width: 200 },
];

export default function App() {
  return (
    <div className='datatable' style={{ height: 300, width:800 }}>
      <DataGrid  disableColumnMenu  disableColumnSelector rows={rows} columns={columns}
       sx={{ width:800,
          '& .MuiDataGrid-row:hover': {
            backgroundColor: "rgb(255, 255, 255)",
             cursor: 'pointer',
             transform: 'scale(1.09)',
             color:'black'
          },
          onrowClick: {
            backgroundColor: "rgb(255, 255, 255)",
            cursor: 'pointer',
             transform: 'scale(1.09)',
             color:'black'
          },
          '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none'}
        }}
 />
    </div>
  );
}
