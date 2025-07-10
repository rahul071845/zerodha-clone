import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";

function Signup() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { email, password, username } = inputValue;

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

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Username validation
    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/signup`,
        {
          email: email.trim(),
          username: username.trim(),
          password,
        },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = import.meta.env.VITE_DASHBOARD_URL;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Signup failed. Try again.";
      handleError(msg);
    } finally {
      setIsLoading(false);
      setInputValue({ email: "", password: "", username: "" });
    }
  };

  return (
    <div className="form_container">
      <div className="container m-5 p-5">
        <div className="row text-center mb-5">
          <h1
            className="mb-4"
            style={{ letterSpacing: ".05rem", fontSize: "2.8rem" }}
          >
            Open a free demat and trading account online
          </h1>
          <h5 className="text-muted" style={{ letterSpacing: "0.04rem" }}>
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h5>
        </div>
        <div className="row m-5 p-5 justify-content-around align-items-center">
          <div className="col-5">
            <img
              src="media/images/accountOpen.svg"
              alt="Account Opening Illustration"
              style={{ width: "125%" }}
            />
          </div>
          <div className="col-5">
            <h3>Signup now</h3>
            <h6 className="fw-light" style={{ color: "gray", opacity: "0.7" }}>
              Or track your existing application
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
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                  className={errors.username ? "error" : ""}
                  disabled={isLoading}
                />
                {errors.username && (
                  <span className="error-message">{errors.username}</span>
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
                {isLoading ? "Creating Account..." : "Submit"}
              </button>
              <br />
              <span>
                Already have an account? <Link to={"/login"}>Login</Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
