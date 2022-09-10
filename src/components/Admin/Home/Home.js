import { Grid, Container, Typography, Stack } from '@mui/material'
import Card from '@mui/material/Card';
import { DataGrid,gridClasses } from '@mui/x-data-grid';
import CardContent from '@mui/material/CardContent';
import React, {useMemo, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fShortenNumber } from '../utils/formatNumber';
import PieChart from '../Chart/PieChart';
import './home.css'
import { countAction } from './Utils/homeReducer';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import { userAction } from '../Users/Utils/usersReducer';


const columns = [
  {field: 'username', headerName: 'USERNAME', width: 80, headerAlign:'center',
  align: 'center' },
  { field: 'email', headerName: 'EMAIL', width: 200 , headerAlign:'center',
  align: 'center'},
  { field: 'password', headerName: 'PASSWORD', width: 100, headerAlign:'center',
  align: 'center' },
  { field: 'isAdmin', headerName: 'ADMIN', width: 150, headerAlign:'center',
  align: 'center' },
  { field: 'country', headerName: 'COUNTRY', width: 250, headerAlign:'center',
      align: 'center' },
];

const Datagridstyle={width:400,
  height:430,
  fontSize:'20px',
     mt:'20px',
    ml:'20px',
    border:2,
    borderColor: 'primary.light',
    borderRadius:'30px',
    '& .MuiDataGrid-row:hover': {
      backgroundColor: "rgb(255, 255, 255)",
       cursor: 'pointer',
       transform: 'scale(1)',
       rowHeight:'100px',
       textAlign:'center',
       color:'black'
    },
    onrowClick: {
      backgroundColor: "rgb(255, 255, 255)",
      cursor: 'pointer',
       transform: 'scale(1)',
       color:'black'
    },
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
      outline: 'none'},
      [`& .${gridClasses.row}`]:{
        '&.Mui-selected':{
        backgroundColor:'black',
        color:'white'
      },
      '&.Mui-selected:hover':{
        backgroundColor:'black'
      },
    }}


function Home() {
  const dispatch = useDispatch();

  const songsData = useSelector((state) => {
    console.log("songs selector")
  console.log(state.countSongsReducer);
  return state.countSongsReducer
  })

  const totalUsersDatas = useSelector((state) => {
    console.log("adim user----")
  console.log(state.usersReducer);
  return state.usersReducer.users
})

  const usersData = useSelector((state) => {
    console.log("users selector")
  console.log(state.countUsersReducer);
  return state.countUsersReducer
  })

  const poadCastData = useSelector((state) => {
    console.log("poadCast selector")
  console.log(state.countPoadCastsReducer);
  return state.countPoadCastsReducer
  })

  const audioBooksData = useSelector((state) => {
    console.log("countAudioBooks  selector")
  console.log(state.countAudioBooksReducer );
  return state.countAudioBooksReducer 
  })
  console.log("count all songs");
  console.log(usersData)

  useEffect(()=>{
    dispatch(countAction.countAllSongsAction())
    dispatch(countAction.countAllUserAction())
    dispatch(countAction.countAllPoadCastAction())
    dispatch(countAction.countAllAudioBooksAction())
  },[])

  useMemo( () => {
    dispatch(userAction.getAllUserAction())
  },[])

  return (
    <div>
    <Container maxWidth="xl" alignItems='flex-end'>
    <Grid container spacing={3}>
    <Grid item xs={11}>
      <Typography variant='h4' sx={{mb: 5,mt:2.5}}>
        Hi,Welcome back
      </Typography>
    </Grid>
    <Grid item xs={1} sx={{mt:2.5}}>
      <Logout/>
     </Grid> 
    </Grid>
    
      <Grid container spacing={3}>
     
        <Grid item xs={3}>
        <Link style={{textDecoration: 'none'}}to="/admin/songs">
        <Card  sx={{backgroundColor: "rgb(209, 233, 252)", borderRadius:"16px", maxWidth: 500,
          '&:hover': {
            color: 'black',
            boxShadow: '0 3px 20px rgb(209, 233, 252)',
            transform: 'scale(1.1)'
          }
        
        }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Total Songs
        </Typography>
        <Typography style={{fontWeight:  "700", fontSize: "1.5rem"}} variant="h3" color="text.secondary" align='center'>
        {fShortenNumber(songsData.songs)}
        </Typography>
      </CardContent>
        </Card>
        </Link>
        </Grid>
    
        <Grid item xs={3}>
        <Link style={{textDecoration: 'none'}}to="/admin/audioBooks">
        <Card style={{backgroundColor: "rgb(208, 242, 255)", borderRadius:"16px"}} 
        sx={{ maxWidth: 500,
          '&:hover': {
            color: 'black',
            boxShadow: '0 3px 20px rgb(208, 242, 255)',
            transform: 'scale(1.1)'
          } }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Total Audio Books
        </Typography>
        <Typography style={{fontWeight:  "700", fontSize: "1.5rem"}} variant="h3" color="text.secondary" align='center'>
        {fShortenNumber(audioBooksData.audioBooks)}
        </Typography>
      </CardContent>
        </Card>
        </Link>
        </Grid>

        <Grid item xs={3}>
        <Link style={{textDecoration: 'none'}}to="/admin/poadCasts">
        <Card  style={{backgroundColor:  "rgb(255, 247, 205)", borderRadius:"16px"}} 
        sx={{ maxWidth: 500,
          '&:hover': {
            color: 'black',
            boxShadow: '0 3px 20px rgb(255, 247, 205)',
            transform: 'scale(1.1)'
          }  }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  align='center'>
          Total Podcasts
        </Typography>
        <Typography style={{fontWeight:  "700", fontSize: "1.5rem"}} variant="h3" color="text.secondary" align='center'>
        {fShortenNumber(poadCastData.poadCast)}
        </Typography>
      </CardContent>
        </Card>
        </Link>
        </Grid>

        <Grid item xs={3}>
        <Link style={{textDecoration: 'none'}}to="/admin/users">
        <Card  style={{backgroundColor:  "rgb(255, 231, 217)", borderRadius:"16px"}}
         sx={{ maxWidth: 500,
          '&:hover': {
            color: 'black',
            boxShadow: '0 3px 20px rgb(255, 231, 217)',
            transform: 'scale(1.1)'
          }  }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  align='center'>
          Total Users
        </Typography>
        <Typography style={{fontWeight:  "700", fontSize: "1.5rem"}} variant="h3" color="text.secondary" align='center'>
        {fShortenNumber(usersData.users)}
        </Typography>
      </CardContent>
        </Card>
        </Link>
        </Grid>
      </Grid>
     
    </Container>
    <Typography variant='h4' sx={{mt:5,ml:5}}>
       New Users
      </Typography>
    <Stack direction='row' spacing={3} sx={{alignContent:'center',alignItems:'center'}}>
    <DataGrid  rows={totalUsersDatas} columns={columns} sx={Datagridstyle}  getRowId ={(row) => row._id}/>
    <div className="dashboard_card">
        <div className="pie_chart" >
            <PieChart/>
        </div>
    </div>
    </Stack>
     
    </div>
  )
}

export default Home