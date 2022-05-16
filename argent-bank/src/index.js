import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./compoenents/Footer";
import Header from "./compoenents/Header";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";

import "./main.css";
import User from "./Pages/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
