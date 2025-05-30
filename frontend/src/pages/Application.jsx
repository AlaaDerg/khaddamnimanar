import React, { useState } from 'react'
import './Application.css'
import Topemp from '../components/Topemp'
import Navemp from '../components/Navemp'
import ContinueButton1 from '../components/ContinueButton1'
import TopNav from '../components/TopNav'
import ApplicationsTable from '../components/ApplicationsTable'
import Applicationside from '../components/Applicationside'
import Tabs from '../components/Tabs'

function Application() {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showApplicationSide, setShowApplicationSide] = useState(false);

  const handleSeeApplication = (application) => {
    setSelectedApplication(application);
    setShowApplicationSide(true);
  };

  return (
    <>
    <div className='applicpage'>
        <div className='topemp'>
        <Topemp
         offercolor="#0C4498"   
         appcolor="#000"  dashcolor="#000" 
        ></Topemp>
      </div>
      <div className="part2empl">
      <div className='navempl'>
        <Navemp name='Abir' ></Navemp>
      </div>
      <div className="addoff">
        <ContinueButton1 className="btnadd" text3=" + Add Offer" width="200px"  ></ContinueButton1>
      </div>
      <div className="jobemp">
        <TopNav></TopNav>
      </div>
      <div className="aplicat">
        <Tabs></Tabs>
      </div> 
      <div className="tableoffer">
        <ApplicationsTable onSeeApplication={handleSeeApplication} />
      </div>
      {showApplicationSide && (
        <div className="application-side">
          <Applicationside 
            application={selectedApplication}
            onClose={() => setShowApplicationSide(false)}
          />
        </div>
      )}
      </div>
   </div>
    </>
  )
}

export default Application
