import React from 'react';
import './AppFeatures.css';

function AppFeatures() {
    const features = [
        {
            id: 1,
            icon: "📱",
            title: "Access a detailed record of all your payments"
        },
        {
            id: 2,
            icon: "💬",
            title: "Instantly connect with your dedicated Relationship Manager"
        },
        {
            id: 3,
            icon: "🔔",
            title: "Raise service tickets for fast and efficient support"
        }
    ];

    return (
        <section className="app-features section">
            <div className="container">
                <div className="app-features-content">
                    <div className="app-features-text">
                        <h2 className="section-title">Leave the stress behind!</h2>
                        <h3 className="app-subtitle">Manage your property seamlessly with <strong>PropertyManager App</strong></h3>

                        <div className="features-list">
                            {features.map(feature => (
                                <div className="feature-item" key={feature.id}>
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-title">{feature.title}</div>
                                </div>
                            ))}
                        </div>

                        <div className="app-download">
                            <button className="btn">Download App</button>
                        </div>
                    </div>

                    <div className="app-image">
                        <img src="https://via.placeholder.com/300x600" alt="PropertyManager App" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppFeatures;