import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="khaddamni-footer">
      <div className="footer-content">
        <div className="foterprt1">
        <div className="footerlogo">
            <img  className='logof' src="logo.png" alt="" />
        <h1 className='h1footer'>KHADDAMNI</h1>
        </div>
        
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/contact">Contact us</a>
        </div>
        
        <div className="app-buttons">
          <a href="#" className="app-button">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play"
              className="google-play-badge"
            />
          </a>
          <a href="#" className="app-button">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on the App Store"
              className="app-store-badge"
            />
          </a>
        </div>
        </div>
        <div className="footerprt2">
        <div className="copyright">
          © 2024 Khaddamni.com, All Rights Reserved.
        </div>
        
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms & Conditions</a>
          <span className="language">English</span>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;