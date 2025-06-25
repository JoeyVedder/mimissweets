import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="bg-pink-50 min-h-screen flex flex-col items-center justify-between">
      {/* Header */}
      <header className="w-full bg-pink-100 py-6 shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-pink-700">
          Mimi’s Sweets
        </h1>
        <p className="text-center text-pink-500 text-lg mt-2">
          Sweetening Life One Bite at a Time 🍰
        </p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6 text-pink-700 font-medium">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/menu" className="hover:text-pink-500">Menu</Link></li>
            <li><Link to="/order" className="hover:text-pink-500">Order Now</Link></li>
            <li><Link to="/about" className="hover:text-pink-500">About Me</Link></li>
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-700 mb-6">
          Handcrafted Treats, Baked With Love
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          From custom cupcakes to gluten-free delights, Mimi’s Sweets brings joy to every bite.
        </p>
      </section>

      {/* Quick Links */}
      <section className="flex flex-col md:flex-row gap-6 py-10">
        <Link
          to="/menu"
          className="bg-white border border-pink-300 text-pink-700 px-6 py-3 rounded-full shadow hover:bg-pink-100 transition"
        >
          View Our Menu
        </Link>
        <Link
          to="/order"
          className="bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700 transition"
        >
          Place an Order
        </Link>
      </section>
    </main>
  );
};

export default Home;
