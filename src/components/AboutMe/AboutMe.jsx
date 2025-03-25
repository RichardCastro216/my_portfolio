import React from 'react';
import { aboutMe } from '../../content';
import './AboutMe.css';
import flowerLeft from '../../assets/images/about-flower.avif';
import flowerRight from '../../assets/images/about-flower-1.avif';
import avatar from '../../assets/images/my_image.jpg';
import sea from '../../assets/images/about-sea.avif';


function AboutMe() {
  return (
    <>
      <section className="aboutMe">
        <div className="aboutMain">
          <div className="aboutText">
            <div className="aboutContent">
              <h3 style={{color:'white'}}>{aboutMe[0].subTitle}</h3>
              <h2 style={{color:'white'}}>{aboutMe[0].title1}</h2>
              <h2 style={{color:'white'}}>{aboutMe[0].title2}</h2>
              <p style={{color:'white'}}>{aboutMe[0].content1}</p>
              <p style={{color:'white'}}>{aboutMe[0].content2}</p>
            </div>
          </div>
          <div className="aboutMedia">
            <img className="avatar" src={avatar} alt="Designer Nick Martinez" />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe;