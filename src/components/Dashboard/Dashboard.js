import React ,  { createContext, useReducer } from 'react'
import NavBar from './NavBar/NavBar'
import SideNavBar from './SideNavBar/SideNavBar'
import "./Dashboard.css"
import SongsClient from './SongsClient/SongsClient'
import {Route,Routes } from 'react-router-dom';
import HomeClient from './HomeClient/HomeClient'
import AudioBooks from './AudioBooksClient/AudioBooks'
import Podcasts from './Podcasts/Podcasts'
import Playlist from './Playlist/Playlist'


export const StoreContext =createContext(null);
const DEFAULT_PLAYLIST = 'liked songs'

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  playlists: {
   home: new Set(),
  }
}

const reducer= (state,action)=>{
  switch(action.type){
    case 'ADD_PLAYLIST':
      return {
        ...state,
        playlists: { ...state.playlists, [action.playlist]: new Set() }
      }
      case 'SET_PLAYLIST':
        return {...state, currentPlaylist:action.playlist}
  }

  return state
}


function Dashboard() {
  const [state,dispatch]= useReducer(reducer,initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
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
    </StoreContext.Provider>
  )
}

export default Dashboard