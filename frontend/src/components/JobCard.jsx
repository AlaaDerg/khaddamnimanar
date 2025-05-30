import React from 'react';
import './JobCard.css'
import StateButton from './StateButton';
import Bookmark from "../assets/Bookmark.png"
function JobCard({
    title = 'Job Title',
    name = 'Employer Name',
    JobDescription = 'looking for a job descreption .................  ............................................................  .....................................................',
    applicants = 0,
    time = '0',
  }) {
    return (
      <div className="card">
        <div className="card-header">
          <div className='logo'>fuse</div>
  
          <div className="job-info">
            <h3 className="job-title">{title}</h3>
            <p className="name">{name}</p>
          </div>
          <div className="match-container">
            <span className="match-text">70% Match</span>
            <div className="progress-circle"></div>
          </div>
        </div>
  
        <p className='Job-description'>{JobDescription}</p>
        <StateButton />
  
        <div className='applicantContainer'>
          <div className="applicants">
            <div className='applicants-count'>
              <p className="applicants-word">Applicants </p>
              <p className='Number'>{applicants}</p>
            </div>
            <p className="posted-time">posted {time} ago</p>
          </div>
          <div className="bookmark">
            <img src={Bookmark} alt="Bookmark" />
          </div>
        </div>
      </div>
    );
  }
// JobCard.defaultProps = {
// title :'IT Assistant',
// name : 'Assia Zeghmar',
// JobDescription : 'looking for a job' ,
// applicants : 0,
// time :'just now',
// };
export default JobCard ;