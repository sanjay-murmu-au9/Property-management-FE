import React from 'react';
import './Property.css';

function PropertyItem({ property }) {
    return (
        <div className="property-item">
            <h3>{property.title}</h3>
            <p>{property.address}</p>
            <div className="property-details">
                <span>Price: {property.price}</span>
                <span>Type: {property.type}</span>
            </div>
        </div>
    );
}

export default PropertyItem;