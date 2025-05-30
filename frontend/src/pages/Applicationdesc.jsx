import React from 'react'
import './Applicationdesc.css'
import Topemp from '../components/Topemp'
import Navemp from '../components/Navemp'
import ContinueButton1 from '../components/ContinueButton1'
import TopNav from '../components/TopNav'
import JobDetails from '../components/Jobdetails'
import Tabs from '../components/Tabs'

function Applicationdesc() {
  return (
 <div className='applicdescpage'>
        <div className='topemp2'>
        <Topemp
         offercolor="#0C4498"   
         appcolor="#000"  dashcolor="#000" 
        ></Topemp>
      </div>
      <div className="part2empl2">
      <div className='navempl2'>
        <Navemp name='Abir' ></Navemp>
      </div>
      <div className="addoff2">
        <ContinueButton1 className="btnadd2" text3=" + Add Offer" width="200px"  ></ContinueButton1>
      </div>
      <div className="jobemp2">
        <TopNav></TopNav>
      </div>
      
       <div className="aplicat2">
        <Tabs></Tabs>
      </div> 
      <div className="jobdet">
        <JobDetails></JobDetails>
      </div>
      </div>

    </div>
  )
}

export default Applicationdesc