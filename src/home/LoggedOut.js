import React from 'react';
import NavBar from "./navbar/navbar";
import Typography from "@mui/material/Typography";
import BodyMid from './body/middlesection/bodyMid'; 

const loggedOutHome = () => {

    return (
        <>
            <NavBar/>
            <Typography> loggedOutHome </Typography>
            <BodyMid/>
        </>
    )
}

export default loggedOutHome;