import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import SignIn from "../Pages/SignIn";

const RequireAuthSginIn = () => {
  const location = useLocation();
  const auth = JSON.parse(localStorage.getItem("user"));
  return !auth ? (
    <SignIn />
  ) : (
    <Navigate to='user' state={{ from: location }} replace />
  );
};

export default RequireAuthSginIn;
