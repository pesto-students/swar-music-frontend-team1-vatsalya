import React,{useState,useRef} from 'react';
import { CssBaseline,Drawer,Box, Typography ,List, Divider,
    ListItemButton,ListItemIcon ,ListItemText, Toolbar } from '@mui/material';
import Topbar from './Topbar';
import ListItem, { listItemClasses } from "@mui/material/ListItem";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Footer from './Footer';
import swarlogo from '../Logo/swarlogo.png';
import '../Logo/Logo.css';
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';



const drawerWidth=240;

function Dashboard() {
const navigate = useNavigate();

const handleNav = (event) =>
{navigate("home", { replace: true })}

const [state,setState]= useState({
  playing : true
})

const {playing} = state;

const playerRef = useRef(null);

const handlePlayPause=()=>{
  setState({...state,playing:!state.playing});
};

  return (
    <div>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <Topbar/>
            <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box display= 'flex' sx={{width: drawerWidth}}>
        <Box component="img"
        sx={{
          height: 100,
          width: 200,
          maxHeight: { xs: 200, md: 167 },
          maxWidth: { xs: 240, md: 140 },
        }}
        alt="The house from the offer."
        src={swarlogo}/>
        <h2>SWAR APP</h2>
        </Box>
        <Divider />
        <Box sx={{height :'20vh', color:'grey' , cursor:'pointer' , 
        transition :'200 ms color ease in'}} p={0} m={0} className='Tabs'>
        <List sx={{ 
            [`& .active, & .${listItemClasses.root}:hover`]: {
              color: "white",
              fontWeight: "bold",
              bgcolor: 'black',
              "& svg": {
                fill: "white",
              }
            }
          }}>
           <ListItem key={'Home'}  disablePadding >
           <ListItemButton variant="outlined" onClick= {handleNav}>
             <ListItemIcon >
             <HomeRoundedIcon/> 
             </ListItemIcon>
             <ListItemText primary={'Home'} color= 'darkgrey'>
                </ListItemText>
           </ListItemButton>
           </ListItem>
           <ListItem key={'Your Library'}  disablePadding component={Link} to={"library"}>
           <ListItemButton variant="outlined">
             <ListItemIcon >
             <LibraryMusicRoundedIcon/> 
             </ListItemIcon>
             <ListItemText primary={'Your Library'} color= 'darkgrey'>
                </ListItemText>
           </ListItemButton>
           </ListItem>
        </List>

        </Box>
        <Divider/>
        <Box sx={{ height : '60vh' }}justifyContent="center"
          alignItems="center" className='mysongs'>
          <Typography>My Songs</Typography>
          </Box>
        <Box sx={{ height : '10vh'}} className='account'>
        <Divider/>
        <List position= "fixed" sx={{borttom:0 }}>
            <ListItem key={'Account'} disablePadding >
              <ListItemButton>
                <ListItemIcon>
                 <AccountCircleRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary={'User'}/>
              </ListItemButton>
            </ListItem>
        </List>
        </Box>
        </Drawer>
        <Box classname ='body'
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'white', p: 3 ,width: `calc(100% - ${drawerWidth}px)`}}
      >
        <Toolbar/>
        <Typography paragraph>
          Lorem ipsum
        </Typography>
        <Typography paragraph>
          Consequat 
        </Typography>
      </Box>
      <div className='player'>
      <ReactPlayer width={'100%'} height={'100%'} 
        ref ={playerRef}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        muted={true} playing={true}/>
      </div>
      <Footer onPlayPause ={handlePlayPause}/>
      </Box>
      
    </div>
  )
}

export default Dashboard