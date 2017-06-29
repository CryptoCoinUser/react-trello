// ./js/components/card.js

import React from 'react';

export default function Card(props) {
    const cardText = `This is card ${(props.listNum * props.cardsToPrint)+ props.cardNum + 1}`;
    console.log(props);
    return (
        <div className="card">
            <p className="card-text">{cardText}</p>
        </div>
    );
}