import './Scan.css';
import React from 'react'
 
 function Scan(props) {
   return <>
    <div className='Scan' >
        <input className='Scancard' type="file" placeholder='scan school card' />
         <img src= '/Iconscan.png' className='scanicn' alt="[]" />
         <span> Scan {props.text1} </span>
         
    </div>
   </>
 }
 
 export default Scan