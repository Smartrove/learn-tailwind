import React from "react";
import imageOne from "../assets/stew.jpg";
// import "../input.css";
const LandingPage = () => {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1 className="font-bold uppercase border-b border-gray-100">
              <a
                href="/"
                className="text-green-500 sm:text-red-500 lg:text-blue-500 xl:text-purple-500 p-4 font-def"
              >
                Order App
              </a>
            </h1>
          </div>
          <ul>
            <li className="font-bold">
              <a href="#">
                <span className="text-gray-600">Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span className="text-gray-600">About</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span className="text-gray-600">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="px-16 py-6 bg-gray-100">
        <div className="flex justify-center md:justify-end">
          <a href="#login" className="text-red-400">
            Login
          </a>
          <a href="#signup" className="text-red-400 ml-4">
            Sign up
          </a>
        </div>

        {/* <div className="flex items-end">
          <div className="bg-red-500 h-4 w-6"></div>
          <div className="bg-blue-500 h-8 w-6"></div>
          <div className="bg-green-500 h-12 w-6"></div>
        </div> */}

        <header>
          <h2 className="text-gray-600 text-6xl font-semibold">Recipes</h2>
          <h2
            className="text-gray-600 text-2xl font-semibold
          "
          >
            For Order
          </h2>
        </header>

        <div className="mt-8">
          <h4 className="text-gray-600 font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div className="mt-8 bg-white rounded overflow-hidden shadow-md">
            <img
              src={imageOne}
              alt=""
              className="w-full h-32 sm:h-48 object-cover"
            />

            <div className="m-4">
              <span className="text-gray-600 font-bold">
                5 Bean Chilli Stew
              </span>
              <span className="text-gray-600 block text-sm">
                Recipe by special
              </span>
            </div>
          </div>

          <h4 className="text-gray-600 font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>
          <div className="mt-8">{/* card goes here  */}</div>

          <div className="flex justify-center">
            <div className="text-gray-600 bg-gray-100">Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
