import React, { useState } from 'react';
import './Contact.css';

function Contact() {
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
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        // Show success message
        setSubmitted(true);
        // Reset form after 3 seconds
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
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">We'd love to hear from you</p>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">📱</div>
                                <div className="method-details">
                                    <h3>Call Us</h3>
                                    <p>+91 9876543210</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">✉️</div>
                                <div className="method-details">
                                    <h3>Email Us</h3>
                                    <p>info@primeproperty.com</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">📍</div>
                                <div className="method-details">
                                    <h3>Visit Us</h3>
                                    <p>123 Property Lane, Mumbai</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-button">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;