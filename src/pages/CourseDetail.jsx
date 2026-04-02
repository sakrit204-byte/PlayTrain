import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import courses from "../data/courses";
import "../styles/courseDetail.css";
import AuthRequiredModal from "../components/AuthRequiredModal";
export default function CourseDetail() {

  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!course) {
    return <h2 style={{ padding: "100px" }}>Course Not Found</h2>;
  }

  /* ===============================
     CHECK USER ENROLLMENT
  =============================== */

const user = localStorage.getItem("user");
  let enrollments =
    JSON.parse(localStorage.getItem("enrollments")) || {};

  const userEnrollments = enrollments[user] || [];

  const enrolled = userEnrollments.find(
    (e) => e.course === course.slug
  );

  return (
    <div className="course-page">
      <section className="course-wrapper">

        {/* LEFT CARD */}

        <div className="course-card">
          <img src={course.image} alt={course.title} />

          <p>
            <strong>{course.type}</strong>
          </p>

          <p>Lessons: {course.lessons}</p>

          <p>Authors: {course.authors}</p>

          <button className="syllabus-btn">
            Syllabus
          </button>
        </div>

        {/* RIGHT CONTENT */}

        <div className="course-content">

          <h1>{course.fullTitle}</h1>

          <div className="author">
            Author: {course.authorName}
          </div>

          <h3>Description</h3>

          <p>{course.description}</p>

          <h3>If you enroll only in theory</h3>

          <ul>
            {course.theoryPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h3>If you enroll in practical</h3>

          <ul>
            {course.practicalPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* ===============================
              ENROLL BUTTONS
          =============================== */}

          {!enrolled ? (

            <div className="enroll-actions">

              <Link to={`/enroll/${course.slug}/theory`}>
                <button>Enroll (Theory)</button>
              </Link>

              <Link to={`/enroll/${course.slug}/practical`}>
                <button>Enroll (Practical)</button>
              </Link>

              <Link to={`/enroll/${course.slug}/blended`}>
                <button>Enroll (Blended)</button>
              </Link>

            </div>

          ) : (

            <div className="enroll-actions">

              <Link to={`/learn/${course.id}`}>
                <button>Continue Learning</button>
              </Link>

            </div>

          )}

        </div>

      </section>
    </div>
  );
}