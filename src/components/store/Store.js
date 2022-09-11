import React from "react"
import { createStore,applyMiddleware } from "redux"
import { combineReducers } from 'redux'
import thunk from "redux-thunk" 
import { usersReducer,deleteUserReducer } from '../Admin/Users/Utils/usersReducer'
import { songsReducer,deleteSongsReducer } from "../Admin/Songs/Utils/songsReducer"
import { submitUserReducer } from "../Login/Utility/authenticatinReducer"
import { loginUserReducer } from "../Login/Utility/authenticatinReducer"
import { findSongByNameReducer } from "../Dashboard/SongsClient/Utility/songsClientReducer";
import { poadCastsReducer } from "../Dashboard/Podcasts/Utility/poadCastsReducer";
import { findPoadCastByNameReducer } from "../Dashboard/Podcasts/Utility/poadCastsReducer";
import { audioBooksReducer } from "../Dashboard/AudioBooksClient/Utility/audioBookRedcuer";
import { findAudioBooksByNameReducer} from "../Dashboard/AudioBooksClient/Utility/audioBookRedcuer";
import { audioBooksAdminReducer,deleteAudioBooksAdminReducer } from "../Admin/AudioBooks/Utils/audioBooksAdminReducer";
import { poadCastsAdminReducer,deletePoadCastsAdminReducer } from "../Admin/PoadCasts/Utils/poadCastAdminReducer.js";
import { countSongsReducer,countUsersReducer, countPoadCastsReducer,countAudioBooksReducer, countByCountyReducer } from "../Admin/Home/Utils/homeReducer";
import { createPlayListReducer,getAllPlayListReducer,createPlayListSongsReducer,getPlayListSongsReducer,deletePlayListReducer,editPlayListReducer  } from "../../components/Dashboard/PlayList/Utils/postPlayListReducer"

export const store = createStore(combineReducers({usersReducer,songsReducer, submitUserReducer,loginUserReducer,findSongByNameReducer,
poadCastsReducer,findPoadCastByNameReducer,audioBooksReducer,findAudioBooksByNameReducer,audioBooksAdminReducer,poadCastsAdminReducer
,countSongsReducer, countUsersReducer, countPoadCastsReducer,countAudioBooksReducer, countByCountyReducer,createPlayListReducer,
getAllPlayListReducer,createPlayListSongsReducer,getPlayListSongsReducer,deletePlayListReducer,deleteAudioBooksAdminReducer,deleteSongsReducer,
deletePoadCastsAdminReducer,deleteUserReducer,editPlayListReducer  }), applyMiddleware(thunk)); 


