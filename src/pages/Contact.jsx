import "../styles/contact.css";

export default function Contact() {
  return (
    <>
    <br /><br /><br /><br /><br /><br /><br />
    <div>

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help you train smarter.</p>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">

        <div className="info-card">
          <i className="fa-solid fa-envelope"></i>
          <h3>Email</h3>
          <p>support@playtrain.com</p>
        </div>

        <div className="info-card">
          <i className="fa-solid fa-phone"></i>
          <h3>Phone</h3>
          <p>+91 8610608853</p>
        </div>

        <div className="info-card map-card">
          <i className="fa-solid fa-location-dot"></i>
          <h3>Location</h3>
          <p>India / Nepal</p>

          <div className="map-popup">
            <iframe
              src="https://maps.google.com/maps?q=vit%20vellore&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="map"
            ></iframe>
          </div>
        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">

        <form className="contact-form">

          <h2>Send us a message</h2>

          <div className="form-group">
            <input type="text" required />
            <label>Your Name</label>
          </div>

          <div className="form-group">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="form-group">
            <textarea rows="4" required></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
            <span></span>
          </button>

          <p className="form-note">
            We usually reply within 24 hours.
          </p>

        </form>

      </section>

      <footer className="footer">
        <p>© 2026 PlayTrain. All rights reserved.</p>
        <p className="footer-credit">Designed & Developed by Sakrit Kafle</p>
      </footer>

    </div>
  </>);
}