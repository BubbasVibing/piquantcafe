import { useState } from 'react';
import './contact.css';

// Import images
import contactImage from '../../assets/contact-image.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reason: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      reason: 'general'
    });
    
    // Reset form submission message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        {/* Background icons spread throughout the hero section */}
        <div className="contact-hero-decorations">
          {/* Coffee beans icon */}
          <div className="contact-hero-icon icon-beans">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,4C8.97,4 6.5,5.4 6.5,7C6.5,8.6 8.97,10 12,10C15.03,10 17.5,8.6 17.5,7C17.5,5.4 15.03,4 12,4M8.84,8.2C8.5,8.32 8.45,8.55 8.76,8.72C9.08,8.9 9.61,9 10.16,9C11.17,9 12,8.5 12,7.9C12,7.3 11.17,6.8 10.16,6.8C9.93,6.8 9.71,6.83 9.5,6.89C9.05,7.03 8.84,7.9 8.84,8.2M16.4,12.34L12.8,15.93V16H13.14L15.93,13.21V10.4C16.12,10.18 16.27,10 16.4,9.79C16.56,10.57 16.97,11.71 16.4,12.34M6.5,13C6.5,14.6 8.97,16 12,16C15.03,16 17.5,14.6 17.5,13C17.5,11.4 15.03,10 12,10C8.97,10 6.5,11.4 6.5,13M8.4,13.64C8.06,13.76 8.03,13.97 8.33,14.14C8.66,14.32 9.19,14.42 9.73,14.42C10.75,14.42 11.57,13.93 11.57,13.33C11.57,12.73 10.73,12.23 9.72,12.23C9.5,12.23 9.29,12.26 9.08,12.31C8.62,12.46 8.38,13.39 8.4,13.64M17.5,16C17.5,17.6 15.03,19 12,19C8.97,19 6.5,17.6 6.5,16C6.5,14.4 8.97,13 12,13C15.03,13 17.5,14.4 17.5,16M8.88,17.73C8.53,17.85 8.5,18.08 8.81,18.25C9.14,18.43 9.66,18.53 10.21,18.53C11.23,18.53 12.05,18.03 12.05,17.43C12.05,16.83 11.22,16.33 10.21,16.33C9.98,16.33 9.77,16.36 9.56,16.41C9.1,16.57 8.86,17.5 8.88,17.73M12,20C8.97,20 6.5,18.6 6.5,17C6.5,15.4 8.97,14 12,14C15.03,14 17.5,15.4 17.5,17C17.5,18.6 15.03,20 12,20Z" />
            </svg>
          </div>
          
          {/* Cup icon */}
          <div className="contact-hero-icon icon-cup">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20Z" />
            </svg>
          </div>
          
          {/* Coffee steam icon */}
          <div className="contact-hero-icon icon-steam">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
            </svg>
          </div>
          
          {/* Phone icon */}
          <div className="contact-hero-icon icon-phone">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          
          {/* Email icon */}
          <div className="contact-hero-icon icon-heart">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          
          {/* Location pin icon */}
          <div className="contact-hero-icon icon-plant">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        </div>
        
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <a href="https://maps.google.com/?q=123+Café+Street,+City,+State+12345" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
              <h3>Visit Us</h3>
              <p>123 Café Street<br />City, State 12345</p>
              <a href="https://maps.google.com/?q=123+Café+Street,+City,+State+12345" target="_blank" rel="noopener noreferrer" className="info-link">Get Directions</a>
            </div>
            <div className="contact-info-card">
              <a href="mailto:info@piquantcafe.com" className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <h3>Email Us</h3>
              <p>info@piquantcafe.com</p>
              <a href="mailto:info@piquantcafe.com" className="info-link">Send Email</a>
            </div>
            <div className="contact-info-card">
              <a href="tel:+15551234567" className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <h3>Call Us</h3>
              <p>(555) 123-4567</p>
              <a href="tel:+15551234567" className="info-link">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="hours-section">
        <div className="container">
          <div className="hours-content">
            <div className="hours-text">
              <h2 className="section-title">Hours of Operation</h2>
              <ul className="hours-list">
                <li><span className="day">Monday - Friday:</span> <span className="time">7am - 8pm</span></li>
                <li><span className="day">Saturday:</span> <span className="time">8am - 9pm</span></li>
                <li><span className="day">Sunday:</span> <span className="time">8am - 6pm</span></li>
              </ul>
            </div>
            <div className="hours-image">
              <img src={contactImage} alt="Inside Piquant Café" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <div className="form-divider"></div>
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reason">Reason for Contact</label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Reservation</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering</option>
                    <option value="event">Private Event</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            {/* Background icons for map section */}
            <div className="map-bg-icons">
              {/* Coffee beans icon */}
              <div className="map-icon map-icon-beans">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#f4c38b">
                  <path d="M12,4C8.97,4 6.5,5.4 6.5,7C6.5,8.6 8.97,10 12,10C15.03,10 17.5,8.6 17.5,7C17.5,5.4 15.03,4 12,4M8.84,8.2C8.5,8.32 8.45,8.55 8.76,8.72C9.08,8.9 9.61,9 10.16,9C11.17,9 12,8.5 12,7.9C12,7.3 11.17,6.8 10.16,6.8C9.93,6.8 9.71,6.83 9.5,6.89C9.05,7.03 8.84,7.9 8.84,8.2M16.4,12.34L12.8,15.93V16H13.14L15.93,13.21V10.4C16.12,10.18 16.27,10 16.4,9.79C16.56,10.57 16.97,11.71 16.4,12.34M6.5,13C6.5,14.6 8.97,16 12,16C15.03,16 17.5,14.6 17.5,13C17.5,11.4 15.03,10 12,10C8.97,10 6.5,11.4 6.5,13M8.4,13.64C8.06,13.76 8.03,13.97 8.33,14.14C8.66,14.32 9.19,14.42 9.73,14.42C10.75,14.42 11.57,13.93 11.57,13.33C11.57,12.73 10.73,12.23 9.72,12.23C9.5,12.23 9.29,12.26 9.08,12.31C8.62,12.46 8.38,13.39 8.4,13.64M17.5,16C17.5,17.6 15.03,19 12,19C8.97,19 6.5,17.6 6.5,16C6.5,14.4 8.97,13 12,13C15.03,13 17.5,14.4 17.5,16M8.88,17.73C8.53,17.85 8.5,18.08 8.81,18.25C9.14,18.43 9.66,18.53 10.21,18.53C11.23,18.53 12.05,18.03 12.05,17.43C12.05,16.83 11.22,16.33 10.21,16.33C9.98,16.33 9.77,16.36 9.56,16.41C9.1,16.57 8.86,17.5 8.88,17.73M12,20C8.97,20 6.5,18.6 6.5,17C6.5,15.4 8.97,14 12,14C15.03,14 17.5,15.4 17.5,17C17.5,18.6 15.03,20 12,20Z" />
                </svg>
              </div>
              
              {/* Cup icon */}
              <div className="map-icon map-icon-cup">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20Z" />
                </svg>
              </div>
              
              {/* Heart icon */}
              <div className="map-icon map-icon-heart">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#f4c38b">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
              </div>
              
              {/* Location pin icon */}
              <div className="map-icon map-icon-pin">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
            
            <div className="map-overlay">
              <div className="map-content">
                <h3>Find Us Here</h3>
                <p>123 Café Street, City, State 12345</p>
                <a href="https://maps.google.com/?q=123+Café+Street,+City,+State+12345" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 