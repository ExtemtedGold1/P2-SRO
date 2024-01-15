import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import { Register } from './components/register/register';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./config/firebase";
import {Login} from "./components/Login/login";
function App() {
  return (
    <Router>
        <Routes>
            {/*{user ? (*/}
            {/*    <Route exact path='/' Component={Home}/>*/}
            {/*): (*/}
            {/*    <Route exact path='/' Component={Home}/>*/}
            {/*)}*/}
            <Route exact path='/' Component={Home}/>
            <Route path='/register' Component={Register}/>
            <Route path='/login' Component={Login}/>
        </Routes>
    </Router>
  );
}

export default App;
