import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PropertySearch from './components/Banner';
import WhyChooseUs from './components/Benefits';
import MarketStats from './components/Stats';
import PricingPlans from './components/ComparisonTable';
import MobileApp from './components/AppFeatures';
import PropertyTypes from './components/Services';
import BuyerBenefits from './components/Advantages';
import HowToBuy from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CategoryDetailsPage from './components/CategoryDetailsPage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, useAuth } from './context/AuthContext';

// HomePage component that uses useLocation and other hooks
const HomePage = ({ onSignupClick, onLoginClick }) => {
    const location = useLocation();
    
    // On component mount and cleanup
    useEffect(() => {
        // Ensure we start at the top of page when navigating to home
        window.scrollTo(0, 0);
        
        // Clean up event listeners and classes when navigating away
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);
    
    // Check if we need to show the login modal based on the location state
    useEffect(() => {
        if (location.state?.showLogin) {
            onLoginClick();
            // Clear the state after opening the modal
            window.history.replaceState({}, document.title);
        }
    }, [location, onLoginClick]);
    
    return (
        <>
            <Header onSignupClick={onSignupClick} onLoginClick={onLoginClick} />
            <PropertySearch onLoginClick={onLoginClick} />
            <PropertyTypes />
            <WhyChooseUs />
            <MarketStats />
            <PricingPlans onSignupClick={onSignupClick} />
            <BuyerBenefits />
            <HowToBuy onSignupClick={onSignupClick} />
            <MobileApp />
            <Testimonials />
            <FAQ />
            <Footer onLoginClick={onLoginClick} onSignupClick={onSignupClick} />
        </>
    );
}

// Wrapper for modals that checks authentication state
const AuthAwareModals = ({ showSignupForm, showLoginForm, handleCloseSignup, handleCloseLogin, handleOpenSignup, handleOpenLogin }) => {
    const { isAuthenticated } = useAuth();
    
    // Don't show auth modals if user is already authenticated
    if (isAuthenticated) {
        return null;
    }
    
    return (
        <>
            {showSignupForm && <SignupForm onClose={handleCloseSignup} onLoginClick={handleOpenLogin} />}
            {showLoginForm && <LoginForm onClose={handleCloseLogin} onSignupClick={handleOpenSignup} />}
        </>
    );
};

function App() {
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    // Function to be passed to components to show the signup form
    const handleOpenSignup = () => {
        try {
            setShowSignupForm(true);
            document.body.classList.add('modal-open');
        } catch (error) {
            console.error("Error opening signup form:", error);
        }
    };

    const handleCloseSignup = () => {
        try {
            setShowSignupForm(false);
            document.body.classList.remove('modal-open');
        } catch (error) {
            console.error("Error closing signup form:", error);
        }
    };

    // Function to be passed to components to show the login form
    const handleOpenLogin = () => {
        try {
            setShowLoginForm(true);
            document.body.classList.add('modal-open');
        } catch (error) {
            console.error("Error opening login form:", error);
        }
    };

    const handleCloseLogin = () => {
        try {
            setShowLoginForm(false);
            document.body.classList.remove('modal-open');
        } catch (error) {
            console.error("Error closing login form:", error);
        }
    };

    return (
        <AuthProvider>
            <Router basename="/Property-management-FE">
                <div className="App">
                    <Routes>
                        <Route path="/" element={<HomePage onSignupClick={handleOpenSignup} onLoginClick={handleOpenLogin} />} />
                        <Route 
                            path="/category/:categoryId/:categoryTitle" 
                            element={
                                <PrivateRoute>
                                    <CategoryDetailsPage />
                                </PrivateRoute>
                            } 
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    
                    <AuthAwareModals 
                        showSignupForm={showSignupForm}
                        showLoginForm={showLoginForm}
                        handleCloseSignup={handleCloseSignup}
                        handleCloseLogin={handleCloseLogin}
                        handleOpenSignup={handleOpenSignup}
                        handleOpenLogin={handleOpenLogin}
                    />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;