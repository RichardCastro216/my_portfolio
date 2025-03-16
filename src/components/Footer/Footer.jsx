import React from 'react';
import { FooterSVG } from '../SVGS/Svg';
import { links } from '../../content';
import FooterLinks from './FooterLinks';
import './Footer.css';

function Footer() {

    const currentYear = new Date().getFullYear();
    function year() {
        return currentYear;
    }

  return (
    <>
        <footer className='footer'>
            <div className="footerContainer">
                <div className="rows links">
                
                    <div className="footerLinks">
                        <h2>Connect</h2>
                        <h2>with Me</h2>
                        <a href="https://www.linkedin.com/in/richard-castro-3826ab343/" target="blank">Linkedin</a>
                    </div>
                </div>
                <div>
                    <h1 style={{color:'white'}}>Richard Castro</h1>
                    <h2 style={{color:'white'}}>Senior UI/UX Designer</h2>
                </div>
                <div className="rows links">
                    <FooterLinks 
                        title={links[1].title} 
                        link1={links[1].Link1} linkPath1="/"
                        link2={links[1].Link2} linkPath2="/graphic"
                        link3={links[1].Link3} linkPath3="/Contact"
                        link4={links[1].Link4} linkPath4="/About"
                    />
                </div>
            </div>
            <div className="copyRight">
                <p>Copy Right &copy; {currentYear} | by Richard Castro</p>
            </div>
        </footer>  
    </>
  )
}



export default Footer;