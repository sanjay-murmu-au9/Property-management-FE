import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

function Header({ onSignupClick, onLoginClick }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLoginClick = () => {
        closeMenu();
        if (!isAuthenticated) {
            onLoginClick();
        }
    };

    const handleSignupClick = () => {
        closeMenu();
        if (!isAuthenticated) {
            onSignupClick();
        }
    };

    const handleLogout = () => {
        closeMenu();
        logout();
        navigate('/');
    };

    const handleMyAccountClick = () => {
        closeMenu();
        // For now, just show an alert. In a real app, you would navigate to the user's profile.
        alert('My Account feature coming soon!');
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <a href="#home" onClick={closeMenu}><span className="logo-prime">Prime</span><span className="logo-property">Property</span></a>
                    </div>

                    <button className="menu-toggle" onClick={toggleMenu}>
                        <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
                    </button>

                    <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#home" onClick={closeMenu}>Home</a></li>
                            <li className="nav-item"><a href="#property-types" onClick={closeMenu}>Properties</a></li>
                            <li className="nav-item"><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
                            <li className="nav-item"><a href="#app-contact" onClick={closeMenu}>Contact</a></li>
                            
                            {isAuthenticated ? (
                                <>
                                    <li className="nav-item user-greeting">
                                        <span>Hello, {user?.name || 'User'}</span>
                                    </li>
                                    <li className="nav-item account-btn">
                                        <button onClick={handleMyAccountClick}>My Account</button>
                                    </li>
                                    <li className="nav-item logout-btn">
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item login-btn">
                                        <button onClick={handleLoginClick}>Login</button>
                                    </li>
                                    <li className="nav-item signup-btn">
                                        <button onClick={handleSignupClick}>Sign Up</button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;