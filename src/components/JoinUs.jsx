import React from 'react';
import { Grid } from '@mui/material'
import Typography from "@mui/material/Typography";
import imgMap from '../constant/imgMap.png';


const JoinUs = () => {
    return (
            <Grid container spacing={2}
                  sx={{alignItems: 'center', justifyContent: 'center',  textAlign: 'center'}}>
                <Grid item xs>
                    <Typography><h1>Poznaj nas!</h1></Typography>
                    <Typography>Sprawdz dostępne obiekty w twojej okolicy</Typography>
                </Grid>
                <Grid item xs>
                    <img src={imgMap} alt='overViewMap' style={{width: '30vh', height: '30vh'}}/>
                </Grid>
            </Grid>
    )
}

export default JoinUs;