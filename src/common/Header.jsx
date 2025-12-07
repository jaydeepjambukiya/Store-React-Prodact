import React from "react";
import { Store, ShoppingCart } from "lucide-react";
import "../css/Header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm custom-navbar">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center brand" href="#">
            <Store size={32} className="brand-icon" />
            <span className="ms-2 fw-bold">E-Shop</span>
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">
              <li className="nav-item">
                <a className="nav-link cool-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link cool-link" href="#">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link cool-link" href="#">
                  About
                </a>
              </li>

              {/* Cart Icon */}
              <li className="nav-item cart-icon-wrapper">
                <ShoppingCart size={28} className="cart-icon" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
