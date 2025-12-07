import React, { useState } from "react";
import { Heart } from "lucide-react";
import "../css/ProductCard.css";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ img, title, price, discountPrice, rating,id }) => {
  const [wish, setWish] = useState(false);
  const navigate = useNavigate();

  const openDetails = () => {
    navigate(`/product/${id}`);
  };

  // Calculate discount percentage
  const discountPercent = Math.round(((price - discountPrice) / price) * 100);

  return (
    <div className="col-md-3 mb-4">
      <div className="product-card shadow-sm p-3 rounded text-center h-100 hover-zoom"
     onClick={openDetails} style={{ cursor: "pointer" }}>

        {/* Wishlist Icon */}
        <div className="wishlist-icon"onClick={(e) => { e.stopPropagation(); setWish(!wish);}}>
          <Heart color={wish ? "red" : "#555"} fill={wish ? "red" : "none"} />
        </div>

        {/* Product Image */}
        <div className="img-box">
          <img src={img} alt={title} className="product-img" />
        </div>

        {/* Title */}
        <h5 className="product-title fw-bold mt-3 text-truncate">{title}</h5>

        {/* ⭐ Rating */}
        <div className="rating mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < Math.round(rating) ? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>

        {/* 💰 Discount + Price */}
        <p className="m-0">
          <span className="fw-bold text-success fs-5">₹{discountPrice}</span>
          <span className="text-muted ms-2 text-decoration-line-through">₹{price}</span>
          <span className="badge bg-danger ms-2">{discountPercent}% OFF</span>
        </p>

        {/* Button */}
        <button className="btn btn-primary w-100 mt-3">
          🛒 Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
