import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import ComparisonTable from './components/ComparisonTable';
import AppFeatures from './components/AppFeatures';
import Services from './components/Services';
import Advantages from './components/Advantages';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Benefits />
            <Stats />
            <ComparisonTable />
            <AppFeatures />
            <Services />
            <Advantages />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;