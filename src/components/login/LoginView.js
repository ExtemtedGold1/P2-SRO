
import React, {useState} from 'react';
import {Card, CardHeader, CardContent, TextField, Button} from '@mui/material';

const LoginView = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLogin = () => {
        onLogin(email, password);
    }

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Card>
                <CardHeader title='Login' display='center' sx={{color: '#fff', textAlign: 'center'}}/>
                <CardContent>
                    <TextField label='email...' variant='standard' margin='normal' placeholder='Enter your email' onChange={handleEmail} sx={{color: '#fff'}} required inputProps={{ sx: {color: '#fff'} }}/>
                    <TextField label='password...' variant='standard' margin='normal' placeholder='Enter your password' onChange={handlePassword} required inputProps={{ sx: {color: '#fff'} }} type='password'/>
                    <br/>
                    <Button variant='contanied' color='primary' onClick={handleLogin}>
                        Submit
                    </Button>
                </CardContent>
            </Card>
            </div>
        </>
    )
}

export default LoginView;