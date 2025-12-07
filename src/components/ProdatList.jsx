import React from 'react'
import { products } from '../deta/Prodact';
import ProductCard from './ProductCard';

const ProdatList = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">All Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <ProductCard
          key={product.id}
            id={product.id}
            img={product.image}
            title={product.name}
            price={product.price}
            discountPrice={product.discountPrice}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProdatList;
