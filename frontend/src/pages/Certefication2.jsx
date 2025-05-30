import React from 'react';
import './Certefication2.css'
import Scan from '../components/Scan';
import ContinueButton1 from '../components/ContinueButton1'
import Bbutton2 from '../components/Bbutton2'
function Certefication2() {
    return <>
   <div className='all'>
    <div className='imgclass'>
        <img alt='leftPhoto'src ='left(2).png' />
   </div>
   <div className='right'>
    <div className='form2'>
        <p className='title' >Verify Your Employer Account</p>
        <p className='text'>Before you can post jobs, we need to verify your  status. Upload or scan your card  for approval. This process may take a few hours to a few days</p>
        <Scan text1 = "card" />
      </div>
      <div className='btns22'>
      <ContinueButton1 text3 ="Submit" width ="390px"></ContinueButton1>

      <Bbutton2 text4="Skip for now" width="390px"></Bbutton2>
        </div>
    </div>
   </div>
   
   </>
}
export default Certefication2