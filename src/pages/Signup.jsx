import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Save both email & password as a JSON string
    const userData = { email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/login');
  };

  return (
    <div className="app-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br/>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
