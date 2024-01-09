import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

function NavBar() {
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
                    <Link underline='hover' color='inherit' href='/register'>
                        Sign In!
                    </Link>
                    <Button color="inherit">
                        <Link underline='hover' color='inherit' href='/login'>
                            Login
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;