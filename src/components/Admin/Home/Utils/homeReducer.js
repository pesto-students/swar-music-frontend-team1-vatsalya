import axios from 'axios';
import { token } from '../../../Login/Utility/authenticatinReducer';

const homeConstants = {
    COUNT_ALL_SONGS_REQUEST: 'COUNT_ALL_SONGS_REQUEST',
    COUNT_ALL_SONGS_SUCCESS: 'COUNT_ALL_SONGS_SUCCESS',
    COUNT_ALL_SONGS_FAILURE: 'COUNT_ALL_SONGS_FAILURE',
    COUNT_ALL_USERS_REQUEST: 'COUNT_ALL_USERS_REQUEST',
    COUNT_ALL_USERS_SUCCESS: 'COUNT_ALL_USERS_SUCCESS',
    COUNT_ALL_USERS_FAILURE: 'COUNT_ALL_USERS_FAILURE',
    COUNT_ALL_POADCAST_FAILURE: 'COUNT_ALL_POADCAST_FAILURE',
    COUNT_ALL_POADCAST_SUCCESS: 'COUNT_ALL_POADCAST_SUCCESS',
    COUNT_ALL_POADCAST_REQUEST: 'COUNT_ALL_POADCAST_REQUEST',
    COUNT_ALL_AUDIOBOOKS_FAILURE: 'COUNT_ALL_AUDIOBOOKS_FAILURE',
    COUNT_ALL_AUDIOBOOKS_SUCCESS: 'COUNT_ALL_AUDIOBOOKS_SUCCESS',
    COUNT_ALL_AUDIOBOOKS_REQUEST: 'COUNT_ALL_AUDIOBOOKS_REQUEST',
    COUNT_ALL_BY_COUNTRY_FAILURE: ' COUNT_ALL_BY_COUNTRY_FAILURE',
    COUNT_ALL_BY_COUNTRY_SUCCESS: 'COUNT_ALL_BY_COUNTRY_SUCCESS',
    COUNT_ALL_BY_COUNTRY_REQUEST: 'COUNT_ALL_BY_COUNTRY_REQUEST',
}

export const countService = {
    countAllSongs,
    countAllUser,
    countAllPoadCast,
    countAllAudioBooks,
    countAllByCountry
}

export const countAction = {
    countAllSongsAction,
    countAllUserAction,
    countAllPoadCastAction,
    countAllAudioBooksAction,
    countAllByCountryAction
}


export const countByCountyReducer = (country = [], action) =>{
    switch(action.type){
        case homeConstants.COUNT_ALL_BY_COUNTRY_REQUEST:
            console.log("enter")
            return {
                loggingIn: true,
                country : country
            };
        case homeConstants.COUNT_ALL_BY_COUNTRY_SUCCESS:
            return {
                loggedIn: true,
                country: action.country
            };
        case homeConstants.COUNT_ALL_BY_COUNTRY_FAILURE:
                return {};
        default:
            console.log("enter")
            return country;
   }
}


export const countAudioBooksReducer = (audioBooks = 0, action) =>{
    switch(action.type){
        case homeConstants.COUNT_ALL_AUDIOBOOKS_REQUEST:
            console.log("enter")
            return {
                loggingIn: true,
                audioBooks : audioBooks
            };
        case homeConstants.COUNT_ALL_AUDIOBOOKS_SUCCESS:
            return {
                loggedIn: true,
                audioBooks: action.audioBooks
            };
        case homeConstants.COUNT_ALL_AUDIOBOOKS_FAILURE:
                return {};
        default:
            console.log("enter")
            return audioBooks;
   }
}

export const countPoadCastsReducer = (poadCast = 0, action) =>{
    switch(action.type){
        case homeConstants.COUNT_ALL_POADCAST_REQUEST:
            console.log("enter")
            return {
                loggingIn: true,
                poadCast : poadCast
            };
        case homeConstants.COUNT_ALL_POADCAST_SUCCESS:
            return {
                loggedIn: true,
                poadCast: action.poadCast
            };
        case homeConstants.COUNT_ALL_POADCAST_FAILURE:
                return {};
        default:
            console.log("enter")
            return poadCast;
   }
}

export const countSongsReducer = (songs = 0, action) =>{
    switch(action.type){
        case homeConstants.COUNT_ALL_SONGS_REQUEST:
            console.log("enter")
            return {
                loggingIn: true,
                songs : songs
            };
        case homeConstants.COUNT_ALL_SONGS_SUCCESS:
            return {
                loggedIn: true,
                 songs: action.songs
            };
        case homeConstants.COUNT_ALL_SONGS_FAILURE:
                return {};
        default:
            console.log("enter")
            return songs;
   }
}

export const countUsersReducer = (users = 0, action) =>{
    switch(action.type){
        case homeConstants.COUNT_ALL_USERS_REQUEST:
            console.log("enter")
            return {
                loggingIn: true,
                users : users
            };
        case homeConstants.COUNT_ALL_USERS_SUCCESS:
            return {
                loggedIn: true,
                 users: action.users
            };
        case homeConstants.COUNT_ALL_USERS_FAILURE:
                return {};
        default:
            console.log("enter")
            return users;
   }
}

function countAllByCountryAction(){
    return dispatch => {
        dispatch(request());
        countService.countAllByCountry()
        .then(
            country => dispatch(success(country)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type:  homeConstants.COUNT_ALL_BY_COUNTRY_REQUEST}
    }
    function success(country){
        return {type: homeConstants.COUNT_ALL_BY_COUNTRY_SUCCESS, country}
    }
    function failure(error){
        return {type: homeConstants.COUNT_ALL_BY_COUNTRY_FAILURE, error}
    }
}

function countAllAudioBooksAction(){
    return dispatch => {
        dispatch(request());
        countService.countAllAudioBooks()
        .then(
            audioBooks => dispatch(success(audioBooks)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type:  homeConstants.COUNT_ALL_AUDIOBOOKS_REQUEST}
    }
    function success(audioBooks){
        return {type: homeConstants.COUNT_ALL_AUDIOBOOKS_SUCCESS, audioBooks}
    }
    function failure(error){
        return {type: homeConstants.COUNT_ALL_AUDIOBOOKS_FAILURE, error}
    }
}

function countAllPoadCastAction(){
    return dispatch => {
        dispatch(request());
        countService.countAllPoadCast()
        .then(
            poadCast => dispatch(success(poadCast)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type:  homeConstants.COUNT_ALL_POADCAST_REQUEST}
    }
    function success(poadCast){
        return {type: homeConstants.COUNT_ALL_POADCAST_SUCCESS, poadCast}
    }
    function failure(error){
        return {type: homeConstants.COUNT_ALL_POADCAST_FAILURE, error}
    }
}

function countAllSongsAction(){
    return dispatch => {
        dispatch(request());
        countService.countAllSongs()
        .then(
            songs => dispatch(success(songs)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type:  homeConstants.COUNT_ALL_SONGS_REQUEST}
    }
    function success(songs){
        return {type: homeConstants.COUNT_ALL_SONGS_SUCCESS, songs}
    }
    function failure(error){
        return {type: homeConstants.COUNT_ALL_SONGS_FAILURE, error}
    }
}

function countAllUserAction(){
    return dispatch => {
        dispatch(request());
        countService.countAllUser()
        .then(
            users => dispatch(success(users)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type:  homeConstants.COUNT_ALL_USERS_REQUEST}
    }
    function success(users){
        return {type: homeConstants.COUNT_ALL_USERS_SUCCESS, users}
    }
    function failure(error){
        return {type: homeConstants.COUNT_ALL_USERS_FAILURE, error}
    }
}

export async function countAllSongs(){
    return await axios.get("/api/songs/count/all",{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}

export async function countAllUser(){
    return await axios.get("/api/users/count/all",{
        headers: {
          'Authorization': token()
        }}).then(
          (res) => {
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}

export async function countAllPoadCast(){
    return await axios.get("/api/poadCast/count/all",{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}

export async function countAllAudioBooks(){
    return await axios.get("/api/audioBooks/count/all",{
        headers: {
          'Authorization': token()
        }}).then(
          (res) => {
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}

export async function countAllByCountry(){
    return await axios.get("/api/users/country/count/all",{
        headers: {
          'Authorization': token()
        }}).then(
          (res) => {
            console.log("country----")
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}