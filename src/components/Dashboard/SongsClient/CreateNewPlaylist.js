import React,{useRef,useState} from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Dialog ,Button, DialogTitle, DialogContent,IconButton,TextField,makeStyles} from '@mui/material';


const NewButton = styled(Button)(()=>({
  color: 'white', backgroundColor: 'black', borderColor: 'black', borderRadius: '20px',
   padding:'0.5em 1.7em',
   '&:hover': {
    backgroundColor:'grey',
    color:'white'
  },
  '&:focus':{
    backgroundColor:'black',
  }
}));


const NewDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const NewDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

NewDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

 function CreateNewPlaylist(props) {
  const addPlaylist= props.addPlaylist
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

const [state,setState]=useState({
  currentPlaylist:'home',
  NewDialog:'false',
  playlists:{
    home : new Set(),
    favorites: new Set(),
  }
})

const playlistRef = useRef(null);

// const addplaylist=e=>{
//   e.preventdefault();
//   const list = playlistRef.current.value;

//   setState({
//     ...state,
//     NewDialog:false,
//     playlist:{...state.playlists, [list]: new Set()}
//   })
// }


  return (
    <div>
             <NewButton autoFocus onClick={handleClickOpen}  variant='contained' startIcon={<AddIcon/>}>
          Create New Playlist
           </NewButton>
           <form onSubmit={addPlaylist}>
      <NewDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <NewDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create New Playlist
        </NewDialogTitle>
        
        <DialogContent dividers>
        <TextField id="playlist"  placeholder='Give your playlist a Name' variant="outlined"
        ref={playlistRef}
        sx={{
          '&.MuiTextField-root':{
            '&:hover': {
              backgroundColor:'grey',
              color:'white'
            }
          }
        }}
        />
        </DialogContent>
        <DialogActions >
          <NewButton autoFocus onClick={handleClose} variant='contained'  type='submit' >
            Create
          </NewButton>
        </DialogActions>
       
      </NewDialog>
      </form>
    </div>
  );
}

export default CreateNewPlaylist;




































































