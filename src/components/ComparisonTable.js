import React from 'react';
import './ComparisonTable.css';

function ComparisonTable() {
    const features = [
        "Professional Photoshoot of the Property",
        "Lifetime Tenant Search",
        "Dedicated Property Manager and FRM",
        "On-time Rent Collection",
        "Rental Agreement",
        "Tenant Background Verification",
        "Periodic Home Inspections",
        "Seamless tenant move-out management",
        "On-demand Home Maintenance Services"
    ];

    return (
        <section className="comparison-section section">
            <div className="container">
                <h2 className="section-title">PropertyManager vs Others: What makes us better?</h2>
                <div className="table-container">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Services</th>
                                <th>
                                    <div className="company-logo">
                                        <span className="logo-text">PropertyManager</span>
                                    </div>
                                </th>
                                <th>Other Property Management Services</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index}>
                                    <td>{feature}</td>
                                    <td><span className="tick">✓</span></td>
                                    <td>
                                        {index < 4 || index > 5 ? (
                                            <span className="cross">✕</span>
                                        ) : (
                                            <span className="tick">✓</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default ComparisonTable;