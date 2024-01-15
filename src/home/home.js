import React, {useEffect, useState} from "react";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../config/firebase";

function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
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