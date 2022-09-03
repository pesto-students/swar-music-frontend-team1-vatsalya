import React ,{useState,useRef}from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog ,Button, DialogTitle, DialogContent, Stack,  
  Typography, IconButton, Fab, Divider} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from './Modal'
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import './Addtoplaylist.css';
const NewButton = styled(Button)(()=>({
  color: 'white', backgroundColor: 'black', borderColor: 'black', borderRadius: '20px',
   padding:'0.5em 1.7em',
   '&:hover': {
    backgroundColor:'grey',
    color:'white'
  },
  '&:focus':{
    backgroundColor:'black',
  },
  cursor:'pointer',
  textTransform: 'uppercase',
  fontWeight: 'bold',
}));



const NewDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  display:'flex',
  direction:'column',
  alignItems:'center',
  justifyContent:'center',
 width:'100vw'
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

 function Addtoplaylist() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    currentPlaylist: 'liked songs',
    modal: false,
    playlists: {
    },
  });
  const playlistRef = useRef(null)
  const playlists = Object.keys(state.playlists)

  const addPlaylist = e => {
    e.preventDefault()
    const list = playlistRef.current.value

    setState({
      ...state,
      modal: false,
      playlists: { ...state.playlists, [list]: new Set() },
  
    })
  }

  const handleModal = () => setState({ ...state, modal: !state.modal })

  return (
    <div className='Playlist'>
      <Button variant="outlined" onClick={handleClickOpen}>
      Add to Playlist
      </Button>
      <NewDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <NewDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add to Playlist
        </NewDialogTitle>
        <DialogContent dividers>
        <Stack direction='row' spacing={5} sx={{p:'10px'}}>
        <Fab disabled aria-label="like" >
        <FavoriteIcon  sx={{color:'red'}}/>
      </Fab>
        <Typography>Liked Songs</Typography>
       <IconButton> <AddIcon/></IconButton> 
       </Stack>

        {playlists.map(list => (
          <Stack direction='row' spacing={5} sx={{p:'10px'}}>
          <Fab disabled aria-label="Playlist" >
          <QueueMusicOutlinedIcon sx={{color:'blue'}}/>
        </Fab>
          <Typography
              key={list}
              className={list === state.currentPlaylist ? 'active' : ''}
              onClick={() => {
                setState({ ...state, currentPlaylist: list })
              }}
            >
              {list}
          </Typography>
            <IconButton> <AddIcon/></IconButton> 
                </Stack>
          ))}
        </DialogContent>
        <DialogActions sx={{mr:'30px'}}>
          <NewButton autoFocus onClick={()=>{handleModal();}}  variant='contained' startIcon={<AddIcon/>}>
          Create New Playlist
           </NewButton>
        </DialogActions>

      <Modal show={state.modal} close={handleModal}>
        <form onSubmit={addPlaylist}>
        <Divider variant='fullWidth'/>
        <Typography variant='h6' className='name' sx={{mt:'10px', mb:'10px'}}>New Playlist </Typography>
        <Divider variant='fullWidth'/>
          <div className="content-wrap">
            <input
              type="text"
              placeholder="Give Your Playlist a Name"
              ref={playlistRef}
              required
            />
            <NewButton autoFocus variant='contained'  type='submit' sx={{alignItems:'center'}}>
            Create
          </NewButton>
          </div>
        </form>
      </  Modal>
      </NewDialog>
    </div>
  );
}

export default Addtoplaylist;




































































