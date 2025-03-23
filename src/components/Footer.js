import React from 'react';
import './Footer.css';

function Footer({ onLoginClick, onSignupClick }) {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-company">
                        <h3 className="footer-heading">
                            <span className="logo-prime">Prime</span><span className="logo-property">Property</span>
                        </h3>
                        <p className="footer-description">
                            Discover your dream property among thousands of listings for rent or purchase across top cities in India.
                        </p>
                        <div className="footer-contact">
                            <p><span className="contact-icon">📍</span> 123 Bellandur, Bangalore, India</p>
                            <p><span className="contact-icon">📞</span> +91 8260028808</p>
                            <p><span className="contact-icon">✉️</span> info@primeproperty.com</p>
                        </div>
                        {/* <div className="footer-app-download">
                            <h4 className="app-download-title">Download Our App</h4>
                            <p className="app-download-text">Manage your property on the go with our mobile app</p>
                            <div className="app-buttons">
                                <a href="#" className="app-button">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" />
                                </a>
                                <a href="#" className="app-button">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Download on App Store" />
                                </a>
                            </div>
                        </div> */}
                        {/* <div className="footer-actions">
                            <button className="footer-login" onClick={onLoginClick}>Login</button>
                            <button className="footer-signup" onClick={onSignupClick}>Sign Up</button>
                        </div> */}
                    </div>

                    <div className="footer-links">
                        <div className="footer-nav">
                            <h4 className="footer-subheading">Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#property-types">Properties</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#app-contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-services">
                            <h4 className="footer-subheading">Property Types</h4>
                            <ul>
                                <li><a href="#property-types">Apartments</a></li>
                                <li><a href="#property-types">Houses</a></li>
                                <li><a href="#property-types">Villas</a></li>
                                <li><a href="#property-types">Commercial</a></li>
                            </ul>
                        </div>

                        <div className="footer-locations">
                            <h4 className="footer-subheading">Locations</h4>
                            <ul>
                                <li>Mumbai</li>
                                <li>Delhi NCR</li>
                                <li>Bangalore</li>
                                <li>Chennai</li>
                                {/* <li>Hyderabad</li> */}
                                {/* <li>Pune</li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© {new Date().getFullYear()} PrimeProperty. All rights reserved.</p>
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;