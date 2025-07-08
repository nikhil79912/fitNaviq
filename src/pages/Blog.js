import React, { useState } from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "💪 5-Minute Daily Habits to Supercharge Your Fitness",
    summary: "Staying consistent is key. Here are five tiny habits that compound into massive results over time...",
    content: `Consistency beats intensity. In this blog, we cover:
    
1. Morning hydration (start your metabolism)
2. Daily movement goal (10-min walk, 15 pushups)
3. Mindful eating (eat without screen distraction)
4. Sleep window commitment
5. Daily win journaling

Build one at a time. These habits train your brain and body together!`,
  },
  {
    id: 2,
    title: "🥗 The Truth About Calories: Myths vs Facts",
    summary: "‘All calories are equal’ — is that true? Let’s debunk the top 5 myths around calorie counting and nutrition...",
    content: `Calories aren't evil. They’re energy. But:

- Myth: All calories are equal ➤ Fact: Nutrient quality matters!
- Myth: Skipping meals helps ➤ Fact: It slows metabolism
- Myth: Carbs are bad ➤ Fact: Whole carbs fuel workouts

Focus on real food, not just numbers. Our AI scanner can guide you through this!`,
  },
  {
    id: 3,
    title: "🤖 Why AI Is Changing the Fitness Game Forever",
    summary: "From personalized plans to calorie scanners, AI is redefining how we train, eat, and stay motivated...",
    content: `FitNaviq's AI Core personalizes everything:
    
- Auto-adjust workout based on recovery and goals
- Calorie & food scanner gives instant nutrition info
- AI pushes custom reminders (hydration, mobility)
- Predictive progress forecasting

This isn’t the future — it’s now. Learn how FitNaviq makes your fitness journey smarter.`,
  },
];

const Blog = () => {
  const [expandedId, setExpandedId] = useState(null);

  const togglePost = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="blog-page">
      <h1>📰 FitNaviq Blog</h1>
      <p className="intro">Stay informed. Stay motivated. We cover fitness, food, tech, and everything wellness.</p>

      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <div className="blog-header" onClick={() => togglePost(post.id)}>
            <h3>{post.title}</h3>
            <span>{expandedId === post.id ? "▲" : "▼"}</span>
          </div>
          <p className="summary">{post.summary}</p>
          {expandedId === post.id && (
            <div className="blog-content">
              <pre>{post.content}</pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blog;
