import React from 'react'
import './Landing.css'
import ContinueButton1 from '../components/ContinueButton1'
import Bbutton2 from '../components/Bbutton2'
import JobCard from '../components/JobCard'
import TopBar2 from '../components/TopBar2'
function Landing() {
  return (<>
   
   <TopBar2 color12 = "#003b99" color22="black" color32="black"></TopBar2>
   <div className='part1'>
       <div className='tt'>
          <p className='title1'>Connecting Students with the Best Job & Internship Opportunities .</p>
          <p className='texte1'>Students: No scams, just real work. Employers: Connect with serious candidates. Your career journey starts here.</p>
        </div>
        <div className='btns1'>
          <ContinueButton1 text3="I'am a student-Find a job" width ="390px"></ContinueButton1>
          <Bbutton2 text4 ="I'am an employer-Post a job " width="390px"></Bbutton2>
       </div>
    </div>
    <div className='part2'>
        <div className='prt21'>
          <p className='tprt21'>Explore top jobs and internships</p>
         <div className='crds scroll scrollbar-hide'>
            <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
            <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
            <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
            <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
           <JobCard></JobCard>
           <JobCard></JobCard>
        </div>
        </div>
        <div className=' prt22'>
          <p className='tprt22'>How It Works?</p>
         <div className='crds222'>
           <div className='LandingCardsContainer1'>
             <p className='CardTitle'>for students</p>
             <p><span className='boldText'>Sign Up & Verify </span><span className='lightText'>– Scan your school ID for approval.</span></p>
             <p><span className='boldText'>Complete Your Profile</span><span className='lightText'> – Add your CV, skills, and interests.</span></p>
             <p><span className='boldText'>Find & Apply for Jobs </span><span className='lightText'>– Get matched with opportunities and apply.</span></p>
             <p><span className='boldText'>Interview & Get Hired </span><span className='lightText'>– Track your applications and receive updates.</span></p>
           </div>
  
            <div className='LandingCardsContainer2'>
              <p className='CardTitle'>for employers</p>
              <p><span className='boldText'>Sign Up & Verify </span><span className='lightText'>– Scan your ID for approval.</span></p>
              <p><span className='boldText'>Post a Job </span><span className='lightText'> – List your job openings.</span></p>
              <p><span className='boldText'>Review Applications </span><span className='lightText'>– Get applications from verified students.</span></p>
              <p><span className='boldText'>Hire Securely </span><span className='lightText'>– Approve students after interviews.</span></p>
            </div>
          </div>
        </div>
        <div className='prt23'>
         <p className='tprt23'>Why Use Our Platform?</p>
         <div className='crds223'>
         <div className='LandingCardsContainer3'>
            <p className='CardTitle'>for students</p>
            <p><span className='blueStar'>*</span><span className='boldText'>Verified Jobs Only</span></p>
            <p><span className='blueStar'>*</span><span className='boldText'>Smart Matching </span></p>
            <p><span className='blueStar'>*</span><span className='boldText'>Quick Apply </span></p>
            <p><span className='blueStar'>*</span><span className='boldText'>Interview Updates </span></p>
          </div>

         <div className='LandingCardsContainer4'>
            <p className='CardTitle'>for employers</p>
            <p><span className='blueStar'>*</span><span className='boldText'> Find the Best Talent</span></p>
           <p><span className='blueStar'>*</span><span className='boldText'>Post Jobs in Minutes</span></p>
           <p><span className='blueStar'>*</span><span className='boldText'>Manage Applications Easily</span></p>
           <p><span className='blueStar'>*</span><span className='boldText'>Track Approved Hires </span></p>
          </div>
          </div>
        </div>
      </div>
      <div className='part3'>
        {/* <Footer></Footer> */}
      </div>

    </>
  )
}

export default Landing