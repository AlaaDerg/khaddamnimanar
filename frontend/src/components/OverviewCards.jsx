import React from 'react';
import './OverviewCards.css';

// Import des images depuis src/assets
// import photo1 from '../assets/photo1.png';
// import photo2 from '../assets/photo2.png';
// import photo3 from '../assets/photo3.png';
// import photo4 from '../assets/photo4.png';

// Données des cartes
const data = [
  { label: 'Verified users', value: 22, change: '6.4%', positive: true, img:  "photodash1.svg" },
  { label: 'Rejected users', value: 236, change: '20%', positive: false, img:  "photodash2.svg"  },
  { label: 'Pending users', value: 70, change: '15%', positive: true, img: "photodash3.svg"  },
  { label: 'Total users', value: 26, change: '4%', positive: true, img: "photodash4.svg" },
];

const OverviewCards = () => {
  return (
    <div className="overview-container">
      {data.map((item, index) => (
        <div className="cardad" key={index}>
          <div className="card-headerad">
            <span>{item.label}</span>
            <img src={item.img} alt={item.label} className="icon" />
          </div>
          <div className="card-bodyad">
            <strong>{item.value}</strong>
            <span className={item.positive ? 'positive' : 'negative'}>
              {item.change}
            </span>
          </div>
          <p>vs last month</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;