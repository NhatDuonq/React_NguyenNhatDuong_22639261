import '../styles/Footer.css'; // Assuming you'll create a corresponding CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about-section">
          <h5 className="footer-title">About Us</h5>
          <p className="footer-text">
            Welcome to Chefify, your go-to place to explore and master culinary arts.
          </p>
          <div className="newsletter">
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email" 
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="footer-section nav-section">
          <h5 className="footer-title">Learn More</h5>
          <nav className="footer-links">
            <a href="#" className="footer-link">Our Cooks</a>
            <a href="#" className="footer-link">Features</a>
            <a href="#" className="footer-link">FAQ</a>
          </nav>
        </div>

        <div className="footer-section nav-section">
          <h5 className="footer-title">Shop</h5>
          <nav className="footer-links">
            <a href="#" className="footer-link">Gift Subscription</a>
            <a href="#" className="footer-link">Send Feedback</a>
          </nav>
        </div>

        <div className="footer-section recipe-section">
          <h5 className="footer-title">Recipes</h5>
          <nav className="footer-links">
            <a href="#" className="footer-link">What to Cook</a>
            <a href="#" className="footer-link">Pasta</a>
            <a href="#" className="footer-link">Dinner</a>
            <a href="#" className="footer-link">Healthy</a>
            <a href="#" className="footer-link">Vegetarian</a>
            <a href="#" className="footer-link">Vegan</a>
            <a href="#" className="footer-link">Occasions</a>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="logo">
          <img 
            src="../img/Screenshot 2025-02-26 155851.png" 
            alt="Chefify Logo" 
            className="logo-img" 
          />
          <span className="logo-text">Chefify</span>
        </div>
        <span className="copyright">© 2025 Chefify Company</span>
        <div className="legal-links">
          <a href="#" className="legal-link">Terms of Service</a>
          <span> | </span>
          <a href="#" className="legal-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}