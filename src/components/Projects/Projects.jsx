import React from 'react';
import CardProjects from './CardProjects';
import { projectContent, projectData } from '../../content';
import './Projects.css';


// this is ES6 import syntax for importing images
import project1 from '../../assets/images/farm/farm_main.png';
import project2 from '../../assets/images/kaus/Kaus_main.png';
import project3 from '../../assets/images/finance/Finance_main.png';


function Projects() {

  // Also can be use as arroe function inside map function
  // function renderProjectData(projectItem) {
  //   return <CardProjects SubTitle={projectItem.subTitle} Title={projectItem.title} Img={project3} Btn={projectItem.btnText} />
  // }


  return (
    <>
      <section className="project">
        <h2>{projectContent[0].title}</h2>
          <div className="sideTitle left">
            <h3>{projectContent[0].subTitle}</h3>
          </div>
          <div className="sideTitle right">
            <h3>{projectContent[0].subTitle}</h3>
          </div>
        <div className="projectMain">
              <CardProjects
               SubTitle={projectData[0].subTitle}
               Title1={projectData[0].title1}
               Title2={projectData[0].title2}
               Img={project1}
               Btn={projectData[0].btnText}
               ProjectName="farm"
              />
              <CardProjects
               SubTitle={projectData[1].subTitle}
               Title1={projectData[1].title1}
               Title2={projectData[1].title2}
               Img={project2}
               Btn={projectData[1].btnText} 
               ProjectName="kaus"
              />              
              <CardProjects
              SubTitle={projectData[2].subTitle}
              Title1={projectData[2].title1}
              Img={project3}
              Btn={projectData[2].btnText} 
              ProjectName="finance"
             />
             <br></br>
        </div>
      </section>
    </>
  )
}

export default Projects;