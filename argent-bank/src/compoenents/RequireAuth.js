import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import User from "../Pages/User";

const RequireAuth = () => {
  const location = useLocation();
  const auth = JSON.parse(localStorage.getItem("user"));
  return auth ? (
    <User />
  ) : (
    <Navigate to='sign-in' state={{ from: location }} replace />
  );
};

export default RequireAuth;
