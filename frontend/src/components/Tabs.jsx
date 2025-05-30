import React, { useState } from 'react';
import "./Tabs.css"; 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('applicants');

  return (
    <div className="tabs-container">
      <div
        className={`tab ${activeTab === 'applicants' ? 'active' : ''}`}
        onClick={() => setActiveTab('applicants')}
      >
        Applicants
      </div>
      <div
        className={`tab ${activeTab === 'details' ? 'active' : ''}`}
        onClick={() => setActiveTab('details')}
      >
        Job Details
      </div>
    </div>
  );
};

export default Tabs;