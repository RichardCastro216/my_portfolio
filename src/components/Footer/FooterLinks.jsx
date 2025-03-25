import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';



function FooterLinks(props) {
  return (
    <div className="footerLinks">
        <h2 style={{color:'white'}}>{props.title}</h2>
        <NavLink to={props.linkPath1}>
            {props.link1}
        </NavLink>
        <NavLink to={props.linkPath2}>
            {props.link2}
        </NavLink>
        <NavLink to={props.linkPath3}>
            {props.link3}
        </NavLink>
        <NavLink to={props.linkPath4}> 
            {props.link4}
        </NavLink>
    </div>
  )
}

export default FooterLinks;