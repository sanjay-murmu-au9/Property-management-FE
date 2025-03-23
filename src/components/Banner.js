import React, { useState } from 'react';
import './Banner.css';

function PropertySearch() {
    const [propertyType, setPropertyType] = useState('all');
    const [location, setLocation] = useState('Mumbai');

    return (
        <section className="property-search" id="home">
            <div className="container">
                <div className="search-content">
                    <div className="search-text">
                        <h1>Find Your Dream Property</h1>
                        <p>Discover thousands of apartments, houses, and properties for rent or sale</p>
                    </div>

                    <div className="search-box">
                        <div className="search-filters">
                            <div className="filter-group">
                                <label>Property Type</label>
                                <select
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                >
                                    <option value="all">All Properties</option>
                                    <option value="apartment">Apartments</option>
                                    <option value="house">Houses</option>
                                    <option value="villa">Villas</option>
                                    <option value="commercial">Commercial</option>
                                </select>
                            </div>

                            <div className="filter-group">
                                <label>Purpose</label>
                                <select>
                                    <option value="buy">Buy</option>
                                    <option value="rent">Rent</option>
                                </select>
                            </div>

                            <div className="filter-group">
                                <label>Price Range</label>
                                <select>
                                    <option value="any">Any</option>
                                    <option value="budget">Budget (Under ₹20L)</option>
                                    <option value="mid">Mid-range (₹20L-50L)</option>
                                    <option value="luxury">Luxury (Above ₹50L)</option>
                                </select>
                            </div>
                        </div>

                        <button className="search-btn">Search Properties</button>
                    </div>
                </div>

                <div className="location-selector">
                    <h3>Popular Cities</h3>
                    <div className="city-buttons">
                        <button
                            className={`city-btn ${location === 'Mumbai' ? 'active' : ''}`}
                            onClick={() => setLocation('Mumbai')}
                        >Mumbai</button>
                        <button
                            className={`city-btn ${location === 'Delhi NCR' ? 'active' : ''}`}
                            onClick={() => setLocation('Delhi NCR')}
                        >Delhi NCR</button>
                        <button
                            className={`city-btn ${location === 'Bangalore' ? 'active' : ''}`}
                            onClick={() => setLocation('Bangalore')}
                        >Bangalore</button>
                        <button
                            className={`city-btn ${location === 'Chennai' ? 'active' : ''}`}
                            onClick={() => setLocation('Chennai')}
                        >Chennai</button>
                        <button
                            className={`city-btn ${location === 'Hyderabad' ? 'active' : ''}`}
                            onClick={() => setLocation('Hyderabad')}
                        >Hyderabad</button>
                        <button
                            className={`city-btn ${location === 'Pune' ? 'active' : ''}`}
                            onClick={() => setLocation('Pune')}
                        >Pune</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PropertySearch;