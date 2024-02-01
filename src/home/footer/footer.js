import React from 'react';
import {Grid, Card, CardContent, Typography, styled} from '@mui/material'


const useStyles = styled((Grid) => ({
    root: {
        flexGrow: 1,
        marginTop: Grid.spacing(2),
    },
    card: {
        padding: Grid.spacing(2),
        marginBottom: Grid.spacing(2),
    },
    headline: {
        marginBottom: Grid.spacing(1),
    },
    body: {
        marginBottom: Grid.spacing(1),
    },
}));

const MyGrid = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root} sx={{backgroundColor: '#222'}}>
            <Grid item xs={12} >
                <Card className={classes.card} sx={{ textAlign: 'center'}}>
                    <CardContent>
                        <Typography variant="h5" className={classes.headline}>
                            Projekt EagleBooks
                        </Typography>
                        <Typography variant="body1" className={classes.body}>
                            Mazh pytania?</Typography>
                        <Typography variant="body1" className={classes.body}>
                            Potrzebujesz wiecej informacji?</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} >
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="body1" className={classes.body}>
                            Kontakt:</Typography>
                        <Typography variant="body1" className={classes.body}>
                            EagleBooks Contact@gmail.com</Typography>
                        <Typography variant="body1" className={classes.body}>
                            +48 666 696 666</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="body1" className={classes.body}>
                            Badz na biezacym z nowosciami i wydarzeniami w EagleBooks.</Typography>
                        <Typography variant="body1" className={classes.body}>
                            Zapisz sie na newsletter</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default MyGrid;