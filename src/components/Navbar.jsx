import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoSecretSurf from '../assets/logo-secret-surf.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <img src={logoSecretSurf} alt="Secret Surf" className="logo-image" />
            <div className="logo-text-wrapper">
              <h2>SECRET SURF</h2>
              <span className="tagline">Your Complete Beach Experience</span>
            </div>
          </div>
          
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a></li>
            <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
