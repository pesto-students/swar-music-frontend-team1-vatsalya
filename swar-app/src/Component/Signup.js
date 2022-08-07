import { Avatar, Grid, Paper, Typography,TextField ,Button, Checkbox, FormControlLabel} from '@mui/material'
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
const paperstyle={padding :20,width:450,margin:"0 auto"}
const textstyle={margin:0}
const tstyle={margin:'5px 0'}

function Signup() {
  return (
    <Grid>
        <Paper elevation={20} style={paperstyle}>
            <Grid align ='center'>
            <Avatar   sx={{ color: 'black', backgroundColor: 'pink', borderColor: 'black',mt:0,mb:0}}>
          <LockIcon/>
</Avatar>
<h2 style={textstyle}> Sign Up </h2>
<Typography variant='caption' gutterBottom> Please fill this form to create an account !</Typography>
            </Grid>
            <form>
            <TextField label='Enter User Name' placeholder='Enter User Name' style={tstyle} fullWidth required/>
            <TextField label='Email' placeholder='Enter Email Address' style={tstyle} fullWidth required/>
            <TextField label='Mobile Number' placeholder='Enter Mobile Number' style={tstyle} fullWidth required/>
            <TextField label='Password' placeholder='Enter Password' style={tstyle} fullWidth required/>
            <TextField label='Confirm Password' placeholder='Enter Confirm Password' style={tstyle} fullWidth required/>
            <FormControlLabel control ={<Checkbox/>} label=' I accept the terms and conditions'/>

            <Button type='submit' variant='contained' 
            sx={{ color: 'black', backgroundColor: 'pink', borderColor: 'black',mt:3,mb:2}}
            full width> Sign Up</Button>
            
            </form>
            
        </Paper>
    </Grid>
  )
}

export default Signup