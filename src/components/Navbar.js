import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from ".././fitNaviq_logo.png"; // ✅ Make sure the path matches your project

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(authStatus);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img
            style={{ height: "43px", cursor: "pointer" }}
            src={logo}
            alt="FitNaviq Logo"
            className="logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="drop-toggle">Features ▼</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/features/user">👤 User Platform</Link></li>
              <li><Link to="/features/trainer">🏋️ Trainer Platform</Link></li>
              <li><Link to="/features/gym">🏢 Gym Module</Link></li>
              <li><Link to="/features/ai-core">⚙️ AI Core</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/branding">Branding</Link></li>

        {/* Login/Logout Toggle */}
      {!isLoggedIn ? (
  <li>
    <Link to="/login" className="login-btn">Login</Link>
  </li>
) : (
  <li>
    <Link
      to="/login"
      className="logout-btn"
      onClick={() => {
        localStorage.clear();
        setIsLoggedIn(false);
      }}
    >
      Logout
    </Link>
  </li>
)}

      
      </ul>
    </nav>
  );
};

export default Navbar;
