import React from 'react';
import {  Typography, Button } from '@mui/material';
import Taylorswift from '../Right/Taylorswift.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Favprofile() {
  return (
    <div className='artist'> 
    <div className='left_artist'> 
    <img src= {Taylorswift} alt='profileimage' className='profile'></img></div>
    <div className='center_artist'>
     <Typography variant='h4' fontSize={'20px'}>Taylor Swift</Typography>
     <Typography variant='caption'>139 songs in library</Typography>
      </div>
    <div className='right_artist'>
   <Button sx={{color:'black'}}><MoreHorizIcon/></Button> 
  </div>
  </div>
  )
}

export default Favprofile