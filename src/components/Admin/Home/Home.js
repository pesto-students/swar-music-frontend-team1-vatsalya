import { Grid, Container, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react'
import { fShortenNumber } from '../utils/formatNumber';
import BarChart from '../Chart/BarChart';
import './home.css'



function Home() {

  var cardStyle = {
    width: '20vw',
    transitionDuration: '0.3s',
    height: '15vw',
}

  return (
    <div>
    <Container maxWidth="xl">
      <Typography variant='h4' sx={{mb: 5}}>
        Hi,Welcome back
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={3}>
        <Card  style={{backgroundColor: "rgb(209, 233, 252)", borderRadius:"16px"}}sx={{ maxWidth: 500 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Total Songs
        </Typography>
        <Typography style={{fontWeight:  "700", fontSize: "1.5rem"}} variant="h3" color="text.secondary" align='center'>
        {fShortenNumber(714000)}
        </Typography>
      </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card style={{backgroundColor: "rgb(208, 242, 255)", borderRadius:"16px"}} sx={{ maxWidth: 500 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Total Audio Books
        </Typography>
        <Typography style={{fontWeight:  "700", fontSize: "1.5rem"}} variant="h3" color="text.secondary" align='center'>
        {fShortenNumber(714000)}
        </Typography>
      </CardContent>
        </Card>
        </Grid>

        <Grid item xs={3}>
        <Card  style={{backgroundColor:  "rgb(255, 247, 205)", borderRadius:"16px"}} sx={{ maxWidth: 500 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  align='center'>
          Total Podcasts
        </Typography>
        <Typography style={{fontWeight:  "700", fontSize: "1.5rem"}} variant="h3" color="text.secondary" align='center'>
        {fShortenNumber(714000)}
        </Typography>
      </CardContent>
        </Card>
        </Grid>

        <Grid item xs={3}>
        <Card  style={{backgroundColor:  "rgb(255, 231, 217)", borderRadius:"16px"}} sx={{ maxWidth: 500 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  align='center'>
          Total Users
        </Typography>
        <Typography style={{fontWeight:  "700", fontSize: "1.5rem"}} variant="h3" color="text.secondary" align='center'>
        {fShortenNumber(714000)}
        </Typography>
      </CardContent>
        </Card>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <BarChart/>
      </Grid>
     
    </Container>
    </div>
  )
}

export default Home