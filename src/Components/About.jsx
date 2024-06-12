// src/components/About.js
import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>Welcome to ONIO</h1>
      <div className="about-box">
        <p>
          At ONIO, we believe that quality and affordability should go hand in hand. Our brand name, ONIO, is inspired by the layers of an onion, symbolizing the multifaceted nature of shopping. Just as an onion reveals layer after layer, we strive to uncover the best deals and discounts for our customers, ensuring that every shopping experience is a delightful discovery.
        </p>
      </div>
      <div className="about-box">
        <h2>What Does ONIO Stand For?</h2>
        <p>
          <strong>O</strong>utstanding Quality: We handpick every item in our store to ensure it meets the highest standards of quality, because our customers deserve nothing but the best.<br />
          <strong>N</strong>ever Overpriced: We are committed to offering competitive prices on all our products, making sure you get the best value for your money.<br />
          <strong>I</strong>ncredible Savings: At the heart of ONIO lies our mission to bring you unbeatable discounts and deals, helping you save more on every purchase.<br />
          <strong>O</strong>ptimal Shopping Experience: We aim to provide a seamless and enjoyable shopping experience, from browsing our extensive range of products to the convenience of fast and reliable delivery.
        </p>
      </div>
      <div className="about-box">
        <h2>Our Mission</h2>
        <p>
          Our goal is simple: to make high-quality products accessible to everyone at discounted prices. We understand that savvy shoppers want more for less, and that's exactly what ONIO delivers. By partnering directly with manufacturers and cutting out the middleman, we pass the savings on to you, our valued customer.
        </p>
      </div>
      <div className="about-box">
        <h2>Why Shop with ONIO?</h2>
        <ul>
          <li>Unmatched Discounts: Our unique pricing strategy ensures that you always get the best deals available. From flash sales to exclusive member discounts, saving money has never been easier.</li>
          <li>Wide Selection: Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or beauty products, ONIO has something for everyone.</li>
          <li>Customer-Centric Approach: We prioritize your satisfaction above all else. Our customer support team is always ready to assist you with any questions or concerns.</li>
          <li>Sustainable Practices: We are committed to sustainability and strive to minimize our environmental footprint. From eco-friendly packaging to responsible sourcing, we take steps to protect our planet.</li>
        </ul>
      </div>
      <div className="about-box">
        <h2>Join the ONIO Community</h2>
        <p>
          Become part of the ONIO family and start enjoying the benefits of shopping smart. Sign up for our newsletter to receive updates on the latest deals, new arrivals, and exclusive promotions. Follow us on social media to stay connected and be the first to know about our exciting offers.
        </p>
      </div>
      <div className="about-box">
        <h2>Shop Smart, Shop ONIO</h2>
        <p>
          Discover the joy of finding great products at fantastic prices. At ONIO, we peel back the layers of traditional retail to bring you a shopping experience that is both rewarding and enjoyable. Welcome to a new era of affordable luxury. Welcome to ONIO.
        </p>
      </div>
    </div>
  );
};

export default About;