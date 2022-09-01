import React, { useEffect, useState} from 'react';
import { Route, useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import jwtDecode from 'jwt-decode';
import { token,user } from './Utility/authenticatinReducer';


export function PrivateRoutes({ children }) {
    const navigate = useNavigate();
    // if (token !=null && !user().isAdmin) {
    //     // not logged in so redirect to login page with the return url
    //    navigate("/home")
    // }else if(token !=null && user().isAdmin){
    //     navigate("/admin")
    // }
   if(token == null){
    navigate("/")
   }
    // authorized so return child components
    return children;
}

export function PrivateAdminRoutes({ children }) {
    const navigate = useNavigate();
    if (token !=null && user().isAdmin) {
        // not logged in so redirect to login page with the return url
        console.log("admin")
        console.log(user().isAdmin)
        return children;
    }else{
        navigate("/")
    }
}

// export default PrivateRoute;