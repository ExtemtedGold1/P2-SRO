import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import { Register } from './components/auth';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/register' Component={Register}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
