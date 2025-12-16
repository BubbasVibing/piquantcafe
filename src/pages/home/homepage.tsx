import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

// Import images
import coffeeImage from '../../assets/menu-hero.jpg';
import foodImage from '../../assets/contact-image.jpg';
import interiorImage from '../../assets/interiorpiquantphoto.jpg';
import heroBackground from '../../assets/herosectionpiquant.png';

// Testimonial data
const testimonials = [
  {
    text: "The coffee at Piquant Café is consistently excellent, and the atmosphere is perfect for both work and relaxation. My favorite spot in the city!",
    author: "Sarah M."
  },
  {
    text: "I've tried many cafés, but Piquant stands out with their attention to detail and quality ingredients. The pastries are to die for!",
    author: "James L."
  },
  {
    text: "As someone who works remotely, I appreciate the welcoming environment and fast Wi-Fi. Plus, their seasonal specials never disappoint!",
    author: "Emma R."
  }
];

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Set up Intersection Observer for animations
  useEffect(() => {
    // Create observer to check when elements enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Add animation-trigger class when elements enter viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('animation-trigger');
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Trigger when at least 15% of the element is visible
    );
    
    // Select elements to observe (sections)
    const sections = document.querySelectorAll('.featured, .about, .menu-specials, .testimonials, .cta');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Clean up observer
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">PIQUANT</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">
            Extraordinary culinary artistry for life's most<br />meaningful celebrations
          </p>
          <div className="hero-buttons">
            <a 
              href="https://piquant-cafe.cloveronline.com/menu/all" 
              className="btn-hero"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
            <Link to="/menu" className="btn-hero btn-hero-secondary">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <div className="container">
          <h2 className="section-title">Our Specialty</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <div className="featured-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M2 21v-2h18v2H2zm6-4V7H6V5h12v2h-2v10h-8zm2-10v10h4V7h-4z"/>
                </svg>
              </div>
              <h3>Specialty Coffee</h3>
              <p>Expertly roasted beans from around the world, prepared with care by our skilled baristas.</p>
            </div>
            <div className="featured-item">
              <div className="featured-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M12 2C7.59 2 4 5.59 4 10c0 1.41.39 2.73 1.05 3.87.92 1.58 2.44 2.79 4.15 3.36 1.43.48 2.89.75 4.8.77 1.91-.02 3.37-.29 4.8-.77 1.71-.57 3.23-1.78 4.15-3.36C23.61 12.73 24 11.41 24 10c0-4.41-3.59-8-8-8h-4zm4 16c-1.2 0-2.27-.5-3-1.35-.73.85-1.8 1.35-3 1.35-1.93 0-3.5-1.57-3.5-3.5V11c0-.83.67-1.5 1.5-1.5.65 0 1.2.41 1.41.98.21-.56.76-.98 1.41-.98.78 0 1.42.6 1.5 1.35.07-.76.72-1.35 1.5-1.35.65 0 1.2.41 1.41.98.21-.56.76-.98 1.41-.98.83 0 1.5.67 1.5 1.5v2.5c0 1.93-1.57 3.5-3.5 3.5z"/>
                </svg>
              </div>
              <h3>Fresh Pastries</h3>
              <p>Baked daily in-house, our pastries are the perfect complement to your coffee.</p>
            </div>
            <div className="featured-item">
              <div className="featured-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97C7.93 20.26 9.88 21 12 21c2.3 0 4.61-.88 6.36-2.64C20.12 16.61 21 14.3 21 12s-.88-4.61-2.64-6.36C16.61 3.88 14.3 3 12 3zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-8h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1z"/>
                </svg>
              </div>
              <h3>Healthy Meals</h3>
              <p>Delicious, nutritious meals made with locally sourced ingredients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                Founded in 2010, Piquant Café began with a simple mission: to create a 
                welcoming space where people could enjoy exceptional coffee and food.
              </p>
              <p>
                Over the years, we've built a community around our passion for quality, 
                sustainability, and the perfect brew. Every cup we serve and every dish 
                we prepare is a reflection of our commitment to excellence.
              </p>
              <Link to="/about" className="btn btn-text">
                Learn more about us <span className="arrow">→</span>
              </Link>
            </div>
            <div className="about-image">
              <img src={interiorImage} alt="Piquant Café interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Specials Section */}
      <section className="menu-specials">
        <div className="container">
          <h2 className="section-title">Featured Menu Items</h2>
          <p className="specials-tagline">Our most loved dishes, ready to order</p>
          
          <div className="specials-grid">
            {/* Featured Item - Large Card */}
            <div className="special-item special-featured">
              <span className="special-item-badge">Popular</span>
              <div className="special-item-content">
                <div className="special-item-text">
                  <h3 className="special-item-name">The Cuban</h3>
                  <p className="special-item-description">Roasted turkey, cured ham, swiss, pickles, and mustard on pressed bread.</p>
                </div>
                <div className="special-item-footer">
                  <span className="special-item-price">$12.50</span>
                  <a 
                    href="https://piquant-cafe.cloveronline.com/menu/the-cuban-RVVTB7R78FMN2"
                    className="special-item-order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            {/* Regular Items */}
            <div className="special-item">
              <div className="special-item-content">
                <h3 className="special-item-name">Cajun Shrimp Salad</h3>
                <p className="special-item-description">Grilled shrimp, grilled fresh corn, black beans, and avocado.</p>
                <div className="special-item-footer">
                  <span className="special-item-price">$12.90</span>
                  <a 
                    href="https://piquant-cafe.cloveronline.com/menu/cajun-shrimp-salad-Z8BV0770WFJDE"
                    className="special-item-order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>

            <div className="special-item">
              <div className="special-item-content">
                <h3 className="special-item-name">Chipotle Pecan Chicken BLT</h3>
                <p className="special-item-description">Brown sugar beef bacon, pecans, and chipotle glaze.</p>
                <div className="special-item-footer">
                  <span className="special-item-price">$12.90</span>
                  <a 
                    href="https://piquant-cafe.cloveronline.com/menu/chipotle-pecan-chicken-blt-59V25XC7XAM3E"
                    className="special-item-order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>

            <div className="special-item">
              <div className="special-item-content">
                <h3 className="special-item-name">Cobb Salad</h3>
                <p className="special-item-description">Grilled chicken, avocado, beef bacon, egg, and blue cheese.</p>
                <div className="special-item-footer">
                  <span className="special-item-price">$12.50</span>
                  <a 
                    href="https://piquant-cafe.cloveronline.com/menu/cobb-salad-CYG7A1Y4BJA6A"
                    className="special-item-order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>

            <div className="special-item">
              <div className="special-item-content">
                <h3 className="special-item-name">Mediterranean Tuna Melt</h3>
                <p className="special-item-description">Tuna with sharp cheddar, olives, and sun-dried tomatoes.</p>
                <div className="special-item-footer">
                  <span className="special-item-price">$12.90</span>
                  <a 
                    href="https://piquant-cafe.cloveronline.com/menu/mediterranean-tuna-melt-ZJVNXKAZPGNYT"
                    className="special-item-order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>

            <div className="special-item">
              <div className="special-item-content">
                <h3 className="special-item-name">Coconut Chicken Tenders</h3>
                <p className="special-item-description">Chicken breast strips with coconut breading, served with fries.</p>
                <div className="special-item-footer">
                  <span className="special-item-price">$15.90</span>
                  <a 
                    href="https://piquant-cafe.cloveronline.com/menu/coconut-chicken-tenders-VM0JENS3MYM5A"
                    className="special-item-order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="specials-cta">
            <Link to="/menu" className="btn-view-menu">
              View Full Menu
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-container">
            <button className="carousel-btn carousel-btn-prev" onClick={prevTestimonial}>&lt;</button>
            <div className="testimonial-carousel">
              <div 
                style={{ 
                  display: 'flex', 
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                  transition: 'transform 0.5s ease',
                  width: '100%'
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div className="testimonial-card" key={index}>
                    <p className="testimonial-text">
                      "{testimonial.text}"
                    </p>
                    <p className="testimonial-author">— {testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn carousel-btn-next" onClick={nextTestimonial}>&gt;</button>
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <div 
                  key={index} 
                  className={`carousel-dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        {/* Background icons for CTA section */}
        <div className="cta-bg-icons">
          <div className="cta-icon-beans">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,4C8.97,4 6.5,5.4 6.5,7C6.5,8.6 8.97,10 12,10C15.03,10 17.5,8.6 17.5,7C17.5,5.4 15.03,4 12,4M8.84,8.2C8.5,8.32 8.45,8.55 8.76,8.72C9.08,8.9 9.61,9 10.16,9C11.17,9 12,8.5 12,7.9C12,7.3 11.17,6.8 10.16,6.8C9.93,6.8 9.71,6.83 9.5,6.89C9.05,7.03 8.84,7.9 8.84,8.2M16.4,12.34L12.8,15.93V16H13.14L15.93,13.21V10.4C16.12,10.18 16.27,10 16.4,9.79C16.56,10.57 16.97,11.71 16.4,12.34M6.5,13C6.5,14.6 8.97,16 12,16C15.03,16 17.5,14.6 17.5,13C17.5,11.4 15.03,10 12,10C8.97,10 6.5,11.4 6.5,13M8.4,13.64C8.06,13.76 8.03,13.97 8.33,14.14C8.66,14.32 9.19,14.42 9.73,14.42C10.75,14.42 11.57,13.93 11.57,13.33C11.57,12.73 10.73,12.23 9.72,12.23C9.5,12.23 9.29,12.26 9.08,12.31C8.62,12.46 8.38,13.39 8.4,13.64M17.5,16C17.5,17.6 15.03,19 12,19C8.97,19 6.5,17.6 6.5,16C6.5,14.4 8.97,13 12,13C15.03,13 17.5,14.4 17.5,16M8.88,17.73C8.53,17.85 8.5,18.08 8.81,18.25C9.14,18.43 9.66,18.53 10.21,18.53C11.23,18.53 12.05,18.03 12.05,17.43C12.05,16.83 11.22,16.33 10.21,16.33C9.98,16.33 9.77,16.36 9.56,16.41C9.1,16.57 8.86,17.5 8.88,17.73M12,20C8.97,20 6.5,18.6 6.5,17C6.5,15.4 8.97,14 12,14C15.03,14 17.5,15.4 17.5,17C17.5,18.6 15.03,20 12,20Z" />
            </svg>
          </div>
          <div className="cta-icon-cup">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20Z" />
            </svg>
          </div>
        </div>
        
        <div className="cta-content">
          <h2 className="cta-title">Visit Us Today</h2>
          <p className="cta-text">
            Join us for coffee, food, and community. We're open Mon-Sat 11 AM - 5 PM, Sun 11 AM - 4 PM.
            Experience the warmth and flavor that keeps our customers coming back!
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
              Find Our Location
            </Link>
            <Link to="/menu" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
              Browse Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
