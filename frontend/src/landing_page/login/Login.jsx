import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../signup/Signup.css";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = inputValue;
  const Navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/login`,
        {
          email: email.trim(),
          password,
        },
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          Navigate("/dashboard")
        }, 1000);
      } else {
        handleError(data.message);
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed. Try again.";
      handleError(msg);
    } finally {
      setIsLoading(false);
      setInputValue({ email: "", password: "" });
    }
  };

  return (
    <div className="form_container">
      <div className="container m-5 p-5">
        <div className="row text-center mb-5">
          <h1 style={{ letterSpacing: ".05rem", fontSize: "2.8rem" }}>
            Login to your account
          </h1>
          <h5 className="text-muted" style={{ letterSpacing: "0.04rem" }}>
            Welcome back! Please login to continue
          </h5>
        </div>

        <div className="row m-5 p-5 justify-content-around align-items-center">
          <div className="col-5">
            <img
              src="media/images/accountOpen.svg"
              alt="Login Illustration"
              style={{ width: "125%" }}
            />
          </div>

          <div className="col-5">
            <h3>Login</h3>
            <h6 className="fw-light" style={{ color: "gray", opacity: "0.7" }}>
              New user? <Link to={"/signup"}>Signup here</Link>
            </h6>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  className={errors.email ? "error" : ""}
                  disabled={isLoading}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  className={errors.password ? "error" : ""}
                  disabled={isLoading}
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={isLoading ? "btn-loading" : ""}
                style={{
                  color: "white",
                  backgroundColor: "#387ed1",
                  border: "none",
                  padding: "0.75rem 5.5rem",
                  fontSize: "1.25rem",
                  letterSpacing: "0.05rem",
                  borderRadius: "3px",
                }}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
