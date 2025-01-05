import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/style.css"; // Import your CSS file
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles

const Home = () => {
  return (
    <div>
      <header>
        <div className="header">
          <h1>Marriage Counseling</h1>
        </div>

        <div className="pannel">
          <div className="pannel-opt">
            <Link to="/" style={{ fontWeight: "bold" }}>
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/self-assessment">Self Assessment</Link>
            <Link to="/helpline" id="helpline-link">
              Helpline
            </Link>
            <Link to="/feedback">Feedback</Link>
          </div>
        </div>
      </header>

      <div className="slider">
        <figure>
          <div className="slide">
            <img src="/assets/slide1a.jpeg" alt="Marriage Counseling" />
            <div className="slide-overlay">
              <h2>Marriage Counseling</h2>
              <p>Find support for a happier life.</p>
            </div>
          </div>
          <div className="slide">
            <img src="/assets/slider.jpg" alt="Women Rights" />
            <div className="slide-overlay">
              <h2>Women Rights</h2>
              <p>Learn about your rights and resources.</p>
            </div>
          </div>
          <div className="slide">
            <img src="/assets/slide3.jpg" alt="Personal Growth" />
            <div className="slide-overlay">
              <h2>Personal Growth</h2>
              <p>Build a brighter future for yourself.</p>
            </div>
          </div>
          <div className="slide">
            <img src="/assets/slide4a.jpeg" alt="Happy Family" />
            <div className="slide-overlay">
              <h2>Happy Family</h2>
              <p>Build a happy family.</p>
            </div>
          </div>
        </figure>
      </div>

      <section className="popup-block">
        <div className="circle-card" id="PreMarital-counseling">
          <h2>Premarital Counseling</h2>
          <Link to="/premarital" className="button">
            Learn More
          </Link>
        </div>
        <div className="circle-card" id="Marital-counseling">
          <h2>Marital Counseling</h2>
          <Link to="/marital" className="button">
            Learn More
          </Link>
        </div>
        <div className="circle-card" id="Post-Separation-counseling">
          <h2>Post-Separation Counseling</h2>
          <Link to="/postseparation" className="button">
            Learn More
          </Link>
        </div>
      </section>

      <footer>
        <p>© 2024 Women Helpline 24x7 | All Rights Reserved</p>
        <div className="social-icons">
          <a href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
