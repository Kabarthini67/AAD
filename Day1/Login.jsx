import React from 'react';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      window.alert('Please fill in all fields.');
    } else if (email === 'kabarthini@gmail.com' && password === 'kanna') {
      navigate('/'); // Use navigate to go to the next page
    } else {
      window.alert('Incorrect email or password.');
    }
  };

  return (
    <div>
      <div className="loginContainer6">
        <div className="loginForm6">
          <FaUser className="user-icon6" />
          <h2 className="title6">Sign in</h2>
          <div className="input-field6">
            <FaEnvelope className="input-icon6" />
            <input id="email" className="LoginInput6" type="email" placeholder="Email" required/>
          </div>
          <div className="input-field6">
            <FaLock className="input-icon6" />
            <input id="password" className="LoginInput6" type="password" placeholder="Password" required/>
          </div>
          <button className="btn6" onClick={handleSignIn}><Link to='/'>Sign In </Link></button>
          <p className="register-link6">Don't have an account? <Link to='/signup'>Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
