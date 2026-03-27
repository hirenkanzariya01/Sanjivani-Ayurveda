import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home.jsx'
import Products from './pages/Product.jsx'
import "./styles.css";

// Page placeholders — replace with your actual page components
const Page = ({ title, subtitle }) => (
  <main className="page-content">
    <div className="page-hero">
      <span className="page-eyebrow">Sanjivani Ayurveda</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </main>
);

const About = () => (
  <Page
    title="Our Story"
    subtitle="Born from a deep reverence for nature and Ayurvedic science."
  />
);
const Contact = () => (
  <Page title="Contact Us" subtitle="We'd love to hear from you." />
);
const Cart = () => (
  <Page title="Your Cart" subtitle="Review your selected items." />
);

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  );
}
