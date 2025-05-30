import React from 'react';
import './AditionalDetails.css';

function AdditionalDetails(props ) {
  return (
    <div className="additional-details-card">
      <div className="card-header">
        <h3>Additional Details</h3>
        <img src="Buttonadd.svg" alt="Edit" className="edit-icon" />
      </div>

      <div className="detail-row">
        <img src="Iconemail.svg" alt="email" className="detail-icon" />
        <div>
          <div className="label">Email</div>
          <div>{props.email}</div>
        </div>
      </div>

      <div className="detail-row">
        <img src="Iconphone.svg" alt="phone" className="detail-icon" />
        <div>
          <div className="label">Phone</div>
          <div>{props.phone}</div>
        </div>
      </div>

      <div className="detail-row">
        <img src="Iconlang.svg" alt="languages" className="detail-icon" />
        <div>
          <div className="label">Languages</div>
          <div>{props.languages}</div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalDetails;