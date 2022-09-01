import React from 'react'
import '../HomeClient/HomeClient.css';
import { Typography} from '@mui/material';
import Footer from './Footer/Footer';
import Songimage from './Card/Songimage';
import { SearchRounded } from '@material-ui/icons';
import Songstable from '../HomeClient/SongsTable/Songstable'
import Datagridtable from './SongsTable/Datagridtable';
import FavArtist from './Right/FavArtist';
function HomeClient() {
  return (
    <div className='home'>
      <div className='left'>
      <div className="search__container">
        <form className='search_form'>
        <SearchRounded className='icon' fontSize='large' style={{ color: "black" }}/>
        <input className="search__input"search__input type="text" placeholder="Search for artists,songs and...."/>
        </form>
       </div>
        <Typography variant='caption' sx={{ ml:"4em",color:"#737373"}} fontSize='medium'>What's hot 🔥</Typography>
        <Typography variant='h3' solid bold sx={{ m:"0.2em 0em 0.4em 1.3em", mfontWeight: 500,}}>Trending</Typography>
        <div className='songimage'><Songimage/></div>
        <Typography variant='h4' sx={{ml:'60px',mb:'30px' }} fontWeight="bold">My Playlist</Typography>
        <Datagridtable/>
        <Footer/>
        </div>
        <div className='right'>
          <FavArtist/>
        </div>
      </div>
   

  )

}

export default HomeClient