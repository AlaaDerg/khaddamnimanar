import React from 'react';
import './Admincards.css';
import UserTable from '../components/Usertable';
import Topemp from "../components/Topemp";
import FilterMenu from '../components/FilterMenu';
import Navemp from '../components/Navemp';



function Admincards () {
  return (
    <>
    <div className='adminpage1'>
        <div className='topadmin'>
        <Topemp
         offercolor="#fff"   
         appcolor="#0C4498"  dashcolor="#000" 
        ></Topemp>
      </div>
      <div className="part2admin">
        <div className="adminnav">
          <Navemp name='Abir'></Navemp>
        </div>
        <div className="filters">
        <FilterMenu></FilterMenu>
        </div>
        <div className="tableuser">
        <UserTable></UserTable>
        </div>
      </div>
   
   </div>
    
    </>
  )
}

export default Admincards ;