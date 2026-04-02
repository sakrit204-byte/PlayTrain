import { Link, useNavigate } from "react-router-dom";
import "../styles/nav.css";
import { useState, useEffect } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();  
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);

    navigate("/");   // 👈 redirect to home
  };

  return (
    <nav className="navbar">

      <div className="logo">PlayTrain</div>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`nav-menu ${open ? "open" : ""}`}>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/assessment">Assessment</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/about">About</Link></li>
          </ul>
          <li><Link to="/contact">Contact</Link></li>

        <div className="nav-right">

          <div className="profile-wrapper">

            <div className="profile-icon">

              {user?.photo ? (
                <img src={user.photo} alt="profile" />
              ) : (
                <i className="fa-regular fa-circle-user"></i>
              )}

            </div>

            <div className="profile-dropdown">

              {!user ? (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              ) : (
                <>
                  <div className="profile-header">
                    <i className="fa-regular fa-circle-user big"></i>
                    <span>{user.username}</span>
                  </div>

                  <Link to="/account">Manage Account</Link>

                  <button onClick={logout}>
                    Logout
                  </button>
                </>
              )}

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}