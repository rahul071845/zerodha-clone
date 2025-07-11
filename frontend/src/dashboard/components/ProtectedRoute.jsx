import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  if (isAuth === null) return <p>Loading...</p>;

  if (!isAuth) return null;

  return children;
};

export default ProtectedRoute;
