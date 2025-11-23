import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AppDataContext } from "../AppData/context";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { setcartitem } = useContext(AppDataContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCart);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const removeItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        setcartitem(updatedCart.length);
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const handleCheckout = () => {
        setLoading(true);
        setTimeout(() => {
            setCartItems([]);
            localStorage.removeItem("cartItems");
            setcartitem(0);
            setLoading(false);
            toast.success("Bill sent to your email! Make the payment from there. Thank you for your purchase.", {
                position: "top-right",
                theme: "dark",
                autoClose: 5000,
            });
        }, 2000);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300 p-6 pt-28 flex justify-center">
            <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6">

                <h1 className="text-4xl font-extrabold text-center mb-6 flex justify-center items-center gap-2">
                    <FaShoppingCart size={34} />
                    Your Cart
                </h1>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                        <img
                            src="/cart.png"
                            alt="Empty Cart"
                            className="w-44 opacity-90 animate-bounce"
                        />
                        <h2 className="text-2xl font-semibold mt-6">Your cart is empty</h2>
                        <p className=" mt-1">Add some delicious food</p>
                        <Link to="/account">
                            <button
                                className="mt-4 bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-red-700 hover:scale-105 transition-all duration-300"
                            >Continue Shoping</button>

                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="space-y-4">
                            {cartItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300"
                                >
                                    <div>
                                        <h2 className="text-xl font-bold text-red-700">{item.name}</h2>
                                        <p className="text-lg font-bold text-gray-800">₹{item.price}</p>
                                    </div>

                                    <button
                                        onClick={() => removeItem(index)}
                                        className="bg-red-600 p-3 rounded-full shadow-md hover:bg-red-700 hover:scale-110 transition-all duration-300"
                                    >
                                        <FaTrashAlt size={18} color="white" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Total + Checkout */}
                        <div className="mt-6 p-5 bg-white rounded-xl shadow-xl flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-red-700">Total Amount</h2>
                            <p className="text-3xl font-extrabold text-red-800">₹{totalPrice}</p>
                        </div>

                        <button
                            className="
                w-full bg-red-600 text-white font-bold
                py-3 rounded-xl shadow-md mt-4 text-xl hover:bg-red-600 hover:scale-[1.03]
                transition-all duration-300
              "     onClick={handleCheckout}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Proceed to Checkout"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
