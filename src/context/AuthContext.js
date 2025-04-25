import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, signInWithGoogle, checkRedirectResult } from '../services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// API configuration
const API_BASE_URL = "https://property-management-fu5c.onrender.com";
const GOOGLE_AUTH_ENDPOINT = "/auth/google";

// Create a context for authentication
const AuthContext = createContext(null);

// Authentication provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check for redirect result on initial load
    useEffect(() => {
        const checkForRedirect = async () => {
            try {
                const userData = await checkRedirectResult();
                if (userData) {
                    // User came back from a successful redirect sign-in
                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));
                }
            } catch (err) {
                console.error("Error checking redirect result:", err);
                setError("Failed to complete Google sign-in. Please try again.");
            } finally {
                // Continue loading process even if this fails
            }
        };
        
        checkForRedirect();
    }, []);

    // Check if user is already logged in on mount and set up Firebase auth state listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // Convert Firebase user to our app's user format
                const userData = {
                    id: firebaseUser.uid,
                    name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
                    email: firebaseUser.email,
                    photoURL: firebaseUser.photoURL,
                    provider: firebaseUser.providerData[0]?.providerId || 'password'
                };
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
            } else {
                // Check local storage as fallback
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    try {
                        setUser(JSON.parse(storedUser));
                    } catch (e) {
                        localStorage.removeItem('user');
                        setUser(null);
                    }
                } else {
                    setUser(null);
                }
            }
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup subscription
    }, []);

    // Login function
    const login = (userData) => {
        // Store user in state
        setUser(userData);
        
        // Store in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // Logout function
    const logout = async () => {
        try {
            await signOut(auth);
            // Clear user from state
            setUser(null);
            // Remove from localStorage
            localStorage.removeItem('user');
        } catch (error) {
            console.error("Error signing out: ", error);
            setError("Failed to sign out. Please try again.");
        }
    };

    // Google sign-in function
    const googleLogin = async () => {
        try {
            setError(null);
            const userData = await signInWithGoogle();
            if (userData) {
                login(userData);
                return userData;
            }
            // If userData is null, it means we started a redirect flow
            // The app will reload and the redirect result will be handled in the useEffect
            return null;
        } catch (error) {
            console.error("Google login error:", error);
            setError(error.message || "Failed to sign in with Google. Please try again.");
            throw error;
        }
    };

    // Check if user is authenticated
    const isAuthenticated = !!user;

    // Create the context value object
    const contextValue = {
        user,
        login,
        logout,
        googleLogin,
        isAuthenticated,
        loading,
        error
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;