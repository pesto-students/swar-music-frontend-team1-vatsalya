import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog ,Button, DialogTitle, DialogContent, Stack,  
  Typography, IconButton, Fab, TextField} from '@mui/material';
import Roundheart from './Roundheart.png';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TextFields } from '@material-ui/icons';

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

 function CreateNewPlaylist() {
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
      Create New Playlist
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create New Playlist
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <TextField id="playlist"  placeholder='Give your playlist a Name' variant="outlined" />
        </DialogContent>
        <DialogActions >
          <Button autoFocus onClick={handleClose} variant='contained'  sx={{borderRadius:'20px'}}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default CreateNewPlaylist;




































































