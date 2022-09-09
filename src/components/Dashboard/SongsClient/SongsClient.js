import React,{useState,useEffect, useMemo,useRef} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, gridClasses,GridToolbarQuickFilter,} from '@mui/x-data-grid';
import { useSelector,useDispatch } from 'react-redux';
import "./SongsClient.css"
import { songsAction } from '../../Admin/Songs/Utils/songsReducer';
import { songAction } from './Utility/songsClientReducer';
import '../HomeClient/SongsTable/Datagridtable.css'
import Footer from '../HomeClient/Footer/Footer';
import Avatar from "@mui/material/Avatar";
import Drake from '../HomeClient/Right/Drake.jpg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Addtoplaylist from './Addtoplaylist';
import { playListAction } from '../../../components/Dashboard/PlayList/Utils/postPlayListReducer'
const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    }
  }
});

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
      mt:'7px',
      background: "#fff",
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
    },
    {
      field: 'options',
      headerName: 'Options',
      width: 100,
      editable: false,
      headerAlign:'center',
      renderCell: (params) => {
        return (
          <div>
           <Addtoplaylist rowId = {params.row._id}/>
          </div> );
      }
    }
  ];
  

function SongsClient() {
    const[url, setURL] = useState("url");
    const[name,setName] = useState("Kesari10");
    const[duration, setDuration] = useState("");
    const songsData = useSelector((state) => {
      return state.songsReducer
      })
      const [tableData, setTableData] = useState(songsData.songs);
      const songsByName = useSelector((state) => {
      console.log(state.findSongByNameReducer);
      return state.findSongByNameReducer
      })
      
      const dispatch = useDispatch();
      useMemo( () => {
        dispatch(songsAction.getAllSongsAction())
        dispatch(playListAction.createPlayListAction())
        setTableData(songsData.songs.songs)
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

return(

  <div className="songsClient">
    <Box sx={{ height: 800, width: '95%' ,mt:'30px'}}>
      <DataGrid
      disableColumnMenu
       borderRadius="25%" 
       rowHeight={50}
       components={{ Toolbar: QuickSearchToolbar }}
        rows={tableData}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={15}
        rowsPerPageOptions={[15]}
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


export default SongsClient