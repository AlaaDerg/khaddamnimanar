import React from 'react';
import './SocialLinks.css';

function SocialLinks(props) {
  return (
    <div className="social-links-card">
      <div className="card-header">
        <h3>Social Links</h3>
        <img src="Buttonadd.svg" alt="Edit" className="edit-icon" />
      </div>

      <div className="social-row">
        <img src="Instgram.svg" alt="instagram" className="social-icon" />
        <div>
          <div className="label">Instagram</div>
          <a href={`https://${props.instegram}`} target="_blank" rel="noopener noreferrer">
            {props.instegram}
          </a>
        </div>
          </div>

      <div className="social-row">
        <img src="Twitercompte.svg" alt="twitter" className="social-icon" />
        <div>
          <div className="label">Twitter</div>
          <a href={`https://${props.twitter}`} target="_blank" rel="noopener noreferrer">
            {props.twitter}
          </a>
        </div>
      </div>

      <div className="social-row">
        <img src="Website.svg" alt="website" className="social-icon" />
        <div>
          <div className="label">Website</div>
          <a href={`https://${props.website}`} target="_blank" rel="noopener noreferrer">
            {props.website}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;