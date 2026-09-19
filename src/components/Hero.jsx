import React from 'react';
import './Hero.css';
import logoSurfing from '../assets/logo-surfing.png';
import logoHostel from '../assets/logo-hostel.png';
import logoRestaurant from '../assets/logo-restaurant.png';
import logoPhotography from '../assets/logo-photography.png';
import logoDrone from '../assets/logo-drone.png';
import logoOpenMic from '../assets/logo-openmic.png';
import logoBYOB from '../assets/logo-boyb.png';

function Hero({ onBook }) {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge">Welcome to Secret Surf</span>
          <h1>Experience The Ultimate Beach Lifestyle</h1>
          <p>Surf, Stay, Dine & Create Memories - All in One Place</p>
          <div className="hero-buttons">
            <button onClick={() => onBook()} className="btn btn-book">Book Now</button>
            <a href="#packages" className="btn btn-primary">View Packages</a>
            <a href="#menu" className="btn btn-secondary">See Our Menu</a>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <img src={logoSurfing} alt="Surf Lessons" className="feature-icon" />
              <span>Surf Lessons</span>
            </div>
            <div className="feature-item">
              <img src={logoHostel} alt="Hostel" className="feature-icon" />
              <span>Hostel</span>
            </div>
            <div className="feature-item">
              <img src={logoRestaurant} alt="Restaurant" className="feature-icon" />
              <span>Restaurant</span>
            </div>
            <div className="feature-item">
              <img src={logoPhotography} alt="Photography" className="feature-icon" />
              <span>Photography</span>
            </div>
            <div className="feature-item">
              <img src={logoDrone} alt="Dronography" className="feature-icon" />
              <span>Dronography</span>
            </div>
            <div className="feature-item">
              <img src={logoOpenMic} alt="Open Mic" className="feature-icon" />
              <span>Open Mic</span>
            </div>
            <div className="feature-item">
              <img src={logoBYOB} alt="BYOB" className="feature-icon" />
              <span>BYOB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
