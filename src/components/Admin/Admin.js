import React from 'react';
import SideBar from './SideBar/SideBar';
import "./Admin.css"
import {Route,Routes } from 'react-router-dom';
import Users from './Users/Users';
import Home from './Home/Home';
import Songs from './Songs/Songs';
import AudioBookAdmin from './AudioBooks/AudioBooks';
import PoadCastAdmin from './PoadCasts/PoadCast';


function Admin() {
  return (
    <div>
    <div className="container">
      <SideBar/>
      <div className="others">
      <Routes>
      <Route path="" exact element={<Home/>}/>
      <Route path="users" element={<Users/>}/>
      <Route path="songs" element={<Songs/>}/>
      <Route path="audioBooks" element={<AudioBookAdmin/>}/>
      <Route path="poadCasts" element={<PoadCastAdmin/>}/>
      </Routes>
      </div>
    </div>
    </div>
  )
}
export default Admin