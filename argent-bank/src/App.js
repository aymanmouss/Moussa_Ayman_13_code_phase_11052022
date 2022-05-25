import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./compoenents/Footer";
import Header from "./compoenents/Header";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import User from "./Pages/User";
import RequireAuth from "./compoenents/RequireAuth";
import RequireAuthSginIn from "./compoenents/RequireAuthSginIn";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<RequireAuthSginIn />}>
          <Route path='/sign-in' element={<SignIn />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path='/user' element={<User />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
