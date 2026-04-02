import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="final-cta">

      <h2 className="final-title">
        Why Athletes Choose PlayTrain
      </h2>

      <div className="stats">
        <div className="stat">
          <span className="stat-number">10+</span>
          <span className="stat-label">Sports Covered</span>
        </div>

        <div className="stat">
          <span className="stat-number">50+</span>
          <span className="stat-label">Expert Coaches</span>
        </div>

        <div className="stat">
          <span className="stat-number">1,000+</span>
          <span className="stat-label">Active Learners</span>
        </div>
      </div>

      <p className="final-subtext">
        Structured programs. Expert guidance. Real performance growth.
      </p>

      <Link to="/courses" className="final-btn">
        Start Training Today
      </Link>

    </section>
  );
}