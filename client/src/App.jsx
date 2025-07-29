import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./componets/Event.jsx";
import Home from "./page/Home.jsx";
import Services from "./page/Services.jsx";
import Prices from "./page/prices.jsx";
import Support from "./page/support.jsx";
import AboutUs from "./page/about.jsx";
import Header from "./componets/Header";
import SignUp from "./componets/SignUp";
import Login from "./componets/Login";
import { getCurrentUser, logout } from "./services/authService";

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

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
  };

  const handleCloseModals = () => {
    setShowSignUp(false);
    setShowLogin(false);
    const loggedInUser = getCurrentUser();
    if (loggedInUser) {
      setUser(loggedInUser.user);
    }
  };

  // Props to pass to every page
  const headerProps = {
    onSignUpClick: handleSignUpClick,
    onLoginClick: handleLoginClick,
    onLogout: handleLogout,
    user,
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header is always visible */}
        <Header {...headerProps} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/services" element={<Services />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/signup"
              element={<SignUp onClose={handleCloseModals} />}
            />
            <Route
              path="/login"
              element={<Login onClose={handleCloseModals} />}
            />
            {/* Login and SignUp are handled as modals, not as routes */}
          </Routes>
        </main>
        {/* Modals are always available */}
        {showSignUp && <SignUp onClose={handleCloseModals} />}
        {showLogin && <Login onClose={handleCloseModals} />}
      </div>
    </Router>
  );
};

export default App;
