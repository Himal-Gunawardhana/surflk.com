import React from 'react';
import './Footer.css';
import logoSecretSurf from '../assets/logo-secret-surf.png';
import instagramIcon from '../assets/logo-instagram.svg';
import facebookIcon from '../assets/logo-facebook.svg';
import tiktokIcon from '../assets/logo-tiktok.svg';
import googleIcon from '../assets/logo-google.svg';
import whatsappIcon from '../assets/logo-whatsapp.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SECRET SURF</h3>
            <p>Your complete beach experience - Surf, Stay, Dine & Create Memories</p>
            <div className="footer-social">
              <a 
                href="https://www.instagram.com/secret.surf.weligama" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a 
                href="https://web.facebook.com/profile.php?id=61586178380249" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a 
                href="https://www.tiktok.com/@secret.surf.welig" 
                target="_blank" 
                rel="noopener noreferrer"
                title="TikTok"
              >
                <img src={tiktokIcon} alt="TikTok" />
              </a>
              <a 
                href="https://share.google/UvbhA2hUEIQpPAYVg" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Google"
              >
                <img src={googleIcon} alt="Google" />
              </a>
              <a 
                href="https://wa.me/94767863340" 
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Surf Lessons</a></li>
              <li><a href="#services">Accommodation</a></li>
              <li><a href="#menu">Restaurant</a></li>
              <li><a href="#services">Photography</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>
                📍 <a 
                  href="https://maps.app.goo.gl/sZKQaGBwRhFKHEoX9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}
                >
                  Secret Surf Beach, Sri Lanka
                </a>
              </li>
              <li>📞 +94 76 786 3340</li>
              <li>
                ✉️ <a 
                  href="mailto:info@surflk.com"
                  style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}
                >
                  info@surflk.com
                </a>
              </li>
              <li>🕐 08:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Secret Surf. All rights reserved.</p>
          <p>Powered by SurfLK 💛</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
