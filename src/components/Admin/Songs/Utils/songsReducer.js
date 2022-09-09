import axios from 'axios';
import { token } from '../../../Login/Utility/authenticatinReducer';

const songsConstants = {
    GET_ALL_SONGS_REQUEST: 'GET_ALL_SONGS_REQUEST',
    GET_ALL_SONGS_SUCCESS: 'GET_ALL_SONGS_SUCCESS',
    GET_ALL_SONGS_FAILURE: 'GET_ALL_SONGS_FAILURE',
}

export const songsService = {
    getAllSongs
}

export const songsAction = {
    getAllSongsAction
}

export const songsReducer = (songs = [], action) =>{
    switch(action.type){
        case songsConstants.GET_ALL_SONGS_REQUEST:
            console.log("enter")
            return {
                loggingIn: true,
                songs : songs
            };
        case songsConstants.GET_ALL_SONGS_SUCCESS:
            return {
                loggedIn: true,
                 songs: action.songs
            };
        case songsConstants.GET_ALL_SONGS_FAILURE:
                return {};
        default:
            console.log("enter")
            return songs;
   }
}

function getAllSongsAction(){
    return dispatch => {
        dispatch(request());
        songsService.getAllSongs()
        .then(
            users => dispatch(success(users)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type: songsConstants.GET_ALL_SONGS_REQUEST}
    }
    function success(songs){
        return {type: songsConstants.GET_ALL_SONGS_SUCCESS, songs}
    }
    function failure(error){
        return {type: songsConstants.GET_ALL_SONGS_FAILURE, error}
    }
}

export async function getAllSongs(){
    return await axios.get("https://swar-music.herokuapp.com/api/songs",{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            // setUsers(res.data);
            console.log("songs")
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}
