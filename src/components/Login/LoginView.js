import React, {useState} from 'react';
import {Card, CardHeader, CardContent, TextField, Button, Link} from '@mui/material';

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
            <Card sx={{ backgroundColor: '#222'}}>
                <CardHeader title='Login' display='center' sx={{color: '#fff'}}/>
                <CardContent>
                    <TextField  sx={{ input: { color: 'white' }}} label='email...' variant='outlined' margin='normal' placeholder='Enter your email'
                    onChange={handleEmail}/>
                    <TextField sx={{ input: { color: 'white' }}} label='password...' variant='outlined' margin='normal' placeholder='Enter your password'
                    onChange={handlePassword}/>
                    <br/>
                    <Button variant='contanied' color='primary' onClick={handleLogin} sx={{ color: 'white'}}>
                        <Link color='inherit' href='/'>
                        Submit
                        </Link>
                    </Button>
                </CardContent>
            </Card>
            </div>
        </>
    )
}

export default LoginView;