import React, { useState } from 'react';
import Contact from './pages/Contact.jsx';
import Home from './pages/index.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Farm from './components/Projects/farm/index.jsx';
import Kaus from './components/Projects/kaus/index.jsx';
import Finance from './components/Projects/finance/index.jsx';
import Graphic from './components/Projects/graphic/index.jsx';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Login route - always accessible */}
        <Route 
          path="/" 
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path="/home" 
          element={
            isAuthenticated ? (
              <>
                <Home signOut = {()=>handleLogout()}/>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        <Route 
          path="/about" 
          element={
            isAuthenticated ? (
              <>
                <About />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        <Route 
          path="/portfolio" 
          element={
            isAuthenticated ? (
              <>
                <Portfolio />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        <Route 
          path="/contact" 
          element={
            isAuthenticated ? (
              <>
                <Contact />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        {/* Project routes */}
        <Route 
          path="/farm" 
          element={
            isAuthenticated ? (
              <>
                <Farm />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        {/* Project routes */}
        <Route 
          path="/kaus" 
          element={
            isAuthenticated ? (
              <>
                <Kaus />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        {/* Project routes */}
        <Route 
          path="/finance" 
          element={
            isAuthenticated ? (
              <>
                <Finance />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        {/* Project routes */}
        <Route 
          path="/graphic" 
          element={
            isAuthenticated ? (
              <>
                <Graphic />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        {/* Add similar protection for other project routes */}
      </Routes>
    </Router>
  );
}

export default App;