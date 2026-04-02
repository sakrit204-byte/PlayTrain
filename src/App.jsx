  import { BrowserRouter, Routes, Route } from "react-router-dom";

  import Navbar from "./components/Navbar";
  import Home from "./pages/Home";
  import Courses from "./pages/Courses";
  import CourseDetail from "./pages/CourseDetail";
  import Assessment from "./pages/Assessment";
  import AssessmentStart from "./pages/AssessmentStart";
  import Quiz from "./pages/Quiz";
  import Certificate from "./pages/Certificate";
  import Login from "./pages/Login";
  import Signup from "./pages/Signup";
  import Account from "./pages/Account";
  import Learning from "./pages/Learning";  
  import Enroll from "./pages/enroll";    
  import About from "./pages/About";
  import Contact from "./pages/Contact";
  import Feedback from "./pages/Feedback";
  export default function App() {

    return (

      <BrowserRouter>

        <Navbar />
          <div className="nav-spacer"></div>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/courses/:slug" element={<CourseDetail />} />

          <Route path="/assessment" element={<Assessment />} />

          <Route path="/assessment/start/:id" element={<AssessmentStart />} />

          <Route path="/quiz/:id" element={<Quiz />} />

          <Route path="/certificate/:id" element={<Certificate />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/account" element={<Account />} />

          <Route path="/enroll/:slug/:type" element={<Enroll />} />
          {/* Learning page */}
          <Route path="/learn/:courseId" element={<Learning />} />
          <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/feedback" element={<Feedback />} />

        </Routes>

      </BrowserRouter>

    );
  }