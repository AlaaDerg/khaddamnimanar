import React from 'react';
import './JobDetails.css';



function JobDetails() {
  return (
    <div className="job-container">
      <div className="job-header">
        <img src="logoli.svg" alt="Logo" className="logo" />
        <h2 className="job-title">Ui/Ux designer</h2>
        <button className="edit-btn">
          <img src="Pen1.svg" alt="Edit" className="edit-icon" />
          Edit job details
        </button>
      </div>

      <hr className="divider" />

      <div className="job-body">
        <div className="description-section">
          <h3>Job description</h3>
          <p>
            We are looking for a creative and detail-oriented UI/UX Designer to join our team. 
            You will be responsible for designing intuitive and visually appealing user experiences 
            for web and mobile applications.
          </p>

          <h3>Skills</h3>
          <ul className="skills-list">
            <li><img src="Iconyes.svg" alt="check" /> UI Tools: Figma</li>
            <li><img src="Iconyes.svg" alt="check" /> Wireframing & Prototyping</li>
            <li><img src="Iconyes.svg" alt="check" /> Mobile & Web Design</li>
            <li><img src="Iconyes.svg" alt="check" /> Accessibility & UX Principles</li>
            <li><img src="Iconyes.svg" alt="check" /> Basic HTML & CSS (Bonus)</li>
          </ul>
        </div>

        <div className="role-info">
          <h3>About this role</h3>
          <div className="capacity">
            <p><strong>14 applied</strong> of 100 capacity</p>
            <img src="BlueBar.svg" alt="progress" className="progress-bar" />
          </div>
          <p className="post-date">posted 20/03/2025</p>
          <p className="label">Job Type</p>
          <button className="job-type">+ Part time</button>
          <p className="label">Salary</p>
          <p className="salary">25000da</p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;

