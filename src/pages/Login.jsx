import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    loginId: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.loginId === "parking_solutions" &&
      form.password === "123456"
    ) {
      localStorage.setItem("token", "dummy-token");
      navigate("/dashboard");
    } else {
      setError("Invalid login ID or password");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-overlay">
        <div className="login-text">
          <h1>
            Welcome to the <br />
            Crowd Management System
          </h1>
        </div>

        <form className="login-card" onSubmit={handleSubmit}>
          <div className="logo">kloudspot</div>

          {error && <p className="error-text">{error}</p>}

          <div className="field">
            <label>Log In *</label>
            <input
              type="text"
              name="loginId"
              placeholder="Parking_solutions"
              value={form.loginId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field password-field">
            <label>Password *</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
