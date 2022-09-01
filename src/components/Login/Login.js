import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import "../Admin/Songs/songs.css"
import {Grid,Paper,Avatar, TextField,FormControlLabel,Checkbox,Button, Typography, Link,Box} from '@mui/material';
import { registerAction,token,user } from './Utility/authenticatinReducer';
import { useNavigate,useLocation } from "react-router-dom";


function Login({handleChange}) { 
    let navigate = useNavigate();
    const location = useLocation();
    const paperstyle={padding:20,height: '80vh', width: 450, margin :"0 auto"} 
    const avatarstyle={backgroundColor :'#1bb7de'}
    const btstyle={margin:'5px 0'}
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const onChangeUserName= (e) => {
      setUserName(e.target.value )
    }


    const onChangePassword= (e) => {
      setPassword(e.target.value )
    }
    const login = useSelector((state) =>{
      console.log(state.loginUserReducer)
      return state.loginUserReducer
    })
    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("enter login form-----")
      if(userName  && password){
        const home = location.state || location.pathname
        dispatch(registerAction.logInActions(userName,password,home))  
        if(token != null && user().isAdmin == false){
          console.log("enter the home")
          navigate("/home")
        }
        else if(token != null && user().isAdmin == true){
          console.log("enter the admin")
          navigate("/admin")
        } 
      }
    
    }

  return (
    <Grid>
        <Paper elevation={2} style={paperstyle}>
            <Grid align='center'>
            <Avatar style={avatarstyle}>
            </Avatar>
            <h2>Sign In</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' onChange={onChangeUserName} required/>
            <input type='password' placeholder='password' minlength="8" onChange={onChangePassword} required/>
            <FormControlLabel control={
                   <Checkbox
                 name='checkbox'
                color='primary'
                  />
        }
        label='Remember me'
        />
        <Button type='submit' 
        sx={{ color: 'black', backgroundColor: 'pink', borderColor: 'black',mt:3,mb:2} }
       variant= 'contained' fullWidth style={btstyle}> Sign In</Button>
       </form>
        <Typography >
          <Link href='#'> Forgot password?</Link>
          </Typography>
          <Typography> Do you have an account?
          <Link href='#' onClick={()=>handleChange("event",1)}> Sign Up</Link>
          </Typography>
        </Paper>
    </Grid>
  )
}

export default Login