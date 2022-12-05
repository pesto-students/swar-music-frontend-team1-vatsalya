import axios from 'axios';
import { showSuccessToast } from '../../../Common/Toast';
import { token } from '../../../Login/Utility/authenticatinReducer';

const poadCastConstants = {
    GET_ALL_POADCAST_REQUEST: 'GET_ALL_POADCAST_REQUEST',
    GET_ALL_POADCAST_SUCCESS: 'GET_ALL_POADCAST_SUCCESS',
    GET_ALL_POADCAST_FAILURE: 'GET_ALL_POADCAST_FAILURE',
    DELETE_POADCAST_REQUEST: 'DELETE_POADCAST_REQUEST',
    DELETE_POADCAST_SUCCESS: ' DELETE_POADCAST_SUCCESS',
    DELETE_POADCAST_FAILURE: 'DELETE_POADCAST_FAILURE'
}

export const poadCastService = {
    getAllPoadCast,
    deletePoadCast
}

export const poadCastAction = {
    getAllPoadCastAction,
    deletePoadCastAction
}

export const poadCastsAdminReducer = (poadCasts = [], action) =>{
    switch(action.type){
        case poadCastConstants.GET_ALL_POADCAST_REQUEST:
            return {
                loggingIn: true,
                poadCasts : poadCasts
            };
        case poadCastConstants.GET_ALL_POADCAST_SUCCESS:
            return {
                loggedIn: true,
                poadCasts: action.poadCasts
            };
        case poadCastConstants.GET_ALL_POADCAST_FAILURE:
                return {};
        default:
            return poadCasts;
   }
}

export const deletePoadCastsAdminReducer = (audioBook = {}, action) =>{
    switch(action.type){
        case poadCastConstants.DELETE_POADCAST_REQUEST:
            return {
                loggingIn: true,
                audioBook : audioBook
            };
        case poadCastConstants.DELETE_POADCAST_SUCCESS:
            return {
                loggedIn: true,
                audioBook: action.audioBook
            };
        case poadCastConstants.DELETE_POADCAST_FAILURE:
                return {};
        default:
            return audioBook;
   }
}

function getAllPoadCastAction(){
    return dispatch => {
        dispatch(request());
        poadCastService.getAllPoadCast()
        .then(
            poadCasts => dispatch(success(poadCasts)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: poadCastConstants.GET_ALL_POADCAST_REQUEST}
    }
    function success(poadCasts){
        return {type: poadCastConstants.GET_ALL_POADCAST_SUCCESS, poadCasts}
    }
    function failure(error){
        return {type: poadCastConstants.GET_ALL_POADCAST_FAILURE, error}
    }
}

function  deletePoadCastAction(id){
    return dispatch => {
        dispatch(request());
        poadCastService.deletePoadCast(id)
        .then(
            audioBook => dispatch(success(audioBook)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: poadCastConstants.DELETE_POADCAST_REQUEST}
    }
    function success(poadCast){
        return {type: poadCastConstants.DELETE_POADCAST_SUCCESS, poadCast}
    }
    function failure(error){
        return {type: poadCastConstants.DELETE_POADCAST_FAILURE, error}
    }
}

export async function getAllPoadCast(){
    return await axios.get("https://swar-music.onrender.com/api/poadcast",{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            return res.data;
      
          }
        ).catch((err) => {
        })
}

export async function deletePoadCast(id){
    return await axios.delete(`https://swar-music.onrender.com/api/poadcast/${id}`,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            showSuccessToast("PoadCast Has been deleted!")
            setTimeout(() => { window.location.reload(true)},1000)
            return res.data;
      
          }
        ).catch((err) => {
        })
}
