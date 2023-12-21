import React, { useState } from "react";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Card, CardContent, TextField, Button, CardHeader } from '@mui/material';
import { SignOut } from "./logout";


export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            if(password === confirmPassword){
            await createUserWithEmailAndPassword(auth, email, password);
            } else {
                console.warn('passwords not matching');
                return null;
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card variant='outlined'>
            <CardContent>
            <CardHeader title='Sign In' display='center'/>
            <TextField
            label='email...' variant="outlined"
            margin="normal" 
            placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField
            label='password...' variant="outlined"
            margin="normal"
            placeholder="Enter your password"
            type="password" 
            onChange={(e) => setPassword(e.target.value)}/>
            <TextField
            label='confirm password...' variant="outlined"
            margin="normal"
            placeholder="confirm password"
            type="password" 
            onChange={(e) => setConfirmPassword(e.target.value)}/>
            <br/>
            <Button variant='contained' color='primary' onClick={signIn}>
                Submit
            </Button>
            <SignOut/>
            </CardContent>
        </Card>
        </div>
    )
}