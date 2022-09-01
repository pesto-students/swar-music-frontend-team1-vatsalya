import { LineStyle, TrendingUp} from '@material-ui/icons'
import React, {useState} from 'react'
import "./sideBar.css"
import { Link } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';


function SideBar() {
  const [state, setState] = useState("");
  const[isOpen, setIsOpen] = useState(false);
  const toogle = () =>{
    console.log("toogle")
    setIsOpen(!isOpen);
  }
  const activeLink = () =>{
    console.log("I am clicked!")
    setState("sidebarListItem active")
  }
  return (
    <div className="SideBar" style={{width: isOpen ? "60px" : "", flex: isOpen ? "0": "1"}}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="dashboard" style={{display: isOpen ? "inline-block" : "flex", padding: isOpen ? "5px" : ""}}>
          <h3 className="sidebarTitle" style={{display: isOpen ? "none" : "flex"}}>Dashboard </h3>
          <div className='bars'>
            <DensitySmallIcon onClick={toogle}/>
          </div>
          </div>
          <ul className="sidebarList">
            <Link style={{textDecoration: 'none'}} to="/admin">
            <li className= "sidebarListItem" style={{padding: isOpen ? "0" : "5px"}}  onClick={activeLink}>
              <LineStyle className="sideBarIcon"/>
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
             <p style={{display: isOpen ? "none" : ""}}> Upload</p>
            </li>
            </Link>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default SideBar