// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-600">MultiShop</h1>
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/shop" className="hover:text-indigo-600">Shop</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          </nav>
          <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Login
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Welcome to MultiShop</h2>
        <p className="mb-6">One platform, many roles: Customers, Wholesalers, Business Owners, and Service Providers</p>
        <Link to="/login" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </Link>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-12">
        <h3 className="text-2xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <div key={item} className="bg-white shadow p-4 rounded-lg">
              <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="font-semibold">Sample Product {item}</h4>
              <p className="text-gray-600">$29.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 MultiShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
