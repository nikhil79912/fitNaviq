import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // style accordingly
import logo from "./../fitNaviq_logo.png";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFoundersPen, setShowFoundersPen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img
            style={{ height: "43px", cursor: "pointer" }}
            onClick={() => setShowFoundersPen(!showFoundersPen)}
            src={logo}
            alt="FitNaviq Logo"
            className="logo"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="drop-toggle">Features ▼</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/features/user">👤 User Platform</Link>
              </li>
              <li>
                <Link to="/features/trainer">🏋️ Trainer Platform</Link>
              </li>
              <li>
                <Link to="/features/gym">🏢 Gym Module</Link>
              </li>
              <li>
                <Link to="/features/ai-core">⚙️ AI Core</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/launch-details">Branding</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
