import { Button, Dialog, Modal } from '@mui/material'
import React, { useState,useMemo } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import DialogTitle from '@mui/material/DialogTitle';
import './songs.css'
import { useSelector,useDispatch } from 'react-redux';
import { songsAction } from './Utils/songsReducer';
import axios from 'axios';

const columns = [
    
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    editable: true,
  },
  {
    field: 'language',
    headerName: 'Language',
    width: 300,
    editable: true,
  },
  {
    field: 'artist',
    headerName: 'Artists',
    type: 'number',
    width: 300,
    editable: true,
  },
  {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) =>{
          return(
              <>
              <DeleteOutline className="userListDelete"/>
              </>
          )
      }
    },
];


function Songs() {
  const languages = [
    {value: '', text: '--Choose an option--'},
    {value: 'Punjabi', text: 'Punjabi'},
    {value: 'English', text: 'English'},
    {value: 'Hindi', text: 'Hindi'},
  ];

  const artists = [
    {value: '', text: '--Choose an option--'},
    {value: 'Arijit Singh', text: 'Arijit Singh'},
    {value: 'Sonu Nigam', text: 'Sonu Nigam'},
    {value: 'Rahul Vaidya', text: 'Rahul Vaidya'},
    {value: 'Taylor Swift', text: 'Taylor Swift'},
    {value: 'Zyan', text: 'Zyan'},
    {value: 'Alan Walker', text: 'Alan Walker'}
    
  ];

const [open, setOpen] = useState(false);

const [artist, setArtist] = useState(artists[0].value);

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
const onChangeArtists =(e) => {
  setArtist(e.target.value )
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
    "artist": artist,
    "duration": duration
  }

  console.log(retrieveUrlObject)
  axios.put('http://localhost:8900/api/songs/upload/retrieve',retrieveUrlObject).then(
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
    }).catch((error) =>{
      console.log(error);
    })
    console.log(file)
     
}
const songsData = useSelector((state) => {
  console.log("songs selector")
console.log(state.songsReducer);
return state.songsReducer
})

const dispatch = useDispatch();
useMemo( () => {
  dispatch(songsAction.getAllSongsAction())
},[])

  return (
    <div>
      <div className="dialogButton">
      <Button
       variant="contained"
       component="label"
       borderRadius="50%"
       onClick={handleClickOpen}>Add New Song</Button>
       </div>
       <Dialog
       open={open}
       onClose={handleClose}
       >
        <DialogTitle>Upload Songs</DialogTitle>
      <div>
        <form onSubmit={onSubmit}>
        <label >Song Name:</label>
    <input type="text" id="name" value={name} placeholder="SongName..."
    onChange={onChangeSongsName}/>

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

    <label >Artists:</label>

    <select value={artist} onChange={onChangeArtists}>
        {artists.map(artist => (
          <option key={artist.value} value={artist.value}>
            {artist.text}
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
        rows={songsData.songs}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={15}
        rowsPerPageOptions={[15]}
        components={{ Toolbar: GridToolbar }}
        checkboxSelection
      />
    </Box>
    </div>

    </div>
  )
}

export default Songs