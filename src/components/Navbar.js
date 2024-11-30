import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                
                <div className="text-2xl font-bold">
                    <Link to="/">Smart Learning</Link>
                </div>

                
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="focus:outline-none"
                    >
                    
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isMenuOpen
                                        ? "M6 18L18 6M6 6l12 12" 
                                        : "M4 6h16M4 12h16M4 18h16" 
                                }
                            />
                        </svg>
                    </button>
                </div>

              
                <ul className="hidden lg:flex space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-blue-300 transition duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/courses"
                            className="hover:text-blue-300 transition duration-300"
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-blue-300 transition duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-blue-300 transition duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {isMenuOpen && (
                <ul className="lg:hidden bg-blue-700 space-y-4 px-4 py-4">
                    <li>
                        <Link
                            to="/"
                            className="block hover:text-blue-300 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/courses"
                            className="block hover:text-blue-300 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="block hover:text-blue-300 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="block hover:text-blue-300 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
