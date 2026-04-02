import { Link } from "react-router-dom";
import "../styles/course.css";

export default function CourseCard({ course = {}, enrolled = false }) {

  if (!course) return null;

  const {
    id = "",
    slug = "",
    title = "Course",
    image = "/assets/default.png",
    type = "",
    lessons = 0
  } = course;

  // enrolled → go to learning page using id
  // not enrolled → go to course info page using slug
  const courseLink = enrolled
    ? `/learn/${id}`
    : `/courses/${slug}`;

  return (
    <div className={`course-card ${enrolled ? "enrolled-card" : ""}`}>

      <img src={image} alt={title} />

      <div className="course-card-body">

        <h3 className="course-title">{title}</h3>

        {type && (
          <p className="course-type">{type}</p>
        )}

        {lessons ? (
          <p className="course-lessons">{lessons} lessons</p>
        ) : null}

        <Link to={courseLink} className="course-btn">
          {enrolled ? "Continue" : "View Course"}
        </Link>

      </div>

    </div>
  );
}