import React from "react";
import "./CV.css";
import UploadButton from "./UploadButton";

const CV = () => {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <h3>CV</h3>
        <img src="Buttonplus.svg" alt="Add" className="plus-icon" />
      </div>
      <div className="cv-box">
       <UploadButton text2 = "Open CV"></UploadButton>
      </div>
    </div>
  );
};

export default CV;

