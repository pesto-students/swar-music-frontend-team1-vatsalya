import { Typography,IconButton } from '@mui/material';
import React,{useRef, useState} from 'react';
import Drake from '../Drake.jpg';
import './TrendingartistCard.css';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';

function TrendingartistCard() {
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
    <div className='Container_TAC'>
         <div className='TrendingartistCard'>
        <img src= {Drake} alt='ImagineDragons' className='Artist_Image'/>
        </div>
        <Typography type='h1' alignContent='left' color='black' sx={{ml:'25px'}} fontSize='large'  font-weight= 'bold'>Drake</Typography>
        <Typography type='title' alignContent='left' color='black' sx={{ml:'25px'}}>Falling Back
       
        <div className='audio_control'>
        <audio src={"https://swar-app.s3.ap-south-1.amazonaws.com/Falling+Back"}  controls ref={audioRef}/>
        </div>

         { isPlaying ?
        <IconButton onClick={onPlay}>
              <PlayCircleOutlineRoundedIcon className='play'sx={{fontSize:'30px'}}/>
        </IconButton> :
        <IconButton onClick={onPause}>
              <PauseSharpIcon className='play'sx={{fontSize:'30px'}}/>
        </IconButton>
       }  
        </Typography>
      
       
    </div>
  )
}

export default TrendingartistCard