import React, { useState, useEffect } from 'react';
import './CategoryDetails.css';

const CategoryDetails = ({ categoryId, categoryTitle }) => {
    const [loading, setLoading] = useState(true);
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryProperties = async () => {
            if (!categoryId) return;

            setLoading(true);
            setError(null);

            try {
                // For demo purposes, using a timeout to simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // For demo purposes, directly using mock data
                // In a real app, you would make an API call here
                setProperties(getMockProperties(categoryId));
            } catch (err) {
                console.error("Error fetching properties:", err);
                setError("Failed to load properties. Please try again later.");

                // Fallback to mock data
                setProperties(getMockProperties(categoryId));
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryProperties();
    }, [categoryId]);

    // Mock data function - replace with actual API implementation
    const getMockProperties = (catId) => {
        const mockData = {
            1: [ // Apartments
                { id: 1001, title: "Modern Studio in Downtown", location: "Downtown Area", price: "Rs.12,200/month", image: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 1, baths: 1, area: "450 sq ft" },
                { id: 1002, title: "Spacious 2BHK with Balcony", location: "Westside Heights", price: "Rs12,800/month", image: "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 2, baths: 2, area: "850 sq ft" },
                { id: 1003, title: "Luxury 3BHK Penthouse", location: "Skyline Towers", price: "Rs.300500/month", image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 3, baths: 2, area: "1200 sq ft" },
            ],
            2: [ // Independent Houses
                { id: 2001, title: "Family Bungalow with Garden", location: "Greenfield Suburbs", price: "Rs.20,0500/month", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 3, baths: 2, area: "1800 sq ft" },
                { id: 2002, title: "Modern Duplex with Garage", location: "Hillside Community", price: "Rs.30,0200/month", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 4, baths: 3, area: "2200 sq ft" },
            ],
            3: [ // Villas
                { id: 3001, title: "Beachfront Luxury Villa", location: "Coastal Paradise", price: "Rs.50,0000/month", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 4, baths: 4, area: "3000 sq ft" },
                { id: 3002, title: "Mountain View Villa with Pool", location: "Highland Estates", price: "Rs.40,0500/month", image: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 5, baths: 4, area: "3500 sq ft" },
            ],
            4: [ // Commercial
                { id: 4001, title: "Prime Office Space", location: "Business District", price: "Rs.30,0000/month", image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", area: "1500 sq ft", type: "Office" },
                { id: 4002, title: "Retail Shop in Mall", location: "City Center Mall", price: "Rs.40,200/month", image: "https://images.pexels.com/photos/2954405/pexels-photo-2954405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", area: "800 sq ft", type: "Retail" },
            ],
            5: [ // PG & Co-living
                { id: 5001, title: "Student Hostel Near University", location: "University Area", price: "Rs.40,000/month", image: "https://images.pexels.com/photos/31785126/pexels-photo-31785126/free-photo-of-aerial-view-of-washington-state-university-campus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", type: "Shared Room (3 beds)" },
                { id: 5002, title: "Co-living Space for Professionals", location: "Tech Park Vicinity", price: "Rs55,00/month", image: "https://images.pexels.com/photos/6956622/pexels-photo-6956622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", type: "Private Room" },
            ],
            6: [ // Farmhouses
                { id: 6001, title: "Weekend Getaway Farmhouse", location: "Riverside Retreat", price: "Rs.30,000/night", image: "https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 3, baths: 2, area: "2000 sq ft" },
                { id: 6002, title: "Organic Farmhouse with Orchard", location: "Countryside Valley", price: "Rs.30,500/month", image: "https://images.pexels.com/photos/31718839/pexels-photo-31718839/free-photo-of-artist-painting-in-serene-outdoor-landscape-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", beds: 4, baths: 3, area: "5 acres" },
            ]
        };

        return mockData[catId] || [];
    };

    if (loading) {
        return (
            <div className="category-details-container">
                <h2>Loading {categoryTitle} Properties...</h2>
                <div className="loading-spinner"></div>
            </div>
        );
    }

    if (error && properties.length === 0) {
        return (
            <div className="category-details-container error">
                <h2>Error Loading {categoryTitle}</h2>
                <p>{error}</p>
                <button className="retry-button" onClick={() => window.location.reload()}>
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="category-details-container">
            <h2>{categoryTitle} Properties</h2>

            {properties.length === 0 ? (
                <div className="no-properties">
                    <p>No properties found for this category.</p>
                </div>
            ) : (
                <div className="property-grid">
                    {properties.map(property => (
                        <div className="property-card" key={property.id}>
                            <div className="property-image">
                                <img src={property.image} alt={property.title} />
                            </div>
                            <div className="property-info">
                                <h3>{property.title}</h3>
                                <p className="property-location">{property.location}</p>
                                <p className="property-price">{property.price}</p>

                                <div className="property-features">
                                    {property.beds && (
                                        <span className="feature">
                                            <i className="feature-icon">🛏️</i> {property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}
                                        </span>
                                    )}

                                    {property.baths && (
                                        <span className="feature">
                                            <i className="feature-icon">🚿</i> {property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}
                                        </span>
                                    )}

                                    {property.area && (
                                        <span className="feature">
                                            <i className="feature-icon">📏</i> {property.area}
                                        </span>
                                    )}

                                    {property.type && (
                                        <span className="feature">
                                            <i className="feature-icon">🏷️</i> {property.type}
                                        </span>
                                    )}
                                </div>

                                <button className="view-details-btn">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryDetails;