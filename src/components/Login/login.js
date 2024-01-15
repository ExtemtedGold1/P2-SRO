import React from 'react';
import {auth} from "../../config/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginView from "./LoginView";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
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

            // setTimeout(() => {
            //     signOut(auth).then(() => {
            //         navigate('/login'); // navigate to login page after logout
            //     }).catch((error) => {
            //         console.error(error);
            //     });
            // },  6000);
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