import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-left">
        <h3>Get real-time alerts on accidents, emergency contacts, and nearby assistance, all in one place.</h3>
       
      </div>
      <div className="footer-middle">
        <nav>
          <ul>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </nav>
      </div>


      <div className="footer-right">
        <div className="subscribe">
          <h3>Subscribe</h3>
          <p>Join our newsletter to stay up to date on features and releases.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <small>
            By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our
            company.
          </small>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 ResQTrack. All rights reserved</p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of use</a>
        <a href="#cookies">Cookies</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer