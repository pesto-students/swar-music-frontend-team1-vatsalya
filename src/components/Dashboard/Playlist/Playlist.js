import React from 'react';
import PlaylistCard from './PlaylistCard/PlaylistCard';
import './Playlist.css'
import Addtoplaylist from '../SongsClient/Addtoplaylist';
function Playlist() {

  return (
    <div className='myplaylist'>
    <h2 className='PlaylistTitle'>Your Playlist</h2>
    <PlaylistCard name='Liked Songs' number='36'/>
    </div>
  )
}

export default Playlist