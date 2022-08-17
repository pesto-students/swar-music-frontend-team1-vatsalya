import React from 'react'
import { Toolbar } from '@mui/material';
import {flexbox } from '@mui/system'
import swarlogo from './swarlogo.png'
import './Logo.css';

function Logo() {
  return (
         <Toolbar sx={{height :'5vh', display: flexbox}}>
       <img
        className="sidebarlogo"
        src={swarlogo}
        alt=""
      />
      <h4>SWAR APP</h4>
      </Toolbar>
    
  )
}

export default Logo