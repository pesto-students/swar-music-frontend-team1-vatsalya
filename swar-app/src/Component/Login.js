import React from 'react'
import {Grid,Paper,Avatar, TextField,FormControlLabel,Checkbox,Button, Typography, Link,Box} from '@mui/material';


function Login({handleChange}) { 
    const paperstyle={padding:20,height: '80vh', width: 450, margin :"0 auto"} 
    const avatarstyle={backgroundColor :'#1bb7de'}
    const tstyle={margin:'5px 0'}
    const btstyle={margin:'5px 0'}

  return (
    <Grid>
        <Paper elevation={2} style={paperstyle}>
            <Grid align='center'>
            <Avatar style={avatarstyle}>
            </Avatar>
            <h2>Sign In</h2>
            </Grid>
            <Box component='form' no noValidate id='login-form' >
            <TextField name='username' id='username'label='username'
             placeholder='Enter Username' 
             style={tstyle} fullWidth required/>
            <TextField name='email' id='email' label='Email' placeholder='Enter Email' style={tstyle} fullWidth required />
            <TextField name='password' id='password' label='password' placeholder='Enter Password'type='password'
            style={tstyle} fullWidth required/>
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
       </Box>
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