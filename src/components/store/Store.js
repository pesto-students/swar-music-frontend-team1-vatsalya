import React from "react"
import { createStore,applyMiddleware } from "redux"
import { combineReducers } from 'redux'
import thunk from "redux-thunk" 
import { usersReducer } from '../Admin/Users/Utils/usersReducer'
import { songsReducer } from "../Admin/Songs/Utils/songsReducer"
import { submitUserReducer } from "../Login/Utility/authenticatinReducer"
import { loginUserReducer } from "../Login/Utility/authenticatinReducer"
import { findSongByNameReducer } from "../Dashboard/SongsClient/Utility/songsClientReducer";


export const store = createStore(combineReducers({usersReducer,songsReducer, submitUserReducer,loginUserReducer,findSongByNameReducer}), applyMiddleware(thunk)); 


