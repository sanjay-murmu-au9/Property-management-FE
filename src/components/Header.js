import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

function Header({ onSignupClick, onLoginClick }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    // Default avatar icon (FontAwesome user icon in SVG format)
    const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23666' d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z'/%3E%3C/svg%3E";

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
                                    <li className="nav-item user-profile">
                                        <div className="user-avatar" onClick={handleMyAccountClick}>
                                            <img
                                                src={user?.photoURL || defaultAvatar}
                                                alt="Profile"
                                                className="avatar-image"
                                            />
                                        </div>
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