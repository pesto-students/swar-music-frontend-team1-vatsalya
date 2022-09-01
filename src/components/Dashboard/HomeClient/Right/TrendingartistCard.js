import { Typography } from '@mui/material';
import React from 'react';
import Drake from '../Right/Drake.jpg';
import './TrendingartistCard.css';
function TrendingartistCard() {
  return (
    <div className='Container_TAC'>
         <div className='TrendingartistCard'>
        <img src= {Drake} alt='ImagineDragons' className='Artist_Image'/>
        </div>
        <Typography type='h1' alignContent='left' color='black' sx={{ml:'25px'}} fontSize='large'  font-weight= 'bold'>Drake</Typography>
        <Typography type='title' alignContent='left' color='black' sx={{ml:'25px'}}>On top of the world</Typography>
       
    </div>
  )
}

export default TrendingartistCard