import React from 'react';
import './AboutHeader.css';
import Navbar from '../navbar/Navbar';
import { AboutFlower } from '../SVGS/Svg';
import { Flower, AboutLeft, AboutRight, AboutSVG } from '../SVGS/Svg';


function AboutHeader() {
  return (
    <>
        <header className='aboutHeader'>
            <div className="aboutNavbar">
                <Navbar />
            </div>
            <div className="aboutHeadText">
                <span className='aboutLeftText'><AboutLeft /></span>
                <span className='aboutRightText'><AboutRight /></span>
            </div>
            <div className="aboutHeadSVGs">
                <span className='leftFlower'><AboutFlower /></span>
                
                <div>
                    <h1 style={{color:'white'}}>Richard Castro</h1>
                    <h2 style={{color:'white'}}>Senior UI/UX Designer</h2>
                </div>
                
                <span className='rightFlower'><AboutFlower /></span>
            </div>
        </header>
    </>
  )
}

export default AboutHeader