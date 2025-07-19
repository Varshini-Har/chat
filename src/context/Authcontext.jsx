// context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';
import '../styles.css';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email) => setUser({ email });
  const logout = () => setUser(null);
  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access auth context
export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
