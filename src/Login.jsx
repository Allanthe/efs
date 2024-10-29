// src/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Scoped CSS import for Login page only

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/components/Dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-card">
          <div className="form-section">
            <div className="logo">EVZone</div>
            <h1>Welcome Back</h1>
            <p>Please log in to your account</p>

            <div className="social-login">
              <button className="google-btn">Login with Google</button>
              <button className="apple-btn">Login with Apple</button>
            </div>

            <div className="divider">or</div>

            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error-message">{error}</p>}
              
          
              

              

              <button type="submit" className="login-btn">Login</button>
            </form>

            <div className="signup">
              <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>

            <footer>&copy; 2024 EVzone. All Rights Reserved.</footer>
          </div>

          <div className="info-section">
            <h1>Administration</h1>
            <h2>Empowering individuals to take control of their finances through seamless digital transactions.</h2>
            <div className="graphic">
              <img src="your-graphic.png" alt="Graphic" />
            </div>
            <div className="partners">
              <span>Partner1</span>
              <span>Partner2</span>
              <span>Partner3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
