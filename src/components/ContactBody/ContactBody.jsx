import React from 'react';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import './ContactBody.css';




function ContactBody() {

    const [borColor, setBorColor] = useState('');
    // change border color of input fields for name
    function borderChange() {
        return setBorColor('2px solid #d4a665');
    }

    const [borColor2, setBorColor2] = useState('');
    // change border color of input fields for email
    function borderChange2() {
        return setBorColor2('2px solid #d4a665');
    }


    // BG color would be change when click in textarea, when click outside it will reset
    const [bgColor, setbgColor] = useState(false);
    const textAreaRef = useRef(null);



    function changeBGColor() {
        return setbgColor(true)

    }

    useEffect(() => {
        // This function will check if the click is outside the textarea
        function handleClickOutside(event) {
            if (textAreaRef.current && !textAreaRef.current.contains(event.target)) {
                setbgColor(false);  // Reset background color to default (white)
            }
        }

        // Add event listener to the window
        window.addEventListener('click', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []); 


    const [bgColorSelect, setbgColorselect] = useState(false);

    function changeBGColorSelect() {
        return setbgColorselect(true) 
    }

    const selectArea = useRef(null)
    useEffect(() => {
        // This function will check if the click is outside the textarea
        function handleClickOutside(event) {
            if (selectArea.current && !selectArea.current.contains(event.target)) {
                setbgColorselect(false);  // Reset background color to default (white)
            }
        }

        // Add event listener to the window
        window.addEventListener('click', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []); 



  return (
    <>
        <section className="contactBody">
            <div className="contactBodyMain">
                <div className="contactBodyContent">
                    <h5 style={{color:'white'}}>CONTACT ME</h5>
                    <h2 style={{color:'white'}}>Let's talk about <br /> your dream <br /> project</h2>
                    </div>
                <div className="contactForm">
                    <form className='submitForm' action="">
                        <div className="fields">
                            <input type="text" onClick={borderChange} placeholder='Name' style={{border: borColor}}/>
                        </div>
                        <div className="fields">
                            <input type="email" onClick={borderChange2} placeholder='Email' style={{border: borColor2}}/>
                        </div>
                        <div className="fields">
                            <textarea ref={textAreaRef} name="" id="" placeholder="Type your message here ..." rows="4" onClick={changeBGColor} style={{backgroundColor: bgColor ? '#d4a665' : 'white' }}></textarea>
                        </div>
                        <div className="contactBtn">
                            <button type='submit' style={{border:'2px solid rgba(255,255,255,0.6)'}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactBody;