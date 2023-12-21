import React, { useState } from "react";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Card, CardContent, TextField, Button } from '@mui/material';


export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card variant='outlined'>
            <CardContent>
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
            <br/>
            <Button variant='contained' color='primary' onClick={signIn}>
                Submit
            </Button>
            </CardContent>
        </Card>
        </div>
    )
}