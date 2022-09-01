import React from 'react';
import SideBar from './SideBar/SideBar';
import Topbar from './TopBar/TopBar';
import "./Admin.css"
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Users from './Users/Users';
import Home from './Home/Home';
import Songs from './Songs/Songs';


function Admin() {
  return (
    <div>
      <Topbar />
    <div className="container">
      <SideBar/>
      <div className="others">
      <Routes>
      <Route path="" exact element={<Home/>}/>
      <Route path="users" element={<Users/>}/>
      <Route path="songs" element={<Songs/>}/>
      </Routes>
      </div>
    </div>
    </div>
  )
}
export default Admin