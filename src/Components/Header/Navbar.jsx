import { useState } from "react";
import "./header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* Full-Screen Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>✖</div>

        {/* Menu Items */}
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
