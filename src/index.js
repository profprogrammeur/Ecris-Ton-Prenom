import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import GamePage from "./components/game/GamePage";
import Win from "./components/game/Win";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Profil from "./components/pages/Profil";
import NotFound from "./components/pages/NotFound";
import { Provider} from 'jotai'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
  <BrowserRouter>
  

  
    <Navbar />
    <Routes>
      <Route path="/Ecris-Ton-Prenom/" element={<App />} />
        <Route path="/Ecris-Ton-Prenom/game" element={<GamePage />} />
        <Route path="/Ecris-Ton-Prenom/game/win" element={<Win />} />
        <Route path="/Ecris-Ton-Prenom/contact" element={<Contact />} />
        <Route path="/Ecris-Ton-Prenom/register" element={<Register />} />
        <Route path="/Ecris-Ton-Prenom/login" element={<Login />} />
        <Route path="/Ecris-Ton-Prenom/profil" element={<Profil />} />
        <Route path="/Ecris-Ton-Prenom/*" element={<NotFound />} />
    </Routes>
    <Footer />
    
  </BrowserRouter>
  </Provider>
);
