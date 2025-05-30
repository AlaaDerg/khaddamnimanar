import React from 'react'
// import NavLinks from './NavLinks'
import UserSection from './UserSection'
import LogoSection from './LogoSection'
import './TopBar.css'

  
function TopBar(props) {
  return (
    <div>
          <div className="topbar">
            <div className='logo'>
              <LogoSection  />
            </div>
            <div className='links1'>
              <div className="nav-links1">
                <a href="#" style={{  color:props.color11 }}>Home</a>
                <a href="#"style={{  color:props.color21 }}>Find</a>
                <a href="#"style={{  color:props.color31 }} >Help Center</a>
              </div>
              {/* <NavLinks link1="Home" link2="Find" link3="Help center"  /> */}
            </div>
            <div className='user'>
            <UserSection 
               userName="Soltani Abir" 
              userImage="/user1.png" 
               notificationCount={1} 
            />
            </div>
          </div>
       
      
      </div>
  )
}

export default TopBar