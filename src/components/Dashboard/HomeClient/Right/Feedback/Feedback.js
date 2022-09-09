import React,{useState} from 'react'
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { DialogContentText, TextareaAutosize } from '@material-ui/core';
import Review from './Review.png';
import ReviewsIcon from '@mui/icons-material/Reviews';
import '../Feedback/Feedback.css';
import axios from 'axios';
import { showErrorToast, showSuccessToast } from '../../../../Common/Toast';
import jwtDecode from 'jwt-decode';


function Feedbackreview() {

const [open,setOpen] =useState(false);
const handleClickOpen =()=>{
  setOpen(true);
}

const handleClose=()=>{
  setOpen(false);
}
const[feedBack, setFeedBack] = useState("");
const handleChange =(e)=>{
setFeedBack(e.target.value)
};
const handleSubmit=(event)=>{
  event.preventDefault();
  const feedBackObject = {
    "feedBack": feedBack
  }
  console.log(feedBackObject);

  const id = jwtDecode(localStorage.getItem('Token')).id.trim()
  console.log("jwt id-----")
  console.log(id);

  
  axios.post(`https://swar-music.herokuapp.com/api/users/feedBack/${id}`,{headers: {
    'Authorization':  localStorage.getItem('Token')
  }},feedBackObject).then(
    (res) =>{
      console.log(res.data);
      showSuccessToast("Thanks for your FeedBack!")
    }).catch((error) =>{
      showErrorToast("Unable to deliver FeeBack!Please try again later!")
      console.log(error);
    })
}
return (
    <div className='feedback'>
      <Button onClick={handleClickOpen} startIcon={<ReviewsIcon/>} sx={{color:'black'}}>Feedback</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
        <img alt='review' src={Review} className='review'/>
        <DialogContentText>
          Please give feedback!
        </DialogContentText>
        <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name='title'
          id='title'
          multiline
          rows={4}
          placeholder='feedback'
          value={feedBack}
          onChange={handleChange}
        />
        <Button onClick={handleClose} type='submit'>Submit</Button>
        </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Feedbackreview
