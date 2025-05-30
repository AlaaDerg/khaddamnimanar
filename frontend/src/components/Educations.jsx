import React from "react";
import "./Educations.css";


const Educations = () => {
  return (
    <div className="educations-container">
      <div className="educations-header">
        <h2>Educations</h2>
        <div className="header-icons">
          <img src="Buttonplus.svg" alt="Add" className="icon" />
          <img src="Buttonadd.svg" alt="Edit" className="icon" />
        </div>
      </div>

      <div className="education-entry">
        <div className="education-left">
          <img src="Estin.svg" alt="Estin Logo" className="estin-logo" />
          <div className="education-info">
            <h3>Estin</h3>
            <p className="degree">Postgraduate degree, computer science</p>
            <p className="years">2020 - 2025</p>
            <p className="description">
              As a Computer Science student, I specialize in developing innovative
              solutions by analyzing problems, researching efficient algorithms, and
              creating software that enhances user experiences and solves real-world
              challenges.
            </p>
          </div>
        </div> 
      </div> 
    </div>
  );
};

export default Educations;