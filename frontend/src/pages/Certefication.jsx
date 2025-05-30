import React  from 'react';
import Scan from '../components/Scan';
import UploadButton from '../components/UploadButton';
import ContinueButton1 from '../components/ContinueButton1';
import './Certefication.css'
import Bbutton2 from '../components/Bbutton2'
function Certefication() {
    return <>
   <div className='all'>
     <div className='imgClass'>
        <img alt='leftPhoto'src ='left(2).png' />
     </div>
      <div className='right'>
           <div className='form1'>
              <div className='tittxt'>
             <p className='title' >Verify Your Student Account</p>
             <p className='text'>Before you can apply for jobs, we need to verify your student status. Upload or scan your school card or your certificate for approval. This process may take a few hours to a few days</p>
             </div>
             <Scan text1 = "school card"></Scan>
             <div className='formtitle'> Or</div>
             <UploadButton text2=" Upload your Cv or Resume"></UploadButton>
           </div>
           <div className='btns12'>
              <ContinueButton1 text3 ="Submit" width = "390px"></ContinueButton1>
             <Bbutton2  text4 ="Skip for now" width="390px"></Bbutton2>
            </div>
       </div>
   </div>
   </>
}
export default Certefication