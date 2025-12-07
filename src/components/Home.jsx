import React from "react";
import Hero from "./Hero";
import ProdatList from "./ProdatList";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="container mt-5">
        <h2 className="mb-4 fw-bold">Featured Products</h2>
        <div className="row g-4">
         <ProdatList/>
        </div>
      </div>
    </>
  );
};

export default Home;
