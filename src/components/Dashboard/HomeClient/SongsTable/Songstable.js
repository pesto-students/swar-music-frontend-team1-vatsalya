import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import React ,{useState}from 'react'


function SongsTable() {
  const [selectedRow, setSelectedRow] = useState({});
  return (
    <TableContainer sx={{ml:'60px'}} >
      <Table aria-label='simple table'
        sx={{
          maxWidth: 650,
          color:'red',
          "& .MuiTableRow-root:hover": {
            backgroundColor: "rgb(255, 255, 255)",
            cursor: 'pointer',
             transform: 'scale(1.09)',
          },
        }}
        size='small'
      >
        <TableHead>
           <TableRow selected>
             <TableCell>Id</TableCell>
             <TableCell>Title</TableCell>
             <TableCell>Artist</TableCell>
             <TableCell>Time</TableCell>
             <TableCell>Album</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
        {tableData.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
            onClick={() => setSelectedRow(row)} >
              <TableCell component="th" scope="row"> {row.id}</TableCell>
              <TableCell >{row.Title}</TableCell>
              <TableCell>{row.Artist}</TableCell>
              <TableCell>{row.Time}</TableCell>
              <TableCell >{row.Album}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       </Table>
    </TableContainer>
  )
}

export default SongsTable


const tableData= [{
    "id": 1,
    "Title": "Kurt",
    "Artist": "Eggle",
    "Time": "4:30",
    "Album": "Male"
  }, {
    "id": 2,
    "Title": "Rriocard",
    "Artist": "Tamblyn",
    "Time": "6:10",
    "Album": "Male"
  }, {
    "id": 3,
    "Title": "Waly",
    "Artist": "Steely",
    "Time": "3:40",
    "Album": "Female"
  }, {
    "id": 4,
    "Title": "Hubey",
    "Artist": "Iwanicki",
    "Time": "5:40",
    "Album": "Male"
  }, {
    "id": 5,
    "Title": "Codie",
    "Artist": "Asple",
    "Time": "5:15",
    "Album": "Male"
  }];