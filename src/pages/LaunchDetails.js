import React from "react";
import "./Branding.css";

const Branding = () => {
  return (
    <div className="branding-page">
      <h1>🤝 Partner with FitNaviq</h1>
      <p className="intro">
        We’re on a mission to redefine fitness in India — and we believe the
        journey is stronger when we do it together.
      </p>

      <section className="branding-section">
        <h2>🎯 Who Can Collaborate?</h2>
        <ul>
          <li>🏋️‍♂️ Gyms & Fitness Studios</li>
          <li>🛍️ Fitness Accessory Brands</li>
          <li>🥤 Supplement & Wellness Product Companies</li>
          <li>🧘 Wellness & Yoga Centers</li>
          <li>📅 Event Planners (Fitness & Wellness)</li>
        </ul>
      </section>

      <section className="branding-section">
        <h2>✨ Why Collaborate with Us?</h2>
        <ul>
          <li>🚀 Reach a highly engaged fitness-driven audience</li>
          <li>📲 Get featured in-app & on our social media</li>
          <li>🤖 AI-powered targeting for your brand exposure</li>
          <li>📍 Local & national visibility with smart recommendations</li>
        </ul>
      </section>

      <section className="branding-contact">
        <p>
          Whether you're a growing brand or an established name in fitness,
          we're open to exciting collaborations that bring value to our users.
        </p>
        <p className="email-link">
          📬 Reach out to us at{" "}
          <a
            href="mailto:team@fitnaviq.in?subject=Brand Collaboration Proposal"
            className="cta-link"
          >
            team@fitnaviq.in
          </a>
        </p>
      </section>

      <footer className="branding-footer">
        <p>
          Let’s co-create a healthier, smarter India — one rep, one product, one
          event at a time.
        </p>
      </footer>
    </div>
  );
};

export default Branding;
