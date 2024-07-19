// src/App.js
import React from "react";
import ReferEarnPage from "./components/ReferEarn";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ReferEarnPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
