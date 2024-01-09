import React from 'react';
import NavBarLogged from './navbar/navbar-loged';
import Typography from "@mui/material/Typography";

const loggedInHome = () => {

    return (
        <>
            <NavBarLogged/>
            <Typography> loggedHome </Typography>
        </>
    )
}

export default loggedInHome;