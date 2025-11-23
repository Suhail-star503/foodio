import React, { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { AppDataContext } from "../AppData/context";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import AddressPopup from "./popup";
import { useContext } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { cartitem } = useContext(AppDataContext);
    const [addressPopupOpen, setAddressPopupOpen] = useState(false);
    const [profileopen, setProfileOpen] = useState(false);
    const { appData, setAppData, userLocation } = React.useContext(AppDataContext);
    const Navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem("userData");
        setAppData({
            ...appData,
            isLoggedIn: false,
            user: null,
        });
        setOpen(false);
        Navigate("/");

    }

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Brand Logo */}
                <h1 className="text-3xl font-bold text-red-500 tracking-wide">
                    Foodio<span className="text-gray-700">.</span>
                </h1>

                {/* RIGHT SECTION (Cart + SignIn + Menu button on Mobile) */}


                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <Link to={'/'}>
                        <li className="hover:text-red-500 cursor-pointer transition">Home</li>
                    </Link>
                    <Link to={'/account'}>
                        <li className="hover:text-red-500 cursor-pointer transition">Menu</li>
                    </Link>
                    <Link to={'/help'}>
                        <li className="hover:text-red-500 cursor-pointer transition">Support</li>
                    </Link>
                    {
                        localStorage.getItem("userData") ? (
                            <div className="flex items-center gap-1 cursor-pointer px-3 py-2 rounded-xl transition bg-red-500" style={{ borderRadius: "30px" }} onClick={() => setAddressPopupOpen(true)}>
                                <FaLocationDot className="text-white text-xl" />

                                {userLocation ? (
                                    <span
                                        className="font-medium text-white text-sm"
                                        style={{
                                            minWidth: "40px",
                                            maxWidth: "100px",
                                            display: "inline-block",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",

                                        }}
                                    >
                                        {userLocation.length > 10 ? userLocation.slice(0, 10) + "..." : userLocation}
                                    </span>
                                ) : (
                                    <span className="font-medium text-white text-sm">Set Location</span>
                                )}

                            </div>
                        ) : null
                    }

                </ul>

                <div className="flex items-center gap-4">

                    {/* Cart always visible */}
                    <Link to={'/cart'}>
                        <div className="relative cursor-pointer">
                            <ShoppingBag className="w-6 h-6 text-gray-800" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {cartitem}
                            </span>
                        </div>
                    </Link>

                    {/* Sign In always visible */}


                    {appData.isLoggedIn ? (
                        <div className="relative hidden md:block">
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                                style={{ cursor: "pointer" }}
                            >
                                <User size={18} />
                                <span className="font-medium">
                                    {
                                        localStorage.getItem("userData")
                                            ? JSON.parse(localStorage.getItem("userData")).name
                                            : "User"

                                    }
                                </span>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg overflow-hidden z-20">
                                    <Link
                                        to="/account"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setOpen(!open)}
                                    >
                                        Continue Shopping
                                    </Link>

                                    <button
                                        onClick={logoutUser}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to={"/login"}>
                            <button className="px-4 py-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition hidden md:block md:px-5 md:py-2">
                                Sign In
                            </button>
                        </Link>
                    )}

                    {/* Mobile Sign In Button */}
                    {appData.isLoggedIn ? (

                        <div className="relative block md:hidden">
                            <button
                                onClick={() => setProfileOpen(!profileopen)}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition md:hidden"
                                style={{ cursor: "pointer" }}
                            >
                                <User size={18} />
                                <span className="font-medium">
                                    {
                                        localStorage.getItem("userData")
                                            ? JSON.parse(localStorage.getItem("userData")).name
                                            : "User"

                                    }
                                </span>
                            </button>

                            {profileopen && (
                                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg overflow-hidden z-20">
                                    <Link
                                        to="/account"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setProfileOpen(!profileopen)}
                                    >
                                        Continue Shopping
                                    </Link>

                                    <button
                                        onClick={logoutUser}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to={'/login'}>
                            <button className="px-4 py-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition md:hidden">
                                Sign In
                            </button>

                        </Link>
                    )}
                    {/* Mobile menu icon */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Only the menu items slide smoothly) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col gap-6 text-gray-700 font-medium px-6 py-4">
                    <Link to={'/'} onClick={() => setOpen(false)}>
                        <li className="hover:text-red-500 cursor-pointer transition">Home</li>
                    </Link>
                    <Link to={'/account'} onClick={() => setOpen(false)}>
                        <li className="hover:text-red-500 cursor-pointer transition">Menu</li>
                    </Link>
                    <Link to={'/help'} onClick={() => setOpen(false)}>
                        <li className="hover:text-red-500 cursor-pointer transition">Support</li>
                    </Link>

                    {
                        localStorage.getItem("userData") ? (
                            <div className="flex items-center gap-1 cursor-pointer px-3 py-2 rounded-xl transition bg-red-500" style={{ borderRadius: "7px", justifyContent: "center" }} onClick={() => setAddressPopupOpen(true)}>
                                <FaLocationDot className="text-white text-xl" />
                                {/* <span className="font-medium text-white">Set Location</span> */}

                                {userLocation ? (
                                    <span
                                        className="font-medium text-white text-sm"
                                        style={{
                                            minWidth: "40px",

                                            display: "inline-block",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",

                                        }}
                                    >
                                        {userLocation.length > 25 ? userLocation.slice(0, 25) + "..." : userLocation}
                                    </span>
                                ) : (
                                    <span className="font-medium text-white text-sm">Set Location</span>
                                )}

                            </div>
                        ) : null
                    }


                </ul>
            </div>
            <AddressPopup open={addressPopupOpen} onClose={() => setAddressPopupOpen(false)} />
        </nav>
    );
};

export default Navbar;
