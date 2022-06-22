import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import GamePage from "./components/game/GamePage";
import Contact from "./components/pages/Contact"
import Authentification from "./components/pages/Authentification";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Profil from "./components/pages/Profil";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/child/" element={<GamePage />} />
          <Route path="/child/:id" element={<GamePage />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/register" element={<Authentification />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/profil" element={<Profil />} /> 
        </Routes>
      <Footer />
    </BrowserRouter>
 
);
