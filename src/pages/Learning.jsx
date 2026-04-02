import { useParams } from "react-router-dom";
import { useState } from "react";
import learningData from "../data/learningData";
import * as CricketLessons from "../lessons/cricket";
import "../styles/learning.css";

export default function Learning(){

  const { courseId } = useParams();

  const course = learningData[courseId];

  const [mode,setMode] = useState("theory");
  const [lesson,setLesson] = useState(null);

  if(!course){
    return <h2>Course not found</h2>;
  }

  /* Load theory component dynamically */

  let LessonComponent = null;

  if(mode === "theory" && lesson){
    LessonComponent = CricketLessons[lesson.theoryComponent];
  }

  return(

    <div className="learning-page">

      {/* SIDEBAR */}

      <aside className="learning-sidebar">

        {course.modules.map((module)=>(

          <div key={module.id} className="module">

            <h3>{module.title}</h3>

            {module.lessons.map((l)=>(

              <button
                key={l.id}
                className={lesson?.id === l.id ? "active-lesson" : ""}
                onClick={()=>setLesson(l)}
              >
                {l.id} {l.title}
              </button>

            ))}

          </div>

        ))}

      </aside>


      {/* MAIN */}

      <main className="learning-main">

        {/* TOGGLE */}

        <div className="learning-toggle">

          <button
            className={mode==="theory" ? "active":""}
            onClick={()=>setMode("theory")}
          >
            Theory
          </button>

          <button
            className={mode==="practical" ? "active":""}
            onClick={()=>setMode("practical")}
          >
            Practical
          </button>

        </div>


        {/* CONTENT */}

        <div className="learning-content">

          {!lesson && <p>Select a lesson</p>}

          {lesson && mode === "practical" && (

            <iframe
              src={`https://www.youtube.com/embed/${lesson.practicalVideo}`}
              title={lesson.title}
              allowFullScreen
            />

          )}

          {lesson && mode === "theory" && LessonComponent && (

            <LessonComponent />

          )}

        </div>

      </main>

    </div>

  );

}