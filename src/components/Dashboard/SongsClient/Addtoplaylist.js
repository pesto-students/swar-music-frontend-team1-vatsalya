import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog ,Button, DialogTitle, DialogContent, Stack,  
  Typography, IconButton, Fab} from '@mui/material';
import Roundheart from './Roundheart.png';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateNewPlaylist from './CreateNewPlaylist';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
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

BootstrapDialogTitle.propTypes = {
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

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      Add to Playlist
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add to Playlist
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Stack direction='row' spacing={5} sx={{p:'10px'}}>
        <Fab disabled aria-label="like" >
        <FavoriteIcon  sx={{color:'red'}}/>
      </Fab>
        <Typography>Liked Songs</Typography>
       <IconButton> <AddIcon/></IconButton> 
       </Stack>
        </DialogContent>
        <DialogActions sx={{mr:'30px'}}>
          <Button autoFocus onClick={handleClose} variant='contained' startIcon={<AddIcon/>} sx={{borderRadius:'20px'}}>
          Create New Playlist
           </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Addtoplaylist;




































































