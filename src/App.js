import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// Homepage Component to keep the current structure
function HomePage({ onSignupClick, onLoginClick }) {
    return (
        <>
            <Header onSignupClick={onSignupClick} onLoginClick={onLoginClick} />
            <PropertySearch onLoginClick={onLoginClick} />
            <PropertyTypes />
            <WhyChooseUs />
            <MarketStats />
            <PricingPlans onSignupClick={onSignupClick} />
            <BuyerBenefits />
            <HowToBuy />
            <MobileApp />
            <Testimonials />
            <FAQ />
            <Footer onLoginClick={onLoginClick} onSignupClick={onSignupClick} />
        </>
    );
}

function App() {
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    // Function to be passed to components to show the signup form
    const handleOpenSignup = () => {
        setShowSignupForm(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseSignup = () => {
        setShowSignupForm(false);
        document.body.classList.remove('modal-open');
    };

    // Function to be passed to components to show the login form
    const handleOpenLogin = () => {
        setShowLoginForm(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseLogin = () => {
        setShowLoginForm(false);
        document.body.classList.remove('modal-open');
    };

    return (
        <Router basename="/Property-management-FE">
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage onSignupClick={handleOpenSignup} onLoginClick={handleOpenLogin} />} />
                    <Route path="/category/:categoryId/:categoryTitle" element={<CategoryDetailsPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                
                {showSignupForm && <SignupForm onClose={handleCloseSignup} onLoginClick={handleOpenLogin} />}
                {showLoginForm && <LoginForm onClose={handleCloseLogin} onSignupClick={handleOpenSignup} />}
            </div>
        </Router>
    );
}

export default App;