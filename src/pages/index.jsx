import React from 'react';
import Intro from '../components/Intro/Intro';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Service from '../components/Service/Service';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';

function Home(props) {
  return (
    <>
      <Header signOut = {props.signOut} />
      <div style={{height:'6px',width:'100%',backgroundColor:'white'}}></div>
      <Intro />
      <div style={{height:'6px',width:'100%',backgroundColor:'white'}}></div>
      <Projects />
    </>
  )
}

export default Home;