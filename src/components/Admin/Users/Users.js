import React, { useEffect, useMemo, useState} from 'react'
import Box from '@mui/material/Box';
import { DataGrid , gridClasses} from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import "./Users.css"
import { useSelector,useDispatch } from 'react-redux';
import { userAction } from './Utils/usersReducer';

const Datagridstyle={width:1200,
  fontSize:'20px',
     mt:'40px',
    ml:'30px',
    border:2,
    borderColor: 'primary.light',
    borderRadius:'30px',
    '& .MuiDataGrid-row:hover': {
      backgroundColor: "rgb(255, 255, 255)",
       cursor: 'pointer',
       transform: 'scale(1)',
       rowHeight:'100px',
       textAlign:'center',
       color:'black'
    },
    onrowClick: {
      backgroundColor: "rgb(255, 255, 255)",
      cursor: 'pointer',
       transform: 'scale(1)',
       color:'black'
    },
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
      outline: 'none'},
      [`& .${gridClasses.row}`]:{
        '&.Mui-selected':{
        backgroundColor:'black',
        color:'white'
      },
      '&.Mui-selected:hover':{
        backgroundColor:'black'
      },
    }}
const columns = [
    
    {
      field: 'username',
      headerName: 'Username',
      width: 165,
      editable: false,
      headerAlign:'center',
      align: 'center'
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300,
      editable: false,
      headerAlign:'center',
      align: 'center'
    },
    {
      field: 'password',
      headerName: 'Password',
      type: 'number',
      width: 300,
      editable: false,
      headerAlign:'center',
      align: 'center'
    },
    {
      field: 'isAdmin',
      headerName: 'Admin',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      headerAlign:'center',
      align: 'center'
    },
    {
      field: 'isPaid',
      headerName: 'Paid',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      headerAlign:'center',
      align: 'center'
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 175,
        headerAlign:'center',
        align: 'center',
        renderCell: (params) =>{
            return(
                <>
                <DeleteOutline className="userListDelete"/>
                </>
            )
        }
      },
  ];


 
function Users() {

  const usersData = useSelector((state) => {
    console.log("state")
  console.log(state.usersReducer);
  return state.usersReducer
})

const dispatch = useDispatch();
  useMemo( () => {
    dispatch(userAction.getAllUserAction())
  },[])

  
  return (
    <div>
    <Box sx={{ height: 632.8, width: '95%' }}>
      <DataGrid
      disableColumnMenu
      disableColumnFilter
      borderRadius="25%" 
      disableSelectionOnClick
        rows={usersData.users}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        sx={Datagridstyle}
      />
    </Box>
    </div>
  )
}

export default Users