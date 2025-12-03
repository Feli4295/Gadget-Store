import "../styles/contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact-wrapper">

        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            Have a question about buying or selling a gadget?  
            Reach out — we respond fast and reliably.
          </p>

          <div className="info-box">
            <h4>Email</h4>
            <p>support@gadgethub.store</p>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <p>+234 813 456 7890</p>
          </div>

          <div className="info-box">
            <h4>Location</h4>
            <p>Port Harcourt, Nigeria</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form">
          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea required></textarea>
            <label>Message</label>
          </div>

          <button className="btn contact-btn">Send Message</button>
        </form>

      </div>
    </section>
  );
}
