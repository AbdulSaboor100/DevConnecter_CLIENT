import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  return !isAuthenticated && !loading ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
