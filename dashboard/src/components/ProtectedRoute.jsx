import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/users/check`,
          {},
          { withCredentials: true }
        );
        setIsAuth(res.data.status);
      } catch (error) {
        setIsAuth(false);
      }
    };
    verifyUser();
  }, []);

  if (isAuth === null) return <p>Loading...</p>;

  if (!isAuth) {
    window.location.replace(`${import.meta.env.VITE_FRONTEND_URL}/login`);
    return null;
  }
  return children;
};

export default ProtectedRoute;
