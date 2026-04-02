import { Link } from "react-router-dom";
import "../styles/authModal.css";

export default function AuthRequiredModal({ show }) {

if(!show) return null;

return(

<div className="auth-overlay">

  <div className="auth-modal">

    <h2>Login Required</h2>

    <p>
      You must be logged in to access this feature.
      Please login or create an account to continue.
    </p>

    <div className="auth-buttons">

      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>

      <Link to="/signup">
        <button className="signup-btn">Sign Up</button>
      </Link>

    </div>

  </div>

</div>

);

}