import React from "react";
import { Store, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3">
      <div className="container">

        <div className="row gy-4">

          {/* LOGO + ABOUT */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center footer-logo">
              <Store size={34} className="footer-logo-icon" />
              <span className="ms-2 fs-4 fw-bold">E-Shop</span>
            </div>
            <p className="mt-3">
              Your one-stop destination for electronics, gadgets, and accessories.
              Shop smart, shop fast!
            </p>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-3 mt-3">
              <Facebook className="social-icon" />
              <Instagram className="social-icon" />
              <Twitter className="social-icon" />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li><MapPin size={18} /> Surat, Gujarat, India</li>
              <li><Phone size={18} /> +91 98765 43210</li>
              <li><Mail size={18} /> support@eshop.com</li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Send Message</h5>
            <form className="footer-form">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-2"
              />
              <textarea
                rows="2"
                placeholder="Your Message"
                className="form-control mb-2"
              ></textarea>
              <button className="btn btn-primary w-100">Send</button>
            </form>
          </div>
        </div>

        {/* COPYRIGHT */}
        <hr className="mt-4" />
        <p className="text-center mt-3 mb-0">
          © {new Date().getFullYear()} E-Shop. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
