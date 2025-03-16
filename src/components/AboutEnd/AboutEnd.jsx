import React from 'react';
import { philosophy } from '../../content';
import './AboutEnd.css'

function AboutEnd() {
  return (
    <>
        <section className="aboutPhilosophy">
            <div className="philosophyMain">
                <h2>{philosophy[0].title}</h2>
                <p>{philosophy[0].content}</p>
                <h5>{philosophy[0].writer}</h5>
            </div>
        </section>
    </>
  )
}

export default AboutEnd;