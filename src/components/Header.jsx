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
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Products</a>
        <a href="">Gallery</a>
        <a href="">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
