import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Sign-Up",
            description: "Start by signing up on our platform. Provide basic details about your property, and our team will guide you through the process."
        },
        {
            id: 2,
            title: "Consultation",
            description: "After signing up, our experts will contact you for a detailed consultation. We will understand your specific needs and create a customized property management plan."
        },
        {
            id: 3,
            title: "Management Begins",
            description: "Once the plan is finalized, we take over. From tenant screening to rent collection and property maintenance, we handle everything efficiently."
        }
    ];

    return (
        <section className="how-it-works-section section">
            <div className="container">
                <h2 className="section-title">How It Works</h2>

                <div className="steps-container">
                    {steps.map(step => (
                        <div className="step-card" key={step.id}>
                            <div className="step-number">{step.id}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-container">
                    <h3 className="cta-text">Ready to get started?</h3>
                    <button className="btn">Sign Up Now</button>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;