import React from 'react';
import NavBarLogged from './navbar/navbar-loged';
import BodyMid from "./body/middlesection/bodyMid";
import Footer from "./footer/footer";

const loggedInHome = ({user}) => {
    return (
        <>
            <NavBarLogged user={user}/>
            <BodyMid user={user}/>
            <Footer/>
        </>
    )
}

export default loggedInHome;