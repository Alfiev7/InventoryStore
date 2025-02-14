import { createContext, useContext, useState, useEffect } from 'react';
import { USER_STORAGE_KEY } from '../constants/localStorageKeys';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(isUserStorageKeyExists());

  function isUserStorageKeyExists() {
    return !!localStorage.getItem(USER_STORAGE_KEY);
  }

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(isUserStorageKeyExists());
    };

    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
