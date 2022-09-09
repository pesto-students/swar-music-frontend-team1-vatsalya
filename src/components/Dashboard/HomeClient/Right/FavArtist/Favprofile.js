import React,{useRef, useState} from 'react';
import {  Typography, Button, Stack ,Icon,IconButton, Grid} from '@mui/material';
import './Favprofile.css';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';
function Favprofile({image, artist,song,url}) {
  const audioRef = useRef();
  const [isPlaying,setIsPlaying] = useState(true);
  const onPlay = () =>{
    audioRef.current.play();
    setIsPlaying(!isPlaying)
}
const onPause = () =>{
    audioRef.current.pause();
    setIsPlaying(!isPlaying);
}

  return (
    <div className='fav_artist_profile'> 
     <div className='audio-players'>
      <audio src={url}  controls ref={audioRef}
        ></audio>
      </div>
    <ul className='artist_list'>
    <li className='artist_listitem'>
    <Grid container>
    <Grid item xs={3}>
    <img src= {image} alt='profileimage' className='profile'></img>
    </Grid>
    <Grid item xs={7}  sx={{alignItems:'center'}}>
    <div  className='data'>
     <Typography variant='h4' fontSize={'20px'}>{artist}</Typography>
     <Typography variant='caption'>{song}</Typography>
     </div>
     </Grid>
     <Grid item xs={2}>
     { isPlaying ?
    <IconButton onClick={onPlay} sx={{justifyContent:'right'}}>
       <PlayCircleOutlineRoundedIcon className='play'sx={{fontSize:'30px'}}/>
    </IconButton> :
    <IconButton onClick={onPause}>
    <PauseSharpIcon className='play'sx={{fontSize:'30px'}}/>
 </IconButton>
       }  
         </Grid>
       </Grid>
    </li> 
    </ul>
  </div>
  )
}

export default Favprofile