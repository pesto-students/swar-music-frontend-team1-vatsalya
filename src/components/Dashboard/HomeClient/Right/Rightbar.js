import React from 'react';
import {Link} from 'react-router-dom';
import {  Typography, Button, Stack} from '@mui/material';
import Drake from '../Right/Drake.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Favprofile from './FavArtist/Favprofile';
import './Rightbar.css';
import TrendingartistCard from './Trendingartist/TrendingartistCard';
import Logout from './Logout/Logout';
import Feedback from '../Right/Feedback/Feedback';
import Taylorswift from './FavArtist/Taylorswift.jpg'
import Hasley from './FavArtist/hasley.webp'
import JustinBieber from './FavArtist/justinBieber.jpeg'
import ArianGrande from './FavArtist/arian_grande.jpeg'

function FavArtist() {
  return (
    <div className='rightbar'>
      <Stack direction="row" spacing={3}>
      <Feedback/>
      <Logout/>
      </Stack>
    
        <h3>Songs of the Year</h3>
        {/* <div className='artist'> 
           <Favprofile/>
            </div> */}
            <Favprofile image={Taylorswift} artist={"Taylor Swift"} song={"Blank Space"} url={"https://swar-app.s3.ap-south-1.amazonaws.com/Blank+Space"}/>
            <Favprofile image={ArianGrande} artist={"Arian Grande"} song={"7 Rings"} url={"https://swar-app.s3.ap-south-1.amazonaws.com/7+rings"}/>
            <Favprofile image={Hasley} artist={"Hasley"} song={"Without Me"} url={"https://swar-app.s3.ap-south-1.amazonaws.com/Without+me"}/>
            <Favprofile image={JustinBieber} artist={"Justin Bieber"} song={"Yummy"} url={"https://swar-app.s3.ap-south-1.amazonaws.com/Yummy"}/>
            <TrendingartistCard/>
 </div>
  )
}

export default FavArtist