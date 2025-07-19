import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src="/logo.png" alt="Connecta Logo" className="logo-img" />
      <h1 className="home-title">Connecta</h1>
      <p className="home-subtitle">Fast Chat. Real Growth.</p>
      <div className="home-buttons">
        <button onClick={() => navigate("/signup")}>Sign Up</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
};

export default Home;
