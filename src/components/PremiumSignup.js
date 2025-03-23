import React, { useState } from 'react';
import './PremiumSignup.css';
import SignupForm from './SignupForm';

function PremiumSignup() {
    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleOpenSignup = () => {
        setShowSignupForm(true);
    };

    const handleCloseSignup = () => {
        setShowSignupForm(false);
    };

    return (
        <section className="premium-signup-section section">
            <div className="container">
                <div className="premium-content">
                    <div className="premium-text">
                        <h2 className="section-title">Upgrade to PrimeProperty Premium</h2>
                        <p className="premium-description">
                            Get exclusive access to premium listings, priority customer support, and advanced search filters
                        </p>
                        <ul className="premium-benefits">
                            <li><span className="benefit-icon">✓</span> Exclusive premium properties not available to regular users</li>
                            <li><span className="benefit-icon">✓</span> Early access to new listings before they go public</li>
                            <li><span className="benefit-icon">✓</span> Direct contact with property owners - no middlemen</li>
                            <li><span className="benefit-icon">✓</span> Advanced search filters for finding your perfect property</li>
                            <li><span className="benefit-icon">✓</span> Dedicated customer support via phone and email</li>
                        </ul>
                        <button className="premium-button" onClick={handleOpenSignup}>
                            Join Premium Now
                        </button>
                    </div>
                    <div className="premium-image">
                        <img src="https://via.placeholder.com/400x500" alt="PrimeProperty Premium" />
                        <div className="premium-badge">
                            <span>PREMIUM</span>
                        </div>
                    </div>
                </div>
            </div>

            {showSignupForm && <SignupForm onClose={handleCloseSignup} />}
        </section>
    );
}

export default PremiumSignup;