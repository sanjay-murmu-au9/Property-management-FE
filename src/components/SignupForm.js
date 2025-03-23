import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm({ onClose }) {
    const [activeTab, setActiveTab] = useState('email');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        otp: '',
        agreeTerms: false
    });
    const [step, setStep] = useState(1);
    const [showOTP, setShowOTP] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setStep(1);
        setShowOTP(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeTab === 'email' && step === 1) {
            setStep(2);
        } else if (activeTab === 'mobile' && !showOTP) {
            // Simulate OTP sending
            setShowOTP(true);
            alert('OTP sent to your mobile number!');
        } else {
            // Final submission
            alert('Signup successful! Welcome to PropertyFinder.');
            if (onClose) onClose();
        }
    };

    const renderEmailSignup = () => (
        <div className="signup-form-content">
            {step === 1 ? (
                <>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <button type="submit" className="signup-button">Continue</button>
                </>
            ) : (
                <>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="agreeTerms">
                            I agree to PropertyFinder's Terms of Service and Privacy Policy
                        </label>
                    </div>
                    <button type="submit" className="signup-button">Create Account</button>
                </>
            )}
        </div>
    );

    const renderMobileSignup = () => (
        <div className="signup-form-content">
            {!showOTP ? (
                <>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Mobile Number</label>
                        <div className="phone-input-container">
                            <span className="country-code">+91</span>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Enter your mobile number"
                                pattern="[0-9]{10}"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="signup-button">Send OTP</button>
                </>
            ) : (
                <>
                    <div className="form-group">
                        <label htmlFor="otp">Enter OTP</label>
                        <div className="otp-input-container">
                            <input
                                type="text"
                                id="otp"
                                name="otp"
                                value={formData.otp}
                                onChange={handleInputChange}
                                placeholder="Enter 6-digit OTP"
                                maxLength="6"
                                required
                            />
                        </div>
                        <p className="resend-otp">
                            Didn't receive OTP? <button type="button" className="resend-button">Resend</button>
                        </p>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="agreeTerms">
                            I agree to PropertyFinder's Terms of Service and Privacy Policy
                        </label>
                    </div>
                    <button type="submit" className="signup-button">Verify & Create Account</button>
                </>
            )}
        </div>
    );

    return (
        <div className="signup-form-container">
            <div className="signup-form-modal">
                <div className="signup-form-header">
                    <h2>Create your PropertyFinder Account</h2>
                    <p>Find your perfect property faster with a PropertyFinder account</p>
                    {onClose && (
                        <button className="close-button" onClick={onClose}>×</button>
                    )}
                </div>

                <div className="social-signup">
                    <button className="google-signup">
                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
                        Sign up with Google
                    </button>
                </div>

                <div className="divider">
                    <span>or</span>
                </div>

                <div className="auth-tabs">
                    <button
                        className={`tab-button ${activeTab === 'email' ? 'active' : ''}`}
                        onClick={() => handleTabChange('email')}
                    >
                        Email
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'mobile' ? 'active' : ''}`}
                        onClick={() => handleTabChange('mobile')}
                    >
                        Mobile
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {activeTab === 'email' ? renderEmailSignup() : renderMobileSignup()}
                </form>

                <div className="signup-form-footer">
                    <p>Already have an account? <a href="#login">Log in</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;