import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <img src="Buttonadd.svg" alt="Edit Button" className="edit-button" />
      </div>
      <p>
        I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom.
        I’m passionate about designing digital products that have a positive impact on the world.
      </p>
      <p>
        For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research
        and product strategy for product agencies, big tech companies & start-ups.
      </p>
    </div>
  );
};

export default AboutMe;