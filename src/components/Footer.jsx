import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__logo">🌿 Sanjivani Ayurveda</span>
          <p className="footer__tagline">
            Rooted in tradition. Crafted for life.
          </p>
        </div>

        {/* Links */}
        <div className="footer__col">
          <h4>Explore</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer__col">
          <h4>Support</h4>
          <a href="#">FAQ</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer__col">
          <h4>Connect</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">WhatsApp</a>
          <a href="#">Email Us</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Sanjivani Ayurveda. All rights reserved.</p>
        <p>Made with 🌿 in India</p>
      </div>
    </footer>
  );
}
