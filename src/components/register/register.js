import React from "react";
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import RegisterView from './registerView'
import { useNavigate } from "react-router-dom";


export const Register = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const navigate = useNavigate();



    const RegisterUser = async (email, password, confirmPassword) => {
        try {
            if(password === confirmPassword){
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
            } else {
                console.warn('passwords not matching');
                return null;
            }
        } catch (e) {
            console.error(e);
        }
    }

    const SignInGoogle = () =>{
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate('/');
            }).catch((error) => {
                console.warn(error);
        })
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <RegisterView onRegister={RegisterUser} onRegisterGoogle={SignInGoogle}/>
        </div>
    )
}