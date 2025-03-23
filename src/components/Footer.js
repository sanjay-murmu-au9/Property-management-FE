import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-company">
                        <h3 className="footer-heading">PropertyFinder</h3>
                        <p className="footer-description">
                            Find your dream property among thousands of listings for buying or renting across top cities in India.
                        </p>
                        <div className="footer-contact">
                            <p><span className="contact-icon">📱</span> +91 90360 15272</p>
                            <p><span className="contact-icon">✉️</span> info@propertyfinder.com</p>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-nav">
                            <h4 className="footer-subheading">Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#property-types">Properties</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#contact">Contact</a></li>
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
                                <li>Hyderabad</li>
                                <li>Pune</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© {new Date().getFullYear()} PropertyFinder. All rights reserved.</p>
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