import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-teal-700 text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-20 flex justify-between items-center">
          {/* Company Name */}
          <h1 className="text-xl font-bold">
            <Link to="/" className="hover:text-gray-300">
              NextGen Conveyor Solution
            </Link>
          </h1>

          {/* Hamburger Icon (visible on mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex space-x-6 text-sm md:text-lg`}
          >
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
