import React from "react";
import imageOne from "../assets/stew.jpg";

const LandingPage = () => {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">Order App</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div>
          <a href="#login" Login></a>
          <a href="#signup" Sign up></a>
        </div>

        <header>
          <h2>Recipes</h2>
          <h2>For Order</h2>
        </header>

        <div>
          <h4>Latest Recipes</h4>

          <div>
            <img src={imageOne} alt="" />

            <div>
              <span>5 Bean Chilli Stew</span>
              <span>Recipe by special</span>
            </div>
          </div>

          <h4>Most Popular</h4>
          <div>{/* card goes here  */}</div>

          <div>
            <div>Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
