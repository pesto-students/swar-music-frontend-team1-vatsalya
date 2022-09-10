import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { DeleteOutline } from '@material-ui/icons';
import {IconButton } from '@mui/material'
import '../../components/Admin/Songs/songs.css'

function ConfirmModel(props) {
    console.log("enter confirm model")
    console.log(props.rowId)
    const dispatch = useDispatch();


    const [show,setShow] = useState(false);

    const handleClickOpen = () => {
        setShow(true);
      };
  return (
    <div> 
        <IconButton onClick={handleClickOpen}>
         <DeleteOutline className="userListDelete"/>  
         </IconButton>
        <Dialog
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="confirm-dialog"
      >
        <DialogTitle id="confirm-dialog">{props.title}</DialogTitle>
        <DialogContent> {props.content}</DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setShow(false)}
            color="secondary"
          >
            No
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(props.action)
              setShow(false);
            }}
            color="default"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfirmModel