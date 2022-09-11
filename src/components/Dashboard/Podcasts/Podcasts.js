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
import { poadCastsAction } from './Utility/poadCastsReducer';

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
      sx={{ml:{xs:'50px',sm:'100px',md:'265px'},
      width: {xs:'200px',sm:'300px',md:'650px'},
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
      field: 'speaker',
      headerName: 'Speaker',
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
    const[url, setURL] = useState("https://swar-app.s3.ap-south-1.amazonaws.com/Soch+Liya");
    const[name,setName] = useState("Soch Liya");
    const[duration, setDuration] = useState("")
      const poadCastData = useSelector((state) => {
        console.log("poadCast selector")
      console.log(state.poadCastsReducer);
      return state.poadCastsReducer
      })

      const poadCastByName = useSelector((state) => {
        console.log("findByName=======>")
      console.log(state.findPoadCastByNameReducer);
      return state.findPoadCastByNameReducer
      })
      
      const dispatch = useDispatch();
      useMemo( () => {
        dispatch(poadCastsAction.getAllPoadCastsAction())
      },[])

      useEffect( () =>{
        setURL(poadCastByName.poadCast)
      },[poadCastByName])
      useMemo(() =>{
        dispatch(poadCastsAction.getAllPoadCastByNameAction(name))
      },[name])
        const handleRowClick = (params) => {
              setName(params.row.name)
              setDuration(params.row.duration)
          };
     
  return (
    <div className="songsClient">
         <Box sx={{ height: 800, width: '95%' }}>
      <DataGrid
        disableColumnMenu
        borderRadius="25%" 
        rowHeight={50}
        components={{ Toolbar: QuickSearchToolbar }}
         rows={poadCastData.poadCasts}
         columns={columns}
         getRowId ={(row) => row._id}
         pageSize={15}
         rowsPerPageOptions={[15]}
         onRowClick={handleRowClick}
         sx={{width:{xs:300,sm:440,md:1200},
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