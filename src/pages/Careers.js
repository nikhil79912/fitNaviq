import React, { useState } from "react";
import "./Careers.css";

const jobListings = [
  {
    title: "Full Stack Developer Intern",
    id: "fullstack-intern",
    jd: `We're looking for an enthusiastic Full Stack Intern who is eager to learn and contribute. You’ll work across both front-end and back-end systems and help us shape core features.
    
Responsibilities:
- Assist in developing scalable web applications using React & Node.js
- Work with MongoDB/SQL and REST APIs
- Collaborate with design and product teams
- Write clean, maintainable code

Requirements:
- Basic knowledge of React, Node, Express, MongoDB/SQL
- Eagerness to learn and experiment
- Passion for fitness is a plus
- Available for 3–6 months internship`,
  },
  {
    title: "Frontend Developer Intern",
    id: "frontend-intern",
    jd: `We need a creative Frontend Intern to help us design and implement engaging user interfaces for our app and dashboard.

Responsibilities:
- Build responsive UIs using React
- Collaborate with designers on UX/UI
- Optimize performance and accessibility

Requirements:
- Familiarity with HTML, CSS, JavaScript, React
- Eye for design is a bonus
- Basic understanding of RESTful APIs`,
  },
  {
    title: "Backend Developer Intern",
    id: "backend-intern",
    jd: `As a Backend Intern, you'll work with our tech team to build scalable, secure, and high-performance backend systems.

Responsibilities:
- Assist in building REST APIs using Node.js and Express
- Integrate with databases (MongoDB, PostgreSQL)
- Write unit tests and handle error management

Requirements:
- Strong fundamentals in JS, Node.js, and backend logic
- Database basics (SQL or NoSQL)
- Understanding of authentication, API structure`,
  },
  {
    title: "Social Media Marketing Intern",
    id: "smm-intern",
    jd: `We’re seeking a digital-savvy intern to join our marketing team. You’ll be responsible for brainstorming and executing engaging fitness-related content.

Responsibilities:
- Create content for Instagram, LinkedIn, Twitter
- Help grow and manage our social media presence
- Analyze trends and optimize reach

Requirements:
- Active on social platforms
- Creative mindset, love for fitness & wellness
- Good writing skills`,
  },
  {
    title: "LinkedIn Marketing Intern",
    id: "linkedin-marketing",
    jd: `You'll help us build a professional presence on LinkedIn and connect with fitness professionals, trainers, and potential clients.

Responsibilities:
- Manage our LinkedIn content calendar
- Connect with relevant audience
- Promote product updates, blogs, hiring posts

Requirements:
- Good LinkedIn knowledge
- Ability to write concise and value-driven posts`,
  },
  {
    title: "HR Intern",
    id: "hr-intern",
    jd: `Support our growing team with hiring, onboarding, and employee engagement initiatives.

Responsibilities:
- Assist in sourcing candidates
- Coordinate interviews and follow-ups
- Help create an engaging remote culture

Requirements:
- Good communication skills
- Understanding of hiring cycle basics`,
  },
  {
    title: "Customer Support",
    id: "customer-support",
    jd: `Be the face of FitNaviq for our users! Answer queries, provide assistance, and ensure satisfaction.

Responsibilities:
- Respond to user queries via email, chat, and social platforms
- Troubleshoot issues
- Track feedback and pass to product team

Requirements:
- Patience, empathy, problem-solving attitude
- Strong written communication`,
  },
  {
    title: "Sales Executive",
    id: "sales",
    jd: `Join our core business team to grow our reach across gyms, trainers, and fitness centers.

Responsibilities:
- Identify leads and conduct outreach
- Pitch platform to trainers & gyms
- Follow up and close deals

Requirements:
- Passion for fitness industry
- Strong communication and convincing skills
- Experience in SaaS sales or B2B is a bonus`,
  },
];

const Careers = () => {
  const [openJobId, setOpenJobId] = useState(null);

  const toggleJob = (id) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  const handleApply = (role) => {
    window.location.href = `mailto:career@fitnaviq.in?subject=Application for ${encodeURIComponent(
      role
    )}&body=Hi Team FitNaviq,%0D%0A%0D%0AI am interested in the ${encodeURIComponent(
      role
    )} position at FitNaviq. Please find my resume attached.%0D%0A%0D%0ARegards,%0D%0A[Your Full Name]`;
  };

  return (
    <div className="careers-page">
      <h1>🚀 Join the FitNaviq Team</h1>
      <p className="intro">We’re building the future of fitness in India. Passionate about tech, wellness, or community? Explore our open positions and apply now!</p>

      {jobListings.map((job) => (
        <div key={job.id} className="job-card">
          <div className="job-header" onClick={() => toggleJob(job.id)}>
            <h3>{job.title}</h3>
            <span>{openJobId === job.id ? "▲" : "▼"}</span>
          </div>
          {openJobId === job.id && (
            <div className="job-details">
              <pre>{job.jd}</pre>
              <button onClick={() => handleApply(job.title)}>Apply via Email</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Careers;
