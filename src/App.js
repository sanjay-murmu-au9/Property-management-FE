import React from 'react';
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
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <PropertySearch />
            <PropertyTypes />
            <WhyChooseUs />
            <MarketStats />
            <PricingPlans />
            <BuyerBenefits />
            <HowToBuy />
            <MobileApp />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;