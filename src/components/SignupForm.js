import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import googleLogo from '../assets/images/google-logo.svg';
import './SignupForm.css';

function SignupForm({ onClose, onLoginClick }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login, googleLogin } = useAuth();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear field-specific error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }

        // Clear general error message
        if (errorMessage) {
            setErrorMessage('');
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            setIsLoading(true);
            setErrorMessage('');

            // Create user with email and password using Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const userData = {
                id: userCredential.user.uid,
                name: formData.email.split('@')[0], // Use part of email as name
                email: formData.email,
                provider: 'password'
            };

            // First close the modal
            if (onClose) {
                onClose();
            }

            // Then login the user
            login(userData);

        } catch (error) {
            console.error("Signup error:", error);
            let errorMsg = "Failed to create account. Please try again.";

            if (error.code === 'auth/email-already-in-use') {
                errorMsg = "This email is already registered. Please log in instead.";
            } else if (error.code === 'auth/invalid-email') {
                errorMsg = "Invalid email address format.";
            } else if (error.code === 'auth/weak-password') {
                errorMsg = "Password is too weak. Please choose a stronger password.";
            }

            setErrorMessage(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            setIsLoading(true);
            setErrorMessage('');

            await googleLogin();

            // Close the modal after successful signup
            if (onClose) {
                onClose();
            }
        } catch (error) {
            console.error("Google signup error:", error);
            let errorMsg = "Failed to sign up with Google. Please try again.";

            if (error.code === 'auth/popup-closed-by-user') {
                errorMsg = "Google sign-in was cancelled. Please try again.";
            } else if (error.code === 'auth/popup-blocked') {
                errorMsg = "Pop-up was blocked by your browser. Please allow pop-ups for this site.";
            }

            setErrorMessage(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoginClick = () => {
        // First close the signup modal
        if (onClose) {
            onClose();
        }

        // Then open the login modal with a slight delay to ensure smooth transition
        setTimeout(() => {
            if (onLoginClick) {
                onLoginClick();
            }
        }, 100);
    };

    return (
        <div className="signup-form-container">
            <div className="signup-form-modal">
                <div className="signup-form-header">
                    <h2>Create an Account</h2>
                    <p>Join our community to unlock premium features</p>
                    <button className="close-button" onClick={() => onClose()}>×</button>
                </div>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <div className="social-signup">
                    <button
                        className="google-signup"
                        onClick={handleGoogleSignup}
                        disabled={isLoading}
                    >
                        <img src={googleLogo} alt="Google" />
                        Sign up with Google
                    </button>
                </div>

                <div className="divider">
                    <span>or sign up with email</span>
                </div>

                <div className="signup-form-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-with-icon">
                                <i className="input-icon">✉️</i>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={errors.email ? 'error' : ''}
                                    placeholder="Enter your email"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.email && <span className="field-error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Create Password</label>
                            <div className="input-with-icon">
                                <i className="input-icon">🔒</i>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={errors.password ? 'error' : ''}
                                    placeholder="Create a strong password"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.password && <span className="field-error">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-with-icon">
                                <i className="input-icon">🔒</i>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={errors.confirmPassword ? 'error' : ''}
                                    placeholder="Confirm your password"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
                        </div>

                        <div className="terms-privacy">
                            By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                        </div>

                        <button
                            type="submit"
                            className="signup-button"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>
                </div>

                <div className="signup-form-footer">
                    Already have an account? <button className="login-text-button" onClick={handleLoginClick}>Log In</button>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;