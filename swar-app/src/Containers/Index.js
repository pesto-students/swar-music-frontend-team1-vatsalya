import React, { useState } from 'react'
import {Tabs,Tab} from '@mui/material';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Login from '../Component/Login';
import Signup from '../Component/Signup';

const SignInOutContainer=()=>{
    const [value,setValue]=useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const paperStyle={width:450,margin:"0px auto" }
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
        return (
            <Paper elevation={20} style={paperStyle}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Sign In"  style={{minWidth:"50%" ,fontWeight:'bold',fontSize:'18px'}} />
              <Tab label="Sign Up" style={{minWidth:"50%" ,fontWeight:'bold',fontSize:'18px'}} />
            </Tabs>
            <TabPanel value={value} index={0}>
           <Login handleChange={handleChange}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Signup/>
          </TabPanel>
          </Paper>
          
        )
    }
    
    export default SignInOutContainer;