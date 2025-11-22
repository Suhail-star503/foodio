import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const ProtectRoot = () => {
    // const { appData } = React.useContext(AppDataContext);
    const userData = localStorage.getItem("userData");
    if (userData) {
        var appData = {
            isLoggedIn: true,
            
        };
    } else {
        var appData = {
            isLoggedIn: false,
            
        };
    }

    return appData.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoot;
