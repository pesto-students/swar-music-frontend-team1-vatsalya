import React from 'react'
import { AppBar,Toolbar ,Input,Pagination} from '@mui/material';
import { Box } from '@mui/system';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Stack from '@mui/material/Stack';

const drawerWidth = 240;

function Topbar() {

  return (
    <div>
         <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` ,bgcolor:'rgba(245,245,255,255)'}}
      >
        <Toolbar>
        <Pagination count={2} color="primary"/>
        <Box sx={{ width: 400 }}>
        <Stack spacing={2} direction="row" sx={{ m: 1 , borderRadius:'30px', 
        backgroundColor:'white', borderColor:'black',height:'40px' ,width:'380px', p:'10px', color:'black',
        alignItems:'center'}} alignItems="center" color='grey'>
        <SearchRoundedIcon sx={{color:'black'}}/>
        <Input  type="search" placeholder='search for albums ,songs....' sx={{width:'300px'}}/>
        </Stack>
        </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Topbar