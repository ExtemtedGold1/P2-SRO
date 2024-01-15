import React from 'react';
import NavBar from "./navbar/navbar";
import Footer from './footer/footer';
import BodyMidLoggedOut from "./body/middlesection/bodyMidLoggedOut";

const loggedOutHome = () => {
    return (
        <div>
            <NavBar/>
            <BodyMidLoggedOut/>
            <Footer/>
        </div>
    )
}
export default loggedOutHome;