import React from 'react';
import "./ProfileStudent.css"
import AdditionalDetails from '../components/AditionalDetails';
import CV from '../components/Cv';
import Experiences from '../components/Experiences';
import Educations from '../components/Educations';
import Skills from '../components/Skills';
import AboutMe from '../components/Aboutme';
import ProfileTitle from '../components/Profiletitle';
import Portfolio from '../components/Portfolio';
import SocialLinks from '../components/SocialLinks';
import ProfileHeader from '../components/ProfileHeader';
import TopBar from '../components/TopBar';


function ProfileStudent() {
  return (
    <div className='profilepage'>
        <div className="topbarstud">
            <TopBar color11 = "#000" color21="black" color31="black"></TopBar>
        </div>
        <div className="mypro">
           <ProfileTitle ></ProfileTitle>
        </div>
        <div className="partstud2">
            <div className="infostud">
              <ProfileHeader username= "Soltani ABIR" 
              jobTitle="Designer" companyname="Twiter"  location="AMIZOUR - BEJAIA"
              ></ProfileHeader>
              <AboutMe></AboutMe>
              <Experiences></Experiences>      
              <Educations></Educations>
              <Skills></Skills>
              <Portfolio></Portfolio>
              <CV></CV>
           </div>
           <div className="studcomptes">
             <div className="addinfo">
                 <AdditionalDetails email="aaaa" phone="012345" languages="english"></AdditionalDetails>
             </div>
             <div className="infosocial">
                 <SocialLinks></SocialLinks>
             </div>
           </div>
          </div>
    
    </div>
  )
}

export default ProfileStudent
