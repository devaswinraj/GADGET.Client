import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
    ShoppingCart,
    Package,
    LogOut,
    Menu,
    X
} from "lucide-react";

let NavBar = () => {

    let navigate = useNavigate();
    let location = useLocation();

    let [isOpen, setIsOpen] = useState(false);

    let logOut = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    // Close menu when clicking a link
    let closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#0B0F19] border-b border-cyan-500/20 shadow-lg">

                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    <div className="flex items-center justify-between py-4">

                        {/* Logo */}
                        <Link
                            to="/products"
                            onClick={closeMenu}
                            className="flex items-center gap-3 group"
                        >
                            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">

                                <ShoppingCart
                                    size={30}
                                    className="text-cyan-400"
                                />

                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">

                                <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    GADGET
                                </span>{" "}

                                <span className="text-cyan-400">
                                    POINT
                                </span>

                            </h1>
                        </Link>


                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-center gap-3">

                            {location.pathname !== "/" && (
                                <Link
                                    to="/"
                                    className="px-4 py-2 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                    Home
                                </Link>
                            )}

                            {location.pathname === "/products" && (
                                <Link
                                    to="/products/create"
                                    className="px-4 py-2 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:scale-105"
                                >
                                    Add Product
                                </Link>
                            )}

                            {location.pathname !== "/products" && (
                                <Link
                                    to="/products"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                    <Package size={20} />
                                    Products
                                </Link>
                            )}

                            <button
                                onClick={logOut}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white hover:scale-105 transition-all duration-300"
                            >
                                <LogOut size={20} />
                                Logout
                            </button>

                        </div>


                        {/* Hamburger Button - Mobile + Tablet */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all duration-300"
                        >
                            {isOpen ? (
                                <X size={30} />
                            ) : (
                                <Menu size={30} />
                            )}
                        </button>

                    </div>


                    {/* Mobile + Tablet Dropdown */}
                    {isOpen && (
                        <div className="lg:hidden pb-5 pt-2 border-t border-cyan-500/20">

                            <div className="flex flex-col gap-2">

                                {location.pathname !== "/" && (
                                    <Link
                                        to="/"
                                        onClick={closeMenu}
                                        className="px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                    >
                                        Home
                                    </Link>
                                )}

                                {location.pathname === "/products" && (
                                    <Link
                                        to="/products/create"
                                        onClick={closeMenu}
                                        className="px-4 py-3 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300"
                                    >
                                        Add Product
                                    </Link>
                                )}

                                {location.pathname !== "/products" && (
                                    <Link
                                        to="/products"
                                        onClick={closeMenu}
                                        className="flex items-center gap-2 px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                    >
                                        <Package size={20} />
                                        Products
                                    </Link>
                                )}

                                <button
                                    onClick={logOut}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
                                >
                                    <LogOut size={20} />
                                    Logout
                                </button>

                            </div>

                        </div>
                    )}

                </div>

            </nav>
        </>
    );
};

export default NavBar;