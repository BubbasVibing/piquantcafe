import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Column */}
          <div className="footer-brand">
            <img src="/piquantcafelogo1.png" alt="Piquant Café" className="footer-logo-img" />
            <p className="footer-tagline">
              Extraordinary culinary artistry for life's most meaningful celebrations
            </p>
            <a 
              href="https://piquant-cafe.cloveronline.com/menu/all" 
              className="footer-order-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="footer-column">
            <h4 className="footer-heading">Hours</h4>
            <ul className="footer-hours">
              <li>
                <span className="day">Mon - Sat</span>
                <span className="time">11 AM - 5 PM</span>
              </li>
              <li>
                <span className="day">Sunday</span>
                <span className="time">11 AM - 4 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="footer-heading">Visit Us</h4>
            <address className="footer-address">
              <p>1444 NJ-73</p>
              <p>Pennsauken, NJ 08110</p>
              <a href="tel:+16096820755" className="footer-phone">(609) 682-0755</a>
            </address>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.044.976.207 1.504.344 1.858.181.466.399.8.748 1.15.35.35.683.566 1.15.747.353.137.882.3 1.857.345 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.504-.208 1.858-.345.466-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.353.3-.882.345-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.208-1.504-.345-1.858a3.097 3.097 0 00-.747-1.15 3.098 3.098 0 00-1.15-.747c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {new Date().getFullYear()} Piquant Café. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
