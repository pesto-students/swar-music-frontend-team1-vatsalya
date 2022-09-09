import React ,{useState, useRef, useEffect}from 'react'
import { Button, Typography } from '@mui/material';
import bg from  '../Card/bg.jpeg';
import cover1 from '../Card/cover1.jpg';
import cover2 from '../Card/cover2.jpg'
import '../Card/Songimage.css';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

const SliderData = [
  {
    image: bg,
    src: 'https://swar-app.s3.ap-south-1.amazonaws.com/Kesari',
    name: 'Kesari'
  },
  {
    image : cover1,
    src: 'https://swar-app.s3.ap-south-1.amazonaws.com/On My Way',
    name: 'Kesari01'
  },
  {
   image : cover2,
   src: 'https://swar-app.s3.ap-south-1.amazonaws.com/Man on the Moon',
   name: 'Kesari02'
  }
];



function Songimage() {
  const [current, setCurrent] = useState(0);
  const[artist, setArtist] = useState("Kesari");
  console.log("current----")
  console.log(current);
  const [url, setUrl] = useState("");
  console.log("url-----")
  console.log(url)
  const length = SliderData.length;
  console.log("length----" + length)
  
  const audioRef = useRef();
  const songsRef = useRef();
  const nameRef = useRef();

  useEffect(()=>{
    setUrl(songsRef.current.src)
    setArtist(nameRef.current.value)
  },[songsRef.current])

  // useEffect(()=>{
  //   setArtist(nameRef.current.value)
  // },[nameRef.current.value])
  console.log(songsRef)
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const onPlay = () =>{
    audioRef.current.play();
   }
  const onPause = () =>{
    audioRef.current.pause();
  }

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
   <div className="card">
    <div className='audio-players'>
      <audio src={url} controls ref={audioRef}
        ></audio>
      </div> 

  <div className="title-total">  
      <h1 sx={{mt:'1em',mb:'0.1em',}}>{artist}</h1>
       <div className="actions">
      <Button variant='contained' sx={{mt:'1em',mb:'0.1em', color: 'white', backgroundColor: 'black', borderColor: 'black', borderRadius: '20px', padding:'0.5em 1.7em'}} fontSize='large'
      onClick={onPlay}> Play</Button>
      <Button variant ='outlined' sx={{mt:'0.5em',mb:'0.1em', color: 'black', borderColor: 'black', ml:'16px', borderRadius: '20px' , padding:'0.5em 1.7em'}}
       onClick={onPause}>Pause</Button>
      </div>
      <ChevronLeftRoundedIcon className='left-arrow' onClick={prevSlide} fontSize='large' />
      <ChevronRightRoundedIcon className='right-arrow' onClick={nextSlide} fontSize='large' />
  </div>
  <div className='cover'> 
      {SliderData.map((slide, index) => {
        console.log("index")
        console.log(index)

        console.log("current")
        console.log(current)
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='cover_image' className='cover_image' />
            )}
            {index === current && (
                  <input value={slide.name} className='name' ref={nameRef} ></input>
            )}
            
              {index === current  && (
              <input type="audio/mpeg" className='cover_image' src={slide.src} ref={songsRef}/>
            )} 
          </div>
        );
      })}
  </div>
</div>
    
  )
}

export default Songimage;