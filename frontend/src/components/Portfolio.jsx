 
import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h3>Portfolios</h3>
        <img src="Buttonplus.svg" alt="Add" className="plus-icon" />
      </div>
      <input
        type="text"
        className="portfolio-input"
        placeholder="e.g. https://myportfolio.com"
      />
    </div>
  );
};

export default Portfolio;