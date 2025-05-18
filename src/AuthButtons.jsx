// src/AuthButtons.js
import React, { useState } from 'react';

const AuthButtons = () => {
  const [authMessage, setAuthMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', { // Adjust port if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:'kartikay',
          email: 'sky.kartikay@gmail.com',
          password: '21ABCdef_21',
        }),
      });
      const data = await response.json();
      setAuthMessage(`Signup Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setAuthMessage(`Signup Error: ${error}`);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', { // Adjust port if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:'kartikay',
          email: 'sky.kartikay@gmail.com',
          password: '21ABCdef_21',
        }),
      });
      const data = await response.json();
      setAuthMessage(`Login Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setAuthMessage(`Login Error: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/logout', { // Adjust port if needed
        method: 'GET',
      });
      const data = await response.json();
      setAuthMessage(`Logout Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setAuthMessage(`Logout Error: ${error.message}`);
    }
  };

  const handleProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', { // Adjust port if needed
        method: 'GET',
        headers: {
          // You might need to include a token here depending on your auth middleware
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setAuthMessage(`Profile Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setAuthMessage(`Profile Error: ${error.message}`);
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = 'http://localhost:5000/api/auth/google'; // Redirect for Google Auth
  };

  return (
    <div>
      <h2>Authentication</h2>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleProfile}>Get Profile</button>
      <button onClick={handleGoogleAuth}>Login with Google</button>
      {authMessage && <p>{authMessage}</p>}
    </div>
  );
};

export default AuthButtons;