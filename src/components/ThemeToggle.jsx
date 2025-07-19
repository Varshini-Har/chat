// components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import '../styles.css'


const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  return (
    <button className="theme-toggle" onClick={() => setDark(!dark)}>
      {dark ? <Sun size={20} /> : <Moon size={20} />} {dark ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
