import React from 'react';
import { serviceData, serviceTitle } from '../../content';
import { TextWheel } from '../SVGS/Svg';
import ServiceCard from './ServiceCard';
import './Service.css';


function Service() {


  return (
    <>
      <section className='service'>
        <div className="service-container">
          <div className="serviceHead">
            <TextWheel />
            <h2>{serviceTitle[0].title}</h2>
            <TextWheel />
          </div>
          <div className="serviceWrapper">
            {/* <div className="serviceCard">
              <h5>Branding</h5>
              <p>It’s more than just a logo, it’s the visual identity for your brand that people first interact with before they decide if they want to learn more or not. My focus is always on telling your story through the logo, typography, colors, and other supporting elements so that you stand out amongst your competitors.</p>
            </div>
            <div className="serviceCard">
              <h5>Branding</h5>
              <p>It’s more than just a logo, it’s the visual identity for your brand that people first interact with before they decide if they want to learn more or not. My focus is always on telling your story through the logo, typography, colors, and other supporting elements so that you stand out amongst your competitors.</p>
            </div>
            <div className="serviceCard">
              <h5>Branding</h5>
              <p>It’s more than just a logo, it’s the visual identity for your brand that people first interact with before they decide if they want to learn more or not. My focus is always on telling your story through the logo, typography, colors, and other supporting elements so that you stand out amongst your competitors.</p>
            </div> */}
            {serviceData.map( (serviceItem) => ( <ServiceCard Heading={serviceItem.title} Content={serviceItem.Content} />))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Service;