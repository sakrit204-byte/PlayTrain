import { useState, useEffect } from "react";
import courses from "../data/courses";

export default function AccountCourses(){

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userEmail = user?.email;

  const [userCourses,setUserCourses] = useState([]);

  useEffect(()=>{

    const enrollments =
      JSON.parse(localStorage.getItem("enrollments")) || {};

    const userEnrollments = enrollments[userEmail] || [];

    const enrolledCourses = courses.filter(course =>
      userEnrollments.some(e => e.course === course.slug)
    );

    setUserCourses(enrolledCourses);

  },[userEmail]);


  const handleDeregister = (slug) => {

    const enrollments =
      JSON.parse(localStorage.getItem("enrollments")) || {};

    const userEnrollments = enrollments[userEmail] || [];

    const updated =
      userEnrollments.filter(e => e.course !== slug);

    enrollments[userEmail] = updated;

    localStorage.setItem(
      "enrollments",
      JSON.stringify(enrollments)
    );

    setUserCourses(prev =>
      prev.filter(c => c.slug !== slug)
    );
  };


  return(

    <div>

      <h2>Your Courses</h2>

      {userCourses.length === 0 ? (

        <p>No courses enrolled yet</p>

      ) : (

        userCourses.map((course)=>(

          <div key={course.id} className="course-row">

            <div className="course-info">

              <h3>{course.title}</h3>

              <p>{course.type}</p>

            </div>

            <button
              className="deregister-btn"
              onClick={()=>handleDeregister(course.slug)}
            >
              Deregister
            </button>

          </div>

        ))

      )}

    </div>

  );

}