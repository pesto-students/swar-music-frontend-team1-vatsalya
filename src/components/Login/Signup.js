import { Avatar, Grid, Paper, Typography,TextField ,Button, Checkbox, FormControlLabel} from '@mui/material'
import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import LockIcon from '@mui/icons-material/Lock';
import "../Admin/Songs/songs.css"
import { registerAction } from './Utility/authenticatinReducer';
const paperstyle={padding :20,width:450,margin:"0 auto"}
const textstyle={margin:0}
const tstyle={margin:'5px 0'}


function Signup() {

const [userName, setUserName] = useState("");

const [password, setPassword] = useState("");

const [confirmPassword, setConfirmPassword] = useState("");

const[email,setEmail] = useState("");

const onChangeUserName= (e) => {
  setUserName(e.target.value )
}

const onChangeEmail= (e) => {
  setEmail(e.target.value )
} 
const onChangePassword= (e) => {
  setPassword(e.target.value )
}
const onChangeConfirmPassword =(e) => {
  setConfirmPassword(e.target.value )
}

const register = useSelector((state) =>{
  console.log(state.submitUserReducer)
  return state.submitUserReducer
})
const dispatch = useDispatch();

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("enter submit form-----")
  if(userName && email && password && confirmPassword){
    dispatch(registerAction.signUpActions(userName,email,password,confirmPassword))
  }
}
  return (
    <div>
        <Paper elevation={20} style={paperstyle}>
            <Grid align ='center'>
            <Avatar   sx={{ color: 'black', backgroundColor: 'pink', borderColor: 'black',mt:0,mb:0}}>
          <LockIcon/>
</Avatar>
<h2 style={textstyle}> Sign Up </h2>
<Typography variant='caption' gutterBottom> Please fill this form to create an account !</Typography>
            </Grid>
            <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Enter User Name'  onChange={onChangeUserName} required/>
            <input type='email' placeholder='Enter Email Address' onChange={onChangeEmail}  required/>
            {/* <input type="text" placeholder='Enter Mobile Number'  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/> */}
            <select placeholder='Choose Your Country' className='select-menu'  required>
              <option>India</option> 
              <option>USA</option> 
              <option>United Kingdom</option> 
              <option>Germany</option> 
              <option>France</option> 
              <option>Nepal</option> 
              </select>
            <input type='password' placeholder='Enter Password' onChange={onChangePassword} minlength="8" required/>
            <input type="password" placeholder='Confirm Password' onChange={onChangeConfirmPassword} minlength="8" required/>
            <FormControlLabel control ={<Checkbox/>} label=' I accept the terms and conditions'/>

            <Button type='submit' variant='contained' 
            sx={{ borderColor: 'black',mt:3,mb:'2px', backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
              boxShadow: '0 5px 20px yellow'
            }}}
            full width> Sign Up</Button>
            
            </form>
            
        </Paper>
    </div>
  )
}

export default Signup