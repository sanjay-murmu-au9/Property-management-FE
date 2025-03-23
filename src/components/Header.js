import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <h1>PropertyManager</h1>
                    </div>
                    <nav className="navigation">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="contact-info">
                        <span className="phone-number">+91 8260028808</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;