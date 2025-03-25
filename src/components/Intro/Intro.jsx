import React from 'react';
import { Flower } from '../SVGS/Svg';
import './Intro.css';
import myavatar from '../../assets/images/myavatar.jpg'
function Intro() {
  return (
    <section className="intro">
        <img src={myavatar} style={{width:'200px',height:'200px',borderRadius:'50%',marginRight:'50px',border:'2px solid rgba(255,255,255,0.6)'}} />
        <div className="intro-content">
          <p style={{fontSize:25, color:'white'}}>
          Designing seamless digital experiences that engage and inspire <br /> Blending aesthetics with functionality for impactful UX <br /> Creating intuitive, user-first designs that drive results <br /> Elevating digital experiences through thoughtful design <br /> Turning ideas into beautiful, user-friendly interfaces.
          </p>
        </div>
    </section>
  )
}

export default Intro