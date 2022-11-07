import React from "react";
import "./App.css";
import { AuthProvider } from "./context/auth";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/global";

export function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <AuthProvider>
                    <Navbar />
                    <Router />
                </AuthProvider>
            </BrowserRouter>
            <Footer />
        </>
    );
}
