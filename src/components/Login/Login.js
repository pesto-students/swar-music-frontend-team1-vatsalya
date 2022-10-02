import React,{ useRef, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import "../Admin/Songs/songs.css"
import {Grid,Paper,Avatar,FormControlLabel,Checkbox,Button, Typography, Link,Box, Stack} from '@mui/material';
import { registerAction } from './Utility/authenticatinReducer';
import { useLocation } from "react-router-dom";
import SignInImage from './SignInImage.png';
import Divider from '@mui/material/Divider';


function Login({handleChange}) { 
    const location = useLocation();
    const paperstyle={padding:20, width: 450, margin :"0 auto"} 
    const avatarstyle={backgroundColor :'#1bb7de'}
    const btstyle={margin:'5px 0'}
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const users = useRef({});
    const onChangeUserName= (e) => {
      setUserName(e.target.value )
    }

    const onChangePassword= (e) => {
      setPassword(e.target.value )
    }

    const login = useSelector((state) =>{
      users.current = state.loginUserReducer.user;
      return state.loginUserReducer
    })
    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(userName  && password){
        const {from} = location.state || {from: {pathname: "/home"}};
        dispatch(registerAction.logInActions(userName,password,from)) 
      }
    
    }

    const submitGuestUser = (e) =>{
      e.preventDefault();
      if(userName  && password){
        const {from} = location.state || {from: {pathname: "/home"}};
        dispatch(registerAction.logInActions("TestUser01","test12345",from)) 
      }
    }

    const submitGuestAdmin = (e) =>{
      e.preventDefault();
      if(userName  && password){
        const {from} = location.state || {from: {pathname: "/home"}};
        dispatch(registerAction.logInActions("SysAdmin7","password-a",from)) 
      }
    }

  return (
    <Grid>
        <Paper elevation={20} style={paperstyle}>
            <Grid align='center'>
            <Avatar variant={"rounded"} alt="SignInimage" src={SignInImage} style={{
    width: 250,
    height: 250,
    mt:0
  }} />      
            <Stack direction='row' alignItems='center' sx={{ justifyContent:'center',mt:'5px',mb:'5px'}} spacing={2}>
            <h2>Welcome Back</h2>
            </Stack>
            <div className="guestUsers">
              <form onSubmit={submitGuestAdmin}>
              <Button variant="contained"
              type='submit'
              > GUEST ADMIN</Button>
              </form>
              <form onSubmit={submitGuestUser}>
              <Button 
              type='submit'
              variant="contained"> GUEST USER</Button>
              </form>
            </div>

            <div className="seperator"> <Divider />Or</div>
            </Grid>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' onChange={onChangeUserName} required/>
            <input type='password' placeholder='password' minlength="8" onChange={onChangePassword} required/>
            <FormControlLabel control={
                   <Checkbox
                 name='checkbox'
                sx={{Color:'black'}}
                  />
        }
        label='Remember me'
        />
        <Button type='submit' 
        sx={{ color: 'white', borderColor: 'black',mt:3,mb:2,backgroundColor: 'black',
        color: 'white',
        '&:hover': {
          backgroundColor: 'black',
          color: 'white',
          boxShadow: '0 5px 20px yellow'
        } }}
       variant= 'contained' fullWidth style={btstyle}> Sign In</Button>
       </form>
         <Typography sx={{mb:"2px",mt:"10px", textAlign:"center"}}> Do you have an account?
          <Link href='#' onClick={()=>handleChange("event",1)}> Sign Up</Link>
        </Typography>
        </Paper>
    </Grid>
  )
}

export default Login