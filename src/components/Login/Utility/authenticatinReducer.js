import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {useNavigate} from "react-router-dom"
const authentionConstants = {
    CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILURE: 'CREATE_USER_FAILURE',
    LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE'
}

export const registerService = {
    registerForm,
    logInForm
}

export const registerAction = {
    signUpActions,
    logInActions
}
const initialState = {};
export const submitUserReducer = (state = initialState, action) =>{
    switch(action.type){
        case authentionConstants.CREATE_USER_REQUEST:
            return {
                loggingIn: true,
            };
        case authentionConstants.CREATE_USER_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case authentionConstants.CREATE_USER_FAILURE:
            return {
                loggingIn: false,
            };
        default:
            return state;
   }
}
const logInState = {}
export const loginUserReducer = (state = logInState, action) =>{
    switch(action.type){
        case authentionConstants.LOGIN_USER_REQUEST:
            return {
                loggingIn: true,
            };
        case authentionConstants.LOGIN_USER_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case authentionConstants.LOGIN_USER_FAILURE:
            return {
                loggingIn: false,
            };
        default:
            return state;
   }
}

function signUpActions(username,email,password,confirmPassword){
    return dispatch => {
        dispatch(request());
        registerService.registerForm(username,email,password,confirmPassword)
        .then(
            user => dispatch(success(user)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type: authentionConstants.CREATE_USER_REQUEST}
    }
    function success(user){
        return {type: authentionConstants.CREATE_USER_SUCCESS, user}
    }
    function failure(error){
        return {type: authentionConstants.CREATE_USER_FAILURE, error}
    }
}

function logInActions(username,password,home){
    return dispatch => {
        dispatch(request());
        console.log("username----")
        console.log("password----")
        registerService.logInForm(username,password,home)
        .then(
            user => dispatch(success(user)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter login request")
        return {type: authentionConstants.LOGIN_USER_REQUEST}
    }
    function success(user){
        console.log("enter success")
        return {type: authentionConstants.LOGIN_USER_SUCCESS, user}
    }
    function failure(error){
        return {type: authentionConstants.LOGIN_USER_FAILURE, error}
    }
}

export async function registerForm(username,email,password,confirmPassword){
    const initialSignUpObject = {username: username, email: email, password: password, confirmPassword: confirmPassword};
    return await axios.post("/api/auth/register",initialSignUpObject).then(
          (res) => {
            // setUsers(res.data);
            console.log("register---")
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}

export async function logInForm(username,password,home){
    // const navigate = useNavigate();
    console.log("enter logn form")
    const initialSignUpObject = {username: username, password: password};
    return await axios.post("/api/auth/login",initialSignUpObject).then(
          (res) => {
            // setUsers(res.data);
            
            console.log("login---")
            // navigate(home);
            sessionStorage.setItem('Token', res.data);
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}

export const token = () => {
    const authToken = sessionStorage.getItem('Token');
    if(!authToken){
        return null;
    }
    return authToken;}

console.log("--------",token())

export const user = () =>{
    if(token() == null){
        return {};
    }
    const authUser = jwtDecode(token())
    return authUser;
} ;
console.log("--------user",user())
