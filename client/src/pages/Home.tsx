import React from "react";
import { Link } from "react-router-dom";
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-pink-600">Mimi’s Sweets</h1>
          <ul className="flex space-x-6">
            <li>
                <Link to="/" className="hover:text-pink-500 font-medium">Home</Link>
            </li>
            <li>
                <Link to="/order" className="hover:text-pink-500 font-medium">Order Now</Link>
            </li>
            <li>
                <Link to="/menu" className="hover:text-pink-500 font-medium">Menu</Link>
            </li>
            <li>
                <Link to="/about" className="hover:text-pink-500 font-medium">About Mimi</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-4">
          Satisfying Every Sweet Tooth 
        </h2>
      </section>
    </div>
  );
};

export default HomePage;
