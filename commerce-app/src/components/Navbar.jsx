// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          E-Shop
        </Link>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
          <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
          <Link to="/role-selection" className="text-gray-600 hover:text-indigo-600">Roles</Link>
        </div>

        {/* Auth Buttons (optional) */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
