import axios from 'axios';
import { token } from '../../../Login/Utility/authenticatinReducer';

const audioBooksConstants = {
    GET_ALL_AUDIOBOOKS_REQUEST: 'GET_ALL_AUDIOBOOKS_REQUEST',
    GET_ALL_AUDIOBOOKS_SUCCESS: 'GET_ALL_AUDIOBOOKS_SUCCESS',
    GET_ALL_AUDIOBOOKS_FAILURE: 'GET_ALL_AUDIOBOOKS_FAILURE',
    GET_AUDIOBOOKS_BY_NAME_REQUEST: 'GET_AUDIOBOOKS_BY_NAME_REQUEST',
    GET_AUDIOBOOKS_BY_NAME_SUCCESS: 'GET_AUDIOBOOKS_BY_NAME_SUCCESS',
    GET_AUDIOBOOKS_BY_NAME_FAILURE: 'GET_AUDIOBOOKS_BY_NAME_FAILURE',
}

export const audioBooksService = {
    getAllAudioBooks,
    findAudioBooksByName
}

export const audioBooksAction = {
    getAllAudioBooksAction,
    getAllAudioBookByNameAction
}

export const audioBooksReducer = (audioBooks = [], action) =>{
    switch(action.type){
        case audioBooksConstants.GET_ALL_AUDIOBOOKS_REQUEST:
            console.log("enter")
            return {
                loggingIn: true,
                audioBooks : audioBooks
            };
        case audioBooksConstants.GET_ALL_AUDIOBOOKS_SUCCESS:
            return {
                loggedIn: true,
                audioBooks: action.audioBooks
            };
        case audioBooksConstants.GET_ALL_AUDIOBOOKS_FAILURE:
                return {};
        default:
            console.log("enter")
            return audioBooks;
   }
}

export const findAudioBooksByNameReducer = (audioBook={}, action) =>{
    switch(action.type){
        case audioBooksConstants.GET_AUDIOBOOKS_BY_NAME_REQUEST:
            return {
                loggingIn: true
            };
        case audioBooksConstants.GET_AUDIOBOOKS_BY_NAME_SUCCESS:
            return {
                loggedIn: true,
                audioBook: action.audioBook
            };
        case audioBooksConstants.GET_AUDIOBOOKS_BY_NAME_FAILURE:
            return {};
        default:
            return audioBook;
   }
}

function getAllAudioBooksAction(){
    return dispatch => {
        dispatch(request());
        audioBooksService.getAllAudioBooks()
        .then(
            audioBooks => dispatch(success(audioBooks)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type: audioBooksConstants.GET_ALL_AUDIOBOOKS_REQUEST}
    }
    function success(audioBooks){
        return {type: audioBooksConstants.GET_ALL_AUDIOBOOKS_SUCCESS, audioBooks}
    }
    function failure(error){
        return {type: audioBooksConstants.GET_ALL_AUDIOBOOKS_FAILURE, error}
    }
}

function getAllAudioBookByNameAction(name){
    return dispatch => {
        dispatch(request());
        audioBooksService.findAudioBooksByName(name)
        .then(
            audioBook => dispatch(success(audioBook)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type: audioBooksConstants.GET_AUDIOBOOKS_BY_NAME_REQUEST}
    }
    function success(audioBook){
        return {type: audioBooksConstants.GET_AUDIOBOOKS_BY_NAME_SUCCESS, audioBook}
    }
    function failure(error){
        return {type:audioBooksConstants.GET_AUDIOBOOKS_BY_NAME_REQUEST, error}
    }
}

export async function getAllAudioBooks(){
    return await axios.get("https://swar-music.herokuapp.com/api/audiobooks",{
        headers: {
          'Authorization': token()
        }}).then(
          (res) => {
            // setUsers(res.data);
            console.log("audioBooks")
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}

export async function findAudioBooksByName(name){
    return await axios.get(`https://swar-music.herokuapp.com/api/audiobooks/name/${name}`).then(
          (res) => {
            console.log("audioBooks name by response----")
            console.log(res.data)
            return res.data;
          }
        ).catch((err) => {
          console.log(err);
          return err;
        })
}