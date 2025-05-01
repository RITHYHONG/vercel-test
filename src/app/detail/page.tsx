import React from 'react';

const ProductDetail = () => {
  return (
    <div className="font-sans">
      <header className="bg-gray-900 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-extrabold text-center">Product Detail</h1>
      </header>
      <section className="container mx-auto py-12 flex flex-col md:flex-row items-center">
        <img src="https://via.placeholder.com/400" alt="Product" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0" />
        <div className="md:ml-8">
          <h2 className="text-3xl font-bold mb-4">Product Name</h2>
          <p className="text-lg text-gray-700 mb-4">$99.99</p>
          <p className="text-gray-600 mb-6">
            This is a detailed description of the product. It highlights the features, benefits, and specifications.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
