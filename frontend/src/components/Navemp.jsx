import React from 'react'
import './Navemp.css'
import UserSection from './UserSection'

function Navemp(props) {
  return (
<>
<div className='navem'>
    <div className='welcome' > 
        <p>hello {props.name} , welcome back!!</p>

    </div>
    <div className='useemp'> 
        <UserSection  userName="Soltani Abir" 
              userImage="user1.png" 
               notificationCount={1} >

               </UserSection>
    </div>
    </div>

</>  )
}

export default Navemp