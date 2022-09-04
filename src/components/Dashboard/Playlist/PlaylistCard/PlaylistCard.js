import React from 'react';
import { Typography,Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Playlistcard.css'
import { PlayArrowOutlined } from '@mui/icons-material';
import OrangeHeadphones from './OrangeHeadphones.jpg';

function PlaylistCard(props) {
  const name= props.name;
  const number=props.number ;
  return (
    <div className='PlaylistContainer'>
         <div className='PlaylistCard'>
        <PlayArrowOutlined alt='ImagineDragons' className='Artist_Image' sx={{color:'red',m:'0px auto',textAlign:'center'}}/>
        </div>
        <Typography type='h1'  color='black' className='PlaylistTitle' fontSize='large'  font-weight= 'bold'>Playlist is {name}</Typography>
        <Typography type='title' color='black'className='PlaylistTitle'>{number} liked songs 
        </Typography>
    </div>
  )
}

export default PlaylistCard