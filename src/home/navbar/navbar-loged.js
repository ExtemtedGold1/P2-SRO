import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {SignOut} from "../../components/logout";
import Link from '@mui/material/Link';

function NavBarLogged({user}) {
    return (
        <Box sx={{ flexGrow: 1}} >
            <AppBar position="static" sx={{backgroundColor: '#222'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        EagleBooks
                    </Typography>
                    <Typography variant='body1' sx={{ flexGrow: 1 }}>
                        Welcome on our site
                    </Typography>
                    <Box><Link href='/profilView' sx={{ color: '#fff'}}>email: {user.email}</Link></Box>
                    <SignOut/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBarLogged;