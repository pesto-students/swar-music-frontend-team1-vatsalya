import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, Typography, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import './Playlistcard.css';
import { useDispatch } from 'react-redux';
import { editPlayListById, playListAction } from '../Utils/postPlayListReducer';
import axios from 'axios';
import { showSuccessToast } from '../../../Common/Toast';
import { token } from '../../../Login/Utility/authenticatinReducer';

function PlaylistCard(props) { 
  const[show,setShow] = useState(false);
  const[editshow,setEditShow]=useState(false);
  const[name, setName] = useState(props.name);
  const dispatch = useDispatch();
  console.log("show====>>>>>>>>" + show)
  console.log("Key=========>" + props.id);

  const deletePlayList = (state) =>{
    console.log("state delete=======>" + state.deletePlayListReducer)
    return state.deletePlayListReducer;
  }

  const handleName = (e) =>{
    setName(e.target.value);
  }

  
  return (
    <div className='PlaylistContainer'>
      <div className='deletebutton'>
        {props.name !== 'All Songs' ? <IconButton onClick = {() => {setShow(true)}}><DeleteIcon
        /></IconButton> : '' }
      </div>
        <Typography type='title' color='black'className='PlaylistTitle' fontSize='large'  font-weight= 'bold'>{props.name}
        </Typography>
        {props.name !== 'All Songs' ? <IconButton onClick = {() => {setEditShow(true)}}><CreateOutlinedIcon
        /></IconButton> : '' }
        <Dialog
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="confirm-dialog"
      >
        <DialogTitle id="confirm-dialog">Delete PlayList</DialogTitle>
        <DialogContent> Are you sure you want to delete this playList?</DialogContent>
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
              dispatch(playListAction.deletePlayListAction(props.id))
              setShow(false);
            }}
            color="default"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>


     <Dialog  open={editshow}
        onClose={() => setEditShow(false)}
        aria-labelledby="confirm-dialog-edit">
        <DialogTitle id="confirm-dialog-edit">Edit Your PlayList Name</DialogTitle>
        <Divider/>
        <form>
        <DialogContent > 
        
        <input
              type="text"
              placeholder="Give Your Playlist a Name"
              value={name}
              onChange={handleName}
              required
            />

        </DialogContent>
        <DialogActions >
          <Button autoFocus variant='contained'  sx={{alignItems:'center'}}
          onClick={() =>{dispatch(playListAction.updatePlayListById(props.id,name))}}
          >
            Save
          </Button>
        </DialogActions>
        </form>
     </Dialog>
        
    </div>
  )
}

export default PlaylistCard