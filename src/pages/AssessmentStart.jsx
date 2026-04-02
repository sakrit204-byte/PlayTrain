import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";
import { assessments } from "../data/assessments";
import "../styles/transit.css";
export default function AssessmentStart() {

  const { id } = useParams();

  const course = courses.find((c) => c.id === id);
  const assessment = assessments.find((a) => a.id === id);

  if (!course || !assessment) {
    return (
      <p style={{ color: "white", padding: "40px" }}>
        Assessment not found
      </p>
    );
  }

  return (
    <div className="course-container">

      {/* Center wrapper */}
      <div className="assessment-start-wrapper">

        <div className="course-card">

          <img src={course.image} alt={course.title} />

          <div className="course-card-body">

            <h3 className="course-title">{course.title}</h3>

            <p className="course-type">
              Validation: 2 years
            </p>

            <p className="course-lessons">
              Time: {assessment.duration} minutes
            </p>

            <p className="course-lessons">
              Certification requirement: score above {assessment.passingScore}
            </p>

            <Link
              to={`/quiz/${id}`}
              className="course-btn"
            >
              Start Quiz
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}