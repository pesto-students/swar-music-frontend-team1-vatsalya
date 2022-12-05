import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { showErrorToast, showSuccessToast } from '../../Common/Toast';
import { history } from '../../store/History';
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
                token: action.token,
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

function signUpActions(username,email,password,confirmPassword,country){
    return dispatch => {
        dispatch(request());
        registerService.registerForm(username,email,password,confirmPassword,country)
        .then(
            user => dispatch(success(user)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
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
        registerService.logInForm(username,password,home)
        .then(
            token => dispatch(success(token,jwtDecode(token))),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        return {type: authentionConstants.LOGIN_USER_REQUEST}
    }
    function success(token,user){
        return {type: authentionConstants.LOGIN_USER_SUCCESS, token,user}
    }
    function failure(error){
        return {type: authentionConstants.LOGIN_USER_FAILURE, error}
    }
}

export async function registerForm(username,email,password,confirmPassword,country){
    const initialSignUpObject = {username: username, email: email, password: password, confirmPassword: confirmPassword,
    country: country};
    return await axios.post("https://swar-music.onrender.com/api/auth/register",initialSignUpObject).then(
          (res) => {
            showSuccessToast("Thank you for signing up with us!")
            return res.data;
      
          }
        ).catch((err) => {
          showErrorToast("Something is wrong!")
        })
}

export async function logInForm(username,password,from){
    const initialSignUpObject = {username: username, password: password};
    return await axios.post("https://swar-music.onrender.com/api/auth/login",initialSignUpObject).then(
          (res) => {
            localStorage.setItem('Token', res.data);
            const user = jwtDecode(res.data);
            showSuccessToast("You are logged In!")
            if(user.isAdmin){
                history.push('/admin')
                window.location.reload('/admin');
            }else{
                history.push(from);
                window.location.reload(from);
            }            
            return res.data;
      
          }
        ).catch((err) => {
          showErrorToast("Invalid user name or password")
          localStorage.clear();  
        })
}

export const token = () => {
    const authToken = localStorage.getItem('Token');
    if(!authToken){
        return null;
    }
    return authToken;}


