import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='*' element={<Home />} />

        </Routes>
        </BrowserRouter>
        
    );
};

export default App;