// import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const LandingPage = () => (
  <div
    className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
  style={{
    width: "100%",
    overflow: "hidden",
    backgroundImage: "url('/images/background.jpg')",
  }}
>
    <Header />
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Tropical Garden</h1>
      <div class="text-lg mx-auto mb-10 w-1/3 item-center justify-center">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Your ultimate destination for vibrant tropical plants! Discover our lush selection of exotic greenery that transforms any space into a tropical oasis. Whether you're a seasoned plant enthusiast or a budding gardener, our curated collection offers something for everyone. Dive into the beauty of nature and bring the tropics home today!</p>
      </div>
      {/* <p className="text-xl mb-8">Your one-stop shop for the best houseplants.</p> */}
      <Link to="/products" className="bg-green-600 font-semibold text-white px-4 py-2 rounded hover:bg-green-700 hover:text-white">Get Started</Link>
    </div>
  </div>
);

export default LandingPage;