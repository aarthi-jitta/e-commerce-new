import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Signin.css"; 

const Signin = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:999/kbeauty/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: email,
          userPassword: password
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const statusCode = responseData.statusCode;
        const message = responseData.userMessage;

        if (statusCode) {
          const userName = responseData.userName;
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          window.alert(`Login successful. Welcome ${userName}!`);
          window.location.href = "/";
        } else if(message === "Password is incorrect, try again!"){
          window.alert("Login failed, password is incorrect!");
        } else if(message === "Email doesn't exist!"){
          window.alert("Email is not registered with us, kindly create an Account!")
        }
      } else {
        window.alert("Login failed, please try again!");
      }
    } catch (error) {
      window.alert("Error while logging in, please contact for more details!");
      console.error("Error during login", error);
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Login to Your Account</h2>
      <form onSubmit={loginUser} className="signin-form">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">Log in</button>
      </form>
      <div className="additional-links">
        <Link to="/forgot-password" className="link">Forgot Password?</Link>
      </div>
      <div className="additional-links">
        <p>Don't have an account? <Link to="/signup" className="link">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Signin;
