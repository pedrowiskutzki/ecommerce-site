import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/router';
import React from "react";
import Footer from "./Footer/index";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter> 
          <Navbar/>
        <Router>
        </Router>
      </BrowserRouter>
      <Footer />

    </>
  );
}
