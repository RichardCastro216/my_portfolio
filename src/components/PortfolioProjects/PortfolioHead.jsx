import React from 'react';
import Navbar from '../navbar/Navbar';
import CardProjects from '../Projects/CardProjects';
import './PortfolioHead.css';
import { projectData } from '../../content';

// Importing images
import portfolioImg1 from '../../assets/images/project-1.avif';
import portfolioImg2 from '../../assets/images/project-2.avif';
import portfolioImg3 from '../../assets/images/project-3.avif';
import portfolioImg4 from '../../assets/images/project-4.avif';
import portfolioImg5 from '../../assets/images/project-5.jpg';


function PortfolioHead() {
  return (
    <>
      <section className="portfolio">
        <div className="portfolioNavbar">
          <Navbar />
        </div>
        <div className="portfolioHeading">
          <h2>
            Deep strategic thought, <br />
            hundreds of hours, countless <br />
            conversations, and a lot of <br />
            hard work went into these <br />
            projects.
          </h2>
        </div>
        <div className="portfolioProjects">
            <CardProjects
              SubTitle={projectData[0].subTitle}
              Title1={projectData[0].title1}
              Title2={projectData[0].title2}
              Img={portfolioImg1}
              Btn={projectData[0].btnText} 
            />
            <CardProjects
              SubTitle={projectData[1].subTitle}
              Title1={projectData[1].title1}
              Title2={projectData[1].title2}
              Img={portfolioImg2}
              Btn={projectData[1].btnText} 
            />  
            <CardProjects
              SubTitle={projectData[2].subTitle}
              Title1={projectData[2].title1}
              Img={portfolioImg3}
              Btn={projectData[2].btnText} 
            />

            <CardProjects
              SubTitle={projectData[3].subTitle}
              Title1={projectData[3].title1}
              Title2={projectData[3].title2}
              Img={portfolioImg4}
              Btn={projectData[3].btnText} 
            />
            <CardProjects
              SubTitle={projectData[4].subTitle}
              Title1={projectData[4].title1}
              Title2={projectData[4].title2}
              Img={portfolioImg5}
              Btn={projectData[4].btnText} 
            />
        </div>
      </section>
    </>
    
  )
}

export default PortfolioHead;