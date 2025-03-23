import React from 'react';
import './Benefits.css';

function Benefits() {
    const benefits = [
        {
            id: 1,
            icon: "📋",
            title: "Premium Property Listing & Promotion",
            description: "Boost your property's visibility by 3x with targeted, high-quality tenant reach"
        },
        {
            id: 2,
            icon: "🔍",
            title: "Lifetime Tenant Search",
            description: "Enjoy unlimited tenant searches at a negligible cost"
        },
        {
            id: 3,
            icon: "✅",
            title: "Tenant Background Verification",
            description: "Get thorough tenant background checks for secure and reliable occupancy"
        },
        {
            id: 4,
            icon: "📝",
            title: "Free Rental Agreement",
            description: "Get an e-stamped rental agreement delivered to your doorstep"
        },
        {
            id: 5,
            icon: "🏠",
            title: "Periodic Home Inspection",
            description: "Maintain your property's value with scheduled, professional inspections"
        },
        {
            id: 6,
            icon: "🔧",
            title: "On-demand Repair & Maintenance Services",
            description: "Quick, expert repair and maintenance services at your convenience"
        }
    ];

    return (
        <section className="benefits section">
            <div className="container">
                <h2 className="section-title">What's in it for you?</h2>
                <div className="benefits-grid">
                    {benefits.map(benefit => (
                        <div className="benefit-card" key={benefit.id}>
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;