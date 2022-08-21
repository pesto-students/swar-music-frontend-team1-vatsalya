import React from 'react'
import {Grid,Paper,Avatar, TextField,Button, Typography} from '@mui/material';
import {useFormik}  from 'formik';
 import * as yup from 'yup';
 
 const initialValues ={
  email:'',
 }

const onSubmit = values =>{
  console.log('Form data',values);
};

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
})

function Forgotpw() { 

  const formik = useFormik({initialValues, onSubmit, validationSchema: validationSchema });

    const paperstyle={padding:20,height: '30vh', width: 450 } 
    const avatarstyle={backgroundColor :'#1bb7de'}
    const tstyle={margin:'5px 0'}
    const btstyle={margin:'5px 0'}

  return (
    <Grid>
        <Paper elevation={2} style={paperstyle} sx={{m: '200px auto' }}>
            <Grid align='center'>
            <Avatar style={avatarstyle}>
            </Avatar>
            <h2>Forgot Password</h2>
            </Grid>
            <form onSubmit={formik.handleSubmit}>

            <TextField name='email' id='email' label='Email' placeholder='Enter Email' 
style={tstyle} fullWidth required   error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}/>

        <Button type='submit' 
        sx={{ color: ' black', backgroundColor: 'pink', borderColor: 'black',mt:3,mb:2,fontSize:'15px'} }
       variant= 'contained' fullWidth style={btstyle}>  Submit </Button>
       </form>
        </Paper>
    </Grid>
  )
}

export default Forgotpw