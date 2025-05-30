
import React from 'react';
import './Admindash.css';
import Topemp from "../components/Topemp";
import Navemp from '../components/Navemp';
import OverviewCards from '../components/OverviewCards';



function Admindash () {
  return (
    <>
    <div className='adminpage2'>
        <div className='topadmin2'>
        <Topemp
         offercolor="#fff"   
         appcolor="#000"  dashcolor="#0C4498" 
        ></Topemp>
      </div>
      <div className="part2admin2">
        <div className="adminnav2">
          <Navemp name='Abir'></Navemp>
        </div>
        <div className="titledash1">
          <h1>Overview</h1>
        </div>
        <div className="cardsdash1">
           <OverviewCards></OverviewCards>
         </div>
        <div className="dashimg1">
          <img src="dash.svg" alt="dashboard" />
        </div>
    
      </div>
   
   </div>
    
    </>
  )
}

export default Admindash ;
