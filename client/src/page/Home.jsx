import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../services/authService";

// Play Button Component
const PlayButton = () => (
  <div className="inline-flex items-center bg-pink-100 text-pink-600 px-3 py-1 rounded-full mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    Show trailer
  </div>
);

// Hero Content Component
const HeroContent = () => (
  <div>
    <PlayButton />

    {/* Headline */}
    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      Where <span className="text-purple-600">architects</span> create awesome
      things <span className="text-purple-600">priceless</span>
    </h1>

    {/* Subheadline */}
    <p className="text-gray-600 mb-8 text-lg">
      Find, explore and learn in an awesome place
      <br />
      find, explore and learn in great.
    </p>

    <CTAButtons />
  </div>
);

// CTA Buttons Component
const CTAButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-4">
      <button
        className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-200 flex items-center"
        onClick={() => navigate("/signup")}
      >
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2"
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
      <button
        className="text-gray-700 px-6 py-3 rounded-md hover:text-purple-600 transition duration-200 flex items-center"
        onClick={() => navigate("/login")}
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2"
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

const ImageGrid = ({ colors }) => (
  <div className="grid grid-cols-4 gap-2">
    {Array(8)
      .fill()
      .map((_, i) => (
        <div
          key={i}
          className={`
            ${colors[i % colors.length]} 
            rounded-lg 
            aspect-square 
            flex 
            items-center 
            justify-center 
            animate-wave
          `}
          style={{ animationDelay: `${i * 200}ms` }}
        >
          <div className="bg-white rounded-full w-8 h-8"></div>
        </div>
      ))}
  </div>
);

const color = [
  "bg-red-200",
  "bg-orange-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-teal-300",
  "bg-blue-200",
  "bg-indigo-300",
  "bg-pink-200",
];

// Brand Logos Component
const BrandLogos = () => (
  <div className="mt-12 flex justify-between items-center flex-wrap gap-8 opacity-50">
    <div className="text-gray-500 font-bold">shopify</div>
    <div className="text-gray-500 font-bold">Disney+</div>
    <div className="text-gray-500 font-bold">reddit</div>
    <div className="text-gray-500 font-bold">amazon</div>
    <div className="text-gray-500 font-bold">airbnb</div>
  </div>
);

// Main Home Component
export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedInUser = getCurrentUser();
    if (loggedInUser) {
      setUser(loggedInUser.user);
    }
  }, []);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    // Optional: redirect to home or show a message
  };

  const handleCloseModals = () => {
    setShowSignUp(false);
    setShowLogin(false);

    // Check if user logged in after modal closes
    const loggedInUser = getCurrentUser();
    if (loggedInUser) {
      setUser(loggedInUser.user);
    }
  };

  return (
    <div
      className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 md:p-8 flex items-center justify-center"
      style={{ minHeight: "92vh", height: "auto" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-2">
          <HeroContent />
          <ImageGrid colors={color} />
        </div>
        <BrandLogos />
      </div>
    </div>
  );
}
