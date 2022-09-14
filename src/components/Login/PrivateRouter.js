import React, { useEffect, useState} from 'react';
import { Route, useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import jwtDecode from 'jwt-decode';
import { token,user } from './Utility/authenticatinReducer';

export function PrivateRoutes({ children }) {
    if(token() == null || token() === '' || jwtDecode(token()).exp < Date.now() / 1000){
        return <Navigate to="/"/>
       }
    return children;
}

export function PrivateAdminRoutes({ children }) {
    if(token() == null || token() === '' || jwtDecode(token()).exp < Date.now() / 1000){
        return <Navigate to="/"/>
       }
       else if(!jwtDecode(token()).isAdmin){
        return <Navigate to="/"/>
       }
    return children;
}


