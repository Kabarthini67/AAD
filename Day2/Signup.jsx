import React from 'react';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css';

function Signup() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if any field is empty
    if (!username || !email || !password) {
      window.alert('Please fill in all fields.');
    } else if (username === 'kabarthini' && email === 'kabarthini@gmail.com' && password === 'kanna') {
      // Perform signup logic here
      console.log('Signup successful!');
      // Navigate to the login page
      navigate('/login');
    } else {
      window.alert('Incorrect username, email, or password.');
    }
  };

  return (
    <div className="loginContainer13">
      <div className="loginForm13">
        <FaUser className="user-icon13" />
        <h2 className="title13">Sign up</h2>
        <div className="input-field13">
          <FaUser className="input-icon13" />
          <input id="username" className="LoginInput13" type="text" placeholder="Username"/>
        </div>
        <div className="input-field13">
          <FaEnvelope className="input-icon13" />
          <input id="email" className="LoginInput13" type="email" placeholder="Email"/>
        </div>
        <div className="input-field13">
          <FaLock className="input-icon13" />
          <input id="password" className="LoginInput13" type="password" placeholder="Password"/>
        </div>
        <button className="btn13" onClick={handleSignUp}>Sign Up</button>
        <p className="register-link13">Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
