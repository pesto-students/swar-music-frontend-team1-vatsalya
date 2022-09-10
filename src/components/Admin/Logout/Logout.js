import React,{useState} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Dialog, DialogContent, DialogTitle,Stack,Typography} from '@mui/material';
import { DialogContentText } from '@material-ui/core';
import {Link} from  'react-router-dom';
function Logout() {

const [open,setOpen] =useState(false);

const handleClickOpen =()=>{
  setOpen(true);
}

const handleClose=()=>{
  localStorage.clear();
  setOpen(false);
}
  return (
    <div className='Logout'>
      <Button startIcon={<LogoutIcon/>} sx={{color:'black'}} onClick={handleClickOpen}>Logout</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{m:'0 auto'}}> <Typography variant='h5'> Logout</Typography></DialogTitle>
        <DialogContent>
          <LogoutIcon sx={{width:'5em',height:'4em',ml:'110px'}} />
        <DialogContentText>
          Oh no! You're leaving...  Are you sure ?
        </DialogContentText>
        <Stack spacing={2}>
        <Button onClick={handleClose} variant='contained' 
        sx={{color: 'white', backgroundColor: 'black', borderColor: 'black', borderRadius: '20px', padding:'0.5em 1.7em'}}> Naah, just Kidding</Button>
        <Button onClick={handleClose} variant='outlined' sx={{color: 'black', borderColor: 'black', borderRadius: '20px',padding:'0.5em 1.7em'}}
        component={Link} to="/" >Yes,Log Me Out</Button>
        </Stack>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Logout