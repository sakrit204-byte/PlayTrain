import "../styles/about.css";

export default function About() {
  return (
    <div>

      {/* HERO */}
      <section className="about-hero">
        <h1>About PlayTrain</h1>
        <p>Where discipline meets performance.</p>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            PlayTrain was created with a simple belief — great athletes are built
            through structured training, consistency, and the right guidance.
            We aim to bridge the gap between passion and professional sports training
            by making expert-led programs accessible to everyone.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2>What Drives Us</h2>

        <div className="values-grid">

          <div className="value-card">
            <i className="fa-solid fa-bullseye"></i>
            <h3>Purpose</h3>
            <p>Every program is designed with clear performance goals.</p>
          </div>

          <div className="value-card">
            <i className="fa-solid fa-dumbbell"></i>
            <h3>Discipline</h3>
            <p>Training systems rooted in consistency and structure.</p>
          </div>

          <div className="value-card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Growth</h3>
            <p>Continuous improvement through tracking and feedback.</p>
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          To become a trusted digital platform for sports education and training,
          empowering athletes across all levels to train smarter and perform better.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 PlayTrain. All rights reserved.</p>
        <p className="footer-credit">Designed & Developed by Sakrit Kafle</p>
      </footer>

    </div>
  );
}