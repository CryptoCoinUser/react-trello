// ./js/components/card.js

import React from 'react';

export default function Card() {
    const cardText = 'This is a card';
    return (
        <div className="card">
            <p className="card-text">{cardText}</p>
        </div>
    );
}