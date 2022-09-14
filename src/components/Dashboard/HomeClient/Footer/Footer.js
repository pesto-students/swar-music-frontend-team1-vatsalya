import React, {useState, useRef} from 'react'
import PauseSharpIcon from '@mui/icons-material/PauseSharp';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import SkipPreviousSharpIcon from '@mui/icons-material/SkipPreviousSharp';
import SkipNextSharpIcon from '@mui/icons-material/SkipNextSharp';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import {Typography,IconButton} from '@mui/material';
import './Footer.css';

const Footer =({url, duration,name,play})=> {
  const audioRef = useRef();
  const [isPlaying,setIsPlaying] = useState(play);
  const [currentTime, setCurrentTime] = useState();
  const[volume, setVolume] = useState();
  const onPlay = () =>{
      audioRef.current.play();
      setIsPlaying(!isPlaying)
  }
  const onPause = () =>{
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
  }

   
  return (
    <div className='footer_body'>
    <div className='footer'>
    <div className='audio-players'>
      <audio src={url}  controls ref={audioRef} onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        ></audio>
      </div>
        <div className='footer_left'>
        <p>{name}</p>
        </div>
        <div className= 'footer_center'>
        <IconButton className='footer_button' fontSize='large' ><SkipPreviousSharpIcon className="footer__icon" fontSize='large'/></IconButton>
          {isPlaying ? 
          <IconButton className='footer_button' fontSize='large' sx={{color:'black'}} onClick={onPause}>
            <PauseSharpIcon className="footer__grey" fontSize='large'/>
            </IconButton>:
            <IconButton onClick={onPlay} fontSize='large' sx={{color:'black'}}>
              <PlayArrowSharpIcon className="footer__icon" fontSize='large'/>
              </IconButton>}
          <IconButton className='footer_button' fontSize='large' sx={{color:'black'}}><SkipNextSharpIcon className="footer__icon" fontSize='large'/>
          </IconButton>
      </div>
      <div className= 'footer_right'>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <IconButton onClick={() => {
                    setVolume(0)
                    audioRef.current.volume = 0}}>
        <VolumeDownRoundedIcon className="footer__icon" fontSize='large'/></IconButton>
        <Slider aria-label="Volume" size="small" sx={{color:'black'}}
          min={0}
          max={1}
          step={0.1}
          value={volume}
        onChange={(e)=>{
          audioRef.current.volume = e.target.value;
          setVolume(e.target.value)
      }}/>
       </Stack>
      </div>
    </div>
    <div className='songlength'>
    <Box sx={{ width: 650 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Typography component={'span'} variant='content'>{currentTime ? Math.floor(currentTime/60) : '0'}:{currentTime ? Math.floor(currentTime%60) : '0'}</Typography>
        <Slider aria-label="Media_range" size="small" sx={{color:'black'}}
                min={0}
                max={parseFloat(duration) * 60} 
                value={currentTime}
                onChange={(e)=>{
                    audioRef.current.currentTime = e.target.value;
                    setCurrentTime(e.target.value)
                }}/>
        <Typography component={'span'} variant='content'> {duration ? duration : '4:43'}</Typography>
       </Stack>
       </Box>
    </div>
    </div>
  )
}

export default Footer