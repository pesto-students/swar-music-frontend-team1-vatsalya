import React, { useEffect, useMemo, useState} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import "./Users.css"
import { useSelector,useDispatch } from 'react-redux';
import { userAction } from './Utils/usersReducer';


const columns = [
    
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'password',
      headerName: 'Password',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'isAdmin',
      headerName: 'Admin',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'isPaid',
      headerName: 'Paid',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) =>{
            return(
                <>
                <button className="userListEdit">Edit</button>
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
    <Box sx={{ height: 800, width: '95%' }}>
      <DataGrid
      disableSelectionOnClick
        rows={usersData.users}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{ Toolbar: GridToolbar }}
        checkboxSelection
      />
    </Box>
  )
}

export default Users