import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ 
  sortOptions,
  salaryOptions,
  jobTypeOptions,
  categoryOptions,
  onChange,
  onReset 
}) => {
  const [showCategory, setShowCategory] = useState(false);

  const handleChange = (section, index, checked) => {
    const currentOptions = {
      sort: sortOptions,
      salary: salaryOptions,
      jobType: jobTypeOptions,
      category: categoryOptions
    }[section];

    const newOptions = currentOptions.map((opt, i) => 
      i === index ? { ...opt, checked } : opt
    );

    onChange(section, newOptions);
  };

  return (
    <div className="filter-container">
      {/* Header */}
      <div className="filter-header">
        <h2 className="filter-title">Offers filter</h2>
        <button className="reset-button" onClick={onReset}>Reset</button>
      </div>

      {/* Sort by Section */}
      <div className="section-group">
        <div className="section-title">Sort by</div>
        {sortOptions.map((option, index) => (
          <label key={option.label} className="filter-option">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={(e) => handleChange('sort', index, e.target.checked)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {/* Salary Section */}
      <div className="section-group">
        <div className="section-title">Salary</div>
        {salaryOptions.map((option, index) => (
          <label key={option.label} className="filter-option">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={(e) => handleChange('salary', index, e.target.checked)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {/* Spacer */}
      <div className="section-spacer" />

      {/* Job Type Section */}
      <div className="section-group">
        <div className="section-title">Job type</div>
        {jobTypeOptions.map((option, index) => (
          <label key={option.label} className="filter-option">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={(e) => handleChange('jobType', index, e.target.checked)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {/* Job Category Dropdown */}
      <div className="section-group">
        <div className="section-title">Job category</div>
        <div className="category-wrapper">
          <div 
            className="category-placeholder"
            onClick={() => setShowCategory(!showCategory)}
          >
            <span>Categories</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          {showCategory && (
            <div className="category-options">
              {categoryOptions.map((option, index) => (
                <label key={option.label} className="filter-option">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={(e) => handleChange('category', index, e.target.checked)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;