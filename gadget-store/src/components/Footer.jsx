// IMPORTANT: You must create a file named Footer.css (or use your main CSS file) 
// and paste the responsive CSS code into it.
import "../styles/footer.css"; 

export default function Footer() {
  return (
    <footer style={styles.footer} className="footer"> {/* Added className="footer" */}
      {/* 1. APPLIED RESPONSIVE CLASS */}
      <div className="footer-container"> 
        
        {/* Brand */}
        {/* 2. APPLIED RESPONSIVE CLASS */}
        <div className="footer-col"> 
          <h2 style={styles.logo}>ChuksGadget</h2>
          <p style={styles.text}>
            Your trusted marketplace for buying and selling quality gadgets.
          </p>
        </div>

        {/* Quick Links */}
        {/* 2. APPLIED RESPONSIVE CLASS */}
        <div className="footer-col"> 
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Home</li>
            <li style={styles.listItem}>Products</li>
            <li style={styles.listItem}>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        {/* 2. APPLIED RESPONSIVE CLASS */}
        <div className="footer-col"> 
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>📞 +234 810 000 0000</p>
          <p style={styles.text}>📧 support@gadgetx.com</p>
          <p style={styles.text}>📍 Lagos, Nigeria</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© {new Date().getFullYear()} GadgetHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  // and moved to the external CSS for responsiveness.
  footer: {
    padding: "50px 20px 20px",
    background: "#0a0a0a",
    color: "white",
    marginTop: "60px", // Margin is kept here but can be overridden by CSS media query
    borderTop: "1px solid #222",
  },
  // container: { REMOVED },
  // col: { REMOVED },
  logo: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#ff8800",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "8px",
    color: "#ff8800",
  },
  text: {
    fontSize: "14px",
    opacity: 0.8,
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  bottomBar: {
    marginTop: "40px",
    borderTop: "1px solid #222",
    paddingTop: "15px",
    textAlign: "center",
  },
  bottomText: {
    fontSize: "13px",
    opacity: 0.6,
  }
};
