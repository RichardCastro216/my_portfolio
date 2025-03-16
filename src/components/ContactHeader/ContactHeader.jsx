import React from 'react';
import Navbar from '../navbar/Navbar';
import './ContactHeader.css';



function ContactHeader() {
  return (
    <>
        <section className="contactHead">
            <div className="contactNavbar">
                <Navbar />
            </div>
            <div className="contactHeadContent">
                <p>HAVE A PROJECT THAT YOU NEED HELP WITH?</p>
                <h2>Let's make <br /> something great <br /> together</h2>
            </div>
        </section>
    </>
  )
}

export default ContactHeader