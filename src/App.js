// import logo from './logo.svg';
import './App.css';
import FitNaviqComingSoon from './FitNaviqComingSoon';
// import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import LaunchDetails from "./pages/LaunchDetails";
import UserPlatform from "./pages/features/UserPlatform";
import TrainerPlatform from "./pages/features/TrainerPlatform";
import GymModule from "./pages/features/GymModule";
import AICore from "./pages/features/AICore";
import Login from './pages/Login/Login';
import Dashboard from './pages/admin-dashboard/Dashboard';

function App() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FitNaviqComingSoon />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/launch-details" element={<LaunchDetails />} />
        <Route path="/features/user" element={<UserPlatform />} />
        <Route path="/features/trainer" element={<TrainerPlatform />} />
        <Route path="/features/gym" element={<GymModule />} />
        <Route path="/features/ai-core" element={<AICore />} />
        <Route path="/login" element={<Login />} />
       <Route
  path="/admin-dashboard/dashboard"
  element={
    localStorage.getItem("isLoggedIn") === "true" ? (
      <Dashboard />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

      </Routes>
    </Router>
  );
}



export default App;
