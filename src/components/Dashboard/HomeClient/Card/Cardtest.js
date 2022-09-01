import React from 'react'
import '../Card/K.css';
import {Typography,Button} from '@mui/material';
function k() {
  return (
    <div className="mycard">
      <div className='card-left'>
      <div className="song_details">
        <Typography variant='caption'>Artist</Typography>
        <Typography variant='h5'> On top of the world</Typography>
      </div>
      <div className='actions'>
        <Button variant='contained'> Play</Button>
        <Button>follow</Button>
      </div>
      </div>
      <div className="songs_image"> </div>
</div>
  )
}

export default k