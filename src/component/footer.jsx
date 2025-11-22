import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

const Footer = () => {
    const [loading, setLoading] = useState(false);
    const handleSubscribe = (e) => {
        e.preventDefault();
        setLoading(true); // start loading

        setTimeout(() => {
            setLoading(false); // stop loading
            toast.success("Subscribed successfully!");
            e.target.reset(); // reset form
        }, 1200); // delay for animation / fake API
    };

    return (
        <footer className="bg-red-500 text-white pt-16 pb-10 px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Foodio</h2>
                    <p className="text-white">
                        Delivering taste faster than ever.
                        Your favourite restaurants, one tap away.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Restaurants</li>
                        <li className="hover:text-white cursor-pointer">Delivery Partners</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-white">
                        <li>Email: support@foodio.com</li>
                        <li>Phone: +1 (800) 345-9870</li>
                        <li>Address: 22 Food Street, New Delhi, India</li>
                    </ul>

                    <div className="flex space-x-4 mt-5 text-2xl">
                        <FaFacebook className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaLinkedin className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                    <p className="text-white mb-4">
                        Subscribe to get offers & updates.
                    </p>
                    <form onSubmit={handleSubscribe}>

                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 rounded-l-xl text-white"
                                style={{ border: "1px solid white" }}
                                required
                            />
                            <button className="px-4 py-2 bg-black text-white rounded-r-xl transition hover:bg-gray-800 flex items-center justify-center" disabled={loading}>
                                {loading ? "Subscribing..." : "Subscribe"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white mt-12 pt-6 text-center text-white">
                © {new Date().getFullYear()} Foodio • All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
