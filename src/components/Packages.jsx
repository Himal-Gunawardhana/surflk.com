import React, { useState } from 'react';
import { dayPacks, comboPacks, groupPacks } from '../data/packages';
import './Packages.css';

function Packages({ onBook }) {
  const [activeCategory, setActiveCategory] = useState('day');

  return (
    <section id="packages" className="section packages">
      <div className="container">
        <h2 className="section-title">Our Packages</h2>
        <p className="section-subtitle">
          Choose the perfect package for your adventure
        </p>

        <div className="package-tabs">
          <button 
            className={`tab ${activeCategory === 'day' ? 'active' : ''}`}
            onClick={() => setActiveCategory('day')}
          >
            Day Packs
          </button>
          <button 
            className={`tab ${activeCategory === 'combo' ? 'active' : ''}`}
            onClick={() => setActiveCategory('combo')}
          >
            Combo Stays
          </button>
          <button 
            className={`tab ${activeCategory === 'group' ? 'active' : ''}`}
            onClick={() => setActiveCategory('group')}
          >
            Group Packs
          </button>
        </div>

        {activeCategory === 'day' && (
          <div className="packages-grid">
            {dayPacks.map((pack, index) => (
              <div key={index} className="package-card">
                {pack.badge && <span className="badge">{pack.badge}</span>}
                <h3>{pack.name}</h3>
                <p className="target">{pack.target}</p>
                <div className="price">
                  <span className="currency">LKR</span>
                  <span className="amount">{pack.price}</span>
                  <span className="period">/person/day</span>
                </div>
                <div className="includes">
                  <h4>Includes:</h4>
                  <ul>
                    {pack.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {pack.notIncluded && (
                  <div className="not-included">
                    <p>Not included: {pack.notIncluded.join(', ')}</p>
                  </div>
                )}
                <div className="discounts">{pack.discounts}</div>
                <button onClick={() => onBook(pack.name)} className="btn btn-primary">Book Now</button>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 'combo' && (
          <div className="packages-grid">
            {comboPacks.map((pack, index) => (
              <div key={index} className="package-card">
                {pack.badge && <span className="badge">{pack.badge}</span>}
                <h3>{pack.name}</h3>
                <p className="duration">{pack.duration}</p>
                <p className="target">{pack.target}</p>
                <div className="price">
                  <span className="currency">LKR</span>
                  <span className="amount">{pack.price}</span>
                  <span className="period">/person</span>
                </div>
                <div className="includes">
                  <h4>Includes:</h4>
                  <ul>
                    {pack.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-note">{pack.pricing}</div>
                <button onClick={() => onBook(pack.name)} className="btn btn-primary">Book Now</button>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 'group' && (
          <div className="packages-grid">
            {groupPacks.map((pack, index) => (
              <div key={index} className="package-card">
                {pack.badge && <span className="badge">{pack.badge}</span>}
                <h3>{pack.name}</h3>
                <p className="duration">{pack.duration}</p>
                <p className="capacity">👥 {pack.capacity}</p>
                <div className="price">
                  <span className="amount">{pack.price}</span>
                </div>
                <div className="includes">
                  <h4>Includes:</h4>
                  <ul>
                    {pack.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {pack.note && <div className="note">{pack.note}</div>}
                <button onClick={() => onBook(pack.name)} className="btn btn-primary">Contact Us</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Packages;
