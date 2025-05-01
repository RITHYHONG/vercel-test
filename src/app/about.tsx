import React from 'react';

const About = () => {
  return (
    <div className="font-sans">
      <header className="bg-gray-900 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-extrabold text-center">About Us</h1>
      </header>
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are a leading e-commerce platform dedicated to bringing you the best products at the best prices.
        </p>
        <img src="https://via.placeholder.com/800x400" alt="About Us" className="mx-auto rounded-lg shadow-lg" />
      </section>
    </div>
  );
};

export default About;
