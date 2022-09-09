import axios from 'axios';

export const songService = {
    findSongsByName
}

export const songAction = {
    getAllSongByNameAction
}


const songsConstants = {
    GET_SONGS_BY_NAME_REQUEST: 'GET_SONGS_BY_NAME_REQUEST',
    GET_SONGS_BY_NAME_SUCCESS: 'GET_SONGS_BY_NAME_SUCCESS',
    GET_SONGS_BY_NAME_FAILURE: 'GET_SONGS_BY_NAME_FAILURE',
}

export const findSongByNameReducer = (song={}, action) =>{
    switch(action.type){
        case songsConstants.GET_SONGS_BY_NAME_REQUEST:
            return {
                loggingIn: true
            };
        case songsConstants.GET_SONGS_BY_NAME_SUCCESS:
            return {
                loggedIn: true,
                song: action.song
            };
        case songsConstants.GET_SONGS_BY_NAME_FAILURE:
            return {};
        default:
            return song;
   }
}

function getAllSongByNameAction(name){
    return dispatch => {
        dispatch(request());
        songService.findSongsByName(name)
        .then(
            song => dispatch(success(song)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type: songsConstants.GET_SONGS_BY_NAME_REQUEST}
    }
    function success(song){
        return {type: songsConstants.GET_SONGS_BY_NAME_SUCCESS, song}
    }
    function failure(error){
        return {type: songsConstants.GET_SONGS_BY_NAME_FAILURE, error}
    }
}

export async function findSongsByName(name){
    return await axios.get(`http://localhost:8900/api/songs/name/${name}`).then(
          (res) => {
            console.log("songs name by response----")
            console.log(res.data)
            return res.data;
          }
        ).catch((err) => {
          console.log(err);
          return err;
        })
}