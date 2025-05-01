import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">E-Commerce</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="/category" className="hover:text-gray-300">Categories</a></li>
              <li><a href="/detail" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-200">
        <img src="https://via.placeholder.com/1920x600" alt="Hero" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h2 className="text-5xl font-extrabold mb-4">Discover Your Style</h2>
          <p className="text-lg mb-6">Shop the latest trends and timeless classics.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Start Shopping
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto py-12">
        
        <Link href="/detail">
        <h3 className="text-3xl font-bold mb-8 text-center">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Card */}
          <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
            <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover mb-4 rounded" />
            <h4 className="text-lg font-semibold">Product Name</h4>
            <p className="text-gray-600">$99.99</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
          {/* Repeat Product Card */}
          {/* ... */}
        </div>
        </Link>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 E-Commerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default page;
