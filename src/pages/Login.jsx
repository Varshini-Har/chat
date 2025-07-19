import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert('No user found. Please sign up.');
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      login(email);
      navigate('/dashboard');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="app-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
