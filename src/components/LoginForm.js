import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../services/firebase';
import googleLogo from '../assets/images/google-logo.svg';
import './LoginForm.css';

function LoginForm({ onClose, onSignupClick }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, googleLogin } = useAuth();
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    // Get the redirect path from location state
    const from = location.state?.from || '/';

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        
        // Clear error when user starts typing
        if (error) {
            setError('');
        }
    };

    const handleResetEmailChange = (e) => {
        setResetEmail(e.target.value);
        if (error) {
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.email || !formData.password) {
            setError('Please enter both email and password');
            return;
        }
        
        try {
            setIsLoading(true);
            setError('');
            
            // Sign in with Firebase
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                formData.email, 
                formData.password
            );
            
            const userData = {
                id: userCredential.user.uid,
                name: userCredential.user.displayName || formData.email.split('@')[0],
                email: userCredential.user.email,
                provider: 'password'
            };
            
            // First close the modal
            if (onClose) {
                onClose();
            }
            
            // Then login the user
            login(userData);
            
            // Navigate if needed
            if (from !== '/') {
                navigate(from);
            }
            
        } catch (error) {
            console.error("Login error:", error);
            let errorMsg = "Failed to sign in. Please check your credentials.";
            
            if (error.code === 'auth/invalid-credential' || 
                error.code === 'auth/user-not-found' || 
                error.code === 'auth/wrong-password') {
                errorMsg = "Invalid email or password.";
            } else if (error.code === 'auth/too-many-requests') {
                errorMsg = "Too many failed login attempts. Please try again later.";
            }
            
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        
        if (!resetEmail.trim()) {
            setError('Please enter your email address');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail)) {
            setError('Please enter a valid email address');
            return;
        }
        
        try {
            setIsLoading(true);
            setError('');
            
            // Send password reset email
            await sendPasswordResetEmail(auth, resetEmail);
            
            setSuccessMessage('Password reset link has been sent to your email.');
            setTimeout(() => {
                setShowForgotPassword(false);
                setSuccessMessage('');
            }, 3000);
            
        } catch (error) {
            console.error("Password reset error:", error);
            let errorMsg = "Failed to send reset email. Please try again.";
            
            if (error.code === 'auth/user-not-found') {
                errorMsg = "No account found with this email address.";
            }
            
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
        setError('');
        setSuccessMessage('');
        
        // Pre-fill the reset email if we already have an email in the login form
        if (!showForgotPassword && formData.email) {
            setResetEmail(formData.email);
        }
    };

    const handleSignupClick = () => {
        if (onClose) {
            try {
                setTimeout(() => {
                    onClose();
                    if (onSignupClick) onSignupClick();
                }, 100);
            } catch (error) {
                console.error("Error closing login form:", error);
                onClose && onClose();
                if (onSignupClick) onSignupClick();
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true);
            setError('');
            
            await googleLogin();
            
            // Close the modal after successful login
            if (onClose) {
                onClose();
            }
            
            // Navigate if needed
            if (from !== '/') {
                navigate(from);
            }
        } catch (error) {
            console.error("Google login error:", error);
            let errorMsg = "Failed to sign in with Google. Please try again.";
            
            if (error.code === 'auth/popup-closed-by-user') {
                errorMsg = "Google sign-in was cancelled. Please try again.";
            } else if (error.code === 'auth/popup-blocked') {
                errorMsg = "Pop-up was blocked by your browser. Please allow pop-ups for this site.";
            }
            
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-form-modal">
                <div className="login-form-header">
                    <h2>{showForgotPassword ? 'Reset Password' : 'Welcome Back'}</h2>
                    <p>{showForgotPassword ? 
                        'Enter your email to receive a reset link' : 
                        'Log in to access your PrimeProperty account'}
                    </p>
                    {onClose && (
                        <button className="close-button" onClick={() => onClose()}>×</button>
                    )}
                </div>

                {error && <div className="error-message">{error}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                {!showForgotPassword ? (
                    <>
                        <div className="social-login">
                            <button 
                                className="google-login" 
                                onClick={handleGoogleLogin}
                                disabled={isLoading}
                            >
                                <img src={googleLogo} alt="Google" />
                                Continue with Google
                            </button>
                        </div>

                        <div className="divider">
                            <span>or login with email</span>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
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
                                        placeholder="Enter your email"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-with-icon">
                                    <i className="input-icon">🔒</i>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <div className="form-options">
                                <div className="remember-me">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                    />
                                    <label htmlFor="rememberMe">Remember me</label>
                                </div>
                                <button
                                    type="button"
                                    className="forgot-password"
                                    onClick={toggleForgotPassword}
                                    disabled={isLoading}
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <button 
                                type="submit" 
                                className="login-button"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing in...' : 'Log in'}
                            </button>
                        </form>
                    </>
                ) : (
                    <form onSubmit={handleForgotPassword} className="forgot-password-form">
                        <div className="form-group">
                            <label htmlFor="resetEmail">Email Address</label>
                            <div className="input-with-icon">
                                <i className="input-icon">✉️</i>
                                <input
                                    type="email"
                                    id="resetEmail"
                                    value={resetEmail}
                                    onChange={handleResetEmailChange}
                                    placeholder="Enter your email"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        
                        <div className="reset-buttons">
                            <button 
                                type="button" 
                                className="back-to-login"
                                onClick={toggleForgotPassword}
                                disabled={isLoading}
                            >
                                Back to Login
                            </button>
                            <button 
                                type="submit" 
                                className="reset-button"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </div>
                    </form>
                )}

                <div className="login-form-footer">
                    <p>Don't have an account? <button onClick={handleSignupClick} className="signup-text-button" disabled={isLoading}>Sign up</button></p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;