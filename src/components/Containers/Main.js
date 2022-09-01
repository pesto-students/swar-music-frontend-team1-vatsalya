import React from 'react'
import bg from '../images/bg.png';
import {CssBaseline,
Paper,Grid,Box, Typography} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Index from '../Containers/Index';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import bgvideo2 from '../images/bgvideo2.mp4'
import './Main.css'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function Main() {

     return (
      <React.Fragment>
      <video loop muted autoPlay className ='bgvideo'>
      <source src={bgvideo2} type ='video/mp4'/>
      </video>
      <ThemeProvider theme={theme}>
    <Grid container component="main" maxWidth='xs' alignItems='center' 
    direction="column" spacing={0} justifyContent="center" style={{ minHeight: '100vh' }} >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <Box
          sx={{
            my: 1,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <AudiotrackIcon fontSize='large' color='pink'/>
          <Typography component={'span'} variant={'body2'}> SWAR APP</Typography>
          <Index/>
          </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
</React.Fragment>
  );
  
}

export default Main