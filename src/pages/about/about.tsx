import { Link } from 'react-router-dom';
import './about.css';

// Import images
import foundersImage from '../../assets/founders.jpg';
import teamMember1 from '../../assets/team-member1.jpg';
import teamMember2 from '../../assets/team-member2.jpg';
import teamMember3 from '../../assets/team-member3.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
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
                Piquant Café was born in 2010 from a simple passion for exceptional coffee and a desire to create a welcoming community space. Our founders, Sarah and Michael, met in culinary school and shared a vision of a café that would serve not just outstanding beverages, but also become a neighborhood gathering place.
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

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-photo">
                <img src={teamMember1} alt="Sarah Johnson" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className="team-role">Co-Founder & Head Barista</p>
              <p className="team-bio">With over 15 years of experience in specialty coffee, Sarah has competed in national barista championships and is passionate about coffee education.</p>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <img src={teamMember2} alt="Michael Chen" />
              </div>
              <h3>Michael Chen</h3>
              <p className="team-role">Co-Founder & Executive Chef</p>
              <p className="team-bio">A graduate of the Culinary Institute of America, Michael brings his expertise in flavor combinations to both our food menu and specialty drinks.</p>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <img src={teamMember3} alt="Elena Rodriguez" />
              </div>
              <h3>Elena Rodriguez</h3>
              <p className="team-role">Pastry Chef</p>
              <p className="team-bio">Elena creates all of our delicious pastries in-house daily, combining classic techniques with innovative flavors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Piquant Café has been my second home for years. The staff knows me by name, remembers my order, and the quality is consistently fantastic. This place embodies what a local café should be."
              </p>
              <p className="testimonial-author">— James L., Regular Since 2012</p>
            </div>
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
