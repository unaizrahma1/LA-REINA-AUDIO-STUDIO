import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Logo Component
const Logo = () => (
  <div className="flex items-center">
    <div className="bg-purple-600 h-8 w-8 rounded mr-2"></div>
    <h1 className="text-2xl font-bold text-gray-800">Artco</h1>
  </div>
);

// Navigation Link Component
const NavLink = ({ to, active, text }) => (
  <Link to={to} className="flex items-center">
    <span className="mr-1 text-purple-600">{active ? "•" : "○"}</span>
    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">
      {text}
    </span>
  </Link>
);

// Navigation Component
const Navigation = () => (
  <nav className="hidden md:flex items-center space-x-8">
    <NavLink to="/services" text="Services" />
    <NavLink to="/prices" text="Prices" />
    <NavLink to="/support" text="Support" />
    <NavLink to="/about" text="About us" />
  </nav>
);

// Auth Buttons Component
const AuthButtons = ({ onSignUpClick, onLoginClick, onLogout, user }) => {
  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Welcome, {user.name}</span>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200 flex items-center"
          onClick={onLogout}
        >
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        className="text-gray-700 hover:text-purple-600"
        onClick={onSignUpClick}
      >
        Sign Up
      </button>
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200 flex items-center"
        onClick={onLoginClick}
      >
        Login
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

// Header Component
const Header = ({ onSignUpClick, onLoginClick, onLogout, user: userProp }) => {
  const [user, setUser] = useState(userProp || null);
  const [navOpen, setNavOpen] = useState(false); // State for mobile nav
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProp) {
      // Try to get user from localStorage (or session)
      const stored = localStorage.getItem("user");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setUser(parsed.user || parsed);
        } catch {}
      }
    } else {
      setUser(userProp);
    }
  }, [userProp]);

  // Local logout handler if onLogout is not provided
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      navigate("/"); 
    } else {
      localStorage.removeItem("user");
      setUser(null);
      navigate("/"); 
    }
  };

  return (
    <header className="flex justify-around bg-gradient-to-br from-purple-100 to-indigo-100 items-center p-2 relative">
      <Logo />
      {/* Burger button for mobile */}
      <button
        className="md:hidden flex items-center px-2 py-1"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          className="h-8 w-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Desktop Navigation */}
      <Navigation />
      {/* Mobile Navigation */}
      {navOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden z-10 py-4">
          <NavLink to="/services" text="Services" />
          <NavLink to="/prices" text="Prices" />
          <NavLink to="/support" text="Support" />
          <NavLink to="/about" text="About us" />
          {/* Auth buttons for mobile */}
          {!user ? (
            <div className="flex flex-col w-full items-center mt-4 space-y-2">
              <button
                className="w-3/4 text-gray-700 hover:text-purple-600 border border-purple-600 rounded py-2"
                onClick={onSignUpClick}
              >
                Sign Up
              </button>
              <button
                className="w-3/4 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
                onClick={onLoginClick}
              >
                Login
              </button>
            </div>
          ) : (
            <div className="flex flex-col w-full items-center mt-4 space-y-2">
              <span className="text-gray-700">Welcome, {user.name}</span>
              <button
                className="w-3/4 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      )}
      {/* Desktop Auth Buttons - hidden on mobile */}
      <div className="hidden md:flex">
        <AuthButtons
          onSignUpClick={onSignUpClick}
          onLoginClick={onLoginClick}
          onLogout={handleLogout}
          user={user}
        />
      </div>
    </header>
  );
};

export default Header;
