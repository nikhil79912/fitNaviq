import React from "react";
import "./TrainerPlatform.css";

const TrainerPlatform = () => {
  return (
    <div className="trainer-platform-page">
      <header className="trainer-header">
        <h1>🏋️ FitNaviq Trainer Platform</h1>
        <p className="tagline">Empowering trainers to manage, grow & shine in the fitness world.</p>
      </header>

      <section className="trainer-section">
        <h2>📅 Manage Your Clients with Ease</h2>
        <p>
          Organize and manage all your client interactions from one place. Get a complete view of their workouts, diet plans, session history, and progress — in real time.
        </p>
        <ul>
          <li>👥 Centralized client dashboard</li>
          <li>📝 Create & assign personalized workout and meal plans</li>
          <li>📈 Track client progress with analytics</li>
        </ul>
      </section>

      <section className="trainer-section">
        <h2>💼 Build & Grow Your Brand</h2>
        <p>
          FitNaviq helps you build your online presence, showcase expertise, and attract new clients through our platform.
        </p>
        <ul>
          <li>📸 Custom trainer profile with portfolio & client reviews</li>
          <li>🌐 Appear in search for users looking for trainers</li>
          <li>📊 Performance stats and visibility metrics</li>
        </ul>
      </section>

      <section className="trainer-section">
        <h2>🗓️ Schedule & Earn Without Hassle</h2>
        <p>
          Automate your booking and session scheduling with a smart calendar. Set your availability, and let FitNaviq handle the rest — including payments.
        </p>
        <ul>
          <li>🕒 Real-time availability calendar</li>
          <li>💳 Secure payments & earnings tracking</li>
          <li>🔔 Smart reminders for you and your clients</li>
        </ul>
      </section>

      <section className="trainer-section">
        <h2>🎥 Deliver Live & Recorded Sessions</h2>
        <p>
          Go live with clients or upload recorded video workouts. FitNaviq supports both 1-on-1 and group sessions.
        </p>
        <ul>
          <li>📹 HD video integration for live training</li>
          <li>👨‍🏫 Group session support with participant control</li>
          <li>🎞️ Upload recorded video libraries</li>
        </ul>
      </section>

      <section className="trainer-section">
        <h2>🤝 Connect With the FitNaviq Community</h2>
        <p>
          Collaborate with other trainers, participate in challenges, and get featured on the FitNaviq wall to gain exposure.
        </p>
        <ul>
          <li>🗣️ Join trainer forums & knowledge base</li>
          <li>🌟 Get featured in trainer of the week</li>
          <li>🚀 Participate in monthly coaching challenges</li>
        </ul>
      </section>

      <footer className="trainer-footer">
        <p>Ready to grow your training business?</p>
        <button className="cta-button">Join as a Trainer 💼</button>
      </footer>
    </div>
  );
};

export default TrainerPlatform;
