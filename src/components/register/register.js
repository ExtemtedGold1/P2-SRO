import React from "react";
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import RegisterView from './registerView'
import {SignOut} from "../logout";


export const Register = () => {
    const RegisterUser = async (email, password, confirmPassword) => {
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
            <RegisterView onRegister={RegisterUser}/>
            <SignOut/>
        </div>
    )
}