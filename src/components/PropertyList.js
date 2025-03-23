import React from 'react';
import PropertyItem from './PropertyItem';
import './Property.css';

function PropertyList({ properties }) {
    if (!properties || properties.length === 0) {
        return <p>No properties available.</p>;
    }

    return (
        <div className="property-list-container">
            {properties.map((property) => (
                <PropertyItem key={property.id} property={property} />
            ))}
        </div>
    );
}

export default PropertyList;