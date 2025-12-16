import { Link } from 'react-router-dom';
import './about.css';

// Import images
import foundersImage from '../../assets/Piquantcafe.jpg';

// Testimonial data
const testimonials = [
  {
    text: "Piquant Café has been my second home for years. The staff knows me by name, remembers my order, and the quality is consistently fantastic. This place embodies what a local café should be.",
    author: "James L.",
    role: "Long-time Regular"
  },
  {
    text: "I've tried many cafés, but Piquant stands out with their attention to detail and quality ingredients. The pastries are to die for, and their commitment to sustainability makes me feel good about being a customer.",
    author: "Emma R.",
    role: "Food Blogger"
  },
  {
    text: "As someone who works remotely, I appreciate the welcoming environment and fast Wi-Fi. Plus, their seasonal specials never disappoint! The staff goes above and beyond to make everyone feel welcome.",
    author: "Sarah M.",
    role: "Digital Nomad"
  }
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        {/* Background icons spread throughout the hero section */}
        <div className="about-hero-decorations">
          {/* Coffee beans icon */}
          <div className="about-hero-icon icon-beans">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,4C8.97,4 6.5,5.4 6.5,7C6.5,8.6 8.97,10 12,10C15.03,10 17.5,8.6 17.5,7C17.5,5.4 15.03,4 12,4M8.84,8.2C8.5,8.32 8.45,8.55 8.76,8.72C9.08,8.9 9.61,9 10.16,9C11.17,9 12,8.5 12,7.9C12,7.3 11.17,6.8 10.16,6.8C9.93,6.8 9.71,6.83 9.5,6.89C9.05,7.03 8.84,7.9 8.84,8.2M16.4,12.34L12.8,15.93V16H13.14L15.93,13.21V10.4C16.12,10.18 16.27,10 16.4,9.79C16.56,10.57 16.97,11.71 16.4,12.34M6.5,13C6.5,14.6 8.97,16 12,16C15.03,16 17.5,14.6 17.5,13C17.5,11.4 15.03,10 12,10C8.97,10 6.5,11.4 6.5,13M8.4,13.64C8.06,13.76 8.03,13.97 8.33,14.14C8.66,14.32 9.19,14.42 9.73,14.42C10.75,14.42 11.57,13.93 11.57,13.33C11.57,12.73 10.73,12.23 9.72,12.23C9.5,12.23 9.29,12.26 9.08,12.31C8.62,12.46 8.38,13.39 8.4,13.64M17.5,16C17.5,17.6 15.03,19 12,19C8.97,19 6.5,17.6 6.5,16C6.5,14.4 8.97,13 12,13C15.03,13 17.5,14.4 17.5,16M8.88,17.73C8.53,17.85 8.5,18.08 8.81,18.25C9.14,18.43 9.66,18.53 10.21,18.53C11.23,18.53 12.05,18.03 12.05,17.43C12.05,16.83 11.22,16.33 10.21,16.33C9.98,16.33 9.77,16.36 9.56,16.41C9.1,16.57 8.86,17.5 8.88,17.73M12,20C8.97,20 6.5,18.6 6.5,17C6.5,15.4 8.97,14 12,14C15.03,14 17.5,15.4 17.5,17C17.5,18.6 15.03,20 12,20Z" />
            </svg>
          </div>
          
          {/* Cup icon */}
          <div className="about-hero-icon icon-cup">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20Z" />
            </svg>
          </div>
          
          {/* Coffee steam icon */}
          <div className="about-hero-icon icon-steam">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
            </svg>
          </div>
          
          {/* Coffee plant icon */}
          <div className="about-hero-icon icon-plant">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M20,8C18.22,8 16.64,8.86 15.69,10.15C15.88,9.59 16,8.97 16,8.33C16,5.38 13.5,3 10.5,3C8.08,3 6,4.67 5.37,6.91C6.42,5.16 8.34,4 10.5,4C12.93,4 15,5.91 15.34,8.35C14.26,6.9 12.48,6 10.5,6C8.03,6 5.96,7.67 5.22,10H4.25C4.9,6.97 7.47,4.73 10.5,4.73C13.53,4.73 16.1,6.97 16.75,10H18.75C18.75,8.18 19.68,6.59 21.07,5.67C21.07,4.67 20.13,3.75 18.75,3.75C17.6,3.75 16.57,4.39 16.57,5.79C16.57,6.79 17.32,7.86 18.45,7.94C17.11,7.64 16,6.29 16,4.68C16,3 17.8,1.75 19.5,1.75C21.21,1.75 23,3 23,5.5C23,9.5 20,12 20,12V12M11.11,12.35C11.11,15.85 8.93,17.5 6.33,17.5C3.72,17.5 1.5,15.85 1.5,12.35C1.5,8.85 3.67,9.35 6.28,9.35C8.88,9.35 11.11,8.85 11.11,12.35M9.61,11.85C9.61,10.3 8.9,10.85 6.3,10.85C3.69,10.85 3,10.3 3,11.85C3,13.4 3.7,16 6.3,16C8.9,16 9.61,13.4 9.61,11.85Z" />
            </svg>
          </div>
          
          {/* Heart icon */}
          <div className="about-hero-icon icon-heart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#f4c38b">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          </div>
          
          {/* Croissant icon */}
          <div className="about-hero-icon icon-croissant">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" />
            </svg>
          </div>
        </div>
        
        <div className="about-hero-content">
          <h1>Our Story</h1>
          <p>Passion, community, and exceptional coffee</p>
        </div>
      </div>

      {/* Our Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div className="journey-content">
            <div className="journey-text">
              <h2 className="section-title">How We Started</h2>
              <p>
                Piquant Café was born from a simple passion for exceptional coffee and a desire to create a welcoming community space. We set out with a vision of a café that would serve not just outstanding beverages, but also become a neighborhood gathering place.
              </p>
              <p>
                What began as a small corner shop with just a few tables has grown into a beloved local institution, but our core values remain unchanged: quality ingredients, expert preparation, genuine hospitality, and a commitment to sustainability.
              </p>
            </div>
            <div className="journey-image">
              <img src={foundersImage} alt="Piquant Café founders" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>We source the finest ingredients, from our single-origin coffee beans to our locally grown produce. We believe quality is never an accident—it's the result of careful selection and preparation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M16 13h-3V3h-2v10H8l4 4 4-4M4 19v2h16v-2H4z"/>
                </svg>
              </div>
              <h3>Sustainability</h3>
              <p>Our commitment to the environment is reflected in everything we do—from our ethically sourced ingredients to our compostable packaging and energy-efficient equipment.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm8-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zM12 16c1.94 0 3.5-1.56 3.5-3.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.94 1.56 3.5 3.5 3.5z"/>
                </svg>
              </div>
              <h3>Community</h3>
              <p>We believe a café should be more than just a place to grab a coffee—it should be a hub for connection. We regularly host events, workshops, and partner with local organizations to give back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonials-divider"></div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="quote-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#f4c38b">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162C3.249 8.34 3.01 8.802 2.8 9.286c-.242.429-.487.892-.627 1.401-.047.444-.187.893-.187 1.347 0 .951.376 1.811.978 2.449.302.312.683.561 1.091.74.409.195.849.307 1.308.356.183.021.366.034.549.034.726 0 1.376-.177 1.938-.473.541-.297.999-.712 1.324-1.225.334-.483.584-1.064.692-1.689.109-.625.065-1.297-.095-1.889C9.562 10.564 9.279 10.307 8.91 10.184c-.36-.084-.705-.148-1.046-.185C7.543 9.98 7.304 10 7.261 10H6.5zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.253.354-.492.816-.702 1.3-.242.429-.487.892-.627 1.401-.047.444-.187.893-.187 1.347 0 .951.376 1.811.978 2.449.302.312.683.561 1.091.74.409.195.849.307 1.308.356.183.021.366.034.549.034.726 0 1.376-.177 1.938-.473.541-.297.999-.712 1.324-1.225.334-.483.584-1.064.692-1.689.109-.625.065-1.297-.095-1.889-.159-.474-.442-.731-.811-.854-.36-.084-.705-.148-1.046-.185C18.543 9.98 18.304 10 18.261 10H17.5z" />
                  </svg>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author-container">
                  <div className="testimonial-avatar">
                    <img src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=f4c38b&color=fff`} alt={testimonial.author} />
                  </div>
                  <div>
                    <p className="testimonial-author">{testimonial.author}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2 className="cta-title">Come Visit Us</h2>
          <p className="cta-text">
            We'd love to share our story with you in person. Stop by for a coffee and a chat!
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Find Our Location
            </Link>
            <Link to="/menu" className="btn btn-secondary">
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
