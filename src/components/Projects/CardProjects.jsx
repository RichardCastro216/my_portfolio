import React from 'react';
import './Projects.css';

function CardProjects( { SubTitle, Title1, Title2, Img, Btn, ProjectName} ) {

  return (
    <>
      <div className="projectContainer">
          <img src={Img} alt="Project Img" />
          <div className="projectContent" style={{backgroundColor:'rgba(0,0,0,0.5)',padding:20, borderRadius:5}}>
            <p>{SubTitle}</p>
            <h3>{Title1} <br /> {Title2}</h3>
            <a href={ProjectName} target="_blank" rel="noopener noreferrer">{Btn}</a>
          </div>
      </div>
    </>
  )
}

export default CardProjects;
