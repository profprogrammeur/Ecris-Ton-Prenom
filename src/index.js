import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "jotai";

import "./index.css";
import App from "./App";
import GamePage from "./components/game/GamePage";
import Win from "./components/game/Win";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
import Login from "./components/pages/Login";
import Profil from "./components/pages/Profil";
import NotFound from "./components/pages/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/game/win" element={<Win />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
);
