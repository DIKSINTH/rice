import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo">Lundev</div>

      {/* Hamburger button (mobile only) */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <nav className={isOpen ? "active" : ""}>
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/products">Products</a>
        <a href="/gallery">Gallery</a>
        <a href="/contactus">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
