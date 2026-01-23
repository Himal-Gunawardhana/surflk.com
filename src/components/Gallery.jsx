import React from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    { title: "Surf Sessions", emoji: "🏄" },
    { title: "Beach Vibes", emoji: "🏖️" },
    { title: "Group Adventures", emoji: "👥" },
    { title: "Sunset Views", emoji: "🌅" },
    { title: "Ocean Life", emoji: "🐢" },
    { title: "Fun Times", emoji: "🎉" }
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Experience Gallery</h2>
        <p className="section-subtitle">
          Moments captured at Secret Surf
        </p>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-placeholder">
                <span className="gallery-emoji">{image.emoji}</span>
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>📸 Want professional photos of your trip?</p>
          <p className="highlight">Photography & Dronography services included in most packages!</p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
