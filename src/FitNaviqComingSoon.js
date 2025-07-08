import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FitNaviqComingSoon.css"; // You can put your custom styles here
// import logo from "./fitNaviq_logo.png";
import whatapp from "./whatsapp_logo.png";
import insta from "./insta_logo.png";

const FitNaviqComingSoon = () => {
  const [showFoundersPen, setShowFoundersPen] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;

    toast.success("Thanks! We'll keep you updated.", {
      position: "top-right",
    });
  };

  return (
    <div className="coming-soon-container">
      <header className="header">
        {/* <img
          onClick={() => setShowFoundersPen(!showFoundersPen)}
          src={logo}
          alt="FitNaviq Logo"
          className="logo"
        /> */}
      </header>

      <main className="main-content">
        <h1>FitNaviq — Coming Soon</h1>
        <p className="motto">Train Smart. Live Strong.</p>
        <p className="description">
          Your all-in-one platform for workouts, nutrition, trainers, events &
          calorie tracking.
        </p>

        <section className="features">
          <div className="feature-card">
            <h3>👤 User Platform</h3>
            <p>Workouts, nutrition, progress tracking, and trainer booking.</p>
          </div>
          <div className="feature-card">
            <h3>🏋️ Personal Trainer Platform</h3>
            <p>Manage clients, sessions, and grow your brand with FitNaviq.</p>
          </div>
          <div className="feature-card">
            <h3>🏢 Gym & Fitness Center Module</h3>
            <p>
              Digitize admissions, manage classes, track members, and promote
              events.
            </p>
          </div>
          <div className="feature-card">
            <h3>⚙️ AI Core Features</h3>
            <p>
              Smart meal planning, calorie scanning, workout libraries, and
              community events.
            </p>
          </div>
        </section>

        <section className="notify">
          <h2>Be the first to know!</h2>
          <form onSubmit={handleNotify}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <button type="submit">Notify Me</button>
          </form>
        </section>
      </main>

      {/* Founder's Pen Panel */}
      <div className={`founders-pen-panel ${showFoundersPen ? "open" : ""}`}>
        <div className="founders-pen-content">
          <button
            className="close-btn"
            onClick={() => setShowFoundersPen(false)}
          >
            ❌
          </button>
          <h2>✍️ Founder’s Pen</h2>
          <p>
            Fitness is not just about looking good — it is about living a
            better, stronger, and healthier life. With FitNaviq, our mission is
            to make wellness simple, smart, and accessible for everyone, no
            matter where you start from. We believe your fitness journey should
            empower you — from personalized workouts and nutrition guidance to
            connecting with the best trainers and community events. It’s about
            building habits that last, driven by real data and powerful
            technology. Our vision is to create an ecosystem where motivation
            meets innovation — where you can track progress, stay inspired, and
            truly transform your lifestyle.
          </p>
          <p>
            Stay tuned for a revolution in how you manage workouts, diet,
            trainers, and your entire fitness journey. FitNaviq is here to
            redefine what fitness means for you.
          </p>
          <p>
            — <strong>Nikhil Singh, Building FitNaviq</strong>
          </p>
        </div>
      </div>

      {/* Footer */}
 <footer>
  &copy; 2025 FitNaviq. All rights reserved.
  <br />
  For updates &amp; enquiries:{" "}
  <a
    style={{ color: "#a7c2b9" }}
    href="mailto:team@fitnaviq.in"
  >
    team@fitnaviq.in
  </a>
  <div className="social-contact" style={{ marginTop: "10px" }}>
    <span style={{ marginRight: "8px" }}>
      Follow &amp; contact us:
    </span>
    <a
      href="https://instagram.com/fitnaviq"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <img
        src={insta}
        alt="Instagram"
        style={{ width: "32px", marginRight: "10px", verticalAlign: "middle" }}
      />
    </a>
    <a
      href="https://wa.me/917991207033?text=Hello%20FitNaviq%20Team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20platform.%20Could%20you%20please%20share%20details%20about%20how%20FitNaviq%20works%2C%20what%20features%20will%20be%20available%2C%20and%20any%20launch%20offers%20or%20early%20access%20programs%3F%.%20Thank%20you%21"

      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <img
        src={whatapp}
        alt="WhatsApp"
        style={{ width: "32px", verticalAlign: "middle" }}
      />
    </a>
  </div>
</footer>



      {/* WhatsApp floating button */}

      <ToastContainer />
    </div>
  );
};

export default FitNaviqComingSoon;
