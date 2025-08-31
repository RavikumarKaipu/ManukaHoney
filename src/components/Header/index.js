import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header-container">
      {/* Left Button */}
      <button className="header-btn">WHICH MANUKA IS FOR ME?</button>

      {/* Left Navigation */}
      <nav className="header-nav">
        <a href="#">Shop</a>
        <a href="#">Explore</a>
      </nav>

      {/* Logo */}
      <div className="header-logo">
        <img
          src="IG-2/ig25.png"
          alt="logo"
          className="logo-icon"
        />
        <span>
          NEW ZEALAND
          <br />
          HONEY CO.
        </span>
      </div>

      {/* Right Navigation */}
      <nav className="header-nav">
        <a href="#">About</a>
        <a href="#">Rewards</a>
        <a href="#">Contact</a>
      </nav>

      {/* Icons */}
      <div className="header-icons">
        {/* User Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="7" r="4" strokeWidth="2" />
          <path
            strokeWidth="2"
            d="M4 21c0-4 4-6 8-6s8 2 8 6"
            strokeLinecap="round"
          />
        </svg>

        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="7" strokeWidth="2" />
          <line
            x1="16.65"
            y1="16.65"
            x2="21"
            y2="21"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Shopping Bag Icon */}
        <div className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M6 2l1 4h10l1-4M3 6h18l-1.5 14H4.5L3 6z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="cart-badge">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
