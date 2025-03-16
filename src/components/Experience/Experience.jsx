import React from 'react';
import './Experience.css';
import { experienceContent } from '../../content';
import { LYFT, BetterBuzz, JustLive, Harcourts, Celcius, Myth } from '../SVGS/Svg';
import { NavLink } from 'react-router-dom';

function Experience() {
  return (
    <>
        <section className="experienceMain">
        <div className="experience">
            <div className="experienceLeft">
                <div className="experienceContent">
                    <h5>{experienceContent[0].subTitle}</h5>
                    <h2>{experienceContent[0].title}</h2>
                    <p>{experienceContent[0].content}</p>                
                    <div className="experienceBtn">
                    <NavLink>
                        Let's Work Together
                    </NavLink>
                    </div>
                </div>
            </div>
            <div className="experienceRight">
                <div className="lyft">
                    <LYFT />
                </div>
                <div className="betterBuzz">
                    <BetterBuzz />
                </div>
                <div className="justLive">
                    <JustLive />
                </div>
                <div className="harcourts">
                    <Harcourts />
                </div>
                <div className="celcius">
                    <Celcius />
                </div>
                <div className="myth">
                    <Myth />
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Experience;