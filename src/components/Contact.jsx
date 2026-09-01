import React, { useState } from 'react';
import './Contact.css';
import instagramIcon from '../assets/logo-instagram.svg';
import facebookIcon from '../assets/logo-facebook.svg';
import tiktokIcon from '../assets/logo-tiktok.svg';
import googleIcon from '../assets/logo-google.svg';
import whatsappIcon from '../assets/logo-whatsapp.svg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open user's email client
    window.location.href = `mailto:secretsurf3@gmail.com?subject=${subject}&body=${body}`;
    
    // Show confirmation
    alert('Thank you! Your email client will open. Please send the email to complete your inquiry.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to book your adventure? Contact us now!
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>
                <a 
                  href="https://maps.app.goo.gl/sZKQaGBwRhFKHEoX9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  Secret Surf Beach<br/>Sri Lanka
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>+94 76 786 3340</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>info@surflk.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Hours</h3>
              <p>08:00 AM - 10:00 PM<br/>We're almost always here for you!</p>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a 
                  href="https://www.instagram.com/secret.surf.weligama" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                  title="Instagram"
                >
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a 
                  href="https://web.facebook.com/profile.php?id=61586178380249" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon facebook"
                  title="Facebook"
                >
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a 
                  href="https://www.tiktok.com/@secret.surf.welig" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon tiktok"
                  title="TikTok"
                >
                  <img src={tiktokIcon} alt="TikTok" />
                </a>
                <a 
                  href="https://share.google/UvbhA2hUEIQpPAYVg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon google"
                  title="Google"
                >
                  <img src={googleIcon} alt="Google" />
                </a>
                <a 
                  href="https://wa.me/94767863340" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                  title="WhatsApp"
                >
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper" id="book">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your plans..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              <p className="form-note">
                Or book directly through our <a href="https://secretsurf.rezerveme.com/" target="_blank" rel="noopener noreferrer">booking platform</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
