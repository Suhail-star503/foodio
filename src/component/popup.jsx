import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppDataContext } from "../AppData/context";

export default function AddressPopup({ open, onClose }) {

    const { userLocation, setUserLocation } = React.useContext(AppDataContext);
    const Navigate = useNavigate();

    if (!open) return null;

    const handlecontinue = () => {
        if (!userLocation || userLocation.trim() === "") {
            toast.error("Please enter a valid address", {
                position: "top-center",
                theme: "dark",
            });
            return;
        }

        Navigate("/account");
        onClose();
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            {/* Blur Background */}
            <div
                className="absolute inset-0 backdrop-blur-sm bg-black/40"
                onClick={onClose}
            ></div>

            {/* Popup Box */}
            <div className="relative bg-white w-[90%] max-w-md rounded-2xl shadow-xl p-6 animate-fadeIn z-50">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
                >
                    <IoClose />
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Select Your Address
                </h2>

                {/* Option 1: Manual Address Input */}
                <div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Write Address Manually
                        </label>
                        <input
                            type="text"
                            value={userLocation || ""}
                            onChange={(e) => setUserLocation(e.target.value)}
                            placeholder="Enter your address..."
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl transition shadow-md" onClick={handlecontinue}>
                            Continue
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-2 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Option 2: Google Map Auto Location Button */}
                <button
                    className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition shadow-md"
                >
                    <FaLocationDot className="text-xl" />
                    <span>Select Current Location</span>
                </button>

            </div>
        </div>
    );
}
