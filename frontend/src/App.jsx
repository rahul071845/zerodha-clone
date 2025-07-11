import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./landing_page/landingPage/LandingPage.jsx";
import DashboardPage from "./dashboard/components/dashboardPage/DashboardPage.jsx";
import "./App.css"

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/*" element={<LandingPage />} />
      {/* Dashboard */}
      <Route path="/dashboard/*" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
