import React from "react";
import './Bbutton2.css'


function Bbutton2(props) {
  return (<>
  <button style={{ border:' #003b99 solid 2px;', width:props.width }} className="continue-btn2">

    {props.text4}
  </button>
  </>
   
  )
}

export default Bbutton2