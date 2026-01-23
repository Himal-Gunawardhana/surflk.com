import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Why Choose Secret Surf?</h2>
        <p className="section-subtitle">
          We offer multiple services in one place to make your vacation worry-free
        </p>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🛡️</div>
            <h3>Safety & Security</h3>
            <p>No scams, no rushes. We take care of everything so you can freely enjoy your vacation.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">🎯</div>
            <h3>All-In-One Experience</h3>
            <p>Surf lessons, accommodation, dining, photography, and transport - all under one roof.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">📸</div>
            <h3>Memory Building</h3>
            <p>Professional photography & dronography to capture your perfect moments.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">🎤</div>
            <h3>Entertainment</h3>
            <p>Open mic nights, BYOB access, and a vibrant social atmosphere.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">🏄</div>
            <h3>Expert Surf Coaching</h3>
            <p>Learn from experienced instructors with all equipment provided.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">🗺️</div>
            <h3>Total Freedom</h3>
            <p>Explore independently with our guidance or join our curated experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
