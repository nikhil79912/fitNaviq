import React from "react";
import "./UserPlatform.css";

const UserPlatform = () => {
  return (
    <div className="user-platform-page">
      <header className="user-header">
        <h1>👤 FitNaviq User Platform</h1>
        <p className="tagline">Your personalized fitness universe — in one place.</p>
      </header>

      <section className="user-section">
        <h2>💪 Tailored Workouts for Every Body</h2>
        <p>
          Whether you're a beginner or an athlete, FitNaviq gives you access to curated workout routines designed by certified trainers. From yoga to HIIT to strength training — everything is personalized to your goals.
        </p>
        <ul>
          <li>🏃‍♂️ Goal-based programs (Weight Loss, Muscle Gain, Flexibility, etc.)</li>
          <li>📅 Custom weekly workout planner</li>
          <li>📹 In-app video tutorials for every exercise</li>
        </ul>
      </section>

      <section className="user-section">
        <h2>🥗 Smart Nutrition Guidance</h2>
        <p>
          Nutrition made simple. Scan, track, and plan your meals — with AI-powered suggestions that fit your fitness goals.
        </p>
        <ul>
          <li>📷 Calorie scanner for packaged food</li>
          <li>📊 Daily macro & micro nutrient tracking</li>
          <li>👨‍⚕️ Connect with certified dieticians (subscription-based)</li>
        </ul>
      </section>

      <section className="user-section">
        <h2>📈 Real-Time Progress Tracking</h2>
        <p>
          Stay motivated by tracking everything — weight, inches, workouts, meals, hydration, and even mood. Visual graphs help you see progress over time.
        </p>
        <ul>
          <li>📉 Body metrics dashboard</li>
          <li>📅 Weekly summary reports</li>
          <li>🧠 Mind & mood journaling</li>
        </ul>
      </section>

      <section className="user-section">
        <h2>🤝 Book & Chat with Certified Trainers</h2>
        <p>
          Find and book trainers that match your needs and schedule. You can chat, schedule sessions, and even take live virtual classes.
        </p>
        <ul>
          <li>🧑‍🏫 Verified & rated personal trainers</li>
          <li>📞 In-app chat & video consultations</li>
          <li>🗓️ Flexible session booking</li>
        </ul>
      </section>

      <section className="user-section">
        <h2>🌐 Connect & Compete in the Community</h2>
        <p>
          Join challenges, participate in leaderboards, share your journey, and inspire others. Stay motivated with a fitness-first social experience.
        </p>
        <ul>
          <li>🏆 Weekly challenges with rewards</li>
          <li>📸 Social wall to share progress</li>
          <li>👯 Find workout buddies near you</li>
        </ul>
      </section>

      <footer className="user-footer">
        <p>Ready to redefine your fitness journey?</p>
        <button className="cta-button">Join the Waitlist 🚀</button>
      </footer>
    </div>
  );
};

export default UserPlatform;
