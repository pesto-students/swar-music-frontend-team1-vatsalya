import axios from 'axios';
import { token } from '../../../Login/Utility/authenticatinReducer';

const poadCastConstants = {
    GET_ALL_POADCAST_REQUEST: 'GET_ALL_POADCAST_REQUEST',
    GET_ALL_POADCAST_SUCCESS: 'GET_ALL_POADCAST_SUCCESS',
    GET_ALL_POADCAST_FAILURE: 'GET_ALL_POADCAST_FAILURE',
}

export const poadCastService = {
    getAllPoadCast
}

export const poadCastAction = {
    getAllPoadCastAction
}

export const poadCastsAdminReducer = (poadCasts = [], action) =>{
    switch(action.type){
        case poadCastConstants.GET_ALL_POADCAST_REQUEST:
            console.log("enter")
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
            console.log("enter")
            return poadCasts;
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
        console.log("enter request")
        return {type: poadCastConstants.GET_ALL_POADCAST_REQUEST}
    }
    function success(poadCasts){
        return {type: poadCastConstants.GET_ALL_POADCAST_SUCCESS, poadCasts}
    }
    function failure(error){
        return {type: poadCastConstants.GET_ALL_POADCAST_FAILURE, error}
    }
}

export async function getAllPoadCast(){
    return await axios.get("https://swar-music.herokuapp.com/api/poadcast",{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            // setUsers(res.data);
            console.log("poadCast")
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}
