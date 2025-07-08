import React from "react";
import "./AICore.css";

const AICore = () => {
  return (
    <div className="ai-core-page">
      <header className="ai-header">
        <h1>⚙️ FitNaviq AI Core</h1>
        <p className="tagline">Where intelligence meets fitness — powered by data, driven by results.</p>
      </header>

      <section className="ai-section">
        <h2>🧠 Personalized Fitness Engine</h2>
        <p>
          Every user is unique — our AI continuously learns from user activity, goals, body metrics, preferences, and progress to generate smarter, more effective workout and nutrition plans.
        </p>
        <ul>
          <li>📊 Dynamic program generation based on fitness level & goals</li>
          <li>🤖 Weekly plan adjustment using real-time user feedback</li>
          <li>📈 AI-powered progress monitoring & goal forecasting</li>
        </ul>
      </section>

      <section className="ai-section">
        <h2>📷 AI Calorie & Food Scanner</h2>
        <p>
          Scan your food using your phone camera and instantly get calories, nutrients, and healthier alternatives — thanks to our deep food database and computer vision AI.
        </p>
        <ul>
          <li>📸 Barcode & image-based scanning</li>
          <li>🥦 Recognizes fruits, packaged foods, and common Indian meals</li>
          <li>💡 Suggests healthier swaps & portion control tips</li>
        </ul>
      </section>

      <section className="ai-section">
        <h2>📍 Smart Workout & Activity Suggestions</h2>
        <p>
          Our algorithm suggests micro-workouts, recovery tips, hydration reminders, and stress reducers — right when you need them.
        </p>
        <ul>
          <li>📅 Suggests workouts based on your mood, time & location</li>
          <li>💤 Recovery routines & rest day logic</li>
          <li>🔔 Smart push notifications to stay on track</li>
        </ul>
      </section>

      <section className="ai-section">
        <h2>🔍 Body & Health Insight Reports</h2>
        <p>
          We convert raw data into simple insights. From hydration to muscle mass, track every important aspect of your wellness using AI-interpreted reports.
        </p>
        <ul>
          <li>📈 Visual charts of sleep, diet, body changes</li>
          <li>🧬 Predictive insights (weight trend, stress level)</li>
          <li>🧾 Weekly & monthly summary PDFs</li>
        </ul>
      </section>

      <section className="ai-section">
        <h2>🧘 Mindful Tech Integration</h2>
        <p>
          AI doesn't just power your body — it also supports your mental fitness. FitNaviq integrates mindfulness with machine learning to promote holistic wellness.
        </p>
        <ul>
          <li>🌤️ Suggests breathing & meditation sessions based on stress levels</li>
          <li>📔 Mood journaling suggestions via smart prompts</li>
          <li>🎯 Encouragement & motivational nudges based on performance</li>
        </ul>
      </section>

      <footer className="ai-footer">
        <p>FitNaviq AI isn’t just smart — it’s built for you.</p>
        <button className="cta-button">Explore the AI Experience 🤖</button>
      </footer>
    </div>
  );
};

export default AICore;
