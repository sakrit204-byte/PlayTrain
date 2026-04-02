import courses from "../data/courses";

export default function AccountOverview(){

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const certifications =
    JSON.parse(localStorage.getItem("certifications")) || {};

  /* COUNT ENROLLED COURSES */

  const enrolledCourses = courses.filter(c => c.enrolled === true);

  /* COUNT CERTIFICATES */

  const certs = Object.keys(certifications);

  return(

    <div>

      <h2>Welcome {user.username}</h2>

      <div className="dashboard-cards">

        <div className="dash-card">
          <h3>{enrolledCourses.length}</h3>
          <p>Enrolled Courses</p>
        </div>

        <div className="dash-card">
          <h3>{certs.length}</h3>
          <p>Certificates Earned</p>
        </div>

      </div>

    </div>

  );

}