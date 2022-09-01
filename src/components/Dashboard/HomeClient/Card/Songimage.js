import React ,{useState}from 'react'
import { Button, Typography } from '@mui/material';
import bg from  '../Card/bg.png';
import cover1 from '../Card/cover1.jpg';
import cover2 from '../Card/cover2.jpg'
import '../Card/Songimage.css';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

const SliderData = [
  {
    image: bg
  },
  {
    image : cover1
  },
  {
   image : cover2
  }
];



function Songimage() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
   <div className="card">
  <div className="card-text">
  <div className="title-total">   
      <Typography variant="title" sx={{ml:'1.2em'}}>Artist</Typography>
      <h1>On top of the world</h1>
       <div className="actions">
      <Button variant='contained' sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black', borderRadius: '20px', padding:'0.5em 1.7em'}} fontSize='large'> Play</Button>
      <Button variant ='outlined' sx={{ color: 'black', borderColor: 'black', ml:'16px', borderRadius: '20px' , padding:'0.5em 1.7em'}}>follow</Button>
      </div>
      <ChevronLeftRoundedIcon className='left-arrow' onClick={prevSlide} fontSize='large' />
      <ChevronRightRoundedIcon className='right-arrow' onClick={nextSlide} fontSize='large' />
  </div>
  <div className='cover'> 
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='cover_image' className='cover_image' />
            )}
          </div>
        );
      })}
  </div>
</div>
</div>
    
  )
}

export default Songimage;