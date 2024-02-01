import React from 'react';
import {Card, CardContent, Table, Button, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Grid
} from "@mui/material";
import {CardTitle} from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from "@mui/material/Paper";

const Profile = ({user}) =>{
    return(
            <Grid container spacing={0} sx={{alignItems: 'center', justifyContent: 'center',  textAlign: 'center'}}>
                <Grid item xs={3}>
                    <Card sx={{ padding:1}}>
                        <CardTitle style={{ paddingLeft: 20, paddingRight: 20}}>
                            { user.photoURL ? <img src={user.photoURL} style={{ borderRadius: 20}}
                                onError={(e) => {
                                    e.target.onerror = null
                                }} /> :
                                <AccountCircleIcon fontSize='large'/>
                            }
                            <Typography>{user.displayName}</Typography>
                        </CardTitle>
                        <CardContent>
                            <Typography>M</Typography>
                            <Typography>G</Typography>
                            <Typography>A</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={7}>
                    <Card sx={{ padding:1}}>
                        <CardTitle>Ranking</CardTitle>
                        <CardContent>
                            <TableContainer component={Paper}>
                                <Table sx={{}}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Number</TableCell>
                                            <TableCell align='right'>Logo</TableCell>
                                            <TableCell align='right'>Name</TableCell>
                                            <TableCell align='right'>Win</TableCell>
                                            <TableCell align='right'>Lose</TableCell>
                                            <TableCell align='right'>Tie</TableCell>
                                            <TableCell align='right'>Goal</TableCell>
                                            <TableCell align='right'>Score</TableCell>
                                            <TableCell align='right'>WinStreak</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item xs={2}>
                        <Button color='success' variant='contained'>Join now!</Button>
                    </Grid>
            </Grid>
    )
}

export default Profile;
