import { useState } from "react";
import {
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaUser,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-lg">
                <a href="/" className="text-white font-bold text-lg">
                  South Spice Delights
                </a>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <FaHome className="mr-2" /> Home
              </a>
              <a
                href="/menu"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <FaUtensils className="mr-2" /> Menu
              </a>
              <a
                href="/cart"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <FaShoppingCart className="mr-2" /> Cart
              </a>
              <div className="relative group">
                <button
                  onClick={() => {
                    // Toggle the dropdown menu
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
                >
                  <FaUser className="mr-2" /> Account
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform transform ${
                      isMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <a
                      href="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Login
                    </a>
                    <a
                      href="/signup"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Signup
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <FaEnvelope className="mr-2" /> Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile menu items */}
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
            >
              <FaHome className="mr-2" /> Home
            </a>
            <a
              href="/menu"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
            >
              <FaUtensils className="mr-2" /> Menu
            </a>
            <a
              href="/cart"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
            >
              <FaShoppingCart className="mr-2" /> Cart
            </a>
            <div className="relative group">
              <button
                onClick={() => {
                  // Toggle the dropdown menu
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
              >
                <FaUser className="mr-2" /> Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform transform ${
                    isMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <a
                    href="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Signup
                  </a>
                </div>
              )}
            </div>
            <a
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
            >
              <FaEnvelope className="mr-2" /> Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
