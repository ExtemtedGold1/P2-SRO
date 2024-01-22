import React from 'react';
import {
    Box, Card, CardContent, Table
    , Button, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody
} from "@mui/material";
import {CardTitle} from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from "@mui/material/Paper";




const Profile = ({user}) =>{
    return(
        <Box>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Card sx={{ padding:1, height: '17vh'}}>
                        <CardTitle>
                            <AccountCircleIcon fontSize='large'/>
                            {user.uid}
                        </CardTitle>
                        <CardContent>
                            <Typography>M</Typography>
                            <Typography>G</Typography>
                            <Typography>A</Typography>
                        </CardContent>
                    </Card>

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
                    <Button color='success' variant='contained'>Join now!</Button>
            </div>
        </Box>
    )
}

export default Profile;
