import { Link } from "react-router-dom";

export default function AssessmentCard({ course }) {
  return (
    <div className="course-card">

      <img src={course.image} alt={course.title} />

      <div className="course-card-body">

        <h3 className="course-title">{course.title}</h3>

        <p className="course-type">{course.type}</p>

        <p className="course-lessons">{course.lessons} lessons</p>

        <Link
          to="/assessment/start"
          className="course-btn"
        >
          Get Certified
        </Link>

      </div>

    </div>
  );
}