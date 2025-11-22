import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f7faff] to-[#eef2f8] px-6 py-10">

            

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold text-gray-800 mt-6"
            >
                404 – Page Not Found
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-600 text-lg md:text-xl mt-3 max-w-md text-center"
            >
                Sorry! The page you are looking for might have been removed or is temporarily unavailable.
            </motion.p>

            {/* Floating Animation */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="mt-8"
            >
                <Link to="/">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        //   onClick={() => (window.location.href = "/")}
                        className="px-8 py-3 bg-red-700 text-white rounded-full shadow-md transition inline-flex items-center gap-2"
                    >
                        <FaArrowLeft size={16} /> Back to Home
                    </motion.button>
                </Link>
            </motion.div>

        </div>
    );
};

export default NotFoundPage;
