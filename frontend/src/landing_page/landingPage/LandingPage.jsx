import { Routes, Route } from "react-router-dom";
import HomePage from "../home/HomePage.jsx";
import Signup from "../signup/Signup.jsx";
import Login from "../login/Login.jsx";
import AboutPage from "../about/AboutPage.jsx";
import ProductPage from "../products/ProductPage.jsx";
import PricingPage from "../pricing/PricingPage.jsx";
import SupportPage from "../support/SupportPage.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import NotFound from "../NotFound.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;