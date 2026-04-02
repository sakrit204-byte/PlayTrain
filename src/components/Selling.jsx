import { Link } from "react-router-dom";

export default function Selling() {
  return (
    <section className="selling">

      <div className="selling-content">

        <h2 className="selling-title">
          Train Smart. Play Strong. Compete Better.
        </h2>

        <p className="selling-subtitle">
          Professional sports training programs designed for students,
          athletes, and fitness enthusiasts — online & offline.
        </p>

        <div className="selling-features">
          <div className="feature">
            <i className="fa-solid fa-medal"></i>
            <span>Certified Coaches</span>
          </div>

          <div className="feature">
            <i className="fa-solid fa-dumbbell"></i>
            <span>Sport-Specific Programs</span>
          </div>

          <div className="feature">
            <i className="fa-solid fa-chart-line"></i>
            <span>Track Your Performance</span>
          </div>
        </div>

        <Link to="/courses" className="selling-btn">
          Explore Courses
        </Link>

      </div>

      <img src="/assets/tennis.png" alt="Tennis Player" className="selling-image" />

    </section>
  );
}