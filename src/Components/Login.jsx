import React, { useState } from 'react';
import { BsEnvelopeFill, BsLockFill, BsEyeSlashFill, BsEyeFill, BsGoogle, BsFacebook, BsAirplaneFill, BsMap } from 'react-icons/bs';
import './LoginPage.css';
import {Link} from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

const navigateToDashboard = () => {

    window.location.href = '/dashboard';
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    navigateToDashboard();
};
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-left-content">
            <h1>Wonder's Travel</h1>
            <p>Discover amazing destinations around the world</p>
            <div className="travel-illustration">
              <BsAirplaneFill className="travel-icon" />
              <div className="travel-path"></div>
              <BsMap className="travel-icon" />
            </div>
          </div>
        </div>
        
        
        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Please login to continue your journey</p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <BsEnvelopeFill className="input-icon" />
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <BsLockFill className="input-icon" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="password-toggle" onClick={togglePasswordVisibility}>
                    {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </div>
                </div>
              </div>
              
              <div className="form-extras">
                <div className="remember-me">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              
                <Link to='/home'><button type="submit" className="login-btn">Login</button></Link>
            
              
              <div className="separator">
                <span>or continue with</span>
              </div>
              
              <div className="social-login">
                <button type="button" className="social-btn google">
                  <BsGoogle />
                  <span>Google</span>
                </button>
                <button type="button" className="social-btn facebook">
                  <BsFacebook />
                  <span>Facebook</span>
                </button>
              </div>
              <Link to='/Signup'>
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;


