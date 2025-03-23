import React from 'react';
import './Stats.css';

function Stats() {
    const stats = [
        {
            id: 1,
            icon: "🏢",
            count: "10,000+",
            label: "Properties Managed"
        },
        {
            id: 2,
            icon: "👥",
            count: "5,000+",
            label: "NRI Property Owners"
        },
        {
            id: 3,
            icon: "🌎",
            count: "50+",
            label: "Countries Served"
        }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-container">
                    {stats.map(stat => (
                        <div className="stat-item" key={stat.id}>
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-count">{stat.count}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;