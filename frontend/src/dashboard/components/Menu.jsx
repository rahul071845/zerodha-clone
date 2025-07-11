import "../styles/Menu.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { logoutUser } from "../api/user";
import SessionTimer from "./SessionTimer";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Menu = () => {
  const { user } = useAuth();
  const [selectedOpt, setSelectedOpt] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();

  const options = [
    "Dashboard",
    "Orders",
    "Holdings",
    "Positions",
    "Funds",
    "Apps",
  ];

  const handleLogout = async () => {
    const res = await logoutUser();
    if (res.message === "Logged out successfully") {
      toast.success("Logged out");
      Navigate("/login");
    } else {
      toast.error("Logout failed");
    }
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  useEffect(() => {
    const index = options.findIndex((opt) =>
      location.pathname === "/" && opt === "Dashboard"
        ? true
        : location.pathname.includes(opt.toLowerCase())
    );
    setSelectedOpt(index);
  }, [location.pathname]);

  return (
    <div className="menu-container">
      <img src="media/images/logo.png" alt="App Logo" className="menu-logo" />

      <div className="menus">
        <ul className="menu-list">
          {options.map((opt, idx) => (
            <li key={idx}>
              <NavLink
                to={
                  opt === "Dashboard"
                    ? "/dashboard"
                    : `/dashboard/${opt.toLowerCase()}`
                }
                end={opt === "Dashboard"}
                className="menu-link"
              >
                {({ isActive }) => (
                  <p className={`menu-item ${isActive ? "selected" : ""}`}>
                    {opt}
                  </p>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <hr className="menu-divider" />

        <div className="session-timer-wrapper">
          <SessionTimer />
        </div>

        <div
          className="profile-container"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <div className="avatar">
            {user?.username?.substring(0, 2).toUpperCase() || "ZU"}
          </div>
          <p className="username">{user?.username || "USERID"}</p>

          {isProfileOpen && (
            <div className="profile-dropdown">
              <button className="dropdown-button" onClick={handleProfileClick}>
                View Profile
              </button>
              <button
                className="dropdown-button logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
