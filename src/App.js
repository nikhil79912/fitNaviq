// import logo from './logo.svg';
import './App.css';
import FitNaviqComingSoon from './FitNaviqComingSoon';
// import { ToastContainer } from 'react-toastify';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import LaunchDetails from "./pages/LaunchDetails";
import UserPlatform from "./pages/features/UserPlatform";
import TrainerPlatform from "./pages/features/TrainerPlatform";
import GymModule from "./pages/features/GymModule";
import AICore from "./pages/features/AICore";

function App() {
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
      </Routes>
    </Router>
  );
}



export default App;
