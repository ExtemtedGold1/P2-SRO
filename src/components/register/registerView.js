import React from 'react';
import {Button, Card, CardContent, CardHeader, TextField, Link} from "@mui/material";
import {useState} from "react";
import {CardFooter} from "react-bootstrap";
import Typography from "@mui/material/Typography";

const RegisterView = ({ onRegister, onRegisterGoogle }) => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange  = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange  = (e) => setConfirmPassword(e.target.value);

    const handleRegister = () => {
        onRegister(email, password, confirmPassword);
    };

    const handleRegisterGoogle = () => {
        onRegisterGoogle(email,password,confirmPassword);
    };



    return (
        <>
            <Card variant='outlined'>
                <CardContent>
                    <CardHeader title='Sign In' display='center'/>
                    <TextField
                        label='email...' variant="outlined"
                        margin="normal"
                        placeholder="Enter your email" onChange={handleEmailChange}/>
                    <TextField
                        label='password...' variant="outlined"
                        margin="normal"
                        placeholder="Enter your password"
                        type="password"
                        onChange={handlePasswordChange}/>
                    <TextField
                        label='confirm password...' variant="outlined"
                        margin="normal"
                        placeholder="confirm password"
                        type="password"
                        onChange={handleConfirmPasswordChange}/>
                    <br/>
                    <Button variant='contained' color='primary' onClick={handleRegister}>
                        Submit
                    </Button>
                    <CardFooter>
                        <div style={{ padding: 20}}>
                        <Typography><Link color='secondary' onClick={handleRegisterGoogle}> Sign In<
                        /Link> with Google</Typography>
                        </div>
                    </CardFooter>
                </CardContent>
            </Card>
        </>
    )
}

export default RegisterView;