import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    //@ts-ignore
    const currentUser = useSelector((state) => state.currentUser);
    return currentUser.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
