import React, { useState } from "react";
import "./TopNav.css";

const TopNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="job-header1">
      <div className="left-section">
        <img src="Iconslach.svg" className="back-icon" />
        <div className="job-info">
          <h2>UI/UX Designer</h2>
          <div className="tags">
            <span className="tag closed">closed</span>
            <span className="tag">+ Part time</span>
            <span className="tag">+ Payed</span>
            <span className="tag">+ Internship</span>
          </div>
        </div>
        <span className="hired-count">4 / 11 Hired</span>
      </div>

      <div className="right-section">
        <button className="action-button" onClick={toggleMenu}>
          ▼ More actions
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            <div className="dropdown-item">Close offer</div>
            <div className="dropdown-item">View offer</div>
            <div className="dropdown-item">Reopen applications</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;


