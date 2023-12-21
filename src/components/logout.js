import React from 'react';
import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export const SignOut = () => {

    const signOutHandle = async () => {
        try{
            await signOut(auth)
            console.log('wylogowano')
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Button onClick={signOutHandle}>
            Logout
        </Button>
    )
}