import React, { useState } from "react";
import OfferLetter from "./Offerletter";
import "./Dashboard.css";

const Dashboard = () => {
  const [activePanel, setActivePanel] = useState("");
  const [showLetter, setShowLetter] = useState(false);
  const [letterData, setLetterData] = useState({
    internName: "",
    startDate: "",
    endDate: "",
    stipend: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLetter(true);
  };

  return (
    <div className="dashboard-container">
      <h1>👨‍💼 FitNaviq Admin Dashboard</h1>

      <div className="dashboard-options">
        <button
          onClick={() => {
            setActivePanel("offer");
            setShowLetter(false);
            setLetterData({
              internName: "",
              startDate: "",
              endDate: "",
              stipend: "",
            });
          }}
        >
          🎁 Release Offer Letter
        </button>
        <button
          onClick={() => {
            setActivePanel("experience");
            alert("Coming Soon: Experience Letter Generation");
          }}
        >
          📄 Release Experience Letter
        </button>
      </div>

      {activePanel === "offer" && (
        <div className="form-panel">
          <h2>🎁 Offer Letter Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Intern Full Name"
              value={letterData.internName}
              onChange={(e) =>
                setLetterData({ ...letterData, internName: e.target.value })
              }
              required
            />
            <input
              type="date"
              placeholder="Start Date"
              value={letterData.startDate}
              onChange={(e) =>
                setLetterData({ ...letterData, startDate: e.target.value })
              }
              required
            />
            <input
              type="date"
              placeholder="End Date"
              value={letterData.endDate}
              onChange={(e) =>
                setLetterData({ ...letterData, endDate: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Stipend (optional)"
              value={letterData.stipend}
              onChange={(e) =>
                setLetterData({ ...letterData, stipend: e.target.value })
              }
            />
            <button type="submit">Generate Preview</button>
          </form>
        </div>
      )}

      {showLetter && activePanel === "offer" && (
        <OfferLetter
          internName={letterData.internName}
          startDate={letterData.startDate}
          endDate={letterData.endDate}
          stipend={letterData.stipend}
        />
      )}
    </div>
  );
};

export default Dashboard;
