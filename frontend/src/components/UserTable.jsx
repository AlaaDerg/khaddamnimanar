import React, { useState } from "react";
import "./UserTable.css";
import ContinueButton1 from "./ContinueButton1";
import Bbutton2 from "./Bbutton2";

const users = [
    {
    name: "user name",
    email: "name@gmail.com",
    type: "Employer",
    status: "Pending",
    date: "00/00/0000",
  },
  {
    name: "user name",
    email: "name@gmail.com",
    type: "Employer",
    status: "Verified",
    date: "00/00/0000",
  },
  {
    name: "user name",
    email: "name@gmail.com",
    type: "student",
    status: "Rejected",
    date: "00/00/0000",
  },
  {
    name: "user name",
    email: "name@gmail.com",
    type: "Employer",
    status: "Pending",
    date: "00/00/0000",
  },
  {
    name: "user name",
    email: "name@gmail.com",
    type: "Employer",
    status: "Verified",
    date: "00/00/0000",
  },
  {
    name: "user name",
    email: "name@gmail.com",
    type: "Employer",
    status: "Rejected",
    date: "00/00/0000",
  },
  {
    name: "user name",
    email: "name@gmail.com",
    type: "Employer",
    status: "Pending",
    date: "00/00/0000",
  },
  {
    name: "user name",
    email: "name@gmail.com",
    type: "Employer",
    status: "Verified",
    date: "00/00/0000",
  },
 
];

const UserTable = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const getStatusClass = (status) => {
    switch (status) {
      case "Verified":
        return "status verified";
      case "Rejected":
        return "status rejected";
      case "Pending":
        return "status pending";
      default:
        return "status";
    }
  };
  
  return (
    <div className="user-table">
      <div className="table-header">
        <span>User</span>
        <span>Email</span>
        <span>Type</span>
        <span>Status</span>
        <span>Date</span>
        <span>Card/cv</span>
        <span></span>
      </div>

      {users.map((user, index) => (
        <div className="table-row" key={index}>
          <div className="user-cell">
            <img src="user1.png" alt="avatar" className="avatar" />
            <span>{user.name}</span>
          </div>
          <span>{user.email}</span>
          <span>{user.type}</span>
          <span className={getStatusClass(user.status)}>{user.status}</span>
          <span>{user.date}</span>


          <div className="card-cell">
            <button onClick={() => setSelectedCardIndex(index)}>
              <img src="Iconscan1.svg" alt="card" />
            </button>
          
            {selectedCardIndex === index && (
  <div className="overlay" onClick={() => setSelectedCardIndex(null)}>
    <div className="card-large" onClick={(e) => e.stopPropagation()}>
      <img src="card.svg" alt="Carte" />
      <button className="close" onClick={() => setSelectedCardIndex(null)}>
        ×
      </button>
      <div className="crdbtns">
      <Bbutton2 text4 ="Rejected" width ="200px"></Bbutton2>
      <ContinueButton1 text3 ="Accepted" width ="200px"></ContinueButton1>
      </div>
    </div>
  </div>
)}

          </div>

<div className="action-cell">
            <button 
              className="dropdown-toggle"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownIndex(dropdownIndex === index ? null : index);
              }}
            >
              <img src="points.svg" alt="more" className="more-icon" />
            </button>
            
            {dropdownIndex === index && (
              <div className="dropdown-menu">
                <button 
                  className="dropdown-item" 
                  onClick={() => alert("Approved")}
                >
                  Accepted
                </button>
                <button 
                  className="dropdown-item"
                  onClick={() => alert("Rejected")}
                >
                  Reject
                </button>
              </div>
        
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserTable;
