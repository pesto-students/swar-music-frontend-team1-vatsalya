import React from 'react'
import { Button, Card, Typography } from '@mui/material';
import bg from  '../Card/bg.png';
import '../Card/Songimage.css';

function Songimage() {
  return (
    <div className="card">
  <div className="card-text">
  <div className= "portada"> </div>
  <div className="title-total">   
      <div className="title">Artist</div>
      <h2>On top of world</h2>
       <div className="actions">
      <Button variant='contained'> Play</Button>
      <Button>follow</Button>
        </div>
  </div>
</div>
</div>
    
  )
}

export default Songimage