import React from 'react'
import NavBar from './NavBar/NavBar'
import SideNavBar from './SideNavBar/SideNavBar'
import "./Dashboard.css"
import SongsClient from './SongsClient/SongsClient'
import {Route,Routes } from 'react-router-dom';
import HomeClient from './HomeClient/HomeClient'
import AudioBooks from './AudioBooksClient/AudioBooks'
import Podcasts from './Podcasts/Podcasts'
import Playlist from './Playlist/Playlist'

function Dashboard() {
  return (
    <div>
      {/* <Topbar/> */}
      <div className="container">
      <SideNavBar/>
      <div className="others">
      <Routes>
      <Route path="" exact element={<HomeClient/>}/>
      <Route path="songsList" element={<SongsClient/>}/>
      <Route path="audiobooks" element={<AudioBooks/>}/>
      <Route path="podcasts" element={<Podcasts/>}/>
      <Route path="playlist" element={<Playlist/>}/>
      </Routes>
      </div>
    </div>
    </div>
  )
}

export default Dashboard