import React from 'react';
import './ProfileHeader.css';

function ProfileHeader(props) {
    return (
    <div className="profile-header">
      <img src="Profileheader.svg" alt="cover" className="cover-image" />
      <div className="profile-content">
        <img src="user1.png" alt="profile" className="profile-picture" />
        <div className="info">
          <h2>{props.username}</h2>
          <p className="job">
            {props.jobTitle} at <a href={props.companyurl} target="_blank" rel="noreferrer">{props.companyname}</a>
          </p>
          <p className="location">
            <img src="Location.svg" alt="location" className="icnloc" />
            {props.location}
          </p>
          <button className="open-button">
            <img src="Open.svg" alt="open for opportunities" className="icon" />
            Open for opportunities
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;

