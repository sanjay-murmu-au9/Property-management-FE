import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-company">
                        <h3 className="footer-heading">PropertyManager</h3>
                        <p className="footer-description">
                            Professional property management services to help property owners manage their real estate easily.
                        </p>
                        <div className="footer-contact">
                            <p><span className="contact-icon">📱</span> +91 90360 15272</p>
                            <p><span className="contact-icon">✉️</span> info@propertymanager.com</p>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-nav">
                            <h4 className="footer-subheading">Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-services">
                            <h4 className="footer-subheading">Our Services</h4>
                            <ul>
                                <li><a href="#services">Tenant Management</a></li>
                                <li><a href="#services">Rent Collection</a></li>
                                <li><a href="#services">Property Maintenance</a></li>
                                <li><a href="#services">Legal Assistance</a></li>
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
                    <p className="copyright">© {new Date().getFullYear()} PropertyManager. All rights reserved.</p>
                    <div className="footer-social">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Twitter</a>
                        <a href="#" className="social-icon">LinkedIn</a>
                        <a href="#" className="social-icon">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;