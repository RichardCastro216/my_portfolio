import React from 'react';
import Navbar from '../navbar/Navbar';
import Heading1 from './Heading1';
import Menu from '../Menu/Menu';
import {headingTop} from '../../content';
import { Circle, VerticleArrow } from '../SVGS/Svg';

// import backgroundImage from "../../assets/images/background.png"

function Header(props) {
  return (
    <>
      <Menu />
      <header className="banner">
        {/* Navigation Bar */}
        <Navbar signOut = {props.signOut} />
      
        <div className="banner-heading">
          <h1 style={{fontSize:65,color:'white'}}>Richard Castro </h1>
          <h1 style={{fontSize:45,color:'white'}}>Senior UI/UX Designer</h1>
          <br></br>
          <br></br>
          <h1 style={{fontSize:35, width:800, textAlign:"center",color:'white'}}>Passionate about crafting intuitive, user-centered experiences. With 8+ years of expertise in wireframing, prototyping, and responsive design, I blend aesthetics with functionality to create seamless digital products. Let’s build something amazing!</h1>
        </div>
        {/* Scroll text and SVG line */}
        <div className="scroll">
          <p>Scroll</p>
          <VerticleArrow />
        </div>
        
      </header>
    </>
  )
}

export default Header