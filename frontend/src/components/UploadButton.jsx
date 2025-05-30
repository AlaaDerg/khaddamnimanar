import './UploadButton.css';
//import { FiUpload } from 'react-icons/fi';

function UploadButton(props){
   
return  <>
 <div className='UploadButtonContainer'>
   <input 
    className="UploadButton"
    type="file"
    placeholder="Upload graduation certificate"
   />
   <img src='Icon1.png' className='upload-icon'/>
   <span>{props.text2} </span>
 </div>
  </> 
}
export default UploadButton;