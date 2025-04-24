import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import './LoginForm.css';

function LoginForm({ onClose, onSignupClick }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, googleLogin } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Todo: Implement actual password reset functionality
        alert('Password reset link has been sent to your email.');
    };

    const handleSignupClick = () => {
        if (onClose) {
            try {
                setTimeout(() => {
                    onClose();
                    if (onSignupClick) onSignupClick();
                }, 0);
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
                    <h2>Log in to PrimeProperty</h2>
                    {onClose && (
                        <button className="close-button" onClick={() => onClose()}>×</button>
                    )}
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="social-login">
                    <button 
                        className="google-login" 
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                                disabled={isLoading}
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <button
                            type="button"
                            className="forgot-password"
                            onClick={handleForgotPassword}
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

                <div className="login-form-footer">
                    <p>Don't have an account? <button onClick={handleSignupClick} className="signup-text-button" disabled={isLoading}>Sign up</button></p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;