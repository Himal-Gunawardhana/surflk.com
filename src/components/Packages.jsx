import React, { useState } from 'react';
import './Packages.css';

function Packages() {
  const [activeCategory, setActiveCategory] = useState('day');

  const dayPacks = [
    {
      name: "Secret Day Chill Pack",
      badge: "Budget Friendly",
      target: "Backpackers + Friends",
      price: "2,000",
      includes: [
        "Restaurant: Breakfast",
        "Beach chill support + Secret map",
        "BYOB night access",
        "Night stay with dorm bed"
      ],
      notIncluded: ["Transport", "Surfing", "Photos"],
      discounts: "1 Week: 10% | 1 Month: 20%"
    },
    {
      name: "Secret Surf Starter Day",
      badge: "Best Seller",
      target: "Surfers + Friend Groups",
      price: "7,500",
      includes: [
        "Surf lesson (group) + board included",
        "Restaurant: Breakfast + Bite Plate for Night",
        "BYOB night access",
        "Night Stay with Dorm Bed",
        "One Printed Group photo + 1 Raw photo each"
      ],
      discounts: "1 Week: 10% | 1 Month: 20%"
    },
    {
      name: "Secret Friends Fun Day",
      badge: "Content + Activity",
      target: "Friend groups who want memories",
      price: "8,500",
      includes: [
        "1 activity choice: Boat/Kayak/Turtle/Whale/Surf",
        "Restaurant: Breakfast + Bite Plate for Night",
        "BYOB night access",
        "Mini photo set (quick content)",
        "Night Stay with Dorm Bed"
      ],
      discounts: "1 Week: 10% | 1 Month: 20%"
    }
  ];

  const comboPacks = [
    {
      name: "2N3D Backpacker Pack",
      duration: "2 Nights 3 Days",
      target: "Backpackers, Small Groups",
      price: "20,000 - 22,000",
      includes: [
        "2 nights dorm",
        "BYOB access (both nights)",
        "1 surf lesson (group)",
        "1 guided local experience: Turtle/Crocodile watching"
      ],
      pricing: "No Breakfast: 20,000 | With Breakfast: 22,000"
    },
    {
      name: "3N4D Surf & Social Pack",
      duration: "3 Nights 4 Days",
      badge: "Secret Family Vibe",
      target: "Surfers + Friend Groups",
      price: "32,000 - 34,000",
      includes: [
        "3 nights dorm",
        "BYOB access (3 nights)",
        "2 surf sessions (lesson + practice)",
        "Open Mic night (free entry)",
        "1 activity: Boat ride OR Crocodile watch",
        "Photography"
      ],
      pricing: "No Breakfast: 32,000 | With Breakfast: 34,000"
    },
    {
      name: "4N5D Ocean Adventure Pack",
      duration: "4 Nights 5 Days",
      badge: "Premium",
      target: "I want to do everything travelers",
      price: "45,000 - 47,500",
      includes: [
        "4 nights dorm",
        "BYOB access (4 nights)",
        "2 surf sessions (lesson + practice)",
        "2 ocean experiences: Whale watching/Diving/Fishing/Boat",
        "1 wildlife trip: Turtle or Crocodile watching"
      ],
      pricing: "No Breakfast: 45,000 | With Breakfast: 47,500"
    }
  ];

  const groupPacks = [
    {
      name: "Secret Group Weekender",
      duration: "2N3D",
      capacity: "4 to 10 pax",
      price: "Contact for Group Rates",
      includes: [
        "2 nights dorm (block booking)",
        "BYOB access",
        "1 group surf lesson",
        "1 group experience: Boat OR Kayak",
        "Tuk/van transport for 1 trip loop"
      ],
      note: "Breakfast option available"
    },
    {
      name: "Secret Jumbo Group",
      duration: "3N4D",
      badge: "Everything Handled",
      capacity: "6 to 10 pax",
      price: "Contact for Group Rates",
      includes: [
        "3 nights dorm (block booking)",
        "BYOB access (3 nights)",
        "2 surf sessions",
        "2 activities: Fishing+Boat OR Diving+Kayak",
        "Open Mic reserved area",
        "Transport included (tuk/van)"
      ]
    }
  ];

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
                <a href="https://secretsurf.rezerveme.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</a>
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
                <a href="https://secretsurf.rezerveme.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</a>
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
                <a href="https://secretsurf.rezerveme.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Contact Us</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Packages;
