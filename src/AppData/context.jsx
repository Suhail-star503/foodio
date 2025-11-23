import React, { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export const AppDataContext = createContext();

const AppData = ({ children }) => {

    const [appData, setAppData] = useState({
        isLoggedIn: false,
        user: null,

    });
    const [userLocation, setUserLocation] = useState(null);
    const [cartitem, setcartitem] = useState(0);

    useEffect(() => {
        // On mount, check localStorage for user data
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            setAppData({
                isLoggedIn: true,
                user: JSON.parse(storedUserData),
            });
        }
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setcartitem(cartItems.length);
    }, [cartitem]);

   



    return (
        <AppDataContext.Provider value={{ appData, setAppData, userLocation, setUserLocation, cartitem, setcartitem }}>
            {children}
        </AppDataContext.Provider>
    );
};

export default AppData;
