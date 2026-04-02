import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

export default function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    phone: "",
    email: "",
    age: "",
    password: "",
    dob: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const calculateAge = (dob) => {

    const birth = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "dob") {

      const age = calculateAge(value);

      setForm({
        ...form,
        dob: value,
        age: age
      });

      return;
    }

    setForm({
      ...form,
      [name]: value
    });

  };

  const validate = () => {

    const err = {};

    if (!form.username || form.username.length < 3)
      err.username = "Username must be at least 3 characters";

    if (!/^[0-9]{10}$/.test(form.phone))
      err.phone = "Phone must be 10 digits";

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Invalid email";

    if (!form.age || form.age < 10 || form.age > 100)
      err.age = "Invalid age";

    if (!form.password || form.password.length < 6)
      err.password = "Password must be 6+ characters";

    if (!form.dob)
      err.dob = "Date of birth required";

    return err;
  };

  const handleSignup = () => {

    setMessage("");

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === form.email);

    if (exists) {
      setMessage("An account with this email already exists.");
      return;
    }

    users.push(form);

    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Account created successfully! Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1500);

  };

  return (

    <div className="signup-page">

      <div className="signup-card">

        <h2>Sign Up</h2>

        {message && (
          <div className="signup-message">
            {message}
          </div>
        )}

        <div className="form-grid">

          {/* Username */}
          <div className="form-group">
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
            <span className="error">{errors.username}</span>
          </div>

          {/* Phone */}
          <div className="form-group">
            <input
              name="phone"
              placeholder="Phone no."
              value={form.phone}
              onChange={handleChange}
            />
            <span className="error">{errors.phone}</span>
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>
          </div>

          {/* Age */}
          <div className="form-group">
            <input
              placeholder="Age"
              value={form.age}
              readOnly
            />
            <span className="error">{errors.age}</span>
          </div>

          {/* Password */}
          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <span className="error">{errors.password}</span>
          </div>

          {/* DOB */}
          <div className="form-group">
            <input
              name="dob"
              type="date"
              value={form.dob}
              max={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
            />
            <span className="error">{errors.dob}</span>
          </div>

        </div>

        <button className="signup-btn" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}