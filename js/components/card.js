// ./js/components/card.js

import React from 'react';


/* bottom of 1.1.4 */
export default function Card(props){
	return (
		<div className="cardMicroManaged">
             <h3>Card {props.num + 1} of {props.len}:</h3>
             <p>{props.proptext}</p>
		</div>
	); // return
}


/*
export default function Card(props) {
    const cardText = `This is card ${(props.listNum * props.cardsToPrint)+ props.cardNum + 1}`;
    console.log(props);
    return (
        <div className="card">
            <p className="card-text">{cardText}</p>
        </div>
    );
}
*/

