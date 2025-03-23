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
                // Replace with your actual API endpoint
                const response = await fetch(`https://api.example.com/properties/category/${categoryId}`);
                
                // For demonstration, using a timeout to simulate API delay
                // Remove this in production
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch properties: ${response.status}`);
                }
                
                const data = await response.json();
                setProperties(data);
            } catch (err) {
                console.error("Error fetching properties:", err);
                setError("Failed to load properties. Please try again later.");
                
                // For demonstration - using mock data when API fails
                // Remove this in production and handle errors properly
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
                { id: 1001, title: "Modern Studio in Downtown", location: "Downtown Area", price: "$1,200/month", image: "https://via.placeholder.com/300x200?text=Apartment+1", beds: 1, baths: 1, area: "450 sq ft" },
                { id: 1002, title: "Spacious 2BHK with Balcony", location: "Westside Heights", price: "$1,800/month", image: "https://via.placeholder.com/300x200?text=Apartment+2", beds: 2, baths: 2, area: "850 sq ft" },
                { id: 1003, title: "Luxury 3BHK Penthouse", location: "Skyline Towers", price: "$3,500/month", image: "https://via.placeholder.com/300x200?text=Apartment+3", beds: 3, baths: 2, area: "1200 sq ft" },
            ],
            2: [ // Independent Houses
                { id: 2001, title: "Family Bungalow with Garden", location: "Greenfield Suburbs", price: "$2,500/month", image: "https://via.placeholder.com/300x200?text=House+1", beds: 3, baths: 2, area: "1800 sq ft" },
                { id: 2002, title: "Modern Duplex with Garage", location: "Hillside Community", price: "$3,200/month", image: "https://via.placeholder.com/300x200?text=House+2", beds: 4, baths: 3, area: "2200 sq ft" },
            ],
            3: [ // Villas
                { id: 3001, title: "Beachfront Luxury Villa", location: "Coastal Paradise", price: "$5,000/month", image: "https://via.placeholder.com/300x200?text=Villa+1", beds: 4, baths: 4, area: "3000 sq ft" },
                { id: 3002, title: "Mountain View Villa with Pool", location: "Highland Estates", price: "$4,500/month", image: "https://via.placeholder.com/300x200?text=Villa+2", beds: 5, baths: 4, area: "3500 sq ft" },
            ],
            4: [ // Commercial
                { id: 4001, title: "Prime Office Space", location: "Business District", price: "$3,000/month", image: "https://via.placeholder.com/300x200?text=Commercial+1", area: "1500 sq ft", type: "Office" },
                { id: 4002, title: "Retail Shop in Mall", location: "City Center Mall", price: "$4,200/month", image: "https://via.placeholder.com/300x200?text=Commercial+2", area: "800 sq ft", type: "Retail" },
            ],
            5: [ // PG & Co-living
                { id: 5001, title: "Student Hostel Near University", location: "University Area", price: "$400/month", image: "https://via.placeholder.com/300x200?text=PG+1", type: "Shared Room (3 beds)" },
                { id: 5002, title: "Co-living Space for Professionals", location: "Tech Park Vicinity", price: "$550/month", image: "https://via.placeholder.com/300x200?text=PG+2", type: "Private Room" },
            ],
            6: [ // Farmhouses
                { id: 6001, title: "Weekend Getaway Farmhouse", location: "Riverside Retreat", price: "$300/night", image: "https://via.placeholder.com/300x200?text=Farmhouse+1", beds: 3, baths: 2, area: "2000 sq ft" },
                { id: 6002, title: "Organic Farmhouse with Orchard", location: "Countryside Valley", price: "$3,500/month", image: "https://via.placeholder.com/300x200?text=Farmhouse+2", beds: 4, baths: 3, area: "5 acres" },
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