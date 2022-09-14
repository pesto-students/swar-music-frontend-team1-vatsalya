import axios from 'axios';
import { showSuccessToast } from '../../../Common/Toast';
import { token } from '../../../Login/Utility/authenticatinReducer';

const audioBooksConstants = {
    GET_ALL_AUDIOBOOKS_REQUEST: 'GET_ALL_AUDIOBOOKS_REQUEST',
    GET_ALL_AUDIOBOOKS_SUCCESS: 'GET_ALL_AUDIOBOOKS_SUCCESS',
    GET_ALL_AUDIOBOOKS_FAILURE: 'GET_ALL_AUDIOBOOKS_FAILURE',
    DELETE_AUDIOBOOKS_REQUEST: 'DELETE_AUDIOBOOKS_REQUEST',
    DELETE_AUDIOBOOKS_SUCCESS: ' DELETE_AUDIOBOOKS_SUCCESS',
    DELETE_AUDIOBOOKS_FAILURE: 'DELETE_AUDIOBOOKS_FAILURE'
}

export const audioBooksService = {
    getAllAudioBooks,
    deleteAudioBooks
}

export const audioBooksAction = {
    getAllAudioBooksAction,
    deleteAudioBooksAction
}

export const audioBooksAdminReducer = (audioBooks = [], action) =>{
    switch(action.type){
        case audioBooksConstants.GET_ALL_AUDIOBOOKS_REQUEST:
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
            return audioBooks;
   }
}

export const deleteAudioBooksAdminReducer = (audioBook = {}, action) =>{
    switch(action.type){
        case audioBooksConstants.DELETE_AUDIOBOOKS_REQUEST:
            return {
                loggingIn: true,
                audioBook : audioBook
            };
        case audioBooksConstants.DELETE_AUDIOBOOKS_SUCCESS:
            return {
                loggedIn: true,
                audioBook: action.audioBook
            };
        case audioBooksConstants.DELETE_AUDIOBOOKS_FAILURE:
                return {};
        default:
            return audioBook;
   }
}

function  getAllAudioBooksAction(){
    return dispatch => {
        dispatch(request());
        audioBooksService.getAllAudioBooks()
        .then(
            audioBooks => dispatch(success(audioBooks)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: audioBooksConstants.GET_ALL_AUDIOBOOKS_REQUEST}
    }
    function success(audioBooks){
        return {type: audioBooksConstants.GET_ALL_AUDIOBOOKS_SUCCESS, audioBooks}
    }
    function failure(error){
        return {type: audioBooksConstants.GET_ALL_AUDIOBOOKS_FAILURE, error}
    }
}

function  deleteAudioBooksAction(id){
    return dispatch => {
        dispatch(request());
        audioBooksService.deleteAudioBooks(id)
        .then(
            audioBook => dispatch(success(audioBook)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: audioBooksConstants.DELETE_AUDIOBOOKS_REQUEST}
    }
    function success(audioBook){
        return {type: audioBooksConstants.DELETE_AUDIOBOOKS_SUCCESS, audioBook}
    }
    function failure(error){
        return {type: audioBooksConstants.DELETE_AUDIOBOOKS_FAILURE, error}
    }
}

export async function getAllAudioBooks(){
    return await axios.get("https://swar-music.herokuapp.com/api/audiobooks",{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            return res.data;
      
          }
        ).catch((err) => {
          return err;
        })
}

export async function deleteAudioBooks(id){
    return await axios.delete(`https://swar-music.herokuapp.com/api/audiobooks/${id}`,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            showSuccessToast("AudioBook Has been deleted!")
            setTimeout(() => { window.location.reload(true)},1000)
            return res.data;
          }
        ).catch((err) => {
          return err;
        })
}
