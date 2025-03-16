import React from 'react';
import Intro from '../components/Intro/Intro';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Service from '../components/Service/Service';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
    </>
  )
}

export default Home;