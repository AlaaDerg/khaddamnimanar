import React from 'react';
import './Applicationside.css';

const Applicationside = ({ onClose, application }) => {
  return (
    <div className="applicant-card">
      <div className="card-header">
        <img src="user1.png" alt="Profile" className="profile-img" />
        <div className="card-title">
          <h4>UI/UX Designer</h4>
          <p>Assia Zeghmar</p>
        </div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <hr />

      <div className="card-links">
        <div className="link-item">
          <img src="side1.svg" alt="Portfolio" />
          <span>Portfolio</span>
        </div>
        <div className="link-item">
          <img src="side2.svg" alt="Resume" />
          <span>resume</span>
        </div>
      </div>

      <p className="applied-date">applied on 11/11/24</p>

      <div className="section">
        <h4>Motivation letter</h4>
        <p>
          i am a creative and detail-oriented UI/UX Designer and i want to join your team. i will be responsible for
          designing intuitive and visually appealing user experiences for web and mobile applications.
        </p>
      </div>

      <div className="section">
        <h4>Skills</h4>
        <ul>
          <li>1+ years of experience in UI/UX design.</li>
          <li>Proficiency in Figma, Adobe XD, or Sketch.</li>
          <li>Strong understanding of design principles, typography, and color theory.</li>
          <li>Experience with Auto Layout, components, and design systems.</li>
          <li>Knowledge of HTML, CSS, and basic JavaScript (a plus).</li>
          <li>Ability to work in a fast-paced, collaborative environment.</li>
        </ul>
      </div>

      <div className="section">
        <textarea placeholder="Write meeting details" rows="4" />
        <p className="char-count">Character count</p>
      </div>

      <div className="action-buttons">
        <button className="btn reject">Reject</button>
        <button className="btn accept">Except</button>
      </div>
    </div>
  );
};

export default Applicationside;