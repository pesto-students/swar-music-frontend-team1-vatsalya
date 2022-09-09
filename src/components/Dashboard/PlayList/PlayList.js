import React,{useMemo,useState,useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { DataGrid, gridClasses,GridToolbarQuickFilter,} from '@mui/x-data-grid';
import PlaylistCard from './PlaylistCard/PlaylistCard';
import './PlayList.css'
import Addtoplaylist from '../SongsClient/Addtoplaylist';
import { useSelector,useDispatch } from 'react-redux';
import { userAction } from '../../Admin/Users/Utils/usersReducer';
import Avatar from "@mui/material/Avatar";
import { songsAction } from '../../Admin/Songs/Utils/songsReducer';
import { songAction } from '../SongsClient/Utility/songsClientReducer';
import Footer from '../HomeClient/Footer/Footer';
import { playListAction } from './Utils/postPlayListReducer';
import jwtDecode from 'jwt-decode';
import { token } from '../../Login/Utility/authenticatinReducer';
import axios from 'axios';


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
      field: 'Image',
      headerName: 'Image',
      width: 150,
      editable: false,
      headerAlign:'center',
      renderCell: () => {
        return (
          <>
          {/* <Avatar alt='shaan' src={Drake} sx={{ml:'50px'}}/> */}
          </>
        );
      }
    },

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
     const[url, setURL] = useState("url");
     const[name,setName] = useState("Kesari10");
     const[duration, setDuration] = useState("")
     const [tableData, setTableData] = useState([]);

    const[playListData, setPlayListData] = useState([]);
    const datas = useSelector((state) => {
      return state.getAllPlayListReducer.playList
    })
    
    const playLists = useSelector((state) =>{
      // console.log("songs by playlist-----> " + state.getPlayListSongsReducer);
      return state.getPlayListSongsReducer
    })
   
    useEffect(() =>{
      dispatch(playListAction.getAllPlayListByIdAction(jwtDecode(token()).id));
    },[])

  
    useEffect(() =>{
      setPlayListData(datas)
     },[])
     
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

      console.log("--------tableData")
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
        axios.get(`http://localhost:8900/api/songs/find/playlist/songs/${playListId}`,{
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
        
    const handleRowClick = (params) => {
      setName(params.row.name)
      setDuration(params.row.duration)
    };
    sessionStorage.setItem("name", name);
       
    console.log("This is the playList data" + playListData);

    console.log("Get all the table data:" + tableData);
    

  return (
    <div>
    <h2 className='PlaylistTitle'>Your Playlist</h2>
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