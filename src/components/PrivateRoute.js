import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './PrivateRoute.css';

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    // Cleanup function to ensure no modal classes remain when navigating
    useEffect(() => {
        // Clean up when component mounts (in case of direct navigation)
        document.body.classList.remove('modal-open');
        
        // Clean up when unmounting
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    // Show loading state
    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
        // Remove modal class before redirecting
        document.body.classList.remove('modal-open');
        // Pass the current location to redirect back after login
        return <Navigate to="/" state={{ from: location.pathname, showLogin: true }} replace />;
    }

    // If authenticated, render the protected component
    return children;
};

export default PrivateRoute;