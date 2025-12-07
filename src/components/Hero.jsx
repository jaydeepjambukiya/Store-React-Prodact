import React from "react";
import "../css/Hero.css";

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="container text-center">
        <h1 className="hero-title">Shop Smart, Shop Fast</h1>
        <p className="hero-subtitle">
          Discover the best deals on top-quality products.
        </p>
        <button className="btn btn-primary hero-btn">Shop Now</button>
      </div>
    </header>
  );
};

export default Hero;
