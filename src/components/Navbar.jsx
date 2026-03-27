import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link nav-link--active" : "nav-link";

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-leaf">🌿</span>
          <span className="navbar__logo-text">
            Sanjivani<em>Ayurveda</em>
          </span>
        </NavLink>

        {/* Desktop links */}
        <nav className="navbar__links">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className={getLinkClass} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Cart + Hamburger */}
        <div className="navbar__actions">
          <NavLink to="/cart" className="navbar__cart" aria-label="Cart">
            <CartIcon />
            <span className="navbar__cart-badge">0</span>
          </NavLink>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={getLinkClass}
            end={to === "/"}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <NavLink to="/cart" className="nav-link" onClick={() => setMenuOpen(false)}>
          Cart
        </NavLink>
      </div>
    </header>
  );
}
