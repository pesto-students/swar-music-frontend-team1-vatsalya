import {  Typography, Button } from '@mui/material'
import React from 'react'

import Drake from '../Right/Drake.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Favprofile from './Favprofile';
import './FavArtist.css';
import TrendingartistCard from './TrendingartistCard';
function FavArtist() {
  return (
    <div className='favartist'>
        <h3>Fav Artist</h3>
        <div className='artist'> 
            <div className='left_artist'> 
            <img src= {Drake} alt='profileimage' className='profile'></img></div>
            <div className='center_artist'>
             <Typography variant='h4' fontSize={'20px'}>Drake</Typography>
             <Typography variant='caption'>120 songs in library</Typography>
              </div>
            <div className='right_artist'>
           <Button sx={{color:'black'}}><MoreHorizIcon/></Button> 
          </div>
            </div>
            <Favprofile/>
            <Favprofile/>
            <Favprofile/>
            <TrendingartistCard/>
      
 </div>
  )
}

export default FavArtist