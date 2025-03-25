import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // We'll update this CSS
import avatar from '../assets/images/my_image.jpg'; // Replace with your avatar image path

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
  
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: credentials.username
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        onLogin();
        navigate('/home');
      } else {
        throw new Error(data.error || 'Login failed');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="split-login-card">
        {/* Left side with avatar */}
        <div className="avatar-side">
          <div className="avatar-circle">
            <img src={avatar} alt="Your Avatar" />
          </div>
          
          <p style={{marginTop:'10px'}}>Richard Castro</p>
        </div>

        {/* Right side with form */}
        <div className="form-side">
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="username">Enter your name kindly.</label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>
            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="button-loader"></span>
              ) : (
                'LOGIN'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;