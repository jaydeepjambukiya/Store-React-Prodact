import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../deta/Prodact";
import "../css/ProdactDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="container py-5 product-detail-page">
      
      {/* Breadcrumb */}
      <p className="breadcrumb">
        Home / Products / <span>{product.name}</span>
      </p>

      {/* Main Box */}
      <div className="container main-box">
        <div className="row">
          
          {/* Image Section */}
          <div className="col-md-6 gallery-section">
            <img
              src={product.image}
              alt={product.name}
              className="main-image"
            />
          </div>

          {/* Info Section */}
          <div className="col-md-6 info-section">
            <h2 className="title">{product.name}</h2>

            <p className="price-box">
              ₹{product.discountPrice}
              <span>₹{product.price}</span>
            </p>

            <p className="rating-box">{product.rating} ⭐</p>

            <p className="description">{product.description}</p>

            <button className="btn-cart">
              <span className="btn-text">🛒 Add to Cart</span>
              <span className="btn-done">✔ Added</span>
            </button>

            {/* Key Features */}
            <div className="key-features">
              <h5>Key Features:</h5>
              <ul>
                <li>High Quality</li>
                <li>1-Year Warranty</li>
                <li>Fast Delivery Available</li>
              </ul>
            </div>

            {/* Offer Box */}
            <div className="offer-box">
              <strong>Available Offers:</strong>
              <p>• 10% Instant Discount on SBI Cards</p>
              <p>• No Cost EMI Available</p>
            </div>
          </div>

        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <h3>Customer Reviews</h3>
        <div className="review-card">
          <strong>Jaydeep</strong>
          <p>Very good product, highly recommended!</p>
        </div>
        <div className="review-card">
          <strong>Rohan</strong>
          <p>Quality is awesome at this price.</p>
        </div>
      </div>

      {/* Related Products */}
      <h3 className="related-title">Related Products</h3>
      <div className="related-row">
        <div className="related-card">
          <img src={product.image} alt="" />
          <p>{product.name}</p>
        </div>

        <div className="related-card">
          <img src={product.image} alt="" />
          <p>{product.name}</p>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
