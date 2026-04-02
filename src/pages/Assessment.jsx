import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";
import { assessments } from "../data/assessments";
import AuthRequiredModal from "../components/AuthRequiredModal";
import "../styles/course.css";

export default function Assessment() {

  const [category, setCategory] = useState("Outdoor");

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userEmail = user?.email;

  const enrollments =
    JSON.parse(localStorage.getItem("enrollments")) || {};

  const userEnrollments = enrollments[userEmail] || [];

  useEffect(() => {

    const handleFocus = () => {
      window.location.reload();
    };

    window.addEventListener("focus", handleFocus);

    return () =>
      window.removeEventListener("focus", handleFocus);

  }, []);

  const allCertifications =
    JSON.parse(localStorage.getItem("certifications")) || {};

  const certifications = allCertifications[userEmail] || {};

  const merged = assessments
    .map((assessment) => {

      const course = courses.find(
        (c) => c.id === assessment.id
      );

      if (!course) return null;

      const enrolled = userEnrollments.some(
        (e) => e.course === course.slug
      );

      return {
        ...course,
        ...assessment,
        enrolled,
        certified: certifications[assessment.id] || false
      };

    })
    .filter(Boolean);

  const filtered = merged.filter(
    (item) => item.category === category
  );

  const availableAssessments = filtered.filter(
    (a) => !a.certified
  );

  const certifiedAssessments = filtered.filter(
    (a) => a.certified
  );

  return (
    <>

      {/* LOGIN REQUIRED MODAL */}
      {!user && <AuthRequiredModal show={true} />}

      <br /><br /><br /><br /><br /><br /><br />

      <section className="course-container">

        <div className="course-header">

          <h1>Assessment</h1>

          <div className="toggle">

            <button
              className={`toggle-btn ${
                category === "Outdoor" ? "active" : ""
              }`}
              onClick={() => setCategory("Outdoor")}
            >
              Outdoor
            </button>

            <button
              className={`toggle-btn ${
                category === "Indoor" ? "active" : ""
              }`}
              onClick={() => setCategory("Indoor")}
            >
              Indoor
            </button>

          </div>

        </div>

        {/* Take Assessment */}

        <h2 className="section-title">Take Assessment</h2>

        <div className="course-grid">

          {availableAssessments.length === 0 ? (
            <p>No assessments available</p>
          ) : (
            availableAssessments.map((item) => (

              <div key={item.id} className="course-card">

                <img src={item.image} alt={item.title} />

                <div className="course-card-body">

                  <h3 className="course-title">{item.title}</h3>

                  <p className="course-type">{item.type}</p>

                  <p className="course-lessons">
                    {item.duration} min assessment
                  </p>

                  <Link
                    to={`/assessment/start/${item.id}`}
                    className="course-btn"
                  >
                    Get Certified
                  </Link>

                </div>

              </div>
            ))
          )}

        </div>

        {/* Certifications */}

        <h2 className="section-title">Your Certifications</h2>

        <div className="course-grid">

          {certifiedAssessments.length === 0 ? (
            <p>No certifications yet</p>
          ) : (
            certifiedAssessments.map((item) => (

              <div key={item.id} className="course-card">

                <img src={item.image} alt={item.title} />

                <div className="course-card-body">

                  <h3 className="course-title">{item.title}</h3>

                  <p className="course-type">Certified</p>

                  <p className="course-lessons">
                    Valid for 2 years
                  </p>

                  <Link
                    to={`/certificate/${item.id}`}
                    className="course-btn"
                  >
                    View Certificate
                  </Link>

                </div>

              </div>
            ))
          )}

        </div>

      </section>

    </>
  );
}