import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Signup.css"; 

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:999/kbeauty/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: `${firstName} ${lastName}`,
          userEmail: email,
          userPassword: password
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        const userName = responseData.userName;
        window.alert(`Account for "${userName}" is created successfully!`);
        window.location.href = "/signin";
      } else {
        window.alert("Registration failed");
      }
    } catch (error) {
      window.alert("Error creating account, contact for more details!")
      console.error("Error during creating account", error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up for an Account</h2>
      <form onSubmit={signUpUser} className="signup-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input-field"
        />
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
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <div className="additional-links">
        <p>Already have an account? <Link to="/signin" className="link">Sign In</Link></p>
      </div>
    </div>
  );
};

export default Signup;
