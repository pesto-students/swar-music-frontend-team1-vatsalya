import React from 'react'
import {Box,Toolbar,Typography} from '@mui/material';
function Home() {
  return (
    <div>
      <Box classname ='body'
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'white', p: 3 ,width: `calc(100% - 240px)`}}
      >
        <Toolbar/>
        <Typography component={'span'} paragraph>
          HOME
        </Typography>
        <Typography component={'span'} paragraph>
          SHAAN
        </Typography>
      </Box>
    </div>
  )
}

export default Home