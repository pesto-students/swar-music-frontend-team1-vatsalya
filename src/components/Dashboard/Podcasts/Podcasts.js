import React,{useState,useEffect, useMemo} from 'react'
import Box from '@mui/material/Box';
import { DataGrid,gridClasses,GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useSelector,useDispatch } from 'react-redux';
import "../SongsClient/SongsClient.css";
import { songsAction} from '../../Admin/Songs/Utils/songsReducer';
import { songAction } from '../SongsClient/Utility/songsClientReducer';
import '../HomeClient/SongsTable/Datagridtable.css'
import Footer from '../HomeClient/Footer/Footer';
import { SearchRounded } from '@material-ui/icons';
import axios from 'axios';
import Avatar from "@mui/material/Avatar";
import Drake from '../HomeClient/Right/Drake.jpg';

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        width:'1000px',
        placeolder:'Search for songs'
    
      }}
    >
      <GridToolbarQuickFilter 
      sx={{ml:'265px',
      fontSize:'large',
      mt:'7px',
      background: "#fff",
    width: '650px',
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
      field: 'Image',
      headerName: 'Image',
      width: 150,
      editable: false,
      headerAlign:'center',
      renderCell: () => {
        return (
          <>
          <Avatar alt='shaan' src={Drake} sx={{ml:'50px'}}/>
          </>
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
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} 
          </div>
        );
      }
    },
    {
      field: 'artist',
      headerName: 'Artists',
      width: 150,
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
      field: 'duration',
      headerName: 'Duration',
      width: 300,
      editable: false,
      headerAlign:'center',
      renderCell: (cellValues) => {
        return (
          <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} 
          </div>
        );
      }
    }
  ];

function Podcasts() {
    const[url, setURL] = useState("url");
    const[name,setName] = useState("Kesari01");
    const[duration, setDuration] = useState("")
    const songsData = useSelector((state) => {
        console.log("songs selector")
      console.log(state.songsReducer);
      return state.songsReducer
      })
      const songsByName = useSelector((state) => {
        console.log("find By song selector")
      console.log(state.findSongByNameReducer);
      return state.findSongByNameReducer
      })

      console.log("--------songsByName")
      console.log(songsByName.song);
      
      const dispatch = useDispatch();
      useMemo( () => {
        dispatch(songsAction.getAllSongsAction())
      },[])

      useEffect( () =>{
        setURL(songsByName.song)
      },[songsByName])
      useMemo(() =>{
        dispatch(songAction.getAllSongByNameAction(name))
      },[name])
        const handleRowClick = (params) => {
              setName(params.row.name)
              setDuration(params.row.duration)
          };
          sessionStorage.setItem("name", name);
          console.log("name----")
          console.log(name)

          console.log("index------")
          console.log(duration)

          console.log("url------")
          console.log(url);
  return (
    <div className="songsClient">
         <Box sx={{ height: 800, width: '95%' }}>
      <DataGrid
        disableColumnMenu
        borderRadius="25%" 
        rowHeight={50}
        components={{ Toolbar: QuickSearchToolbar }}
         rows={songsData.songs}
         columns={columns}
         getRowId ={(row) => row._id}
         pageSize={15}
         rowsPerPageOptions={[15]}
         onRowClick={handleRowClick}
         sx={{width:1200,
         fontSize:'20px',
         mt:'30px',
           ml:'40px',
           border:2,
           borderColor: 'primary.light',
           borderRadius:'30px',
           '& .MuiDataGrid-row:hover': {
             backgroundColor: "rgb(255, 255, 255)",
              cursor: 'pointer',
              transform: 'scale(1.1)',
              rowHeight:'100px',
              textAlign:'center',
              color:'black'
           },
           onrowClick: {
             backgroundColor: "rgb(255, 255, 255)",
             cursor: 'pointer',
              transform: 'scale(1.09)',
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

export default Podcasts;