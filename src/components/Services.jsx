import React from 'react';
import './Services.css';
import logoSurfing from '../assets/logo-surfing.png';
import logoHostel from '../assets/logo-hostel.png';
import logoRestaurant from '../assets/logo-restaurant.png';
import logoPhotography from '../assets/logo-photography.png';
import logoDrone from '../assets/logo-drone.png';
import logoOpenMic from '../assets/logo-openmic.png';
import logoBYOB from '../assets/logo-boyb.png';
import logoTransport from '../assets/logo-transport.png';

function Services() {
  const services = [
    {
      title: "Surfing Lessons",
      description: "Professional surf coaching for all levels with equipment included",
      icon: logoSurfing
    },
    {
      title: "Hostel Accommodation",
      description: "Comfortable dorm beds with a social, friendly atmosphere",
      icon: logoHostel
    },
    {
      title: "Restaurant & Dining",
      description: "Delicious local and international cuisine",
      icon: logoRestaurant
    },
    {
      title: "Photography",
      description: "Professional photo sessions to capture your memories",
      icon: logoPhotography
    },
    {
      title: "Dronography",
      description: "Stunning aerial shots of your surf sessions and adventures",
      icon: logoDrone
    },
    {
      title: "Open Mic & Karaoke",
      description: "Fun evenings with live performances and entertainment",
      icon: logoOpenMic
    },
    {
      title: "BYOB Nights",
      description: "Bring your own beverage and enjoy our social space",
      icon: logoBYOB
    },
    {
      title: "Transport Services",
      description: "Convenient tuk-tuk and van services for all your needs",
      icon: logoTransport
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Everything you need for the perfect beach vacation
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {typeof service.icon === 'string' && service.icon.startsWith('http') || service.icon.includes('.png') ? (
                  <img src={service.icon} alt={service.title} />
                ) : (
                  service.icon
                )}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
