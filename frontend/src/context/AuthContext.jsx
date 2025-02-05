import { createContext, useContext, useState, useEffect } from "react";
import { USER_STORAGE_KEY } from "../constants/localStorageKeys";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem(USER_STORAGE_KEY)
  );

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem(USER_STORAGE_KEY));
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
