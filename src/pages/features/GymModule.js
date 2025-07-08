import React from "react";
import "./GymModule.css";

const GymModule = () => {
  return (
    <div className="gym-module-page">
      <header className="gym-header">
        <h1>🏢 FitNaviq Gym & Fitness Center Module</h1>
        <p className="tagline">Modernize your gym. Delight your members. Grow your business.</p>
      </header>

      <section className="gym-section">
        <h2>📋 Member & Admission Management</h2>
        <p>
          Manage your entire member database in one smart dashboard. Automate admissions, renewals, and access controls with ease.
        </p>
        <ul>
          <li>🧾 Digital admission & subscription plans</li>
          <li>📲 Member profile with goals, medical notes, and preferences</li>
          <li>🛑 Attendance & check-in tracking with QR or mobile code</li>
        </ul>
      </section>

      <section className="gym-section">
        <h2>🥗 Assign Personalized Diet & Workout Plans</h2>
        <p>
          Create custom workout routines and nutrition plans for each member. Your trainers or nutritionists can assign, update, and monitor it from their dashboard.
        </p>
        <ul>
          <li>📅 Daily/Weekly meal & workout schedules</li>
          <li>📝 Track member’s progress on diet & training</li>
          <li>🔔 Push reminders and daily alerts to members</li>
        </ul>
      </section>

      <section className="gym-section">
        <h2>📱 Give Members a Personalized App</h2>
        <p>
          With FitNaviq, your gym members get a dedicated app where they can:
        </p>
        <ul>
          <li>📈 Track attendance & performance</li>
          <li>📦 View assigned diet/workout plans</li>
          <li>🗓️ Book sessions or classes</li>
          <li>📨 Chat with their assigned trainer or gym support</li>
        </ul>
        <p>
          🧩 We can even **white-label** the app with your gym name & logo for a premium experience.
        </p>
      </section>

      <section className="gym-section">
        <h2>📊 Real-Time Analytics for Owners</h2>
        <p>
          Track everything — member engagement, trainer performance, financial reports, and space utilization.
        </p>
        <ul>
          <li>📍 Real-time member attendance heatmaps</li>
          <li>💸 Subscription revenue dashboard</li>
          <li>📈 Trainer session tracking & feedback analysis</li>
        </ul>
      </section>

      <section className="gym-section">
        <h2>🎉 Promote Events, Offers & Challenges</h2>
        <p>
          Run in-gym or app-based events and challenges. Notify members with in-app promotions, offer deals, or announce gym competitions.
        </p>
        <ul>
          <li>🏆 Fitness challenges & leaderboard integration</li>
          <li>📨 Push notification campaigns</li>
          <li>📢 Event management & RSVP tracking</li>
        </ul>
      </section>

      <footer className="gym-footer">
        <p>Modern gyms need modern tools. FitNaviq is your complete digital partner.</p>
        <button className="cta-button">Get Started with FitNaviq for Gyms 🏋️‍♂️</button>
      </footer>
    </div>
  );
};

export default GymModule;
