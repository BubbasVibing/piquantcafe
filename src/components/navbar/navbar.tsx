import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src="/piquantcafelogo1.png" alt="Piquant Café" className="navbar-logo-img" />
        </Link>
        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? 'menu-icon-bar bar1 active' : 'menu-icon-bar bar1'}></div>
          <div className={isOpen ? 'menu-icon-bar bar2 active' : 'menu-icon-bar bar2'}></div>
          <div className={isOpen ? 'menu-icon-bar bar3 active' : 'menu-icon-bar bar3'}></div>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link" onClick={() => setIsOpen(false)}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={() => setIsOpen(false)}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item order-now-item">
            <a 
              href="https://piquant-cafe.cloveronline.com/menu/all" 
              className="order-now-btn" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
