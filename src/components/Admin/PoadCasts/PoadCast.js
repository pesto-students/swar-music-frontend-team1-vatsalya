import { Button, Dialog, Modal } from '@mui/material'
import React, { useState,useMemo } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar,gridClasses } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector,useDispatch } from 'react-redux';
import { poadCastAction } from './Utils/poadCastAdminReducer';
import axios from 'axios';
import '../Songs/songs.css'
import { showSuccessToast, showErrorToast } from '../../Common/Toast';
import { WindowSharp } from '@mui/icons-material';

const Datagridstyle={width:1200,
  fontSize:'20px',
  m:'0px auto',
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
      },
    }}
const columns = [
    
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    editable: false,
    headerAlign:'center',
    align: 'center'
  },
  {
    field: 'language',
    headerName: 'Language',
    width: 300,
    editable: false,
    headerAlign:'center',
    align: 'center'
  },
  {
    field: 'speaker',
    headerName: 'Speaker',
    type: 'number',
    width: 300,
    editable: false,
    headerAlign:'center',
    align: 'center'
  },
  {
      field: 'action',
      headerName: 'Action',
      width: 200,
      headerAlign:'center',
      align: 'center',
      renderCell: (params) =>{
          return(
              <>
              <DeleteOutline className="userListDelete"/>
              </>
          )
      }
    },
];


function PoadCastAdmin() {
  const languages = [
    {value: '', text: '--Choose an option--'},
    {value: 'Punjabi', text: 'Punjabi'},
    {value: 'English', text: 'English'},
    {value: 'Hindi', text: 'Hindi'},
  ];

  const speakers = [
    {value: '', text: '--Choose an option--'},
    {value: 'Arijit Singh', text: 'Arijit Singh'},
    {value: 'Sonu Nigam', text: 'Sonu Nigam'},
    {value: 'Rahul Vaidya', text: 'Rahul Vaidya'},
    {value: 'Taylor Swift', text: 'Taylor Swift'},
    {value: 'Zyan', text: 'Zyan'},
    {value: 'Alan Walker', text: 'Alan Walker'}
    
  ];

const [open, setOpen] = useState(false);

const [speaker, setSpeaker] = useState(speakers[0].value);

const [name, setName] = useState("");

const [duration, setDuration] = useState("");

const [language, setLanguage] = useState(languages[0].value);

const [file, setFile] = useState();

const onChangeSongsName = (e) => {
  setName(e.target.value )
}
const onChangeLanguage = (e) => {
  setLanguage(e.target.value )
}
const onChangeDuration = (e) => {
  setDuration(e.target.value)
}
const onChangeSpeaker =(e) => {
  setSpeaker(e.target.value )
}

const onChangeFile =(e) => {
  setFile(e.target.files[0])
}

const handleClickOpen = () =>{
        setOpen(true)
}
const handleClose = () =>{
  setOpen(false)
}

const onSubmit = (e) => {
  e.preventDefault();
  const retrieveUrlObject = {
    "name": name,
    "language": language,
    "speaker": speaker,
    "duration": duration
  }

  console.log(retrieveUrlObject)
  axios.put('https://swar-music.herokuapp.com/api/poadcast/upload/retrieve',retrieveUrlObject).then(
    (res) =>{
      console.log(res.data)
      const formData = new FormData();
      formData.append('file', file);
      axios
      .put(res.data, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      showSuccessToast("PoadCast has been added to S3 bucket!")
    }).catch((error) =>{
      showErrorToast("Unable to add PoadCast to S3 bucket!")
      console.log(error);
    })
    console.log(file)
    setOpen(false);
     
}
const poadCastData = useSelector((state) => {
  console.log("poadCast selector")
console.log(state.poadCastsAdminReducer);
return state.poadCastsAdminReducer
})

const dispatch = useDispatch();
useMemo( () => {
  dispatch(poadCastAction.getAllPoadCastAction())
},[])

  return (
    <div>
      <div className="dialogButton">
      <Button
       variant="contained"
       component="label"
       borderRadius="50%"
       onClick={handleClickOpen}
       sx={{ color: 'white', borderColor: 'black',mt:3,mb:2,backgroundColor: 'black',
       color: 'white',
      }}
       >Add New PodCast</Button>
       </div>
       <Dialog
       open={open}
       onClose={handleClose}
       sx={{
        '& .MuiDialog-paper':{
       p:'0 20px 10px 20px'
        }
       }}
       >
        <DialogTitle>Upload PodCast</DialogTitle>
      <div>
        <form onSubmit={onSubmit}>
        <label >PoadCast Name:</label>
    <input type="text" id="name" value={name} placeholder="SongName..."
    onChange={onChangeSongsName}/>

    <label>Duration</label>
    <input type="text" id="duration" value={duration} placeholder="Duration..."
     onChange={onChangeDuration}/>

    <label >Language:</label>
    <select value={language} onChange={onChangeLanguage}>
        {languages.map(language => (
          <option key={language.value} value={language.value}>
            {language.text}
          </option>
        ))}
      </select>

    <label >Speaker:</label>

    <select value={speaker} onChange={onChangeSpeaker}>
        {speakers.map(speaker => (
          <option key={speaker.value} value={speaker.value}>
            {speaker.text}
          </option>
        ))}
      </select>

    <input type="file" id="file" onChange={onChangeFile}/>

    <input type="submit" value="Upload"/>
        </form>
      </div>

        </Dialog>

    <div className='songsList'>
    <Box sx={{ height: 800, width: '95%' }}>
      <DataGrid
      disableSelectionOnClick
        rows={poadCastData.poadCasts}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        sx={Datagridstyle}
      />
    </Box>
    </div>

    </div>
  )
}

export default  PoadCastAdmin;