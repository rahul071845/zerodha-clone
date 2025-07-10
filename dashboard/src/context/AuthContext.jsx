// Updated AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { checkAuth, logoutUser } from "../api/user";
import * as jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(null); // Add countdown state

  useEffect(() => {
  const verify = async () => {
    try {
      const res = await checkAuth();
      if (res.status) {
        setUser(res.user);
        setIsAuthenticated(true);
        
        // Use the exp timestamp from response (in seconds)
        const expirationTime = res.exp * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        const remainingTime = Math.floor((expirationTime - currentTime) / 1000);
        
        setCountdown(remainingTime > 0 ? remainingTime : 0);

        // Start countdown timer
        const timer = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              logoutUser();
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(timer);
      }
    } catch (err) {
      setUser(null);
      setIsAuthenticated(false);
      setCountdown(null);
    } finally {
      setLoading(false);
    }
  };

  verify();
}, []);

  useEffect(() => {
    let interval;

    if (isAuthenticated && countdown !== null) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            logoutUser();
            setUser(null);
            setIsAuthenticated(false);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isAuthenticated, countdown]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        setUser,
        setIsAuthenticated,
        countdown, // Expose countdown to consumers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
