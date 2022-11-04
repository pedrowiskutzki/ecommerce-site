import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/router';

export function App() {
  return (
    <BrowserRouter> 
        <Navbar/>
      <Router>
      </Router>
    </BrowserRouter>
  );
}
