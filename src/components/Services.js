import React from 'react';
import './Services.css';

function PropertyTypes() {
    const propertyTypes = [
        {
            id: 1,
            title: "Apartments",
            description: "Browse through our collection of modern apartments, from cozy studios to spacious penthouses. Perfect for singles, couples, or small families looking for convenient living.",
            icon: "🏢"
        },
        {
            id: 2,
            title: "Independent Houses",
            description: "Explore standalone houses with private spaces and gardens. Ideal for families looking for privacy, space, and the freedom to customize their living environment.",
            icon: "🏠"
        },
        {
            id: 3,
            title: "Villas",
            description: "Discover luxury villas with premium amenities, spacious layouts, and exclusive locations. Perfect for those seeking an upscale lifestyle with all modern conveniences.",
            icon: "🏘️"
        },
        {
            id: 4,
            title: "Commercial Spaces",
            description: "Find the perfect commercial property for your business needs, from retail spaces and offices to warehouses and industrial units in prime locations.",
            icon: "🏪"
        },
        {
            id: 5,
            title: "PG & Co-living",
            description: "Affordable shared accommodations for students and working professionals with essential amenities and convenient locations near educational and business hubs.",
            icon: "👥"
        },
        {
            id: 6,
            title: "Farmhouses",
            description: "Experience countryside living with our selection of farmhouses located in serene environments. Perfect for weekend getaways or for those seeking a peaceful lifestyle.",
            icon: "🌄"
        }
    ];

    return (
        <section className="property-types-section section" id="property-types">
            <div className="container">
                <h2 className="section-title">Explore Property Types</h2>
                <div className="property-types-grid">
                    {propertyTypes.map(type => (
                        <div className="property-type-card" key={type.id}>
                            <div className="property-type-icon">{type.icon}</div>
                            <h3 className="property-type-title">{type.title}</h3>
                            <p className="property-type-description">{type.description}</p>
                            <a href="#" className="view-properties-link">View Properties</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PropertyTypes;