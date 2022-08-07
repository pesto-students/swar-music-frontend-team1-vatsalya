import React from 'react'
import bg from '../images/bg.png';
import {CssBaseline,
Paper,Grid,Box, Typography} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Index from '../Containers/Index';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

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

function Signup() {

     return (
        <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            <Typography> SWAR APP</Typography>
            <Index/>
              <Grid container>
              <Grid item>
                </Grid>
              </Grid>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
  
}

export default Signup