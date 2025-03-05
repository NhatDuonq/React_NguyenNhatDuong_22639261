import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="../img/Screenshot 2025-02-26 155851.png" alt="Chefify Logo" className="logo-img" />
        <span className="logo-text">Chefify</span>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </nav>

      {/* Profile Section */}
      <div className="profile-section">
        <button className="recipe-box">
          📋 <span>Your Recipe Box</span>
        </button>
        <img src="../img/Screenshot 2025-02-26 155745.png" alt="User Avatar" className="avatar" />
      </div>
    </header>
  );
}
