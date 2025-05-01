import React from 'react';

const Categories = () => {
  return (
    <div className="font-sans">
      <header className="bg-gray-900 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-extrabold text-center">Categories</h1>
      </header>
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Category Card */}
          <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
            <img src="https://via.placeholder.com/300" alt="Category" className="w-full h-48 object-cover mb-4 rounded" />
            <h4 className="text-lg font-semibold text-center">Category Name</h4>
          </div>
          {/* Repeat Category Card */}
          {/* ... */}
        </div>
      </section>
    </div>
  );
};

export default Categories;
