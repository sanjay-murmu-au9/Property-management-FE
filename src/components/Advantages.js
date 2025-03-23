import React from 'react';
import './Advantages.css';

function Advantages() {
    const advantages = [
        {
            id: 1,
            title: "Expertise",
            description: "Our team has extensive property management experience, which ensures that your property is managed by experts. From legal paperwork to handling tenants, we take care of every detail."
        },
        {
            id: 2,
            title: "Efficient Maintenance",
            description: "We ensure timely and efficient maintenance for your property. Our professional team completes repairs and maintenance quickly, preventing long-term damage."
        },
        {
            id: 3,
            title: "Faster Tenant Placement",
            description: "With our extensive network and marketing strategies, we ensure faster tenant placement. Our targeted approach helps find the right tenants quickly, reducing vacancy periods."
        },
        {
            id: 4,
            title: "Maximized Returns",
            description: "Our services are designed to maximize your property returns. From optimizing rent collection to maintaining property value, we ensure you get the best financial benefits."
        }
    ];

    return (
        <section className="advantages-section section">
            <div className="container">
                <h2 className="section-title">Advantages of Property Management by PropertyManager</h2>
                <p className="section-subtitle">
                    PropertyManager offers a hassle-free experience. We handle everything from tenant management to maintenance and rent collection, ensuring that your property is well maintained.
                </p>

                <div className="advantages-grid">
                    {advantages.map(advantage => (
                        <div className="advantage-card" key={advantage.id}>
                            <h3 className="advantage-title">{advantage.title}</h3>
                            <p className="advantage-description">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Advantages;
