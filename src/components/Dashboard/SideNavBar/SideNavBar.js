import React from 'react'
import { Avatar } from '@mui/material';
import  "./SideNavBar.css"
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { LineStyle} from '@material-ui/icons'
import { Link } from "react-router-dom";
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import HeadphonesSharpIcon from '@mui/icons-material/HeadphonesSharp';
import PodcastsSharpIcon from '@mui/icons-material/PodcastsSharp';
import SwarLogo from './SwarLogo.png';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { FeaturedPlayListOutlined} from '@material-ui/icons'
function SideNavBar() {
  return (
    <div className="SideBar" >
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
      <Avatar variant={"rounded"} alt="Logo" src={SwarLogo} className='avatar' style={{
              p:'10px',
              objectFit:'contain',
    width: '260px',
    height: '80px',
    mt:0,
  mr:'auto'
  }} /> 
        {/* <div className="dashboard">
        <h3 className="sidebarTitle">Dashboard </h3>
        <div className='bars'>
          <DensitySmallIcon />
        </div>
        </div> */}
        <ul className="sidebarList">
        <Link style={{textDecoration: 'none'}} to="/home">
          <li className= "sidebarListItem" >
            <HomeRoundedIcon className="sideBarIcon"/>
            <p >Home</p>
          </li>
          </Link>

          <Link style={{textDecoration: 'none'}} to="/home/songsList">
          <li className= "sidebarListItem" >
            <HeadphonesSharpIcon className="sideBarIcon"/>
            <p >Songs</p>
          </li>
          </Link>

          <Link style={{textDecoration: 'none'}} to="/home/audiobooks">
          <li className= "sidebarListItem" >
            <AutoStoriesSharpIcon className="sideBarIcon"/>
            <p >AudioBooks</p>
          </li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/home/podcasts">
          <li className= "sidebarListItem" >
            <PodcastsSharpIcon className="sideBarIcon"/>
            <p >Podcasts</p>
          </li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/home/playlist">
          <li className= "sidebarListItem" >
            <FeaturedPlayListOutlined className="sideBarIcon"/>
            <p >Playlist</p>
         </li>
         </Link>  
        </ul>
      </div>
    </div>
    </div>
  )
}

export default SideNavBar








