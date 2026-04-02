import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import courses from "../data/courses";
import "../styles/enroll.css";

export default function Enroll(){

const { slug, type } = useParams();
const navigate = useNavigate();

const course = courses.find(c => c.slug === slug);

function handleEnroll(){

const user = JSON.parse(localStorage.getItem("currentUser"));

if(!user){
alert("Please login first");
return;
}

const userEmail = user.email;

let enrollments =
JSON.parse(localStorage.getItem("enrollments")) || {};

if(!enrollments[userEmail]){
enrollments[userEmail] = [];
}

const alreadyEnrolled = enrollments[userEmail].some(
(e) => e.course === slug
);

if(!alreadyEnrolled){
enrollments[userEmail].push({
course: slug,
type: type
});
}

localStorage.setItem(
"enrollments",
JSON.stringify(enrollments)
);

navigate(`/learn/${course.id}`);
}

return(

<div className="enroll-page">

<div className="enroll-card">

<img src={course.image} alt={course.title}/>

<p>Enroll ({type})</p>
<p>Access type : Lifetime</p>
<p>Certification : On Quiz Completion</p>

<button onClick={handleEnroll}>
ENROLL
</button>

</div>

</div>

);
}