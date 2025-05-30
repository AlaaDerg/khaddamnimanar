import React from 'react'
// import NavLinks from './NavLinks'
import UserSection from './UserSection'
import LogoSection from './LogoSection'
import Bbutton2 from './Bbutton2'
import './TopBar2.css'
import ContinueButton1 from './ContinueButton1'

  
function TopBar2(props) {
  return (
    <div>
          <div className="topbar2">
            <div className='logo2'>
              <LogoSection  />
            </div>
            <div className='links2'>
             <div className="nav-links2">
                <a href="#" style={{  color:props.color12 }}>Home</a>
                <a href="#"style={{  color:props.color22 }}>About us</a>
                <a href="#"style={{  color:props.color32 }} >Contact us</a>
       
               </div>
            </div>
            <div className='btns'>
              <Bbutton2 text4="Log in" width ="120px" className ="btn1"></Bbutton2>
              <ContinueButton1 text3="Sign up" width ="120px" className="btn2"></ContinueButton1>
            </div>
          </div>
       
      
      </div>
  )
}

export default TopBar2