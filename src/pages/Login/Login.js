import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Dashboard from "../admin-dashboard/Dashboard";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validator
    if (!email || !password) {
      return setErrorMsg("Both fields are required.");
    }
    if (!email.includes("@") || email.length < 5) {
      return setErrorMsg("Enter a valid email.");
    }

    // Static Auth Check
    if (email === "team@fitnaviq.in" && password === "fitnaviq@123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin-dashboard/dashboard");
    } else {
      setErrorMsg("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 FitNaviq Admin Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMsg("");
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMsg("");
          }}
        />
        <button type="submit">Login</button>
        {errorMsg && <p className="error">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default Login;
