import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {

  const navigate = useNavigate();

  const [mode, setMode] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (mode === "admin") {

      if (email === "admin@playtrain.com" && password === "admin123") {
        window.location.href = "/admin";
        return;
      }

      alert("Invalid admin credentials");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid login");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "/";
  };

  return (

    <div className="auth-page">

      <div className="auth-wrapper">

        {/* Toggle */}
        <div className="auth-toggle">

          <button
            className={mode === "user" ? "active" : ""}
            onClick={() => setMode("user")}
          >
            User
          </button>

          <button
            className={mode === "admin" ? "active" : ""}
            onClick={() => setMode("admin")}
          >
            Admin
          </button>

        </div>

        {/* Card */}

        <div className="auth-card">

          <h2>
            {mode === "user" ? "User Login" : "Admin Login"}
          </h2>

          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" onClick={handleLogin}>
            Login
          </button>

          {mode === "user" && (

            <p className="auth-link">
              Don’t have an account?
              <Link to="/signup"> Sign Up</Link>
            </p>

          )}

        </div>

      </div>

    </div>

  );
}