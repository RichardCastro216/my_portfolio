import React from 'react';
import Contact from './pages/Contact.jsx';
import Home from './pages/index.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Farm from './components/Projects/farm/index.jsx'
import Kaus from './components/Projects/kaus/index.jsx'
import Finance from './components/Projects/finance/index.jsx'
import Graphic from './components/Projects/graphic/index.jsx'
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='farm' element={<Farm />} />
          <Route path='kaus' element={<Kaus />} />
          <Route path='finance' element={<Finance />} />
          <Route path='graphic' element={<Graphic />} />
        </Routes>
        <Footer />
      </Router>


      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
