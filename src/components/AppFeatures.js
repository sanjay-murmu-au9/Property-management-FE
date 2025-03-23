import React, { useState } from 'react';
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <section className="app-features section" id="app-contact">
            <div className="container">
                <div className="app-features-content">
                    <div className="app-features-section">
                        <h2 className="section-title">Leave the stress behind!</h2>
                        <h3 className="app-subtitle">Manage your property seamlessly with <strong>PrimeProperty App</strong></h3>

                        <div className="features-list">
                            {features.map(feature => (
                                <div className="feature-item" key={feature.id}>
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-title">{feature.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-section">
                        <h2 className="section-title">Get in Touch</h2>
                        <h3 className="section-subtitle">We'd love to hear from you</h3>

                        <div className="simple-contact-form">
                            {submitted ? (
                                <div className="form-success-message">
                                    <p>Thank you for contacting us! We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="simple-form-control">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="simple-form-control">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="simple-form-control">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn contact-btn">Send Message</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppFeatures;