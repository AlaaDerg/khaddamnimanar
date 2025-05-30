import React from "react";
import './ContinueButton1.css'


function ContinueButton1(props) {
  return (<>
  <button className="continue-btn" style={{width: props.width }}>
    {props.text3}
  </button>
  </>
   
  )
}

export default ContinueButton1