import React from 'react';
import './NavLinks.css';

function NavLinks(props) {
  return (
    <div className="nav-links">
      <a href="#" style={{  color:props.color1 }}>{props.link1}</a>
      <a href="#"style={{  color:props.color2 }}>{props.link2}</a>
      <a href="#"style={{  color:props.color3 }} >{props.link3}</a>
       
    </div>
  );
}

export default NavLinks;