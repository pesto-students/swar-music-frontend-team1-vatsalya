import React,{useState,useEffect, useMemo,useRef} from 'react';
import { DataGrid , gridClasses} from '@mui/x-data-grid';
import { useSelector,useDispatch } from 'react-redux';
import "../../SongsClient/SongsClient.css"
import { songAction } from '../../SongsClient/Utility/songsClientReducer.js';
import Avatar from "@mui/material/Avatar";
import Drake from '../Right/Drake.jpg'
import AlanWalker from './AlanWalker.jpg';
import Arijit from './Arijit.png';
import TaylorSwift from './TaylorSwift.jpg';
import Footer from '../Footer/Footer';

import './Datagridtable.css';
import { songsAction } from '../../../Admin/Songs/Utils/songsReducer';

const Datagridstyle={
  // backgroundColor:{xs:'red',sm:'blue',md:'green'},
  width:{xs:400,sm:550,md:800},
  fontSize:'20px',
    m:{xs:'auto',sm:'auto',md:'auto',xl:'auto'},
    ml:{xs:'30px',sm:'30px',md:'30px'},
    mb:'10px',
    textAlign:'center',
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
      }},
    
  }
const columns = [
  {
    field: 'Image',
    headerName: 'Image',
    width: 100,
    editable: false,
    headerAlign:'center',
    align: 'center',
    renderCell: () => {
      return (
        <>
        <Avatar alt='shaan' src={Arijit} />
        </>
      );
    }
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: false,
    headerAlign:'center',
    align: 'center',
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
    width: 150,
    editable: false,
    headerAlign:'center',
    align: 'center',
    renderCell: (cellValues) => {
      return (
        <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
    }
    
  },
  {
    field: 'artist',
    headerName: 'Artists',
    width: 200,
    editable: false,
    headerAlign:'center',
    align: 'center',
    renderCell: (cellValues) => {
      return (
        <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
    }
  },
  {
    field: 'duration',
    headerName: 'Duration',
    width: 120,
    editable: false,
    headerAlign:'center',
    align: 'center',
    renderCell: (cellValues) => {
      return (
        <div style={{width: "100%",textAlign: "center"}}>{cellValues.value} </div> );
    }
  }
];

export default function App() {
  const[url, setURL] = useState(localStorage.getItem("url"));
  const[name,setName] = useState("Kesari");
  const[duration, setDuration] = useState("4:29")
  const songsData = useSelector((state) => {
    return state.songsReducer
    })
    const songsByName = useSelector((state) => {
    return state.findSongByNameReducer
    })
    
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
        

  return (
    <div className='datatable' style={{ height: 300, width:800 }}>
      <DataGrid  disableColumnMenu  disableColumnSelector 
      rows={songsData.songs} 
      getRowId ={(row) => row._id}
      pageSize={5}
      onRowClick={handleRowClick}
      rowsPerPageOptions={[5]}
      columns={columns}
       sx={Datagridstyle}
 />
 
   <div className="audioPlayer_Home">
      <Footer url = {url} duration={duration} name={name}/>
    </div>
    </div>
  );
}
