import React from 'react';
import NavBar from "./navbar/navbar";
import Typography from "@mui/material/Typography";

const loggedOutHome = () => {

    return (
        <>
            <NavBar/>
            <Typography> loggedOutHome </Typography>
        </>
    )
}

export default loggedOutHome;