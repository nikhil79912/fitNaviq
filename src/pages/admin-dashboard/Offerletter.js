import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import "./OfferLetter.css";
import logo from "../../fitNaviq_logo.png"; // ✅ Make sure the path matches your project

const OfferLetter = ({ internName = "Intern Name", startDate, endDate, stipend }) => {
  const pdfRef = useRef();

  const handleDownload = () => {
    const element = pdfRef.current;
    const opt = {
      margin: 0.5,
      filename: `${internName.replace(/\s+/g, "_")}_FitNaviq_Offer_Letter.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const today = new Date().toLocaleDateString();

  return (
    <div className="offer-wrapper">
      <div className="download-btn-wrapper">
        <button className="download-btn" onClick={handleDownload}>
          ⬇️ Download Offer Letter (PDF)
        </button>
      </div>

      <div className="offer-letter-container" ref={pdfRef}>
    <div className="letter-header">
  <img src={logo} alt="FitNaviq Logo" className="letter-logo" />
  <h1 className="logo-text">📄 Internship Offer Letter</h1>
</div>
        <p className="date">Date: {today}</p>

        <p>
          To,<br />
          <strong>{internName}</strong><br />
          [Intern’s Address]
        </p>

        <p><strong>Subject:</strong> Internship Offer Letter – Marketing Intern (2 Months)</p>

        <p>Dear {internName.split(" ")[0] || "Intern"},</p>

        <p>
          We are excited to offer you the opportunity to join <strong>FitNaviq</strong> as a <strong>Marketing Intern</strong> for a duration of <strong>two (2) months</strong>, from <strong>{startDate}</strong> to <strong>{endDate}</strong>.
        </p>

        <p>
          You will be contributing to our marketing initiatives, including brand development, social media engagement, creator outreach, and campaign execution. You will work closely with <strong>Ms. Nisha Sahu</strong>, our Marketing Manager and Internship Mentor.
        </p>

        <h3>📌 Internship Details:</h3>
        <ul>
          <li><strong>Position:</strong> Marketing Intern</li>
          <li><strong>Duration:</strong> 2 Months</li>
          <li><strong>Start Date:</strong> {startDate}</li>
          <li><strong>End Date:</strong> {endDate}</li>
          <li><strong>Stipend:</strong> {stipend || "Unpaid (Certificate & LOR will be provided)"}</li>
          <li><strong>Reporting To:</strong> Ms. Nisha Sahu</li>
          <li><strong>Mode:</strong> Remote / Hybrid</li>
        </ul>

        <h3>🔍 Key Responsibilities:</h3>
        <ul>
          <li>Managing Instagram & LinkedIn campaigns</li>
          <li>Content calendar planning & execution</li>
          <li>Collaborating with fitness creators and supplement brands</li>
          <li>Supporting events, brand activations, and analytics tracking</li>
        </ul>

        <h3>📌 Terms & Conditions:</h3>
        <p>
          This internship is a temporary, project-based assignment and does not imply full-time employment. You will be evaluated based on performance, initiative, and creativity.
        </p>
        <p>
          On successful completion, you will receive an official <strong>Internship Certificate</strong> and <strong>Letter of Recommendation</strong>.
        </p>

        <p>
          Please confirm your acceptance by replying to this letter or signing below. For any queries, feel free to contact us at <a href="mailto:team@fitnaviq.in">team@fitnaviq.in</a>.
        </p>

        <p>
          Warm regards,<br />
          <strong>Nikhil Singh</strong><br />
          Founder, FitNaviq
        </p>

        <hr />

        <h4>📝 Acknowledgement by Intern</h4>
        <p>
          I, <strong>{internName}</strong>, accept the offer for the position of Marketing Intern at FitNaviq and agree to the mentioned terms.
        </p>
        <p><strong>Signature:</strong> _________________________</p>
        <p><strong>Date:</strong> _________________________</p>
      </div>
    </div>
  );
};

export default OfferLetter;
