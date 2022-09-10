import React,{useMemo,useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, gridClasses,GridToolbarQuickFilter,} from '@mui/x-data-grid';
import PlaylistCard from './PlaylistCard/PlaylistCard';
import './PlayList.css'
import { useSelector,useDispatch } from 'react-redux';
import { songsAction } from '../../Admin/Songs/Utils/songsReducer';
import { songAction } from '../SongsClient/Utility/songsClientReducer';
import Footer from '../HomeClient/Footer/Footer';
import { playListAction } from './Utils/postPlayListReducer';
import jwtDecode from 'jwt-decode';
import { token } from '../../Login/Utility/authenticatinReducer';
import axios from 'axios';
import { Divider } from '@mui/material';


function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
    
      }}
    >
      <GridToolbarQuickFilter 
      sx={{ml:{xs:'50px',sm:'100px',md:'265px'},
      width: {xs:'200px',sm:'300px',md:'650px'},
      background: "#fff",
    width: '500px',
    height: '40px',
    border: '10px',
    borderRadius: '80px',
    borderColor: 'primary',
    pl:'20px',
    pr:'20px',
    pt:'10px'
      }}/>
    </Box>
  )};

  const columns = [
   
    {
      field: '_id',
      headerName: '_id',
      width: 300,
      editable: false,
      headerAlign:'center',
      hide:true,
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} 
          </div>
        );
      }
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 300,
      editable: false,
      headerAlign:'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} 
          </div>
        );
      }
    },
    {
      field: 'language',
      headerName: 'Language',
      width: 300,
      editable: false,
      headerAlign:'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
      
    },
    {
      field: 'artist',
      headerName: 'Artists',
      width: 250,
      editable: false,
      headerAlign:'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
    },
    {
      field: 'duration',
      headerName: 'Duration',
      width: 100,
      editable: false,
      headerAlign:'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
      }
    }
  ];


function Playlist() {
     const dispatch = useDispatch();
     const[url, setURL] = useState("https://swar-app.s3.ap-south-1.amazonaws.com/Soch Liya");
     const[name,setName] = useState("Soch Liya");
     const[duration, setDuration] = useState("0:0")
     const [tableData, setTableData] = useState([]);
     const[playListData, setPlayListData] = useState([]);
    
  
     
    const songsData = useSelector((state) => {
      return state.songsReducer
      })
      const songsByName = useSelector((state) => {
      return state.findSongByNameReducer
      })

      console.log(tableData);
      
      useMemo( () => {
        dispatch(songsAction.getAllSongsAction())
      },[])

      const displayTable = () =>{
        console.log("hello all songs table")
        setTableData(songsData.songs)
      }

      useEffect( () =>{
        setURL(songsByName.song)
      },[songsByName])
      useMemo(() =>{
        dispatch(songAction.getAllSongByNameAction(name))
      },[name])

      const fetch =  (playListId) =>{
        axios.get(`https://swar-music.herokuapp.com/api/songs/find/playlist/songs/${playListId}`,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            console.log("welcome back Songs By PlayList")
            console.log(res.data);
            setTableData(res.data);
            return res.data;
          }
        ).catch((err) => {
          return err;
         
        })
      }

      const fetchPlayList = () =>{
        axios.get(`https://swar-music.herokuapp.com/api/songs/get/playlist/${jwtDecode(token()).id}`,{
        headers: {
          'Authorization':  token()
        }}).then(
          (res) => {
            console.log("welcome back user Id")
            setPlayListData(res.data)
            console.log(res.data);
            return res.data;
          }
        ).catch((err) => {
          return err;
         
        })
      }

      useEffect(() =>{
        fetchPlayList()
      },[])
        
    const handleRowClick = (params) => {
      setName(params.row.name)
      setDuration(params.row.duration)
    };
   
    

  return (
    <div>
    <h2 className='PlaylistTitle'>Your Playlist</h2>
    <Divider/>
    <div className='myplaylist'>
    <div onClick={displayTable} className='allsongs'><PlaylistCard name='All Songs' number='36'/></div>
    {playListData?.map((item) => (
      <div
      onClick={() =>{
        fetch(item._id)
      }}
      >
    <PlaylistCard key={item._id} id={item._id} name={item.name} number='36'/>
    </div> 
    ))}
    
    </div>

    <Box sx={{ height: 800, width: '95%' ,mt:'30px'}}>
      <DataGrid
      disableColumnMenu
       borderRadius="25%" 
       rowHeight={50}
       components={{ Toolbar: QuickSearchToolbar }}
        rows={tableData}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={handleRowClick}
        sx={{width:{xs:300,sm:440,md:1200},
        fontSize:'20px',
        mt:'20px',
          ml:'40px',
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
          },
            
        }}
      />
    
    </Box>
    <div className="audioPlayer">
      <Footer url = {url} duration={duration} name={name}/>
    </div>

    </div>
  )
}

export default Playlist