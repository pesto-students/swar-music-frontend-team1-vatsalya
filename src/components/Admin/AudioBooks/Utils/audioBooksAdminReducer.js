import axios from 'axios';
import { token } from '../../../Login/Utility/authenticatinReducer';

const audioBooksConstants = {
    GET_ALL_AUDIOBOOKS_REQUEST: 'GET_ALL_AUDIOBOOKS_REQUEST',
    GET_ALL_AUDIOBOOKS_SUCCESS: 'GET_ALL_AUDIOBOOKS_SUCCESS',
    GET_ALL_AUDIOBOOKS_FAILURE: 'GET_ALL_AUDIOBOOKS_FAILURE',
}

export const audioBooksService = {
    getAllAudioBooks
}

export const audioBooksAction = {
    getAllAudioBooksAction
}

export const audioBooksAdminReducer = (audioBooks = [], action) =>{
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

function  getAllAudioBooksAction(){
    return dispatch => {
        dispatch(request());
        audioBooksService. getAllAudioBooks()
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

export async function getAllAudioBooks(){
    return await axios.get("https://swar-music.herokuapp.com/api/audiobooks",{
        headers: {
          'Authorization':  token()
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
