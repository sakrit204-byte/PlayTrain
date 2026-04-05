import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import courses from "../data/courses";
import "../styles/certificate.css";

export default function Certificate() {

  const { id } = useParams();

  const course = courses.find(c => c.id === id);

  // safe JSON parser (prevents crashes)
  const safeParse = (data, fallback) => {
    try {
      return JSON.parse(data);
    } catch {
      return fallback;
    }
  };

  //  GET USER FROM COOKIE
  const user = safeParse(Cookies.get("currentUser"), null);
  const userName = user?.username || "";

  //  GET CERTIFICATIONS FROM COOKIE
  const certifications = safeParse(Cookies.get("certifications"), {});
  const cert = certifications[id];

  const today = cert?.issued || new Date().toLocaleDateString();

  if (!course) {
    return <p style={{ color: "white" }}>Certificate not found</p>;
  }

  /* GET FIRST INSTRUCTOR NAME */
  const instructor =
    course?.authorName
      ? course.authorName.split(/,|\||&/)[0].trim()
      : "PlayTrain Instructor";

  return (
    <div className="certificate-page">

      <div className="certificate">

        <div className="certificate-border">

          <h1 className="certificate-title">
            Certificate of Achievement
          </h1>

          <p className="certificate-subtitle">
            This certificate is proudly presented to
          </p>

          <h2 className="certificate-name">
            {userName}
          </h2>

          <p className="certificate-text">
            for successfully completing the assessment
          </p>

          <h2 className="certificate-course">
            {course.title}
          </h2>

          <p className="certificate-text">
            Issued on {today}
          </p>

          {cert && (
            <p className="certificate-id">
              Certificate ID: {cert.certId}
            </p>
          )}

          {/* FOOTER */}
          <div className="certificate-footer">

            {/* INSTRUCTOR */}
            <div className="signature">
              <div className="line"></div>
              <p>{instructor}</p>
              <span className="signature-role">
                Course Instructor
              </span>
            </div>

            {/* SEAL */}
            <div className="seal">
              CERTIFIED
            </div>

            {/* DIRECTOR */}
            <div className="signature">
              <div className="line"></div>
              <p>PlayTrain Academy</p>
              <span className="signature-role">
                Program Director
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}