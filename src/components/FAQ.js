import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What is PropertyManager End to End Property Management Plan?",
            answer: "PropertyManager's End to End property management is a unique plan crafted to cater to customers looking for a reliable team to manage their property. The plan provides a dedicated property manager who helps you manage your property seamlessly and remotely without any hassle. The plan includes end to end services - Verified tenant search, Rental Agreement, On-time rent collection and transfer, Periodic Home Inspection, Seamless tenant move-in and move-out, home maintenance repair services."
        },
        {
            id: 2,
            question: "How do I keep in touch with PropertyManager while managing my property?",
            answer: "Once we start managing your property, you can always reach out to your dedicated relationship manager on call or via PropertyManager App in case you have any query."
        },
        {
            id: 3,
            question: "How do I get the monthly rent for my property?",
            answer: "The rent is collected by PropertyManager from the tenant and is transferred to your registered bank account. You can track the same in your PropertyManager app."
        },
        {
            id: 4,
            question: "I already have a tenant residing at my property. Can PropertyManager manage my property?",
            answer: "Yes. PropertyManager team can manage your property. We will verify the current tenant background post owner's confirmation and get the rental agreement signed, if required. We will ensure periodic home inspection is conducted and in case the existing tenant vacates, we will initiate the tenant search for you free of cost."
        },
        {
            id: 5,
            question: "What is home inspection and why is it required?",
            answer: "PropertyManager's certified professional conducts a thorough inspection of your property to capture the current status of the property including a detailed inventory list before the tenant moves-in, during his stay at the property and post he vacates the property. A detailed inspection report is shared with you for every inspection and is explained to you in detail by your relationship manager. This way you are always updated about your property condition."
        },
        {
            id: 6,
            question: "What if the tenant found by PropertyManager vacates the property?",
            answer: "In case the tenant decides to vacate the property, we immediately start tenant search (free of cost) for your property. Once the old tenant vacates the property, we conduct a thorough home inspection of the property and compare with the pre-move-in report to ensure required repair, painting, cleaning or maintenance work is done and adjusted from the tenant's security deposit."
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