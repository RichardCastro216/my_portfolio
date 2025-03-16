import React from 'react';
import { Flower } from '../SVGS/Svg';
import './Intro.css';

function Intro() {
  return (
    <section className="intro">
      <span className='firstFlower'><Flower /></span>
        <div className="intro-content">
          <p style={{fontSize:25}}>
          Designing seamless digital experiences that engage and inspire <br /> Blending aesthetics with functionality for impactful UX <br /> Creating intuitive, user-first designs that drive results <br /> Elevating digital experiences through thoughtful design <br /> Turning ideas into beautiful, user-friendly interfaces.
          </p>
        </div>
      <span><Flower /></span>
    </section>
  )
}

export default Intro