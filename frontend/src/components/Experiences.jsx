import React from "react";
import "./Experiences.css";


const Experiences = () => {
  return (
    <div className="experiences-container">
      <div className="experiences-header">
        <h2>Experiences</h2>
        <img src="Buttonplus.svg" alt="Add" className="plus-icon" />
      </div>

      <div className="experience-entry">
        <div className="experience-left">
          <img src="Twiter.svg" alt="Company Logo" className="company-logo" />
          <div className="experience-info">
            <h3>Product Designer</h3>
            <p className="company">
              Twitter • Full-Time • Jun 2019 – Present (1y 1m)
            </p>
            <p className="location">Manchester, UK</p>
            <p className="description">
              Created and executed social media plan for 10 brands utilizing multiple
              features and content types to increase brand outreach, engagement,
              and leads.
            </p>
          </div>
        </div>
        <img src="Buttonadd.svg" alt="Edit" className="editt-icon" />
      </div>

      <div className="divider" />

      <div className="experience-entry">
        <div className="experience-left">
          <img src="Company.svg" alt="Company Logo" className="company-logo" />
          <div className="experience-info">
            <h3>Growth Marketing Designer</h3>
            <p className="company">
              GoDaddy • Full-Time • Jun 2011 – May 2019 (8y)
            </p>
            <p className="location">Manchester, UK</p>
            <p className="description">
              Developed digital marketing strategies, activation plans, proposals,
              contests and promotions for client initiatives.
            </p>
          </div>
        </div>
        <img src="Buttonadd.svg" alt="Edit" className="editt-icon" />
      </div>

      <p className="show-more">Show 3 more experiences</p>
    </div>
  );
};

export default Experiences;