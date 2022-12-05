import axios from 'axios';
import { showSuccessToast } from '../../../Common/Toast';
import { token } from '../../../Login/Utility/authenticatinReducer';

export const usersConstants = {
    GET_ALL_USER_REQUEST: 'GET_ALL_USER_REQUEST',
    GET_ALL_USER_SUCCESS: 'GET_ALL_USER_SUCCESS',
    GET_ALL_USER_FAILURE: 'GET_ALL_USER_FAILURE',
    DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
    DELETE_USER_SUCCESS: ' DELETE_USER_SUCCESS',
    DELETE_USER_FAILURE: 'DELETE_USER_FAILURE'
}

export const userService = {
    getAllUsers,
    deleteUsers
}

export const userAction = {
    getAllUserAction,
    deleteUsersAction
}

export const usersReducer = (users = [], action) =>{
    switch(action.type){
        case usersConstants.GET_ALL_USER_REQUEST:
            return {
                loggingIn: true,
                users : users
            };
        case usersConstants.GET_ALL_USER_SUCCESS:
            return {
                loggedIn: true,
                 users: action.users
            };
        case usersConstants.GET_ALL_USER_FAILURE:
                return {};
        default:
            return users;
   }
}

export const deleteUserReducer = (songs = [], action) =>{
    switch(action.type){
        case usersConstants.DELETE_USER_REQUEST:
            return {
                loggingIn: true,
                songs : songs
            };
        case usersConstants.DELETE_USER_SUCCESS:
            return {
                loggedIn: true,
                 songs: action.songs
            };
        case usersConstants.DELETE_USER_FAILURE:
                return {};
        default:
            return songs;
   }
}

function getAllUserAction(){
    return dispatch => {
        dispatch(request());
        userService.getAllUsers()
        .then(
            users => dispatch(success(users)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: usersConstants.GET_ALL_USER_REQUEST}
    }
    function success(users){
        return {type: usersConstants.GET_ALL_USER_SUCCESS, users}
    }
    function failure(error){
        return {type: usersConstants.GET_ALL_USER_FAILURE, error}
    }
}

function  deleteUsersAction(id){
    return dispatch => {
        dispatch(request());
        userService.deleteUsers(id)
        .then(
            user => dispatch(success(user)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: usersConstants.DELETE_USER_REQUEST}
    }
    function success(user){
        return {type: usersConstants.DELETE_USER_SUCCESS, user}
    }
    function failure(error){
        return {type: usersConstants.DELETE_USER_FAILURE, error}
    }
}

export async function getAllUsers(){
    return await axios.get("https://swar-music.onrender.com/api/users",{
        headers: {
          'Authorization': token()
        }}).then(
          (res) => {
            return res.data;
      
          }
        ).catch((err) => {
        })
}

export async function deleteUsers(id){
    return await axios.delete(`https://swar-music.onrender.com/api/users/${id}`,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            showSuccessToast("User Has been deleted!")
            setTimeout(() => { window.location.reload(true)},1000)
            return res.data;
      
          }
        ).catch((err) => {
        })
}
