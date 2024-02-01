import React from 'react';
import {auth} from "../../config/firebase";
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import LoginView from "./LoginView";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const navigate = useNavigate();
    const loginUser = async (email, password) => {
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/');
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                });
        } catch (e) {
            console.log(e);
        }
    }

    const loginUserGoogle = ()=> {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate('/');
            }).catch((error) => {
            console.warn(error);
        })

    }

    return (
        <>
            <LoginView onLogin={loginUser} onLoginGoogle={loginUserGoogle}/>
        </>
    )

}