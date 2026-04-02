import "../styles/feedback.css";

export default function Feedback() {
  return (
    <div>

      {/* HERO */}
      <section className="feedback-hero">
        <h1>We Value Your Feedback</h1>
        <p>Help us improve your PlayTrain experience</p>
      </section>

      {/* FEEDBACK FORM */}
      <section className="feedback-section">

        <form className="feedback-form">

          <h2>Share Your Thoughts</h2>

          <div className="form-group">
            <input type="text" required />
            <label>Your Name</label>
          </div>

          <div className="form-group">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="rating-group">
            <p>Overall Experience</p>
            <div className="stars">

              <input type="radio" name="rating" id="star5" />
              <label htmlFor="star5"><i className="fa-solid fa-star"></i></label>

              <input type="radio" name="rating" id="star4" />
              <label htmlFor="star4"><i className="fa-solid fa-star"></i></label>

              <input type="radio" name="rating" id="star3" />
              <label htmlFor="star3"><i className="fa-solid fa-star"></i></label>

              <input type="radio" name="rating" id="star2" />
              <label htmlFor="star2"><i className="fa-solid fa-star"></i></label>

              <input type="radio" name="rating" id="star1" />
              <label htmlFor="star1"><i className="fa-solid fa-star"></i></label>

            </div>
          </div>

          <div className="form-group">
            <textarea rows="4" required></textarea>
            <label>Your Feedback</label>
          </div>

          <button type="submit" className="feedback-btn">
            Submit Feedback
            <span></span>
          </button>

          <p className="form-note">
            Your feedback helps us train better athletes.
          </p>

        </form>

      </section>

      <footer className="footer">
        <p>© 2026 PlayTrain. All rights reserved.</p>
        <p className="footer-credit">Designed & Developed by Sakrit Kafle</p>
      </footer>

    </div>
  );
}