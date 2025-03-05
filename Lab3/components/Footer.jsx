function Footer() {
    return (
      <footer className="bg-dark text-white py-5" style={{ minWidth: '1200px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h5>About Us</h5>
              <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-pink">Send</button>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-3 mb-4">
              <h5>Learn More</h5>
              <ul className="list-unstyled">
                <li><a href="#">Our Cooks</a></li>
                <li><a href="#">See Our Features</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
  
            <div className="col-lg-2 col-md-3 mb-4">
              <h5>Shop</h5>
              <ul className="list-unstyled">
                <li><a href="#">Gift Subscription</a></li>
                <li><a href="#">Send Us Feedback</a></li>
              </ul>
            </div>
  
            <div className="col-lg-4 col-md-6 mb-4">
              <h5>Recipes</h5>
              <ul className="list-unstyled">
                <li><a href="#">What to Cook This Week</a></li>
                <li><a href="#">Pasta</a></li>
                <li><a href="#">Dinner</a></li>
                <li><a href="#">Healthy</a></li>
                <li><a href="#">Vegetarian</a></li>
                <li><a href="#">Vegan</a></li>
                <li><a href="#">Christmas</a></li>
              </ul>
            </div>
          </div>
  
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex align-items-center">
              <img
               // src="/img/Screenshot 2025-02-26 161332.png"
                alt="Chefify Logo"
                style={{ width: '40px', height: '40px' }}
              />
              <span className="ms-2 fw-bold">Chefify</span>
            </div>
            <p className="mb-0">2023 Chefify Company</p>
            <p className="mb-0">
              <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;