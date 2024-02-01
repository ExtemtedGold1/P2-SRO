import React from 'react';
import { Card, CardContent } from '@mui/material'
import { authService } from '../config/firebase'
import Typography from "@mui/material/Typography";

const ProfilView = () => {

    const getAuthServie = authService.checkUserLoggedIn();



    return (
        <Card>
            <CardContent>
                <div>
                    {/*<Typography>{user.photoURL}</Typography>}*/}
                </div>
            </CardContent>
        </Card>
    )
};

export default ProfilView;