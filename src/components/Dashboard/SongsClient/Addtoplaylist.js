import React ,{useState, useEffect}from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog ,Button, DialogTitle, DialogContent, Stack,  
  Typography, IconButton, Fab, Divider} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from './Modal'
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import './Addtoplaylist.css';
import { Add } from '@mui/icons-material';
import { useSelector,useDispatch } from 'react-redux';
import {playListAction} from '../PlayList/Utils/postPlayListReducer';
import jwtDecode from 'jwt-decode';
import { token } from '../../Login/Utility/authenticatinReducer';
import { showSuccessToast } from '../../Common/Toast';

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

 function Addtoplaylist({rowId}) {
  console.log(rowId)

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const[name,setName] = useState("");
  const[data, setData] = useState([]);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const playListData = useSelector((state) => {
  return state.createPlayListReducer
  })

  const addPlayListSongs = useSelector((state) =>{
    return state.createPlayListSongsReducer;
  })


  const datas = useSelector((state) => {
    return state.getAllPlayListReducer.playList
  })
 
  useEffect(() =>{
    dispatch(playListAction.getAllPlayListByIdAction(jwtDecode(token()).id));
  },[])

 useEffect(() =>{
  console.log("This is the right data" + data);
  setData(datas)
 },[])

  const addPlaylist = e => {
    e.preventDefault()
    if(name !== '' && jwtDecode(token()).id !== '' && rowId !== ''){
        dispatch(playListAction.createPlayListAction(jwtDecode(token()).id, name));
        showSuccessToast("Your playList Has Been Created")
      }
  }
  

  const [addState, setState] = useState({
    currentPlaylist: ' my liked songs ',
    modal: false,
    playlists: {
    },
  });

   const handleModal = () => setState({ ...addState, modal: !addState.modal })

  return (
    <div className='Playlist'>
      
      <IconButton variant="outlined" onClick={handleClickOpen} sx={{ color:'blue'
            }}> <Add/></IconButton>

      <NewDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <NewDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add to Playlist
        </NewDialogTitle>
        <DialogContent dividers>
        {data?.map((item) => (
      
          <Stack direction='row' spacing={5} sx={{p:'10px'}}>
          <Fab disabled aria-label="Playlist" >
          <QueueMusicOutlinedIcon sx={{color:'blue'}}/>
        </Fab>
          <Typography
            key={item._id}
            >
              {item.name}
          </Typography>
            <IconButton onClick={() => {console.log("key Id =======>" + item._id)
            dispatch(playListAction.addSongsToPlayListAction(item._id,rowId))
         }}> <AddIcon/></IconButton> 
                </Stack>
          ))}
        </DialogContent>
        <DialogActions sx={{mr:'30px'}}>
          <NewButton autoFocus onClick={()=>{handleModal();}}  variant='contained' startIcon={<AddIcon/>}>
          Create New Playlist
           </NewButton>
        </DialogActions>

      <Modal show={addState.modal} close={handleModal}>
        <form onSubmit={addPlaylist}>
        <Divider variant='fullWidth'/>
        <Typography variant='h6' className='name' sx={{mt:'10px', mb:'10px'}}>New Playlist </Typography>
        <Divider variant='fullWidth'/>
          <div className="content-wrap">
            <input
              type="text"
              placeholder="Give Your Playlist a Name"
              value={name}
              onChange={handleName}
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




































































