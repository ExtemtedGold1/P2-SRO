import React, {useEffect, useState} from "react";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../config/firebase";

function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if(user){
                setTimeout(()=>{
                    signOut(auth)
                        .then(()=>{
                            console.log('user singed out');
                        })
                        .catch((error) => {
                            console.error('Sign out error', error);
                        });
                },3600000);
            }
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    console.log(user)
    if (user) {
        return <LoggedIn user={user}/>;
    } else {
        return <LoggedOut/>;
    }
}

export default Home;