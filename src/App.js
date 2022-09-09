import { Home } from '@material-ui/icons';
import React,{useState} from 'react';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Admin from './components/Admin/Admin';
import Songs from './components/Admin/Songs/Songs';
import Users from './components/Admin/Users/Users';
import AudioBookAdmin from './components/Admin/AudioBooks/AudioBooks';
import Main from './components/Containers/Main';
import AudioBooks from './components/Dashboard/AudioBooksClient/AudioBooks';
import Dashboard from './components/Dashboard/Dashboard';
import Podcasts from './components/Dashboard/Podcasts/Podcasts';
import HomeClient from './components/Dashboard/SongsClient/SongsClient';
import SongsClient from './components/Dashboard/SongsClient/SongsClient';
import { PrivateRoutes, PrivateAdminRoutes} from './components/Login/PrivateRouter';
import {history} from './components/store/History';
import PoadCastAdmin from './components/Admin/PoadCasts/PoadCast';
import Playlist from './components/Dashboard/PlayList/PlayList';

function App() {
  

  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<PageNotFound />} />
          <Route path="home" element={<PrivateRoutes><Dashboard/></PrivateRoutes>}>
          <Route index element={<Dashboard/>}/>
          <Route path="" element={<HomeClient/>}/>
          <Route path="songsList" element={<SongsClient/>}/>
          <Route path="audioBooks" element={<AudioBooks/>}/>
          <Route path="podcasts" element={<Podcasts/>}/>
          <Route path='playlist' element={<Playlist/>}/>
        </Route>
        <Route path="admin" element={<PrivateAdminRoutes><Admin/></PrivateAdminRoutes>}>
          <Route index element={<Admin/>}/>
          <Route path="" element={<Home/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="songs" element={<Songs/>}/> 
          <Route path="audioBooks" element={<AudioBookAdmin/>}/>
          <Route path="poadCasts" element={<PoadCastAdmin/>}/>
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
