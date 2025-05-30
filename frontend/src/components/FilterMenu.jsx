import React, { useState } from "react";
import "./FilterMenu.css";

const FilterMenu = () => {
  const [typeOpen, setTypeOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Registrants");
  const [selectedStatus, setSelectedStatus] = useState("All status");

  const handleTypeClick = () => {
    setTypeOpen(!typeOpen);
    setStatusOpen(false);
  };

  const handleStatusClick = () => {
    setStatusOpen(!statusOpen);
    setTypeOpen(false);
  };

  const handleTypeSelect = (value) => {
    setSelectedType(value);
    setTypeOpen(false);
  };

  const handleStatusSelect = (value) => {
    setSelectedStatus(value);
    setStatusOpen(false);
  };

  return (
    <div className="filter-menu">
      <div className="filter-item" onClick={handleTypeClick}>
        <span className="filter-label">{selectedType}</span>
        <span className="arrow">v</span>
        {typeOpen && (
          <div className="dropdown">
            <div onClick={() => handleTypeSelect("Students")}>Students</div>
            <div onClick={() => handleTypeSelect("Employers")}>Employers</div>
            <div onClick={() => handleTypeSelect("All")}>All</div>
          </div>
        )}
      </div>

      <div className="filter-item" onClick={handleStatusClick}>
        <span className="filter-label">{selectedStatus}</span>
        <span className="arrow">v</span>
        {statusOpen && (
          <div className="dropdown">
            <div onClick={() => handleStatusSelect("Verified")}>Verified</div>
            <div onClick={() => handleStatusSelect("Pending")}>Pending</div>
            <div onClick={() => handleStatusSelect("Declined")}>Declined</div>
            <div onClick={() => handleStatusSelect("All")}>All</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterMenu;