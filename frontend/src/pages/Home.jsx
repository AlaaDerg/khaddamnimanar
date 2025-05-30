import React from 'react'
import './Home.css'
import SearchBar from '../components/Searchbar';
import JobCard from '../components/JobCard';
import TopBar from '../components/TopBar';



function Home() {
 
  return (
  <>
 
 <TopBar color11 = "#003b99" color21="black" color31="black"></TopBar>
     <div className='parts21'>
        <div className='tt'>
           <p className='title2'>
              
              <span className="bold">Kickstart Your Career -</span>  Find
              </p>
              <p className='title3'>
              <span className='bold' >the Right  </span>
              <span className="offers"> Offer </span>
              <span className="bold"> , Faster!</span>
            </p>

        </div>
        <SearchBar 
              placeholder="Search for any product"
            //   iconSrc="{./searchIcon.png}"
            />
     </div>
     <div className='parts22'>
        <div className='prts221'>
          <p className='tiprt22'>Jobs</p>
          <div className="scroll-container scroll scrollbar-hide" id="myScrollContainer">
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
         <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>


           </div>
          </div>
    
        <div className='prts222'>
          <p className='tiprt22'>Internships</p>
          <div className="scroll-container  scroll scrollbar-hide" id="myScrollContainer">
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Alaa Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          
          </div>
        </div>
        <div className='prts222'>
          <p className='tiprt22'>Best match</p>
          <div className="scroll-container  scroll scrollbar-hide" id="myScrollContainer">
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Alaa Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          <JobCard title = 'IT Assistant' name ='Assia Zeghmar' JobDescription='We are looking for figma designers who can help desiging the entire mobile application ...'  applicants ='10'time ='10'></JobCard>
          
           </div>
          </div>
        </div>
 </>
  )
}

export default Home