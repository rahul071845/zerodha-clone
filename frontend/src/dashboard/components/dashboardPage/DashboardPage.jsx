import "./DashboardPage.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import { AuthProvider } from "../../context/AuthContext";

function DashboardPage() {
  return (
    <div className="dashboardpage-container">
      <AuthProvider>
          <Routes>
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
      </AuthProvider>
    </div>
  );
}

export default DashboardPage;
