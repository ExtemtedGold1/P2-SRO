import React from 'react';
import {auth} from "../../config/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginView from "./LoginView";


export const Login = () => {
    const loginUser = async (email, password) => {
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <LoginView onLogin={loginUser}/>
        </>
    )

}