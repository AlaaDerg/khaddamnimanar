import React from "react";
import "./ApplicationsTable.css";


const applications = [
  { name: "soltani abir", offer: "UI/UX designer", status: "Pending", match: 100 },
  { name: "soltani abir", offer: "UI/UX designer", status: "Approved", match: 30 },
  { name: "soltani abir", offer: "UI/UX designer", status: "Hired", match: 50 },
  { name: "soltani abir", offer: "UI/UX designer", status: "Rejected", match: 100 },
  { name: "soltani abir", offer: "UI/UX designer", status: "Approved", match: 100 },
  { name: "soltani abir", offer: "UI/UX designer", status: "Rejected", match: 50 },
  { name: "soltani abir", offer: "UI/UX designer", status: "Pending", match: 100 },
  { name: "soltani abir", offer: "UI/UX designer", status: "Pending", match: 70 },
];

const ApplicationsTable = ({ onSeeApplication }) => {
  const getStatusClass = (status) => {
    return `status ${status.toLowerCase()}`;
  };

  return (
    <div className="table-container">
      <table className="applications-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Offer</th>
            <th>Status</th>
            <th>Matching Level</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td className="student-cell">
                <img src="user1.png" alt="User" className="user-photo" />
                <span className="student-name">{app.name}</span>
              </td>
              <td>{app.offer}</td>
              <td>
                <span className={getStatusClass(app.status)}>{app.status}</span>
              </td>
              <td className="match-cell">
                <span className="match-text">{app.match}% Match</span>
                <div className="circle">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle-progress"
                      strokeDasharray={`${(app.match * 100) / 100}, 100`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <button className="see-btn" onClick={() => onSeeApplication(app)}>
                  See application
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable