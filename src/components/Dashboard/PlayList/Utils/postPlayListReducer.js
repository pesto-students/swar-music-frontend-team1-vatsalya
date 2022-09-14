import axios from 'axios';
import { showSuccessToast } from '../../../Common/Toast';
import { token } from '../../../Login/Utility/authenticatinReducer';

export const playListService = {
    createPlayListForm,
    getAllPlayListByUserId,
    addSongToPlayList,
    findSongsByPlayListId,
    deletePlayListById,
    editPlayListById
}

export const playListAction = {
    createPlayListAction,
    getAllPlayListByIdAction,
    addSongsToPlayListAction,
    getPlayListAction,
    deletePlayListAction,
    updatePlayListById
}


const playListConstants = {
    CREATE_PLAYLIST_REQUEST: ' CREATE_PLAYLIST_REQUEST',
    CREATE_PLAYLIST_SUCCESS: 'CREATE_PLAYLIST_SUCCESS',
    CREATE_PLAYLIST_FAILURE: 'CREATE_PLAYLIST_FAILURE',
    GET_PLAYLIST_BY_ID_REQUEST: 'GET_PLAYLIST_BY_ID_REQUEST',
    GET_PLAYLIST_BY_ID_SUCCESS: 'GET_PLAYLIST_BY_ID_SUCCESS',
    GET_PLAYLIST_BY_ID_FAILURE: 'GET_PLAYLIST_BY_ID_FAILURE',
    CREATE_PLAYLIST_BY_SONGS_REQUEST: ' CREATE_PLAYLIST_BY_SONGS_REQUEST',
    CREATE_PLAYLIST_BY_SONGS_SUCCESS: 'CREATE_PLAYLIST_BY_SONGS_SUCCESS',
    CREATE_PLAYLIST_BY_SONGS_FAILURE: 'CREATE_PLAYLIST_BY_SONGS_FAILURE',
    GET_SONGS_BY_PLAYLIST_REQUEST: 'GET_SONGS_BY_PLAYLIST_REQUEST',
    GET_SONGS_BY_PLAYLIST_SUCCESS: 'GET_SONGS_BY_PLAYLIST_SUCCESS',
    GET_SONGS_BY_PLAYLIST_FAILURE: 'GET_SONGS_BY_PLAYLIST_FAILURE',
    DELETE_PLAYLIST_BY_ID_REQUEST: ' DELETE_PLAYLIST_BY_ID_REQUEST',
    DELETE_PLAYLIST_BY_ID_SUCCESS: 'DELETE_PLAYLIST_BY_ID_SUCCESS',
    DELETE_PLAYLIST_BY_ID_FAILURE: 'DELETE_PLAYLIST_BY_ID_FAILURE',
    UPDATE_PLAYLIST_BY_ID_REQUEST: 'UPDATE_PLAYLIST_BY_ID_REQUEST',
    UPDATE_PLAYLIST_BY_ID_SUCCESS: 'UPDATE_PLAYLIST_BY_ID_SUCCESS',
    UPDATE_PLAYLIST_BY_ID_FAILURE: 'UPDATE_PLAYLIST_BY_ID_FAILURE'
}

export const deletePlayListReducer = (playList={}, action) =>{
    switch(action.type){
        case playListConstants.DELETE_PLAYLIST_BY_ID_REQUEST:
            return {
                loggingIn: true
            };
        case playListConstants.DELETE_PLAYLIST_BY_ID_SUCCESS:
            return {
                loggedIn: true,
                playList: action.playList
            };
        case playListConstants.DELETE_PLAYLIST_BY_ID_FAILURE:
            return {};
        default:
            return playList;
   }
}

export const getPlayListSongsReducer = (playList=[], action) =>{
    switch(action.type){
        case playListConstants.GET_SONGS_BY_PLAYLIST_REQUEST:
            return {
                loggingIn: true
            };
        case playListConstants.GET_SONGS_BY_PLAYLIST_SUCCESS:
            return {
                loggedIn: true,
                playList: action.playList
            };
        case playListConstants.GET_SONGS_BY_PLAYLIST_FAILURE:
            return {};
        default:
            return playList;
   }
}

export const createPlayListSongsReducer = (playList={}, action) =>{
    switch(action.type){
        case playListConstants.CREATE_PLAYLIST_BY_SONGS_REQUEST:
            return {
                loggingIn: true
            };
        case playListConstants.CREATE_PLAYLIST_BY_SONGS_SUCCESS:
            return {
                loggedIn: true,
                playList: action.playList
            };
        case playListConstants.CREATE_PLAYLIST_BY_SONGS_FAILURE:
            return {};
        default:
            return playList;
   }
}

export const createPlayListReducer = (playList={}, action) =>{
    switch(action.type){
        case playListConstants.CREATE_PLAYLIST_REQUEST:
            return {
                loggingIn: true
            };
        case playListConstants.CREATE_PLAYLIST_SUCCESS:
            return {
                loggedIn: true,
                playList: action.playList
            };
        case playListConstants.CREATE_PLAYLIST_FAILURE:
            return {};
        default:
            return playList;
   }
}


export const getAllPlayListReducer = (playList=[], action) =>{
    switch(action.type){
        case playListConstants.GET_PLAYLIST_BY_ID_REQUEST:
            return {
                loggingIn: true,
                playList: playList
            };
        case playListConstants.GET_PLAYLIST_BY_ID_SUCCESS:
            return {
                loggedIn: true,
                playList: action.playList
            };
        case playListConstants.GET_PLAYLIST_BY_ID_FAILURE:
            return {};
        default:
            return playList;
   }
}


export const editPlayListReducer = (playList={}, action) =>{
    switch(action.type){
        case playListConstants.UPDATE_PLAYLIST_BY_ID_REQUEST:
            return {
                loggingIn: true,
                playList: playList
            };
        case playListConstants.UPDATE_PLAYLIST_BY_ID_SUCCESS:
            return {
                loggedIn: true,
                playList: action.playList
            };
        case playListConstants.UPDATE_PLAYLIST_BY_ID_FAILURE:
            return {};
        default:
            return playList;
   }
}

function deletePlayListAction(playListId){
    return dispatch => {
        dispatch(request());
        playListService.deletePlayListById(playListId)
        .then(
            playList => dispatch(success(playList)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: playListConstants.DELETE_PLAYLIST_BY_ID_REQUEST}
    }
    function success(playList){
        return {type: playListConstants.DELETE_PLAYLIST_BY_ID_SUCCESS, playList}
    }
    function failure(error){
        return {type: playListConstants.DELETE_PLAYLIST_BY_ID_FAILURE, error}
    }
}

function getPlayListAction(playListId){
    return dispatch => {
        dispatch(request());
        playListService.findSongsByPlayListId(playListId)
        .then(
            playList => dispatch(success(playList)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: playListConstants.GET_SONGS_BY_PLAYLIST_REQUEST}
    }
    function success(playList){
        return {type: playListConstants.GET_SONGS_BY_PLAYLIST_SUCCESS, playList}
    }
    function failure(error){
        return {type: playListConstants.GET_SONGS_BY_PLAYLIST_FAILURE, error}
    }
}

function createPlayListAction(userId,playListName){
    return dispatch => {
        dispatch(request());
        playListService.createPlayListForm(userId,playListName)
        .then(
            playList => dispatch(success(playList)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: playListConstants.CREATE_PLAYLIST_REQUEST}
    }
    function success(playList){
        return {type: playListConstants.CREATE_PLAYLIST_SUCCESS, playList}
    }
    function failure(error){
        return {type: playListConstants.CREATE_PLAYLIST_FAILURE, error}
    }
}

function addSongsToPlayListAction(playListId,songsId){
    return dispatch => {
        dispatch(request());
        playListService.addSongToPlayList(playListId,songsId)
        .then(
            playList => dispatch(success(playList)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: playListConstants.CREATE_PLAYLIST_BY_SONGS_REQUEST}
    }
    function success(playList){
        return {type: playListConstants.CREATE_PLAYLIST_BY_SONGS_SUCCESS, playList}
    }
    function failure(error){
        return {type: playListConstants.CREATE_PLAYLIST_BY_SONGS_FAILURE, error}
    }
}

function getAllPlayListByIdAction(userId){
    return dispatch => {
        dispatch(request());
        playListService.getAllPlayListByUserId(userId)
        .then(
            playList => dispatch(success(playList)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: playListConstants.GET_PLAYLIST_BY_ID_REQUEST}
    }
    function success(playList){
        return {type: playListConstants.GET_PLAYLIST_BY_ID_SUCCESS, playList}
    }
    function failure(error){
        return {type: playListConstants.GET_PLAYLIST_BY_ID_FAILURE, error}
    }
}

function updatePlayListById(playListId,name){
    return dispatch => {
        dispatch(request());
        playListService.editPlayListById(playListId,name)
        .then(
            playList => dispatch(success(playList)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: playListConstants.UPDATE_PLAYLIST_BY_ID_REQUEST}
    }
    function success(playList){
        return {type: playListConstants.UPDATE_PLAYLIST_BY_ID_SUCCESS, playList}
    }
    function failure(error){
        return {type: playListConstants.UPDATE_PLAYLIST_BY_ID_FAILURE, error}
    }
}

export async function createPlayListForm(user_id,name){
    const initialPlayListObject = {user_id: user_id, name: name};
    return await axios.post("https://swar-music.herokuapp.com/api/songs/post/playlist",initialPlayListObject,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            showSuccessToast("New PlayList Has Been Created!")
            setTimeout(() => { window.location.reload(true)},3000)
            return res.data;
          }
        ).catch((err) => {
          return err;
         
        })
}

export async function getAllPlayListByUserId(userId){
    return await axios.get(`https://swar-music.herokuapp.com/api/songs/get/playlist/${userId}`,{
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

export async function addSongToPlayList(playListId,songsId){
    const initialPlayListObject = {_id: songsId};
    return await axios.post(`https://swar-music.herokuapp.com/api/songs/add/playlist/songs/${playListId}` ,initialPlayListObject,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            showSuccessToast("Song has Been added to Your PlayList")
            return res.data;
          }
        ).catch((err) => {
          return err;
         
        })
}

export async function findSongsByPlayListId(playListId){
    return await axios.get(`https://swar-music.herokuapp.com/api/songs/find/playlist/songs/${playListId}`,{
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

export async function deletePlayListById(playListId){
    return await axios.delete(`https://swar-music.herokuapp.com/api/songs/playList/${playListId}`,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            showSuccessToast("PlayList Has Been Deleted!")
            setTimeout(() => { window.location.reload(true)},1000)
            
            return res.data;
          }
        ).catch((err) => {
          return err;
         
        })
}

export async function editPlayListById(playListId,name){
    const initialPlayListObject = {'name': name};
    return await axios.put(`https://swar-music.herokuapp.com/api/songs/update/playList/${playListId}`,initialPlayListObject,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            showSuccessToast("PlayList Has Been Updated")
            setTimeout(() => { window.location.reload(true)},1000)
            
            return res.data;
          }
        ).catch((err) => {
          return err;
         
        })
}