import axios from 'axios';
import { showSuccessToast } from '../../../Common/Toast';
import { token } from '../../../Login/Utility/authenticatinReducer';

const songsConstants = {
    GET_ALL_SONGS_REQUEST: 'GET_ALL_SONGS_REQUEST',
    GET_ALL_SONGS_SUCCESS: 'GET_ALL_SONGS_SUCCESS',
    GET_ALL_SONGS_FAILURE: 'GET_ALL_SONGS_FAILURE',
    DELETE_SONG_REQUEST: 'DELETE_SONG_REQUEST',
    DELETE_SONG_SUCCESS: ' DELETE_SONG_SUCCESS',
    DELETE_SONG_FAILURE: 'DELETE_SONG_FAILURE'
}

export const songsService = {
    getAllSongs,
    deleteSongs
}

export const songsAction = {
    getAllSongsAction,
    deleteSongsAction
}

export const songsReducer = (songs = [], action) =>{
    switch(action.type){
        case songsConstants.GET_ALL_SONGS_REQUEST:
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
            return songs;
   }
}

export const deleteSongsReducer = (songs = [], action) =>{
    switch(action.type){
        case songsConstants.DELETE_SONG_REQUEST:
            return {
                loggingIn: true,
                songs : songs
            };
        case songsConstants.DELETE_SONG_SUCCESS:
            return {
                loggedIn: true,
                 songs: action.songs
            };
        case songsConstants.DELETE_SONG_FAILURE:
                return {};
        default:
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
        return {type: songsConstants.GET_ALL_SONGS_REQUEST}
    }
    function success(songs){
        return {type: songsConstants.GET_ALL_SONGS_SUCCESS, songs}
    }
    function failure(error){
        return {type: songsConstants.GET_ALL_SONGS_FAILURE, error}
    }
}

function  deleteSongsAction(id){
    return dispatch => {
        dispatch(request());
        songsService.deleteSongs(id)
        .then(
            song => dispatch(success(song)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: songsConstants.DELETE_SONG_REQUEST}
    }
    function success(song){
        return {type: songsConstants.DELETE_SONG_SUCCESS, song}
    }
    function failure(error){
        return {type: songsConstants.DELETE_SONG_FAILURE, error}
    }
}

export async function getAllSongs(){
    return await axios.get("https://swar-music.herokuapp.com/api/songs",{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            return res.data;
      
          }
        ).catch((err) => {
        })
}

export async function deleteSongs(id){
    return await axios.delete(`https://swar-music.herokuapp.com/api/songs/${id}`,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            showSuccessToast("Song Has been deleted!")
            setTimeout(() => { window.location.reload(true)},1000)
            return res.data;
      
          }
        ).catch((err) => {
        })
}
