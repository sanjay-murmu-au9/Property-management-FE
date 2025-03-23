import React from 'react';
import './Services.css';

function Services() {
    const services = [
        {
            id: 1,
            title: "Tenant Management",
            description: "Our tenant management service takes care of all aspects of tenant management, from screening and onboarding to resolving tenant queries. We ensure a seamless landlord-tenant relationship."
        },
        {
            id: 2,
            title: "Rent Collection",
            description: "We manage rent collection on your behalf, ensuring you receive timely payments every month. Our team also manages follow-ups and reminders, so you never have to worry about payment delays."
        },
        {
            id: 3,
            title: "Property Maintenance",
            description: "Our property management team provides regular property maintenance services, including repairs, inspections, and maintenance. We handle all tenant requests and preventive maintenance tasks."
        },
        {
            id: 4,
            title: "Documentation and Legal Assistance",
            description: "We offer complete documentation and legal support for rental agreements, tenant contracts, and more. We ensure all paperwork is legally compliant and handle any legal queries."
        },
        {
            id: 5,
            title: "Tenant Exit Management",
            description: "We manage tenant move-outs efficiently, ensuring the property is returned in good condition. Our team handles inspections, documentation, and security deposit settlement."
        },
        {
            id: 6,
            title: "Online Dashboard",
            description: "Our user-friendly online dashboard gives you real-time access to all property-related updates. Track rent payments, maintenance requests, tenant details, and more, all in one place."
        }
    ];

    return (
        <section className="services-section section" id="services">
            <div className="container">
                <h2 className="section-title">Our Key Property Management Services</h2>
                <div className="services-grid">
                    {services.map(service => (
                        <div className="service-card" key={service.id}>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;