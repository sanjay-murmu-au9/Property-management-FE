import React, { useState } from 'react';
import './Header.css';

function Header({ onSignupClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <a href="#home">PropertyFinder</a>
                    </div>

                    <button className="menu-toggle" onClick={toggleMenu}>
                        <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
                    </button>

                    <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#home">Home</a></li>
                            <li className="nav-item"><a href="#property-types">Properties</a></li>
                            <li className="nav-item"><a href="#pricing">Pricing</a></li>
                            <li className="nav-item"><a href="#contact">Contact</a></li>
                            <li className="nav-item login-btn"><a href="#login">Login</a></li>
                            <li className="nav-item signup-btn">
                                <button onClick={onSignupClick}>Sign Up</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;