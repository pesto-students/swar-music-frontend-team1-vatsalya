import { LineStyle, TrendingUp} from '@material-ui/icons'
import React, {useState} from 'react'
import "./sideBar.css"
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SwarLogo from '../LogoSidebar/SwarLogo.png'

function SideBar() {
  const [state, setState] = useState("");
  const[isOpen, setIsOpen] = useState(false);
  const toogle = () =>{
    setIsOpen(!isOpen);
  }
  const activeLink = () =>{
    setState("sidebarListItem active")
  }
  return (
    <div className="SideBar" style={{width: isOpen ? "60px" : "", flex: isOpen ? "0": "1"}}>
      <div className="sidebarWrapper">
             <Avatar variant={"rounded"} alt="Logo" src={SwarLogo} style={{
              p:'10px',
              objectFit:'contain',
    width: '260px',
    height: '80px',
    mt:0,
  mr:'auto'
  }} /> 
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link style={{textDecoration: 'none'}} to="/admin">
            <li className= "sidebarListItem" style={{padding: isOpen ? "0" : "5px"}}  onClick={activeLink}>
              <HomeRoundedIcon className="sideBarIcon"/>
              <p style={{display: isOpen ? "none" : ""}}>Home</p>
            </li>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/admin/users" >

            <li className="sidebarListItem" >
              <TrendingUp className="sideBarIcon"/>
              <p style={{display: isOpen ? "none" : ""}}>Users</p>
            </li>
            </Link>
             <Link style={{textDecoration: 'none'}} to="/admin/songs" >

            <li className="sidebarListItem" >
              <CloudUploadIcon className="sideBarIcon"/>
             <p style={{display: isOpen ? "none" : ""}}> Upload Songs</p>
            </li>
            </Link>

            <Link style={{textDecoration: 'none'}} to="/admin/audioBooks" >
              <li className="sidebarListItem" >
              <CloudUploadIcon className="sideBarIcon"/>
               <p style={{display: isOpen ? "none" : ""}}> Upload AudioBooks</p>
            </li>
            </Link>

            <Link style={{textDecoration: 'none'}} to="/admin/poadCasts" >
              <li className="sidebarListItem" >
              <CloudUploadIcon className="sideBarIcon"/>
               <p style={{display: isOpen ? "none" : ""}}> Upload PodCasts</p>
            </li>
            </Link>

            
          </ul>
        </div>
      </div>
      </div>
  )
}

export default SideBar