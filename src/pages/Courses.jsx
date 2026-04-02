import { useState, useEffect } from "react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import AuthRequiredModal from "../components/AuthRequiredModal";
import "../styles/course.css";

export default function Courses() {

  const [category, setCategory] = useState("Outdoor");
  const [userEnrollments, setUserEnrollments] = useState([]);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userEmail = user?.email;

  /* LOAD ENROLLMENTS */

  useEffect(() => {

    const loadEnrollments = () => {

      if (!userEmail) return;

      const enrollments =
        JSON.parse(localStorage.getItem("enrollments")) || {};

      setUserEnrollments(enrollments[userEmail] || []);

    };

    loadEnrollments();

    /* reload when tab regains focus */
    window.addEventListener("focus", loadEnrollments);

    return () =>
      window.removeEventListener("focus", loadEnrollments);

  }, [userEmail]);



  /* FILTER CATEGORY */

  const filteredCourses = courses.filter(
    (course) => course.category === category
  );



  /* CHECK ENROLLMENT */

  const coursesWithEnrollment = filteredCourses.map((course) => {

    const isEnrolled =
      userEnrollments.some((e) => e.course === course.slug);

    return {
      ...course,
      enrolled: isEnrolled
    };

  });



  const enrolledCourses = coursesWithEnrollment.filter(
    (course) => course.enrolled
  );

  const availableCourses = coursesWithEnrollment.filter(
    (course) => !course.enrolled
  );



  return (
    <>
      {!user && <AuthRequiredModal show={true} />}

      <section className="course-container">

        <div className="course-header">

          <h1>Courses</h1>

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



        {/* ENROLLED COURSES */}

        <h2 className="section-title">Enrolled Courses</h2>

        <div className="course-grid enrolled">

          {enrolledCourses.length === 0 ? (

            <p>No enrolled courses</p>

          ) : (

            enrolledCourses.map((course) => (

              <CourseCard
                key={course.id}
                course={course}
                enrolled={true}
                link={`/learn/${course.slug}`}
              />

            ))

          )}

        </div>



        {/* AVAILABLE COURSES */}

        <h2 className="section-title">Our Courses</h2>

        <div className="course-grid">

          {availableCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
              enrolled={false}
              link={`/course/${course.slug}`}
            />

          ))}

        </div>

      </section>
    </>
  );
}