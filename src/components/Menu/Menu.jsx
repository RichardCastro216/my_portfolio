import React from 'react';
import { NavLink } from 'react-router-dom';
import { AboutFlower } from '../SVGS/Svg';
import { RxCross2 } from "react-icons/rx";
import './Menu.css';



function Menu() {
  return (
    <>
        <div className="menu">
            <div className="menuOverlay"></div>
            <div className="menuDetails">
                <button className="crossMenu">
                    <RxCross2 />
                </button>
                <div className="navLinks">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/About" >ABOUT</NavLink>
                    <NavLink to="/Portfolio" >PORTFOLIO</NavLink>
                    <NavLink to="/Contact" >CONTACT</NavLink>
                </div>
                <div className="flowerMenu">
                    <AboutFlower />
                </div>
            </div>
        </div>
    </>
  )
}


export default Menu;