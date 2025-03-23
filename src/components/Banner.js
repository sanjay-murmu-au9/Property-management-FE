import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <section className="banner" id="home">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-text">
                        <h1>Comprehensive Property Management Services</h1>
                        <p>From securing verified tenants to regular property maintenance, we handle everything for you</p>
                        <button className="btn">Talk to Us Today!</button>
                    </div>
                    <div className="banner-image">
                        <img src="https://via.placeholder.com/600x400" alt="Property Management" />
                    </div>
                </div>
                <div className="location-selector">
                    <h3>Select Your City</h3>
                    <div className="city-buttons">
                        <button className="city-btn active">Mumbai</button>
                        <button className="city-btn">Delhi NCR</button>
                        <button className="city-btn">Bangalore</button>
                        <button className="city-btn">Chennai</button>
                        <button className="city-btn">Hyderabad</button>
                        <button className="city-btn">Pune</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;