import { Home } from '@material-ui/icons';
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import Songs from './components/Admin/Songs/Songs';
import Users from './components/Admin/Users/Users';
import Main from './components/Containers/Main';
import AudioBooks from './components/Dashboard/AudioBooksClient/AudioBooks';
import Dashboard from './components/Dashboard/Dashboard';
import Podcasts from './components/Dashboard/Podcasts/Podcasts';
import HomeClient from './components/Dashboard/SongsClient/SongsClient';
import SongsClient from './components/Dashboard/SongsClient/SongsClient';
import Addtoplaylist from './components/Dashboard/SongsClient/Addtoplaylist'
import { PrivateRoutes,PrivateAdminRoutes } from './components/Login/PrivateRouter';
import { token, user } from './components/Login/Utility/authenticatinReducer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="home" element={<PrivateRoutes><Dashboard/></PrivateRoutes>}>
    <Route index element={<Dashboard/>}/>
    <Route path="" element={<HomeClient/>}/>
    <Route path="songsList" element={<SongsClient/>}/>
    <Route path="audioBooks" element={<AudioBooks/>}/>
    <Route path="podcasts" element={<Podcasts/>}/>
    </Route>
    <Route path="admin" element={<PrivateRoutes><Admin/></PrivateRoutes>}>
    <Route index element={<Admin/>}/>
    <Route path="" element={<Home/>}/>
    <Route path="users" element={<Users/>}/>
    <Route path="songs" element={<Songs/>}/>
    </Route>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
