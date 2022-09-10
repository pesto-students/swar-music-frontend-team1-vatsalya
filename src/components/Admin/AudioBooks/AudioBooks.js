import { Button, Dialog, IconButton } from '@mui/material'
import React, { useState,useMemo } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, gridClasses} from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { useSelector,useDispatch } from 'react-redux';
import { audioBooksAction } from './Utils/audioBooksAdminReducer';
import axios from 'axios';
import '../Songs/songs.css'
import { showSuccessToast, showErrorToast } from '../../Common/Toast';
import ConfirmModel from '../../../components/PageNotFound/ConfirmModel';


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




function AudioBookAdmin() {


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
      field: 'writter',
      headerName: 'Writter',
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
                <ConfirmModel rowId = {params.row._id} title={"Delete AudioBooks"} 
                content={"Are you sure you want to delete this audioBook?"}
                action={audioBooksAction.deleteAudioBooksAction(params.row._id)}/> 
                </>
            )
        }
      },
  ];
  const languages = [
    {value: '', text: '--Choose an option--'},
    {value: 'Punjabi', text: 'Punjabi'},
    {value: 'English', text: 'English'},
    {value: 'Hindi', text: 'Hindi'},
  ];

  const writters = [
    {value: '', text: '--Choose an option--'},
    {value: 'Arijit Singh', text: 'Arijit Singh'},
    {value: 'Sonu Nigam', text: 'Sonu Nigam'},
    {value: 'Rahul Vaidya', text: 'Rahul Vaidya'},
    {value: 'Taylor Swift', text: 'Taylor Swift'},
    {value: 'Zyan', text: 'Zyan'},
    {value: 'Alan Walker', text: 'Alan Walker'}
    
  ];

const [open, setOpen] = useState(false);

const [writter, setWritter] = useState(writters[0].value);

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
const onChangeWritter =(e) => {
  setWritter(e.target.value )
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
    "writter": writter,
    "duration": duration
  }

  console.log(retrieveUrlObject)
  axios.put('https://swar-music.herokuapp.com/api/audioBooks/upload/retrieve',retrieveUrlObject).then(
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
      showSuccessToast("AudioBooks has been added to S3 bucket!");
    }).catch((error) =>{
      showErrorToast("Unable to add AudioBooks to S3 bucket!")
      console.log(error);
    })
    console.log(file)
    setOpen(false);
}
const audioBooksData = useSelector((state) => {
  console.log("audioBooks selector")
console.log(state.audioBooksAdminReducer);
return state.audioBooksReducer
})

const dispatch = useDispatch();
useMemo( () => {
  dispatch(audioBooksAction.getAllAudioBooksAction())
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
       
       >Add New AudioBooks</Button>
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
        <DialogTitle>Upload AudioBooks</DialogTitle>
      <div>
        <form onSubmit={onSubmit}>
        <label >AudioBook Name:</label>
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

    <label >Writter:</label>

    <select value={writter} onChange={onChangeWritter}>
        {writters.map(writter => (
          <option key={writter.value} value={writter.value}>
            {writter.text}
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
        rows={audioBooksData.audioBooks}
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

export default  AudioBookAdmin;