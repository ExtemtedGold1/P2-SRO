import React from 'react';
import { Grid } from '@mui/material'
import MapGen from "../map";
import Typography from "@mui/material/Typography";
import JoinUs from '../../../components/JoinUs'
const BodyMidLoggedOut = () => {
    return (
            <Grid contaier spacing={2} >
                <Grid item xs>
                    <MapGen/>
                </Grid>
                <Grid item xs>

                </Grid>
                <Grid item xs={12} sx={{ backgroundColor: '#000', color: '#fff'}}>
                    <JoinUs/>
                </Grid>

            </Grid>
    )
}

export default BodyMidLoggedOut;