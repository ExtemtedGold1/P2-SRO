import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import { Register } from './components/register/register';
import {Login} from "./components/login/Login";
import SearchView from "./components/search/SearchView";
import ProfilView from "./components/ProfilView";
function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/register' Component={Register}/>
            <Route path='/login' Component={Login}/>
            <Route path='/search' Component={SearchView}/>
            <Route path='/profilview' Component={ProfilView}/>
        </Routes>
    </Router>
  );
}

export default App;
