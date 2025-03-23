import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What services does PrimeProperty offer to home seekers?",
            answer: "PrimeProperty offers a comprehensive platform for anyone looking to rent or purchase property. Our services include access to thousands of verified property listings, dedicated property specialists to help with your search, virtual property tours, assistance with paperwork and documentation, and flexible viewing appointments to suit your schedule."
        },
        {
            id: 2,
            question: "How does PrimeProperty verify property listings?",
            answer: "All properties on our platform undergo a thorough verification process. Our team physically visits each property, verifies ownership documents, checks for any legal issues, and ensures all amenities listed are accurate. This gives you peace of mind that every property you view on our platform is legitimate and as described."
        },
        {
            id: 3,
            question: "Can I search for properties in specific locations or with specific amenities?",
            answer: "Absolutely! Our advanced search filters allow you to narrow down properties by location, price range, property type, number of bedrooms, amenities (like parking, gym, swimming pool, etc.), and many other criteria. This helps you find properties that match your exact requirements."
        },
        {
            id: 4,
            question: "How do I schedule a property viewing?",
            answer: "You can schedule a viewing directly through our platform by selecting a property and clicking on 'Schedule a Viewing'. You can choose from available time slots or request a custom time. Our property specialists will confirm your appointment and accompany you during the viewing to answer any questions about the property."
        },
        {
            id: 5,
            question: "What assistance does PrimeProperty provide during the rental/purchase process?",
            answer: "We provide end-to-end support throughout your journey. This includes help with negotiating terms, document verification, paperwork completion, and coordination between all parties involved. For rentals, we assist with lease agreements, and for purchases, we guide you through the buying process, including connecting you with legal and financial advisors if needed."
        },
        {
            id: 6,
            question: "Are there any fees for using PrimeProperty's services?",
            answer: "Basic property searching and viewing is completely free for home seekers. For premium services like priority access to new listings, dedicated relationship managers, and comprehensive moving assistance, we offer affordable subscription plans tailored to different needs. Check our Pricing section for detailed information on our service packages."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section section">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={faq.id}>
                            <button
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.question}
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;