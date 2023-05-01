import React from "react";
import imageOne from "../assets/stew.jpg";
// import "../input.css";
const LandingPage = () => {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1 className="font-bold uppercase">
              <a href="/" className="text-gray-600">
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
      <main>
        <div>
          <a href="#login" className="text-gray-600">
            Login
          </a>
          <a href="#signup" className="text-gray-600">
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-600 text-6xl font-semibold">Recipes</h2>
          <h2
            className="text-gray-600 text-2xl font-semibold
          "
          >
            For Order
          </h2>
        </header>

        <div>
          <h4 className="text-gray-600 font-bold">Latest Recipes</h4>

          <div>
            <img src={imageOne} alt="" />

            <div>
              <span className="text-gray-600">5 Bean Chilli Stew</span>
              <span className="text-gray-600">Recipe by special</span>
            </div>
          </div>

          <h4 className="text-gray-600 font-bold">Most Popular</h4>
          <div>{/* card goes here  */}</div>

          <div>
            <div className="text-gray-600">Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
