
import React from 'react';
import './JobSidebar.css';
import checkIcon from '../assets/check-icon.png';

function JobSidebar({
  onClose,

  logo1,
  name,
  match,
  time,
  salary,
  jobType,
  postedTime,
  applicants,
  description,
  skills,
  userImage,
  matchDot,
  Bookmark,
}) {
  return (
    <div className="job-sidebar">
      <div className="job-header">
      <button className="close-btn" onClick={onClose}>✕</button>
        <img src={logo1} alt="Company Logo" className="company-logo" />
        <div className="job-title-with-match">
          <h4>{name}</h4>
          <div className="match-wrapper-inline">
            <img src={matchDot} alt="Match dot" className="match-dot-img large" />
            <span className="match">{match}% Match</span>
          </div>
        </div>
        

        <button className="close-btn">✕</button>
      </div>

      <hr className="divider" />

      <div className="job-tags">
        <span> + {time}</span>
        <span> + {salary}</span>
        <span> + {jobType}</span>
      </div>

      <div className="meta">
        <span>{postedTime}</span>
        <span className="applicants">Applicants {applicants}</span>
      </div>

      <h3>Job description</h3>
      <p className="description">{description}</p>

      <h3>Skills</h3>
      <div className="skills-column">
      {skills.map((skill, index) => (
      <span key={index} className="skill-tag">
        <img src={checkIcon} alt="check" className="check-icon" />
      {skill}
  </span>
))}

      </div>

      <textarea placeholder="Write your motivation" rows="4"></textarea>
      <div className="char-count">Character count</div>

      <label className="portfolio-label">Got a portfolio? Add a link</label>
      <input type="text" placeholder="e.g. https://myportfolio.com" />

      <div className="upload-box">
        <img src={userImage} alt="Upload" />
        <span>upload cv</span>
      </div>

      <div className="apply-row">
        <img src={Bookmark} alt="Bookmark" className="bookmark-icon" />
        <button className="apply-btn">Apply now</button>
      </div>
    </div>
  );
}

export default JobSidebar;