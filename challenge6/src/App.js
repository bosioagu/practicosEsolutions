import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import AllPost from './components/AllPost';
import NotFound from './components/NotFound';

function App() {

  return (
  
    <Router>
        <div className='container-fluid'>
          <Navbar/>
          <Routes>
            <Route path="/CreatePost" element={<Navigate to="/Login" replace/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Register" element={<Register/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/CreatePost" element={<CreatePost/>}/>
            <Route exact path="/AllPost" element={<AllPost/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
