import axios from 'axios';
import { token } from '../../../Login/Utility/authenticatinReducer';

const poadCastConstants = {
    GET_ALL_POADCAST_REQUEST: 'GET_ALL_POADCAST_REQUEST',
    GET_ALL_POADCAST_SUCCESS: 'GET_ALL_POADCAST_SUCCESS',
    GET_ALL_POADCAST_FAILURE: 'GET_ALL_POADCAST_FAILURE',
    GET_POADCAST_BY_NAME_REQUEST: 'GET_POADCAST_BY_NAME_REQUEST',
    GET_POADCAST_BY_NAME_SUCCESS: 'GET_POADCAST_BY_NAME_SUCCESS',
    GET_POADCAST_BY_NAME_FAILURE: 'GET_POADCAST_BY_NAME_FAILURE',
}

export const poadCastsService = {
    getAllPoadCasts,
    findPoadCastByName
}

export const poadCastsAction = {
    getAllPoadCastsAction,
    getAllPoadCastByNameAction
}

export const poadCastsReducer = (poadCasts = [], action) =>{
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

export const findPoadCastByNameReducer = (poadCast={}, action) =>{
    switch(action.type){
        case poadCastConstants.GET_POADCAST_BY_NAME_REQUEST:
            return {
                loggingIn: true
            };
        case poadCastConstants.GET_POADCAST_BY_NAME_SUCCESS:
            return {
                loggedIn: true,
                poadCast: action.poadCast
            };
        case poadCastConstants.GET_POADCAST_BY_NAME_FAILURE:
            return {};
        default:
            return poadCast;
   }
}

function getAllPoadCastsAction(){
    return dispatch => {
        dispatch(request());
        poadCastsService.getAllPoadCasts()
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

function getAllPoadCastByNameAction(name){
    return dispatch => {
        dispatch(request());
        poadCastsService.findPoadCastByName(name)
        .then(
            poadCast => dispatch(success(poadCast)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: poadCastConstants.GET_POADCAST_BY_NAME_REQUEST}
    }
    function success(poadCast){
        return {type: poadCastConstants.GET_POADCAST_BY_NAME_SUCCESS, poadCast}
    }
    function failure(error){
        return {type: poadCastConstants.GET_POADCAST_BY_NAME_REQUEST, error}
    }
}

export async function getAllPoadCasts(){
    return await axios.get("https://swar-music.herokuapp.com/api/poadcast",{
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

export async function findPoadCastByName(name){
    return await axios.get(`https://swar-music.herokuapp.com/api/poadcast/name/${name}`).then(
          (res) => {
            return res.data;
          }
        ).catch((err) => {
          return err;
        })
}