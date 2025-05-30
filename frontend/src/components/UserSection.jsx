import React from 'react';
import './UserSection.css';




function UserSection( props) {

  return (
    <div className="user-section">
      <div className="notification">
        <i className="fa fa-bell"></i>
        <img className='iconnot' src="Iconnot.png" alt="" />
        {props.notificationCount > 0 && <span className="badge">{props.notificationCount}</span>}
      </div>
      <p>{props.userName}</p>
      <img 
        src={props.userImage} 
        alt="profile" 
        className="user-image"
      />    </div>
  );
}

export default UserSection;