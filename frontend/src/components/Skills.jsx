import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "Communication",
    "Analytics",
    "Facebook Ads",
    "Content Planning",
    "Community Manager",
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h3>Skills</h3>
        <div className="skills-icons">
          <img src="Buttonplus.svg" alt="Add" className="skills-icon" />
          <img src="Buttonadd.svg" alt="Edit" className="skills-icon" />
        </div>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;