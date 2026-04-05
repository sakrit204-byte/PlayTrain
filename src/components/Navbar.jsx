import { Link, useNavigate } from "react-router-dom";
import "../styles/nav.css";
import { useState, useEffect } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-wrapper")) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">PlayTrain</div>

      {/* MENU TOGGLE */}
      <div 
        className="menu-toggle" 
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* NAV MENU */}
      <div className={`nav-menu ${open ? "open" : ""}`}>

        <ul className="nav-links">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/courses" onClick={() => setOpen(false)}>Courses</Link></li>
          <li><Link to="/assessment" onClick={() => setOpen(false)}>Assessment</Link></li>
          <li><Link to="/feedback" onClick={() => setOpen(false)}>Feedback</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>

        <div className="nav-right">

          {/* PROFILE */}
          <div 
            className={`profile-wrapper ${profileOpen ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); // prevent closing instantly
              setProfileOpen(!profileOpen);
            }}
          >

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
                  <Link to="/login" onClick={() => setProfileOpen(false)}>Login</Link>
                  <Link to="/signup" onClick={() => setProfileOpen(false)}>Sign Up</Link>
                </>
              ) : (
                <>
                  <div className="profile-header">
                    <i className="fa-regular fa-circle-user big"></i>
                    <span>{user.username}</span>
                  </div>

                  <Link to="/account" onClick={() => setProfileOpen(false)}>
                    Manage Account
                  </Link>

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