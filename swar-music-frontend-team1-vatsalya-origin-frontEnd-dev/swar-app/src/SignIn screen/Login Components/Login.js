import React from 'react'
import {Grid,Paper,Avatar, TextField,FormControlLabel,Checkbox,Button, Typography, Link} from '@mui/material';
import {useFormik}  from 'formik';
 import * as yup from 'yup';
 const initialValues ={
  name:'',
  email:'',
  phonenumber:'',
  password:'',
  cpassword :'',
  checkbox:''
};

const onSubmit = values =>{
  console.log('Form data',values);
};

const validationSchema = yup.object({
   name : yup.string('Enter your username').required('Username is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required')
})

function Login({handleChange}) { 
  const formik = useFormik({initialValues, onSubmit, validationSchema: validationSchema });

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
            <form onSubmit={formik.handleSubmit}>
            <TextField name='username' id='username'label='username'placeholder='Enter Username' style={tstyle} fullWidth required 
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}/>
            <TextField name='email' id='email' label='Email' placeholder='Enter Email' 
style={tstyle} fullWidth required   error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}/>
            <TextField name='password' id='password' label='password' placeholder='Enter Password'type='password'
            style={tstyle} fullWidth required   error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}/>
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
        <Typography component={'span'}>
          <Link href='#'> Forgot password?</Link>
          </Typography>
          <Typography component={'span'}> Do you have an account?
          <Link href='#' onClick={()=>handleChange("event",1)}> Sign Up</Link>
          </Typography>
        </Paper>
    </Grid>
  )
}

export default Login