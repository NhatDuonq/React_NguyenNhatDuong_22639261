// Navbar.jsx
import React from 'react';
//import '../styles/Navbar.css'; // Assuming you'll put the CSS in a separate file
import '../styles/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src="../Lab2/img/Screenshot 2025-02-26 155851.png" 
            alt="Logo" 
            className="profile-img ms-3"
          />
          <strong style={{ color: 'rgb(233, 99, 142)' }}>Chefify</strong>
        </a>

        {/* Search Form */}
        <form className="d-flex mx-auto">
          <div className="search-box d-flex align-items-center">
            <i className="bi bi-search me-2"></i>
            <input 
              className="form-control border-0 bg-transparent" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
            />
          </div>
        </form>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">What to cook</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ingredients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Occasions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
          </ul>
        </div>

        {/* Recipe Box and Profile */}
        <div className="d-flex align-items-center">
          <button className="recipe-box border-0">📋 Your Recipe Box</button>
          <img 
            src="../Lab2/img/Screenshot 2025-02-26 155745.png" 
            alt="User" 
            className="profile-img ms-3"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;