import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

// Import images
import coffeeImage from '../../assets/coffee-image.jpg';
import foodImage from '../../assets/food-image.jpg';
import cafeImage from '../../assets/cafe-image.jpg';
import coffeeCupImage from '../../assets/cupofcoffeepiquant.png';

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
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
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
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className={`hero-title ${isVisible ? 'fade-in' : ''}`}>
              Fresh <span>Coffee</span> —<br />in Your Cup
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'fade-in' : ''}`}>
              Enjoy 15% off when you bring<br />your own reusable cup
            </p>
            <div className={`hero-buttons ${isVisible ? 'fade-in' : ''}`}>
              <Link to="/menu" className="btn btn-primary">
                Order Now
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className={`hero-image-container ${isVisible ? 'fade-in' : ''}`}>
            {/* Coffee beans icon */}
            <div className="hero-icon hero-icon-beans">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#f4c38b">
                <path d="M12,4C8.97,4 6.5,5.4 6.5,7C6.5,8.6 8.97,10 12,10C15.03,10 17.5,8.6 17.5,7C17.5,5.4 15.03,4 12,4M8.84,8.2C8.5,8.32 8.45,8.55 8.76,8.72C9.08,8.9 9.61,9 10.16,9C11.17,9 12,8.5 12,7.9C12,7.3 11.17,6.8 10.16,6.8C9.93,6.8 9.71,6.83 9.5,6.89C9.05,7.03 8.84,7.9 8.84,8.2M16.4,12.34L12.8,15.93V16H13.14L15.93,13.21V10.4C16.12,10.18 16.27,10 16.4,9.79C16.56,10.57 16.97,11.71 16.4,12.34M6.5,13C6.5,14.6 8.97,16 12,16C15.03,16 17.5,14.6 17.5,13C17.5,11.4 15.03,10 12,10C8.97,10 6.5,11.4 6.5,13M8.4,13.64C8.06,13.76 8.03,13.97 8.33,14.14C8.66,14.32 9.19,14.42 9.73,14.42C10.75,14.42 11.57,13.93 11.57,13.33C11.57,12.73 10.73,12.23 9.72,12.23C9.5,12.23 9.29,12.26 9.08,12.31C8.62,12.46 8.38,13.39 8.4,13.64M17.5,16C17.5,17.6 15.03,19 12,19C8.97,19 6.5,17.6 6.5,16C6.5,14.4 8.97,13 12,13C15.03,13 17.5,14.4 17.5,16M8.88,17.73C8.53,17.85 8.5,18.08 8.81,18.25C9.14,18.43 9.66,18.53 10.21,18.53C11.23,18.53 12.05,18.03 12.05,17.43C12.05,16.83 11.22,16.33 10.21,16.33C9.98,16.33 9.77,16.36 9.56,16.41C9.1,16.57 8.86,17.5 8.88,17.73M12,20C8.97,20 6.5,18.6 6.5,17C6.5,15.4 8.97,14 12,14C15.03,14 17.5,15.4 17.5,17C17.5,18.6 15.03,20 12,20Z" />
              </svg>
            </div>
            
            {/* Cup icon */}
            <div className="hero-icon hero-icon-cup">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#471f3a">
                <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20Z" />
              </svg>
            </div>
            
            {/* Main coffee cup image */}
            <img src={coffeeCupImage} alt="Piquant Coffee Cup" className="hero-cup-image" />
            
            {/* Coffee steam icon */}
            <div className="hero-icon hero-icon-steam">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#f4c38b">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
              </svg>
            </div>
            
            {/* Coffee plant icon */}
            <div className="hero-icon hero-icon-plant">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#471f3a">
                <path d="M20,8C18.22,8 16.64,8.86 15.69,10.15C15.88,9.59 16,8.97 16,8.33C16,5.38 13.5,3 10.5,3C8.08,3 6,4.67 5.37,6.91C6.42,5.16 8.34,4 10.5,4C12.93,4 15,5.91 15.34,8.35C14.26,6.9 12.48,6 10.5,6C8.03,6 5.96,7.67 5.22,10H4.25C4.9,6.97 7.47,4.73 10.5,4.73C13.53,4.73 16.1,6.97 16.75,10H18.75C18.75,8.18 19.68,6.59 21.07,5.67C21.07,4.67 20.13,3.75 18.75,3.75C17.6,3.75 16.57,4.39 16.57,5.79C16.57,6.79 17.32,7.86 18.45,7.94C17.11,7.64 16,6.29 16,4.68C16,3 17.8,1.75 19.5,1.75C21.21,1.75 23,3 23,5.5C23,9.5 20,12 20,12V12M11.11,12.35C11.11,15.85 8.93,17.5 6.33,17.5C3.72,17.5 1.5,15.85 1.5,12.35C1.5,8.85 3.67,9.35 6.28,9.35C8.88,9.35 11.11,8.85 11.11,12.35M9.61,11.85C9.61,10.3 8.9,10.85 6.3,10.85C3.69,10.85 3,10.3 3,11.85C3,13.4 3.7,16 6.3,16C8.9,16 9.61,13.4 9.61,11.85Z" />
              </svg>
            </div>
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
              <img src={cafeImage} alt="Piquant Café interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Specials Section */}
      <section className="menu-specials">
        <div className="container">
          <h2 className="section-title">Seasonal Specials</h2>
          <p className="specials-tagline">Limited time offerings you won't want to miss</p>
          
          <div className="specials-grid">
            <div className="special-card special-featured">
              <div className="special-badge">FEATURED</div>
              <div className="special-card-image">
                <img src={coffeeImage} alt="Pumpkin Spice Latte" />
              </div>
              <div className="special-card-content">
                <div className="special-card-header">
                  <h3>Pumpkin Spice Latte</h3>
                  <span className="special-price">$5.95</span>
                </div>
                <p>Our signature fall drink with real pumpkin, premium espresso, steamed milk, and warming spices. A seasonal favorite you can't miss!</p>
                <div className="special-card-footer">
                  <Link to="/menu" className="btn btn-special">
                    Order Now
                  </Link>
                  <div className="special-timer">
                    <span className="special-timer-icon">⏱</span>
                    <span>Limited Time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="specials-side">
              <div className="special-card">
                <div className="special-card-image">
                  <img src={foodImage} alt="Spiced Maple Croissant" />
                </div>
                <div className="special-card-content">
                  <div className="special-card-header">
                    <h3>Spiced Maple Croissant</h3>
                    <span className="special-price">$4.50</span>
                  </div>
                  <p>Flaky buttery croissant filled with spiced maple cream and topped with a maple glaze.</p>
                  <Link to="/menu" className="btn btn-text special-link">
                    Try it today <span className="arrow">→</span>
                  </Link>
                </div>
              </div>

              <div className="special-card">
                <div className="special-card-image">
                  <img src={coffeeImage} alt="Mocha Hazelnut Frappe" />
                </div>
                <div className="special-card-content">
                  <div className="special-card-header">
                    <h3>Mocha Hazelnut Frappe</h3>
                    <span className="special-price">$6.95</span>
                  </div>
                  <p>A luxurious blend of espresso, chocolate, hazelnut, and ice, topped with whipped cream.</p>
                  <Link to="/menu" className="btn btn-text special-link">
                    Try it today <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="specials-cta">
            <p>Discover all our seasonal offerings and regular menu items!</p>
            <Link to="/menu" className="btn btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-container">
            <div className="carousel-buttons">
              <button className="carousel-btn" onClick={prevTestimonial}>&lt;</button>
              <button className="carousel-btn" onClick={nextTestimonial}>&gt;</button>
            </div>
            <div 
              className="testimonial-carousel" 
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
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
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Visit Us Today</h2>
            <p className="cta-text">
              Join us for coffee, food, and community. We're open daily from 7am to 8pm.
              Experience the warmth and flavor that keeps our customers coming back!
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Find Our Location
              </Link>
              <Link to="/menu" className="btn btn-primary">
                Browse Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
