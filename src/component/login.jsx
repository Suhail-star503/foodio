import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AppDataContext } from "../AppData/context";

export default function AnimatedLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
    const [error, setError] = useState("");
    const Navigate = useNavigate();
    const { appData, setAppData } = React.useContext(AppDataContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in both fields.");
            return;
        }

        setLoading(true);

        // Extract clean name from email
        const extractName = (email) => {
            let base = email.split("@")[0]; // before @
            base = base.replace(/[0-9]/g, "");
            base = base.replace(/[._]/g, " ");
            base = base.trim();
            base = base.charAt(0).toUpperCase() + base.slice(1);
            if (base.length > 6) {
                return base.slice(0, 6) + "...";
            }
            return base;
        };



        const username = extractName(email);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);

            const userData = {
                email,
                name: username,
            };

            setAppData({
                ...appData,
                isLoggedIn: true,
                user: userData,
            });

            localStorage.setItem("userData", JSON.stringify(userData));

            Navigate("/account");
        }, 1000);
    };


    return (
        <div className="min-h-screen flex items-center justify-center  px-6 py-12" style={{ paddingTop: "90px" }}>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-6xl bg-white/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                aria-live="polite"
            >
                {/* Left: Illustration - hidden on small devices */}
                <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-red-50 to-white items-center justify-center p-8">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-md"
                    >
                        {/* Replace the img src with your illustrated image path */}
                        <img
                            src="/login.svg"
                            alt="Login illustration"
                            className="w-full h-auto select-none pointer-events-none"
                        />

                        {/* Decorative caption */}
                        <div className="mt-6 text-center">
                            <h3 className="text-xl font-semibold text-red-600">Welcome back!</h3>
                            <p className="mt-2 text-sm text-gray-500">Sign in to continue</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="w-full max-w-md"
                    >
                        <div className="mb-6 text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900">Sign in</h2>
                            <p className="mt-2 text-sm text-gray-600">Enter your details</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    required
                                    autoComplete="email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative mt-1">
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type={showPwd ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your secure password"
                                        className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 pr-12"
                                        required
                                        autoComplete="current-password"
                                    />

                                </div>
                            </div>

                            {/* Error message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-sm text-red-600"
                                >
                                    {error}
                                </motion.div>
                            )}

                            {/* Submit */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3 text-white font-semibold shadow hover:bg-red-700 transition disabled:opacity-60"
                                >
                                    {loading ? (
                                        <svg
                                            className="w-5 h-5 animate-spin"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>
                            </div>


                        </form>

                        {/* Divider */}
                        {/* back to home here */}
                        <Link to={'/'}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="mt-6 text-center text-sm text-gray-600 hover:text-red-600 cursor-pointer"
                            >
                                &larr; Back to Home
                            </motion.div>
                        </Link>


                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
