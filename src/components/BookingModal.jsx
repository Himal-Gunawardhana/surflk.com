import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './BookingModal.css';

const BookingModal = ({ onClose, preselectedPackage = '' }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    date: '',
    package_name: preselectedPackage,
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS credentials
    const serviceId = 'service_ldxhgtm';
    const templateId = 'template_lk2m5i2';
    const publicKey = 'Se4FnW1InleqZ4Cky';

    // Send the email using the form data
    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus(`error: ${error?.text || error?.message || 'Unknown error'}`);
      });
  };

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        {status === 'success' ? (
          <div className="success-message">
            <h3>Booking Request Sent! 🌊</h3>
            <p>Thank you for reaching out. We will send a confirmation to your email shortly.</p>
            <button className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2>Book Your Stay</h2>
            <p className="subtitle">Secure your spot at Secret Surf</p>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="user_name">Full Name</label>
                <input 
                  type="text" 
                  id="user_name" 
                  name="user_name" 
                  value={formData.user_name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email Address</label>
                <input 
                  type="email" 
                  id="user_email" 
                  name="user_email" 
                  value={formData.user_email}
                  onChange={handleChange}
                  required 
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Arrival Date</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="package_name">Selected Package</label>
                <input 
                  type="text" 
                  id="package_name" 
                  name="package_name" 
                  value={formData.package_name}
                  onChange={handleChange}
                  placeholder="e.g., Secret Day Chill Pack"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Requests / Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any dietary requirements or questions?"
                ></textarea>
              </div>

              {status.startsWith('error') && (
                <p className="error-message">Oops! Something went wrong: {status.replace('error: ', '')}</p>
              )}

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Confirm Booking Request'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
