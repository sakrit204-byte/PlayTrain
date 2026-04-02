import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { questions } from "../data/questions";
import "../styles/quiz.css";

export default function Quiz() {

const { id } = useParams();
const quizQuestions = questions[id];
const [current, setCurrent] = useState(0);
const [answers, setAnswers] = useState({});
const [time, setTime] = useState(900);

const [finished, setFinished] = useState(false);
const [result, setResult] = useState(null);

  if (!quizQuestions) {
    return <p style={{color:"white"}}>Quiz not found</p>;
  }

  const question = quizQuestions[current];
useEffect(() => {

  const timer = setInterval(() => {
    setTime((t) => t - 1);
  }, 1000);

  return () => clearInterval(timer);

}, []);

useEffect(() => {

  if (time <= 0 && !finished) {
    submitQuiz();
  }

}, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const selectAnswer = (index) => {
    setAnswers({
      ...answers,
      [current]: index
    });
  };

  /* NAVIGATION */
  const next = () => {
    if (current < quizQuestions.length - 1)
      setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0)
      setCurrent(current - 1);
  };

  /* CALCULATE SCORE */
const submitQuiz = () => {

  if (finished) return;

  let score = 0;
  let review = [];

  quizQuestions.forEach((q, i) => {

    const userAnswer = answers[i];

    if (userAnswer === q.answer) score++;

    review.push({
      question: q.question,
      options: q.options,
      correct: q.answer,
      selected: userAnswer
    });

  });

  const passed = score >= quizQuestions.length * 0.6;

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const email = user?.email;

  if (passed && email) {

    const allCertifications =
      JSON.parse(localStorage.getItem("certifications")) || {};

    if (!allCertifications[email]) {
      allCertifications[email] = {};
    }

    allCertifications[email][String(id)] = true;

    localStorage.setItem(
      "certifications",
      JSON.stringify(allCertifications)
    );
  }

  setResult({
    score,
    total: quizQuestions.length,
    review
  });

  setFinished(true);

};
if (finished && result) {

  const passed = result.score >= result.total * 0.3;

  return (

    <div className="result-container">

      <div className="result-header">

        <h1>{id.toUpperCase()} Quiz Result</h1>

        <div className="score-card">

          <h2>{result.score} / {result.total}</h2>

          <p className={passed ? "pass" : "fail"}>
            {passed ? "PASSED" : "FAILED"}
          </p>

        </div>

      </div>


      <div className="review-section">

        {result.review.map((q, i) => {

          let status = "Skipped";
          if (q.selected === q.correct) status = "Correct";
          else if (q.selected !== undefined) status = "Wrong";

          return (

            <div key={i} className="review-card">

              <h3>Question {i + 1}</h3>

              <p className="question-text">
                {q.question}
              </p>

              <div className="options-review">

                {q.options.map((opt, j) => {

                  let className = "option";

                  if (j === q.correct)
                    className += " correct";

                  if (j === q.selected && j !== q.correct)
                    className += " wrong";

                  return (
                    <div key={j} className={className}>
                      {String.fromCharCode(65 + j)}. {opt}
                    </div>
                  );

                })}

              </div>

              <div className={`status ${status.toLowerCase()}`}>
                {status}
              </div>

            </div>

          );

        })}

      </div>


      {/* ACTION BUTTONS */}

      <div className="result-actions">

        {passed ? (

   <Link
  to={`/certificate/${id}`}
  className="primary"
>
  View Certificate
</Link>
        ) : (

          <button
            className="secondary"
            onClick={() => window.location.reload()}
          >
            Retry Quiz
          </button>

        )}

      </div>


    </div>

  );

}

  return (<>
  <br /><br /> <br />
    <div className="assessment-wrapper">

      {/* HEADER */}

      <header className="assessment-header">
        <h2>{id.toUpperCase()} Quiz</h2>

        <div className="timer">
          ⏱ {minutes}:{seconds.toString().padStart(2,"0")}
        </div>
      </header>


      <div className="assessment-body">

        {/* SIDEBAR */}

        <aside className="assessment-sidebar">

          <h3>Questions Grid</h3>

          <div className="question-grid">

            {quizQuestions.map((_, i) => {

              let className = "q";

              if (answers[i] !== undefined)
                className += " done";

              if (i === current)
                className += " active";

              return (
                <span
                  key={i}
                  className={className}
                  onClick={() => setCurrent(i)}
                >
                  {i + 1}
                </span>
              );
            })}

          </div>

          <p className="total">
            Total Questions: {quizQuestions.length}
          </p>

        </aside>


        {/* MAIN QUESTION */}

        <main className="assessment-main">

          <div className="question-card">

            <div className="question-header">
              <h2>Question {current + 1}</h2>
            </div>

            <p className="question-text">
              {question.question}
            </p>

            <div className="options">

              {question.options.map((opt, i) => (

                <label key={i}>

                  <input
                    type="radio"
                    name="option"
                    checked={answers[current] === i}
                    onChange={() => selectAnswer(i)}
                  />

                  {opt}

                </label>

              ))}

            </div>


            <div className="navigation">

              <button
                className="secondary"
                onClick={prev}
              >
                Previous
              </button>

              {current === quizQuestions.length - 1 ? (

                <button
                  className="primary"
                  onClick={submitQuiz}
                >
                  Submit Quiz
                </button>

              ) : (

                <button
                  className="primary"
                  onClick={next}
                >
                  Save & Next
                </button>

              )}

            </div>

          </div>

        </main>

      </div>

    </div>
    </>
  );
}