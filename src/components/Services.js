import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function PropertyTypes() {
    const navigate = useNavigate();

    const propertyTypes = [
        {
            id: 1,
            title: "Apartments",
            description: "Browse through our collection of modern apartments, from cozy studios to spacious penthouses. Perfect for singles, couples, or small families looking for convenient living.",
            icon: "🏢",
            subcategories: [
                { id: 101, name: "Studio Apartments", description: "Compact living spaces perfect for singles" },
                { id: 102, name: "1 BHK", description: "One bedroom apartments for small families" },
                { id: 103, name: "2 BHK", description: "Two bedroom apartments with more space" },
                { id: 104, name: "3+ BHK", description: "Spacious multi-bedroom apartments for larger families" },
                { id: 105, name: "Penthouses", description: "Luxury apartments on the top floors with premium amenities" }
            ]
        },
        {
            id: 2,
            title: "Independent Houses",
            description: "Explore standalone houses with private spaces and gardens. Ideal for families looking for privacy, space, and the freedom to customize their living environment.",
            icon: "🏠",
            subcategories: [
                { id: 201, name: "Bungalows", description: "Single-story detached houses with garden space" },
                { id: 202, name: "Duplexes", description: "Two-story houses ideal for large families" },
                { id: 203, name: "Row Houses", description: "Connected houses in a series with shared walls" },
                { id: 204, name: "Cottages", description: "Small, cozy houses typically in rural or suburban areas" }
            ]
        },
        {
            id: 3,
            title: "Villas",
            description: "Discover luxury villas with premium amenities, spacious layouts, and exclusive locations. Perfect for those seeking an upscale lifestyle with all modern conveniences.",
            icon: "🏘️",
            subcategories: [
                { id: 301, name: "Luxury Villas", description: "Premium properties with high-end amenities" },
                { id: 302, name: "Beach Villas", description: "Exclusive properties near coastlines" },
                { id: 303, name: "Mountain Villas", description: "Serene properties with scenic mountain views" },
                { id: 304, name: "Golf Estate Villas", description: "Luxury homes adjacent to golf courses" }
            ]
        },
        {
            id: 4,
            title: "Commercial Spaces",
            description: "Find the perfect commercial property for your business needs, from retail spaces and offices to warehouses and industrial units in prime locations.",
            icon: "🏪",
            subcategories: [
                { id: 401, name: "Office Spaces", description: "Professional environments for businesses" },
                { id: 402, name: "Retail Shops", description: "Storefronts in commercial areas" },
                { id: 403, name: "Warehouses", description: "Large storage spaces for inventory" },
                { id: 404, name: "Co-working Spaces", description: "Shared workspaces for professionals and startups" }
            ]
        },
        {
            id: 5,
            title: "PG & Co-living",
            description: "Affordable shared accommodations for students and working professionals with essential amenities and convenient locations near educational and business hubs.",
            icon: "👥",
            subcategories: [
                { id: 501, name: "Student Hostels", description: "Accommodations near educational institutions" },
                { id: 502, name: "Working Professional PGs", description: "Shared living for working individuals" },
                { id: 503, name: "Family PGs", description: "Paying guest accommodations for families" },
                { id: 504, name: "Co-living Spaces", description: "Modern shared living with premium amenities" }
            ]
        },
        {
            id: 6,
            title: "Farmhouses",
            description: "Experience countryside living with our selection of farmhouses located in serene environments. Perfect for weekend getaways or for those seeking a peaceful lifestyle.",
            icon: "🌄",
            subcategories: [
                { id: 601, name: "Weekend Getaways", description: "Properties for short-term recreational stays" },
                { id: 602, name: "Agricultural Farmhouses", description: "Properties with farming capabilities" },
                { id: 603, name: "Luxury Farmhouses", description: "High-end countryside properties with premium amenities" },
                { id: 604, name: "Eco Farms", description: "Sustainable living spaces with natural surroundings" }
            ]
        }
    ];

    const navigateToCategory = (id, title) => {
        // Navigate to the category details page with ID and title as URL parameters
        const formattedTitle = encodeURIComponent(title);
        navigate(`/category/${id}/${formattedTitle}`);
    };

    return (
        <section className="property-types-section section" id="property-types">
            <div className="container">
                <h2 className="section-title">Explore Property Types</h2>
                <div className="property-types-grid">
                    {propertyTypes.map(type => (
                        <div 
                            className="property-type-card" 
                            key={type.id}
                            onClick={() => navigateToCategory(type.id, type.title)}
                        >
                            <div className="property-type-icon">{type.icon}</div>
                            <h3 className="property-type-title">{type.title}</h3>
                            <p className="property-type-description">{type.description}</p>
                            <div className="card-overlay">
                                <span>View {type.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PropertyTypes;