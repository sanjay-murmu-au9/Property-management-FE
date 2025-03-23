import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onClose, onSignupClick }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would add authentication logic
        alert('Login successful!');
        if (onClose) onClose();
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        alert('Password reset link has been sent to your email.');
    };

    const handleSignupClick = () => {
        if (onClose) onClose();
        if (onSignupClick) onSignupClick();
    };

    return (
        <div className="login-form-container">
            <div className="login-form-modal">
                <div className="login-form-header">
                    <h2>Log in to PropertyFinder</h2>
                    {onClose && (
                        <button className="close-button" onClick={onClose}>×</button>
                    )}
                </div>

                <div className="social-login">
                    <button className="google-login">
                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
                        Continue with Google
                    </button>
                </div>

                <div className="divider">
                    <span>or</span>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
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
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="form-options">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <button
                            className="forgot-password"
                            onClick={handleForgotPassword}
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button type="submit" className="login-button">
                        Log in
                    </button>
                </form>

                <div className="login-form-footer">
                    <p>Don't have an account? <button onClick={handleSignupClick} className="signup-text-button">Sign up</button></p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;