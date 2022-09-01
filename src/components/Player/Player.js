import React,{useRef, useState} from 'react'
import "./Player.css"
import SkipPreviousSharpIcon from '@mui/icons-material/SkipPreviousSharp';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import SkipNextSharpIcon from '@mui/icons-material/SkipNextSharp';
import IconButton from '@mui/material/IconButton';
import VolumeOffSharpIcon from '@mui/icons-material/VolumeOffSharp';
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp';


function Player({url, duration}) {
    const audioRef = useRef();
    const [isPlaying,setIsPlaying] = useState(false);
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
    <div className="player">
        <div className='player-songs'>
            <div className='player-title'>
                <div>
                    <p>Hello</p>
                </div>
            </div>
            <div className='audio-control'>
                <div className='audio-players'>
                <audio src={url}  controls ref={audioRef} onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                ></audio>
                </div>
                <div>
                <IconButton><SkipPreviousSharpIcon/></IconButton>
                {isPlaying ? <IconButton onClick={onPause}><PauseSharpIcon/></IconButton>:<IconButton onClick={onPlay}><PlayArrowSharpIcon /></IconButton>}
                <IconButton><SkipNextSharpIcon/></IconButton>
                </div>
                <div>
                <h1>{Math.floor(currentTime/60)} : {Math.floor(currentTime%60)}   </h1>
                <input type="range" min={0} 
                max={Number(duration) * 60} 
                value={currentTime}
                onChange={(e)=>{
                    audioRef.current.currentTime = e.target.value;
                    setCurrentTime(e.target.value)
                }}/>
                <h1>{duration}</h1>
                </div>
            </div>
            <div className='volume'>
                <p>Volume</p>
                <IconButton onClick={() => {
                    setVolume(0)
                    audioRef.current.volume = 0}}><VolumeOffSharpIcon/></IconButton>
                <input type="range" min={0} 
                max={1}
                step={0.1}
                value={volume}
                onChange={(e)=>{
                    audioRef.current.volume = e.target.value;
                    setVolume(e.target.value)
                }}/>
                <IconButton><VolumeUpSharpIcon/></IconButton>
            </div>
        </div>
    </div>
  )
}

export default Player
