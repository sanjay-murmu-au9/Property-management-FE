import React from 'react';
import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Brajesh Kumar",
            location: "UK",
            rating: 5,
            comment: "PropertyManager is truly a genie in the bottle when it comes to renting your apartment. I like to say thanks to my relationship manager & Field RMs who helped me close the deal. From tenant sourcing to finalizing the deal and preparing the final rent agreement, all was taken care by PropertyManager."
        },
        {
            id: 2,
            name: "Naveen Sahay",
            location: "USA",
            rating: 4.5,
            comment: "Really happy with the service! PropertyManager rented out my property in less than a month. The tenants were well screened. They complete the needed repairs quickly while being very proactive in communicating with me. They are always easy to get a hold of and attentive to all my questions."
        },
        {
            id: 3,
            name: "Waman Rayadurg",
            location: "INDIA",
            rating: 5,
            comment: "PropertyManager Team is very prompt and efficient. The best part is that I don't have to worry as they find the tenants quickly, collect the rent on time and take care of all the necessary documentation. PropertyManager is doing a fantastic job in managing my properties."
        }
    ];

    // Function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star full">★</span>);
        }

        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }

        return stars;
    };

    return (
        <section className="testimonials-section section">
            <div className="container">
                <h2 className="section-title">Testimonials</h2>

                <div className="testimonials-container">
                    {testimonials.map(testimonial => (
                        <div className="testimonial-card" key={testimonial.id}>
                            <div className="testimonial-profile">
                                <div className="profile-image">{testimonial.name.charAt(0)}</div>
                                <div className="profile-info">
                                    <h4 className="profile-name">{testimonial.name}</h4>
                                    <p className="profile-location">{testimonial.location}</p>
                                </div>
                            </div>

                            <div className="testimonial-rating">
                                <div className="stars">{renderStars(testimonial.rating)}</div>
                                <div className="rating-number">{testimonial.rating}</div>
                            </div>

                            <p className="testimonial-comment">{testimonial.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
