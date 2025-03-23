import React, { useState } from 'react';
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

function App() {
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    // Function to be passed to components to show the signup form
    const handleOpenSignup = () => {
        setShowLoginForm(false);
        setShowSignupForm(true);
    };

    const handleCloseSignup = () => {
        setShowSignupForm(false);
    };

    // Function to be passed to components to show the login form
    const handleOpenLogin = () => {
        setShowSignupForm(false);
        setShowLoginForm(true);
    };

    const handleCloseLogin = () => {
        setShowLoginForm(false);
    };

    return (
        <div className="App">
            <Header onSignupClick={handleOpenSignup} onLoginClick={handleOpenLogin} />
            <PropertySearch />
            <PropertyTypes />
            <WhyChooseUs />
            <MarketStats />
            <PricingPlans onSignupClick={handleOpenSignup} />
            <BuyerBenefits />
            <HowToBuy />
            <MobileApp />
            <Testimonials />
            <FAQ />
            <Footer onLoginClick={handleOpenLogin} onSignupClick={handleOpenSignup} />
            {showSignupForm && <SignupForm onClose={handleCloseSignup} onLoginClick={handleOpenLogin} />}
            {showLoginForm && <LoginForm onClose={handleCloseLogin} onSignupClick={handleOpenSignup} />}
        </div>
    );
}

export default App;