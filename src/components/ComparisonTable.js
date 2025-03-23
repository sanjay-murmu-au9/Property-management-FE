import React from 'react';
import './ComparisonTable.css';

function PricingPlans({ onSignupClick }) {
    const plans = [
        {
            title: "Basic",
            price: "Free",
            features: [
                { text: "Browse all properties", included: true },
                { text: "Basic search filters", included: true },
                { text: "Save up to 5 favorite properties", included: true },
                { text: "Email notifications for new properties", included: false },
                { text: "Direct contact with property owners", included: false },
                { text: "Advanced search filters", included: false },
                { text: "Virtual property tours", included: false }
            ]
        },
        {
            title: "Premium",
            price: "₹499/month",
            featured: true,
            features: [
                { text: "Browse all properties", included: true },
                { text: "Basic search filters", included: true },
                { text: "Unlimited favorite properties", included: true },
                { text: "Email notifications for new properties", included: true },
                { text: "Direct contact with property owners", included: true },
                { text: "Advanced search filters", included: true },
                { text: "Virtual property tours", included: true }
            ]
        },
        {
            title: "Business",
            price: "₹999/month",
            features: [
                { text: "All Premium features", included: true },
                { text: "Multiple user accounts", included: true },
                { text: "Property analytics", included: true },
                { text: "Bulk property inquiries", included: true },
                { text: "API access", included: true },
                { text: "Dedicated account manager", included: true },
                { text: "Custom branding", included: true }
            ]
        }
    ];

    return (
        <section className="pricing-plans-section section" id="pricing">
            <div className="container">
                <h2 className="section-title">Choose Your Plan</h2>
                <p className="section-subtitle">Find the perfect plan for your property search needs</p>

                <div className="pricing-cards">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                            {plan.featured && <div className="featured-label">Most Popular</div>}
                            <h3 className="plan-name">{plan.title}</h3>
                            <div className="plan-price">{plan.price}</div>

                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={feature.included ? 'included' : 'excluded'}>
                                        <span className="feature-icon">{feature.included ? '✓' : '✕'}</span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="plan-button"
                                onClick={onSignupClick}
                            >
                                {plan.title === "Basic" ? "Sign Up Free" : "Get Started"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PricingPlans;