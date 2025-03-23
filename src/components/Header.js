import React, { useState } from 'react';
import './Header.css';

function Header({ onSignupClick, onLoginClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <a href="#home"><span className="logo-prime">Prime</span><span className="logo-property">Property</span></a>
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
                            <li className="nav-item login-btn">
                                <button onClick={onLoginClick}>Login</button>
                            </li>
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