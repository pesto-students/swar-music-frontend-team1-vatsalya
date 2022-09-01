import axios from 'axios';

export const usersConstants = {
    GET_ALL_USER_REQUEST: 'GET_ALL_USER_REQUEST',
    GET_ALL_USER_SUCCESS: 'GET_ALL_USER_SUCCESS',
    GET_ALL_USER_FAILURE: 'GET_ALL_USER_FAILURE',
}

export const userService = {
    getAllUsers
}

export const userAction = {
    getAllUserAction
}

export const usersReducer = (users = [], action) =>{
    switch(action.type){
        case usersConstants.GET_ALL_USER_REQUEST:
            console.log("enter")
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
            console.log("enter")
            return users;
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
        console.log("enter request")
        return {type: usersConstants.GET_ALL_USER_REQUEST}
    }
    function success(users){
        return {type: usersConstants.GET_ALL_USER_SUCCESS, users}
    }
    function failure(error){
        return {type: usersConstants.GET_ALL_USER_FAILURE, error}
    }
}

export async function getAllUsers(){
    return await axios.get("/api/users",{
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjdkODRlZWQwY2IwYzAzMWEwZDkzNCIsImlzQWRtaW4iOnRydWUsInVzZXJuYW1lIjoiU3lzQWRtaW43IiwiaWF0IjoxNjYwNTA0Mzc0fQ.mZrTPwWj3MlhrH5MfSunDQVGbpv1d34gr7IrkUFtfTc`
        }}).then(
          (res) => {
            // setUsers(res.data);
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}

// export const store = createStore(combineReducers({usersReducer}), applyMiddleware(thunk)); 