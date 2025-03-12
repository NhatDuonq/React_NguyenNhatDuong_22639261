export default function Header() {
  return (
    <header className="flex items-center justify-between p-3 bg-white shadow-md w-full fixed top-0 left-0 z-[1000] max-w-screen-2xl mx-auto">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img
          src="../img/Screenshot 2025-02-26 155851.png"
          alt="Chefify Logo"
          className="h-8 mr-2"
        />
        <span className="text-xl font-bold text-pink-500">Chefify</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xs mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-full outline-none focus:border-pink-500"
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-3 flex-1 justify-center">
        <a href="#" className="text-gray-600 text-base hover:text-pink-500">
          What to cook
        </a>
        <a href="#" className="text-gray-600 text-base hover:text-pink-500">
          Recipes
        </a>
        <a href="#" className="text-gray-600 text-base hover:text-pink-500">
          Ingredients
        </a>
        <a href="#" className="text-gray-600 text-base hover:text-pink-500">
          Occasions
        </a>
        <a href="#" className="text-gray-600 text-base hover:text-pink-500">
          About Us
        </a>
      </nav>

      {/* Profile Section */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <button className="flex items-center px-3 py-1.5 bg-pink-100 text-pink-500 border-none rounded-full cursor-pointer text-sm">
          📋 <span className="ml-1">Your Recipe Box</span>
        </button>
        <img
          src="../img/Screenshot 2025-02-26 155745.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}