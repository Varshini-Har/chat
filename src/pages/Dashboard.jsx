// pages/Dashboard.jsx
import React, { useState } from 'react';
import ChatPage from './Chatpage';
import { roles } from "../ChatFlows";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { motion } from 'framer-motion';
import '../styles.css';

const Dashboard = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('');
  };

  if (!selectedRole) {
    return (
      <div className="app-container">
        {/* 🔒 Top-right logout button */}
        <div className="top-right-controls">
          <button onClick={handleLogout}> Logout</button>
        </div>

        <motion.div
          className="role-selection"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="glow">Welcome, {user?.email} 👋</h1>
          <h3>Get real answers. Choose who you want to chat with.</h3>

          <div className="roles">
            {roles.map((role, idx) => (
              <motion.button
                key={idx}
                className="role-button"
                onClick={() => setSelectedRole(role)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {role}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return <ChatPage role={selectedRole} onBack={() => setSelectedRole(null)} />;
};

export default Dashboard;
