import React, { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export const AppDataContext = createContext();

const AppData = ({ children }) => {

    const [appData, setAppData] = useState({
        isLoggedIn: false,
        user: null,

    });
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        // On mount, check localStorage for user data
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            setAppData({
                isLoggedIn: true,
                user: JSON.parse(storedUserData),
            });
        }
    }, []);

   



    return (
        <AppDataContext.Provider value={{ appData, setAppData, userLocation, setUserLocation }}>
            {children}
        </AppDataContext.Provider>
    );
};

export default AppData;
